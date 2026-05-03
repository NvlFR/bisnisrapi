import { getPostsSummaries } from '@/lib/blog';
import { BlogList } from '@/components/blog/blog-list';
import { BlogSearch } from '@/components/blog/blog-search';

import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, User, ArrowRight, Clock, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog BisnisRapi | Edukasi & Tips Digitalisasi Bisnis UMKM',
  description: 'Temukan artikel menarik seputar manajemen bisnis, tips operasional, dan tren digitalisasi untuk membantu UMKM Indonesia naik kelas.',
  openGraph: {
    title: 'Blog BisnisRapi | Edukasi & Tips Digitalisasi Bisnis UMKM',
    description: 'Temukan artikel menarik seputar manajemen bisnis, tips operasional, dan tren digitalisasi untuk membantu UMKM Indonesia naik kelas.',
    url: 'https://bisnisrapi.my.id/blog',
    type: 'website',
  },
  alternates: {
    canonical: 'https://bisnisrapi.my.id/blog',
  },
};

export default function BlogPage() {
  const allPosts = getPostsSummaries();
  const featured = allPosts[0];
  const initialListPosts = allPosts.slice(1, 10);

  // Collect unique categories sorted by frequency
  const categoryCounts = allPosts.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] || 0) + 1;
    return acc;
  }, {});
  const categories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .map(([cat]) => cat);

  return (
    <main className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="container px-4 mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" />
            {allPosts.length} Artikel Tersedia
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Blog BisnisRapi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Edukasi, tips, dan strategi praktis buat rapihin operasional bisnis biar makin kenceng cuannya.
          </p>
        </div>
      </section>

      {/* ── Search & Filter ── */}
      <section className="pb-4 px-4">
        <div className="container mx-auto max-w-5xl">
          <BlogSearch posts={allPosts} categories={categories} />
        </div>
      </section>

      {/* Featured Post */}
      {featured && (
        <section className="pb-12">
          <div className="container px-4 mx-auto">
            <article className="group relative grid md:grid-cols-2 gap-0 bg-background rounded-3xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 shadow-sm">
              <Link href={`/blog/${featured.slug}`} className="block relative aspect-[4/3] md:aspect-auto overflow-hidden min-h-[280px]">
                {featured.image ? (
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    quality={85}
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary/40 font-bold text-2xl">
                    BisnisRapi
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full backdrop-blur-sm">
                    {featured.category}
                  </span>
                  <span className="px-3 py-1 text-xs font-medium bg-black/50 text-white rounded-full backdrop-blur-sm">
                    Terbaru
                  </span>
                </div>
              </Link>

              <div className="p-8 md:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-5">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {new Date(featured.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readingTime} menit baca
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                  <Link href={`/blog/${featured.slug}`}>{featured.title}</Link>
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="w-3.5 h-3.5 text-primary" />
                    </div>
                    {featured.author}
                  </div>
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                  >
                    Baca Selengkapnya
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </section>
      )}

      {/* Posts Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container px-4 mx-auto">
          {initialListPosts.length > 0 ? (
            <>
              <h2 className="text-2xl font-bold mb-8">Artikel Lainnya</h2>
              <BlogList
                initialPosts={initialListPosts}
                initialHasMore={allPosts.length > 10}
                allPosts={allPosts.slice(10)}
              />
            </>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground italic">Belum ada artikel, tunggu ya!</p>
            </div>
          )}
        </div>
      </section>


    </main>
  );
}
