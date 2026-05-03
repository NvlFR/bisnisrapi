import fs from 'fs';
import path from 'path';

const contentDir = './content/blog';
const publicDir = './public';

const allFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const broken = [];

for (const file of allFiles) {
  const mdPath = path.join(contentDir, file);
  const content = fs.readFileSync(mdPath, 'utf8');
  const imageMatch = content.match(/^image:\s*["']?(.*?)["']?$/m);
  
  if (imageMatch) {
    const imagePath = imageMatch[1];
    const absolutePath = path.join(publicDir, imagePath);
    
    if (!fs.existsSync(absolutePath)) {
      broken.push({ slug: file.replace('.md', ''), path: imagePath });
    }
  } else {
    broken.push({ slug: file.replace('.md', ''), path: 'MISSING FRONTMATTER' });
  }
}

if (broken.length > 0) {
  console.log('Broken image paths:');
  broken.forEach(b => console.log(`${b.slug}: ${b.path}`));
} else {
  console.log('All image paths are valid.');
}
