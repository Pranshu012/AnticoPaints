export type ProductSection = 'featured' | 'paint-prep' | 'accessories';

export interface ProductDetailField {
  label: string;
  value: string;
}

export interface ProductItem {
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  section: ProductSection;
  shortDescription: string;
  description: string;
  image: string;
  imageAlt: string;
  badge?: string;
  editorialNumber?: string;
  availableDetails?: ProductDetailField[];
  enquiryLink: string;
}

export type ProductCategory = 
  | 'interior'
  | 'exterior'
  | 'designer-textures'
  | 'protective-industrial'
  | 'wood-metal';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  tagline: string;
  description: string;
  image: string;
  badge: string;
}

export interface Product {
  id: string;
  slug?: string;
  name: string;
  category: ProductCategory | string;
  categoryLabel?: string;
  finish?: string;
  tagline?: string;
  shortDescription?: string;
  description: string;
  coverage?: string;
  recommendedUse?: string[];
  features?: string[];
  datasheetPlaceholderUrl?: string;
  image: string;
  imageAlt?: string;
  isFeatured?: boolean;
  section?: ProductSection;
  availableDetails?: ProductDetailField[];
  enquiryLink?: string;
}

export interface ColourShade {
  id: string;
  name: string;
  code: string;
  hex: string;
  familyId: string;
  familyName: string;
  lrv: number; // Light Reflectance Value 0-100
  finishRecommendation: string;
  tone: 'light' | 'mid' | 'deep';
  pairingSuggestions?: string[]; // Codes or names of pairings
}

export interface ColourFamily {
  id: string;
  name: string;
  tagline: string;
  description: string;
  accentHex: string;
  shades: ColourShade[];
}

export interface GalleryProject {
  id: string;
  title: string;
  sector: 'Commercial' | 'Luxury Residential' | 'Hospitality' | 'Institutional';
  location: string;
  description: string;
  productsUsed: string[];
  finishPalette: string[];
  image: string;
  yearPlaceholder: string;
}

export interface Catalogue {
  id: string;
  title: string;
  category: string;
  edition: string;
  description: string;
  pageCount: string;
  fileSize: string;
  filePath: string;
  coverImage: string;
}

export interface CompanyInfo {
  brandName: string;
  legalEntityPlaceholder: string;
  establishedPlaceholder: string;
  tagline: string;
  missionStatement: string;
  values: {
    title: string;
    description: string;
  }[];
  specificationsNotice: string;
  contact: {
    emailPlaceholder: string;
    phonePlaceholder: string;
    officeAddressPlaceholder: string;
    plantAddressPlaceholder: string;
    businessHoursPlaceholder: string;
  };
  complianceNotice: string;
}
