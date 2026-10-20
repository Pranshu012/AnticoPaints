import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types";
import { ArrowRight, ArrowUpRight, Sparkles, Layers } from "lucide-react";

interface FeaturedTextureProps {
  product: ProductItem;
}

export function FeaturedTexture({ product }: FeaturedTextureProps) {
  return (
    <section
      id="product-collection"
      className="py-20 sm:py-28 bg-brand-offwhite border-b border-brand-beige scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Lead-in */}
        <div className="flex items-center justify-between pb-6 mb-8 border-b border-brand-beige">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-widest text-brand-gold-dark font-semibold">
              {product.categoryLabel}
            </span>
            <span className="text-brand-muted text-xs font-mono">
              / {product.editorialNumber}
            </span>
          </div>

          <span className="text-xs font-sans uppercase tracking-wider text-brand-muted hidden sm:inline">
            Architectural Surface Series
          </span>
        </div>

        {/* Largest Visual Treatment: Wide Architectural Textured Beige Wall */}
        <div className="space-y-10">
          <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full overflow-hidden border border-brand-beige bg-brand-beige/40 shadow-card group">
            <Image
              src={product.image}
              alt={product.imageAlt}
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-[1.02]"
            />
            {/* Subtle Gradient Framing */}
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black/40 via-transparent to-transparent pointer-events-none" />

            {/* Bottom Floating Visual Caption */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 bg-brand-black/90 text-brand-offwhite p-4 sm:p-5 backdrop-blur-md border border-brand-gold/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-widest text-brand-gold block">
                  Materiality &amp; Tactile Depth
                </span>
                <span className="font-serif text-lg sm:text-xl text-brand-beige-light block">
                  Decorative Texture Wall System
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-brand-charcoal text-[11px] text-brand-beige font-mono border border-brand-charcoal">
                  Mineral Base
                </span>
                <span className="px-3 py-1 bg-brand-charcoal text-[11px] text-brand-gold font-mono border border-brand-charcoal">
                  Trowelled Finish
                </span>
              </div>
            </div>
          </div>

          {/* Editorial Content Beside/Below Wide Architectural Photograph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-luxury text-brand-gold-dark font-mono font-semibold block">
                  {product.categoryLabel}
                </span>
                <h2 className="font-serif text-3xl sm:text-5xl text-brand-black tracking-tight leading-tight">
                  {product.name}
                </h2>
              </div>

              {/* Exact Description from Brief */}
              <p className="text-base sm:text-lg text-brand-black/80 font-sans leading-relaxed">
                {product.description}
              </p>

              {/* Functional Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <Link
                  href={`/products/${product.slug}`}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-brand-black text-brand-offwhite text-xs uppercase tracking-luxury font-medium border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-300 shadow-subtle group"
                >
                  <span>Explore Texture Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform motion-safe:group-hover:translate-x-1" />
                </Link>

                <Link
                  href={product.enquiryLink}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-brand-beige/50 text-brand-black text-xs uppercase tracking-luxury font-medium border border-brand-beige hover:border-brand-gold hover:bg-brand-offwhite transition-colors"
                >
                  <span>Enquire for Samples</span>
                  <ArrowUpRight className="w-4 h-4 text-brand-gold-dark" />
                </Link>
              </div>
            </div>

            {/* Specification Guidance Panel */}
            <div className="lg:col-span-5 bg-brand-offwhite border border-brand-beige p-6 sm:p-8 space-y-4 shadow-subtle">
              <div className="flex items-center gap-2 text-xs text-brand-gold-dark uppercase tracking-wider font-semibold font-mono pb-2 border-b border-brand-beige">
                <Layers className="w-4 h-4" />
                <span>Product Guidance &amp; Consultation</span>
              </div>

              <div className="space-y-3 text-xs font-sans">
                {product.availableDetails?.map((detail, idx) => (
                  <div key={idx} className="space-y-0.5">
                    <span className="text-brand-black font-medium block">
                      {detail.label}
                    </span>
                    <p className="text-brand-muted leading-relaxed">
                      {detail.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2 text-[11px] text-brand-muted italic border-t border-brand-beige">
                * Confirm final grain profile and substrate primer suitability prior to full surface installation.
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
