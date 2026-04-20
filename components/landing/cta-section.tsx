"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Konsultasi pertama gratis",
  "Tanpa komitmen awal",
  "Proses cepat & transparan",
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function CTASection() {
  return (
    <section id="kontak" className="relative pt-24 lg:pt-40 pb-32 lg:pb-56 bg-background overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Gradients */}
        <div className="absolute top-0 left-1/4 w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,#59f6e308,transparent_70%)]" />
        <div className="absolute bottom-0 right-1/4 w-[100%] h-[100%] bg-[radial-gradient(circle_at_center,#185cf808,transparent_70%)]" />

        {/* Large Parallax Blobs */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 80, 0],
            scale: [1, 1.1, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -right-[5%] w-[60%] h-[60%] bg-brand-start/10 rounded-full blur-[140px]"
        />
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-brand-end/10 rounded-full blur-[140px]"
        />

        {/* Moving Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brand-end/20 blur-[1px]"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 2
            }}
            animate={{
              y: [null, "-200px"],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
          {/* Left - Visual Content */}
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ ...smoothSpring, duration: 1 }}
          >
            <div className="relative group perspective-1000">
              {/* Card Container with subtle tilt animation */}
              <motion.div
                className="relative rounded-[3.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(24,92,248,0.25)] border border-white/20 dark:border-white/5 bg-card"
                whileHover={{
                  rotateY: -5,
                  rotateX: 5,
                  scale: 1.02,
                  transition: { duration: 0.4 }
                }}
              >
                <div className="aspect-[4/5] relative">
                  <Image
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
                    alt="Sesi Konsultasi Strategis Bisnis Rapi"
                    fill
                    className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000 ease-out scale-110 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent mix-blend-multiply" />
                  <div className="absolute inset-0 bg-brand-end/10 group-hover:opacity-0 transition-opacity duration-1000" />
                </div>
              </motion.div>

              {/* Floating elements inside/over image */}
              <motion.div
                className="absolute -right-10 top-20 p-6 sm:p-8 rounded-[2.5rem] bg-white/80 dark:bg-card/80 backdrop-blur-2xl shadow-2xl border border-white/20 z-20 hidden sm:block"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-start flex items-center justify-center text-white shadow-lg">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest leading-none mb-1">Hasil Nyata</p>
                    <p className="text-xl font-black text-foreground">Terbukti Efisien</p>
                  </div>
                </div>
              </motion.div>

              {/* Stats Badge */}
              <motion.div
                className="absolute -left-10 -bottom-10 p-10 rounded-[3rem] bg-gradient-to-br from-brand-start to-brand-end text-white shadow-2xl z-20 group-hover:scale-110 transition-transform duration-500"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ delay: 0.4, ...smoothSpring }}
              >
                <div className="relative">
                  <motion.p
                    className="text-6xl font-black tracking-tighter mb-1"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >50+</motion.p>
                  <p className="text-[12px] font-black uppercase tracking-[0.3em] opacity-80 whitespace-nowrap">Partner Bisnis</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content Strategy */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-brand-start/10 border border-brand-start/20 mb-10 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-start opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-start"></span>
                  </span>
                  <span className="text-xs font-black text-brand-end tracking-[0.2em] uppercase">Konsultasi Prioritas</span>
                </div>
              </motion.div>

              <motion.h2
                className="text-5xl sm:text-6xl lg:text-8xl font-black text-foreground leading-[0.95] tracking-tight mb-10 text-balance"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                Siap Mengelola Bisnis dengan Cara <span className="relative inline-block mt-2">
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">Cerdas?</span>
                  <motion.div
                    className="absolute -bottom-2 left-0 w-full h-2 bg-brand-start/20 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, delay: 1 }}
                  />
                </span>
              </motion.h2>

              <motion.p
                className="text-xl sm:text-2xl text-muted-foreground leading-relaxed mb-12 max-w-xl font-medium"
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
              >
                Hubungi kami untuk diskusi awal. Kami akan membantu menganalisis kebutuhan bisnis Anda dan memberikan solusi terbaik.
              </motion.p>

              {/* Interactive Features List */}
              <motion.div
                className="space-y-4 mb-16"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
              >
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center gap-5 p-5 rounded-3xl bg-secondary/20 hover:bg-white dark:hover:bg-card border border-border/30 hover:border-brand-start/20 hover:shadow-xl hover:shadow-brand-start/5 transition-all duration-300 group/item"
                    variants={{ hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-white dark:bg-card flex items-center justify-center text-brand-start shadow-sm group-hover/item:bg-brand-start group-hover/item:text-white transition-colors duration-300">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-foreground font-bold text-lg tracking-tight">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>

              {/* Main Actions */}
              <motion.div
                className="flex flex-col sm:flex-row gap-6"
                variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
              >
                <motion.div
                  className="relative group/btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="absolute inset-0 bg-brand-end blur-2xl opacity-20 group-hover/btn:opacity-40 transition-opacity" />
                  <Button
                    size="lg"
                    className="w-full sm:w-auto gap-4 rounded-full px-16 h-24 text-xl font-black shadow-2xl shadow-brand-end/30 text-white border-0 overflow-hidden relative"
                    style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                    asChild
                  >
                    <Link
                      href="https://wa.me/6285199256640"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle size={32} className="fill-white/10 group-hover/btn:scale-110 transition-transform duration-300" />
                      <span>Diskusi di WhatsApp</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                    </Link>
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto gap-4 rounded-full px-12 h-24 text-xl font-bold border-2 border-border/50 hover:border-brand-end/50 hover:bg-secondary/40 backdrop-blur-sm"
                    asChild
                  >
                    <Link href="mailto:hello@bisnisrapi.com">
                      Kirim Email
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
