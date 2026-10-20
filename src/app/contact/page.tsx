import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactClient } from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Antico Paints",
  description:
    "Get in touch with Antico Paints for product inquiries, shade details, dealer inquiries, and assistance.",
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
      <p className="mt-4 text-xs uppercase tracking-wider text-brand-muted">
        Loading Contact Form...
      </p>
    </div>
  );
}
