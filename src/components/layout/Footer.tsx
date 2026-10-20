import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const FOOTER_NAV_ITEMS = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products/" },
  { name: "Colours", href: "/colours/" },
  { name: "About", href: "/about/" },
  { name: "Contact", href: "/contact/" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-beige border-t border-brand-charcoal pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-brand-charcoal">
          
          {/* Logo & Brief Tagline */}
          <div className="space-y-3">
            <Link href="/" className="inline-block" aria-label="Antico Paints Home">
              <Image
                src="/images/logo/antico-logo-white.png"
                alt="Antico Paints"
                width={180}
                height={60}
                className="h-10 sm:h-11 w-auto object-contain"
                style={{ maxHeight: "44px", width: "auto" }}
              />
            </Link>
            <p className="text-xs text-brand-beige/70 font-sans max-w-sm">
              Quality wall finishes, primers, emulsions and painting essentials.
            </p>
          </div>

          {/* Clean 5 Primary Navigation Links */}
          <nav aria-label="Footer Navigation">
            <ul className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs uppercase tracking-wider font-sans">
              {FOOTER_NAV_ITEMS.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-brand-beige/80 hover:text-brand-gold transition-colors py-1 inline-block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        {/* Inquiry Prompt Row */}
        <div className="py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-sans text-brand-beige/80 border-b border-brand-charcoal/60">
          <p>
            Need product information? Connect with our team.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-1.5 text-brand-gold hover:text-brand-gold-light font-medium transition-colors"
          >
            <span>Contact Us</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Bottom Copyright Row */}
        <div className="pt-8 text-center sm:text-left text-xs font-sans text-brand-muted flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {currentYear} Antico Paints. All rights reserved.</p>
          <p className="text-[11px] text-brand-muted/70">
            Paints • Wall Finishes • Essentials
          </p>
        </div>

      </div>
    </footer>
  );
}
