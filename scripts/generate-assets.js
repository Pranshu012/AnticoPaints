const fs = require('fs');
const path = require('path');

const galleryProjects = [
  {
    id: 'project-residential',
    title: 'The Pavilion Residence',
    sector: 'LUXURY RESIDENTIAL',
    bg: '#E9E0D2',
    accent: '#C08000'
  },
  {
    id: 'project-commercial',
    title: 'Apex Financial Center',
    sector: 'COMMERCIAL ATRIUM',
    bg: '#D5C9B5',
    accent: '#111111'
  },
  {
    id: 'project-hospitality',
    title: 'The Heritage Grand Hotel',
    sector: 'HOSPITALITY RESTORATION',
    bg: '#DDD3BF',
    accent: '#A37B3C'
  },
  {
    id: 'project-institutional',
    title: 'Gallery of Contemporary Design',
    sector: 'INSTITUTIONAL MUSEUM',
    bg: '#E3E3E3',
    accent: '#C08000'
  }
];

galleryProjects.forEach(g => {
  const svg = `<svg width="800" height="600" viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="600" fill="#FCFBF8"/>
  <rect x="20" y="20" width="760" height="560" fill="${g.bg}" fill-opacity="0.5" rx="4"/>
  <!-- Architectural composition -->
  <path d="M80 500 L80 180 L420 100 L420 500 Z" fill="#111111" fill-opacity="0.88"/>
  <path d="M420 100 L720 200 L720 500 L420 500 Z" fill="#111111" fill-opacity="0.96"/>
  <line x1="80" y1="180" x2="720" y2="200" stroke="${g.accent}" stroke-width="4"/>
  
  <!-- Architectural fenestration -->
  <rect x="140" y="220" width="80" height="240" fill="#FCFBF8" fill-opacity="0.9"/>
  <rect x="260" y="220" width="80" height="240" fill="#FCFBF8" fill-opacity="0.9"/>
  <rect x="480" y="240" width="90" height="120" fill="#FCFBF8" fill-opacity="0.2"/>
  <rect x="600" y="240" width="90" height="120" fill="#FCFBF8" fill-opacity="0.2"/>
  
  <rect x="40" y="460" width="720" height="80" fill="#111111" fill-opacity="0.92"/>
  <text x="70" y="500" font-family="serif" font-size="20" fill="#FCFBF8" letter-spacing="1">${g.title}</text>
  <text x="70" y="525" font-family="sans-serif" font-size="12" fill="${g.accent}" letter-spacing="2">${g.sector}</text>
  <text x="730" y="515" font-family="sans-serif" font-size="11" fill="#DDD3BF" text-anchor="end">ANTICO ARCHITECTURAL COATINGS SPECIFIED</text>
</svg>`;
  fs.writeFileSync(path.join(process.cwd(), `public/images/gallery/${g.id}.svg`), svg);
});

const catalogues = [
  { id: 'cat-architectural', title: 'SPECIFICATION GUIDE', sub: 'Master Systems & Substrates' },
  { id: 'cat-interior', title: 'INTERIOR COLLECTIONS', sub: 'Emulsion & Sheen Index' },
  { id: 'cat-exterior', title: 'EXTERIOR SYSTEMS', sub: 'High-Durability & Siloxanes' },
  { id: 'cat-textures', title: 'ARTISAN TEXTURES', sub: 'Mineral Stucco & Metallic Wash' }
];

catalogues.forEach(c => {
  const svg = `<svg width="400" height="560" viewBox="0 0 400 560" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="400" height="560" fill="#111111"/>
  <rect x="15" y="15" width="370" height="530" stroke="#C08000" stroke-width="1.5" fill="none"/>
  <rect x="35" y="35" width="330" height="240" fill="#E9E0D2" fill-opacity="0.1"/>
  <!-- Official Shield Emblem representation -->
  <path d="M200 80 L260 105 L260 170 Q260 215 200 240 Q140 215 140 170 L140 105 Z" fill="none" stroke="#C08000" stroke-width="3"/>
  <path d="M175 195 L200 130 L225 195 M185 175 L215 175" stroke="#C08000" stroke-width="3" stroke-linecap="round"/>
  <path d="M200 130 Q235 130 235 152 Q235 175 200 175" stroke="#C08000" stroke-width="3" fill="none"/>
  
  <text x="200" y="330" font-family="sans-serif" font-weight="bold" font-size="20" fill="#FCFBF8" text-anchor="middle" letter-spacing="3">ANTICO</text>
  <text x="200" y="358" font-family="sans-serif" font-weight="bold" font-size="20" fill="#C08000" text-anchor="middle" letter-spacing="3">PAINTS</text>
  <line x1="120" y1="380" x2="280" y2="380" stroke="#C08000" stroke-width="1"/>
  <text x="200" y="415" font-family="serif" font-size="15" fill="#C08000" text-anchor="middle" letter-spacing="1">${c.title}</text>
  <text x="200" y="442" font-family="sans-serif" font-size="11" fill="#D5C9B5" text-anchor="middle">${c.sub}</text>
  <text x="200" y="505" font-family="sans-serif" font-size="10" fill="#737373" text-anchor="middle">ARCHITECTURAL EDITION // CONFIDENTIAL</text>
</svg>`;
  fs.writeFileSync(path.join(process.cwd(), `public/images/catalogues/${c.id}.svg`), svg);
});

// Create minimal valid PDF placeholder files
const minimalPdf = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>
endobj
4 0 obj
<< /Length 124 >>
stream
BT
/F1 18 Tf
72 710 Td
(Antico Paints - Architectural Specification Document Placeholder) Tj
ET
endstream
endobj
5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000228 00000 n 
0000000403 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
479
%%EOF`;

const pdfFiles = [
  'antico-architectural-spec-guide.pdf',
  'antico-interior-collection.pdf',
  'antico-exterior-systems.pdf',
  'antico-artisan-textures.pdf'
];

pdfFiles.forEach(file => {
  fs.writeFileSync(path.join(process.cwd(), `public/catalogues/${file}`), minimalPdf);
});

console.log('Gallery, catalogue covers and PDFs generated successfully');
