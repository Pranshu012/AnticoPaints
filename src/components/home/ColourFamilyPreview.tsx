"use client";

import React, { useState } from "react";
import Link from "next/link";
import { colourFamiliesData, allShades } from "@/data/colours";
import { ColourShade } from "@/types";
import { Copy, Check, ArrowRight, Sparkles, Layers, SlidersHorizontal } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ColourFamilyPreview() {
  const [activeFamilyId, setActiveFamilyId] = useState<string>("warm-neutrals");
  const activeFamily =
    colourFamiliesData.find((f) => f.id === activeFamilyId) ||
    colourFamiliesData[0];

  const [selectedShade, setSelectedShade] = useState<ColourShade>(
    activeFamily.shades[0]
  );
  const [copiedHex, setCopiedHex] = useState(false);

  const handleFamilyChange = (id: string) => {
    setActiveFamilyId(id);
    const newFam = colourFamiliesData.find((f) => f.id === id);
    if (newFam && newFam.shades.length > 0) {
      setSelectedShade(newFam.shades[0]);
    }
  };

  const copyToClipboard = (hex: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    }
  };

  return (
    <section className="py-24 bg-brand-offwhite relative overflow-hidden border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-luxury text-brand-gold font-sans font-semibold">
              Colour Architecture &amp; Chromatic Library
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black tracking-tight">
              Curated Colour Family Exploration
            </h2>
            <p className="text-brand-muted text-sm sm:text-base font-sans">
              Inspired by mineral earth, limestone sediments, and aged gilded accents. 
              Each shade is calibrated for optical balance and natural daylight reflectance.
            </p>
          </div>

          <Link
            href="/colours"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-luxury font-medium text-brand-black hover:text-brand-gold transition-colors pb-1 border-b border-brand-black/30 hover:border-brand-gold w-fit"
          >
            <span>Launch Interactive Colour Studio</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Family Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-brand-beige no-scrollbar">
          {colourFamiliesData.map((family) => {
            const isActive = family.id === activeFamilyId;
            return (
              <button
                key={family.id}
                onClick={() => handleFamilyChange(family.id)}
                className={`px-5 py-2.5 text-xs uppercase tracking-luxury whitespace-nowrap transition-all duration-200 border flex items-center gap-2.5 ${
                  isActive
                    ? "bg-brand-black text-brand-beige border-brand-black font-semibold shadow-subtle"
                    : "bg-brand-offwhite text-brand-black/70 border-brand-beige hover:border-brand-gold hover:text-brand-black"
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: family.accentHex }}
                />
                <span>{family.name}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive Explorer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Swatch Selection Grid */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-brand-offwhite border border-brand-beige p-6 sm:p-8 shadow-subtle">
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-brand-beige">
                <div>
                  <h3 className="font-serif text-xl text-brand-black">
                    {activeFamily.name}
                  </h3>
                  <p className="text-xs text-brand-muted mt-1">
                    {activeFamily.tagline}
                  </p>
                </div>
                <Badge variant="beige">
                  {activeFamily.shades.length} Formulated Shades
                </Badge>
              </div>

              {/* Swatch Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {activeFamily.shades.map((shade) => {
                  const isSelected = shade.id === selectedShade.id;
                  return (
                    <button
                      key={shade.id}
                      onClick={() => setSelectedShade(shade)}
                      className={`group flex flex-col text-left transition-all duration-200 focus-visible:outline-none ${
                        isSelected
                          ? "ring-2 ring-brand-gold ring-offset-2 scale-[1.02]"
                          : "hover:scale-[1.01]"
                      }`}
                      aria-label={`Select shade ${shade.name}`}
                    >
                      {/* Swatch colour block */}
                      <div
                        className="w-full aspect-[4/3] rounded-sm border border-brand-black/10 shadow-sm relative overflow-hidden transition-transform"
                        style={{ backgroundColor: shade.hex }}
                      >
                        {isSelected && (
                          <div className="absolute top-2 right-2 bg-brand-black/80 text-brand-gold p-1 rounded-full">
                            <Check className="w-3 h-3" />
                          </div>
                        )}
                      </div>

                      {/* Swatch label */}
                      <div className="pt-2.5">
                        <div className="font-serif text-xs font-medium text-brand-black truncate">
                          {shade.name}
                        </div>
                        <div className="text-[10px] text-brand-muted font-mono flex items-center justify-between">
                          <span>{shade.code}</span>
                          <span>LRV {shade.lrv}%</span>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Description note */}
            <p className="text-xs text-brand-muted italic leading-relaxed">
              * Note: On-screen colour representations may vary depending on monitor calibration, ambient illumination, and viewing angle. 
              Always test physical sample wet pots on primed substrate prior to broad-scale application.
            </p>
          </div>

          {/* Active Shade Detail Card & Wall Simulation */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-black text-brand-offwhite border border-brand-charcoal overflow-hidden shadow-card">
              
              {/* Simulated Architectural Wall Mock */}
              <div
                className="h-48 sm:h-56 w-full relative transition-colors duration-500 flex flex-col justify-between p-6 border-b border-brand-charcoal"
                style={{ backgroundColor: selectedShade.hex }}
              >
                {/* Architectural frame overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />
                
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-2.5 py-1 text-[10px] tracking-widest uppercase bg-brand-black/85 text-brand-beige border border-brand-gold/40">
                    Live Formulation
                  </span>
                  <button
                    onClick={() => copyToClipboard(selectedShade.hex)}
                    className="px-2.5 py-1 text-[10px] tracking-wider uppercase bg-brand-black/85 text-brand-offwhite hover:text-brand-gold border border-brand-charcoal flex items-center gap-1.5 transition-colors"
                    title="Copy HEX Code"
                  >
                    {copiedHex ? (
                      <>
                        <Check className="w-3 h-3 text-brand-gold" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{selectedShade.hex}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="relative z-10 text-brand-black">
                  <div
                    className="p-3 bg-brand-offwhite/95 backdrop-blur-sm inline-block border border-brand-black/10 shadow-sm"
                  >
                    <div className="font-serif text-lg text-brand-black leading-none font-medium">
                      {selectedShade.name}
                    </div>
                    <div className="text-[10px] font-mono text-brand-muted tracking-wider mt-1">
                      {selectedShade.code} // {selectedShade.hex}
                    </div>
                  </div>
                </div>
              </div>

              {/* Shade Specifications */}
              <div className="p-6 sm:p-8 space-y-6">
                <div className="grid grid-cols-2 gap-4 pb-6 border-b border-brand-charcoal">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
                      Light Reflectance (LRV)
                    </span>
                    <span className="font-serif text-xl text-brand-beige-light">
                      {selectedShade.lrv}%
                    </span>
                    <span className="text-[10px] text-brand-beige/60 block mt-0.5">
                      {selectedShade.lrv > 60
                        ? "High ambient dispersion"
                        : selectedShade.lrv > 30
                        ? "Balanced mid-tone absorbency"
                        : "Deep optical shadow absorbing"}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block">
                      Recommended System
                    </span>
                    <span className="font-serif text-base text-brand-gold block mt-0.5">
                      {selectedShade.finishRecommendation}
                    </span>
                    <span className="text-[10px] text-brand-beige/60 block mt-0.5">
                      Optimal pigment suspension
                    </span>
                  </div>
                </div>

                {/* Pairing Suggestions */}
                {selectedShade.pairingSuggestions && (
                  <div className="space-y-2.5">
                    <span className="text-[10px] uppercase tracking-luxury text-brand-gold block font-semibold">
                      Architectural Harmonies &amp; Pairings
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedShade.pairingSuggestions.map((pair, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 bg-brand-charcoal text-[11px] text-brand-beige-light border border-brand-charcoal"
                        >
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Links */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/colours?shade=${selectedShade.id}`}
                    className="flex-1 py-3 text-center text-xs uppercase tracking-luxury font-medium bg-brand-gold text-brand-black hover:bg-brand-gold-dark hover:text-brand-offwhite transition-colors"
                  >
                    View in Full Library
                  </Link>

                  <Link
                    href={`/contact?sample=${encodeURIComponent(selectedShade.name)}`}
                    className="flex-1 py-3 text-center text-xs uppercase tracking-luxury font-medium border border-brand-beige/30 text-brand-beige hover:border-brand-gold hover:text-brand-gold transition-colors"
                  >
                    Request Sample Wet Pot
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
