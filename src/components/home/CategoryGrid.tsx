import React from "react";
import Image from "next/image";
import Link from "next/link";
import { categoriesData, productsData } from "@/data/products";
import { ArrowUpRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CategoryGrid() {
  return (
    <section className="py-24 bg-brand-offwhite border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-luxury text-brand-gold font-sans font-semibold">
              Commercial Coating Systems
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black tracking-tight">
              Organised Product Collections
            </h2>
            <p className="text-brand-muted text-sm sm:text-base font-sans">
              Formulated specifically for substrate compatibility, rigorous scrubbing resistance, 
              and architectural aesthetic balance.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-medium text-brand-black hover:text-brand-gold transition-colors pb-1 border-b border-brand-black/30 hover:border-brand-gold w-fit"
          >
            <span>View Complete Product Index</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoriesData.map((category, idx) => {
            // Count products in this category
            const count = productsData.filter((p) => p.category === category.id).length;

            return (
              <div
                key={category.id}
                className="group relative bg-brand-offwhite border border-brand-beige hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-subtle hover:shadow-hover"
              >
                {/* Visual Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-brand-beige/30 border-b border-brand-beige">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="dark">{category.badge}</Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-brand-offwhite/90 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-wider uppercase text-brand-black font-mono border border-brand-beige">
                    {count} {count === 1 ? "System" : "Systems"}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="font-serif text-xl text-brand-black group-hover:text-brand-gold-dark transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-xs text-brand-gold-dark uppercase tracking-wider font-medium">
                      {category.tagline}
                    </p>
                    <p className="text-xs text-brand-muted leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  {/* Card Link */}
                  <div className="pt-4 border-t border-brand-beige/60 flex items-center justify-between">
                    <span className="text-[11px] uppercase tracking-wider text-brand-black font-medium group-hover:text-brand-gold transition-colors inline-flex items-center gap-1.5">
                      Explore Formulations <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                    <Link
                      href={`/products?category=${category.id}`}
                      className="absolute inset-0"
                      aria-label={`View ${category.name}`}
                    >
                      <span className="sr-only">View {category.name}</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Quick Specification Box */}
          <div className="bg-brand-black text-brand-offwhite p-8 flex flex-col justify-between border border-brand-gold/40 relative overflow-hidden">
            <div className="space-y-4">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-sans font-medium">
                Technical Advisory
              </span>
              <h3 className="font-serif text-2xl text-brand-beige-light leading-snug">
                Substrate Compatibility &amp; Project Specifications
              </h3>
              <p className="text-xs text-brand-beige/70 leading-relaxed">
                Looking for dry film thickness (DFT), spread rates, or custom primer-to-topcoat matrices for large commercial tenders?
              </p>
              
              <ul className="space-y-2 text-xs text-brand-beige/80 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                  <span>ASTM &amp; Substrate testing standards</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                  <span>Custom commercial batch tinting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-gold" />
                  <span>On-site architectural specification review</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-brand-charcoal">
              <Link
                href="/contact"
                className="w-full inline-flex items-center justify-center py-3 text-xs uppercase tracking-luxury font-medium bg-brand-gold text-brand-black hover:bg-brand-offwhite transition-colors"
              >
                Request Architectural Spec Kit
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
