import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const contentDir = path.join(__dirname, '..', 'content', 'blog');
const publicDir = path.join(__dirname, '..', 'public');

const allFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));

console.log(`Checking ${allFiles.length} blog posts...`);

const missing = [];

for (const file of allFiles) {
    const filePath = path.join(contentDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const imageMatch = content.match(/^image:\s*["']?([^"']+)["']?$/m);

    if (imageMatch) {
        const imageUrl = imageMatch[1];
        const absolutePath = path.join(publicDir, imageUrl);
        if (!fs.existsSync(absolutePath)) {
            missing.push({
                file,
                imageUrl,
                exists: false
            });
        }
    } else {
        missing.push({
            file,
            imageUrl: null,
            exists: false,
            reason: 'No image field in frontmatter'
        });
    }
}

if (missing.length > 0) {
    console.log(`Found ${missing.length} posts with missing or incorrect thumbnails:`);
    missing.forEach(m => {
        console.log(`- ${m.file}: ${m.imageUrl || 'MISSING FIELD'}`);
    });
} else {
    console.log('All thumbnails are correctly linked and exist!');
}
