import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  authoritativeProducts,
  getProductBySlug,
} from "@/data/products";
import { ArrowLeft, ArrowRight, ArrowUpRight, HelpCircle } from "lucide-react";
import { companyData } from "@/data/company";

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

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Clean Breadcrumb Navigation */}
      <div className="border-b border-brand-beige/80 bg-brand-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-sans">
            <Link
              href="/products"
              className="text-brand-muted hover:text-brand-black transition-colors inline-flex items-center gap-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>All Products</span>
            </Link>
            <span className="text-brand-beige-dark">/</span>
            <span className="text-brand-gold-dark font-medium">
              {product.category}
            </span>
            <span className="text-brand-beige-dark">/</span>
            <span className="text-brand-black font-semibold truncate">
              {product.name}
            </span>
          </nav>
        </div>
      </div>

      {/* Main Product Showcase Section */}
      <section className="py-10 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-14 items-start">
          
          {/* Visual Presentation Frame (4:3) */}
          <div className="md:col-span-6 lg:col-span-7">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-brand-beige rounded-sm bg-brand-beige/25 shadow-subtle">
              <Image
                src={product.image}
                alt={product.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Clean Content & Enquiry Action */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-wider font-sans font-semibold text-brand-gold-dark block">
                {product.category}
              </span>

              <h1 className="font-serif text-3xl sm:text-4xl text-brand-black tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="text-base text-brand-black/80 leading-relaxed font-sans pt-1">
                {product.description}
              </p>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <Link
                href={product.enquiryLink}
                className="inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-brand-black text-brand-offwhite text-xs font-sans uppercase tracking-luxury font-medium border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-200 shadow-subtle"
              >
                <span>Enquire About {product.name}</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-gold" />
              </Link>

              <Link
                href="/products"
                className="py-3.5 px-6 text-center text-xs font-sans uppercase tracking-luxury font-medium border border-brand-beige hover:border-brand-black transition-colors"
              >
                Back to Products
              </Link>
            </div>

            {/* Clean Help Box */}
            <div className="p-5 bg-brand-beige-light border border-brand-beige rounded-sm space-y-2 text-xs font-sans">
              <div className="font-medium text-brand-black flex items-center gap-1.5">
                <HelpCircle className="w-4 h-4 text-brand-gold-dark" />
                <span>Need advice on this product?</span>
              </div>
              <p className="text-brand-black/75 leading-relaxed">
                Our team is happy to assist with surface suitability, shade selection, and order quantities.
              </p>
              <div className="pt-1 text-[11px] text-brand-muted">
                {companyData.contact.emailPlaceholder}
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
