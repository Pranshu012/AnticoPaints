import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: {
    default: "Antico Paints | Commercial Architectural Coatings & Colour Exploration",
    template: "%s | Antico Paints"
  },
  description:
    "Manufacturer of commercial architectural coatings, high-solids interior emulsions, weather-barrier exterior systems, and artisan mineral textures. Explore curated palettes and download technical specification fandecks.",
  keywords: [
    "commercial paint manufacturer",
    "architectural coatings",
    "interior emulsion",
    "exterior weather systems",
    "mineral lime stucco",
    "paint specification",
    "colour exploration",
    "LRV values",
    "low-VOC paint"
  ],
  authors: [{ name: "Antico Paints Technical Team" }],
  openGraph: {
    title: "Antico Paints | Architectural Precision. Timeless Formulation.",
    description:
      "Engineered coatings for commercial architects, interior designers, and commercial specifiers.",
    url: "https://anticopaints.com",
    siteName: "Antico Paints",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-brand-offwhite text-brand-black selection:bg-brand-gold selection:text-brand-offwhite">
        {/* Skip to Main Content for Accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-brand-black text-brand-gold border border-brand-gold text-xs tracking-luxury uppercase font-medium"
        >
          Skip to main content
        </a>

        {/* Shared Header */}
        <Header />

        {/* Main Content */}
        <main id="main-content" className="flex-1">
          {children}
        </main>

        {/* Shared Footer */}
        <Footer />
      </body>
    </html>
  );
}
