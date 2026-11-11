/**
 * Premium Email Notification Templates for Antico Paints
 * Generates email-safe HTML (CRM-style) and plain-text email alternatives
 * for website contact enquiries and dealership applications.
 */

import { ContactFormPayload, DealerFormPayload } from "./formSubmission";

export interface EmailTemplateOptions {
  companyName?: string;
  websiteUrl?: string;
  supportPhone?: string;
  supportEmail?: string;
  submittedAt?: Date | string;
}

const DEFAULT_OPTIONS: Required<EmailTemplateOptions> = {
  companyName: "Antico Paints",
  websiteUrl: "https://pranshu012.github.io/AnticoPaints/",
  supportPhone: "+91 8000642900",
  supportEmail: "anticopaints@gmail.com",
  submittedAt: "",
};

/**
 * Escapes unsafe characters for HTML output to prevent injection attacks
 */
export function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Normalizes phone numbers to standard WhatsApp-friendly digits (without + or leading 0s)
 */
export function normalizePhoneForWhatsApp(phone: string): string | null {
  if (!phone) return null;
  const digits = phone.replace(/\D/g, "");
  if (!digits) return null;

  // 10-digit Indian mobile number
  if (digits.length === 10) {
    return `91${digits}`;
  }
  // 11-digit mobile starting with 0
  if (digits.length === 11 && digits.startsWith("0")) {
    return `91${digits.slice(1)}`;
  }
  // 12-digit mobile starting with 91
  if (digits.length === 12 && digits.startsWith("91")) {
    return digits;
  }
  // Generic international with 10+ digits
  if (digits.length >= 10 && digits.length <= 15) {
    return digits;
  }
  return null;
}

/**
 * Formats a phone number for user-friendly display
 */
export function formatPhoneForDisplay(phone: string): string {
  if (!phone) return "";
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) {
    return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`;
  }
  if (digits.length === 11 && digits.startsWith("0")) {
    return `+91 ${digits.slice(1, 6)} ${digits.slice(6)}`;
  }
  if (digits.length === 12 && digits.startsWith("91")) {
    return `+91 ${digits.slice(2, 7)} ${digits.slice(7)}`;
  }
  return phone.trim();
}

/**
 * Formats submission timestamp with Asia/Kolkata timezone
 */
export function formatSubmissionTimestamp(dateInput?: Date | string): string {
  const date = dateInput
    ? typeof dateInput === "string"
      ? new Date(dateInput)
      : dateInput
    : new Date();

  return (
    new Intl.DateTimeFormat("en-IN", {
      timeZone: "Asia/Kolkata",
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    }).format(date) + " IST"
  );
}

/**
 * Generates a CRM-grade, email-safe HTML notification template
 */
export function generateEnquiryEmailHtml(
  payload: ContactFormPayload | DealerFormPayload,
  userOptions?: EmailTemplateOptions
): string {
  const options = { ...DEFAULT_OPTIONS, ...userOptions };
  const isDealer = payload.formType === "dealer_application";
  const dealerPayload = isDealer ? (payload as DealerFormPayload) : null;
  const contactPayload = !isDealer ? (payload as ContactFormPayload) : null;

  const customerName = escapeHtml(payload.fullName.trim());
  const rawPhone = payload.mobileNumber.trim();
  const displayPhone = escapeHtml(formatPhoneForDisplay(rawPhone));
  const telPhone = rawPhone.replace(/[^\d+]/g, "");
  const waNumber = normalizePhoneForWhatsApp(rawPhone);

  const rawEmail = payload.email?.trim() || "";
  const emailEscaped = rawEmail ? escapeHtml(rawEmail) : "";

  const inquiryType = isDealer
    ? "Dealership Application"
    : contactPayload?.enquiryType
    ? escapeHtml(contactPayload.enquiryType)
    : "Customer Contact Enquiry";

  const messageText = isDealer
    ? dealerPayload?.message?.trim() || ""
    : contactPayload?.message?.trim() || "";

  const formattedMessage = messageText
    ? escapeHtml(messageText).replace(/\n/g, "<br>")
    : "";

  const formattedDate = formatSubmissionTimestamp(options.submittedAt);

  // WhatsApp click-to-chat URL with pre-filled greeting
  const waGreeting = encodeURIComponent(
    `Hello ${payload.fullName.trim()}, thank you for reaching out to ${options.companyName}.`
  );
  const waUrl = waNumber ? `https://wa.me/${waNumber}?text=${waGreeting}` : "";

  // Email action links
  const replySubject = encodeURIComponent(
    `Re: ${isDealer ? "Dealership Application" : "Enquiry"} - ${options.companyName}`
  );
  const mailtoUrl = rawEmail
    ? `mailto:${rawEmail}?subject=${replySubject}`
    : "";

  return `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="format-detection" content="telephone=no, date=no, address=no, email=no" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>New Enquiry Received - ${escapeHtml(options.companyName)}</title>
  <style type="text/css">
    body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
    table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
    img { -ms-interpolation-mode: bicubic; border: 0; outline: none; text-decoration: none; }
    body { margin: 0; padding: 0; width: 100% !important; background-color: #F8F7F4; }
    a[x-apple-data-detectors] { color: inherit !important; text-decoration: none !important; font-size: inherit !important; font-family: inherit !important; font-weight: inherit !important; line-height: inherit !important; }
    
    @media screen and (max-width: 600px) {
      .email-container { width: 100% !important; max-width: 100% !important; }
      .content-padding { padding-left: 20px !important; padding-right: 20px !important; }
      .header-padding { padding: 20px 20px 16px 20px !important; }
      .action-stack { display: block !important; width: 100% !important; margin-bottom: 8px !important; }
      .action-stack table { width: 100% !important; }
      .badge-cell { text-align: left !important; padding-top: 10px !important; display: block !important; }
      .header-title-cell { display: block !important; }
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #F8F7F4; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; color: #111111;">
  <!-- Centering Outer Wrapper -->
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #F8F7F4; margin: 0; padding: 32px 12px;">
    <tr>
      <td align="center" valign="top">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="width: 600px;">
        <tr>
        <td align="center" valign="top">
        <![endif]-->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" class="email-container" style="max-width: 600px; width: 100%; margin: 0 auto; background-color: #FFFFFF; border: 1px solid #EAE6DF; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 16px rgba(17, 17, 17, 0.04);">
          
          <!-- Top Brand Accent Strip -->
          <tr>
            <td height="4" style="height: 4px; background: linear-gradient(90deg, #111111 0%, #BA8208 50%, #E5A93C 100%); line-height: 4px; font-size: 4px;">&nbsp;</td>
          </tr>

          <!-- 1. Email Header -->
          <tr>
            <td class="header-padding" style="padding: 28px 36px 20px 36px; border-bottom: 1px solid #F2EEE9;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td valign="middle" class="header-title-cell">
                    <span style="font-size: 19px; font-weight: 800; letter-spacing: 0.14em; color: #111111; text-transform: uppercase; font-family: 'Cinzel', -apple-system, BlinkMacSystemFont, 'Segoe UI', Georgia, serif; line-height: 1.2; display: inline-block;">
                      ${escapeHtml(options.companyName.toUpperCase())}
                    </span>
                    <br />
                    <span style="font-size: 11px; font-weight: 500; letter-spacing: 0.08em; color: #737373; text-transform: uppercase; display: inline-block; margin-top: 2px;">
                      Architectural Finishes
                    </span>
                  </td>
                  <td align="right" valign="middle" class="badge-cell">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="display: inline-block;">
                      <tr>
                        <td style="background-color: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 9999px; padding: 6px 14px; font-size: 12px; font-weight: 600; color: #166534; white-space: nowrap;">
                          <span style="display: inline-block; width: 7px; height: 7px; background-color: #22C55E; border-radius: 50%; margin-right: 6px; vertical-align: middle;"></span>
                          New Enquiry Received
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 2. Main Heading -->
          <tr>
            <td class="content-padding" style="padding: 28px 36px 12px 36px;">
              <h1 style="margin: 0 0 8px 0; font-size: 22px; font-weight: 700; color: #111111; line-height: 1.35; letter-spacing: -0.01em;">
                You&rsquo;ve received a new enquiry!
              </h1>
              <p style="margin: 0; font-size: 14px; color: #52525B; line-height: 1.55;">
                Someone has submitted the contact form on your website. Here are the details.
              </p>
            </td>
          </tr>

          <!-- 3. Customer Information Section (Structured Card) -->
          <tr>
            <td class="content-padding" style="padding: 16px 36px 24px 36px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #FAFAFA; border: 1px solid #EAE6DF; border-radius: 10px; overflow: hidden;">
                <tr>
                  <td style="padding: 22px 24px;">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                      
                      <!-- Field: Inquiry Type -->
                      <tr>
                        <td valign="top" style="padding-bottom: 16px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                            Inquiry Type
                          </div>
                          <div style="font-size: 15px; font-weight: 600; color: #111111;">
                            ${inquiryType}
                          </div>
                        </td>
                      </tr>

                      <!-- Field: Customer Name -->
                      <tr>
                        <td valign="top" style="padding-bottom: 16px; border-top: 1px solid #F0EEE9; padding-top: 14px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                            Customer Name
                          </div>
                          <div style="font-size: 15px; font-weight: 600; color: #111111;">
                            ${customerName}
                          </div>
                        </td>
                      </tr>

                      <!-- Field: Mobile / WhatsApp Number -->
                      <tr>
                        <td valign="top" style="padding-bottom: 16px; border-top: 1px solid #F0EEE9; padding-top: 14px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                            Mobile / WhatsApp Number
                          </div>
                          <div style="font-size: 15px; font-weight: 600; color: #111111;">
                            <a href="tel:${telPhone}" style="color: #111111; text-decoration: none;">
                              ${displayPhone}
                            </a>
                          </div>
                        </td>
                      </tr>

                      ${
                        emailEscaped
                          ? `<!-- Field: Email Address -->
                      <tr>
                        <td valign="top" style="padding-bottom: 16px; border-top: 1px solid #F0EEE9; padding-top: 14px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                            Email Address
                          </div>
                          <div style="font-size: 14px; font-weight: 500; color: #111111; word-break: break-all;">
                            <a href="mailto:${emailEscaped}" style="color: #111111; text-decoration: underline;">
                              ${emailEscaped}
                            </a>
                          </div>
                        </td>
                      </tr>`
                          : ""
                      }

                      ${
                        isDealer && dealerPayload
                          ? `<!-- Dealer Details: Location & Shop -->
                      <tr>
                        <td valign="top" style="padding-bottom: 16px; border-top: 1px solid #F0EEE9; padding-top: 14px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                            Location &amp; Pincode
                          </div>
                          <div style="font-size: 14px; font-weight: 500; color: #111111;">
                            ${escapeHtml(dealerPayload.city.trim())}${dealerPayload.pincode ? ` (PIN: ${escapeHtml(dealerPayload.pincode.trim())})` : ""}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td valign="top" style="padding-bottom: 16px; border-top: 1px solid #F0EEE9; padding-top: 14px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
                            Firm / Business Profile
                          </div>
                          <div style="font-size: 14px; font-weight: 500; color: #111111;">
                            ${escapeHtml(dealerPayload.businessName?.trim() || "New Venture / Counter")} &bull; ${escapeHtml(dealerPayload.businessType)}
                          </div>
                        </td>
                      </tr>`
                          : ""
                      }

                      ${
                        formattedMessage
                          ? `<!-- Field: Message / Details -->
                      <tr>
                        <td valign="top" style="border-top: 1px solid #F0EEE9; padding-top: 14px;">
                          <div style="font-size: 11px; font-weight: 700; color: #71717A; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">
                            Message / Details
                          </div>
                          <div style="font-size: 14px; line-height: 1.6; color: #27272A; background-color: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 6px; padding: 12px 14px; word-break: break-word; overflow-wrap: break-word;">
                            ${formattedMessage}
                          </div>
                        </td>
                      </tr>`
                          : ""
                      }

                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 4. Quick Action Section -->
          <tr>
            <td class="content-padding" style="padding: 0 36px 28px 36px;">
              <div style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: #71717A; margin-bottom: 12px;">
                Quick Actions
              </div>
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td valign="middle">
                    
                    ${
                      mailtoUrl
                        ? `<span class="action-stack" style="display: inline-block; margin-right: 8px; margin-bottom: 8px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="display: inline-block;">
                        <tr>
                          <td style="background-color: #111111; border-radius: 6px;">
                            <a href="${mailtoUrl}" target="_blank" style="display: inline-block; padding: 9px 16px; font-size: 13px; font-weight: 600; color: #FFFFFF; text-decoration: none; border-radius: 6px; font-family: inherit;">
                              Reply by Email
                            </a>
                          </td>
                        </tr>
                      </table>
                    </span>`
                        : ""
                    }

                    <span class="action-stack" style="display: inline-block; margin-right: 8px; margin-bottom: 8px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="display: inline-block;">
                        <tr>
                          <td style="background-color: #FFFFFF; border: 1px solid #D4D4D8; border-radius: 6px;">
                            <a href="tel:${telPhone}" style="display: inline-block; padding: 8px 15px; font-size: 13px; font-weight: 600; color: #111111; text-decoration: none; border-radius: 6px; font-family: inherit;">
                              Call Customer
                            </a>
                          </td>
                        </tr>
                      </table>
                    </span>

                    ${
                      waUrl
                        ? `<span class="action-stack" style="display: inline-block; margin-bottom: 8px;">
                      <table role="presentation" border="0" cellpadding="0" cellspacing="0" style="display: inline-block;">
                        <tr>
                          <td style="background-color: #25D366; border-radius: 6px;">
                            <a href="${waUrl}" target="_blank" style="display: inline-block; padding: 9px 16px; font-size: 13px; font-weight: 600; color: #FFFFFF; text-decoration: none; border-radius: 6px; font-family: inherit;">
                              WhatsApp
                            </a>
                          </td>
                        </tr>
                      </table>
                    </span>`
                        : ""
                    }

                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 5. Submission Information (Subtle timestamp & source) -->
          <tr>
            <td class="content-padding" style="padding: 0 36px 24px 36px;">
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-top: 1px solid #F0EEE9; padding-top: 16px;">
                <tr>
                  <td style="font-size: 12px; color: #71717A; line-height: 1.5;">
                    Received on <strong style="color: #27272A; font-weight: 600;">${formattedDate}</strong> via Website Form
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- 6. Footer -->
          <tr>
            <td style="background-color: #FAFAFA; border-top: 1px solid #EAE6DF; padding: 22px 36px; text-align: center;">
              <p style="margin: 0 0 6px 0; font-size: 12px; color: #71717A; line-height: 1.4;">
                This is an automated notification from ${escapeHtml(options.companyName)} website.
              </p>
              <p style="margin: 0; font-size: 11px; color: #A1A1AA; line-height: 1.4;">
                <a href="${escapeHtml(options.websiteUrl)}" target="_blank" style="color: #71717A; text-decoration: underline;">
                  Visit Website
                </a>
                &nbsp;&bull;&nbsp;
                <a href="mailto:${escapeHtml(options.supportEmail)}" style="color: #71717A; text-decoration: underline;">
                  ${escapeHtml(options.supportEmail)}
                </a>
                &nbsp;&bull;&nbsp;
                <a href="tel:${escapeHtml(options.supportPhone)}" style="color: #71717A; text-decoration: underline;">
                  ${escapeHtml(options.supportPhone)}
                </a>
              </p>
            </td>
          </tr>

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Generates the clean plain-text email alternative
 */
export function generateEnquiryEmailText(
  payload: ContactFormPayload | DealerFormPayload,
  userOptions?: EmailTemplateOptions
): string {
  const options = { ...DEFAULT_OPTIONS, ...userOptions };
  const isDealer = payload.formType === "dealer_application";
  const dealerPayload = isDealer ? (payload as DealerFormPayload) : null;
  const contactPayload = !isDealer ? (payload as ContactFormPayload) : null;

  const customerName = payload.fullName.trim();
  const rawPhone = payload.mobileNumber.trim();
  const displayPhone = formatPhoneForDisplay(rawPhone);
  const waNumber = normalizePhoneForWhatsApp(rawPhone);
  const email = payload.email?.trim() || "";

  const inquiryType = isDealer
    ? "Dealership Application"
    : contactPayload?.enquiryType || "Customer Contact Enquiry";

  const messageText = isDealer
    ? dealerPayload?.message?.trim() || ""
    : contactPayload?.message?.trim() || "";

  const formattedDate = formatSubmissionTimestamp(options.submittedAt);

  let text = `====================================================\n`;
  text += `${options.companyName.toUpperCase()} - NEW ENQUIRY RECEIVED\n`;
  text += `====================================================\n\n`;
  text += `You've received a new enquiry!\n`;
  text += `Someone has submitted the contact form on your website.\n\n`;
  text += `CUSTOMER INFORMATION:\n`;
  text += `----------------------------------------------------\n`;
  text += `Inquiry Type:            ${inquiryType}\n`;
  text += `Customer Name:           ${customerName}\n`;
  text += `Mobile / WhatsApp:       ${displayPhone}\n`;
  if (email) {
    text += `Email Address:           ${email}\n`;
  }
  if (isDealer && dealerPayload) {
    text += `Location:                ${dealerPayload.city.trim()}${dealerPayload.pincode ? ` (PIN: ${dealerPayload.pincode.trim()})` : ""}\n`;
    text += `Firm / Shop Name:        ${dealerPayload.businessName?.trim() || "New Venture / Counter"}\n`;
    text += `Business Profile:        ${dealerPayload.businessType}\n`;
  }
  if (messageText) {
    text += `\nMessage / Details:\n${messageText}\n`;
  }
  text += `\n----------------------------------------------------\n`;
  text += `QUICK ACTIONS:\n`;
  text += `Call Customer:           tel:${rawPhone.replace(/[^\d+]/g, "")}\n`;
  if (waNumber) {
    text += `WhatsApp Chat:           https://wa.me/${waNumber}\n`;
  }
  if (email) {
    text += `Reply by Email:          mailto:${email}\n`;
  }
  text += `\nSUBMISSION DETAILS:\n`;
  text += `Received on:             ${formattedDate}\n`;
  text += `Source:                  Website Contact Form\n`;
  text += `\n----------------------------------------------------\n`;
  text += `This is an automated notification from ${options.companyName} website.\n`;
  text += `${options.websiteUrl}\n`;
  text += `====================================================\n`;

  return text;
}
