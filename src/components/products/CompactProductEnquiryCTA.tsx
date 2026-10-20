import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { companyData } from "@/data/company";

export function CompactProductEnquiryCTA() {
  return (
    <section className="bg-brand-beige-light border-t border-brand-beige py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Exact Required Heading and Supporting Text */}
        <div className="space-y-2">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black tracking-tight">
            Need help choosing a product?
          </h2>
          <p className="text-sm sm:text-base text-brand-black/70 font-sans max-w-xl mx-auto">
            Connect with our team for product information and guidance.
          </p>
        </div>

        {/* Exact Required Button */}
        <div>
          <Link
            href="/contact?type=product-guidance"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-black text-brand-offwhite text-xs font-sans uppercase tracking-luxury font-medium border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-200 shadow-subtle group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
          >
            <span>Enquire About Products</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover:text-brand-black transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Verified contact placeholders from company data */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-brand-muted font-sans">
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span className="font-mono text-[11px]">{companyData.contact.emailPlaceholder}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-gold-dark" />
            <span className="font-mono text-[11px]">{companyData.contact.phonePlaceholder}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
