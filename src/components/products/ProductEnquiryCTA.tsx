import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ArrowRight, Phone, Mail, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ProductEnquiryCTA() {
  return (
    <section className="py-20 sm:py-28 bg-brand-beige-light border-b border-brand-beige">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        <div className="space-y-4">
          <Badge variant="gold">Specification Support</Badge>
          
          {/* Exact Required Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl text-brand-black tracking-tight leading-tight">
            Need help choosing a product?
          </h2>

          {/* Exact Required Supporting Text */}
          <p className="text-base sm:text-lg text-brand-muted max-w-2xl mx-auto font-sans leading-relaxed">
            Connect with our team for product information and guidance.
          </p>
        </div>

        {/* Action Button */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact?type=product-guidance"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-brand-black text-brand-offwhite text-xs uppercase tracking-luxury font-medium border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-300 shadow-subtle group"
          >
            {/* Exact Required Button Label */}
            <span>Enquire About Products</span>
            <ArrowRight className="w-4 h-4 transition-transform motion-safe:group-hover:translate-x-1" />
          </Link>

          <Link
            href="/colours"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-brand-offwhite text-brand-black text-xs uppercase tracking-luxury font-medium border border-brand-beige hover:border-brand-gold transition-colors"
          >
            <span>Browse Colour Library</span>
          </Link>
        </div>

        {/* Direct Contact Metadata Placeholders from Central Company Config */}
        <div className="pt-8 border-t border-brand-beige/80 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto text-xs text-brand-muted font-sans">
          <div className="p-3 bg-brand-offwhite border border-brand-beige flex items-center justify-center gap-2">
            <Mail className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
            <span className="font-mono text-[11px] truncate">
              {companyData.contact.emailPlaceholder}
            </span>
          </div>

          <div className="p-3 bg-brand-offwhite border border-brand-beige flex items-center justify-center gap-2">
            <Phone className="w-3.5 h-3.5 text-brand-gold-dark shrink-0" />
            <span className="font-mono text-[11px] truncate">
              {companyData.contact.phonePlaceholder}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
