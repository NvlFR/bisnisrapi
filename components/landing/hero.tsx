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
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28"
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

          {/* Right - Premium iPhone Mockup */}
          <motion.div 
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
          >
            {/* Glow effect background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 rounded-full blur-[120px] -z-10" />
            
            <motion.div 
              className="relative w-full max-w-[450px] aspect-[1/1]"
              whileHover={{ y: -10, scale: 1.02 }}
              transition={smoothSpring}
            >
              <Image
                src="/hero_iphone_mockup_bisnisrapi.png"
                alt="Premium Business App Interface"
                width={800}
                height={800}
                className="w-full h-auto drop-shadow-2xl"
                priority
              />
              
              {/* Floating element 1 */}
              <motion.div 
                className="absolute -left-10 top-1/4 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white shadow-2xl z-20 will-change-transform"
        animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center border border-green-500/20">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">System Active</p>
                    <p className="text-[10px] text-muted-foreground">Monitoring operations...</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating element 2 */}
              <motion.div 
                className="absolute -right-5 bottom-1/4 p-4 rounded-2xl bg-foreground text-background shadow-2xl z-20 border border-white/10 will-change-transform"
        animate={{ y: [0, 15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Avg Response</p>
                <p className="text-xl font-bold">0.4<span className="text-accent">s</span></p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
