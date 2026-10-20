import { CategoryInfo, ProductItem, Product } from "@/types";

/**
 * AUTHORITATIVE PRODUCTS LIST
 *
 * Designed for an editorial paint manufacturer showcase.
 * Driven strictly by client specifications without invented claims or specs.
 *
 * To add a seventh product:
 * Simply add a new object to `authoritativeProducts` below with `slug`, `name`, `categoryLabel`,
 * `section` ('featured' | 'paint-prep' | 'accessories'), `description`, and `enquiryLink`.
 * The UI automatically maps and renders it into the corresponding editorial section.
 */
export const authoritativeProducts: ProductItem[] = [
  // 1. Featured Finish: Texture
  {
    slug: "texture",
    name: "Texture",
    category: "Decorative Wall Finish",
    categoryLabel: "FEATURED FINISH",
    section: "featured",
    editorialNumber: "01",
    shortDescription: "Decorative texture finishes for distinctive architectural surfaces.",
    description:
      "Give your walls a distinctive look with decorative texture finishes. Explore available texture styles and colour options to find the right look for your space.",
    image: "/images/products/texture-wall.svg",
    imageAlt: "Wide architectural textured beige wall finish showcasing decorative mineral surface depth",
    badge: "Featured Finish",
    availableDetails: [
      {
        label: "Texture Styles",
        value: "[Placeholder: Texture styles, grain grades, and artisan trowel effects to be confirmed]",
      },
      {
        label: "Colour Range",
        value: "[Placeholder: Tintable across select Antico neutral and earthy mineral colour families]",
      },
      {
        label: "Recommended Surfaces",
        value: "[Placeholder: Concrete, masonry, and appropriately prepared interior/exterior plaster]",
      },
      {
        label: "Technical Guidance",
        value: "[Placeholder: Application instructions and spread rates available upon request]",
      },
    ],
    enquiryLink: "/contact?product=Texture",
  },

  // 2. Prepare: Cement Wall Primer
  {
    slug: "cement-wall-primer",
    name: "Cement Wall Primer",
    category: "Substrate Preparation",
    categoryLabel: "PREPARE",
    section: "paint-prep",
    editorialNumber: "02",
    shortDescription: "A preparatory base coat for cement-based walls before finish application.",
    description:
      "A preparatory coat for cement-based walls before the finishing paint is applied. Check the product guidance for suitable surfaces and application instructions.",
    image: "/images/products/cement-wall-primer.svg",
    imageAlt: "Cement Wall Primer container and substrate preparation visual",
    badge: "Substrate Base",
    availableDetails: [
      {
        label: "Suitable Surfaces",
        value: "[Placeholder: Cement-based plaster, concrete blocks, and raw masonry substrates]",
      },
      {
        label: "Application Instructions",
        value: "[Placeholder: Dilution ratio, surface preparation, and recoat window to follow manufacturer specification]",
      },
      {
        label: "Compatibility",
        value: "[Placeholder: Suitable as an undercoat for water-based luxury and everyday emulsions]",
      },
    ],
    enquiryLink: "/contact?product=Cement+Wall+Primer",
  },

  // 3. Finish: Luxury Emulsion
  {
    slug: "luxury-emulsion",
    name: "Luxury Emulsion",
    category: "Premium Interior Finish",
    categoryLabel: "FINISH",
    section: "paint-prep",
    editorialNumber: "03",
    shortDescription: "A premium emulsion option for spaces where finished wall appearance takes centre stage.",
    description:
      "An emulsion option for projects where the finished wall appearance takes centre stage. Ask about available colours, finish options and pack sizes.",
    image: "/images/products/luxury-emulsion.svg",
    imageAlt: "Luxury Emulsion architectural interior wall finish visual",
    badge: "Architectural Grade",
    availableDetails: [
      {
        label: "Available Colours",
        value: "[Placeholder: Compatible with Antico colour families including Warm Neutrals and Regal Ochres]",
      },
      {
        label: "Finish Options",
        value: "[Placeholder: Available sheen selections (e.g. Ultra-Matt, Soft Sheen, Satin) to be confirmed]",
      },
      {
        label: "Pack Sizes",
        value: "[Placeholder: Commercial and residential container volumes to be confirmed]",
      },
    ],
    enquiryLink: "/contact?product=Luxury+Emulsion",
  },

  // 4. Paint: Eco Emulsion
  {
    slug: "eco-emulsion",
    name: "Eco Emulsion",
    category: "Everyday Wall Paint",
    categoryLabel: "PAINT",
    section: "paint-prep",
    editorialNumber: "04",
    shortDescription: "An emulsion option for everyday wall-painting projects.",
    description:
      "An emulsion option for everyday wall-painting projects. Explore the available range and confirm the recommended surfaces and product details.",
    image: "/images/products/eco-emulsion.svg",
    imageAlt: "Eco Emulsion wall-painting option visual",
    badge: "Everyday Essential",
    availableDetails: [
      {
        label: "Recommended Surfaces",
        value: "[Placeholder: Interior ceiling and wall plasters, gypsum board, and previously painted surfaces]",
      },
      {
        label: "Product Details",
        value: "[Placeholder: Product specifications, drying intervals, and batch details available on request]",
      },
      {
        label: "Available Palette",
        value: "[Placeholder: Standard commercial interior shades and tinting options to follow]",
      },
    ],
    enquiryLink: "/contact?product=Eco+Emulsion",
  },

  // 5. Accessory: Roller Masker
  {
    slug: "roller-masker",
    name: "Roller Masker",
    category: "Painting Preparation Accessory",
    categoryLabel: "ACCESSORY",
    section: "accessories",
    editorialNumber: "05",
    shortDescription: "A painting-preparation accessory for masking selected areas around the work zone.",
    description:
      "A painting-preparation accessory for masking selected areas around the work zone. Display the actual product format and use instructions once confirmed.",
    image: "/images/products/roller-masker.svg",
    imageAlt: "Roller Masker painting preparation accessory tool illustration",
    badge: "Site Protection",
    availableDetails: [
      {
        label: "Product Format",
        value: "[Placeholder: Exact dispenser dimensions, drop sheet width, and roll length to be confirmed]",
      },
      {
        label: "Recommended Areas",
        value: "[Placeholder: Baseboards, skirting, door frames, windows, and perimeter work zones]",
      },
      {
        label: "Use Instructions",
        value: "[Placeholder: Unrolling technique and surface adhesion guidance to follow product confirmation]",
      },
    ],
    enquiryLink: "/contact?product=Roller+Masker",
  },

  // 6. Accessory: Masking Tape
  {
    slug: "masking-tape",
    name: "Masking Tape",
    category: "Painting Preparation Essential",
    categoryLabel: "ACCESSORY",
    section: "accessories",
    editorialNumber: "06",
    shortDescription: "A practical essential for masking edges and selected areas before painting.",
    description:
      "A practical essential for masking edges and selected areas before painting. Available widths, recommended surfaces and removal guidance should follow the product specifications.",
    image: "/images/products/masking-tape.svg",
    imageAlt: "Masking Tape roll and edge-masking essential visual",
    badge: "Edge Precision",
    availableDetails: [
      {
        label: "Available Widths",
        value: "[Placeholder: Standard width specifications (e.g. 18mm, 24mm, 48mm) to be confirmed]",
      },
      {
        label: "Recommended Surfaces",
        value: "[Placeholder: Cured paint, woodwork, trim, glass, and metal fixtures]",
      },
      {
        label: "Removal Guidance",
        value: "[Placeholder: Clean-peel duration and removal angle to follow technical specification]",
      },
    ],
    enquiryLink: "/contact?product=Masking+Tape",
  },
];

// Helper queries for modular editorial consumption
export function getAllProducts(): ProductItem[] {
  return authoritativeProducts;
}

export function getFeaturedProduct(): ProductItem {
  return (
    authoritativeProducts.find((p) => p.section === "featured") ||
    authoritativeProducts[0]
  );
}

export function getPaintAndPrepProducts(): ProductItem[] {
  return authoritativeProducts.filter((p) => p.section === "paint-prep");
}

export function getAccessoryProducts(): ProductItem[] {
  return authoritativeProducts.filter((p) => p.section === "accessories");
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return authoritativeProducts.find((p) => p.slug === slug);
}

/**
 * Backward compatibility alias for any existing components referencing `productsData`
 */
export const productsData: Product[] = authoritativeProducts.map((p) => ({
  id: p.slug,
  slug: p.slug,
  name: p.name,
  category: p.category as any,
  categoryLabel: p.categoryLabel,
  description: p.description,
  shortDescription: p.shortDescription,
  image: p.image,
  imageAlt: p.imageAlt,
  enquiryLink: p.enquiryLink,
  availableDetails: p.availableDetails,
  coverage: "[Placeholder: Spread rates follow official technical datasheet]",
  features: [p.shortDescription],
  datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
}));

/**
 * Preserved Category Structure for Homepage Collections
 */
export const categoriesData: CategoryInfo[] = [
  {
    id: "designer-textures",
    name: "Decorative Texture Finishes",
    tagline: "Distinctive wall finishes with tactile depth",
    description: "Featured texture finishes bringing architectural nuance and distinctive character to interior and exterior surfaces.",
    image: "/images/products/texture-wall.svg",
    badge: "Featured Finish",
  },
  {
    id: "interior",
    name: "Interior Wall Emulsions",
    tagline: "Luxury and everyday wall-painting solutions",
    description: "Refined emulsions for projects where appearance takes centre stage, alongside dependable everyday wall-painting formulations.",
    image: "/images/products/luxury-emulsion.svg",
    badge: "Paint & Finish",
  },
  {
    id: "protective-industrial",
    name: "Substrate Primers & Sealers",
    tagline: "Preparatory foundation coats for masonry",
    description: "Preparatory coats for cement-based and mineral walls before the finishing paint is applied.",
    image: "/images/products/cement-wall-primer.svg",
    badge: "Prepare",
  },
  {
    id: "wood-metal",
    name: "Painting Accessories & Essentials",
    tagline: "Masking tools and edge-protection essentials",
    description: "Practical masking accessories for boundary protection and clean edge preparation around the work zone.",
    image: "/images/products/roller-masker.svg",
    badge: "Accessories",
  },
];
