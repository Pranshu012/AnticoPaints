import React from "react";

interface CompactProductHeroProps {
  totalCount: number;
}

export function CompactProductHero({ totalCount }: CompactProductHeroProps) {
  return (
    <section className="bg-brand-offwhite border-b border-brand-beige/80 pt-10 pb-8 sm:pt-14 sm:pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl space-y-3">
          {/* Eyebrow and metadata */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-xs uppercase tracking-luxury text-brand-gold-dark font-sans font-semibold">
              OUR PRODUCT RANGE
            </span>
            <span className="text-brand-beige-dark">•</span>
            <span className="text-[11px] sm:text-xs uppercase font-mono tracking-wider text-brand-muted">
              {totalCount} PRODUCTS
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-tight">
            Find the right product.
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base text-brand-black/75 max-w-2xl font-sans leading-relaxed">
            Paints, wall finishes and painting essentials for your next project.
          </p>
        </div>
      </div>
    </section>
  );
}
