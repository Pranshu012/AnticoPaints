"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { colourFamiliesData, allShades } from "@/data/colours";
import { ColourShade } from "@/types";
import { Copy, Check, Search, X } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ColoursClient() {
  const searchParams = useSearchParams();
  const initialFamily = searchParams.get("family") || "all";
  const initialShadeId = searchParams.get("shade");

  const [activeFamily, setActiveFamily] = useState<string>(initialFamily);
  const [activeTone, setActiveTone] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedModalShade, setSelectedModalShade] = useState<ColourShade | null>(
    initialShadeId ? allShades.find((s) => s.id === initialShadeId) || null : null
  );
  const [copiedHex, setCopiedHex] = useState(false);

  // Filter shades
  const filteredShades = allShades.filter((shade) => {
    const matchesFamily =
      activeFamily === "all" || shade.familyId === activeFamily;
    const matchesTone =
      activeTone === "all" || shade.tone === activeTone;
    const matchesSearch =
      shade.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shade.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shade.hex.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFamily && matchesTone && matchesSearch;
  });

  const copyToClipboard = (hex: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(hex);
      setCopiedHex(true);
      setTimeout(() => setCopiedHex(false), 2000);
    }
  };

  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-black text-brand-offwhite py-14 sm:py-20 border-b border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
              COLOUR COLLECTION
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl text-brand-beige-light tracking-tight">
              Curated Colours for Every Space
            </h1>
            <p className="text-sm sm:text-base text-brand-beige/80 leading-relaxed font-sans">
              Explore our range of shades across warm neutrals, golds, architectural greys, earthy terracottas, and deep botanicals.
            </p>
          </div>
        </div>
      </section>

      {/* Sticky Filter and Family Selection */}
      <section className="sticky top-20 z-30 bg-brand-offwhite/95 backdrop-blur-md border-b border-brand-beige py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Family Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            <button
              onClick={() => setActiveFamily("all")}
              className={`px-4 py-2 text-xs uppercase tracking-luxury whitespace-nowrap transition-all border ${
                activeFamily === "all"
                  ? "bg-brand-black text-brand-beige border-brand-black font-semibold"
                  : "bg-brand-offwhite text-brand-black/70 border-brand-beige hover:border-brand-gold hover:text-brand-black"
              }`}
            >
              All Families ({allShades.length})
            </button>
            {colourFamiliesData.map((family) => (
              <button
                key={family.id}
                onClick={() => setActiveFamily(family.id)}
                className={`px-4 py-2 text-xs uppercase tracking-luxury whitespace-nowrap transition-all border flex items-center gap-2 ${
                  activeFamily === family.id
                    ? "bg-brand-black text-brand-beige border-brand-black font-semibold"
                    : "bg-brand-offwhite text-brand-black/70 border-brand-beige hover:border-brand-gold hover:text-brand-black"
                }`}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0"
                  style={{ backgroundColor: family.accentHex }}
                />
                <span>{family.name}</span>
              </button>
            ))}
          </div>

          {/* Controls: Tone Filters and Search */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-1 border-t border-brand-beige/60">
            {/* Tone filter buttons */}
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[10px] uppercase tracking-wider text-brand-muted font-semibold mr-1">
                Tone:
              </span>
              {[
                { label: "All Tones", value: "all" },
                { label: "Light", value: "light" },
                { label: "Mid", value: "mid" },
                { label: "Deep", value: "deep" },
              ].map((t) => (
                <button
                  key={t.value}
                  onClick={() => setActiveTone(t.value)}
                  className={`px-2.5 py-1 text-[11px] uppercase tracking-wider transition-colors ${
                    activeTone === t.value
                      ? "bg-brand-gold text-brand-black font-semibold"
                      : "bg-brand-beige/30 text-brand-black/70 hover:bg-brand-beige"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-brand-muted absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by shade name, code, or hex..."
                className="w-full pl-9 pr-4 py-1.5 bg-brand-offwhite border border-brand-beige text-xs text-brand-black placeholder-brand-muted focus:border-brand-gold focus:outline-none"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Colour Grid */}
      <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 flex items-center justify-between text-xs text-brand-muted">
          <span>Showing {filteredShades.length} shades</span>
          <span className="italic">* Click any shade to view details and recommendations</span>
        </div>

        {filteredShades.length === 0 ? (
          <div className="text-center py-20 bg-brand-beige/20 border border-brand-beige p-8">
            <p className="font-serif text-lg text-brand-black">No shades matched your filters.</p>
            <p className="text-xs text-brand-muted mt-1">Try clearing your search query or selecting &quot;All Families&quot;.</p>
            <button
              onClick={() => {
                setActiveFamily("all");
                setActiveTone("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 text-xs uppercase tracking-luxury bg-brand-black text-brand-beige"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6">
            {filteredShades.map((shade) => (
              <button
                key={shade.id}
                onClick={() => setSelectedModalShade(shade)}
                className="group flex flex-col text-left bg-white border border-brand-beige hover:border-brand-gold p-3 transition-all duration-200 shadow-xs hover:shadow-card focus-visible:outline-none"
              >
                {/* Colour Swatch */}
                <div
                  className="w-full aspect-square rounded-xs border border-brand-black/10 shadow-inner relative overflow-hidden transition-transform duration-200 group-hover:scale-[1.02]"
                  style={{ backgroundColor: shade.hex }}
                >
                  <div className="absolute inset-0 bg-brand-black/0 group-hover:bg-brand-black/20 transition-colors flex items-center justify-center">
                    <span className="opacity-0 group-hover:opacity-100 bg-brand-black/90 text-brand-gold px-2 py-1 text-[9px] uppercase tracking-wider font-medium transition-opacity">
                      View
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="pt-3 space-y-1">
                  <div className="font-serif text-xs font-medium text-brand-black truncate group-hover:text-brand-gold-dark">
                    {shade.name}
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-mono text-brand-muted">
                    <span>{shade.code}</span>
                    <span>{shade.tone}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </section>

      {/* Modal / Detailed Shade Inspector */}
      {selectedModalShade && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-black/70 backdrop-blur-xs animate-fadeIn">
          <div className="bg-brand-offwhite border border-brand-beige max-w-lg w-full overflow-hidden shadow-card">
            
            {/* Modal Header */}
            <div className="p-4 border-b border-brand-beige flex items-center justify-between bg-brand-beige/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-brand-gold" />
                <span className="text-[10px] uppercase tracking-luxury text-brand-black font-semibold">
                  Shade Details
                </span>
              </div>
              <button
                onClick={() => setSelectedModalShade(null)}
                className="p-1 text-brand-black hover:text-brand-gold transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div>
              {/* Swatch Render Block */}
              <div
                className="h-44 sm:h-52 w-full relative flex items-end p-5 border-b border-brand-beige"
                style={{ backgroundColor: selectedModalShade.hex }}
              >
                <div className="bg-brand-black/95 text-brand-offwhite p-3.5 border border-brand-gold/30 backdrop-blur-xs flex items-center justify-between w-full">
                  <div>
                    <h3 className="font-serif text-lg text-brand-beige-light leading-none">
                      {selectedModalShade.name}
                    </h3>
                    <div className="text-[10px] font-mono text-brand-gold tracking-wider mt-1">
                      {selectedModalShade.code} • {selectedModalShade.familyName}
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(selectedModalShade.hex)}
                    className="px-3 py-1.5 text-[10px] tracking-wider uppercase bg-brand-charcoal text-brand-offwhite hover:text-brand-gold border border-brand-charcoal flex items-center gap-1.5 transition-colors"
                  >
                    {copiedHex ? (
                      <>
                        <Check className="w-3 h-3 text-brand-gold" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>{selectedModalShade.hex}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Specifications */}
              <div className="p-6 space-y-5">
                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-brand-beige">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">
                      Tone
                    </span>
                    <span className="font-serif text-lg text-brand-black mt-0.5 block capitalize">
                      {selectedModalShade.tone} Tone
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">
                      Recommended Finish
                    </span>
                    <span className="font-serif text-base text-brand-gold-dark mt-0.5 block">
                      {selectedModalShade.finishRecommendation}
                    </span>
                  </div>
                </div>

                {/* Pairing suggestions */}
                {selectedModalShade.pairingSuggestions && (
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold">
                      Harmonious Pairings:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedModalShade.pairingSuggestions.map((pair, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2.5 py-1 bg-brand-beige/50 text-[11px] text-brand-black border border-brand-beige font-mono"
                        >
                          {pair}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <Link
                    href={`/contact?shade=${encodeURIComponent(selectedModalShade.name)}`}
                    className="flex-1 py-3 text-center text-xs uppercase tracking-luxury font-medium bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors"
                  >
                    Inquire About This Shade
                  </Link>

                  <button
                    onClick={() => setSelectedModalShade(null)}
                    className="py-3 px-6 text-xs uppercase tracking-luxury border border-brand-black/30 hover:bg-brand-beige/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Advisory Callout */}
      <section className="bg-brand-beige-light py-14 border-t border-brand-beige">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold block">
            NEED ASSISTANCE?
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl text-brand-black">
            Finding the Right Colour for Your Project
          </h2>
          <p className="text-sm text-brand-muted max-w-xl mx-auto leading-relaxed">
            Our team is available to help answer questions about finishes, surface preparation, and colour choices.
          </p>
          <div className="pt-2">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center px-7 py-3 bg-brand-black text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-colors text-xs uppercase tracking-wider font-medium"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
