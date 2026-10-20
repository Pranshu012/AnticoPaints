export type ProductCategoryType = 
  | 'Texture & Finishes' 
  | 'Primers' 
  | 'Emulsions' 
  | 'Accessories';

export interface ProductItem {
  slug: string;
  name: string;
  category: ProductCategoryType;
  description: string;
  image: string;
  imageAlt: string;
  enquiryLink: string;
}

export type ProductSection = 'featured' | 'paint-prep' | 'accessories';

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
  availableDetails?: { label: string; value: string }[];
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

export interface CommitmentPrinciple {
  id: string;
  title: string;
  description: string;
}

export interface AboutContent {
  intro: {
    eyebrow: string;
    heading: string;
    description: string;
  };
  mission: {
    heading: string;
    content: string;
  };
  commitment: {
    heading: string;
    introduction: string;
    principles: CommitmentPrinciple[];
  };
  closing: {
    heading: string;
    content: string;
    buttonText: string;
    buttonLink: string;
  };
}

export interface HomeMissionContent {
  eyebrow: string;
  heading: string;
  content: string;
  linkText: string;
  linkHref: string;
}

