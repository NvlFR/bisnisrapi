import fs from 'fs';
import path from 'path';

const publicBlogDir = './public/blog';
const contentDir = './content/blog';

const allFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const missing = [];

for (const file of allFiles) {
  const slug = file.replace('.md', '');
  const dir = path.join(publicBlogDir, slug);
  const svgPath = path.join(dir, 'thumbnail.svg');
  const webpPath = path.join(dir, 'thumbnail.webp');
  const pngPath = path.join(dir, 'thumbnail.png');

  if (!fs.existsSync(svgPath) && !fs.existsSync(webpPath) && !fs.existsSync(pngPath)) {
    missing.push(slug);
  }
}

if (missing.length > 0) {
  console.log('Missing thumbnails for slugs:');
  console.log(missing.join('\n'));
} else {
  console.log('All thumbnails found.');
}
