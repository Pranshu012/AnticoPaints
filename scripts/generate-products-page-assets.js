const fs = require('fs');
const path = require('path');

// 1. Texture - Wide Architectural Textured Beige Wall
const textureWallSvg = `<svg width="1200" height="720" viewBox="0 0 1200 720" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wallBeige" x1="0" y1="0" x2="1200" y2="720" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCFBF8"/>
      <stop offset="45%" stop-color="#E9E0D2"/>
      <stop offset="85%" stop-color="#D5C9B5"/>
      <stop offset="100%" stop-color="#C7BBA4"/>
    </linearGradient>
    <linearGradient id="sunbeam" x1="100" y1="0" x2="900" y2="720" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCFBF8" stop-opacity="0.7"/>
      <stop offset="60%" stop-color="#E9E0D2" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#171717" stop-opacity="0.15"/>
    </linearGradient>
    <filter id="noiseFilter" x="0%" y="0%" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.85   0 0 0 0 0.8   0 0 0 0 0.72  0 0 0 0.18 0"/>
      <feBlend mode="multiply" in2="SourceGraphic"/>
    </filter>
  </defs>

  <!-- Base Wall -->
  <rect width="1200" height="720" fill="url(#wallBeige)"/>
  
  <!-- Texture Trowel Layer Sweeps -->
  <path d="M-50 120 Q 300 80, 650 190 T 1250 140 L 1250 720 L -50 720 Z" fill="#E4D9C7" fill-opacity="0.45"/>
  <path d="M-20 280 Q 420 240, 800 360 T 1250 310 L 1250 720 L -20 720 Z" fill="#D8CCA8" fill-opacity="0.35"/>
  <path d="M-10 440 Q 350 400, 720 510 T 1250 480 L 1250 720 L -10 720 Z" fill="#C9BDAA" fill-opacity="0.25"/>

  <!-- Architectural Shadows & Light Wash -->
  <polygon points="200,0 680,0 520,720 40,720" fill="url(#sunbeam)"/>
  <line x1="200" y1="0" x2="40" y2="720" stroke="#B89655" stroke-opacity="0.4" stroke-width="1.5"/>

  <!-- Natural Stone Texture Marks -->
  <g stroke="#A69A84" stroke-opacity="0.2" stroke-width="1.2" stroke-linecap="round">
    <path d="M120 180 Q 150 185 190 182"/>
    <path d="M140 210 Q 190 215 230 208"/>
    <path d="M340 140 Q 390 148 450 142"/>
    <path d="M520 260 Q 580 270 640 262"/>
    <path d="M780 190 Q 840 200 910 194"/>
    <path d="M820 340 Q 890 350 960 342"/>
    <path d="M260 420 Q 320 430 380 424"/>
    <path d="M600 480 Q 670 492 740 486"/>
    <path d="M420 590 Q 480 600 560 594"/>
    <path d="M880 520 Q 940 530 1020 522"/>
  </g>

  <!-- Architectural Corner Plinth Cast Shadow -->
  <polygon points="980,180 1140,240 1140,680 980,620" fill="#171717" fill-opacity="0.08"/>
  <polygon points="960,160 1120,220 1120,660 960,600" fill="#FCFBF8" fill-opacity="0.95"/>
  <line x1="960" y1="160" x2="960" y2="600" stroke="#B89655" stroke-width="2"/>
  
  <text x="980" y="240" font-family="serif" font-size="20" fill="#171717" letter-spacing="2">TEXTURE</text>
  <text x="980" y="265" font-family="sans-serif" font-size="11" fill="#737373" letter-spacing="1">DECORATIVE FINISH</text>
  <line x1="980" y1="285" x2="1080" y2="285" stroke="#B89655" stroke-width="1.5"/>

  <!-- Subtle scale reference -->
  <text x="40" y="680" font-family="sans-serif" font-size="11" fill="#737373" letter-spacing="2">ARCHITECTURAL TROWELLED MINERAL SURFACE // STUDY 01</text>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/texture-wall.svg'), textureWallSvg);

// 2. Cement Wall Primer
const cementPrimerSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FCFBF8"/>
  <rect x="24" y="24" width="752" height="552" fill="#E9E0D2" fill-opacity="0.3" rx="2"/>
  
  <!-- Concrete wall block background -->
  <rect x="80" y="80" width="640" height="440" fill="#D5C9B5" fill-opacity="0.35"/>
  <line x1="80" y1="300" x2="720" y2="300" stroke="#FCFBF8" stroke-width="1.5"/>
  <line x1="400" y1="80" x2="400" y2="520" stroke="#FCFBF8" stroke-width="1.5"/>

  <!-- Primer Roller Sweep Visual -->
  <path d="M140 140 L460 140 L440 460 L120 460 Z" fill="#FCFBF8" fill-opacity="0.85"/>
  <line x1="460" y1="140" x2="440" y2="460" stroke="#B89655" stroke-width="2"/>
  
  <!-- Product Presentation Container Silhouette -->
  <rect x="420" y="200" width="220" height="260" rx="4" fill="#171717"/>
  <ellipse cx="530" cy="200" rx="110" ry="24" fill="#262626"/>
  <ellipse cx="530" cy="194" rx="98" ry="18" fill="#B89655"/>
  <ellipse cx="530" cy="460" rx="110" ry="24" fill="#171717"/>
  
  <!-- Label -->
  <rect x="440" y="250" width="180" height="150" fill="#FCFBF8" rx="2"/>
  <rect x="440" y="250" width="180" height="6" fill="#B89655"/>
  <text x="530" y="285" font-family="sans-serif" font-weight="bold" font-size="14" fill="#171717" text-anchor="middle" letter-spacing="2">ANTICO</text>
  <text x="530" y="315" font-family="serif" font-size="13" fill="#171717" text-anchor="middle" font-weight="600">CEMENT WALL PRIMER</text>
  <text x="530" y="340" font-family="sans-serif" font-size="9" fill="#737373" text-anchor="middle" letter-spacing="1">PREPARATION COAT</text>
  <line x1="480" y1="360" x2="580" y2="360" stroke="#B89655" stroke-width="1"/>
  <text x="530" y="380" font-family="sans-serif" font-size="8" fill="#171717" text-anchor="middle">SUBSTRATE BASE SYSTEM</text>

  <text x="140" y="495" font-family="sans-serif" font-size="10" fill="#737373" letter-spacing="2">02 // PREPARE</text>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/cement-wall-primer.svg'), cementPrimerSvg);

// 3. Luxury Emulsion
const luxuryEmulsionSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FCFBF8"/>
  <rect x="24" y="24" width="752" height="552" fill="#E9E0D2" fill-opacity="0.3" rx="2"/>

  <!-- Velvet finish wall backdrop -->
  <rect x="80" y="80" width="640" height="440" fill="#E9E0D2" fill-opacity="0.6"/>
  <circle cx="280" cy="300" r="160" fill="#FCFBF8" fill-opacity="0.65"/>
  <circle cx="280" cy="300" r="110" fill="#B89655" fill-opacity="0.15"/>

  <!-- Product Presentation Container Silhouette -->
  <rect x="340" y="190" width="240" height="270" rx="4" fill="#171717"/>
  <ellipse cx="460" cy="190" rx="120" ry="26" fill="#262626"/>
  <ellipse cx="460" cy="184" rx="108" ry="20" fill="#B89655"/>
  <ellipse cx="460" cy="460" rx="120" ry="26" fill="#171717"/>

  <!-- Minimalist Luxury Label -->
  <rect x="360" y="245" width="200" height="155" fill="#FCFBF8" rx="2"/>
  <rect x="360" y="245" width="200" height="6" fill="#B89655"/>
  <text x="460" y="280" font-family="sans-serif" font-weight="bold" font-size="14" fill="#171717" text-anchor="middle" letter-spacing="2">ANTICO</text>
  <text x="460" y="310" font-family="serif" font-size="14" fill="#171717" text-anchor="middle" font-weight="600">LUXURY EMULSION</text>
  <text x="460" y="335" font-family="sans-serif" font-size="9" fill="#737373" text-anchor="middle" letter-spacing="1">ARCHITECTURAL FINISH</text>
  <line x1="410" y1="355" x2="510" y2="355" stroke="#B89655" stroke-width="1"/>
  <text x="460" y="375" font-family="sans-serif" font-size="8" fill="#171717" text-anchor="middle">PREMIUM INTERIOR SYSTEM</text>

  <text x="140" y="495" font-family="sans-serif" font-size="10" fill="#737373" letter-spacing="2">03 // FINISH</text>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/luxury-emulsion.svg'), luxuryEmulsionSvg);

// 4. Eco Emulsion
const ecoEmulsionSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FCFBF8"/>
  <rect x="24" y="24" width="752" height="552" fill="#E9E0D2" fill-opacity="0.3" rx="2"/>

  <!-- Clean Everyday Paint Backdrop -->
  <rect x="80" y="80" width="640" height="440" fill="#D5C9B5" fill-opacity="0.25"/>
  <path d="M120 440 L340 180 L520 440 Z" fill="#FCFBF8" fill-opacity="0.75"/>

  <!-- Product Container Silhouette -->
  <rect x="360" y="200" width="230" height="260" rx="4" fill="#171717"/>
  <ellipse cx="475" cy="200" rx="115" ry="24" fill="#262626"/>
  <ellipse cx="475" cy="194" rx="102" ry="18" fill="#B89655"/>
  <ellipse cx="475" cy="460" rx="115" ry="24" fill="#171717"/>

  <!-- Label -->
  <rect x="380" y="250" width="190" height="150" fill="#FCFBF8" rx="2"/>
  <rect x="380" y="250" width="190" height="6" fill="#B89655"/>
  <text x="475" y="285" font-family="sans-serif" font-weight="bold" font-size="14" fill="#171717" text-anchor="middle" letter-spacing="2">ANTICO</text>
  <text x="475" y="315" font-family="serif" font-size="14" fill="#171717" text-anchor="middle" font-weight="600">ECO EMULSION</text>
  <text x="475" y="340" font-family="sans-serif" font-size="9" fill="#737373" text-anchor="middle" letter-spacing="1">WALL-PAINTING ESSENTIAL</text>
  <line x1="425" y1="360" x2="525" y2="360" stroke="#B89655" stroke-width="1"/>
  <text x="475" y="380" font-family="sans-serif" font-size="8" fill="#171717" text-anchor="middle">EVERYDAY INTERIOR PROJECT</text>

  <text x="140" y="495" font-family="sans-serif" font-size="10" fill="#737373" letter-spacing="2">04 // PAINT</text>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/eco-emulsion.svg'), ecoEmulsionSvg);

// 5. Roller Masker
const rollerMaskerSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#171717"/>
  <rect x="24" y="24" width="752" height="552" fill="#222222" rx="2"/>

  <!-- Work zone grid lines -->
  <line x1="80" y1="120" x2="720" y2="120" stroke="#333333" stroke-width="1"/>
  <line x1="80" y1="240" x2="720" y2="240" stroke="#333333" stroke-width="1"/>
  <line x1="80" y1="360" x2="720" y2="360" stroke="#333333" stroke-width="1"/>
  <line x1="80" y1="480" x2="720" y2="480" stroke="#333333" stroke-width="1"/>

  <!-- Unfolded Masking Film Drop Sheet Illustration -->
  <polygon points="160,200 480,160 560,460 220,490" fill="#FCFBF8" fill-opacity="0.08"/>
  <polygon points="180,210 470,175 540,440 240,470" fill="#E9E0D2" fill-opacity="0.12"/>
  <line x1="160" y1="200" x2="480" y2="160" stroke="#B89655" stroke-width="4"/>

  <!-- Roller Masker Dispenser Roll Silhouette -->
  <rect x="240" y="240" width="280" height="140" rx="8" fill="#2A2A2A" stroke="#B89655" stroke-width="2"/>
  <ellipse cx="280" cy="310" rx="35" ry="55" fill="#171717" stroke="#E9E0D2" stroke-width="1.5"/>
  <ellipse cx="480" cy="310" rx="35" ry="55" fill="#2A2A2A" stroke="#E9E0D2" stroke-width="1.5"/>
  
  <!-- Film Roll Core -->
  <circle cx="280" cy="310" r="16" fill="#B89655"/>

  <!-- Label on dispenser -->
  <text x="380" y="295" font-family="sans-serif" font-weight="bold" font-size="14" fill="#FCFBF8" letter-spacing="2">ROLLER MASKER</text>
  <text x="380" y="320" font-family="sans-serif" font-size="10" fill="#B89655" letter-spacing="1">PREPARATION ESSENTIAL</text>
  <text x="380" y="340" font-family="sans-serif" font-size="9" fill="#737373">SURFACE PROTECTION FILM</text>

  <text x="80" y="525" font-family="sans-serif" font-size="10" fill="#737373" letter-spacing="2">05 // ACCESSORY</text>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/roller-masker.svg'), rollerMaskerSvg);

// 6. Masking Tape
const maskingTapeSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#171717"/>
  <rect x="24" y="24" width="752" height="552" fill="#222222" rx="2"/>

  <!-- Precision edge lines -->
  <line x1="120" y1="460" x2="680" y2="460" stroke="#333333" stroke-width="1"/>
  <line x1="260" y1="460" x2="640" y2="180" stroke="#B89655" stroke-width="3" stroke-dasharray="6 6"/>

  <!-- Roll 1 (Foreground perspective) -->
  <ellipse cx="360" cy="330" rx="130" ry="85" fill="#E9E0D2" stroke="#B89655" stroke-width="2"/>
  <ellipse cx="360" cy="310" rx="130" ry="85" fill="#FAF6EE" stroke="#E9E0D2" stroke-width="2"/>
  <!-- Hollow Core -->
  <ellipse cx="360" cy="310" rx="60" ry="40" fill="#171717" stroke="#B89655" stroke-width="2"/>
  <ellipse cx="360" cy="325" rx="60" ry="40" fill="#262626"/>

  <!-- Roll 2 (Stacked behind) -->
  <ellipse cx="480" cy="240" rx="100" ry="65" fill="#E9E0D2" fill-opacity="0.8" stroke="#B89655" stroke-width="1.5"/>
  <ellipse cx="480" cy="225" rx="100" ry="65" fill="#FAF6EE" fill-opacity="0.8" stroke="#E9E0D2" stroke-width="1.5"/>
  <ellipse cx="480" cy="225" rx="45" ry="30" fill="#171717"/>

  <!-- Unrolled precision strip -->
  <path d="M480 340 Q 560 380, 680 430 L 670 455 Q 550 405, 470 365 Z" fill="#E9E0D2" stroke="#B89655" stroke-width="1.5"/>

  <!-- Label text -->
  <text x="360" y="160" font-family="sans-serif" font-weight="bold" font-size="16" fill="#FCFBF8" text-anchor="middle" letter-spacing="2">MASKING TAPE</text>
  <text x="360" y="185" font-family="sans-serif" font-size="10" fill="#B89655" text-anchor="middle" letter-spacing="1">CLEAN EDGE ESSENTIAL</text>

  <text x="80" y="525" font-family="sans-serif" font-size="10" fill="#737373" letter-spacing="2">06 // ACCESSORY</text>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/masking-tape.svg'), maskingTapeSvg);

console.log('Generated all 6 authoritative product images successfully');
