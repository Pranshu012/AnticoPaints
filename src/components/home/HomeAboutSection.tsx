import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homePageData } from "@/data/home";

export function HomeAboutSection() {
  const { aboutSection } = homePageData;

  return (
    <section className="bg-brand-offwhite py-12 sm:py-16 lg:py-20 border-b border-brand-beige/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-3.5 text-left">
          
          {/* Eyebrow */}
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
            {aboutSection.eyebrow}
          </span>

          {/* Heading */}
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
            {aboutSection.heading}
          </h2>

          {/* Descriptive Copy */}
          <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed pt-1">
            {aboutSection.description}
          </p>

          {/* CTA Link */}
          <div className="pt-2">
            <Link
              href={aboutSection.ctaHref}
              className="group inline-flex items-center gap-2 text-sm font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors py-1"
            >
              <span>{aboutSection.ctaText}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
