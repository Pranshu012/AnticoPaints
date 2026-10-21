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
  if (payload.botcheck) {
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
  const subject = isDealer
    ? `[Antico Paints] New Dealership Enquiry: ${payload.fullName} (${(payload as DealerFormPayload).city})`
    : `[Antico Paints] New Contact Enquiry: ${payload.fullName}${payload.enquiryType ? ` (${payload.enquiryType})` : ""}`;

  const mailtoUrl = generateMailtoUrl(payload);

  // If a provider endpoint or key is configured
  if (accessKey || customEndpoint) {
    const endpoint =
      customEndpoint ||
      (accessKey.startsWith("https://")
        ? accessKey
        : "https://api.web3forms.com/submit");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          subject,
          from_name: "Antico Paints Website",
          to_email: "anticopaints@gmail.com",
          ...payload,
        }),
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
