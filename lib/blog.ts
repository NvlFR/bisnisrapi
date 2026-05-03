import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { cache } from 'react';

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

export type BlogPostSummary = Omit<BlogPost, 'content'>;

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200; // avg Indonesian reading speed
  const wordCount = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

// Internal cache for dev mode to avoid re-reading files on every HMR/refresh if possible
let postsCache: BlogPost[] | null = null;

export const getAllPosts = cache((): BlogPost[] => {
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
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author ?? 'BisnisRapi Team',
        category: data.category || 'Uncategorized',
        tags: data.tags ?? [],
        image: data.image ?? '',
        content,
        readingTime: calculateReadingTime(content),
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
});

/**
 * Gets only the metadata for blog posts, skipping the full content.
 * This is much faster for listing pages.
 */
export const getPostsSummaries = cache((): BlogPostSummary[] => {
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
      
      // Using gray-matter's excerpt or just parsing data is enough
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || '',
        author: data.author ?? 'BisnisRapi Team',
        category: data.category || 'Uncategorized',
        tags: data.tags ?? [],
        image: data.image ?? '',
        readingTime: calculateReadingTime(content),
      } as BlogPostSummary;
    });

  return allPostsData.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
});

export const getPostBySlug = cache((slug: string): BlogPost | null => {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`);
    if (!fs.existsSync(fullPath)) return null;
    
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
});

export function getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPostSummary[] {
  const all = getPostsSummaries();
  const related = all.filter((p) => p.slug !== currentSlug && p.category === category);
  
  if (related.length >= limit) {
    return related.slice(0, limit);
  }

  const others = all.filter((p) => p.slug !== currentSlug && p.category !== category);
  return [...related, ...others].slice(0, limit);
}
