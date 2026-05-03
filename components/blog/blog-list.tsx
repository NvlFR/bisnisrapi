'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight, Loader2 } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { BlogPostSummary } from '@/lib/blog';
import { getPaginatedPosts } from '@/app/blog/actions';

interface BlogListProps {
  initialPosts: BlogPostSummary[];
  initialHasMore: boolean;
}

export function BlogList({ initialPosts, initialHasMore }: BlogListProps) {
  const [posts, setPosts] = useState<BlogPostSummary[]>(initialPosts);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(initialHasMore);
  const [isLoading, setIsLoading] = useState(false);
  
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: '400px', // Load earlier for better UX
  });

  useEffect(() => {
    async function loadMorePosts() {
      if (inView && hasMore && !isLoading) {
        setIsLoading(true);
        try {
          const nextPage = page + 1;
          const result = await getPaginatedPosts(nextPage);
          
          if (result.posts.length > 0) {
            setPosts((prev) => [...prev, ...result.posts]);
            setPage(nextPage);
          }
          
          setHasMore(result.hasMore);
        } catch (error) {
          console.error('Error loading more posts:', error);
        } finally {
          setIsLoading(false);
        }
      }
    }

    loadMorePosts();
  }, [inView, hasMore, isLoading, page]);

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="group relative flex flex-col bg-background rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 shadow-sm"
          >
            <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
              {post.image ? (
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={80}
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary/40 font-bold">
                  BisnisRapi
                </div>
              )}
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                  {post.category}
                </span>
              </div>
            </Link>

            <div className="flex-1 p-6 flex flex-col">
              <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readingTime} mnt
                </div>
              </div>

              <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.title}</Link>
              </h2>

              <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <User className="w-3 h-3" />
                  {post.author}
                </div>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                >
                  Baca
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Loading Sentinel */}
      {hasMore && (
        <div ref={ref} className="flex justify-center py-12">
          {isLoading && (
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-primary animate-spin" />
              <p className="text-sm text-muted-foreground animate-pulse">Memuat lebih banyak...</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

