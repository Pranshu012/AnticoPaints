import { Suspense } from "react";
import type { Metadata } from "next";
import { ProductsClient } from "./ProductsClient";

export const metadata: Metadata = {
  title: "Commercial Product Collections | Antico Paints",
  description:
    "Explore our complete architectural coatings catalog: luxury interior emulsions, high-performance exterior systems, designer mineral textures, and protective primers.",
};

export default function ProductsPage() {
  return (
    <Suspense fallback={<ProductsLoading />}>
      <ProductsClient />
    </Suspense>
  );
}

function ProductsLoading() {
  return (
    <div className="py-24 bg-brand-offwhite text-center">
      <div className="inline-block w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-xs uppercase tracking-luxury text-brand-muted">
        Loading Architectural Formulations...
      </p>
    </div>
  );
}
