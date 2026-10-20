import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
      
      {/* ========================================================= */}
      {/* Section A — About Introduction (Compact Editorial Layout) */}
      {/* ========================================================= */}
      <section className="bg-brand-offwhite pt-10 pb-14 sm:pt-14 sm:pb-18 lg:pt-18 lg:pb-22 border-b border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Editorial Narrative */}
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
                {intro.eyebrow}
              </span>
              
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-brand-black tracking-tight leading-[1.14]">
                {intro.heading}
              </h1>
              
              <p className="text-base sm:text-lg text-brand-black/75 font-sans leading-relaxed">
                {intro.description}
              </p>
            </div>

            {/* Right: High-Quality Materiality / Texture Photograph */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-xs border border-brand-beige shadow-card bg-brand-offwhite">
                <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full">
                  <Image
                    src={intro.image}
                    alt={intro.imageAlt}
                    fill
                    priority
                    sizes="(min-width: 1024px) 58vw, 100vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Section B — Our Mission (Warm, Compact Split Layout)     */}
      {/* ========================================================= */}
      <section className="bg-[#F5EFE6] py-12 sm:py-16 lg:py-20 border-b border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-baseline">
            
            {/* Left Column: Eyebrow & Major Heading */}
            <div className="lg:col-span-5 space-y-3">
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
                {mission.eyebrow}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-3.5xl text-brand-black tracking-tight leading-snug">
                {mission.heading}
              </h2>
            </div>

            {/* Right Column: Narrative Description */}
            <div className="lg:col-span-7">
              <p className="text-base sm:text-lg text-brand-black/80 font-sans leading-relaxed lg:pl-4 lg:border-l lg:border-brand-beige">
                {mission.description}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* Section C — Our Commitment (Editorial List with Dividers) */}
      {/* ========================================================= */}
      <section className="bg-brand-offwhite py-14 sm:py-20 lg:py-24 border-b border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="max-w-3xl mb-10 sm:mb-14">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block mb-2">
              {commitment.eyebrow}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black tracking-tight">
              {commitment.heading}
            </h2>
          </div>

          {/* Clean Editorial Divided List: 4 Columns on Desktop, Stacked with Dividers on Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-brand-beige">
            {commitment.principles.map((item) => (
              <div
                key={item.id}
                className="lg:px-8 first:lg:pl-0 last:lg:pr-0 space-y-3 pb-6 lg:pb-0 border-b border-brand-beige/80 lg:border-b-0 last:border-b-0"
              >
                {/* Subtle Gold Number */}
                <span className="font-serif text-sm font-normal text-brand-gold tracking-wider block">
                  {item.number}
                </span>

                {/* Principle Title */}
                <h3 className="font-serif text-lg font-medium text-brand-black tracking-tight">
                  {item.title}
                </h3>

                {/* Concise Description */}
                <p className="text-sm text-brand-black/70 font-sans leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* Section D — Product CTA (Compact & Cohesive Closing)     */}
      {/* ========================================================= */}
      <section className="bg-brand-black text-brand-offwhite py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-offwhite tracking-tight">
            {cta.heading}
          </h2>

          <p className="text-sm sm:text-base text-brand-beige/80 max-w-xl mx-auto font-sans leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 pt-2">
            <Link
              href={cta.primaryButtonLink}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors text-sm font-sans font-medium tracking-wide"
            >
              <span>{cta.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href={cta.secondaryButtonLink}
              className="inline-flex items-center justify-center px-7 py-3.5 border border-brand-offwhite/30 hover:border-brand-offwhite text-brand-offwhite hover:bg-white/10 transition-colors text-sm font-sans font-medium tracking-wide"
            >
              {cta.secondaryButtonText}
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
