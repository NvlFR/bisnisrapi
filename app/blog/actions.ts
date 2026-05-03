'use server';

import { getPostsSummaries } from '@/lib/blog';

export async function getPaginatedPosts(page: number, limit: number = 9) {
  const allPosts = getPostsSummaries();
  // We skip the first one because it's usually the featured post on the main blog page
  // But wait, the user might want the featured one to be separate.
  // On the main page, we show 1 featured + 9 rest.
  // So the "rest" starts from index 1.
  
  const start = 1 + (page - 1) * limit;
  const end = start + limit;
  
  const posts = allPosts.slice(start, end);
  const hasMore = end < allPosts.length;
  
  return {
    posts,
    hasMore,
  };
}
