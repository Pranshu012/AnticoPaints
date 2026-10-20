import { ColourFamily, ColourShade } from "@/types";

export const colourFamiliesData: ColourFamily[] = [
  {
    id: "warm-neutrals",
    name: "Warm Architectural Neutrals",
    tagline: "Airy, luminous foundational tones inspired by limestone and linen",
    description: "These soothing base tones balance spatial light, reflecting ambient warmth without cast shadows. Perfect as expansive monolithic backdrops.",
    accentHex: "#E9E0D2",
    shades: [
      {
        id: "chalk-offwhite",
        name: "Antico Off-White",
        code: "AN-WN01",
        hex: "#FCFBF8",
        familyId: "warm-neutrals",
        familyName: "Warm Architectural Neutrals",
        lrv: 91,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "light",
        pairingSuggestions: ["Tuscan Ochre (AN-GO03)", "Noir Charcoal (AN-AG05)"]
      },
      {
        id: "travertine-beige",
        name: "Travertine Beige",
        code: "AN-WN02",
        hex: "#E9E0D2",
        familyId: "warm-neutrals",
        familyName: "Warm Architectural Neutrals",
        lrv: 76,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "light",
        pairingSuggestions: ["Burnished Gold (AN-GO02)", "Basalt Monolith (AN-AG06)"]
      },
      {
        id: "castor-ecru",
        name: "Castor Ecru",
        code: "AN-WN03",
        hex: "#DDD3BF",
        familyId: "warm-neutrals",
        familyName: "Warm Architectural Neutrals",
        lrv: 64,
        finishRecommendation: "Seta Silk",
        tone: "mid",
        pairingSuggestions: ["Antico Off-White (AN-WN01)", "Umber Soil (AN-TC04)"]
      },
      {
        id: "parchment-taupe",
        name: "Parchment Taupe",
        code: "AN-WN04",
        hex: "#C5B8A1",
        familyId: "warm-neutrals",
        familyName: "Warm Architectural Neutrals",
        lrv: 52,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "mid",
        pairingSuggestions: ["Antico Amber Gold (AN-GO01)", "Slate Hearth (AN-AG04)"]
      }
    ]
  },
  {
    id: "golds-ochres",
    name: "Regal Ochres & Mineral Golds",
    tagline: "Sunlit mineral pigments with warm, restrained metallic undertones",
    description: "Drawing from raw ochre quarries and aged gilt accents, these tones inject dignified warmth and refined energy into dining rooms, libraries, and facades.",
    accentHex: "#C08000",
    shades: [
      {
        id: "burnished-gold",
        name: "Antico Imperial Amber Gold",
        code: "AN-GO01",
        hex: "#C08000",
        familyId: "golds-ochres",
        familyName: "Regal Ochres & Mineral Golds",
        lrv: 36,
        finishRecommendation: "Aura Metallico Wash / Seta Silk",
        tone: "mid",
        pairingSuggestions: ["Antico Black (AN-AG07)", "Travertine Beige (AN-WN02)"]
      },
      {
        id: "champagne-gilt",
        name: "Champagne Gilt",
        code: "AN-GO02",
        hex: "#D8C59C",
        familyId: "golds-ochres",
        familyName: "Regal Ochres & Mineral Golds",
        lrv: 58,
        finishRecommendation: "Aura Metallico Wash",
        tone: "light",
        pairingSuggestions: ["Noir Charcoal (AN-AG05)", "Antico Off-White (AN-WN01)"]
      },
      {
        id: "tuscan-ochre",
        name: "Raw Sienna Ochre",
        code: "AN-GO03",
        hex: "#A37B3C",
        familyId: "golds-ochres",
        familyName: "Regal Ochres & Mineral Golds",
        lrv: 27,
        finishRecommendation: "Travertino Lime Stucco",
        tone: "deep",
        pairingSuggestions: ["Castor Ecru (AN-WN03)", "Forest Cypress (AN-BG03)"]
      },
      {
        id: "aged-bronze",
        name: "Aged Bronze Shadow",
        code: "AN-GO04",
        hex: "#785E2F",
        familyId: "golds-ochres",
        familyName: "Regal Ochres & Mineral Golds",
        lrv: 18,
        finishRecommendation: "DuraLux Waterborne Enamel",
        tone: "deep",
        pairingSuggestions: ["Burnished Imperial Gold (AN-GO01)", "Antico Off-White (AN-WN01)"]
      }
    ]
  },
  {
    id: "mineral-greys-blacks",
    name: "Architectural Greys & Mineral Blacks",
    tagline: "Disciplined monolithic tones articulating structural form and shadows",
    description: "From soft morning mist to volcanic charcoal, these pigments define clean spatial geometry, high-contrast framing, and dramatic interior envelopes.",
    accentHex: "#171717",
    shades: [
      {
        id: "flint-mist",
        name: "Flint Stone Mist",
        code: "AN-AG01",
        hex: "#E3E3E3",
        familyId: "mineral-greys-blacks",
        familyName: "Architectural Greys & Mineral Blacks",
        lrv: 77,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "light",
        pairingSuggestions: ["Antico Black (AN-AG07)", "Burnished Imperial Gold (AN-GO01)"]
      },
      {
        id: "poured-concrete",
        name: "Poured Concrete Grey",
        code: "AN-AG02",
        hex: "#9F9E9B",
        familyId: "mineral-greys-blacks",
        familyName: "Architectural Greys & Mineral Blacks",
        lrv: 41,
        finishRecommendation: "ScudoGuard Exterior",
        tone: "mid",
        pairingSuggestions: ["Antico Off-White (AN-WN01)", "Travertine Beige (AN-WN02)"]
      },
      {
        id: "slate-hearth",
        name: "Slate Hearth",
        code: "AN-AG04",
        hex: "#4D4C49",
        familyId: "mineral-greys-blacks",
        familyName: "Architectural Greys & Mineral Blacks",
        lrv: 19,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "deep",
        pairingSuggestions: ["Travertine Beige (AN-WN02)", "Burnished Imperial Gold (AN-GO01)"]
      },
      {
        id: "antico-black",
        name: "Antico Mineral Black",
        code: "AN-AG07",
        hex: "#171717",
        familyId: "mineral-greys-blacks",
        familyName: "Architectural Greys & Mineral Blacks",
        lrv: 5,
        finishRecommendation: "Veluto Ultra-Matt / DuraLux Enamel",
        tone: "deep",
        pairingSuggestions: ["Burnished Imperial Gold (AN-GO01)", "Antico Off-White (AN-WN01)"]
      }
    ]
  },
  {
    id: "terracotta-clays",
    name: "Earthy Terracottas & Clays",
    tagline: "Sun-baked earth, red clay, and weathered terracotta warmth",
    description: "Deep, resonant organic shades providing grounded warmth. Ideal for courtyards, artisan feature partitions, and Mediterranean villas.",
    accentHex: "#A85D48",
    shades: [
      {
        id: "tuscan-terracotta",
        name: "Tuscan Terracotta",
        code: "AN-TC01",
        hex: "#A85D48",
        familyId: "terracotta-clays",
        familyName: "Earthy Terracottas & Clays",
        lrv: 22,
        finishRecommendation: "Travertino Lime Stucco",
        tone: "mid",
        pairingSuggestions: ["Travertine Beige (AN-WN02)", "Antico Black (AN-AG07)"]
      },
      {
        id: "weathered-cotto",
        name: "Weathered Cotto",
        code: "AN-TC02",
        hex: "#C67C65",
        familyId: "terracotta-clays",
        familyName: "Earthy Terracottas & Clays",
        lrv: 31,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "mid",
        pairingSuggestions: ["Antico Off-White (AN-WN01)", "Flint Stone Mist (AN-AG01)"]
      },
      {
        id: "umber-soil",
        name: "Raw Umber Soil",
        code: "AN-TC04",
        hex: "#5C3D32",
        familyId: "terracotta-clays",
        familyName: "Earthy Terracottas & Clays",
        lrv: 11,
        finishRecommendation: "Seta Silk",
        tone: "deep",
        pairingSuggestions: ["Champagne Gilt (AN-GO02)", "Travertine Beige (AN-WN02)"]
      }
    ]
  },
  {
    id: "botanicals-greens",
    name: "Deep Botanicals & Forest Hues",
    tagline: "Subdued organic greens connecting interiors with surrounding landscape",
    description: "Subtle sage, deep cypress, and eucalyptus greens creating restorative sanctuaries in private residences, wellness spas, and hotels.",
    accentHex: "#415147",
    shades: [
      {
        id: "sage-mist",
        name: "Verdant Sage Mist",
        code: "AN-BG01",
        hex: "#9DA69B",
        familyId: "botanicals-greens",
        familyName: "Deep Botanicals & Forest Hues",
        lrv: 45,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "light",
        pairingSuggestions: ["Antico Off-White (AN-WN01)", "Travertine Beige (AN-WN02)"]
      },
      {
        id: "forest-cypress",
        name: "Cypress Deep Velvet",
        code: "AN-BG03",
        hex: "#303F35",
        familyId: "botanicals-greens",
        familyName: "Deep Botanicals & Forest Hues",
        lrv: 12,
        finishRecommendation: "Veluto Ultra-Matt",
        tone: "deep",
        pairingSuggestions: ["Burnished Imperial Gold (AN-GO01)", "Travertine Beige (AN-WN02)"]
      },
      {
        id: "olive-grove",
        name: "Aged Olive Grove",
        code: "AN-BG04",
        hex: "#555A46",
        familyId: "botanicals-greens",
        familyName: "Deep Botanicals & Forest Hues",
        lrv: 20,
        finishRecommendation: "Seta Silk",
        tone: "mid",
        pairingSuggestions: ["Castor Ecru (AN-WN03)", "Antico Black (AN-AG07)"]
      }
    ]
  }
];

export const allShades: ColourShade[] = colourFamiliesData.flatMap(f => f.shades);
