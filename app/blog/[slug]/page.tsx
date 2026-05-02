import { getPostBySlug, getAllPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';
import { Footer } from '@/components/landing/footer';
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, LinkIcon } from 'lucide-react';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  
  if (!post) return {};

  return {
    title: `${post.title} | Blog BisnisRapi`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.image ? [{ url: post.image }] : [],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Post Header */}
      <article className="pt-32 pb-20">
        <div className="container px-4 mx-auto max-w-4xl">
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Kembali ke Blog
          </Link>

          <div className="mb-10">
            <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <User className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium text-foreground">{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </div>
            </div>
          </div>

          {post.image && (
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-primary/5">
              <Image 
                src={post.image} 
                alt={post.title}
                fill
                priority
                className="object-cover"
              />
            </div>
          )}

          {/* Content */}
          <div className="prose prose-lg dark:prose-invert max-w-none 
            prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-muted-foreground prose-p:leading-relaxed
            prose-a:text-primary prose-a:no-underline hover:prose-a:underline
            prose-strong:text-foreground
            prose-img:rounded-3xl prose-img:shadow-xl
            mb-20"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Share Section */}
          <div className="border-t border-border pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold">Bagikan:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Facebook className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <Twitter className="w-4 h-4" />
                </button>
                <button className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all">
                  <LinkIcon className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4">
               <Link 
                href="/#cta"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-sm"
               >
                Konsultasi Bisnis Gratis
               </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
