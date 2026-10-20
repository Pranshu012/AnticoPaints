const fs = require('fs');
const path = require('path');

const products = [
  { id: 'seta-satin', title: 'SETA SILK', sub: 'INTERIOR SATIN EMULSION', labelBg: '#FCFBF8', accent: '#B89655' },
  { id: 'scudo-exterior', title: 'SCUDOGUARD', sub: 'EXTERIOR WEATHER SHIELD', labelBg: '#E9E0D2', accent: '#171717' },
  { id: 'silicato-mineral', title: 'SILICATO MINERAL', sub: 'POTASSIUM SILICATE COATING', labelBg: '#FCFBF8', accent: '#785E2F' },
  { id: 'travertino-stucco', title: 'TRAVERTINO', sub: 'ARCHITECTURAL LIME STUCCO', labelBg: '#DDD3BF', accent: '#A37B3C' },
  { id: 'metallico-patina', title: 'AURA METALLICO', sub: 'ARCHITECTURAL MICA WASH', labelBg: '#FCFBF8', accent: '#D8C59C' },
  { id: 'primer-penetrante', title: 'PENETRANTE', sub: 'DEEP ALKALI SEALER PRIMER', labelBg: '#E9E0D2', accent: '#171717' },
  { id: 'polyuretano-enamel', title: 'DURALUX ENAMEL', sub: 'WATERBORNE POLYURETHANE', labelBg: '#FCFBF8', accent: '#B89655' },
];

products.forEach(p => {
  const svg = `<svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="600" height="600" fill="#FCFBF8"/>
  <rect x="30" y="30" width="540" height="540" fill="#E9E0D2" fill-opacity="0.25" rx="6"/>
  <rect x="175" y="180" width="250" height="300" rx="8" fill="#171717"/>
  <ellipse cx="300" cy="180" rx="125" ry="32" fill="#262626"/>
  <ellipse cx="300" cy="172" rx="110" ry="24" fill="${p.accent}"/>
  <ellipse cx="300" cy="480" rx="125" ry="32" fill="#171717"/>
  <rect x="195" y="240" width="210" height="180" fill="${p.labelBg}" rx="2"/>
  <rect x="195" y="240" width="210" height="8" fill="${p.accent}"/>
  <text x="300" y="290" font-family="serif" font-size="18" fill="#171717" text-anchor="middle" font-weight="bold" letter-spacing="2">ANTICO</text>
  <text x="300" y="320" font-family="serif" font-size="14" fill="#171717" text-anchor="middle">${p.title}</text>
  <text x="300" y="350" font-family="sans-serif" font-size="10" fill="#737373" text-anchor="middle">${p.sub}</text>
  <line x1="240" y1="375" x2="360" y2="375" stroke="${p.accent}" stroke-width="1.5"/>
  <text x="300" y="398" font-family="sans-serif" font-size="9" fill="#171717" text-anchor="middle">COMMERCIAL SPECIFICATION GRADE</text>
</svg>`;
  fs.writeFileSync(path.join(process.cwd(), `public/images/products/${p.id}.svg`), svg);
});
console.log('Product SVGs generated successfully');
