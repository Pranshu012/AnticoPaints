import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePageData } from "@/data/home";

export function HomeHero() {
  const { hero } = homePageData;

  return (
    <section className="bg-brand-offwhite pt-8 pb-14 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-brand-beige/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading & Navigation Actions */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            {/* Eyebrow */}
            <div>
              <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
                {hero.eyebrow}
              </span>
            </div>

            {/* Display Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[46px] xl:text-[54px] font-bold text-neutral-900 tracking-tight leading-[1.12]">
              {hero.heading}
            </h1>

            {/* Description */}
            <p className="font-sans text-base sm:text-lg text-neutral-700 max-w-lg leading-relaxed pt-1">
              {hero.description}
            </p>

            {/* CTAs: Primary button + Secondary text action */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-3">
              <Link
                href={hero.primaryCtaHref}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-neutral-900 text-white hover:bg-brand-gold hover:text-neutral-950 text-sm font-sans font-medium tracking-wide rounded-lg transition-colors shadow-xs"
              >
                <span>{hero.primaryCtaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={hero.secondaryCtaHref}
                className="group inline-flex items-center gap-2 text-sm font-sans font-medium text-neutral-900 hover:text-brand-gold transition-colors py-2"
              >
                <span>{hero.secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: High-Quality Interior Photography */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl shadow-subtle border border-brand-beige/80 bg-brand-beige/20 aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] w-full max-w-md lg:max-w-none mx-auto">
              <Image
                src={hero.imageSrc}
                alt={hero.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, (min-width: 640px) 75vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
