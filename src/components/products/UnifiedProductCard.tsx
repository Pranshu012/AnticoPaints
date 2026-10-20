import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ProductItem } from "@/types";
import { ArrowRight } from "lucide-react";

interface UnifiedProductCardProps {
  product: ProductItem;
}

export function UnifiedProductCard({ product }: UnifiedProductCardProps) {
  return (
    <article className="group bg-brand-offwhite border border-brand-beige hover:border-brand-gold/60 transition-all duration-200 rounded-sm overflow-hidden flex flex-row md:flex-col justify-between shadow-subtle hover:shadow-hover">
      
      {/* Product Image Area */}
      {/* Mobile: Compact Left Column (4:3) | Desktop: Full Width Top (4:3) */}
      <div className="w-28 sm:w-36 md:w-full shrink-0 relative aspect-[4/3] bg-brand-beige/20 overflow-hidden border-r md:border-r-0 md:border-b border-brand-beige">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 144px, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        />
      </div>

      {/* Product Content Area */}
      <div className="p-3.5 sm:p-5 md:p-6 flex-1 flex flex-col justify-between space-y-3">
        <div className="space-y-1 sm:space-y-1.5">
          {/* Category */}
          <span className="text-[10px] sm:text-xs uppercase tracking-wider font-sans font-semibold text-brand-gold-dark block">
            {product.category}
          </span>

          {/* Product Name */}
          <h2 className="font-serif text-base sm:text-lg md:text-xl text-brand-black tracking-tight leading-snug group-hover:text-brand-gold-dark transition-colors">
            <Link
              href={`/products/${product.slug}`}
              className="focus-visible:outline-none focus-visible:underline"
            >
              {product.name}
            </Link>
          </h2>

          {/* Concise Description */}
          <p className="text-xs sm:text-sm text-brand-black/75 font-sans leading-relaxed line-clamp-2 md:line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Small, Consistent Action */}
        <div className="pt-2 sm:pt-3 border-t border-brand-beige/60 flex items-center justify-between">
          <Link
            href={`/products/${product.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-sans font-medium text-brand-black hover:text-brand-gold transition-colors py-1 group/link focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-gold"
            aria-label={`Explore ${product.name}`}
          >
            <span>Explore product</span>
            <ArrowRight className="w-3.5 h-3.5 text-brand-gold transition-transform motion-safe:group-hover/link:translate-x-1" />
          </Link>

          <Link
            href={product.enquiryLink}
            className="text-[11px] font-sans text-brand-muted hover:text-brand-black transition-colors hidden sm:inline-block"
            aria-label={`Enquire about ${product.name}`}
          >
            Enquire
          </Link>
        </div>

      </div>

    </article>
  );
}
