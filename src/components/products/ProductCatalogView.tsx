"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { ProductItem } from "@/types";
import { CategoryFilterBar, CategoryOption } from "./CategoryFilterBar";
import { UnifiedProductCard } from "./UnifiedProductCard";

interface ProductCatalogViewProps {
  products: ProductItem[];
}

const CATEGORY_OPTIONS: CategoryOption[] = [
  { id: "all", name: "All Products" },
  { id: "texture-finishes", name: "Texture & Finishes", categoryMatch: "Texture & Finishes" },
  { id: "primers", name: "Primers", categoryMatch: "Primers" },
  { id: "emulsions", name: "Emulsions", categoryMatch: "Emulsions" },
  { id: "accessories", name: "Accessories", categoryMatch: "Accessories" },
];

export function ProductCatalogView({ products }: ProductCatalogViewProps) {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [activeCategoryId, setActiveCategoryId] = useState<string>(() => {
    if (categoryParam && CATEGORY_OPTIONS.some((c) => c.id === categoryParam)) {
      return categoryParam;
    }
    return "all";
  });

  // Sync state if URL query param changes
  useEffect(() => {
    if (categoryParam && CATEGORY_OPTIONS.some((c) => c.id === categoryParam)) {
      setActiveCategoryId(categoryParam);
    } else if (!categoryParam) {
      setActiveCategoryId("all");
    }
  }, [categoryParam]);

  const handleSelectCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (categoryId === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", categoryId);
      }
      window.history.replaceState(null, "", url.toString());
    }
  };

  const activeOption =
    CATEGORY_OPTIONS.find((c) => c.id === activeCategoryId) || CATEGORY_OPTIONS[0];

  const filteredProducts = activeOption.categoryMatch
    ? products.filter((p) => p.category === activeOption.categoryMatch)
    : products;

  // Separate accessories for subtle sub-heading when "All Products" is active
  const isViewingAll = activeCategoryId === "all";
  const mainProducts = isViewingAll
    ? filteredProducts.filter((p) => p.category !== "Accessories")
    : filteredProducts;
  const accessoryProducts = isViewingAll
    ? filteredProducts.filter((p) => p.category === "Accessories")
    : [];

  return (
    <div>
      {/* Interactive Category Filter Chips */}
      <CategoryFilterBar
        categories={CATEGORY_OPTIONS}
        activeCategoryId={activeCategoryId}
        onSelectCategory={handleSelectCategory}
        products={products}
      />

      {/* Main Collection Container */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Results summary for screen readers & quick reference */}
        <div className="sr-only" aria-live="polite">
          Showing {filteredProducts.length} products for {activeOption.name}
        </div>

        {/* When viewing All Products: Show Wall Finishes & Paints, then Painting Accessories */}
        {isViewingAll ? (
          <div className="space-y-12 sm:space-y-16">
            
            {/* Wall Paints, Finishes & Primers Grid */}
            <div>
              <div className="mb-6 flex items-center justify-between pb-3 border-b border-brand-beige/60">
                <h2 className="text-xs uppercase tracking-wider font-sans font-semibold text-brand-black">
                  Wall Finishes, Primers &amp; Emulsions
                </h2>
                <span className="text-xs font-mono text-brand-muted">
                  {mainProducts.length} items
                </span>
              </div>

              {/* Responsive Unified Grid: 1 col on mobile (horizontal card), 2 col tablet, 3 col desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {mainProducts.map((product) => (
                  <UnifiedProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>

            {/* Painting Accessories Sub-Section */}
            {accessoryProducts.length > 0 && (
              <div className="pt-4">
                <div className="mb-6 flex items-center justify-between pb-3 border-b border-brand-beige/60">
                  <div>
                    <h2 className="text-xs uppercase tracking-wider font-sans font-semibold text-brand-black">
                      Painting Accessories
                    </h2>
                    <p className="text-xs text-brand-muted font-sans mt-0.5">
                      Preparation tools and clean edge masking essentials.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-brand-muted">
                    {accessoryProducts.length} items
                  </span>
                </div>

                {/* Same Unified Product Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                  {accessoryProducts.map((product) => (
                    <UnifiedProductCard key={product.slug} product={product} />
                  ))}
                </div>
              </div>
            )}

          </div>
        ) : (
          /* Filtered View (e.g. Texture & Finishes, Primers, Emulsions, or Accessories) */
          <div>
            <div className="mb-6 flex items-center justify-between pb-3 border-b border-brand-beige/60">
              <h2 className="text-xs uppercase tracking-wider font-sans font-semibold text-brand-black">
                {activeOption.name}
              </h2>
              <span className="text-xs font-mono text-brand-muted">
                {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
              </span>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="py-16 text-center bg-brand-beige/20 border border-brand-beige p-8">
                <p className="text-sm font-sans text-brand-black">No products in this category.</p>
                <button
                  type="button"
                  onClick={() => handleSelectCategory("all")}
                  className="mt-3 px-4 py-2 text-xs font-sans uppercase tracking-wider bg-brand-black text-brand-offwhite"
                >
                  View All Products
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                {filteredProducts.map((product) => (
                  <UnifiedProductCard key={product.slug} product={product} />
                ))}
              </div>
            )}
          </div>
        )}

      </main>
    </div>
  );
}
