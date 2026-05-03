"use client";

import React from "react";
import {
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  Info,
  TrendingUp,
  BookOpen,
  Zap,
} from "lucide-react";

// ── Callout box untuk blockquote ──────────────────────────────────────────────
export function BlockquoteCallout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="not-prose my-6 flex gap-4 rounded-2xl border border-brand-start/20 bg-brand-start/5 p-5">
      <div className="mt-0.5 shrink-0">
        <Lightbulb className="h-5 w-5 text-brand-start" />
      </div>
      <div className="text-sm leading-relaxed text-foreground/80 [&>p]:m-0">
        {children}
      </div>
    </div>
  );
}

// ── Styled H2 dengan accent bar ───────────────────────────────────────────────
export function ArticleH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="group mt-12 mb-5 flex items-center gap-3 text-2xl font-bold tracking-tight text-foreground first:mt-0">
      <span className="h-7 w-1 shrink-0 rounded-full bg-gradient-to-b from-brand-start to-brand-end" />
      {children}
    </h2>
  );
}

// ── Styled H3 ─────────────────────────────────────────────────────────────────
export function ArticleH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-xl font-bold text-foreground">{children}</h3>
  );
}

// ── Styled table ──────────────────────────────────────────────────────────────
export function ArticleTable({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-2xl border border-border">
      <table className="w-full text-sm">{children}</table>
    </div>
  );
}

export function ArticleThead({ children }: { children: React.ReactNode }) {
  return (
    <thead className="bg-secondary/60 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
      {children}
    </thead>
  );
}

export function ArticleTbody({ children }: { children: React.ReactNode }) {
  return (
    <tbody className="divide-y divide-border bg-background">{children}</tbody>
  );
}

export function ArticleTr({ children }: { children: React.ReactNode }) {
  return <tr className="hover:bg-muted/30 transition-colors">{children}</tr>;
}

export function ArticleTh({ children }: { children: React.ReactNode }) {
  return <th className="px-4 py-3 text-left">{children}</th>;
}

export function ArticleTd({ children }: { children: React.ReactNode }) {
  return (
    <td className="px-4 py-3 text-muted-foreground leading-relaxed">
      {children}
    </td>
  );
}

// ── Styled code block ─────────────────────────────────────────────────────────
export function ArticleCode({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isBlock = className?.includes("language-");
  if (isBlock) {
    return (
      <div className="not-prose my-6 overflow-x-auto rounded-2xl bg-secondary/80 border border-border">
        <pre className="p-5 text-sm leading-relaxed text-foreground/90">
          <code>{children}</code>
        </pre>
      </div>
    );
  }
  return (
    <code className="rounded-md bg-secondary px-1.5 py-0.5 text-sm font-mono text-brand-end">
      {children}
    </code>
  );
}

// ── List context (ul vs ol) ───────────────────────────────────────────────────
const ListContext = React.createContext<{ type: 'ul' | 'ol' | null }>({ type: null });

// ── Styled unordered list ─────────────────────────────────────────────────────
export function ArticleUl({ children }: { children: React.ReactNode }) {
  return (
    <ListContext.Provider value={{ type: 'ul' }}>
      <ul className="my-4 space-y-2 pl-0 list-none">{children}</ul>
    </ListContext.Provider>
  );
}

// ── Styled ordered list ───────────────────────────────────────────────────────
// Uses native list-decimal so browser handles numbering — no double <li> issue
export function ArticleOl({ children }: { children: React.ReactNode }) {
  return (
    <ListContext.Provider value={{ type: 'ol' }}>
      <ol className="not-prose my-4 space-y-2.5 pl-8 list-decimal marker:text-brand-start marker:font-bold marker:text-sm">
        {children}
      </ol>
    </ListContext.Provider>
  );
}

// ── Styled list item (works for both ul and ol) ───────────────────────────────
export function ArticleLi({ children }: { children: React.ReactNode }) {
  const { type: listType } = React.useContext(ListContext);

  if (listType === 'ol') {
    return (
      <li className="text-muted-foreground leading-relaxed pl-1">
        {children}
      </li>
    );
  }

  return (
    <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-brand-start" />
      <div className="flex-1">{children}</div>
    </li>
  );
}

// ── Styled paragraph ──────────────────────────────────────────────────────────
export function ArticleP({ children }: { children: React.ReactNode }) {
  const { type: listType } = React.useContext(ListContext);
  const childrenArray = React.Children.toArray(children);

  // 1. Check if children contain block-level elements like ArticleImg (which renders a figure)
  // This prevents the "figure cannot be a descendant of p" hydration error
  const hasBlockElement = childrenArray.some((child) => {
    if (!React.isValidElement(child)) return false;
    
    const isBlock = (el: React.ReactElement): boolean => {
      const type = el.type;
      if (type === ArticleImg || type === "img") return true;
      if (typeof type === "function" && type.name === "ArticleImg") return true;
      
      if (el.props && (el.props as { children?: React.ReactNode }).children) {
        return React.Children.toArray((el.props as { children?: React.ReactNode }).children).some(nested => 
          React.isValidElement(nested) && isBlock(nested as React.ReactElement)
        );
      }
      return false;
    };

    return isBlock(child);
  });

  // Paragraphs inside lists should have minimal vertical margins to align with bullets/numbers
  const marginClass = listType ? "my-0 mb-2 last:mb-0" : "my-4";

  if (hasBlockElement) {
    return <div className={marginClass}>{children}</div>;
  }

  // 2. Detect "tip" paragraphs that start with emoji indicators
  const firstChild = childrenArray[0];
  const firstChildText = typeof firstChild === "string" ? firstChild : "";

  const isTip =
    firstChildText.startsWith("💡") ||
    firstChildText.startsWith("✅") ||
    firstChildText.startsWith("⚠️") ||
    firstChildText.startsWith("📌");

  if (isTip) {
    return (
      <div className={`not-prose ${marginClass} flex gap-3 rounded-xl border border-brand-start/20 bg-brand-start/5 px-4 py-3 text-sm leading-relaxed text-foreground/80`}>
        <span className="shrink-0 text-base">{firstChildText.slice(0, 2)}</span>
        <span>
          {firstChildText.slice(2).trim()}
          {childrenArray.slice(1)}
        </span>
      </div>
    );
  }

  return (
    <p className={`${marginClass} leading-relaxed text-muted-foreground`}>{children}</p>
  );
}

// ── Styled horizontal rule ────────────────────────────────────────────────────
export function ArticleHr() {
  return (
    <div className="not-prose my-10 flex items-center gap-4">
      <div className="h-px flex-1 bg-border" />
      <div className="flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-brand-start/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-end/40" />
        <span className="h-1.5 w-1.5 rounded-full bg-brand-start/40" />
      </div>
      <div className="h-px flex-1 bg-border" />
    </div>
  );
}

// ── Strong / bold ─────────────────────────────────────────────────────────────
export function ArticleStrong({ children }: { children: React.ReactNode }) {
  return (
    <strong className="font-semibold text-foreground">{children}</strong>
  );
}

// ── Key Takeaway box (rendered from a special blockquote pattern) ─────────────
export function KeyTakeaway({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-8 rounded-2xl border border-brand-end/20 bg-gradient-to-br from-brand-start/5 to-brand-end/5 p-6">
      <div className="mb-3 flex items-center gap-2">
        <Zap className="h-4 w-4 text-brand-end" />
        <span className="text-xs font-bold uppercase tracking-wider text-brand-end">
          Poin Penting
        </span>
      </div>
      <div className="text-sm leading-relaxed text-foreground/80">{children}</div>
    </div>
  );
}

// ── Article Image component ───────────────────────────────────────────────────
// Uses span (inline-block) instead of figure/div to avoid
// "figure cannot be descendant of p" hydration error when ReactMarkdown
// wraps images inside <p> tags.
export function ArticleImg({
  src,
  alt,
  caption,
}: {
  src: string;
  alt?: string;
  caption?: string;
}) {
  return (
    <figure className="not-prose my-10 space-y-3">
      <div className="overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-md">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt ?? caption ?? ""}
          className="w-full h-auto object-cover transition-transform duration-500 hover:scale-[1.02]"
          loading="lazy"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-xs italic text-muted-foreground leading-relaxed px-4">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
