import { CompanyInfo, Catalogue, AboutContent, HomeMissionContent } from "@/types";

export const companyData: CompanyInfo = {
  brandName: "Antico Paints",
  legalEntityPlaceholder: "[Placeholder: Commercial Paint Manufacturing Co. Ltd.]",
  establishedPlaceholder: "[Placeholder: Year Established / Founding Timeline]",
  tagline: "The right finish for your walls.",
  missionStatement: 
    "Our mission is to understand our customers’ needs, earn their trust, and continually improve our products and processes through quality-focused systems and dedicated effort.",
  values: [
    {
      title: "Accessibility",
      description: "Make it easy for customers to connect with us and seek assistance."
    },
    {
      title: "Understanding",
      description: "Work closely with customers to understand their requirements."
    },
    {
      title: "Responsiveness",
      description: "Listen to enquiries and concerns and respond thoughtfully."
    },
    {
      title: "Continuous Improvement",
      description: "Keep improving our product range to serve varied customer needs."
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

export const aboutPageData: AboutContent = {
  intro: {
    eyebrow: "ABOUT ANTICO PAINTS",
    heading: "Built around understanding and trust.",
    description:
      "Our approach begins with understanding what our customers need and continually working to serve them better.",
  },
  mission: {
    heading: "Understanding needs. Building trust.",
    content:
      "Our mission is to understand our customers’ needs, earn their trust, and continually improve our products and processes through quality-focused systems and dedicated effort.",
  },
  commitment: {
    heading: "Closer to our customers, every day.",
    introduction:
      "We believe good customer relationships begin with listening, understanding and responding. We strive to make it easy for our customers to reach us, understand their requirements and find products suited to their needs.",
    principles: [
      {
        id: "accessibility",
        title: "Accessibility",
        description: "Make it easy for customers to connect with us and seek assistance.",
      },
      {
        id: "understanding",
        title: "Understanding",
        description: "Work closely with customers to understand their requirements.",
      },
      {
        id: "responsiveness",
        title: "Responsiveness",
        description: "Listen to enquiries and concerns and respond thoughtfully.",
      },
      {
        id: "continuous-improvement",
        title: "Continuous improvement",
        description: "Keep improving our product range to serve varied customer needs.",
      },
    ],
  },
  closing: {
    heading: "Always working to serve you better.",
    content:
      "We continually work to improve and expand our product range in line with the varied requirements of our customers.",
    buttonText: "Explore Our Products",
    buttonLink: "/products/",
  },
};

export const homeMissionData: HomeMissionContent = {
  eyebrow: "WHAT WE BELIEVE",
  heading: "Built around understanding and trust.",
  content:
    "Our mission is to understand our customers’ needs, earn their trust and continually improve our products and processes.",
  linkText: "About Us",
  linkHref: "/about/",
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
