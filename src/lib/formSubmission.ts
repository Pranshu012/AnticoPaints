/**
 * Form submission handler for static hosting (Cloudflare Pages).
 * Configured for Web3Forms or custom form service endpoints.
 * All submissions route to anticopaints@gmail.com.
 */

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
  const subject = isDealer
    ? `[Dealership Enquiry] ${payload.fullName} - ${(payload as DealerFormPayload).city}`
    : `[Contact Enquiry] ${payload.fullName}`;

  let body = `Antico Paints Enquiry Details:\n\n`;
  body += `Full Name: ${payload.fullName}\n`;
  body += `Mobile Number: ${payload.mobileNumber}\n`;
  if (payload.email) body += `Email: ${payload.email}\n`;

  if (isDealer) {
    const d = payload as DealerFormPayload;
    if (d.businessName) body += `Business/Shop Name: ${d.businessName}\n`;
    body += `Business Type: ${d.businessType}\n`;
    body += `City/Town: ${d.city}\n`;
    body += `PIN Code: ${d.pincode}\n`;
    if (d.message) body += `\nBusiness Details/Message:\n${d.message}\n`;
  } else {
    body += `\nMessage/Requirement:\n${payload.message}\n`;
  }

  return `mailto:anticopaints@gmail.com?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export async function submitEnquiry(
  payload: ContactFormPayload | DealerFormPayload
): Promise<SubmissionResult> {
  // 1. Check honeypot for spam detection
  if (payload.botcheck && payload.botcheck.trim() !== "") {
    // If bot filled the hidden honeypot, reject silently
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
  const mailtoUrl = generateMailtoUrl(payload);

  // If a provider endpoint or key is configured
  if (accessKey || customEndpoint) {
    const endpoint =
      customEndpoint ||
      (accessKey.startsWith("https://")
        ? accessKey
        : "https://api.web3forms.com/submit");

    try {
      // Format Indian Standard Time (IST) timestamp
      const submissionDate = new Intl.DateTimeFormat("en-IN", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Asia/Kolkata",
      }).format(new Date());

      // Format strictly 10-digit Indian phone number
      let digits10 = payload.mobileNumber.replace(/\D/g, "");
      if (digits10.length === 12 && digits10.startsWith("91")) {
        digits10 = digits10.slice(2);
      } else if (digits10.length === 11 && digits10.startsWith("0")) {
        digits10 = digits10.slice(1);
      }
      digits10 = digits10.slice(0, 10);

      const formattedPhone = digits10.length === 10 ? `+91 ${digits10}` : payload.mobileNumber.trim();
      const waLink = digits10.length === 10 ? `https://wa.me/91${digits10}` : undefined;
      const telLink = digits10.length === 10 ? `tel:+91${digits10}` : `tel:${payload.mobileNumber.trim()}`;

      let requestBody: Record<string, any>;

      if (isDealer) {
        const d = payload as DealerFormPayload;
        const applicantName = d.fullName.trim().slice(0, 80);
        const city = d.city.trim().slice(0, 60);

        requestBody = {
          access_key: accessKey,
          subject: `[Antico Paints] 🤝 Dealership Application — ${applicantName} (${city})`,
          from_name: "Antico Paints Website",
          "Enquiry Category": "Dealership & Distribution Partner Application",
          "Applicant Name": applicantName,
          "Mobile Number": formattedPhone,
          "Email Address": d.email?.trim().slice(0, 100) || "Not provided",
          "Business / Shop Name": d.businessName?.trim().slice(0, 100) || "Not specified",
          "Business Type": d.businessType,
          "City / Town": city,
          "PIN Code": d.pincode.trim().slice(0, 6),
          "Business Details / Note": d.message?.trim().slice(0, 1000) || "No additional note provided",
          "Click to Call": telLink,
          ...(waLink ? { "Click to WhatsApp": waLink } : {}),
          "Submission Date & Time": `${submissionDate} (IST)`,
        };
      } else {
        const c = payload as ContactFormPayload;
        const customerName = c.fullName.trim().slice(0, 80);
        const category = c.enquiryType?.trim() || "General Customer Enquiry";

        requestBody = {
          access_key: accessKey,
          subject: `[Antico Paints] 📩 New Contact Enquiry — ${customerName}`,
          from_name: "Antico Paints Website",
          "Enquiry Category": category,
          "Customer Name": customerName,
          "Mobile Number": formattedPhone,
          "Email Address": c.email?.trim().slice(0, 100) || "Not provided",
          "Message / Requirement": c.message.trim().slice(0, 1000),
          "Click to Call": telLink,
          ...(waLink ? { "Click to WhatsApp": waLink } : {}),
          "Submission Date & Time": `${submissionDate} (IST)`,
        };
      }

      // If customer provided an email address, configure Reply-To so replying hits their email directly
      if (payload.email && payload.email.trim()) {
        requestBody.replyto = payload.email.trim();
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
