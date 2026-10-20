import { Suspense } from "react";
import type { Metadata } from "next";
import { DealerClient } from "./DealerClient";

export const metadata: Metadata = {
  title: "Become a Dealer | Antico Paints",
  description:
    "Explore dealership and retail distribution opportunities with Antico Paints. Submit your business enquiry and connect directly with our team.",
};

export default function BecomeADealerPage() {
  return (
    <Suspense fallback={<DealerLoading />}>
      <DealerClient />
    </Suspense>
  );
}

function DealerLoading() {
  return (
    <div className="py-24 bg-brand-offwhite text-center">
      <div className="inline-block w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-xs uppercase tracking-wider text-neutral-500 font-sans">
        Loading Dealership Enquiries...
      </p>
    </div>
  );
}
