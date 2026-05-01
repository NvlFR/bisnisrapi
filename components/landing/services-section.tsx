"use client";

import { motion } from "framer-motion";
import { Globe, ShoppingBag, Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
} as const;

const services = [
  {
    title: "Sistem Manajemen Bisnis",
    description: "Digitalisasi alur kerja, stok, payroll, hingga laporan keuangan dalam satu sistem custom yang rapi.",
    icon: Settings,
    features: ["Dashboard Real-time", "Automasi Laporan", "Kontrol Stok Ketat"],
    color: "from-blue-500 to-cyan-500",
    delay: 0.1,
  },
  {
    title: "Website Profil Bisnis",
    description: "Tingkatkan kredibilitas brand Anda dengan website profesional yang cepat, responsif, dan SEO-friendly.",
    icon: Globe,
    features: ["Desain Premium", "Kecepatan Tinggi", "Optimasi SEO"],
    color: "from-emerald-500 to-teal-500",
    delay: 0.2,
  },
  {
    title: "E-Commerce & Marketplace",
    description: "Pindahkan pembeli dari marketplace ke sistem sendiri. Kelola order, stok, dan member tanpa potongan biaya.",
    icon: ShoppingBag,
    features: ["Sistem Order Mandiri", "Database Pelanggan", "Tanpa Biaya Admin"],
    color: "from-purple-500 to-blue-500",
    delay: 0.3,
  },
];

export function ServicesSection() {
  return (
    <section id="layanan" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-start/5 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ...smoothSpring }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-start/5 border border-brand-start/10 backdrop-blur-sm mb-6 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-start opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: 'linear-gradient(to right, #59f6e3, #185cf8)' }}></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]" style={{
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Our Services
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
            Layanan Digital Untuk <span style={{
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Pertumbuhan Bisnis</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground font-medium max-w-2xl mx-auto">
            Dari manajemen internal yang rapi hingga wajah bisnis yang memukau di internet, kami bantu digitalisasi bisnis Anda secara menyeluruh.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ ...smoothSpring, delay: service.delay }}
              className="group p-8 rounded-[2.5rem] bg-secondary/30 border border-border/50 hover:bg-background hover:border-border transition-all duration-500 flex flex-col shadow-sm hover:shadow-2xl hover:shadow-brand-end/5 relative overflow-hidden"
            >
              {/* Subtle hover glow */}
              <div className={`absolute -inset-1 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 blur-2xl`} />

              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-4 mb-8 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              <h3 className="text-xl font-bold text-foreground mb-4 tracking-tight relative z-10">
                {service.title}
              </h3>
              
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 font-medium relative z-10">
                {service.description}
              </p>

              <div className="space-y-3 mb-10 mt-auto relative z-10">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-end" />
                    <span className="text-xs font-bold text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.div whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }} className="relative z-10">
                <Link
                  href="#kontak"
                  className="inline-flex items-center gap-2 text-sm font-bold text-brand-end group-hover:text-brand-start transition-colors"
                >
                  Konsultasi Layanan
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
