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
  "Dashboard real-time",
  "Automasi proses",
  "Laporan otomatis",
  "Multi-user access",
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="solusi" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring }}
        >
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
            Solusi Kami
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
            Sistem Bisnis yang Dirancang <span className="text-accent">Khusus</span> untuk Anda
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Semua yang Anda butuhkan dalam satu platform terintegrasi dengan keamanan data tingkat tinggi.
          </p>
        </motion.div>

        {/* Main Feature with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20" ref={ref}>
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <LayoutDashboard className="w-8 h-8 text-primary" />
            </motion.div>
            
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Dashboard Kontrol Real-Time
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Pantau seluruh aspek bisnis dalam satu layar yang intuitif. Data penjualan, stok, dan performa tim semuanya diperbarui secara otomatis tanpa perlu refresh.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div 
                  key={feature}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...smoothSpring, delay: 0.3 + index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.2 }}
            >
              <Link 
                href="#portfolio" 
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                Lihat Contoh Dashboard
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...smoothSpring, delay: 0.3 }}
          >
            <motion.div 
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
              whileHover={{ y: -8 }}
              transition={smoothSpring}
            >
              <Image
                src="/dashboard_analytics_bisnisrapi.png"
                alt="Dashboard Analytics BisnisRapi"
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </motion.div>

            {/* Floating Stats */}
            <motion.div 
              className="absolute -bottom-6 -left-6 p-5 rounded-2xl bg-card border border-border shadow-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, ...smoothSpring }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                  <Zap className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">85%</p>
                  <p className="text-sm text-muted-foreground">Lebih Efisien</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Secondary Features Grid */}
        <motion.div 
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring }}
        >
          {[
            {
              icon: Zap,
              title: "Automasi Proses Bisnis",
              description: "Proses repetitif diotomasi secara cerdas. Notifikasi order, pembaruan stok, hingga laporan harian berjalan otomatis.",
              image: "/business_automation_bisnisrapi_secondary.png",
            },
            {
              icon: Settings,
              title: "Sistem Custom",
              description: "Dirancang khusus sesuai alur kerja dan kebutuhan spesifik bisnis Anda, bukan template generik.",
              image: "/dashboard_analytics_bisnisrapi.png",
            },
            {
              icon: Database,
              title: "Data Terpusat & Aman",
              description: "Kelola semua data dengan aman menggunakan enkripsi dan sinkronisasi real-time di seluruh perangkat.",
              image: "/order_tracking_bisnisrapi.png",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <feature.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
