import React from "react";
import { ProductItem } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";

interface PaintAndPrepGridProps {
  products: ProductItem[];
}

export function PaintAndPrepGrid({ products }: PaintAndPrepGridProps) {
  return (
    <section className="py-20 sm:py-28 bg-brand-offwhite border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              <span className="text-[11px] uppercase tracking-luxury text-brand-gold-dark font-mono font-semibold">
                Formulations &amp; Preparation / 02–04
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
              Paint and preparation.
            </h2>
            <p className="text-brand-muted text-sm sm:text-base font-sans leading-relaxed">
              From dedicated undercoats that stabilise masonry to refined architectural emulsions 
              crafted for interior walls.
            </p>
          </div>

          <div className="text-xs font-mono text-brand-muted uppercase tracking-wider hidden md:block">
            Architectural Wall Systems
          </div>
        </div>

        {/* 3-Column Well-Spaced Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              theme="light"
              showCategoryLabel={true}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
