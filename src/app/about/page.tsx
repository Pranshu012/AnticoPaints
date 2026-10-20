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
      {/* 1. Introduction Section (Two-Column Balanced Composition) */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow, Heading & Paragraph */}
          <div className="lg:col-span-6 space-y-4">
            <span className="text-sm sm:text-base uppercase tracking-[0.16em] font-sans font-bold text-brand-gold block">
              {intro.eyebrow}
            </span>

            <h1 className="font-sans text-3xl sm:text-4xl lg:text-[42px] font-bold text-neutral-900 tracking-tight leading-[1.16]">
              {intro.heading}
            </h1>

            <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed pt-1">
              {intro.description}
            </p>
          </div>

          {/* Right Column: High-Quality Paint / Wall Texture Photograph */}
          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-xl overflow-hidden shadow-card border border-brand-beige/80 bg-brand-beige/20">
              <Image
                src={intro.image}
                alt={intro.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center transition-transform duration-500 ease-out hover:scale-[1.015]"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. Our Mission (Full-Width Warm Beige Section)            */}
      {/* ========================================================= */}
      <section className="w-full bg-[#F5EFE6] border-y border-brand-beige">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-12 items-start">
            
            {/* Left Column: Eyebrow Label */}
            <div className="lg:col-span-4">
              <span className="text-sm sm:text-base lg:text-lg uppercase tracking-[0.16em] font-sans font-bold text-brand-gold block">
                {mission.eyebrow}
              </span>
            </div>

            {/* Right Column: Heading & Paragraph */}
            <div className="lg:col-span-8 space-y-3">
              <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight leading-snug">
                {mission.heading}
              </h2>

              <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed">
                {mission.description}
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. Our Commitment (Balanced 2x2 Editorial Grid)           */}
      {/* ========================================================= */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        
        {/* Section Heading */}
        <div className="max-w-2xl mb-10 sm:mb-14 space-y-2">
          <span className="text-sm sm:text-base uppercase tracking-[0.16em] font-sans font-bold text-brand-gold block">
            {commitment.eyebrow}
          </span>

          <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
            {commitment.heading}
          </h2>
        </div>

        {/* 2x2 Grid on Desktop, Single-Column on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 lg:gap-x-16 lg:gap-y-12">
          {commitment.principles.map((item) => (
            <div
              key={item.id}
              className="pt-5 border-t border-brand-beige/80 space-y-2"
            >
              <span className="font-sans text-sm sm:text-base font-bold text-brand-gold tracking-wider block">
                {item.number}
              </span>

              <h3 className="font-sans text-lg sm:text-xl font-bold text-neutral-900">
                {item.title}
              </h3>

              <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================= */}
      {/* 4. Product CTA (Deliberate, Compact Closing Section)      */}
      {/* ========================================================= */}
      <section className="w-full bg-[#171717] text-[#FCFBF8] py-14 sm:py-18 border-t border-brand-charcoal">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          
          <h2 className="font-sans text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FCFBF8] tracking-tight">
            {cta.heading}
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E9E0D2] max-w-xl mx-auto leading-relaxed">
            {cta.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <Link
              href={cta.primaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#B89655] hover:bg-[#c9a764] text-[#171717] font-sans font-semibold text-sm rounded-md tracking-wide transition-colors shadow-sm"
            >
              <span>{cta.primaryButtonText}</span>
              <ArrowRight className="w-4 h-4 text-[#171717]" />
            </Link>

            <Link
              href={cta.secondaryButtonLink}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-[#FCFBF8]/40 hover:border-[#FCFBF8] text-[#FCFBF8] hover:bg-white/10 font-sans font-semibold text-sm rounded-md tracking-wide transition-colors"
            >
              <span>{cta.secondaryButtonText}</span>
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
