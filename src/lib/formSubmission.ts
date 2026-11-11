/**
 * Form submission handler for static hosting (Cloudflare Pages).
 * Configured for Web3Forms or custom form service endpoints.
 * All submissions route to anticopaints@gmail.com.
 */

import {
  generateEnquiryEmailHtml,
  generateEnquiryEmailText,
  normalizePhoneForWhatsApp,
} from "./emailTemplates";

export interface ContactFormPayload {
  formType: "general_contact";
  fullName: string;
  mobileNumber: string;
  email?: string;
  enquiryType?: string;
  message: string;
  consent: boolean;
  botcheck?: string; // Honeypot field for spam prevention
}

export interface DealerFormPayload {
  formType: "dealer_application";
  fullName: string;
  mobileNumber: string;
  email?: string;
  businessName?: string;
  businessType: string;
  city: string;
  pincode: string;
  message?: string;
  consent: boolean;
  botcheck?: string; // Honeypot field for spam prevention
}

export type SubmissionResult = {
  success: boolean;
  message: string;
  mailtoUrl?: string;
  isFallback?: boolean;
};

/**
 * Builds a clean pre-filled mailto URL for direct email dispatch to anticopaints@gmail.com
 */
export function generateMailtoUrl(
  payload: ContactFormPayload | DealerFormPayload
): string {
  const isDealer = payload.formType === "dealer_application";
  const d = isDealer ? (payload as DealerFormPayload) : null;
  const subject = isDealer
    ? `Dealership Application: ${payload.fullName} (${d?.city || "New Partner"})`
    : `Customer Inquiry: ${payload.fullName}`;

  const body = generateEnquiryEmailText(payload);

  return `mailto:anticopaints@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export async function submitEnquiry(
  payload: ContactFormPayload | DealerFormPayload
): Promise<SubmissionResult> {
  // 1. Check honeypot for spam detection
  if (payload.botcheck) {
    return {
      success: false,
      message: "Spam submission detected. Please refresh and try again.",
    };
  }

  // 2. Identify target endpoint and access key
  const accessKey =
    process.env.NEXT_PUBLIC_WEB3FORMS_KEY ||
    process.env.NEXT_PUBLIC_FORMSPREE_KEY ||
    "";
  const customEndpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

  const isDealer = payload.formType === "dealer_application";
  const dealerPayload = isDealer ? (payload as DealerFormPayload) : null;
  const contactPayload = !isDealer ? (payload as ContactFormPayload) : null;

  // Clean, professional subject line without awkward brackets
  const subject = isDealer
    ? `New Dealership Application: ${payload.fullName.trim()} (${dealerPayload?.city.trim() || "India"})`
    : `New Customer Inquiry: ${payload.fullName.trim()}${contactPayload?.enquiryType ? ` (${contactPayload.enquiryType})` : ""}`;

  const mailtoUrl = generateMailtoUrl(payload);

  // If a provider endpoint or key is configured
  if (accessKey || customEndpoint) {
    const endpoint =
      customEndpoint ||
      (accessKey.startsWith("https://")
        ? accessKey
        : "https://api.web3forms.com/submit");

    try {
      const formattedTimestamp =
        new Date().toLocaleString("en-IN", {
          timeZone: "Asia/Kolkata",
          dateStyle: "medium",
          timeStyle: "short",
        }) + " IST";

      // Generate both premium CRM-grade HTML and plain-text templates
      const emailHtml = generateEnquiryEmailHtml(payload);
      const emailText = generateEnquiryEmailText(payload);

      const rawPhone = payload.mobileNumber.trim();
      const telPhone = rawPhone.replace(/[^\d+]/g, "");
      const waNumber = normalizePhoneForWhatsApp(rawPhone);

      // Build clean, human-readable fields so the resulting email has zero technical noise or duplication
      const requestBody: Record<string, any> = {
        access_key: accessKey,
        subject,
        from_name: "Antico Paints Leads",
        // Standard HTML and text payloads for custom endpoints / modern form backends
        html: emailHtml,
        text: emailText,
      };

      // Set reply-to header so hitting "Reply" in your email client answers the customer directly
      if (payload.email && payload.email.trim()) {
        requestBody.replyto = payload.email.trim();
      }

      if (isDealer && dealerPayload) {
        requestBody["Inquiry Type"] = "🤝 Dealership Application";
        requestBody["Applicant Name"] = dealerPayload.fullName.trim();
        requestBody["Mobile / WhatsApp"] = dealerPayload.mobileNumber.trim();
        if (dealerPayload.email && dealerPayload.email.trim()) {
          requestBody["Email Address"] = dealerPayload.email.trim();
        }
        requestBody["City / Town"] = dealerPayload.city.trim();
        requestBody["PIN Code"] = dealerPayload.pincode.trim();
        requestBody["Firm / Shop Name"] =
          dealerPayload.businessName?.trim() || "New Venture / Counter";
        requestBody["Business Background"] = dealerPayload.businessType;
        if (dealerPayload.message && dealerPayload.message.trim()) {
          requestBody["Requirement / Message"] = dealerPayload.message.trim();
        }
        // Quick Actions directly accessible
        requestBody["Call Customer"] = `tel:${telPhone}`;
        if (waNumber) {
          requestBody["WhatsApp Customer"] = `https://wa.me/${waNumber}`;
        }
        if (dealerPayload.email && dealerPayload.email.trim()) {
          requestBody["Reply by Email"] = `mailto:${dealerPayload.email.trim()}`;
        }
        requestBody["Submitted On"] = formattedTimestamp;
      } else if (contactPayload) {
        requestBody["Inquiry Type"] = "📩 Customer Website Inquiry";
        requestBody["Customer Name"] = contactPayload.fullName.trim();
        requestBody["Mobile / WhatsApp"] = contactPayload.mobileNumber.trim();
        if (contactPayload.email && contactPayload.email.trim()) {
          requestBody["Email Address"] = contactPayload.email.trim();
        }
        if (contactPayload.enquiryType) {
          requestBody["Topic / Area"] = contactPayload.enquiryType;
        }
        requestBody["Message / Details"] = contactPayload.message.trim();
        // Quick Actions directly accessible
        requestBody["Call Customer"] = `tel:${telPhone}`;
        if (waNumber) {
          requestBody["WhatsApp Customer"] = `https://wa.me/${waNumber}`;
        }
        if (contactPayload.email && contactPayload.email.trim()) {
          requestBody["Reply by Email"] = `mailto:${contactPayload.email.trim()}`;
        }
        requestBody["Submitted On"] = formattedTimestamp;
      }

      // Spam honeypot
      if (payload.botcheck) {
        requestBody.botcheck = payload.botcheck;
      }

      // Only pass custom to_email if a custom backend endpoint is specified
      if (customEndpoint) {
        requestBody.to_email = "anticopaints@gmail.com";
      }

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json().catch(() => null);

      if (response.ok && (data?.success || data?.ok !== false)) {
        return {
          success: true,
          message: isDealer
            ? "Thank you for your interest in partnering with Antico Paints. Your dealership enquiry has been received by our commercial team."
            : "Thank you for contacting Antico Paints. Your message has been received by our support team.",
          mailtoUrl,
        };
      } else {
        const errorMsg =
          data?.message ||
          "We couldn't submit your enquiry automatically. Please send directly via email.";
        return {
          success: false,
          message: errorMsg,
          mailtoUrl,
        };
      }
    } catch (err) {
      console.error("[Form Submission Network Error]", err);
      return {
        success: false,
        message:
          "Network error while sending your enquiry. Please use the direct email link below or call +91 8000642900.",
        mailtoUrl,
      };
    }
  }

  // 3. Fallback when NEXT_PUBLIC_WEB3FORMS_KEY is not yet configured:
  return {
    success: true,
    message: isDealer
      ? "Thank you for your interest in partnering with Antico Paints. Your dealership enquiry has been registered."
      : "Thank you for contacting Antico Paints. Your enquiry has been registered.",
    mailtoUrl,
    isFallback: true,
  };
}
