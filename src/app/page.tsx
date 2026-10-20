import { Hero } from "@/components/home/Hero";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ColourFamilyPreview } from "@/components/home/ColourFamilyPreview";
import { ApplicationsGallery } from "@/components/home/ApplicationsGallery";
import { CatalogueCTA } from "@/components/home/CatalogueCTA";
import { EnquirySection } from "@/components/home/EnquirySection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Product Categories */}
      <CategoryGrid />

      {/* 3. Colour-Family Preview (Astral Paints-inspired Exploration) */}
      <ColourFamilyPreview />

      {/* 4. Applications / Architectural Gallery */}
      <ApplicationsGallery />

      {/* 5. Catalogue Call-To-Action (Luxture-inspired Collections & Catalogues) */}
      <CatalogueCTA />

      {/* 6. Contact / Project Consultation Enquiry */}
      <EnquirySection />
    </>
  );
}
