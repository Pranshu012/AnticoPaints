import React, { Suspense } from "react";
import type { Metadata } from "next";
import { getAllProducts } from "@/data/products";
import { CompactProductHero } from "@/components/products/CompactProductHero";
import { ProductCatalogView } from "@/components/products/ProductCatalogView";
import { CompactProductEnquiryCTA } from "@/components/products/CompactProductEnquiryCTA";

export const metadata: Metadata = {
  title: "Products | Antico Paints",
  description:
    "Explore our range of wall finishes, primers, emulsions and painting essentials. Find the right product for your next project.",
};

export default function ProductsPage() {
  const products = getAllProducts();

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* A. Compact Product Introduction */}
      <CompactProductHero totalCount={products.length} />

      {/* B, C, D. Interactive Category Navigation & Unified Product Grid */}
      <Suspense
        fallback={
          <div className="max-w-7xl mx-auto px-4 py-16 text-center text-xs font-sans text-brand-muted">
            Loading products...
          </div>
        }
      >
        <ProductCatalogView products={products} />
      </Suspense>

      {/* E. Compact Final Enquiry Section */}
      <CompactProductEnquiryCTA />
    </div>
  );
}
