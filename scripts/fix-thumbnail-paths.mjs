import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'blog');
const publicDir = path.join(__dirname, '..', 'public', 'blog');

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

let updated = 0;
let skipped = 0;

for (const file of files) {
  const slug = file.replace('.md', '');
  const filePath = path.join(contentDir, file);
  const svgPath = path.join(publicDir, slug, 'thumbnail.svg');
  const webpPath = path.join(publicDir, slug, 'thumbnail.webp');
  const pngPath = path.join(publicDir, slug, 'thumbnail.png');

  // Kalau sudah ada webp atau png asli, skip (jangan overwrite)
  if (fs.existsSync(webpPath) || fs.existsSync(pngPath)) {
    skipped++;
    continue;
  }

  // Kalau ada SVG, update frontmatter
  if (fs.existsSync(svgPath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const oldImage = `/blog/${slug}/thumbnail.webp`;
    const newImage = `/blog/${slug}/thumbnail.svg`;

    if (content.includes(oldImage)) {
      content = content.replace(oldImage, newImage);
      fs.writeFileSync(filePath, content, 'utf8');
      updated++;
      console.log(`✅ ${slug}`);
    } else if (content.includes(newImage)) {
      skipped++;
    } else {
      // Frontmatter image path berbeda, coba fix apapun yang ada
      const imageRegex = /^image:\s*["']?.*["']?$/m;
      if (imageRegex.test(content)) {
        content = content.replace(imageRegex, `image: "${newImage}"`);
        fs.writeFileSync(filePath, content, 'utf8');
        updated++;
        console.log(`✅ fixed: ${slug}`);
      }
    }
  }
}

console.log(`\nDone! Updated: ${updated}, Skipped (has real image): ${skipped}`);
