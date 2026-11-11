/**
 * Form submission handler for static hosting (Cloudflare Pages).
 * Configured for Web3Forms or custom form service endpoints.
 * All submissions route to anticopaints@gmail.com.
 */

import {
  generateEnquiryEmailHtml,
  generateEnquiryEmailText,
  normalizePhoneForWhatsApp,
  formatPhoneForDisplay,
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

      const displayPhone = formatPhoneForDisplay(rawPhone);
      const email = payload.email?.trim() || "";
      const inquiryType = isDealer
        ? "Dealership Application"
        : contactPayload?.enquiryType || "Customer Contact Enquiry";

      // Build structured, compact CRM notification content without oversized text, excessive padding, or emojis
      let crmBody = `YOU'VE RECEIVED A NEW ENQUIRY!\n`;
      crmBody += `Someone has submitted the contact form on your website. Here are the details:\n\n`;
      crmBody += `--------------------------------------------------\n`;
      crmBody += `CUSTOMER INFORMATION\n`;
      crmBody += `--------------------------------------------------\n`;
      crmBody += `Inquiry Type:       ${inquiryType}\n`;
      crmBody += `Customer Name:      ${payload.fullName.trim()}\n`;
      crmBody += `Phone Number:       ${displayPhone}\n`;
      if (email) {
        crmBody += `Email Address:      ${email}\n`;
      }
      if (isDealer && dealerPayload) {
        crmBody += `City / Town:        ${dealerPayload.city.trim()}${dealerPayload.pincode ? ` (PIN: ${dealerPayload.pincode.trim()})` : ""}\n`;
        crmBody += `Firm / Shop Name:   ${dealerPayload.businessName?.trim() || "New Venture / Counter"}\n`;
        crmBody += `Business Profile:   ${dealerPayload.businessType}\n`;
      }

      const userNote = isDealer
        ? dealerPayload?.message?.trim()
        : contactPayload?.message?.trim();
      if (userNote) {
        crmBody += `\n--------------------------------------------------\n`;
        crmBody += `MESSAGE / DETAILS\n`;
        crmBody += `--------------------------------------------------\n`;
        crmBody += `${userNote}\n`;
      }

      crmBody += `\n--------------------------------------------------\n`;
      crmBody += `QUICK ACTIONS\n`;
      crmBody += `--------------------------------------------------\n`;
      crmBody += `Call Customer:      tel:${telPhone}\n`;
      if (waNumber) {
        crmBody += `WhatsApp Chat:      https://wa.me/${waNumber}\n`;
      }
      if (email) {
        crmBody += `Reply by Email:     mailto:${email}\n`;
      }

      crmBody += `\n--------------------------------------------------\n`;
      crmBody += `SUBMISSION DETAILS\n`;
      crmBody += `Submitted on:       ${formattedTimestamp}\n`;
      crmBody += `Source:             Website Contact Form\n`;
      crmBody += `--------------------------------------------------\n`;
      crmBody += `This is an automated notification from Antico Paints website.`;

      // Clean request body using standard form fields to ensure 100% reliable delivery
      const requestBody: Record<string, any> = {
        access_key: accessKey,
        subject,
        from_name: "Antico Paints Leads",
        name: payload.fullName.trim(),
        phone: displayPhone,
        message: crmBody,
      };

      // Set reply-to header so hitting "Reply" in your email client answers the customer directly
      if (email) {
        requestBody.email = email;
        requestBody.replyto = email;
      }

      // Spam honeypot
      if (payload.botcheck) {
        requestBody.botcheck = payload.botcheck;
      }

      // Only pass custom html/text/to_email if a custom backend endpoint is specified (not Web3Forms free tier)
      if (customEndpoint) {
        requestBody.html = emailHtml;
        requestBody.text = emailText;
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
