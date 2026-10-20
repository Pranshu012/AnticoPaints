import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import { aboutPageData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Antico Paints",
  description:
    "Good products start with good listening. Learn about Antico Paints' mission, commitment, and customer-first approach.",
};

export default function AboutPage() {
  const { intro, mission, commitment, cta } = aboutPageData;

  return (
    <div className="bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-16 sm:pb-24">
        
        {/* ========================================================= */}
        {/* Section A — Introduction & Wide Hero Photograph           */}
        {/* ========================================================= */}
        <section className="space-y-4 sm:space-y-5">
          {/* Eyebrow */}
          <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-sans font-semibold text-brand-gold block">
            {intro.eyebrow}
          </span>

          {/* Bold Sans-Serif Heading */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.15]">
            {intro.heading}
          </h1>

          {/* Description */}
          <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
            {intro.description}
          </p>

          {/* Wide Rounded Photograph */}
          <div className="pt-2 sm:pt-4">
            <div className="relative w-full aspect-[21/9] sm:aspect-[2.35/1] rounded-2xl overflow-hidden shadow-sm bg-brand-beige/30">
              <Image
                src={intro.image}
                alt={intro.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </section>

        {/* Narrative Flow Indicator */}
        <div className="flex justify-center my-8 sm:my-10">
          <div 
            className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center shadow-xs"
            aria-hidden="true"
          >
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section B — Our Mission (Warm Beige Inset Card)           */}
        {/* ========================================================= */}
        <section className="bg-[#F2ECE1] rounded-xl p-6 sm:p-10 border border-brand-beige/60 space-y-3">
          <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-sans font-semibold text-brand-gold block">
            {mission.eyebrow}
          </span>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            {mission.heading}
          </h2>

          <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl">
            {mission.description}
          </p>
        </section>

        {/* ========================================================= */}
        {/* Section C — Our Commitment (Clean Divided List)           */}
        {/* ========================================================= */}
        <section className="pt-10 sm:pt-14 space-y-6">
          <div className="space-y-2">
            <span className="text-xs sm:text-sm uppercase tracking-[0.15em] font-sans font-semibold text-brand-gold block">
              {commitment.eyebrow}
            </span>

            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {commitment.heading}
            </h2>
          </div>

          {/* Clean Horizontal Divided List */}
          <div className="border-t border-brand-beige/80 divide-y divide-brand-beige/80">
            {commitment.principles.map((item) => (
              <div
                key={item.id}
                className="py-5 sm:py-6 flex items-start gap-4 sm:gap-6"
              >
                {/* Gold Number */}
                <span className="font-sans text-lg sm:text-xl font-bold text-brand-gold shrink-0 w-8 sm:w-10 pt-0.5">
                  {item.number}
                </span>

                {/* Text Block */}
                <div className="space-y-1">
                  <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900">
                    {item.title}
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Narrative Flow Indicator */}
        <div className="flex justify-center my-8 sm:my-10">
          <div 
            className="w-8 h-8 rounded-full bg-brand-black text-white flex items-center justify-center shadow-xs"
            aria-hidden="true"
          >
            <ArrowDown className="w-4 h-4" />
          </div>
        </div>

        {/* ========================================================= */}
        {/* Section D — Product CTA                                   */}
        {/* ========================================================= */}
        <section className="bg-white border border-brand-beige/80 rounded-xl p-8 sm:p-12 text-center space-y-4 shadow-xs">
          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            {cta.heading}
          </h2>

          <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3">
            <Link
              href={cta.primaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black transition-colors text-sm font-sans font-medium rounded-md tracking-wide shadow-xs"
            >
              <span>{cta.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={cta.secondaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-neutral-300 text-neutral-800 hover:border-brand-black hover:bg-neutral-50 transition-colors text-sm font-sans font-medium rounded-md tracking-wide"
            >
              {cta.secondaryButtonText}
            </Link>
          </div>
        </section>

      </div>
    </div>
  );
}
