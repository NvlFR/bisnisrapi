import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  image: string;
  content: string;
  readingTime: number; // in minutes
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // avg Indonesian reading speed
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title,
        date: data.date,
        excerpt: data.excerpt,
        author: data.author ?? 'BisnisRapi Team',
        category: data.category,
        tags: data.tags ?? [],
        image: data.image ?? '',
        content,
        readingTime: calculateReadingTime(content),
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      author: data.author ?? 'BisnisRapi Team',
      category: data.category,
      tags: data.tags ?? [],
      image: data.image ?? '',
      content,
      readingTime: calculateReadingTime(content),
    } as BlogPost;
  } catch {
    return null;
  }
}

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
  const all = getAllPosts();
  return all
    .filter((p) => p.slug !== currentSlug && p.category === category)
    .slice(0, limit)
    .concat(
      all
        .filter((p) => p.slug !== currentSlug && p.category !== category)
        .slice(0, Math.max(0, limit - all.filter((p) => p.slug !== currentSlug && p.category === category).length))
    )
    .slice(0, limit);
}
