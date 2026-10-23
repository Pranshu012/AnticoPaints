import { ProductItem, CategoryInfo, Product } from "@/types";

export interface CategoryFilter {
  id: string;
  label: string;
  category?: string; // undefined means all
}

export const categoryFilters: CategoryFilter[] = [
  { id: "all", label: "All Products" },
  { id: "texture-finishes", label: "Texture & Finishes", category: "Texture & Finishes" },
  { id: "primers", label: "Primers", category: "Primers" },
  { id: "emulsions", label: "Emulsions", category: "Emulsions" },
  { id: "accessories", label: "Accessories", category: "Accessories" },
];

export const authoritativeProducts: ProductItem[] = [
  {
    slug: "texture",
    name: "Texture",
    category: "Texture & Finishes",
    description: "Decorative finishes that add depth and character to walls.",
    image: "/images/products/product-texture.jpg",
    imageAlt: "Textured architectural wall finish with natural plaster depth",
    enquiryLink: "/contact?product=Texture",
  },
  {
    slug: "cement-wall-primer",
    name: "Cement Wall Primer",
    category: "Primers",
    description: "A preparatory coat for cement-based walls before painting.",
    image: "/images/products/product-cement-wall-primer.jpg",
    imageAlt: "Cement wall primer preparatory coating application",
    enquiryLink: "/contact?product=Cement+Wall+Primer",
  },
  {
    slug: "luxury-emulsion",
    name: "Luxury Emulsion",
    category: "Emulsions",
    description: "An emulsion option for wall-finishing projects.",
    image: "/images/products/product-luxury-emulsion.jpg",
    imageAlt: "Luxury emulsion painted wall surface with refined appearance",
    enquiryLink: "/contact?product=Luxury+Emulsion",
  },
  {
    slug: "eco-emulsion",
    name: "Eco Emulsion",
    category: "Emulsions",
    description: "An emulsion option for everyday wall-painting projects.",
    image: "/images/products/product-eco-emulsion.jpg",
    imageAlt: "Eco emulsion smooth wall finish for everyday painting",
    enquiryLink: "/contact?product=Eco+Emulsion",
  },
  {
    slug: "roller-masker",
    name: "Roller Masker",
    category: "Accessories",
    description: "A painting accessory for masking selected areas around the work zone.",
    image: "/images/products/product-roller-masker.jpg",
    imageAlt: "Roller masker protective film dispenser for painting preparation",
    enquiryLink: "/contact?product=Roller+Masker",
  },
  {
    slug: "masking-tape",
    name: "Masking Tape",
    category: "Accessories",
    description: "A practical essential for masking selected edges and areas before painting.",
    image: "/images/products/product-masking-tape.jpg",
    imageAlt: "Precision masking tape rolls for clean painting edges",
    enquiryLink: "/contact?product=Masking+Tape",
  },
];

export function getAllProducts(): ProductItem[] {
  return authoritativeProducts;
}

export function getProductBySlug(slug: string): ProductItem | undefined {
  return authoritativeProducts.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryName?: string): ProductItem[] {
  if (!categoryName || categoryName === "all") {
    return authoritativeProducts;
  }
  return authoritativeProducts.filter((p) => p.category === categoryName);
}

// Retained for backward compatibility with existing homepage CategoryGrid
export const productsData: Product[] = authoritativeProducts.map((p) => ({
  id: p.slug,
  slug: p.slug,
  name: p.name,
  category: p.category as any,
  description: p.description,
  shortDescription: p.description,
  image: p.image,
  imageAlt: p.imageAlt,
  enquiryLink: p.enquiryLink,
  coverage: "Follows product guidance",
  features: [p.description],
  datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
}));

export const categoriesData: CategoryInfo[] = [
  {
    id: "designer-textures",
    name: "Texture & Finishes",
    tagline: "Decorative finishes that add depth and character to walls",
    description: "Textured finishes bringing tactile depth and distinctive character to walls.",
    image: "/images/products/product-texture.jpg",
    badge: "Texture & Finishes",
  },
  {
    id: "interior",
    name: "Emulsions",
    tagline: "Luxury and everyday wall-finishing options",
    description: "Emulsion options for wall-finishing and everyday wall-painting projects.",
    image: "/images/products/product-luxury-emulsion.jpg",
    badge: "Emulsions",
  },
  {
    id: "protective-industrial",
    name: "Primers",
    tagline: "Preparatory foundation coats for cement-based walls",
    description: "A preparatory coat for cement-based walls before finishing paint is applied.",
    image: "/images/products/product-cement-wall-primer.jpg",
    badge: "Primers",
  },
  {
    id: "wood-metal",
    name: "Accessories",
    tagline: "Masking tools and painting essentials",
    description: "Practical essentials for masking edges and work zones before painting.",
    image: "/images/products/product-masking-tape.jpg",
    badge: "Accessories",
  },
];
