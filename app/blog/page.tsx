import { getAllPosts } from '@/lib/blog';
import { Navbar } from '@/components/landing/navbar';
import { Footer } from '@/components/landing/footer';
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Calendar, User, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog BisnisRapi | Edukasi & Tips Digitalisasi Bisnis UMKM',
  description: 'Temukan artikel menarik seputar manajemen bisnis, tips operasional, dan tren digitalisasi untuk membantu UMKM Indonesia naik kelas.',
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        </div>

        <div className="container px-4 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Blog BisnisRapi
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
            Edukasi, tips, dan strategi praktis buat rapihin operasional bisnis lu biar makin kenceng cuannya.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
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
                        {new Date(post.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {post.author}
                      </div>
                    </div>

                    <h2 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                      {post.excerpt}
                    </p>

                    <Link 
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-muted-foreground italic">Belum ada artikel nih, Boss. Tungguin ya!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
