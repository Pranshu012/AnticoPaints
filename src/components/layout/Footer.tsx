import React from "react";
import Image from "next/image";
import Link from "next/link";
import { companyData, cataloguesData } from "@/data/company";
import { categoriesData } from "@/data/products";
import { ArrowUpRight, ShieldCheck, FileText, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-black text-brand-beige border-t border-brand-charcoal pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand & Mission Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-brand-charcoal">
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="relative h-14 w-48 sm:w-56">
                <Image
                  src="/images/logo/antico-logo-white.png"
                  alt="Antico Paints"
                  fill
                  sizes="(max-width: 640px) 192px, 224px"
                  className="object-contain object-left"
                />
              </div>
              <span className="text-[10px] tracking-[0.25em] text-brand-gold uppercase font-sans block">
                Commercial Architectural Manufacturing
              </span>
            </div>

            <p className="text-sm text-brand-beige/80 leading-relaxed font-sans max-w-md">
              {companyData.missionStatement}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-brand-gold">
              <ShieldCheck className="w-4 h-4" />
              <span>Specification-Grade Chemistry &amp; High-Solids Formulations</span>
            </div>

            <div className="p-4 bg-brand-charcoal/50 border border-brand-gold/20 text-xs text-brand-beige/70 space-y-1">
              <div className="text-[10px] tracking-widest uppercase text-brand-gold font-semibold">
                Commercial Specification Notice
              </div>
              <p>{companyData.specificationsNotice}</p>
            </div>
          </div>

          {/* Product Collections Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-brand-offwhite">
              Collections
            </h3>
            <ul className="space-y-2.5 text-xs">
              {categoriesData.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="text-brand-beige/80 hover:text-brand-gold transition-colors block py-0.5"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="text-brand-gold hover:underline inline-flex items-center gap-1 pt-1 font-medium"
                >
                  View All Systems <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Colour Architecture Column */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-brand-offwhite">
              Colour Library
            </h3>
            <ul className="space-y-2.5 text-xs text-brand-beige/80">
              <li>
                <Link href="/colours?family=warm-neutrals" className="hover:text-brand-gold transition-colors">
                  Warm Neutrals
                </Link>
              </li>
              <li>
                <Link href="/colours?family=golds-ochres" className="hover:text-brand-gold transition-colors">
                  Regal Ochres &amp; Golds
                </Link>
              </li>
              <li>
                <Link href="/colours?family=mineral-greys-blacks" className="hover:text-brand-gold transition-colors">
                  Architectural Greys
                </Link>
              </li>
              <li>
                <Link href="/colours?family=terracotta-clays" className="hover:text-brand-gold transition-colors">
                  Earthy Terracottas
                </Link>
              </li>
              <li>
                <Link href="/colours?family=botanicals-greens" className="hover:text-brand-gold transition-colors">
                  Deep Botanicals
                </Link>
              </li>
              <li>
                <Link
                  href="/colours"
                  className="text-brand-gold hover:underline inline-flex items-center gap-1 pt-1 font-medium"
                >
                  Colour Studio <ArrowUpRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Architectural Downloads & Placeholders */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-serif text-sm tracking-widest uppercase text-brand-offwhite">
              Specification Desk
            </h3>
            <div className="space-y-3 text-xs text-brand-beige/80">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{companyData.contact.officeAddressPlaceholder}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span className="font-mono text-[11px]">{companyData.contact.emailPlaceholder}</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <span>{companyData.contact.phonePlaceholder}</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-brand-gold block mb-2 font-medium">
                Catalogues (PDF)
              </span>
              <ul className="space-y-1.5 text-xs">
                {cataloguesData.slice(0, 2).map((cat) => (
                  <li key={cat.id}>
                    <a
                      href={cat.filePath}
                      download
                      className="inline-flex items-center gap-1.5 text-brand-beige hover:text-brand-gold transition-colors py-0.5"
                    >
                      <FileText className="w-3 h-3 text-brand-gold" />
                      <span>{cat.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Certifications & Compliance Placeholder Row */}
        <div className="py-6 border-b border-brand-charcoal text-xs text-brand-beige/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-brand-gold uppercase text-[10px] tracking-widest font-semibold">
              Compliance Standard:
            </span>
            <span>{companyData.complianceNotice}</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] tracking-wider uppercase">
            <Link href="/about" className="hover:text-brand-gold transition-colors">
              About Formulation
            </Link>
            <Link href="/contact" className="hover:text-brand-gold transition-colors">
              Sample Kit Request
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-brand-muted gap-4">
          <p>© {new Date().getFullYear()} Antico Paints. All rights reserved. Commercial Architectural Coatings.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Static Export Architecture</span>
            <span className="w-1 h-1 rounded-full bg-brand-gold" />
            <span>Cloudflare Pages Optimized</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
