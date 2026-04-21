"use client";

import Image from "next/image";
import Link from "next/link";
import { Settings, LayoutDashboard, Zap, Database, ArrowRight, Check } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

const features = [
  { title: "Dashboard Real-time", description: "Pantau angka penjualan, pengeluaran, dan performa tim detik ini juga. Tidak perlu tanya staf." },
  { title: "Automasi Admin", description: "Hilangkan kerjaan repetitif. Biarkan sistem yang kirim kuitansi, update stok, dan rekap laporan." },
  { title: "Kontrol Stok Anti-Bocor", description: "Setiap barang masuk dan keluar tercatat otomatis dengan validasi yang ketat. Hilangkan selisih stok." },
  { title: "Akses Mobile dari Mana Saja", description: "Pantau bisnis sambil liburan atau dari luar kota. Semua data ada di genggaman Anda." },
  { title: "Sistem 100% Sesuai Alur Anda", description: "Kami tidak memaksa Anda pakai template kaku. Kami bangun sistem mengikuti cara Anda bekerja." },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="solusi" className="relative py-24 lg:py-32 bg-background overflow-hidden">

      {/* Desktop Image with Floating Frame Effect */}
      <div className="absolute inset-y-0 right-0 w-[50%] hidden lg:flex items-center justify-center overflow-hidden pointer-events-none p-12 pr-0">
        <motion.div
          className="relative w-full h-[550px] xl:h-[650px] max-h-[85%] rounded-l-[48px] overflow-hidden shadow-[0_32px_80px_-15px_rgba(0,0,0,0.3)] border-y border-l border-white/20 will-change-transform"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="/solution_image_bisnisrapi.png"
            alt="Dashboard Bisnis Rapi Analytics"
            fill
            className="object-cover object-left opacity-95 transition-transform duration-700 hover:scale-105"
            priority
          />
          {/* Seamless Transition Mask */}
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent pointer-events-none" />

          {/* Decorative glass glow */}
          <div className="absolute top-0 right-0 w-32 h-full bg-white/5 blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <motion.div
          className="text-center lg:text-left lg:max-w-xl mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ ...smoothSpring }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-start/5 border border-brand-start/10 backdrop-blur-sm mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-start opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'linear-gradient(to right, #59f6e3, #185cf8)' }}></span>
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ 
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Solusi Kami
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight text-balance">
            Bangun Sistem Manajemen Bisnis yang <span style={{
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Rapi & Terkontrol</span>
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed font-medium">
            Kami membantu Anda membangun <span className="text-foreground font-bold italic">sistem manajemen bisnis</span> yang membuat operasional lebih jelas, bukan lebih rumit.
          </p>
        </motion.div>

        {/* Main Feature with Content spacer for image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center mb-20" ref={ref}>
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ ...smoothSpring, delay: 0.2 }}
            className="lg:max-w-xl"
          >
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-start/10 to-brand-end/10 border border-brand-start/20 flex items-center justify-center mb-6 shadow-sm">
              <LayoutDashboard className="w-7 h-7 text-brand-end" />
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Konsep "Bisnis Rapi"
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 font-medium">
              Sistem yang kami bangun fokus pada keteraturan dan kemudahan kontrol.
            </p>

            <div className="space-y-6 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ ...smoothSpring, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-start/10 border border-brand-start/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-brand-end" />
                  </div>
                  <div>
                    <span className="text-base font-bold text-foreground block mb-0.5">{feature.title}</span>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ ...smoothSpring, delay: 0.8 }}
              className="mt-8 p-4 rounded-xl bg-brand-start/5 border border-brand-start/10 italic text-cyan-600 font-semibold mb-8"
            >
              👉 Hasilnya: bisnis lebih rapi, lebih mudah dikontrol, dan lebih siap berkembang.
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#portfolio"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-bold shadow-xl shadow-brand-end/20 transition-all border-0"
                style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
              >
                Lihat Contoh Dashboard
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Mobile Image Replacement (Visible only on mobile) */}
          <motion.div
            className="lg:hidden relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border aspect-[4/3]">
              <Image
                src="/solution_image_bisnisrapi.png"
                alt="Dashboard Analytics BisnisRapi"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Empty spacer on desktop to let absolute image stay on top */}
          <div className="hidden lg:block h-full w-full" />
        </div>


      </div>
    </section>
  );
}
