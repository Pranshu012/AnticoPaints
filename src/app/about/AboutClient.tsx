"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { aboutPageData } from "@/data/company";

// Lightweight, high-performance IntersectionObserver hook for scroll reveals
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(element);
        }
      },
      { threshold }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isInView };
}

export function AboutClient() {
  const { intro, mission, commitment, cta } = aboutPageData;

  // Scroll reveal hooks for each section
  const introReveal = useInView(0.1);
  const imageReveal = useInView(0.1);
  const missionReveal = useInView(0.15);
  const commitmentReveal = useInView(0.15);
  const ctaReveal = useInView(0.15);

  return (
    <div className="bg-brand-offwhite min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-20 sm:pb-28">
        
        {/* ========================================================= */}
        {/* Section A — Introduction & Wide Hero Photograph           */}
        {/* ========================================================= */}
        <section className="space-y-6 sm:space-y-8">
          
          {/* Header Typography with smooth load fade */}
          <div
            ref={introReveal.ref}
            className={`space-y-4 transition-all duration-700 ease-out transform ${
              introReveal.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }`}
          >
            {/* Eyebrow */}
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-semibold text-brand-gold block">
              {intro.eyebrow}
            </span>

            {/* Bold Sans-Serif Heading */}
            <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight leading-[1.14]">
              {intro.heading}
            </h1>

            {/* Narrative Description */}
            <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed max-w-3xl">
              {intro.description}
            </p>
          </div>

          {/* Wide Rounded Photograph with subtle reveal & hover depth */}
          <div
            ref={imageReveal.ref}
            className={`pt-2 transition-all duration-1000 ease-out transform ${
              imageReveal.isInView
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-8 scale-[0.98]"
            }`}
          >
            <div className="group relative w-full aspect-[21/9] sm:aspect-[2.35/1] rounded-2xl overflow-hidden shadow-card border border-brand-beige/80 bg-brand-beige/20">
              <Image
                src={intro.image}
                alt={intro.imageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 896px, 100vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
            </div>
          </div>

        </section>

        {/* Section Spacer */}
        <div className="h-14 sm:h-20" />

        {/* ========================================================= */}
        {/* Section B — Our Mission (Warm Inset Card)                  */}
        {/* ========================================================= */}
        <section
          ref={missionReveal.ref}
          className={`transition-all duration-800 ease-out transform ${
            missionReveal.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-[#F2ECE1] rounded-2xl p-7 sm:p-11 border border-brand-beige shadow-xs space-y-3 relative overflow-hidden">
            {/* Subtle aesthetic accent bar */}
            <div className="w-10 h-0.5 bg-brand-gold mb-4" />

            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-semibold text-brand-gold block">
              {mission.eyebrow}
            </span>

            <h2 className="font-sans text-2xl sm:text-3.5xl font-bold text-neutral-900 tracking-tight leading-snug">
              {mission.heading}
            </h2>

            <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed max-w-3xl pt-1">
              {mission.description}
            </p>
          </div>
        </section>

        {/* Section Spacer */}
        <div className="h-16 sm:h-24" />

        {/* ========================================================= */}
        {/* Section C — Our Commitment (Staggered Divided Rows)       */}
        {/* ========================================================= */}
        <section
          ref={commitmentReveal.ref}
          className="space-y-6"
        >
          {/* Section Heading */}
          <div
            className={`space-y-2 transition-all duration-700 ease-out transform ${
              commitmentReveal.isInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-xs sm:text-sm uppercase tracking-[0.18em] font-sans font-semibold text-brand-gold block">
              {commitment.eyebrow}
            </span>

            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {commitment.heading}
            </h2>
          </div>

          {/* Staggered Horizontal Divided Rows */}
          <div className="border-t border-brand-beige/80 divide-y divide-brand-beige/80">
            {commitment.principles.map((item, index) => {
              // Stagger delay based on index
              const delayClass =
                index === 0
                  ? "delay-100"
                  : index === 1
                  ? "delay-200"
                  : index === 2
                  ? "delay-300"
                  : "delay-400";

              return (
                <div
                  key={item.id}
                  className={`group py-6 sm:py-7 flex items-start gap-4 sm:gap-6 -mx-3 px-3 rounded-xl transition-all duration-700 ease-out hover:bg-[#F6EFE5]/50 transform ${delayClass} ${
                    commitmentReveal.isInView
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                >
                  {/* Gold Number with subtle hover shift */}
                  <span className="font-sans text-lg sm:text-xl font-bold text-brand-gold shrink-0 w-8 sm:w-10 pt-0.5 transition-transform duration-300 group-hover:scale-105">
                    {item.number}
                  </span>

                  {/* Text Block */}
                  <div className="space-y-1">
                    <h3 className="font-sans text-base sm:text-lg font-bold text-neutral-900 transition-colors duration-200 group-hover:text-brand-black">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Section Spacer */}
        <div className="h-16 sm:h-24" />

        {/* ========================================================= */}
        {/* Section D — Product CTA                                   */}
        {/* ========================================================= */}
        <section
          ref={ctaReveal.ref}
          className={`transition-all duration-800 ease-out transform ${
            ctaReveal.isInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white border border-brand-beige rounded-2xl p-8 sm:p-12 text-center space-y-4 shadow-card">
            <h2 className="font-sans text-2xl sm:text-3xl font-bold text-neutral-900 tracking-tight">
              {cta.heading}
            </h2>

            <p className="font-sans text-sm sm:text-base text-neutral-600 max-w-lg mx-auto leading-relaxed">
              {cta.description}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
              <Link
                href={cta.primaryButtonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-black text-white hover:bg-brand-gold hover:text-brand-black transition-all duration-200 text-sm font-sans font-medium rounded-lg tracking-wide shadow-xs hover:shadow-subtle"
              >
                <span>{cta.primaryButtonText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href={cta.secondaryButtonLink}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-neutral-300 text-neutral-800 hover:border-brand-black hover:bg-neutral-50 transition-all duration-200 text-sm font-sans font-medium rounded-lg tracking-wide"
              >
                {cta.secondaryButtonText}
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
