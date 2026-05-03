import fs from 'fs';
import path from 'path';

const contentDir = 'content/blog';
const publicDir = 'public/blog';

const files = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const missing = [];

for (const file of files) {
  const slug = file.replace('.md', '');
  const thumbPath = path.join(publicDir, slug, 'thumbnail.webp');
  if (!fs.existsSync(thumbPath)) {
    missing.push(slug);
  }
}

if (missing.length > 0) {
  console.log(`Missing thumbnails for ${missing.length} posts:`);
  console.log(missing.join('\n'));
} else {
  console.log('All thumbnails are present.');
}
