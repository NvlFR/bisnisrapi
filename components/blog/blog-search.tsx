"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, X, Calendar, Clock, ArrowRight, Filter } from "lucide-react";
import { BlogPostSummary } from "@/lib/blog";

interface BlogSearchProps {
  posts: BlogPostSummary[];
  categories: string[];
}

export function BlogSearch({ posts, categories }: BlogSearchProps) {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const inputRef = useRef<HTMLInputElement>(null);

  // Keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        setQuery("");
        inputRef.current?.blur();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    return posts.filter((p) => {
      const matchCat =
        activeCategory === "Semua" || p.category === activeCategory;
      if (!q) return matchCat;
      return (
        matchCat &&
        (p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)))
      );
    });
  }, [query, activeCategory, posts]);

  const isSearching = query.trim().length > 0 || activeCategory !== "Semua";

  return (
    <div className="w-full">
      {/* ── Search bar ── */}
      <div className="relative max-w-2xl mx-auto mb-8">
        <div className="relative flex items-center">
          <Search className="absolute left-4 w-5 h-5 text-muted-foreground pointer-events-none" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari artikel, topik, atau kategori..."
            className="w-full pl-12 pr-12 py-4 rounded-2xl border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-brand-start/40 focus:border-brand-start/50 transition-all text-base shadow-sm"
          />
          {query ? (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 p-1 rounded-full hover:bg-secondary transition-colors"
              aria-label="Hapus pencarian"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          ) : (
            <kbd className="absolute right-4 hidden sm:flex items-center gap-1 px-2 py-1 rounded-md bg-secondary border border-border text-xs text-muted-foreground font-mono">
              ⌘K
            </kbd>
          )}
        </div>
      </div>

      {/* ── Category filter pills ── */}
      <div className="flex items-center gap-2 flex-wrap mb-8">
        <Filter className="w-4 h-4 text-muted-foreground shrink-0" />
        {["Semua", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all border ${
              activeCategory === cat
                ? "bg-foreground text-background border-foreground shadow-sm"
                : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ── Results count when searching ── */}
      {isSearching && (
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {filtered.length === 0 ? (
              "Tidak ada artikel yang cocok"
            ) : (
              <>
                Menampilkan{" "}
                <span className="font-semibold text-foreground">
                  {filtered.length}
                </span>{" "}
                artikel
                {query && (
                  <>
                    {" "}
                    untuk{" "}
                    <span className="font-semibold text-foreground">
                      &ldquo;{query}&rdquo;
                    </span>
                  </>
                )}
              </>
            )}
          </p>
          {isSearching && (
            <button
              onClick={() => {
                setQuery("");
                setActiveCategory("Semua");
              }}
              className="text-xs text-muted-foreground hover:text-foreground underline underline-offset-2 transition-colors"
            >
              Reset filter
            </button>
          )}
        </div>
      )}

      {/* ── Empty state ── */}
      {isSearching && filtered.length === 0 && (
        <div className="py-20 text-center">
          <div className="text-5xl mb-4">🔍</div>
          <h3 className="text-lg font-semibold mb-2">Artikel tidak ditemukan</h3>
          <p className="text-muted-foreground text-sm max-w-sm mx-auto">
            Coba kata kunci lain atau pilih kategori yang berbeda.
          </p>
        </div>
      )}

      {/* ── Search results grid ── */}
      {isSearching && filtered.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <SearchResultCard key={post.slug} post={post} query={query} />
          ))}
        </div>
      )}
    </div>
  );
}

// ── Individual search result card ─────────────────────────────────────────────
function SearchResultCard({
  post,
  query,
}: {
  post: BlogPostSummary;
  query: string;
}) {
  return (
    <article className="group flex flex-col bg-background rounded-2xl overflow-hidden border border-border hover:border-brand-start/40 hover:shadow-lg hover:shadow-brand-start/5 transition-all duration-300">
      <Link
        href={`/blog/${post.slug}`}
        className="block relative aspect-[16/10] overflow-hidden"
      >
        {post.image ? (
          <Image
            src={post.image}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-brand-start/20 to-brand-end/20 flex items-center justify-center text-brand-start/40 font-bold text-lg">
            BisnisRapi
          </div>
        )}
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 text-xs font-semibold bg-foreground/80 text-background rounded-full backdrop-blur-sm">
            {post.category}
          </span>
        </div>
      </Link>

      <div className="flex-1 p-5 flex flex-col">
        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {new Date(post.date).toLocaleDateString("id-ID", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {post.readingTime} mnt
          </span>
        </div>

        <h3 className="font-bold text-base mb-2 line-clamp-2 group-hover:text-brand-end transition-colors leading-snug">
          <Link href={`/blog/${post.slug}`}>
            <Highlight text={post.title} query={query} />
          </Link>
        </h3>

        <p className="text-muted-foreground text-sm line-clamp-2 flex-1 mb-4">
          <Highlight text={post.excerpt} query={query} />
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-end group/link mt-auto"
        >
          Baca
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}

// ── Highlight matching text ───────────────────────────────────────────────────
function Highlight({ text, query }: { text: string; query: string }) {
  if (!query.trim()) return <>{text}</>;

  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi");
  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark
            key={i}
            className="bg-brand-start/20 text-foreground rounded px-0.5 not-italic"
          >
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}
