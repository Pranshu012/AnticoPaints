import React from "react";
import type { Metadata } from "next";
import { SimpleHero } from "@/components/home/SimpleHero";
import { SimpleCategoryGrid } from "@/components/home/SimpleCategoryGrid";
import { SimpleAboutSection } from "@/components/home/SimpleAboutSection";
import { SimpleContactCTA } from "@/components/home/SimpleContactCTA";

export const metadata: Metadata = {
  title: "Antico Paints | The Right Finish for Your Walls",
  description:
    "Explore wall textures, primers, emulsions and painting essentials for your next project from Antico Paints.",
};

export default function HomePage() {
  return (
    <>
      {/* Section A: Clean Hero */}
      <SimpleHero />

      {/* Section B: Product Categories */}
      <SimpleCategoryGrid />

      {/* Section C: Simple About Section */}
      <SimpleAboutSection />

      {/* Section D: Contact CTA */}
      <SimpleContactCTA />
    </>
  );
}
