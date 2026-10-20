import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { homeMissionData } from "@/data/company";

export function HomeMissionSection() {
  const { eyebrow, heading, content, linkText, linkHref } = homeMissionData;

  return (
    <section className="bg-[#F5EFE6] py-12 sm:py-16 border-b border-brand-beige">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        
        {/* Eyebrow */}
        <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
          {eyebrow}
        </span>

        {/* Heading */}
        <h2 className="font-serif text-2xl sm:text-3xl lg:text-3xl text-brand-black tracking-tight leading-snug">
          {heading}
        </h2>

        {/* Mission Statement Copy */}
        <p className="text-sm sm:text-base text-brand-black/80 max-w-xl mx-auto font-sans leading-relaxed">
          {content}
        </p>

        {/* Compact About Us Link */}
        <div className="pt-2">
          <Link
            href={linkHref}
            className="group inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-black hover:text-brand-gold transition-colors py-1"
          >
            <span>{linkText}</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
