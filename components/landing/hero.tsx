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
};

const smoothSpring = {
  type: "spring",
  stiffness: 50,
  damping: 20,
};

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
      
      {/* Animated background blobs */}
      <motion.div 
        className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]"
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
        className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-violet-500/5 rounded-full blur-[80px]"
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
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8"
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-primary"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Sistem Bisnis Digital
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight leading-[1.1] text-balance"
            >
              Bisnis Lebih{" "}
              <span className="text-primary">Rapi</span>, Operasional Lebih{" "}
              <span className="text-primary">Efisien</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.3 }}
              className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed text-pretty"
            >
              Kami membantu Anda memiliki sistem bisnis digital yang membuat pekerjaan lebih efisien dan scalable. Fokus pada hasil, bukan kerumitan teknis.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="w-full sm:w-auto gap-2 rounded-full px-8 h-14 text-base shadow-lg shadow-primary/25" asChild>
                  <Link href="#kontak">
                    Mulai Konsultasi Gratis
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full px-8 h-14 text-base"
                  asChild
                >
                  <Link href="#portfolio">
                    <Play size={16} className="fill-current" />
                    Lihat Portfolio
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springTransition, delay: 0.5 }}
              className="mt-16 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8"
            >
              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ y: -2 }}
                transition={smoothSpring}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <motion.div 
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                  >
                    50+
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Bisnis Terbantu</div>
                </div>
              </motion.div>

              <div className="hidden sm:block w-px h-12 bg-border" />

              <motion.div 
                className="flex items-center gap-4"
                whileHover={{ y: -2 }}
                transition={smoothSpring}
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary fill-primary" />
                </div>
                <div className="text-left">
                  <motion.div 
                    className="text-3xl font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9 }}
                  >
                    4.9
                  </motion.div>
                  <div className="text-sm text-muted-foreground">Rating Kepuasan</div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right - Dashboard Preview Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ ...springTransition, delay: 0.4 }}
          >
            {/* Main Dashboard Card */}
            <motion.div 
              className="relative rounded-3xl bg-card border border-border shadow-2xl shadow-primary/10 overflow-hidden"
              whileHover={{ y: -8, rotateY: 2 }}
              transition={smoothSpring}
            >
              <div className="p-3 bg-secondary/50 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <span className="ml-4 text-xs text-muted-foreground">dashboard.bisnisrapi.com</span>
                </div>
              </div>
              
              {/* Dashboard Image Placeholder */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-secondary/50 to-secondary">
                <Image
                  src="https://placehold.co/800x600/e2e8f0/64748b?text=Dashboard+Preview"
                  alt="Dashboard BisnisRapi - Tampilan utama sistem manajemen bisnis"
                  fill
                  className="object-cover"
                  priority
                />
                
                {/* Overlay Stats */}
                <motion.div 
                  className="absolute top-4 left-4 p-4 rounded-2xl bg-card/95 backdrop-blur-sm border border-border shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8, ...springTransition }}
                >
                  <p className="text-xs text-muted-foreground mb-1">Pendapatan Bulan Ini</p>
                  <p className="text-2xl font-bold text-foreground">Rp 125.8jt</p>
                  <span className="text-xs text-green-600 font-medium">+23% dari bulan lalu</span>
                </motion.div>

                <motion.div 
                  className="absolute bottom-4 right-4 p-3 rounded-xl bg-card/95 backdrop-blur-sm border border-border shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, ...springTransition }}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center">
                          <span className="text-xs text-primary font-medium">{i}</span>
                        </div>
                      ))}
                    </div>
                    <p className="text-xs text-muted-foreground">+47 pengguna aktif</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating Cards */}
            <motion.div 
              className="absolute -left-8 top-1/4 p-4 rounded-2xl bg-card border border-border shadow-xl"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, ...springTransition }}
              whileHover={{ scale: 1.05, rotate: -2 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-green-600 text-lg">+</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Order Baru</p>
                  <p className="text-xs text-muted-foreground">12 pesanan hari ini</p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="absolute -right-4 bottom-1/4 p-4 rounded-2xl bg-card border border-border shadow-xl"
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.4, ...springTransition }}
              whileHover={{ scale: 1.05, rotate: 2 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <span className="text-primary text-lg font-bold">!</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Stok Rendah</p>
                  <p className="text-xs text-muted-foreground">3 produk perlu restock</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
