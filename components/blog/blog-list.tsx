'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowRight, ChevronDown } from 'lucide-react';
import { BlogPostSummary } from '@/lib/blog';

const PAGE_SIZE = 9;

interface BlogListProps {
  initialPosts: BlogPostSummary[];
  initialHasMore: boolean;
  allPosts?: BlogPostSummary[]; // all remaining posts for client-side pagination
}

export function BlogList({ initialPosts, initialHasMore, allPosts = [] }: BlogListProps) {
  const [visibleCount, setVisibleCount] = useState(initialPosts.length);

  // Combine initial + all for client-side slicing
  const combined = [...initialPosts, ...allPosts];
  const visible = combined.slice(0, visibleCount);
  const hasMore = visibleCount < combined.length;

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visible.map((post) => (
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

      {/* Load More button — works with static export (no server action needed) */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-border bg-background text-foreground font-semibold hover:bg-secondary transition-all hover:shadow-sm"
          >
            <ChevronDown className="w-4 h-4" />
            Muat Lebih Banyak ({combined.length - visibleCount} artikel lagi)
          </button>
        </div>
      )}
    </div>
  );
}
