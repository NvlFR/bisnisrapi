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

// ── Styled unordered list ─────────────────────────────────────────────────────
export function ArticleUl({ children }: { children: React.ReactNode }) {
  return (
    <ul className="my-4 space-y-2 pl-0 list-none">{children}</ul>
  );
}

export function ArticleLi({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-muted-foreground leading-relaxed">
      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-start" />
      <span>{children}</span>
    </li>
  );
}

// ── Styled ordered list ───────────────────────────────────────────────────────
export function ArticleOl({ children }: { children: React.ReactNode }) {
  const items = React.Children.toArray(children);
  return (
    <ol className="not-prose my-4 space-y-3 pl-0 list-none">
      {items.map((child, i) => (
        <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
          <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-start/15 text-xs font-bold text-brand-start">
            {i + 1}
          </span>
          <span className="pt-0.5">{child}</span>
        </li>
      ))}
    </ol>
  );
}

// ── Styled paragraph ──────────────────────────────────────────────────────────
export function ArticleP({ children }: { children: React.ReactNode }) {
  // Detect "tip" paragraphs that start with emoji indicators
  const text = typeof children === "string" ? children : "";
  const isTip =
    text.startsWith("💡") ||
    text.startsWith("✅") ||
    text.startsWith("⚠️") ||
    text.startsWith("📌");

  if (isTip) {
    return (
      <div className="not-prose my-4 flex gap-3 rounded-xl border border-brand-start/20 bg-brand-start/5 px-4 py-3 text-sm leading-relaxed text-foreground/80">
        <span className="shrink-0 text-base">{text.slice(0, 2)}</span>
        <span>{text.slice(2).trim()}</span>
      </div>
    );
  }

  return (
    <p className="my-4 leading-relaxed text-muted-foreground">{children}</p>
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
