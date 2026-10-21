import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePageData } from "@/data/home";

export function HomeColourDiscovery() {
  const { colourDiscovery } = homePageData;

  return (
    <section className="bg-brand-offwhite py-12 sm:py-16 lg:py-20 border-b border-brand-beige/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Warm Beige Card Container */}
        <div className="bg-[#E9E0D2] rounded-2xl border border-brand-beige-dark/40 p-6 sm:p-8 lg:p-12 space-y-6 sm:space-y-7 shadow-xs">
          
          {/* Header */}
          <div className="space-y-2.5 max-w-2xl">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
              {colourDiscovery.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
              {colourDiscovery.heading}
            </h2>
            <p className="text-sm sm:text-base text-neutral-700 font-sans leading-relaxed">
              {colourDiscovery.description}
            </p>
          </div>

          {/* 5 Subtle Shade Swatches */}
          <div className="grid grid-cols-5 gap-2.5 sm:gap-4 py-1">
            {colourDiscovery.swatches.map((swatch) => (
              <div
                key={swatch.id}
                className="group relative"
                title={swatch.label}
              >
                <div
                  className="h-12 sm:h-16 md:h-18 w-full rounded-xl border border-black/10 shadow-xs transition-transform duration-200 group-hover:scale-[1.03]"
                  style={{ backgroundColor: swatch.hex }}
                />
              </div>
            ))}
          </div>

          {/* CTA & Footnote */}
          <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <Link
              href={colourDiscovery.ctaHref}
              className="group inline-flex items-center gap-2 text-sm font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors py-1"
            >
              <span>{colourDiscovery.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            <p className="text-xs text-neutral-600/90 font-sans italic">
              {colourDiscovery.footnote}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
