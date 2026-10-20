"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData } from "@/data/projects";
import { ArrowUpRight, Building2, MapPin, Layers } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export function ApplicationsGallery() {
  const [activeSector, setActiveSector] = useState<string>("All");

  const sectors = ["All", "Commercial", "Luxury Residential", "Hospitality", "Institutional"];

  const filteredProjects =
    activeSector === "All"
      ? projectsData
      : projectsData.filter((p) => p.sector === activeSector);

  return (
    <section className="py-24 bg-brand-offwhite border-b border-brand-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-[11px] uppercase tracking-luxury text-brand-gold font-sans font-semibold">
              Built Work &amp; Project Specifications
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black tracking-tight">
              Applications &amp; Architectural Gallery
            </h2>
            <p className="text-brand-muted text-sm sm:text-base font-sans">
              From high-traffic corporate atriums to coastal cliffside residences and historic masonry restorations.
            </p>
          </div>

          {/* Sector Filter Chips */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-brand-beige sm:border-b-0">
            {sectors.map((sector) => (
              <button
                key={sector}
                onClick={() => setActiveSector(sector)}
                className={`px-3.5 py-1.5 text-xs uppercase tracking-luxury transition-all ${
                  activeSector === sector
                    ? "bg-brand-black text-brand-beige font-semibold"
                    : "bg-transparent text-brand-black/60 hover:text-brand-gold hover:bg-brand-beige/30"
                }`}
              >
                {sector}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-brand-offwhite border border-brand-beige overflow-hidden shadow-subtle hover:shadow-hover transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-beige/40">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="dark">{project.sector}</Badge>
                </div>
                <div className="absolute bottom-4 left-4 bg-brand-black/85 backdrop-blur-sm text-brand-offwhite px-3 py-1 text-[11px] font-sans flex items-center gap-1.5 border border-brand-gold/30">
                  <MapPin className="w-3 h-3 text-brand-gold" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Information */}
              <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-2xl text-brand-black group-hover:text-brand-gold-dark transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-[10px] font-mono text-brand-muted">
                      {project.yearPlaceholder}
                    </span>
                  </div>

                  <p className="text-xs text-brand-black/75 leading-relaxed font-sans">
                    {project.description}
                  </p>
                </div>

                {/* Products & Palette metadata */}
                <div className="pt-4 border-t border-brand-beige/80 space-y-3 text-xs">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold mb-1">
                      Coatings Specified:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.productsUsed.map((prod, pIdx) => (
                        <span
                          key={pIdx}
                          className="px-2 py-0.5 bg-brand-beige/40 text-[11px] text-brand-black border border-brand-beige"
                        >
                          {prod}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-muted block font-semibold mb-1">
                      Finish Palette:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.finishPalette.map((pal, palIdx) => (
                        <span
                          key={palIdx}
                          className="px-2 py-0.5 bg-brand-offwhite text-[11px] text-brand-black border border-brand-beige-dark font-mono"
                        >
                          {pal}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer action */}
                <div className="pt-2">
                  <Link
                    href={`/contact?project=${encodeURIComponent(project.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-luxury text-brand-black font-medium hover:text-brand-gold transition-colors"
                  >
                    <span>Enquire for similar specification</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
