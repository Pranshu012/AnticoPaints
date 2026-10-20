import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  authoritativeProducts,
  getProductBySlug,
} from "@/data/products";
import { ArrowLeft, ArrowUpRight, Check, HelpCircle, Layers, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return authoritativeProducts.map((product) => ({
    slug: product.slug,
  }));
}

export function generateMetadata({ params }: ProductPageProps): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return {
      title: "Product Not Found | Antico Paints",
    };
  }

  return {
    title: `${product.name} | Antico Paints`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }

  const isAccessories = product.section === "accessories";

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="border-b border-brand-beige bg-brand-offwhite/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-mono">
            <Link
              href="/products"
              className="text-brand-muted hover:text-brand-gold transition-colors inline-flex items-center gap-1.5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>The Collection</span>
            </Link>
            <span className="text-brand-beige-dark">/</span>
            <span className="text-brand-gold-dark uppercase tracking-wider">
              {product.categoryLabel}
            </span>
            <span className="text-brand-beige-dark">/</span>
            <span className="text-brand-black font-semibold truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Visual Presentation Frame */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-beige bg-brand-beige/30 shadow-card">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
              <div className="absolute top-4 left-4">
                <Badge variant="dark">{product.categoryLabel}</Badge>
              </div>
              {product.editorialNumber && (
                <div className="absolute bottom-4 right-4 bg-brand-black/85 text-brand-gold px-3 py-1 text-xs font-mono border border-brand-gold/30">
                  REF /{product.editorialNumber}
                </div>
              )}
            </div>

            {/* Note on Photography / Replacement Assets */}
            <p className="mt-4 text-[11px] text-brand-muted italic leading-relaxed">
              * Note: Representation visual shown. Actual physical packaging format, label specifications, and batch numbers follow verified client production runs.
            </p>
          </div>

          {/* Editorial Content & Guidance Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                <span className="text-xs uppercase tracking-luxury text-brand-gold-dark font-mono font-semibold">
                  {product.category}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-brand-black tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-brand-black/85 leading-relaxed font-sans pt-2">
                {product.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={product.enquiryLink}
                className="flex-1 inline-flex items-center justify-center gap-2 py-4 px-6 bg-brand-black text-brand-offwhite text-xs uppercase tracking-luxury font-medium border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-300 shadow-subtle group"
              >
                <span>Enquire About This Product</span>
                <ArrowUpRight className="w-4 h-4 text-brand-gold group-hover:text-brand-black" />
              </Link>

              <Link
                href="/products"
                className="py-4 px-6 text-center text-xs uppercase tracking-luxury font-medium border border-brand-black/30 hover:border-brand-gold hover:text-brand-gold transition-colors"
              >
                View Collection
              </Link>
            </div>

            {/* Available Specifications / Product Guidance Box */}
            {product.availableDetails && product.availableDetails.length > 0 && (
              <div className="p-6 bg-brand-offwhite border border-brand-beige space-y-4 shadow-subtle">
                <div className="flex items-center gap-2 text-xs font-mono text-brand-black uppercase tracking-wider font-semibold pb-2 border-b border-brand-beige">
                  <Layers className="w-4 h-4 text-brand-gold-dark" />
                  <span>Product Guidance &amp; Parameters</span>
                </div>

                <div className="space-y-3 text-xs font-sans">
                  {product.availableDetails.map((item, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="font-semibold text-brand-black block">
                        {item.label}
                      </span>
                      <p className="text-brand-muted leading-relaxed">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Color Consultation Note for Paints & Finishes */}
            {!isAccessories && (
              <div className="p-4 bg-brand-beige/30 border-l-2 border-brand-gold text-xs text-brand-black/85 flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-brand-gold-dark shrink-0 mt-0.5" />
                <p>
                  Interested in shade selection? Explore our{" "}
                  <Link href="/colours" className="text-brand-gold-dark font-medium underline">
                    Curated Colour Library
                  </Link>{" "}
                  for compatible neutral and mineral palettes.
                </p>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
