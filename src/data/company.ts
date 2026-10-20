import { CompanyInfo, Catalogue } from "@/types";

export const companyData: CompanyInfo = {
  brandName: "Antico Paints",
  legalEntityPlaceholder: "[Placeholder: Commercial Paint Manufacturing Co. Ltd.]",
  establishedPlaceholder: "[Placeholder: Year Established / Founding Timeline]",
  tagline: "Architectural Precision. Timeless Formulation.",
  missionStatement: 
    "Engineered for architects, commercial specifiers, and discerning interior designers. Antico Paints formulates high-solids emulsions, high-durability exterior systems, and artisan architectural textures designed to withstand demanding environmental conditions.",
  values: [
    {
      title: "Pigment Density & Purity",
      description: "Formulated with micronised minerals and lightfast pigments to achieve deep optical opacity and balanced surface reflectance across natural and artificial illumination."
    },
    {
      title: "Commercial Durability",
      description: "Developed to meet rigorous commercial scrubbing, wet-abrasion resistance, and exterior weathering thresholds required by large-scale specifications."
    },
    {
      title: "Environmental Responsibility",
      description: "Low-VOC formulations engineered with minimal solvent emissions, prioritising interior air quality and sustainable architectural standards [Placeholder: Green certification status pending client data]."
    },
    {
      title: "Architectural Advisory",
      description: "Direct technical specification assistance, substrate compatibility audits, and custom batch colour formulation for commercial contracts."
    }
  ],
  specificationsNotice: "Technical datasheets, VOC metrics, dry film thicknesses (DFT), and test certificates are provided for project evaluation. Final system guarantees require official technical site sign-off.",
  contact: {
    emailPlaceholder: "[Placeholder: specifications@anticopaints.com / commercial@anticopaints.com]",
    phonePlaceholder: "[Placeholder: +1 (800) 000-0000 / Direct Technical Desk]",
    officeAddressPlaceholder: "[Placeholder: Corporate Architectural Center, Suite 400, Industrial Boulevard, Metro City]",
    plantAddressPlaceholder: "[Placeholder: Manufacturing Facility & Central Technical R&D Lab, Sector 12, Industrial Corridor]",
    businessHoursPlaceholder: "[Placeholder: Mon - Fri: 08:30 - 17:30 EST | Architectural Consultation by Appointment]"
  },
  complianceNotice: "[Placeholder: ISO 9001, ISO 14001, ASTM test standards, and Regional VOC compliance certificates to be inserted upon verification]"
};

export const cataloguesData: Catalogue[] = [
  {
    id: "spec-guide-master",
    title: "Commercial Architectural Specification Guide",
    category: "Technical & Systems",
    edition: "2026 Architectural Edition",
    description: "Complete primer-to-topcoat substrate specification matrices, spread rate calculations, surface preparation standards, and DFT requirements.",
    pageCount: "48 Pages",
    fileSize: "14.2 MB",
    filePath: "/catalogues/antico-architectural-spec-guide.pdf",
    coverImage: "/images/catalogues/cat-architectural.svg"
  },
  {
    id: "interior-emulsion-fandeck",
    title: "Interior Emulsion Collection & Sheen Selector",
    category: "Interior Collections",
    edition: "Curated Series 04",
    description: "Full interior shade spectrum spanning Ultra-Matt, Satin Silk, and Soft Sheen formulations with Light Reflectance Values (LRV).",
    pageCount: "64 Pages",
    fileSize: "18.6 MB",
    filePath: "/catalogues/antico-interior-collection.pdf",
    coverImage: "/images/catalogues/cat-interior.svg"
  },
  {
    id: "exterior-protective-systems",
    title: "Exterior High-Durability & Elastomeric Systems",
    category: "Exterior Systems",
    edition: "Infrastructure Series",
    description: "Weather-barrier membranes, crack-bridging exterior emulsions, anti-carbonation coatings, and tropical UV-resistant finishes.",
    pageCount: "36 Pages",
    fileSize: "11.8 MB",
    filePath: "/catalogues/antico-exterior-systems.pdf",
    coverImage: "/images/catalogues/cat-exterior.svg"
  },
  {
    id: "textured-artisan-finishes",
    title: "Designer Textures & Trowel-Applied Finishes",
    category: "Architectural Textures",
    edition: "Materiality Vol. II",
    description: "Mineral stucco, lime-wash aesthetics, metallic trowelled effects, and coarse granular finishes for feature walls and hospitality spaces.",
    pageCount: "32 Pages",
    fileSize: "9.5 MB",
    filePath: "/catalogues/antico-artisan-textures.pdf",
    coverImage: "/images/catalogues/cat-textures.svg"
  }
];

export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Colours", href: "/colours" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];
