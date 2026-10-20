import React from "react";
import { ArrowDown } from "lucide-react";

export function ProductsHero() {
  return (
    <section className="relative bg-brand-offwhite pt-16 pb-20 sm:pt-24 sm:pb-28 border-b border-brand-beige overflow-hidden">
      {/* Subtle architectural background texture */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige/20 pointer-events-none -z-0" />
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl space-y-6">
          {/* Restrained Brand Label */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-brand-gold/40 bg-brand-beige/30 text-xs tracking-widest uppercase text-brand-black font-mono font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
            <span>THE COLLECTION / 01–06</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl text-brand-black tracking-tight leading-[1.08]">
            Every coat. <br />
            <span className="italic font-normal text-brand-black">Every detail.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg text-brand-black/75 max-w-2xl font-sans leading-relaxed">
            Explore our range of wall finishes, primers, emulsions and painting essentials.
          </p>

          {/* Functional Scroll-to-Collection Button */}
          <div className="pt-4 flex items-center gap-4">
            <a
              href="#product-collection"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-black text-brand-offwhite text-xs uppercase tracking-luxury font-medium border border-brand-black hover:bg-brand-gold hover:border-brand-gold hover:text-brand-black transition-all duration-300 shadow-subtle group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
            >
              <span>Explore Products</span>
              <ArrowDown className="w-4 h-4 transition-transform motion-safe:group-hover:translate-y-1 text-brand-gold group-hover:text-brand-black" />
            </a>

            <span className="hidden sm:inline-block text-xs font-mono text-brand-muted tracking-wider">
              [6 Authoritative Systems]
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
