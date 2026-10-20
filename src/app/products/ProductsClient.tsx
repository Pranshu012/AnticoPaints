"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { categoriesData, productsData } from "@/data/products";
import { ProductCategory, Product } from "@/types";
import { Download, Check, ArrowRight, Filter, Search, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

export function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [activeCategory, setActiveCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = productsData.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.finish.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Top Banner */}
      <section className="bg-brand-black text-brand-offwhite py-16 sm:py-24 border-b border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold">Architectural Coating Systems</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl text-brand-beige-light tracking-tight">
              Organised Product Collections
            </h1>
            <p className="text-sm sm:text-base text-brand-beige/80 leading-relaxed font-sans">
              Precision-engineered for specifiers, commercial contractors, and architects. 
              Review substrate recommendations, wet-abrasion metrics, and download technical datasheets.
            </p>
          </div>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="sticky top-20 z-30 bg-brand-offwhite/95 backdrop-blur-md border-b border-brand-beige py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 text-xs uppercase tracking-luxury whitespace-nowrap transition-all border ${
                activeCategory === "all"
                  ? "bg-brand-black text-brand-beige border-brand-black font-semibold"
                  : "bg-brand-offwhite text-brand-black/70 border-brand-beige hover:border-brand-gold hover:text-brand-black"
              }`}
            >
              All Systems ({productsData.length})
            </button>
            {categoriesData.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 text-xs uppercase tracking-luxury whitespace-nowrap transition-all border ${
                  activeCategory === cat.id
                    ? "bg-brand-black text-brand-beige border-brand-black font-semibold"
                    : "bg-brand-offwhite text-brand-black/70 border-brand-beige hover:border-brand-gold hover:text-brand-black"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search formulations..."
              className="w-full pl-10 pr-4 py-2 bg-brand-offwhite border border-brand-beige text-xs text-brand-black placeholder-brand-muted focus:border-brand-gold focus:outline-none"
            />
          </div>

        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredProducts.length === 0 ? (
          <div className="text-center py-24 bg-brand-beige/20 border border-brand-beige p-8">
            <p className="font-serif text-lg text-brand-black">No formulations found matching criteria.</p>
            <p className="text-xs text-brand-muted mt-1">Try adjusting your search terms or category selection.</p>
            <button
              onClick={() => {
                setActiveCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs uppercase tracking-luxury bg-brand-black text-brand-beige"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-brand-offwhite border border-brand-beige hover:border-brand-gold/60 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between shadow-subtle group"
              >
                <div>
                  {/* Top row: Category & Finish */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-4 border-b border-brand-beige">
                    <Badge variant="dark">{product.category}</Badge>
                    <span className="text-xs font-mono text-brand-gold-dark font-medium">
                      Finish: {product.finish}
                    </span>
                  </div>

                  {/* Product visual & details */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 pt-6">
                    <div className="sm:col-span-5 relative aspect-square bg-brand-beige/30 border border-brand-beige overflow-hidden">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <div className="sm:col-span-7 space-y-3">
                      <h3 className="font-serif text-2xl text-brand-black group-hover:text-brand-gold-dark transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-xs text-brand-gold-dark uppercase tracking-wider font-semibold">
                        {product.tagline}
                      </p>
                      <p className="text-xs text-brand-black/75 leading-relaxed">
                        {product.description}
                      </p>

                      <div className="p-2.5 bg-brand-beige/30 border border-brand-beige text-[11px] text-brand-black">
                        <span className="font-semibold block uppercase text-[10px] tracking-wider text-brand-muted">
                          Theoretical Coverage:
                        </span>
                        <span>{product.coverage}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key Features & Recommended Substrates */}
                  <div className="pt-6 space-y-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold mb-1.5">
                        Formulation Highlights:
                      </span>
                      <ul className="space-y-1.5 text-xs text-brand-black/80">
                        {product.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-brand-gold shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold mb-1">
                        Recommended Environments:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.recommendedUse.map((env, eIdx) => (
                          <span
                            key={eIdx}
                            className="px-2 py-0.5 bg-brand-beige/40 text-[11px] text-brand-black border border-brand-beige"
                          >
                            {env}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-6 mt-6 border-t border-brand-beige flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={product.datasheetPlaceholderUrl}
                    download
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-luxury border border-brand-black/30 hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    <Download className="w-3.5 h-3.5 text-brand-gold" />
                    <span>Technical Datasheet (PDF)</span>
                  </a>

                  <Link
                    href={`/contact?product=${encodeURIComponent(product.name)}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs uppercase tracking-luxury font-medium bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors"
                  >
                    <span>Request Spec &amp; Wet Pot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Specification Advisory Banner */}
      <section className="bg-brand-beige-light py-16 border-t border-brand-beige">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="gold">Architectural Advisory</Badge>
          <h2 className="font-serif text-3xl text-brand-black">
            Need Custom Substrate Preparation Guidelines?
          </h2>
          <p className="text-sm text-brand-muted max-w-2xl mx-auto leading-relaxed">
            Our central technical lab provides concrete moisture barrier calculations, 
            efflorescence remediation strategies, and custom colour matching for historic restorations.
          </p>
          <div className="pt-2">
            <Button href="/contact" variant="primary" size="md">
              Speak with a Technical Formulator
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
