"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

const navLinks = [
  { href: "#masalah", label: "Masalah" },
  { href: "#solusi", label: "Solusi" },
  { href: "#cara-kerja", label: "Cara Kerja" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#faq", label: "FAQ" },
];

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ ...smoothSpring }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ ...smoothSpring, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/25"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <span className="text-primary-foreground font-bold text-lg">B</span>
              </motion.div>
              <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                BisnisRapi
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...smoothSpring, delay: 0.1 + index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {link.label}
                  <motion.span 
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"
                    layoutId="navIndicator"
                  />
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
              <Button variant="ghost" size="sm" className="rounded-full" asChild>
                <Link href="#portfolio">Portfolio</Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button size="sm" className="rounded-full px-6 shadow-lg shadow-primary/25" asChild>
                <Link href="#kontak">Konsultasi Gratis</Link>
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
              className="md:hidden fixed inset-0 top-20 bg-background/98 backdrop-blur-xl"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ ...smoothSpring }}
            >
              <nav className="flex flex-col p-6 pt-8">
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
                      className="text-2xl font-medium text-foreground hover:text-primary transition-colors py-4 block border-b border-border/50"
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
                  <Button size="lg" className="rounded-full h-14 text-base shadow-lg shadow-primary/25" asChild>
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
