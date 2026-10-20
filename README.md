# Antico Paints — Commercial Architectural Coatings

A premium, modern, responsive website for **Antico Paints**, a commercial paint manufacturing company. Engineered for commercial architects, specifiers, interior designers, and corporate contractors.

- **Design Inspiration**: The interactive chromatic exploration experience of Astral Paints paired with the structured product collections and architectural catalogues of Luxture.
- **Brand Palette**:
  - **Black**: `#171717` (dominant architectural structural ground)
  - **Gold**: `#B89655` (restrained luxury accent)
  - **Beige**: `#E9E0D2` (warm limestone & masonry foundation)
  - **Off-White**: `#FCFBF8` (luminous airy canvas)
- **Architecture**: Next.js 14+ (App Router), TypeScript, Tailwind CSS, Static Export (`output: 'export'`) ready for **Cloudflare Pages** hosting.

---

## 1. Project Structure

```
AnticoPaints/
├── public/
│   ├── _headers                    # Cloudflare Pages security & caching headers
│   ├── catalogues/                 # Technical PDF guides & fandecks
│   │   ├── antico-architectural-spec-guide.pdf
│   │   ├── antico-interior-collection.pdf
│   │   ├── antico-exterior-systems.pdf
│   │   └── antico-artisan-textures.pdf
│   └── images/                     # Organised public image directories
│       ├── hero/                   # Hero architectural elevation renders
│       ├── products/               # Product packaging & category graphics
│       ├── colours/                # Chromatic swatches & textures
│       ├── gallery/                # Architectural project photography
│       └── catalogues/             # Cover graphics for downloadable literature
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Shared Root layout with Header & Footer
│   │   ├── globals.css             # Tailwind base & custom architectural utility styles
│   │   ├── page.tsx                # Homepage (Hero, Categories, Colour Studio, Gallery, Catalogues, Enquiry)
│   │   ├── products/               # Product collections directory & category filters
│   │   ├── colours/                # Interactive chromatic library, LRV inspector & swatches
│   │   ├── about/                  # Manufacturing philosophy, R&D facility, formulation standards
│   │   └── contact/                # Specification desk, sample pot requests & tender enquiries
│   ├── components/
│   │   ├── layout/                 # Shared Header and Footer
│   │   ├── home/                   # Reusable Homepage sections
│   │   └── ui/                     # Badge, Button, Modal components
│   ├── data/                       # Content decoupled from presentation
│   │   ├── company.ts              # Brand metadata, contact placeholders, catalogues list
│   │   ├── products.ts             # Categories and technical formulation definitions
│   │   ├── colours.ts              # Chromatic families, shade codes, HEX, LRV, pairings
│   │   └── projects.ts             # Architectural case studies and specifications
│   └── types/                      # Strict TypeScript interfaces
├── next.config.mjs                 # Static export config (output: 'export', images: unoptimized)
├── tailwind.config.ts              # Custom brand color tokens & typography
└── tsconfig.json                   # Strict TypeScript compiler options
```

---

## 2. Local Setup & Development

### Prerequisites
- Node.js `v18.17.0` or later (tested on Node `v20+` and `v26+`)
- npm or yarn

### Installation
```bash
# Install dependencies
npm install

# Run the local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 3. Building & Static Export

The project is preconfigured for static export (`output: 'export'`). Running the build produces self-contained static HTML, CSS, JavaScript, and assets inside the `out/` folder:

```bash
# Build and export static site
npm run build
```

To preview the static export locally:
```bash
npx serve out
```

---

## 4. Cloudflare Pages Deployment

### Option A: Cloudflare Git Integration (Recommended)
1. Push your repository to **GitHub** or **GitLab**.
2. In the Cloudflare Dashboard, navigate to **Compute (Workers) > Pages > Create a project > Connect to Git**.
3. Select the repository and configure build settings:
   - **Framework preset**: `None` (or `Next.js (Static Export)`)
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or left blank)
4. Under **Environment variables**, set:
   - `NODE_VERSION`: `20` (or `22`)
5. Click **Save and Deploy**. Cloudflare Pages will build the static output and deploy it across its global edge network.

### Option B: Cloudflare Wrangler CLI (Direct Upload)
```bash
# Install Wrangler globally if needed
npm install -g wrangler

# Build the static export
npm run build

# Deploy the 'out' directory
wrangler pages deploy out --project-name=antico-paints
```

---

## 5. How to Add Products, Colours, Projects & Images

All data is strictly separated from presentation logic in `src/data/`.

### Adding a New Product Formulation
1. Open [`src/data/products.ts`](src/data/products.ts).
2. Append a new object to the `productsData` array matching the `Product` interface:
   ```ts
   {
     id: "antico-nuovo-finish",
     name: "Nuovo Micro-Cement Architectural Finish",
     category: "designer-textures", // 'interior' | 'exterior' | 'designer-textures' | 'protective-industrial' | 'wood-metal'
     finish: "Honed Matt Stone",
     tagline: "Continuous monolithic concrete aesthetic",
     description: "Engineered mineral paste...",
     coverage: "Approx. 1.2 kg / sq.m per coat",
     recommendedUse: ["Gallery Floors", "Feature Partitions"],
     features: ["Scratch-resistant matrix", "High vapor permeability"],
     datasheetPlaceholderUrl: "/catalogues/antico-architectural-spec-guide.pdf",
     image: "/images/products/nuovo-finish.svg", // place asset in public/images/products/
     isFeatured: true
   }
   ```
3. Place product image/illustration inside `public/images/products/`.

### Adding a New Colour Shade or Family
1. Open [`src/data/colours.ts`](src/data/colours.ts).
2. To add a shade to an existing family, append to its `shades` array:
   ```ts
   {
     id: "venetian-ochre",
     name: "Venetian Raw Ochre",
     code: "AN-GO05",
     hex: "#C29B4F",
     familyId: "golds-ochres",
     familyName: "Regal Ochres & Mineral Golds",
     lrv: 42, // Light Reflectance Value 0 - 100
     finishRecommendation: "Veluto Ultra-Matt",
     tone: "mid", // 'light' | 'mid' | 'deep'
     pairingSuggestions: ["Antico Off-White (AN-WN01)", "Noir Charcoal (AN-AG05)"]
   }
   ```
3. To add a new colour family, append a new `ColourFamily` object to `colourFamiliesData`. The homepage explorer and `/colours` page will automatically detect and render the new tab and swatches.

### Adding a Case Study / Gallery Project
1. Open [`src/data/projects.ts`](src/data/projects.ts).
2. Append a new entry to `projectsData`:
   ```ts
   {
     id: "coastal-pavilion",
     name: "The Cliffside Pavilion",
     sector: "Luxury Residential", // 'Commercial' | 'Luxury Residential' | 'Hospitality' | 'Institutional'
     location: "Pacific Coastline",
     description: "Monolithic lime-wash exterior paired with...",
     productsUsed: ["ScudoGuard Exterior", "Veluto Ultra-Matt"],
     finishPalette: ["Antico Off-White (#FCFBF8)", "Burnished Gold (#B89655)"],
     image: "/images/gallery/project-residential.svg",
     yearPlaceholder: "2026 Specification"
   }
   ```
3. Place project render or photography inside `public/images/gallery/`.

### Adding or Updating Technical Catalogues (PDF)
1. Place your compiled PDF file inside `public/catalogues/` (e.g. `public/catalogues/antico-2026-fandeck.pdf`).
2. Update [`src/data/company.ts`](src/data/company.ts) under `cataloguesData` with the new file path, page count, and file size.

---

## 6. Information Needed from Client to Replace Placeholders

The following items are designated with explicit `[Placeholder: ...]` markers and can be updated in `src/data/company.ts`, `src/data/products.ts`, and `src/data/projects.ts`:

1. **Company Legal & Manufacturing Details**:
   - Registered Corporate Entity name and legal incorporation year.
   - Exact manufacturing plant location, production capacity (litres/annum), and central R&D laboratory details.
   - Official telephone lines, technical specification email addresses, and regional showroom locations.
2. **Quality & Standard Certifications**:
   - Official ISO certifications (e.g., ISO 9001 Quality Management, ISO 14001 Environmental Management).
   - Third-party test standards (e.g., ASTM D2486 Scrub Resistance, ASTM B117 Salt Spray, Green Building Council / LEED VOC certifications).
3. **Exact Product Performance Specifications**:
   - Certified VOC g/L lab readings for each line.
   - Exact verified spread rates / coverage figures per litre/coat across different substrate porosities.
   - Official production technical datasheets (TDS) and safety data sheets (MSDS/SDS) to replace the current placeholder PDFs.
4. **Photography & Render Assets**:
   - High-resolution client architectural photography (JPEG/WebP/PNG) to replace SVG placeholders in `public/images/hero/`, `public/images/products/`, and `public/images/gallery/`.
