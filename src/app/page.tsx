import React from "react";
import type { Metadata } from "next";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeCategories } from "@/components/home/HomeCategories";
import { HomeColourDiscovery } from "@/components/home/HomeColourDiscovery";
import { HomeAboutSection } from "@/components/home/HomeAboutSection";
import { HomeDealerCTA } from "@/components/home/HomeDealerCTA";

export const metadata: Metadata = {
  title: "Antico Paints | From First Coat to Final Finish",
  description:
    "Explore wall textures, primers, emulsions and painting essentials for your next project from Antico Paints.",
};

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <HomeHero />

      {/* Section 2: Product Categories */}
      <HomeCategories />

      {/* Section 3: Colour Discovery */}
      <HomeColourDiscovery />

      {/* Section 4: Short About Section */}
      <HomeAboutSection />

      {/* Section 5: Dealership CTA */}
      <HomeDealerCTA />
    </>
  );
}
