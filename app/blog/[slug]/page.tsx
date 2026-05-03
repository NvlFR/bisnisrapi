import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Image from 'next/image';
import Link from 'next/link';

import { Calendar, User, ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import { Metadata } from 'next';
import { ShareButtons } from '@/components/blog/share-buttons';
import {
  BlockquoteCallout,
  ArticleH2,
  ArticleH3,
  ArticleTable,
  ArticleThead,
  ArticleTbody,
  ArticleTr,
  ArticleTh,
  ArticleTd,
  ArticleCode,
  ArticleUl,
  ArticleLi,
  ArticleOl,
  ArticleP,
  ArticleHr,
  ArticleStrong,
  ArticleImg,
} from '@/components/blog/article-components';

const BASE_URL = 'https://bisnisrapi.my.id';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) return {};

  const ogImage = post.image
    ? `${BASE_URL}${post.image}`
    : `${BASE_URL}/og-image.png`;

  return {
    title: `${post.title} | Blog BisnisRapi`,
    description: post.excerpt,
    alternates: {
      canonical: `${BASE_URL}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      url: `${BASE_URL}/blog/${slug}`,
      siteName: 'BisnisRapi',
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [ogImage],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) notFound();

  const related = getRelatedPosts(post.slug, post.category, 3);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `${BASE_URL}${post.image}` : `${BASE_URL}/og-image.png`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: post.author,
      url: BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'BisnisRapi',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/Logo.webp`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BASE_URL}/blog/${slug}`,
    },
    inLanguage: 'id-ID',
    keywords: post.tags.join(', ') || post.category,
  };

  return (
    <>
      {/* JSON-LD Structured Data — critical for Google */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
                    year: 'numeric',
                  })}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readingTime} menit baca
                </div>
              </div>
            </div>

            {post.image && (
              <div className="relative aspect-[21/9] rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-primary/5">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            )}

            {/* Article meta card */}
            <div className="mb-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                { icon: '📂', label: 'Kategori', value: post.category },
                { icon: '⏱️', label: 'Waktu Baca', value: `${post.readingTime} menit` },
                { icon: '📅', label: 'Diterbitkan', value: new Date(post.date).toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' }) },
                { icon: '✍️', label: 'Penulis', value: post.author },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-border bg-secondary/30 px-4 py-3">
                  <div className="text-lg mb-1">{item.icon}</div>
                  <div className="text-xs text-muted-foreground mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-foreground truncate">{item.value}</div>
                </div>
              ))}
            </div>

            {/* Article Content */}
            <div className="max-w-none mb-16">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => <ArticleH2>{children}</ArticleH2>,
                  h3: ({ children }) => <ArticleH3>{children}</ArticleH3>,
                  blockquote: ({ children }) => <BlockquoteCallout>{children}</BlockquoteCallout>,
                  table: ({ children }) => <ArticleTable>{children}</ArticleTable>,
                  thead: ({ children }) => <ArticleThead>{children}</ArticleThead>,
                  tbody: ({ children }) => <ArticleTbody>{children}</ArticleTbody>,
                  tr: ({ children }) => <ArticleTr>{children}</ArticleTr>,
                  th: ({ children }) => <ArticleTh>{children}</ArticleTh>,
                  td: ({ children }) => <ArticleTd>{children}</ArticleTd>,
                  code: ({ children, className }) => (
                    <ArticleCode className={className}>{children}</ArticleCode>
                  ),
                  ul: ({ children }) => <ArticleUl>{children}</ArticleUl>,
                  li: ({ children }) => <ArticleLi>{children}</ArticleLi>,
                  ol: ({ children }) => <ArticleOl>{children}</ArticleOl>,
                  p: ({ children }) => <ArticleP>{children}</ArticleP>,
                  hr: () => <ArticleHr />,
                  strong: ({ children }) => <ArticleStrong>{children}</ArticleStrong>,
                  // Inline images in content
                  img: ({ src, alt, title }) => (
                    <ArticleImg src={typeof src === 'string' ? src : ''} alt={alt ?? ''} caption={title ?? alt} />
                  ),
                  // H1 inside content (some articles have it)
                  h1: ({ children }) => (
                    <h1 className="mt-0 mb-6 text-3xl font-bold tracking-tight text-foreground">
                      {children}
                    </h1>
                  ),
                  // Links
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      className="font-medium text-brand-end underline underline-offset-2 hover:text-brand-start transition-colors"
                      target={href?.startsWith('http') ? '_blank' : undefined}
                      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {children}
                    </a>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-10">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}

            {/* Share + CTA */}
            <div className="border-t border-border pt-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <ShareButtons title={post.title} />
              <div className="flex items-center gap-4">
                <Link
                  href="/#cta"
                  className="px-6 py-3 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-lg hover:shadow-primary/20 transition-all text-sm whitespace-nowrap"
                >
                  Konsultasi Bisnis Gratis
                </Link>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container px-4 mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-8">Artikel Terkait</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {related.map((relPost) => (
                  <article
                    key={relPost.slug}
                    className="group flex flex-col bg-background rounded-2xl overflow-hidden border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                  >
                    <Link href={`/blog/${relPost.slug}`} className="block relative aspect-[16/10] overflow-hidden">
                      {relPost.image ? (
                        <Image
                          src={relPost.image}
                          alt={relPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center text-primary/30 font-bold">
                          BisnisRapi
                        </div>
                      )}
                    </Link>
                    <div className="p-5 flex flex-col flex-1">
                      <span className="text-xs text-primary font-medium mb-2">{relPost.category}</span>
                      <h3 className="font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors text-sm leading-snug">
                        <Link href={`/blog/${relPost.slug}`}>{relPost.title}</Link>
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 flex-1 mb-4">{relPost.excerpt}</p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {relPost.readingTime} mnt
                        </div>
                        <Link
                          href={`/blog/${relPost.slug}`}
                          className="flex items-center gap-1 text-primary font-semibold group/link"
                        >
                          Baca <ArrowRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}


      </main>
    </>
  );
}
