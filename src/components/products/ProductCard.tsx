import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types";
import { ArrowUpRight, ArrowRight, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface ProductCardProps {
  product: ProductItem;
  theme?: "light" | "dark";
  showCategoryLabel?: boolean;
}

export function ProductCard({
  product,
  theme = "light",
  showCategoryLabel = true,
}: ProductCardProps) {
  const isDark = theme === "dark";

  return (
    <article
      className={`group flex flex-col justify-between transition-all duration-300 border ${
        isDark
          ? "bg-[#1C1C1C] border-[#2E2E2E] hover:border-brand-gold/70"
          : "bg-brand-offwhite border-brand-beige hover:border-brand-gold/60 shadow-subtle hover:shadow-hover"
      }`}
    >
      <div>
        {/* Editorial Top Ribbon */}
        <div
          className={`px-6 py-4 border-b flex items-center justify-between text-xs ${
            isDark
              ? "border-[#2E2E2E] text-brand-beige/70"
              : "border-brand-beige text-brand-muted"
          }`}
        >
          {showCategoryLabel && (
            <span
              className={`text-[10px] tracking-widest uppercase font-mono font-semibold ${
                isDark ? "text-brand-gold" : "text-brand-gold-dark"
              }`}
            >
              {product.categoryLabel}
            </span>
          )}
          {product.editorialNumber && (
            <span className="font-mono text-[11px] tracking-widest">
              /{product.editorialNumber}
            </span>
          )}
        </div>

        {/* Product Image Frame */}
        <div
          className={`relative aspect-[4/3] w-full overflow-hidden border-b transition-colors ${
            isDark
              ? "bg-[#141414] border-[#2E2E2E]"
              : "bg-brand-beige/30 border-brand-beige"
          }`}
        >
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
          {product.badge && (
            <div className="absolute top-4 left-4">
              <Badge variant={isDark ? "gold" : "dark"}>{product.badge}</Badge>
            </div>
          )}
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4">
          <div className="space-y-1.5">
            <h3
              className={`font-serif text-2xl tracking-tight transition-colors ${
                isDark
                  ? "text-brand-offwhite group-hover:text-brand-gold"
                  : "text-brand-black group-hover:text-brand-gold-dark"
              }`}
            >
              {product.name}
            </h3>
            <p
              className={`text-xs font-sans uppercase tracking-wider ${
                isDark ? "text-brand-beige/60" : "text-brand-muted"
              }`}
            >
              {product.category}
            </p>
          </div>

          <p
            className={`text-xs sm:text-sm leading-relaxed font-sans ${
              isDark ? "text-brand-beige/85" : "text-brand-black/80"
            }`}
          >
            {product.description}
          </p>

          {/* Available Guidance Details Placeholders */}
          {product.availableDetails && product.availableDetails.length > 0 && (
            <div
              className={`pt-3 border-t space-y-1.5 text-[11px] font-sans ${
                isDark
                  ? "border-[#2E2E2E] text-brand-beige/70"
                  : "border-brand-beige/80 text-brand-muted"
              }`}
            >
              {product.availableDetails.slice(0, 2).map((detail, dIdx) => (
                <div key={dIdx} className="line-clamp-1">
                  <span className="font-semibold text-brand-gold mr-1">
                    {detail.label}:
                  </span>
                  <span>{detail.value}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div
        className={`px-6 py-4 sm:px-8 sm:py-5 border-t flex items-center justify-between gap-4 ${
          isDark ? "border-[#2E2E2E] bg-[#141414]" : "border-brand-beige bg-brand-beige/10"
        }`}
      >
        <Link
          href={`/products/${product.slug}`}
          className={`inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury font-medium transition-colors ${
            isDark
              ? "text-brand-offwhite hover:text-brand-gold"
              : "text-brand-black hover:text-brand-gold"
          }`}
        >
          <span>Explore Product</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform motion-safe:group-hover:translate-x-1" />
        </Link>

        <Link
          href={product.enquiryLink}
          className={`text-[11px] uppercase tracking-wider transition-colors inline-flex items-center gap-1 ${
            isDark
              ? "text-brand-gold hover:text-brand-offwhite"
              : "text-brand-gold-dark hover:underline"
          }`}
        >
          <span>Enquire</span>
          <ArrowUpRight className="w-3 h-3" />
        </Link>
      </div>
    </article>
  );
}
