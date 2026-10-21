import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePageData } from "@/data/home";

export function HomeDealerCTA() {
  const { dealerCta } = homePageData;

  return (
    <section className="bg-brand-offwhite py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dark Invitation Card Container */}
        <div className="bg-[#171717] rounded-2xl border border-neutral-800 p-8 sm:p-10 lg:p-12 text-white shadow-card space-y-6">
          <div className="max-w-2xl space-y-3">
            
            {/* Eyebrow */}
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
              {dealerCta.eyebrow}
            </span>

            {/* Display Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug">
              {dealerCta.heading}
            </h2>

            {/* Supporting Copy */}
            <p className="font-sans text-sm sm:text-base text-neutral-300 leading-relaxed pt-1 max-w-xl">
              {dealerCta.description}
            </p>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <Link
              href={dealerCta.buttonHref}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors text-sm font-sans font-semibold rounded-lg shadow-sm"
            >
              <span>{dealerCta.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}
