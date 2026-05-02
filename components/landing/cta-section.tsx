"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, CheckCircle2 } from "lucide-react";
import { m } from "framer-motion";

const benefits = [
  "✅ Gratis tanpa komitmen",
  "✅ Diskusi santai via WhatsApp",
  "✅ Kami bantu mapping kebutuhan bisnis Anda",
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function CTASection() {
  return (
    <section id="kontak" className="pt-12 lg:pt-16 pb-24 lg:pb-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <m.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <m.div
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50 group"
              whileHover={{ scale: 1.02 }}
              transition={smoothSpring}
            >
              <Image
                src="/consultation_cta.webp"
                alt="Sesi Konsultasi Strategis Bisnis Rapi"
                width={800}
                height={1000}
                className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </m.div>

            {/* Floating badge */}
            <m.div
              className="absolute -right-4 -bottom-4 p-6 rounded-[2rem] bg-white/95 backdrop-blur-xl text-foreground shadow-2xl shadow-brand-end/5 border border-border/50"
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
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Success Stories</p>
            </m.div>
          </m.div>

          {/* Right - Content */}
          <m.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <m.div
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-start/5 border border-brand-start/10 backdrop-blur-sm mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-start opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-start"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{
                  background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Langkah Berikutnya
                </span>
              </div>
            </m.div>

            <m.h2
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 }}
            >
              Siap Rapikan <br className="sm:hidden" /> Bisnis Anda?<br />
              <span className="inline-block pr-10 -mr-10" style={{
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Konsultasi Sekarang!</span>
            </m.h2>

            <m.p
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.2 }}
            >
              Hentikan kebocoran omzet akibat data berantakan. Kami bantu digitalisasi operasional Anda agar lebih efisien.
            </m.p>

            {/* Benefits */}
            <m.div
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.3 }}
            >
              {benefits.map((benefit, index) => (
                <m.div
                  key={benefit}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.4 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-brand-start/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-brand-end" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </m.div>
              ))}
            </m.div>

            {/* CTA Buttons */}
            <m.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.5 }}
            >
              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="w-full sm:w-auto gap-2 rounded-full px-10 h-16 text-base font-bold shadow-2xl shadow-brand-end/20 text-white border-0"
                  style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
                  asChild
                >
                  <Link
                    href="https://wa.me/6285199256640?text=Halo%20BisnisRapi%2C%20saya%20sudah%20melihat%20layanan%20Anda%20dan%20tertarik%20untuk%20bekerja%20sama.%20Bisa%20kita%20bicara%20lebih%20lanjut%3F"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={20} />
                    Amankan Jadwal Konsultasi
                  </Link>
                </Button>
              </m.div>
              <m.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto gap-2 rounded-full px-8 h-14 text-base"
                  asChild
                >
                  <Link href="mailto:hello@bisnisrapi.com">
                    Kirim Email
                    <m.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight size={18} />
                    </m.span>
                  </Link>
                </Button>
              </m.div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
