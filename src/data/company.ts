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
    emailPlaceholder: "anticopaints@gmail.com",
    phonePlaceholder: "+91 8000642900",
    officeAddressPlaceholder: "103, Gala Building, Beside KP Hostel, Near Samarpan Flats, Gulbai Tekra, Ahmedabad, Gujarat",
    plantAddressPlaceholder: "[Manufacturing Facility & Central Lab]",
    businessHoursPlaceholder: "Mon - Sat: 09:00 - 18:00 IST"
  },
  complianceNotice: "[Quality and standards verification details available upon request]"
};

export const verifiedContactData = {
  phone: {
    label: "Call Antico Paints",
    number: "+91 8000642900",
    href: "tel:+918000642900",
  },
  email: {
    label: "Email Antico Paints",
    address: "anticopaints@gmail.com",
    href: "mailto:anticopaints@gmail.com",
  },
  office: {
    label: "Visit Our Office",
    building: "103, Gala Building",
    landmark: "Beside KP Hostel, Near Samarpan Flats",
    area: "Gulbai Tekra, Ahmedabad, Gujarat",
    fullAddress:
      "103, Gala Building, Beside KP Hostel, Near Samarpan Flats, Gulbai Tekra, Ahmedabad, Gujarat",
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=103+Gala+Building+Beside+KP+Hostel+Near+Samarpan+Flats+Gulbai+Tekra+Ahmedabad",
    mapEmbedUrl:
      "https://maps.google.com/maps?q=103%2C+Gala+Building%2C+Beside+KP+Hostel%2C+Near+Samarpan+Flats%2C+Gulbai+Tekra%2C+Ahmedabad&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapImageUrl: "/images/contact/office-map.jpg",
  },
};

export const contactPageData = {
  intro: {
    eyebrow: "WE'RE HERE TO HELP",
    heading: "Let's talk about your project.",
    description:
      "Questions about our products, colours or painting essentials? Get in touch with Antico Paints.",
  },
  form: {
    heading: "Send us an enquiry",
    supportingText:
      "Share your question and we'll have the information needed to respond to you.",
  },
  dealerCrossLink: {
    heading: "Interested in becoming a dealer?",
    description: "Explore a potential dealership partnership with Antico Paints.",
    linkText: "Discover Dealer Opportunities",
    linkHref: "/become-a-dealer/",
  },
};

export const dealerPageData = {
  hero: {
    eyebrow: "PARTNER WITH ANTICO PAINTS",
    heading: "Become an Antico Paints Dealer.",
    supportingText:
      "Interested in adding Antico Paints to your business? Tell us about your business and location so our team can discuss the next steps with you.",
    primaryCta: "Register Your Interest",
    phoneCta: "Call +91 8000642900",
    phoneHref: "tel:+918000642900",
    image: "/images/dealer/dealer-retail-store.jpg",
    imageAlt: "Retail paint store interior with shelves and paint cans",
  },
  targetAudience: {
    heading: "Who can get in touch?",
    introduction:
      "We welcome dealership enquiries from businesses and individuals interested in exploring a potential partnership.",
    items: [
      "Paint retailers",
      "Hardware and building-material stores",
      "Distributors and wholesalers",
      "Entrepreneurs exploring a paint business",
    ],
  },
  process: {
    eyebrow: "HOW IT WORKS",
    heading: "Start with a conversation.",
    steps: [
      {
        step: "01",
        title: "Share your details",
        description:
          "Tell us about your business, contact information and location.",
      },
      {
        step: "02",
        title: "Discuss your requirements",
        description:
          "Our team can review your enquiry and learn more about your business interests.",
      },
      {
        step: "03",
        title: "Explore the next steps",
        description:
          "Discuss the product range, availability and applicable dealership requirements directly with the team.",
      },
    ],
  },
  form: {
    heading: "Register your interest",
    description:
      "Share a few details about your business so our team can understand your enquiry.",
    businessTypes: [
      "Existing paint retailer",
      "Hardware or building-material store",
      "Distributor or wholesaler",
      "Planning a new business",
      "Other",
    ],
    consentText:
      "I agree that Antico Paints may contact me regarding this dealership enquiry.",
  },
  faqs: [
    {
      question: "How do I express interest in becoming a dealer?",
      answer:
        "Complete the dealer enquiry form with your contact details, business type and location. The team can then discuss the next steps with you.",
    },
    {
      question: "What information should I provide?",
      answer:
        "Share your name, mobile number, business type and location. You can also provide your business name and any additional details that may help explain your enquiry.",
    },
    {
      question: "Does submitting the form guarantee dealership approval?",
      answer:
        "No. The form registers your interest. Any dealership opportunity, requirements and commercial terms must be discussed and confirmed directly with Antico Paints.",
    },
    {
      question: "How can I contact Antico Paints directly?",
      answer:
        "Call +91 8000642900 or email anticopaints@gmail.com.",
    },
  ],
};


export const aboutPageData: AboutContent = {
  intro: {
    eyebrow: "ABOUT ANTICO PAINTS",
    heading: "Good products start with good listening.",
    description:
      "We believe serving customers well begins with understanding their needs, responding thoughtfully and continually improving our product range.",
    image: "/images/about/about-wall-craft.png",
    imageAlt: "Craftsman applying Antico Paints decorative wall texture with a trowel",
  },
  mission: {
    eyebrow: "OUR MISSION",
    heading: "Understand needs. Earn trust. Keep improving.",
    description:
      "To understand our customers’ needs, earn their trust, and continually improve our products and processes through quality-focused practices and dedicated effort.",
  },
  commitment: {
    eyebrow: "OUR COMMITMENT",
    heading: "How we work with our customers.",
    principles: [
      {
        id: "accessible",
        number: "01",
        title: "Be accessible",
        description: "Make it easy for customers to connect with us.",
      },
      {
        id: "understand-needs",
        number: "02",
        title: "Understand their needs",
        description: "Work closely with customers to understand their requirements.",
      },
      {
        id: "listen-respond",
        number: "03",
        title: "Listen and respond",
        description: "Listen to questions and concerns, and respond thoughtfully.",
      },
      {
        id: "keep-improving",
        number: "04",
        title: "Keep improving",
        description: "Continue improving our product range to serve varied customer needs.",
      },
    ],
  },
  cta: {
    heading: "Looking for the right product?",
    description: "Explore our range of textures, primers, emulsions and painting accessories.",
    primaryButtonText: "Explore Products",
    primaryButtonLink: "/products/",
    secondaryButtonText: "Contact Us",
    secondaryButtonLink: "/contact/",
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
