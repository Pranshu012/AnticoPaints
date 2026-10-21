import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePageData } from "@/data/home";

export function HomeCategories() {
  const { categoriesSection } = homePageData;

  return (
    <section className="bg-brand-offwhite py-14 sm:py-20 lg:py-24 border-b border-brand-beige/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl text-left mb-10 sm:mb-14">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block mb-2">
            {categoriesSection.eyebrow}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight">
            {categoriesSection.heading}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 font-sans mt-2.5 leading-relaxed">
            {categoriesSection.description}
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {categoriesSection.categories.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl"
            >
              {/* Image Container with rounded corners */}
              <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-2xl bg-brand-beige/30 border border-brand-beige shadow-subtle group-hover:shadow-card group-hover:border-brand-gold/60 transition-all duration-300">
                <Image
                  src={cat.imageSrc}
                  alt={cat.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Title & Description Below Image */}
              <div className="pt-3.5 px-0.5">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-brand-gold transition-colors">
                  {cat.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 font-sans mt-1 leading-snug">
                  {cat.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Products Link Beneath the Cards */}
        <div className="pt-10 sm:pt-12 text-left">
          <Link
            href={categoriesSection.viewAllHref}
            className="group inline-flex items-center gap-2 text-sm font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors py-1"
          >
            <span>{categoriesSection.viewAllText}</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
