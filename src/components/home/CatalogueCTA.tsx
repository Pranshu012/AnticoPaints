import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cataloguesData } from "@/data/company";
import { Download, FileText, CheckCircle, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function CatalogueCTA() {
  return (
    <section id="catalogues" className="py-24 bg-brand-beige-light border-b border-brand-beige scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <Badge variant="gold">Architectural Literature &amp; Fandecks</Badge>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight">
            Comprehensive Specification Catalogues
          </h2>
          <p className="text-brand-muted text-sm sm:text-base font-sans">
            Download our complete technical substrate matrices, sheen guides, 
            and curated shade fandecks prepared for architectural offices and commercial contractors.
          </p>
        </div>

        {/* Catalogues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {cataloguesData.map((cat) => (
            <div
              key={cat.id}
              className="bg-brand-offwhite border border-brand-beige flex flex-col justify-between shadow-subtle hover:shadow-hover hover:border-brand-gold/60 transition-all duration-300 group"
            >
              {/* Cover Graphic Preview */}
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-black border-b border-brand-beige">
                <Image
                  src={cat.coverImage}
                  alt={cat.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-brand-black/90 text-brand-gold text-[9px] tracking-widest uppercase px-2 py-1 border border-brand-gold/30">
                    {cat.edition}
                  </span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold-dark font-sans font-semibold block">
                    {cat.category}
                  </span>
                  <h3 className="font-serif text-lg text-brand-black group-hover:text-brand-gold-dark transition-colors leading-snug">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-brand-muted leading-relaxed line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                {/* Metadata & Download Button */}
                <div className="pt-4 border-t border-brand-beige/80 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-brand-muted font-mono">
                    <span>{cat.pageCount}</span>
                    <span>PDF ({cat.fileSize})</span>
                  </div>

                  <a
                    href={cat.filePath}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 py-3 text-xs uppercase tracking-luxury font-medium bg-brand-black text-brand-offwhite group-hover:bg-brand-gold group-hover:text-brand-black transition-colors"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Physical Sample Request Banner */}
        <div className="mt-16 bg-brand-black text-brand-offwhite p-8 sm:p-10 border border-brand-gold/40 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-2xl text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
              Printed Architectural Box Sets
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-brand-beige-light">
              Need physical fandecks or wet sample drawdown pots for your studio?
            </h3>
            <p className="text-xs sm:text-sm text-brand-beige/70">
              We dispatch professional specification binders and 200ml test pots directly to registered architectural practices and project design leads.
            </p>
          </div>

          <div className="shrink-0">
            <Link
              href="/contact?type=sample-kit"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-brand-black hover:bg-brand-offwhite transition-colors text-xs uppercase tracking-luxury font-medium shadow-gold"
            >
              <span>Order Physical Sample Kit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
