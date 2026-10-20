import { CategoryInfo, Product } from "@/types";

export const categoriesData: CategoryInfo[] = [
  {
    id: "interior",
    name: "Interior Architectural Emulsions",
    tagline: "Ultra-low sheen, washability, and depth of colour",
    description: "Formulated for high-traffic luxury residential, hotel suites, and executive corporate environments requiring exceptional opacity and velvety light dispersion.",
    image: "/images/products/cat-interior.svg",
    badge: "Architectural Grade"
  },
  {
    id: "exterior",
    name: "Exterior Weather Systems",
    tagline: "UV resilience, anti-carbonation, and thermal endurance",
    description: "Engineered with exterior acrylic polymers and cross-linking binders designed to resist severe tropical humidity, driving rain, and UV degradation.",
    image: "/images/products/cat-exterior.svg",
    badge: "Extreme Durability"
  },
  {
    id: "designer-textures",
    name: "Designer & Artisan Textures",
    tagline: "Tactile mineral depth, stucco, and metallic finishes",
    description: "Trowel- and roller-applied decorative systems blending natural aggregates, marble dust, and pearlescent bases for dramatic architectural focal points.",
    image: "/images/products/cat-textured.svg",
    badge: "Artisan Materiality"
  },
  {
    id: "protective-industrial",
    name: "Protective Primers & Substrates",
    tagline: "Deep penetrating sealers and anti-alkali barriers",
    description: "Crucial foundation layers formulated to neutralize substrate alkalinity, consolidate porous plaster, and prevent efflorescence.",
    image: "/images/products/cat-protective.svg",
    badge: "Substrate Protection"
  },
  {
    id: "wood-metal",
    name: "Architectural Wood & Metal",
    tagline: "Resilient enamels with non-yellowing finishes",
    description: "High-grade polyurethane and water-based enamels for architectural doors, trims, millwork, metal balustrades, and structural steel elements.",
    image: "/images/products/cat-woodmetal.svg",
    badge: "High Impact"
  }
];

export const productsData: Product[] = [
  {
    id: "antico-veluto-matt",
    name: "Veluto Ultra-Matt Interior Emulsion",
    category: "interior",
    finish: "Ultra-Matt (< 3% at 60°/85°)",
    tagline: "Flat optical dispersion concealing micro-imperfections",
    description: "A flagship interior paint formulated with high pigment load and ceramic micro-spheres. Imparts a luxurious chalky aesthetic with high wet scrub resistance.",
    coverage: "[Placeholder: Approx. 130 - 150 sq.ft / litre per coat]",
    recommendedUse: ["Luxury Residential Living", "Hospitality Suites", "Galleries & Commercial Showrooms"],
    features: [
      "Light-absorbing ultra-matt finish with zero surface glare",
      "Superior opacity achieving full hide in fewer passes",
      "Low odour, minimal VOC formulation [Placeholder: Value subject to batch test]",
      "Wipeable film resisting burnishing and household scuffs"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/veluto-matt.svg",
    isFeatured: true
  },
  {
    id: "antico-seta-satin",
    name: "Seta Silk Luxury Interior Emulsion",
    category: "interior",
    finish: "Soft Satin Silk (12 - 16% at 60°)",
    tagline: "Subtle pearlescent glow for active high-traffic zones",
    description: "Designed for corridors, dining halls, and commercial reception foyers where frequent cleaning and gentle light reflection are desired.",
    coverage: "[Placeholder: Approx. 140 - 160 sq.ft / litre per coat]",
    recommendedUse: ["Executive Corridors", "Commercial Dining", "High-Traffic Retail"],
    features: [
      "Stain-resistant barrier technology repels grease and liquids",
      "Velvety tactile finish with balanced light reflectance",
      "Anti-fungal and microbial resistant additives [Placeholder: lab verified]",
      "Excellent intercoat adhesion and flow-levelling"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/seta-satin.svg",
    isFeatured: true
  },
  {
    id: "antico-scudo-exterior",
    name: "ScudoGuard High-Performance Exterior Finish",
    category: "exterior",
    finish: "Fine Low-Sheen Exterior (5 - 8% at 60°)",
    tagline: "Multi-season elastomeric shielding against weather extremes",
    description: "Reinforced with siloxane-acrylic polymers that actively shed airborne pollutants, dirt, and rainwater while allowing substrate breathability.",
    coverage: "[Placeholder: Approx. 65 - 80 sq.ft / litre (2-coat system)]",
    recommendedUse: ["Commercial Facades", "Coastal Residencies", "High-Rise Developments"],
    features: [
      "Advanced UV-stabilized pigments to retard colour fade in harsh climates",
      "Crack-bridging flexibility up to 1.5mm micro-fissures",
      "Lotus-effect hydrophobic surface shedding grime with natural rainfall",
      "Engineered resistance to algae, efflorescence, and salt spray"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/scudo-exterior.svg",
    isFeatured: true
  },
  {
    id: "antico-silicato-mineral",
    name: "Silicato Mineral Breathable Exterior Coating",
    category: "exterior",
    finish: "Natural Crystalline Matt",
    tagline: "Inorganic potassium silicate binding permanently to masonry",
    description: "Chemically petrifies with lime plaster, concrete, and heritage stone substrates. Exceptional water-vapour permeability preventing blistering.",
    coverage: "[Placeholder: Approx. 85 - 100 sq.ft / litre per coat]",
    recommendedUse: ["Heritage Restorations", "Museums & Monuments", "Civic Architecture"],
    features: [
      "Petrifying chemical bond becomes an integral part of the wall",
      "Micro-porous vapour diffusion coefficient [Placeholder: Sd < 0.02m]",
      "Incombustible, mineral formulation (A1 fire rating compliant)",
      "Zero petrochemical solvents or organic binder degradation"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/silicato-mineral.svg",
    isFeatured: false
  },
  {
    id: "antico-travertino-stucco",
    name: "Travertino Architectural Lime Stucco",
    category: "designer-textures",
    finish: "Textured Natural Travertine / Pitted Stone",
    tagline: "Old-world Mediterranean stone aesthetic in modern trowelled plaster",
    description: "A mineral-based trowel coating formulated with slaked lime and graded Carrara marble granules, delivering authentic stone veining and pitted masonry texture.",
    coverage: "[Placeholder: Approx. 1.8 - 2.4 kg / sq.m depending on depth]",
    recommendedUse: ["Hotel Lobbies", "Feature Accent Walls", "Luxury Villa Interiors"],
    features: [
      "Customizable texture: subtle linear corduroy, open travertine, or pitted stone",
      "Naturally biocidal and breathable due to high pH lime matrix",
      "Develops subtle patinas with natural environmental aging",
      "Pairable with protective tinted wax or metallic wash coats"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/travertino-stucco.svg",
    isFeatured: true
  },
  {
    id: "antico-metallico-patina",
    name: "Aura Metallico Fine Architectural Wash",
    category: "designer-textures",
    finish: "Subtle Brushed Gold & Champagne Sheen",
    tagline: "Luminous mica particulates shifting with ambient lighting",
    description: "A specialised metallic glaze applied over textured or smooth bases to produce iridescent highlights on feature columns, niches, and hospitality ceilings.",
    coverage: "[Placeholder: Approx. 180 - 220 sq.ft / litre per coat]",
    recommendedUse: ["Ceiling Coffers", "Boutique Retail", "Private Dining Rooms"],
    features: [
      "High-purity refractive mica flakes for refined, non-glitzy metallic luster",
      "Workable open-time suited for spattering, strie, or sponge finishes",
      "Non-tarnishing formulation resistant to indoor humidity",
      "Compatible with water-based clear architectural protectants"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/metallico-patina.svg",
    isFeatured: false
  },
  {
    id: "antico-primer-penetrante",
    name: "Penetrante Deep-Binding Alkali Primer",
    category: "protective-industrial",
    finish: "Clear Matt Impregnating Sealer",
    tagline: "Micro-emulsion technology consolidating green plaster & concrete",
    description: "Deeply penetrating acrylic hydrosol primer that equalizes substrate suction, locks down loose chalky dust, and creates an impenetrable barrier against efflorescence salts.",
    coverage: "[Placeholder: Approx. 160 - 200 sq.ft / litre]",
    recommendedUse: ["Fresh Cement Plaster", "Gypsum Board Walls", "Repaired Concrete Surfaces"],
    features: [
      "Ultra-fine particle sizing (< 0.05 micron) for maximum depth penetration",
      "Prevents patchy colour dry-down on unevenly absorbent walls",
      "Alkali-blocking prevents saponification of subsequent paint layers",
      "Rapid touch-dry enabling fast turnaround on commercial schedules"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/primer-penetrante.svg",
    isFeatured: false
  },
  {
    id: "antico-polyuretano-enamel",
    name: "DuraLux Waterborne Polyurethane Enamel",
    category: "wood-metal",
    finish: "Satin Lustre (25 - 35% at 60°)",
    tagline: "Tough architectural barrier for doors, trims, and architectural steel",
    description: "An advanced waterborne urethane coating that delivers the leveling and hardness of traditional alkyds with zero harsh solvent smell and no yellowing over time.",
    coverage: "[Placeholder: Approx. 120 - 140 sq.ft / litre per coat]",
    recommendedUse: ["Solid Hardwood Doors", "Window Reveals", "Architectural Metal Balustrades"],
    features: [
      "Non-blocking formula: doors and windows won't stick when closed",
      "High scratch and chemical resistance against household cleaners",
      "Water-thinnable for easy washup and low environmental impact",
      "Smooth leveling without brush marks or orange peel texture"
    ],
    datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
    image: "/images/products/polyuretano-enamel.svg",
    isFeatured: true
  }
];
