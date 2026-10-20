import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SimpleAboutSection() {
  return (
    <section className="bg-[#F5EFE6] py-16 sm:py-20 lg:py-24 border-b border-brand-beige">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        {/* Eyebrow */}
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
          ABOUT ANTICO PAINTS
        </span>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black tracking-tight leading-snug">
          A considered range for your painting needs.
        </h2>

        {/* Supporting Copy */}
        <p className="text-base sm:text-lg text-brand-black/75 max-w-2xl mx-auto font-sans leading-relaxed">
          From wall preparation to finishing touches, discover our range of textures, primers, emulsions and painting accessories.
        </p>

        {/* Action Button */}
        <div className="pt-4">
          <Link
            href="/products/"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors text-sm font-sans font-medium tracking-wide shadow-sm"
          >
            <span>Discover Our Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
