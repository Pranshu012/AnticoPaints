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
    name: "Venetian Plaster (Texture)",
    category: "Texture & Finishes",
    description: "Premium Venetian plaster decorative finish that adds rich tactile depth, character, and durable water-resistant protection to walls (25 KG).",
    image: "/images/products/product-texture.png",
    imageAlt: "Antico Paints Venetian Plaster Decorative Wall Texture 25 KG",
    enquiryLink: "/contact?product=Venetian+Plaster+Texture",
  },
  {
    slug: "cement-wall-primer",
    name: "Prime Pro (Wall Primer)",
    category: "Primers",
    description: "Professional grade interior & exterior wall primer for superior adhesion, smooth finish, better coverage, and anti-fungal protection (20 L).",
    image: "/images/products/product-cement-wall-primer.png",
    imageAlt: "Antico Paints Prime Pro Premium Wall Primer 20 L bucket",
    enquiryLink: "/contact?product=Prime+Pro+Wall+Primer",
  },
  {
    slug: "luxury-emulsion",
    name: "Aura Platinum (Luxury Emulsion)",
    category: "Emulsions",
    description: "Ultra-luxury architectural wall emulsion for interior & exterior surfaces with rich colours, weather resistance, and an easy-clean finish (20 L).",
    image: "/images/products/product-luxury-emulsion.png",
    imageAlt: "Antico Paints Aura Platinum Luxury Wall Emulsion 20 L bucket",
    enquiryLink: "/contact?product=Aura+Platinum+Luxury+Emulsion",
  },
  {
    slug: "eco-emulsion",
    name: "TrueWall Smart Emulsion (Economy)",
    category: "Emulsions",
    description: "Economy smart wall emulsion engineered for smart value, high coverage, and a smooth, dependable matte finish.",
    image: "/images/products/product-eco-emulsion.png",
    imageAlt: "Antico Paints TrueWall Smart Emulsion Economy bucket",
    enquiryLink: "/contact?product=TrueWall+Smart+Emulsion",
  },
  {
    slug: "roller-masker",
    name: "Roller Masker",
    category: "Accessories",
    description: "Pre-taped protective masking film for painting and dust protection. Strong adhesion with clean, residue-free removal (1.1m x 25m).",
    image: "/images/products/product-roller-masker.png",
    imageAlt: "Antico Paints Roller Masker Pre-Taped Masking Film 1.1m x 25m",
    enquiryLink: "/contact?product=Roller+Masker",
  },
  {
    slug: "paint-roller",
    name: "Paint Roller (9\" Wall Roller)",
    category: "Accessories",
    description: "Professional 9-inch wall paint roller with fine nap for smooth, uniform paint distribution and a durable zinc-coated handle.",
    image: "/images/products/product-roller.png",
    imageAlt: "Antico Paints Fine Paint Roller for Walls 9 Inches with Zinc-Coated Handle",
    enquiryLink: "/contact?product=Paint+Roller",
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
    image: "/images/products/product-texture.png",
    badge: "Texture & Finishes",
  },
  {
    id: "interior",
    name: "Emulsions",
    tagline: "Luxury and everyday wall-finishing options",
    description: "Emulsion options for wall-finishing and everyday wall-painting projects.",
    image: "/images/products/product-luxury-emulsion.png",
    badge: "Emulsions",
  },
  {
    id: "protective-industrial",
    name: "Primers",
    tagline: "Preparatory foundation coats for cement-based walls",
    description: "A preparatory coat for cement-based walls before finishing paint is applied.",
    image: "/images/products/product-cement-wall-primer.png",
    badge: "Primers",
  },
  {
    id: "wood-metal",
    name: "Accessories",
    tagline: "Masking tools and painting essentials",
    description: "Practical essentials for masking edges and work zones before painting.",
    image: "/images/products/product-roller.png",
    badge: "Accessories",
  },
];
