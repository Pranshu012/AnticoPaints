"use client";

import React from "react";
import Image from "next/image";
import { Instagram, ExternalLink, ArrowRight } from "lucide-react";
import { socialMediaLinks } from "@/data/company";
import { trackSocialClick } from "@/lib/analytics";

interface InstagramPostPreview {
  id: string;
  image: string;
  alt: string;
  category: string;
  tag: string;
}

const INSTAGRAM_PREVIEWS: InstagramPostPreview[] = [
  {
    id: "post-interior",
    image: "/images/hero/hero-contemporary-interior.png",
    alt: "Contemporary living interior with smooth finished warm neutral walls",
    category: "Interior Emulsions",
    tag: "#WarmMinimalism",
  },
  {
    id: "post-craft",
    image: "/images/about/about-wall-craft.png",
    alt: "Artisan craftsman applying textured plaster to a feature wall",
    category: "Artisan Wall Craft",
    tag: "#TextureApplication",
  },
  {
    id: "post-showroom",
    image: "/images/dealer/dealer-showroom.jpg",
    alt: "Antico Paints architectural finish gallery and display wall",
    category: "Architectural Gallery",
    tag: "#FinishInspiration",
  },
  {
    id: "post-textures",
    image: "/images/dealer/dealer-retail-store.jpg",
    alt: "Modern retail store featuring Antico Paints complete finish inventory",
    category: "Retail & Projects",
    tag: "#AnticoPaints",
  },
];

export function HomeInstagramSection() {
  const { instagram } = socialMediaLinks;

  const handleInstagramClick = (location: string) => {
    trackSocialClick({
      platform: "instagram",
      url: instagram.url,
      location,
    });
  };

  return (
    <section className="bg-white py-14 sm:py-18 lg:py-22 border-b border-brand-beige/70">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <div className="max-w-xl space-y-2.5">
            {/* Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-gold inline-block" />
              <span className="text-xs uppercase tracking-[0.2em] font-sans font-semibold text-brand-gold">
                COMMUNITY &amp; INSPIRATION
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-900 tracking-tight leading-snug">
              Follow Us on Instagram
            </h2>

            {/* Description */}
            <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed pt-1">
              Explore curated finishes, architectural inspiration, behind-the-scenes wall craft, and colour palettes in real spaces.
            </p>
          </div>

          {/* Follow Button (Desktop & Tablet) */}
          <div className="shrink-0">
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleInstagramClick("homepage_header_cta")}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-brand-offwhite hover:bg-brand-gold hover:text-brand-black transition-all duration-200 text-xs sm:text-sm font-sans font-semibold rounded-xl shadow-xs group"
              aria-label={`Follow Antico Paints on Instagram (${instagram.handle})`}
            >
              <div className="w-6 h-6 rounded-md bg-white/10 group-hover:bg-black/10 flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5 text-brand-gold group-hover:text-brand-black transition-colors" />
              </div>
              <span>Follow {instagram.handle}</span>
              <ExternalLink className="w-3.5 h-3.5 text-neutral-400 group-hover:text-brand-black transition-colors" />
            </a>
          </div>
        </div>

        {/* 4-Item Visual Showcase Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {INSTAGRAM_PREVIEWS.map((post) => (
            <a
              key={post.id}
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleInstagramClick(`homepage_grid_${post.id}`)}
              className="group relative block aspect-square sm:aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border border-brand-beige/80 bg-neutral-100 shadow-xs hover:shadow-subtle hover:border-brand-gold/60 transition-all duration-300"
              aria-label={`View ${post.category} on Instagram (${instagram.handle})`}
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 50vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Gradient Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent opacity-60 group-hover:opacity-85 transition-opacity duration-300" />

              {/* Top Instagram Indicator Badge */}
              <div className="absolute top-3 right-3 z-10">
                <div className="w-7 h-7 rounded-full bg-black/40 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white/90 group-hover:bg-brand-gold group-hover:text-black group-hover:border-brand-gold transition-colors shadow-xs">
                  <Instagram className="w-3.5 h-3.5" />
                </div>
              </div>

              {/* Bottom Caption Information */}
              <div className="absolute inset-x-0 bottom-0 p-3.5 sm:p-4 z-10 flex flex-col justify-end text-white">
                <span className="text-[10px] sm:text-xs uppercase font-sans font-semibold tracking-wider text-brand-gold mb-0.5">
                  {post.category}
                </span>
                <span className="text-xs sm:text-sm font-sans font-medium text-white/95 line-clamp-1 group-hover:text-white transition-colors">
                  {post.tag}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] text-white/70 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <span>View on Instagram</span>
                  <ArrowRight className="w-3 h-3 text-brand-gold" />
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Mobile Follow Button & Handle Pill */}
        <div className="mt-8 pt-6 border-t border-brand-beige/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <p className="text-xs text-neutral-600 font-sans">
            Tag <span className="font-semibold text-neutral-900">{instagram.handle}</span> in your space transformations to be featured.
          </p>
          <a
            href={instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleInstagramClick("homepage_bottom_link")}
            className="inline-flex items-center gap-2 text-xs font-sans font-semibold text-neutral-900 hover:text-brand-gold transition-colors py-1"
          >
            <Instagram className="w-3.5 h-3.5 text-brand-gold" />
            <span>Visit @anticopaints_ profile</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </section>
  );
}
