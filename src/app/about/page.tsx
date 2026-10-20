import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Users, Eye, MessageSquare, TrendingUp } from "lucide-react";
import { aboutPageData } from "@/data/company";

export const metadata: Metadata = {
  title: "About Us | Antico Paints",
  description:
    "Learn about Antico Paints: our mission, customer commitment, and dedication to understanding needs and building trust.",
};

const PRINCIPLE_ICONS = {
  accessibility: Users,
  understanding: Eye,
  responsiveness: MessageSquare,
  "continuous-improvement": TrendingUp,
};

export default function AboutPage() {
  const { intro, mission, commitment, closing } = aboutPageData;

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* 1. Page Introduction */}
      <section className="bg-brand-black text-brand-offwhite py-16 sm:py-20 lg:py-24 border-b border-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
            {intro.eyebrow}
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-brand-offwhite tracking-tight leading-[1.15]">
            {intro.heading}
          </h1>
          <p className="text-base sm:text-lg text-brand-beige/85 max-w-2xl mx-auto font-sans leading-relaxed pt-1">
            {intro.description}
          </p>
        </div>
      </section>

      {/* 2. Our Mission */}
      <section className="py-16 sm:py-20 bg-[#F5EFE6] border-b border-brand-beige">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
            OUR MISSION
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black tracking-tight leading-snug">
            {mission.heading}
          </h2>
          <p className="text-base sm:text-lg text-brand-black/80 font-sans leading-relaxed pt-2">
            {mission.content}
          </p>
        </div>
      </section>

      {/* 3. Our Commitment to Customers */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block mb-2">
            OUR COMMITMENT
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black tracking-tight">
            {commitment.heading}
          </h2>
          <p className="text-sm sm:text-base text-brand-black/75 font-sans mt-3 leading-relaxed">
            {commitment.introduction}
          </p>
        </div>

        {/* 4 Consistency Principles Cards: 1 col on mobile, 2 col on tablet, 4 col on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitment.principles.map((principle, index) => {
            const Icon =
              PRINCIPLE_ICONS[principle.id as keyof typeof PRINCIPLE_ICONS] || Users;
            const stepNumber = `0${index + 1}`;

            return (
              <div
                key={principle.id}
                className="bg-white border border-brand-beige p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:border-brand-gold/60 transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xs bg-[#F5EFE6] border border-brand-beige flex items-center justify-center text-brand-gold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-serif text-sm text-brand-muted/70">
                      {stepNumber}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-lg font-medium text-brand-black">
                      {principle.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-brand-muted font-sans mt-2 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Closing Section */}
      <section className="bg-brand-black text-brand-offwhite py-16 sm:py-20 border-t border-brand-charcoal">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
            LOOKING AHEAD
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-offwhite tracking-tight">
            {closing.heading}
          </h2>
          <p className="text-sm sm:text-base text-brand-beige/80 font-sans leading-relaxed max-w-2xl mx-auto">
            {closing.content}
          </p>
          <div className="pt-3">
            <Link
              href={closing.buttonLink}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors text-sm font-sans font-medium tracking-wide"
            >
              <span>{closing.buttonText}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
