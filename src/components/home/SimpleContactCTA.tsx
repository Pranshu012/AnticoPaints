import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SimpleContactCTA() {
  return (
    <section className="bg-brand-black text-brand-offwhite py-16 sm:py-20 border-b border-brand-charcoal">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-offwhite tracking-tight">
          Looking for a product?
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-brand-beige/80 max-w-xl mx-auto font-sans leading-relaxed">
          Get in touch for product information and assistance.
        </p>

        {/* Action Button */}
        <div className="pt-3">
          <Link
            href="/contact/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors text-sm font-sans font-medium tracking-wide"
          >
            <span>Contact Antico Paints</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
