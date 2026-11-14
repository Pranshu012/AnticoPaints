"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { verifiedContactData, socialMediaLinks } from "@/data/company";
import { trackSocialClick } from "@/lib/analytics";

const FOOTER_NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products/" },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
  { name: "Become a Dealer", href: "/become-a-dealer/" },
];

/**
 * Clean, standard WhatsApp glyph for icon + text footer link
 */
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappUrl = socialMediaLinks.whatsapp.url;

  const developerWhatsAppMessage =
    "Hi Pranshu, I came across your work on Antico Paints' website and would like to discuss creating a website for my business.";
  const developerWhatsAppUrl = `https://wa.me/919588823762?text=${encodeURIComponent(
    developerWhatsAppMessage
  )}`;

  return (
    <footer className="bg-[#121212] text-neutral-300 border-t border-neutral-800/80 pt-16 pb-12 sm:pt-20 sm:pb-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Balanced Three-Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-14 border-b border-neutral-800/80">
          
          {/* Column 1: Brand */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block" aria-label="Antico Paints Home">
              <Image
                src="/images/logo/antico-logo-white.png"
                alt="Antico Paints"
                width={170}
                height={55}
                className="h-9 sm:h-10 w-auto object-contain"
                style={{ maxHeight: "40px", width: "auto" }}
              />
            </Link>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed max-w-sm">
              Quality wall finishes, primers, emulsions and painting essentials.
            </p>
          </div>

          {/* Column 2: Explore */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-neutral-200">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm font-sans">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-400 hover:text-brand-gold transition-colors duration-200 inline-block py-0.5"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Let's Stay Connected */}
          <div className="md:col-span-4 space-y-6">
            <div className="space-y-1.5">
              <h3 className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-neutral-200">
                Let&apos;s Stay Connected
              </h3>
              <p className="text-xs text-neutral-400 font-sans leading-relaxed">
                Follow our journey or connect with our team.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="space-y-3.5">
              {/* Instagram */}
              <a
                href={socialMediaLinks.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackSocialClick({
                    platform: "instagram",
                    url: socialMediaLinks.instagram.url,
                    location: "footer",
                  })
                }
                className="group flex items-center gap-3 transition-colors duration-200"
                aria-label="Follow Antico Paints on Instagram (@anticopaints_)"
              >
                <Instagram className="w-4 h-4 text-brand-gold shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <div className="leading-tight">
                  <span className="block text-sm font-medium text-neutral-200 group-hover:text-brand-gold transition-colors">
                    Instagram
                  </span>
                  <span className="block text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    {socialMediaLinks.instagram.handle}
                  </span>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  trackSocialClick({
                    platform: "whatsapp",
                    url: whatsappUrl,
                    location: "footer",
                  })
                }
                className="group flex items-center gap-3 transition-colors duration-200"
                aria-label="Chat with Antico Paints on WhatsApp (+91 8000642900)"
              >
                <WhatsAppIcon className="w-4 h-4 text-brand-gold shrink-0 transition-transform duration-200 group-hover:scale-110" />
                <div className="leading-tight">
                  <span className="block text-sm font-medium text-neutral-200 group-hover:text-brand-gold transition-colors">
                    Chat with us
                  </span>
                  <span className="block text-xs text-neutral-400 group-hover:text-neutral-300 transition-colors">
                    +91 8000642900
                  </span>
                </div>
              </a>
            </div>

            {/* Direct Contact Information (Preserved) */}
            <div className="pt-4 border-t border-neutral-800/80">
              <ul className="space-y-2.5 text-xs font-sans">
                <li>
                  <a
                    href={verifiedContactData.phone.href}
                    className="group inline-flex items-center gap-2.5 text-neutral-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    <Phone className="w-3.5 h-3.5 text-brand-gold shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span>{verifiedContactData.phone.number}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={verifiedContactData.email.href}
                    className="group inline-flex items-center gap-2.5 text-neutral-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    <Mail className="w-3.5 h-3.5 text-brand-gold shrink-0 transition-transform duration-200 group-hover:scale-110" />
                    <span>{verifiedContactData.email.address}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={verifiedContactData.office.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-start gap-2.5 text-neutral-300 hover:text-brand-gold transition-colors duration-200"
                  >
                    <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5 transition-transform duration-200 group-hover:scale-110" />
                    <span className="leading-snug">103, Gala Building, Gulbai Tekra, Ahmedabad</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Developer Studio Credit */}
        <div className="pt-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-xs font-sans">
          <p className="text-neutral-500 order-2 lg:order-1">
            © {currentYear} Antico Paints. All rights reserved.
          </p>

          <div className="order-1 lg:order-2 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-neutral-400">
            <div>
              <p className="text-neutral-300">
                A digital presence, thoughtfully crafted by{" "}
                <span className="font-semibold text-neutral-100">Pranshu</span>
              </p>
              <p className="text-[11px] text-neutral-500 mt-0.5">
                Need a website for your business? Let&apos;s create something meaningful together.
              </p>
            </div>

            <a
              href={developerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold hover:text-neutral-100 transition-colors duration-200 group shrink-0"
              aria-label="Contact Pranshu on WhatsApp for website development"
            >
              <span className="underline decoration-brand-gold/40 underline-offset-4 group-hover:decoration-neutral-100">
                Let&apos;s Talk on WhatsApp
              </span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
