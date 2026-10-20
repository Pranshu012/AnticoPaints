import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Commercial Specification Desk & Contact | Antico Paints",
  description:
    "Connect with Antico Paints' commercial coatings advisory team, request architectural fandecks and 200ml wet sample pots, or submit project tenders.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={<ContactLoading />}>
      <ContactClient />
    </Suspense>
  );
}

function ContactLoading() {
  return (
    <div className="py-24 bg-brand-offwhite text-center">
      <div className="inline-block w-8 h-8 border-2 border-brand-gold border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-xs uppercase tracking-luxury text-brand-muted">
        Loading Specification Desk...
      </p>
    </div>
  );
}
