import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SimpleHero() {
  return (
    <section className="bg-brand-offwhite border-b border-brand-beige/80 pt-10 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & CTAs */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold">
                PAINTS • WALL FINISHES • ESSENTIALS
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-brand-black tracking-tight leading-[1.12]">
              The right finish for your walls.
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-brand-black/75 max-w-xl font-sans leading-relaxed">
              Explore wall textures, primers, emulsions and painting essentials for your next project.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/products/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors text-sm font-sans font-medium tracking-wide shadow-sm"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact/"
                className="inline-flex items-center justify-center px-7 py-3.5 border border-brand-black/30 hover:border-brand-black text-brand-black hover:bg-brand-beige/30 transition-colors text-sm font-sans font-medium tracking-wide"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-sm border border-brand-beige shadow-card bg-brand-offwhite">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/images/hero/hero-wall-interior.svg"
                  alt="Antico Paints modern painted wall finish in natural daylight"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
