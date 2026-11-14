/**
 * Analytics & Interaction Event Tracking for Antico Paints
 * 
 * Safely dispatches custom events to Google Analytics 4 (via window.gtag)
 * without adding third-party tracking libraries, performance overhead,
 * or exposing credentials.
 */

export interface SocialTrackingParams {
  platform: "instagram" | "whatsapp" | "facebook" | "linkedin" | string;
  url: string;
  location: "footer" | "homepage_section" | "contact_page" | string;
}

/**
 * Tracks social media link clicks.
 * Emits `social_link_click` as well as platform-specific events (`instagram_click`, `whatsapp_click`).
 */
export function trackSocialClick({ platform, url, location }: SocialTrackingParams): void {
  if (typeof window === "undefined") return;

  const pageLocation = window.location.href;

  const eventParams = {
    platform,
    url,
    page_location: pageLocation,
    link_location: location,
  };

  // Dispatch to GA4 if gtag is configured
  const globalWin = window as unknown as { gtag?: (...args: unknown[]) => void };
  if (typeof globalWin.gtag === "function") {
    // 1. Standard social_link_click event
    globalWin.gtag("event", "social_link_click", eventParams);

    // 2. Dedicated platform-specific event
    if (platform === "instagram") {
      globalWin.gtag("event", "instagram_click", eventParams);
    } else if (platform === "whatsapp") {
      globalWin.gtag("event", "whatsapp_click", eventParams);
    }
  }

  // Console logging in non-production for testing and debugging
  if (process.env.NODE_ENV !== "production") {
    console.debug("[Analytics Tracking]", {
      events: ["social_link_click", `${platform}_click`],
      params: eventParams,
    });
  }
}
