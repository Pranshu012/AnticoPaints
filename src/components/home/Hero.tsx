import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Sparkles, Layers, Shield, Droplets } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-offwhite pt-12 pb-24 lg:pt-20 lg:pb-32 border-b border-brand-beige">
      {/* Subtle Background Geometry */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-beige/25 pointer-events-none -z-0" />
      <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-brand-gold/5 blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Architectural Typography & Value Prop */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 border border-brand-gold/40 bg-brand-beige/30 text-xs tracking-widest uppercase text-brand-black font-medium">
              <Image
                src="/images/logo/antico-symbol.png"
                alt="Antico Symbol"
                width={18}
                height={18}
                className="h-4 w-auto object-contain"
                style={{ maxHeight: "18px", width: "auto" }}
              />
              <span>Architectural Formulation &amp; Manufacturing</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-brand-black tracking-tight leading-[1.12]">
                Architectural <span className="italic font-normal">Precision.</span>
                <br />
                Timeless Formulation.
              </h1>
              <p className="text-base sm:text-lg text-brand-black/75 max-w-2xl font-sans leading-relaxed pt-2">
                Engineered for architects, commercial specifiers, and discerning interior environments. 
                Antico Paints manufactures high-solids emulsions, high-durability exterior barrier systems, 
                and artisan mineral plasters with deep pigment opacity.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button href="/colours" variant="primary" size="lg" className="gap-2">
                Explore Colour Palette
                <ArrowRight className="w-4 h-4" />
              </Button>

              <Button href="/products" variant="outline" size="lg">
                Product Collections
              </Button>

              <Button href="/#catalogues" variant="ghost" size="lg" className="gap-2 text-brand-black hover:text-brand-gold">
                <Download className="w-4 h-4 text-brand-gold" />
                Specification Catalogues
              </Button>
            </div>

            {/* Architectural Specification Metrics Ribbon */}
            <div className="pt-8 border-t border-brand-beige grid grid-cols-2 sm:grid-cols-4 gap-6 text-brand-black">
              <div>
                <span className="block font-serif text-2xl font-normal text-brand-gold-dark">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-brand-muted block mt-0.5">
                  Lightfast Pigments
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-brand-black">&lt; 3%</span>
                <span className="text-[11px] uppercase tracking-wider text-brand-muted block mt-0.5">
                  Ultra-Matt Sheen (60°)
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-brand-gold-dark">High-Solids</span>
                <span className="text-[11px] uppercase tracking-wider text-brand-muted block mt-0.5">
                  Commercial Wet Scrub
                </span>
              </div>
              <div>
                <span className="block font-serif text-2xl font-normal text-brand-black">Low-VOC</span>
                <span className="text-[11px] uppercase tracking-wider text-brand-muted block mt-0.5">
                  Engineered Indoor Air
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Plinth */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Architectural Border */}
              <div className="border border-brand-beige p-3 bg-brand-offwhite shadow-card">
                <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-brand-beige/40">
                  <Image
                    src="/images/hero/hero-architectural.svg"
                    alt="Antico Paints Architectural Elevation and Materiality"
                    fill
                    priority
                    className="object-cover"
                  />
                  
                  {/* Floating Swatch Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-brand-black/95 text-brand-offwhite p-4 backdrop-blur-sm border border-brand-gold/30 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] tracking-widest uppercase text-brand-gold font-sans font-medium">
                        Monolithic Study 01
                      </div>
                      <div className="font-serif text-sm tracking-wide text-brand-beige-light">
                        Antico Off-White &amp; Gilded Ochre
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full border border-brand-gold" style={{ backgroundColor: "#FCFBF8" }} title="Antico Off-White" />
                      <span className="w-5 h-5 rounded-full border border-brand-gold" style={{ backgroundColor: "#E9E0D2" }} title="Travertine Beige" />
                      <span className="w-5 h-5 rounded-full border border-brand-gold" style={{ backgroundColor: "#C08000" }} title="Antico Amber Gold" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Architectural Line Accent */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 border-r-2 border-b-2 border-brand-gold/40 pointer-events-none -z-0" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
