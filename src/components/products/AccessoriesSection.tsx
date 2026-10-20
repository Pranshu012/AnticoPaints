import React from "react";
import { ProductItem } from "@/types";
import { ProductCard } from "@/components/products/ProductCard";
import { ShieldCheck, Sparkles } from "lucide-react";

interface AccessoriesSectionProps {
  products: ProductItem[];
}

export function AccessoriesSection({ products }: AccessoriesSectionProps) {
  return (
    <section className="py-20 sm:py-28 bg-brand-black text-brand-offwhite border-b border-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6 pb-8 border-b border-[#2A2A2A]">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[11px] uppercase tracking-luxury text-brand-gold font-mono font-semibold">
                Application Essentials / 05–06
              </span>
            </div>
            
            {/* Exact Required Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-beige-light tracking-tight">
              Details make the difference.
            </h2>
            
            <p className="text-brand-beige/70 text-sm sm:text-base font-sans leading-relaxed">
              Clean boundaries, sharp cut-ins and surface protection for professional project preparation.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-brand-gold">
            <ShieldCheck className="w-4 h-4" />
            <span className="uppercase tracking-wider">Site Preparation Tools</span>
          </div>
        </div>

        {/* 2 Products Side-by-Side on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              theme="dark"
              showCategoryLabel={true}
            />
          ))}
        </div>

        {/* Technical Notice Banner */}
        <div className="mt-12 p-5 bg-[#171717] border border-[#2E2E2E] text-xs text-brand-beige/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p>
            * Specifications, roll widths, and dispenser formats for painting accessories reflect verified manufacturer packaging upon inquiry.
          </p>
          <span className="shrink-0 font-mono text-[10px] uppercase text-brand-gold tracking-wider">
            Antico Tooling Index
          </span>
        </div>

      </div>
    </section>
  );
}
