"use client";

import { useState, useEffect } from "react";
import { Facebook, Twitter, LinkIcon, Instagram, Bot, Sparkles, Brain, Rocket } from "lucide-react";
import Link from "next/link";

interface ShareButtonsProps {
  title: string;
}

export function ShareButtons({ title }: ShareButtonsProps) {
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  // AI Prompts
  const aiPrompt = encodeURIComponent(`Tolong rangkum artikel ini dan berikan insight menarik untuk bisnis saya: ${url}`);

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-blue-600 hover:text-white hover:border-blue-600",
    },
    {
      name: "Twitter / X",
      icon: Twitter,
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      color: "hover:bg-sky-500 hover:text-white hover:border-sky-500",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: `https://www.instagram.com/`, // Instagram doesn't have a direct share intent link
      color: "hover:bg-pink-600 hover:text-white hover:border-pink-600",
      onClick: handleCopy, // Since no direct share, we copy link and open IG
    },
    {
      name: "ChatGPT",
      icon: Bot,
      href: `https://chatgpt.com/?q=${aiPrompt}`,
      color: "hover:bg-[#10a37f] hover:text-white hover:border-[#10a37f]",
    },
    {
      name: "Gemini",
      icon: Sparkles,
      href: `https://gemini.google.com/app`, // Gemini doesn't fully support query param passing yet but we link to it
      color: "hover:bg-[#8e24aa] hover:text-white hover:border-[#8e24aa]",
      onClick: handleCopy, // Copy link to clipboard
    },
    {
      name: "Claude",
      icon: Brain,
      href: `https://claude.ai/new`,
      color: "hover:bg-[#d97757] hover:text-white hover:border-[#d97757]",
      onClick: handleCopy,
    },
    {
      name: "Grok",
      icon: Rocket,
      href: `https://x.com/i/grok`,
      color: "hover:bg-zinc-800 hover:text-white hover:border-zinc-800 dark:hover:bg-zinc-200 dark:hover:text-black dark:hover:border-zinc-200",
      onClick: handleCopy,
    },
  ];

  return (
    <div className="flex items-center gap-4 flex-wrap">
      <span className="text-sm font-semibold whitespace-nowrap">Bagikan:</span>
      <div className="flex gap-2 flex-wrap">
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={link.onClick ? (e) => {
              // If it's a platform that doesn't support direct text insertion via URL (like IG, Gemini, Claude),
              // we copy to clipboard first to make it easier for the user to paste.
              link.onClick();
            } : undefined}
            className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all group relative ${link.color}`}
            title={`Bagikan ke ${link.name}`}
          >
            <link.icon className="w-4 h-4" />
            
            {/* Tooltip */}
            <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
              {link.name}
            </span>
          </a>
        ))}
        
        <button 
          onClick={handleCopy}
          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all relative group"
          title="Salin Link"
        >
          <LinkIcon className="w-4 h-4" />
          <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-foreground text-background text-xs px-2 py-1 rounded whitespace-nowrap">
            {copied ? "Tersalin!" : "Salin Link"}
          </span>
        </button>
      </div>
    </div>
  );
}
