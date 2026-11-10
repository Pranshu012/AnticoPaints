export interface HomeCategoryItem {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
}

export interface HomeColourSwatch {
  id: string;
  hex: string;
  label?: string;
}

export interface HomeContent {
  hero: {
    eyebrow: string;
    heading: string;
    description: string;
    primaryCtaText: string;
    primaryCtaHref: string;
    secondaryCtaText: string;
    secondaryCtaHref: string;
    imageSrc: string;
    imageAlt: string;
  };
  categoriesSection: {
    eyebrow: string;
    heading: string;
    description: string;
    categories: HomeCategoryItem[];
    viewAllText: string;
    viewAllHref: string;
  };
  colourDiscovery: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaText: string;
    ctaHref: string;
    footnote: string;
    swatches: HomeColourSwatch[];
  };
  aboutSection: {
    eyebrow: string;
    heading: string;
    description: string;
    ctaText: string;
    ctaHref: string;
  };
  dealerCta: {
    eyebrow: string;
    heading: string;
    description: string;
    buttonText: string;
    buttonHref: string;
  };
}

export const homePageData: HomeContent = {
  hero: {
    eyebrow: "PAINTS • WALL FINISHES • ESSENTIALS",
    heading: "From first coat to final finish.",
    description:
      "Explore wall textures, primers, emulsions and painting essentials for your next project.",
    primaryCtaText: "Explore Products",
    primaryCtaHref: "/products/",
    secondaryCtaText: "Contact Us",
    secondaryCtaHref: "/contact/",
    imageSrc: "/images/hero/hero-contemporary-interior.png",
    imageAlt: "Contemporary interior with warm, well-finished painted walls in natural daylight",
  },
  categoriesSection: {
    eyebrow: "EXPLORE OUR RANGE",
    heading: "Find what your project needs.",
    description:
      "Explore our product range by category and find products suited to your painting requirements.",
    categories: [
      {
        id: "texture-finishes",
        title: "Texture & Finishes",
        description: "Decorative wall finishes.",
        href: "/products/?category=texture-finishes",
        imageSrc: "/images/products/product-texture.png",
        imageAlt: "Antico Paints Venetian Plaster Decorative Wall Texture 25 KG",
      },
      {
        id: "primers",
        title: "Primers",
        description: "Prepare before painting.",
        href: "/products/?category=primers",
        imageSrc: "/images/products/product-cement-wall-primer.png",
        imageAlt: "Antico Paints Prime Pro Premium Wall Primer 20 L",
      },
      {
        id: "emulsions",
        title: "Emulsions",
        description: "Wall-painting options.",
        href: "/products/?category=emulsions",
        imageSrc: "/images/products/product-luxury-emulsion.png",
        imageAlt: "Antico Paints Aura Platinum Luxury Wall Emulsion 20 L",
      },
      {
        id: "accessories",
        title: "Painting Accessories",
        description: "Preparation essentials.",
        href: "/products/?category=accessories",
        imageSrc: "/images/products/product-roller.png",
        imageAlt: "Antico Paints Fine Paint Roller for Walls 9 Inches",
      },
    ],
    viewAllText: "View All Products",
    viewAllHref: "/products/",
  },
  colourDiscovery: {
    eyebrow: "COLOUR INSPIRATION",
    heading: "Find a colour for your space.",
    description:
      "Explore colour families and discover ideas for your next painting project.",
    ctaText: "Explore Colours",
    ctaHref: "/colours/",
    footnote:
      "Use genuine Antico shade data where available; these swatches are only a visual illustration.",
    swatches: [
      { id: "soft-chalk", hex: "#F5F0E6", label: "Soft Chalk" },
      { id: "warm-sand", hex: "#DBCEB5", label: "Warm Sand" },
      { id: "mineral-ochre", hex: "#B9A080", label: "Mineral Ochre" },
      { id: "earth-taupe", hex: "#8E7764", label: "Earth Taupe" },
      { id: "charcoal-slate", hex: "#51504A", label: "Charcoal Slate" },
    ],
  },
  aboutSection: {
    eyebrow: "ABOUT ANTICO PAINTS",
    heading: "Built around understanding and trust.",
    description:
      "We listen to our customers, work to understand their needs, and continually improve our product range.",
    ctaText: "Discover Our Story",
    ctaHref: "/about/",
  },
  dealerCta: {
    eyebrow: "DEALERSHIP ENQUIRIES",
    heading: "Grow your business with Antico Paints.",
    description:
      "Interested in stocking our products? Tell us about your business and location.",
    buttonText: "Become a Dealer",
    buttonHref: "/become-a-dealer/",
  },
};
