"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Star, Play } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const springTransition = {
  type: "spring",
  stiffness: 100,
  damping: 15,
  mass: 1,
} as const;

const smoothSpring = {
  type: "spring",
  stiffness: 50,
  damping: 20,
} as const;

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

      {/* Right - Collaboration Image (True Full Screen Split) */}
      <div className="hidden lg:block absolute top-0 right-0 w-1/2 h-full overflow-hidden pointer-events-none">
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            src="/hero.png"
            alt="Business team collaborating"
            fill
            className="object-cover"
            style={{
              maskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to left, black 60%, transparent 100%)',
            }}
            priority
          />
        </motion.div>
      </div>

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-start/10 rounded-full blur-[100px] will-change-transform"
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[80px] will-change-transform"
        animate={{
          x: [0, -20, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      <motion.div
        className="relative z-10 max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16 py-20 lg:py-28 w-full"
        style={{ y, opacity }}
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ ...springTransition, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-start/10 border border-brand-start/20 mb-8"
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-start text-white">
                <Star size={10} fill="currentColor" />
              </div>
              <span className="text-xs font-bold text-[#185cf8] uppercase tracking-wider">
                Manajemen Bisnis Digital
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6 max-w-2xl"
            >
              Data Berantakan, Order <span style={{
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Keteteran?</span>
              <br />
              Saatnya punya <span style={{
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Manajemen Sistem yang Rapi</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="mt-6 text-xl text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Kami membantu digitalisasi bisnis Anda mulai dari sistem manajemen internal yang rapi, pembuatan website profesional, hingga sistem e-commerce mandiri. Fokuslah membesarkan bisnis, biar kami yang urus teknisnya.
            </motion.p>


            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full px-10 h-16 text-lg text-white transition-all shadow-xl shadow-brand-end/20 font-bold"
                  style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                  asChild
                >
                  <Link href="#kontak">
                    Konsultasi Gratis Sekarang
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full px-10 h-16 text-lg border-2 hover:bg-secondary/50 font-bold"
                  asChild
                >
                  <Link href="#portfolio">
                    Lihat Portfolio
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.5 }}
              className="mt-16 pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-12"
            >
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1">Klien</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground">98%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1">Kepuasan</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground">24/7</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1">Support</div>
              </div>
            </motion.div>
          </div>

          {/* Spacer for Desktop (the absolute image fills this space) */}
          <div className="hidden lg:block h-[500px]" />

          {/* Mobile Image - Keep it below text on mobile */}
          <div className="lg:hidden mt-12 w-full">
            <Image
              src="/hero_collaboration.png"
              alt="Business team collaborating"
              width={800}
              height={500}
              className="rounded-2xl shadow-xl object-cover w-full h-[300px]"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
