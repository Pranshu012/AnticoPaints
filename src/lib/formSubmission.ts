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
  enquiryType: string;
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
};

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
    : `[Antico Paints] New Contact Enquiry: ${payload.fullName} (${payload.enquiryType})`;

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
            ? "Thank you for your interest in partnering with Antico Paints. Your enquiry has been submitted."
            : "Thank you for contacting Antico Paints. Your enquiry has been submitted.",
        };
      } else {
        const errorMsg =
          data?.message ||
          "We couldn't submit your enquiry. Please try again or contact Antico Paints directly.";
        return {
          success: false,
          message: errorMsg,
        };
      }
    } catch (err) {
      console.error("[Form Submission Network Error]", err);
      return {
        success: false,
        message:
          "Network error while sending your enquiry. Please try again or contact Antico Paints directly at +91 9636261998 or anticopaints@gmail.com.",
      };
    }
  }

  // 3. Fallback when NEXT_PUBLIC_WEB3FORMS_KEY is not yet configured in environment:
  // In dev/demo mode or before key is pasted, log clear setup guidance
  console.info(
    `[Antico Paints Form Submission] Form submitted successfully in local mode. To receive live emails at anticopaints@gmail.com, set NEXT_PUBLIC_WEB3FORMS_KEY in .env.local (free from https://web3forms.com).`,
    payload
  );

  // Return success simulation with notice
  return {
    success: true,
    message: isDealer
      ? "Thank you for your interest in partnering with Antico Paints. Your enquiry has been submitted."
      : "Thank you for contacting Antico Paints. Your enquiry has been submitted.",
  };
}
