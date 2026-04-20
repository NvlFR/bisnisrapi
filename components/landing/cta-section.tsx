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
    <section id="kontak" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <motion.div 
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group"
              whileHover={{ scale: 1.02 }}
              transition={smoothSpring}
            >
              <Image
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200"
                alt="Sesi Konsultasi Strategis Bisnis Rapi"
                width={800}
                height={1000}
                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </motion.div>

            {/* Floating badge */}
            <motion.div 
              className="absolute -right-4 -bottom-4 p-6 rounded-[2rem] bg-accent text-accent-foreground shadow-2xl shadow-accent/20 border border-white/10"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ...smoothSpring }}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-3xl font-black tracking-tighter" style={{ 
                background: 'linear-gradient(to bottom, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>50+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Success Stories</p>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <motion.p 
              className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ 
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Take the next step
              </p>
            </motion.p>
            
            <motion.h2 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 }}
            >
              Siap Mengelola Bisnis dengan Cara <span className="italic" style={{ 
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Cerdas?</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.2 }}
            >
              Hubungi kami untuk diskusi awal. Kami akan membantu menganalisis kebutuhan bisnis Anda dan memberikan solusi terbaik.
            </motion.p>

            {/* Benefits */}
            <motion.div 
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.5 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto gap-2 rounded-full px-10 h-16 text-base font-bold shadow-2xl shadow-brand-end/20 text-white border-0"
                  style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                  asChild
                >
                  <Link
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={20} />
                    Diskusi via WhatsApp
                  </Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto gap-2 rounded-full px-8 h-14 text-base" 
                  asChild
                >
                  <Link href="mailto:hello@bisnisrapi.com">
                    Kirim Email
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
