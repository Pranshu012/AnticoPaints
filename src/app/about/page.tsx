import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Layers, Paintbrush } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Antico Paints",
  description:
    "Learn about Antico Paints: our range of wall finishes, primers, emulsions and painting essentials.",
};

const VALUES = [
  {
    icon: Layers,
    title: "Surface Preparation",
    description: "Reliable primers and sealers that ensure strong adhesion and enduring wall finishes.",
  },
  {
    icon: Sparkles,
    title: "Refined Textures",
    description: "Decorative wall textures that bring tactile depth and character to interior and exterior surfaces.",
  },
  {
    icon: ShieldCheck,
    title: "Consistent Coverage",
    description: "Emulsions formulated for smooth flow, uniform coverage, and rich colour presentation.",
  },
  {
    icon: Paintbrush,
    title: "Practical Essentials",
    description: "Professional masking tapes and tools designed to keep project execution clean and precise.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-black text-brand-offwhite py-14 sm:py-20 border-b border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
              ABOUT ANTICO PAINTS
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-brand-beige-light tracking-tight">
              A considered range for your painting needs.
            </h1>
            <p className="text-sm sm:text-base text-brand-beige/80 leading-relaxed font-sans">
              From wall preparation to decorative textures and smooth emulsions, Antico Paints offers products designed for reliable coverage and quality finishes.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Mission & Story */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold block">
              OUR APPROACH
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-brand-black leading-snug">
              Quality finishes start with the right foundation.
            </h2>
            
            <p className="text-sm sm:text-base text-brand-black/80 leading-relaxed">
              Every successful paint job depends on proper surface preparation and dependable products. Whether you are refreshing an interior living room, creating a custom textured accent wall, or preparing new cement plaster for painting, Antico Paints provides the essentials you need.
            </p>
            
            <p className="text-sm sm:text-base text-brand-black/80 leading-relaxed">
              Our range includes cement wall primers for strong substrate binding, decorative textures for distinctive aesthetic character, smooth emulsions for rich interior colour, and professional accessories like masking tapes and edge protectors for clean execution.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
              {VALUES.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="p-5 bg-white border border-brand-beige shadow-xs space-y-2">
                    <Icon className="w-5 h-5 text-brand-gold" />
                    <h3 className="font-serif text-base text-brand-black">{val.title}</h3>
                    <p className="text-xs text-brand-muted leading-relaxed">{val.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Clean Product Overview Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-beige/25 border border-brand-beige p-7 shadow-xs space-y-5">
              <h3 className="font-serif text-xl text-brand-black">Our Product Range</h3>
              
              <ul className="space-y-3 text-xs font-sans text-brand-black/80">
                <li className="p-3 bg-white border border-brand-beige">
                  <span className="font-semibold block text-brand-black mb-0.5">
                    Texture &amp; Finishes
                  </span>
                  <p className="text-brand-muted">
                    Decorative textures designed to give walls distinctive depth and tactile style.
                  </p>
                </li>

                <li className="p-3 bg-white border border-brand-beige">
                  <span className="font-semibold block text-brand-black mb-0.5">
                    Primers &amp; Undercoats
                  </span>
                  <p className="text-brand-muted">
                    Cement wall primers that prepare and seal porous masonry before painting.
                  </p>
                </li>

                <li className="p-3 bg-white border border-brand-beige">
                  <span className="font-semibold block text-brand-black mb-0.5">
                    Emulsions &amp; Wall Paints
                  </span>
                  <p className="text-brand-muted">
                    Smooth interior emulsions offering rich colour, dependable washability, and even coats.
                  </p>
                </li>

                <li className="p-3 bg-white border border-brand-beige">
                  <span className="font-semibold block text-brand-black mb-0.5">
                    Painting Accessories
                  </span>
                  <p className="text-brand-muted">
                    Professional masking tapes and roller protectors for crisp paint lines and clean workspaces.
                  </p>
                </li>
              </ul>

              <div className="pt-2">
                <Link
                  href="/products/"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-brand-black hover:text-brand-gold transition-colors"
                >
                  <span>Explore All Products</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Contact Prompt */}
      <section className="bg-brand-black text-brand-offwhite py-14 border-t border-brand-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-offwhite">
            Have questions about our products?
          </h2>
          <p className="text-sm text-brand-beige/80 max-w-xl mx-auto leading-relaxed">
            Get in touch with our team for assistance, product guidance, and dealer inquiries.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-brand-gold text-brand-black hover:bg-brand-gold-light transition-colors text-xs uppercase tracking-wider font-medium"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
