"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Linkedin, Mail, Phone, Twitter, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const footerLinks = {
  navigasi: [
    { label: "Beranda", href: "#" },
    { label: "Masalah", href: "#masalah" },
    { label: "Solusi", href: "#solusi" },
    { label: "Cara Kerja", href: "#cara-kerja" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "FAQ", href: "#faq" },
  ],
  layanan: [
    { label: "Sistem Custom", href: "#solusi" },
    { label: "Dashboard Bisnis", href: "#solusi" },
    { label: "Automasi Proses", href: "#solusi" },
    { label: "Integrasi Data", href: "#solusi" },
  ],
  kontak: [
    { label: "hello@bisnisrapi.com", href: "mailto:hello@bisnisrapi.com", icon: Mail },
    { label: "+62 812 3456 7890", href: "tel:+6281234567890", icon: Phone },
    { label: "Jakarta, Indonesia", href: "#", icon: MapPin },
  ],
  sosial: [
    { label: "Instagram", href: "https://instagram.com/bisnisrapi", icon: Instagram },
    { label: "LinkedIn", href: "https://linkedin.com/company/bisnisrapi", icon: Linkedin },
    { label: "Twitter", href: "https://twitter.com/bisnisrapi", icon: Twitter },
  ],
};

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-8 border-t border-border overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-start/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter/CTA Banner */}
        <motion.div 
          className="mb-16 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Siap untuk memulai?
              </h3>
              <p className="text-muted-foreground">
                Hubungi kami sekarang untuk konsultasi gratis tanpa komitmen.
              </p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                size="lg" 
                className="rounded-full px-10 h-14 text-white font-bold shadow-xl shadow-brand-end/25 transition-all border-0" 
                style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                asChild
              >
                <Link href="#kontak">
                  Konsultasi Gratis
                  <ArrowUpRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring, delay: 0.2 }}
        >
          {/* Brand */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.1 }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div 
                className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg shadow-brand-start/20 border border-brand-start/20"
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Image
                  src="/Logo.png"
                  alt="BisnisRapi Logo"
                  fill
                  className="object-contain p-1.5"
                />
              </motion.div>
              <span 
                className="text-2xl font-bold transition-opacity"
                style={{ 
                  background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                BisnisRapi
              </span>
            </Link>
            <p className="mt-6 text-muted-foreground max-w-sm leading-relaxed">
              Membuat bisnis Anda berjalan lebih rapi, bukan sekadar online. Sistem yang
              dibuat untuk efisiensi dan pertumbuhan berkelanjutan.
            </p>

            {/* Social Links */}
            <div className="mt-8 flex gap-3">
              {footerLinks.sosial.map((link) => (
                <motion.div
                  key={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center text-muted-foreground hover:text-brand-end hover:bg-brand-start/10 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <h3 className="font-semibold text-foreground mb-6">Navigasi</h3>
            <ul className="space-y-4">
              {footerLinks.navigasi.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.3 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-brand-end transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.3 }}
          >
            <h3 className="font-semibold text-foreground mb-6">Layanan</h3>
            <ul className="space-y-4">
              {footerLinks.layanan.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.4 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-brand-end transition-colors inline-flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...smoothSpring, delay: 0.4 }}
          >
            <h3 className="font-semibold text-foreground mb-6">Kontak</h3>
            <ul className="space-y-4">
              {footerLinks.kontak.map((link, index) => (
                <motion.li 
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.5 + index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-3 text-muted-foreground hover:text-brand-end transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-brand-start/10 transition-colors">
                      <link.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{link.label}</span>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div 
          className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring, delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} BisnisRapi. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-brand-end transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-brand-end transition-colors"
            >
              Terms of Service
            </Link>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-brand-end hover:bg-brand-start/10 transition-all"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll to top"
            >
              <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
