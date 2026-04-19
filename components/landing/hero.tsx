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
            src="/hero_collaboration.png"
            alt="Business team collaborating"
            fill
            className="object-cover"
            style={{
              maskImage: "linear-gradient(to right, transparent, black 40%), linear-gradient(to top, transparent, black 15%)",
              WebkitMaskImage: "linear-gradient(to right, transparent, black 40%), linear-gradient(to top, transparent, black 15%)",
              maskComposite: "intersect",
              WebkitMaskComposite: "source-in",
            }}
            priority
          />
        </motion.div>
      </div>

      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px] will-change-transform"
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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full"
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
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-8"
            >
              <div className="flex items-center justify-center w-5 h-5 rounded-full bg-accent text-white">
                <Star size={10} fill="currentColor" />
              </div>
              <span className="text-xs font-bold text-accent uppercase tracking-wider">
                Digital Business Systems
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1] text-balance mb-6"
            >
              Bisnis <span className="text-accent underline decoration-accent/30 underline-offset-8">Rapi</span>,<br />
              Operasional <span className="text-accent">Efisien</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="mt-6 text-xl text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              Kami mentransformasi bisnis Anda dengan sistem digital yang scalable. Fokus pada pertumbuhan, serahkan teknisnya kepada kami.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-10 h-16 text-lg bg-foreground text-background hover:bg-accent hover:text-white transition-all shadow-xl shadow-foreground/5" asChild>
                  <Link href="#kontak">
                    Free Consultation
                    <ArrowRight size={20} />
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full px-10 h-16 text-lg border-2 hover:bg-secondary/50"
                  asChild
                >
                  <Link href="#portfolio">
                    View Projects
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.5 }}
              className="mt-16 pt-8 border-t border-border/50 flex flex-wrap items-center justify-center lg:justify-start gap-12"
            >
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground">50+</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1">Clients</div>
              </div>
              <div className="text-left">
                <div className="text-4xl font-bold text-foreground">98%</div>
                <div className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mt-1">Happiness</div>
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
