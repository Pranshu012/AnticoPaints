import React from "react";
import type { Metadata } from "next";
import {
  getFeaturedProduct,
  getPaintAndPrepProducts,
  getAccessoryProducts,
} from "@/data/products";
import { ProductsHero } from "@/components/products/ProductsHero";
import { FeaturedTexture } from "@/components/products/FeaturedTexture";
import { PaintAndPrepGrid } from "@/components/products/PaintAndPrepGrid";
import { AccessoriesSection } from "@/components/products/AccessoriesSection";
import { ProductEnquiryCTA } from "@/components/products/ProductEnquiryCTA";

export const metadata: Metadata = {
  title: "Products & Wall Finishes | Antico Paints",
  description:
    "Explore our range of wall finishes, primers, emulsions and painting essentials. Every coat. Every detail.",
};

export default function ProductsPage() {
  const featuredProduct = getFeaturedProduct();
  const paintAndPrepProducts = getPaintAndPrepProducts();
  const accessoryProducts = getAccessoryProducts();

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Section A — Products hero */}
      <ProductsHero />

      {/* Section B — Featured product: Texture */}
      <FeaturedTexture product={featuredProduct} />

      {/* Section C — Paint and preparation (Cement Wall Primer, Luxury Emulsion, Eco Emulsion) */}
      <PaintAndPrepGrid products={paintAndPrepProducts} />

      {/* Section D — Painting accessories (Roller Masker, Masking Tape) */}
      <AccessoriesSection products={accessoryProducts} />

      {/* Section E — Product enquiry */}
      <ProductEnquiryCTA />
    </div>
  );
}
