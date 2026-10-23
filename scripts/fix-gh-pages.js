const fs = require('fs');
const path = require('path');

const OUT_DIR = path.join(__dirname, '..', 'out');

if (!fs.existsSync(OUT_DIR)) {
  console.error('out/ directory does not exist. Run build first.');
  process.exit(1);
}

// 1. Create .nojekyll so GitHub Pages does not ignore _next
fs.writeFileSync(path.join(OUT_DIR, '.nojekyll'), '');
console.log('Created out/.nojekyll');

// 2. Walk all HTML, JS, CSS files and ensure /images/ & /catalogues/ are prefixed
function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else if (
      file.endsWith('.html') ||
      file.endsWith('.js') ||
      file.endsWith('.css') ||
      file.endsWith('.json') ||
      file.endsWith('.txt')
    ) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let changed = false;

      // Replace /images/ -> /AnticoPaints/images/ avoiding double prefix
      if (
        content.includes('"/images/') ||
        content.includes("'/images/") ||
        content.includes('(/images/')
      ) {
        content = content.replace(/(["'\(])\/images\//g, '$1/AnticoPaints/images/');
        changed = true;
      }

      // Also handle escaped slashes in JSON strings: \/images\/ -> \/AnticoPaints\/images\/
      if (content.includes('\\/images\\/')) {
        content = content.replace(/\\\/images\\\//g, '\\/AnticoPaints\\/images\\/');
        changed = true;
      }

      // Replace /catalogues/ -> /AnticoPaints/catalogues/
      if (
        content.includes('"/catalogues/') ||
        content.includes("'/catalogues/") ||
        content.includes('(/catalogues/')
      ) {
        content = content.replace(/(["'\(])\/catalogues\//g, '$1/AnticoPaints/catalogues/');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

walk(OUT_DIR);
console.log('Fixed asset paths in out/');

// 3. Create out/404.html fallback from out/index.html if needed
if (fs.existsSync(path.join(OUT_DIR, 'index.html'))) {
  fs.copyFileSync(path.join(OUT_DIR, 'index.html'), path.join(OUT_DIR, '404.html'));
  console.log('Created out/404.html for SPA fallback');
}
