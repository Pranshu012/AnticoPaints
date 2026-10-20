import { Suspense } from "react";
import type { Metadata } from "next";
import { ColoursClient } from "./ColoursClient";

export const metadata: Metadata = {
  title: "Colour Architecture & Shade Library | Antico Paints",
  description:
    "Explore Antico Paints chromatic library: warm architectural neutrals, mineral golds, graphite blacks, earthy terracottas, and botanical greens with LRV specifications.",
};

export default function ColoursPage() {
  return (
    <Suspense fallback={<ColoursLoading />}>
      <ColoursClient />
    </Suspense>
  );
}

function ColoursLoading() {
  return (
    <div className="py-24 bg-brand-offwhite text-center">
      <div className="inline-block w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-xs uppercase tracking-luxury text-brand-muted">
        Loading Chromatic Formulations...
      </p>
    </div>
  );
}
