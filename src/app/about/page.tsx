import type { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/data/company";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ShieldCheck, Factory, Sparkles, Droplets, Award, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Our Formulations & Manufacturing | Antico Paints",
  description:
    "Learn about Antico Paints' architectural coatings philosophy, mineral pigment load, and commercial manufacturing standards.",
};

export default function AboutPage() {
  return (
    <div className="bg-brand-offwhite min-h-screen">
      {/* Hero Header */}
      <section className="bg-brand-black text-brand-offwhite py-16 sm:py-24 border-b border-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <Badge variant="gold">Manufacturing &amp; Philosophy</Badge>
            <h1 className="font-serif text-3xl sm:text-5xl text-brand-beige-light tracking-tight">
              Architectural Precision. Formulated for Permanence.
            </h1>
            <p className="text-sm sm:text-base text-brand-beige/80 leading-relaxed font-sans">
              Founded on the belief that commercial coatings should combine exacting optical depth 
              with unyielding substrate resilience.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative & Values */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-luxury text-brand-gold font-semibold block">
              Formulation Principles
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black leading-snug">
              Bridging Chemical Rigour and Design Sensibility
            </h2>
            
            <p className="text-sm text-brand-black/80 leading-relaxed">
              Commercial projects demand paints that do not simply colour a wall, but protect the investment in underlying masonry, plaster, and metalwork. Antico Paints approaches paint formulation from an architectural standpoint.
            </p>
            
            <p className="text-sm text-brand-black/80 leading-relaxed">
              By combining high-solids acrylic emulsions, micronised lightfast mineral pigments, and advanced siloxane binders, our formulations provide smooth application, uniform dry-down, and low light scattering across glancing angles.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
              {companyData.values.map((val, idx) => (
                <div key={idx} className="p-6 bg-brand-offwhite border border-brand-beige shadow-subtle space-y-2">
                  <div className="text-brand-gold font-serif text-lg">0{idx + 1}.</div>
                  <h3 className="font-serif text-base text-brand-black">{val.title}</h3>
                  <p className="text-xs text-brand-muted leading-relaxed">{val.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Manufacturing Facility & Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-beige/25 border border-brand-beige p-8 shadow-subtle space-y-6">
              <div className="flex items-center gap-3">
                <Factory className="w-5 h-5 text-brand-gold-dark" />
                <h3 className="font-serif text-xl text-brand-black">Manufacturing &amp; R&amp;D</h3>
              </div>

              <div className="space-y-4 text-xs font-sans text-brand-black/80">
                <div className="p-4 bg-brand-offwhite border border-brand-beige">
                  <span className="font-semibold block uppercase text-[10px] tracking-wider text-brand-muted mb-1">
                    Central Manufacturing Facility:
                  </span>
                  <p className="text-brand-black">{companyData.contact.plantAddressPlaceholder}</p>
                  <p className="text-[11px] text-brand-muted mt-1 italic">
                    [Placeholder: Facility production capacity, high-speed dispersers, and computerized tinting metrics pending verification]
                  </p>
                </div>

                <div className="p-4 bg-brand-offwhite border border-brand-beige">
                  <span className="font-semibold block uppercase text-[10px] tracking-wider text-brand-muted mb-1">
                    Corporate Entity &amp; Origin:
                  </span>
                  <p className="text-brand-black">{companyData.legalEntityPlaceholder}</p>
                  <p className="text-[11px] text-brand-muted mt-1">
                    {companyData.establishedPlaceholder}
                  </p>
                </div>

                <div className="p-4 bg-brand-offwhite border border-brand-beige">
                  <span className="font-semibold block uppercase text-[10px] tracking-wider text-brand-muted mb-1">
                    Testing Standards &amp; Certifications:
                  </span>
                  <p className="text-brand-black">{companyData.complianceNotice}</p>
                </div>
              </div>
            </div>

            {/* Specifier Advisory Note */}
            <div className="p-6 bg-brand-black text-brand-offwhite border border-brand-charcoal space-y-3">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold font-semibold">
                Commercial Specification Guarantee
              </span>
              <p className="text-xs text-brand-beige/80 leading-relaxed">
                We supply complete warranty matrices for qualified commercial projects when applied according to our written technical specification guidelines and approved primers.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs uppercase tracking-luxury text-brand-gold hover:underline inline-flex items-center gap-1 font-medium"
                >
                  Contact Our Technical Desk →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Sustainability & Environmental Stewardship */}
      <section className="bg-brand-beige-light py-20 border-t border-brand-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <Badge variant="gold">Environmental Standards</Badge>
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-black">
              Low-VOC Engineering &amp; Clean Formulations
            </h2>
            <p className="text-sm text-brand-muted leading-relaxed font-sans">
              Interior air quality is a non-negotiable architectural requirement. 
              Our emulsions and waterborne enamels are formulated without ozone-depleting solvents, 
              meeting stringent VOC requirements for enclosed commercial, healthcare, and educational facilities.
            </p>
            <p className="text-xs text-brand-muted italic">
              [Placeholder: Specific VOC g/L lab reports per formulation available upon request from the technical desk]
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
