const fs = require('fs');
const path = require('path');

// 1. Texture: Authentic warm beige plaster/trowel textured wall surface
const textureSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="wallBase" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCFBF8"/>
      <stop offset="50%" stop-color="#E9E0D2"/>
      <stop offset="100%" stop-color="#D5C9B5"/>
    </linearGradient>
    <linearGradient id="lightAngle" x1="100" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="#E9E0D2" stop-opacity="0.2"/>
      <stop offset="100%" stop-color="#171717" stop-opacity="0.08"/>
    </linearGradient>
  </defs>

  <!-- Base Wall -->
  <rect width="800" height="600" fill="url(#wallBase)"/>

  <!-- Troweled Stucco Surface Layers -->
  <path d="M0 140 Q 250 110, 500 180 T 800 150 L 800 600 L 0 600 Z" fill="#E4D9C7" fill-opacity="0.5"/>
  <path d="M0 260 Q 320 220, 620 310 T 800 280 L 800 600 L 0 600 Z" fill="#D8CCA8" fill-opacity="0.35"/>
  <path d="M0 380 Q 280 340, 560 430 T 800 400 L 800 600 L 0 600 Z" fill="#C9BDAA" fill-opacity="0.3"/>

  <!-- Light wash -->
  <polygon points="120,0 520,0 360,600 0,600" fill="url(#lightAngle)"/>

  <!-- Realistic Mineral Texture Strokes -->
  <g stroke="#9C8F7A" stroke-opacity="0.28" stroke-width="1.5" stroke-linecap="round">
    <path d="M80 120 Q 140 125 210 122"/>
    <path d="M120 160 Q 180 166 260 160"/>
    <path d="M280 110 Q 350 118 430 114"/>
    <path d="M480 190 Q 550 200 640 192"/>
    <path d="M160 280 Q 230 292 310 286"/>
    <path d="M380 250 Q 450 262 530 255"/>
    <path d="M590 280 Q 670 292 740 284"/>
    <path d="M100 420 Q 180 432 270 425"/>
    <path d="M320 390 Q 400 402 490 394"/>
    <path d="M520 440 Q 600 452 690 445"/>
    <path d="M220 510 Q 300 522 390 515"/>
    <path d="M460 520 Q 540 532 630 525"/>
  </g>

  <!-- Fine textural stipples -->
  <circle cx="180" cy="140" r="1.5" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="260" cy="220" r="1.8" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="440" cy="160" r="1.5" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="580" cy="230" r="1.8" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="340" cy="330" r="1.5" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="680" cy="380" r="1.8" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="230" cy="460" r="1.5" fill="#9C8F7A" fill-opacity="0.4"/>
  <circle cx="510" cy="480" r="1.8" fill="#9C8F7A" fill-opacity="0.4"/>
</svg>`;

// 2. Cement Wall Primer: Concrete masonry wall with white preparatory coat being applied
const primerSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="concreteBg" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#C2BCB2"/>
      <stop offset="100%" stop-color="#9E988D"/>
    </linearGradient>
  </defs>

  <!-- Raw Concrete / Cement Wall Background -->
  <rect width="800" height="600" fill="url(#concreteBg)"/>

  <!-- Subtle concrete mortar blocks -->
  <line x1="0" y1="200" x2="800" y2="200" stroke="#7A756B" stroke-opacity="0.3" stroke-width="2"/>
  <line x1="0" y1="400" x2="800" y2="400" stroke="#7A756B" stroke-opacity="0.3" stroke-width="2"/>
  <line x1="320" y1="0" x2="320" y2="200" stroke="#7A756B" stroke-opacity="0.3" stroke-width="2"/>
  <line x1="600" y1="200" x2="600" y2="400" stroke="#7A756B" stroke-opacity="0.3" stroke-width="2"/>
  <line x1="240" y1="400" x2="240" y2="600" stroke="#7A756B" stroke-opacity="0.3" stroke-width="2"/>

  <!-- Applied White Preparatory Primer Band -->
  <path d="M0 0 L480 0 L420 600 L0 600 Z" fill="#FCFBF8" fill-opacity="0.94"/>
  
  <!-- Wet coat edge feathered into concrete -->
  <path d="M480 0 Q 510 120, 470 240 T 450 420 Q 480 520, 420 600" stroke="#E9E0D2" stroke-width="12" fill="none"/>
  
  <!-- Paint Roller in action -->
  <g transform="translate(420, 220) rotate(-18)">
    <!-- Roller cylinder -->
    <rect x="-35" y="-120" width="70" height="240" rx="14" fill="#FCFBF8" stroke="#D5C9B5" stroke-width="3"/>
    <ellipse cx="0" cy="-120" rx="35" ry="12" fill="#E9E0D2"/>
    <ellipse cx="0" cy="120" rx="35" ry="12" fill="#D5C9B5"/>
    
    <!-- Metal bracket -->
    <path d="M0 -120 L0 -140 L-90 -140 L-90 180 L0 180 L0 120" stroke="#171717" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
    <!-- Handle -->
    <path d="M-90 20 L-180 20 L-260 20" stroke="#171717" stroke-width="10" stroke-linecap="round" fill="none"/>
    <rect x="-240" y="8" width="90" height="24" rx="4" fill="#B89655"/>
  </g>
</svg>`;

// 3. Luxury Emulsion: Pristine, rich velvet-smooth interior wall with warm architectural lighting
const luxurySvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="luxuryWall" x1="200" y1="0" x2="600" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCFBF8"/>
      <stop offset="35%" stop-color="#F2EDE4"/>
      <stop offset="75%" stop-color="#E2D7C5"/>
      <stop offset="100%" stop-color="#CDBEA8"/>
    </linearGradient>
    <linearGradient id="warmSconce" x1="400" y1="0" x2="400" y2="500" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.8"/>
      <stop offset="50%" stop-color="#B89655" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#FCFBF8" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Wall Background -->
  <rect width="800" height="600" fill="url(#luxuryWall)"/>

  <!-- Architectural Wall Niche / Panel Detail -->
  <rect x="120" y="80" width="560" height="440" fill="none" stroke="#FFFFFF" stroke-opacity="0.6" stroke-width="2"/>
  <rect x="130" y="90" width="540" height="420" fill="none" stroke="#D5C9B5" stroke-opacity="0.4" stroke-width="1"/>

  <!-- Gentle ambient light cone from top -->
  <polygon points="320,0 480,0 680,600 120,600" fill="url(#warmSconce)"/>

  <!-- Architectural skirting / floor shadow -->
  <rect x="0" y="550" width="800" height="50" fill="#171717" fill-opacity="0.08"/>
  <line x1="0" y1="550" x2="800" y2="550" stroke="#171717" stroke-opacity="0.15" stroke-width="1.5"/>

  <!-- Paint Swatch Fan / Colour Test Visual -->
  <g transform="translate(480, 360)">
    <!-- Swatch 1 -->
    <rect x="-40" y="-80" width="60" height="130" rx="3" fill="#FCFBF8" stroke="#D5C9B5" stroke-width="1.5" transform="rotate(-15)"/>
    <!-- Swatch 2 -->
    <rect x="-10" y="-85" width="60" height="130" rx="3" fill="#E9E0D2" stroke="#D5C9B5" stroke-width="1.5" transform="rotate(0)"/>
    <!-- Swatch 3 -->
    <rect x="20" y="-80" width="60" height="130" rx="3" fill="#B89655" stroke="#97773D" stroke-width="1.5" transform="rotate(15)"/>
  </g>
</svg>`;

// 4. Eco Emulsion: Fresh, clean, breathable everyday painted wall surface
const ecoSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ecoWall" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCFBF8"/>
      <stop offset="50%" stop-color="#F5F1E9"/>
      <stop offset="100%" stop-color="#E5DDD0"/>
    </linearGradient>
  </defs>

  <!-- Wall Background -->
  <rect width="800" height="600" fill="url(#ecoWall)"/>

  <!-- Smooth, Fresh Roller Lap Lines -->
  <path d="M160 0 L280 0 L280 600 L160 600 Z" fill="#FFFFFF" fill-opacity="0.4"/>
  <path d="M280 0 L400 0 L400 600 L280 600 Z" fill="#FAF6EE" fill-opacity="0.3"/>
  <path d="M400 0 L520 0 L520 600 L400 600 Z" fill="#FFFFFF" fill-opacity="0.4"/>
  <path d="M520 0 L640 0 L640 600 L520 600 Z" fill="#FAF6EE" fill-opacity="0.3"/>

  <!-- Clean Diagonal Natural Light Beam from Window -->
  <polygon points="260,0 540,0 720,600 440,600" fill="#FFFFFF" fill-opacity="0.25"/>

  <!-- Minimal Painter's Roller Silhouette on Clean Wall -->
  <g transform="translate(320, 300) rotate(24)">
    <rect x="-25" y="-90" width="50" height="180" rx="8" fill="#FAF8F2" stroke="#D5C9B5" stroke-width="2"/>
    <!-- Wire frame -->
    <path d="M0 -90 L0 -105 L-65 -105 L-65 140 L0 140 L0 90" stroke="#171717" stroke-width="6" stroke-linecap="round" fill="none"/>
    <path d="M-65 18 L-130 18" stroke="#171717" stroke-width="8" stroke-linecap="round" fill="none"/>
    <rect x="-170" y="8" width="55" height="20" rx="3" fill="#171717"/>
  </g>
</svg>`;

// 5. Roller Masker: Clearly recognisable masking dispenser with protective drop sheet film
const rollerMaskerSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="filmShine" x1="0" y1="0" x2="800" y2="600" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#FCFBF8" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="#E9E0D2" stop-opacity="0.1"/>
      <stop offset="100%" stop-color="#171717" stop-opacity="0.15"/>
    </linearGradient>
  </defs>

  <!-- Clean Architectural Studio Ground -->
  <rect width="800" height="600" fill="#FCFBF8"/>
  <rect x="30" y="30" width="740" height="540" fill="#F4EFE7" fill-opacity="0.6" rx="4"/>

  <!-- Unfolded Translucent Protective Drop Film Sheet -->
  <polygon points="120,240 680,180 720,500 160,540" fill="#FFFFFF" fill-opacity="0.75" stroke="#D5C9B5" stroke-width="1.5"/>
  <polygon points="120,240 680,180 720,500 160,540" fill="url(#filmShine)"/>
  
  <!-- Film fold pleats -->
  <line x1="220" y1="230" x2="260" y2="530" stroke="#E9E0D2" stroke-width="1.5"/>
  <line x1="360" y1="210" x2="400" y2="520" stroke="#E9E0D2" stroke-width="1.5"/>
  <line x1="500" y1="195" x2="540" y2="510" stroke="#E9E0D2" stroke-width="1.5"/>

  <!-- Gold/Amber Masking Tape Top Strip Binding the Film -->
  <polygon points="115,245 685,185 685,160 115,220" fill="#B89655" stroke="#97773D" stroke-width="1"/>

  <!-- Roller Masker Dispenser Tool -->
  <g transform="translate(360, 200) rotate(-12)">
    <!-- Dispenser housing -->
    <rect x="-120" y="-45" width="240" height="90" rx="12" fill="#171717" stroke="#2E2E2E" stroke-width="2"/>
    <!-- Masking tape roll on side -->
    <ellipse cx="70" cy="0" rx="38" ry="38" fill="#B89655" stroke="#97773D" stroke-width="2"/>
    <ellipse cx="70" cy="0" rx="18" ry="18" fill="#E9E0D2"/>
    <ellipse cx="70" cy="0" rx="10" ry="10" fill="#171717"/>

    <!-- Plastic film core cylinder -->
    <rect x="-95" y="-30" width="130" height="60" rx="6" fill="#E9E0D2" stroke="#D5C9B5" stroke-width="1.5"/>
    <line x1="-95" y1="-10" x2="35" y2="-10" stroke="#FAF8F2" stroke-width="2"/>
    <line x1="-95" y1="10" x2="35" y2="10" stroke="#FAF8F2" stroke-width="2"/>

    <!-- Ergonomic grip -->
    <rect x="-70" y="38" width="80" height="20" rx="4" fill="#2E2E2E"/>
  </g>
</svg>`;

// 6. Masking Tape: Recognisable rolls of painter's masking tape with clean unrolled strip
const maskingTapeSvg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Clean Neutral Surface -->
  <rect width="800" height="600" fill="#FCFBF8"/>
  <rect x="30" y="30" width="740" height="540" fill="#F4EFE7" fill-opacity="0.6" rx="4"/>

  <!-- Drop Shadow under rolls -->
  <ellipse cx="380" cy="410" rx="220" ry="45" fill="#171717" fill-opacity="0.08"/>

  <!-- Tape Roll 1 (Foreground Main Roll) -->
  <g transform="translate(340, 310)">
    <!-- Outer Cylinder -->
    <ellipse cx="0" cy="40" rx="150" ry="90" fill="#D5C9B5"/>
    <rect x="-150" y="-30" width="300" height="70" fill="#E9E0D2"/>
    <ellipse cx="0" cy="-30" rx="150" ry="90" fill="#FAF6EE" stroke="#E9E0D2" stroke-width="2"/>
    <ellipse cx="0" cy="40" rx="150" ry="90" fill="none" stroke="#D5C9B5" stroke-width="2"/>

    <!-- Inner Core Tube -->
    <ellipse cx="0" cy="-30" rx="75" ry="45" fill="#171717" stroke="#B89655" stroke-width="2"/>
    <ellipse cx="0" cy="-22" rx="75" ry="45" fill="#2A2A2A"/>
    <ellipse cx="0" cy="-15" rx="75" ry="45" fill="#171717"/>
  </g>

  <!-- Tape Roll 2 (Stacked Behind) -->
  <g transform="translate(480, 230)">
    <ellipse cx="0" cy="30" rx="110" ry="65" fill="#C9BDAA"/>
    <rect x="-110" y="-20" width="220" height="50" fill="#DDD3BF"/>
    <ellipse cx="0" cy="-20" rx="110" ry="65" fill="#F4EFE7" stroke="#DDD3BF" stroke-width="1.5"/>
    <ellipse cx="0" cy="-20" rx="55" ry="32" fill="#171717"/>
  </g>

  <!-- Unrolled Precision Edge Tape Strip extending out -->
  <path d="M470 330 Q 560 380, 710 430 L 690 475 Q 540 420, 440 375 Z" fill="#FAF6EE" stroke="#E9E0D2" stroke-width="2"/>
  <line x1="470" y1="330" x2="710" y2="430" stroke="#B89655" stroke-width="2"/>
  <line x1="440" y1="375" x2="690" y2="475" stroke="#B89655" stroke-width="2"/>
</svg>`;

fs.writeFileSync(path.join(process.cwd(), 'public/images/products/texture-wall.svg'), textureSvg);
fs.writeFileSync(path.join(process.cwd(), 'public/images/products/cement-wall-primer.svg'), primerSvg);
fs.writeFileSync(path.join(process.cwd(), 'public/images/products/luxury-emulsion.svg'), luxurySvg);
fs.writeFileSync(path.join(process.cwd(), 'public/images/products/eco-emulsion.svg'), ecoSvg);
fs.writeFileSync(path.join(process.cwd(), 'public/images/products/roller-masker.svg'), rollerMaskerSvg);
fs.writeFileSync(path.join(process.cwd(), 'public/images/products/masking-tape.svg'), maskingTapeSvg);

console.log('Generated clean, realistic 4:3 product visuals without fake packaging');
