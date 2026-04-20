"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "#masalah", label: "Masalah" },
  { href: "#solusi", label: "Solusi" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#fitur", label: "Fitur" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#mengapa-kami", label: "Mengapa Kami" },
  { href: "#faq", label: "FAQ" },
];

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
} as const;

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    setScrolled(latest > 20);
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.header
      className={`fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-500`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ ...smoothSpring }}
    >
      <div className="w-full max-w-7xl relative">
        <div className={`
          flex items-center justify-between px-3 sm:px-6 py-2.5 sm:py-3
          rounded-full border transition-all duration-500
          ${scrolled
            ? "bg-background/95 backdrop-blur-xl border-border/50 shadow-lg"
            : "bg-background/60 backdrop-blur-md border-border/20 shadow-sm"
          }
        `}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...smoothSpring, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/Logo.png"
                  alt="BisnisRapi Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                <span className="text-foreground">Bisnis</span>
                <span style={{ 
                  background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>Rapi</span>
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothSpring, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all rounded-full"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <motion.div
            className="hidden md:flex items-center gap-3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...smoothSpring, delay: 0.3 }}
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="sm" 
                className="rounded-full px-6 text-white transition-all shadow-md active:scale-95 overflow-hidden relative group"
                style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                asChild
              >
                <Link href="#kontak">
                  <span className="relative z-10 font-bold">Konsultasi Gratis</span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2.5 text-foreground hover:bg-secondary rounded-xl transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden absolute top-[calc(100%+10px)] left-0 right-0 bg-background/95 backdrop-blur-xl rounded-3xl border border-border/50 shadow-xl overflow-hidden"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ ...smoothSpring }}
            >
              <nav className="flex flex-col p-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ ...smoothSpring, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl font-medium text-foreground hover:text-brand-end transition-colors py-4 block border-b border-border/50"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  className="flex flex-col gap-4 pt-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ ...smoothSpring, delay: 0.3 }}
                >
                  <Button variant="outline" size="lg" className="rounded-full h-14 text-base" asChild>
                    <Link href="#portfolio" onClick={() => setIsOpen(false)}>
                      Lihat Portfolio
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    className="rounded-full h-14 text-base text-white font-bold shadow-xl shadow-brand-end/20 border-0" 
                    style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                    asChild
                  >
                    <Link href="#kontak" onClick={() => setIsOpen(false)}>
                      Konsultasi Gratis
                    </Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
