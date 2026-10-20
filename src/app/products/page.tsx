import React from "react";
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
      <ProductCatalogView products={products} />

      {/* E. Compact Final Enquiry Section */}
      <CompactProductEnquiryCTA />
    </div>
  );
}
