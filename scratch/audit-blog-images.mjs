import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDir = './content/blog';
const publicDir = './public';

const allFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const status = {
  missingImage: [],
  emptyImage: [],
  brokenPath: [],
  valid: 0
};

for (const file of allFiles) {
  const mdPath = path.join(contentDir, file);
  const content = fs.readFileSync(mdPath, 'utf8');
  const { data } = matter(content);
  
  if (data.image === undefined) {
    status.missingImage.push(file);
  } else if (data.image === '') {
    status.emptyImage.push(file);
  } else {
    const imagePath = data.image;
    const absolutePath = path.join(publicDir, imagePath);
    
    if (!fs.existsSync(absolutePath)) {
      status.brokenPath.push({ file, path: imagePath });
    } else {
      status.valid++;
    }
  }
}

console.log(JSON.stringify(status, null, 2));
