"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  ArrowUpRight,
  Wallet,
  CreditCard,
  ShieldCheck,
  TrendingUp,
  Mail,
  MoreHorizontal
} from "lucide-react";

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
} as const;

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-24 lg:py-32 bg-secondary/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ ...smoothSpring }}
        >
          {/* <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{
            background: 'linear-gradient(to right, #59f6e3, #185cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Keunggulan
          </p> */}
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
              Keunggulan
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
            Kenapa Harus Punya <span style={{
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Sistem Sendiri?</span>
          </h2>
        </motion.div>

        {/* Bento Grid — Inspired by Reference #2 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 lg:gap-8">

          {/* Card 1: Real-Time Monitoring */}
          <BentoCard
            className="md:col-span-2"
            title="Real-Time Monitoring"
            description="Pantau kondisi bisnis kapan saja & di mana saja."
          >
            <div className="mt-8 p-6 rounded-3xl bg-background border border-border/50 shadow-inner">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 shadow-sm flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-foreground" />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                  Live
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-medium">Status Operasional</p>
                <h4 className="text-2xl font-bold text-slate-800 tracking-tight">Semua Berjalan Lancar</h4>
              </div>
              <div className="mt-8 flex gap-2">
                <div className="h-10 px-4 rounded-full bg-slate-900 flex items-center text-xs font-bold text-white shadow-lg">
                  Buka Dashboard
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Automated Reports */}
          <BentoCard
            className="md:col-span-2"
            title="Automated Reports"
            description="Laporan harian/bulanan otomatis. Tidak perlu rekap manual."
          >
            <div className="mt-8 h-full">
              <div className="flex items-end justify-between h-40 gap-2 mb-2 px-2">
                {[40, 70, 45, 90, 65, 80, 55].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.1 * i, duration: 1, ease: "easeOut" }}
                    className={`w-full rounded-t-lg ${i === 3 ? 'bg-brand-end' : 'bg-slate-200'} relative group cursor-pointer`}
                  />
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold px-2 uppercase tracking-tighter">
                <span>Min</span><span>Sen</span><span>Sel</span><span>Rab</span><span>Kam</span><span>Jum</span><span>Sab</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Scalable System */}
          <BentoCard
            className="md:col-span-2"
            title="Scalable System"
            description="Sistem yang bisa terus ditambah fitur seiring bisnis tumbuh."
          >
            <div className="mt-8 space-y-3">
              {[
                { name: 'Modul Inventory', amount: 'Ready', status: 'Active', icon: 'IV' },
                { name: 'Modul Payroll', amount: 'Update', status: 'Ready to Add', icon: 'PR' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.name}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{item.status}</p>
                    </div>
                  </div>
                  <TrendingUp className="w-5 h-5 text-emerald-500" />
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 4: Data Security */}
          <BentoCard
            className="md:col-span-2"
            title="Data Security"
            description="Data bisnis Anda aman, terpusat, dan hanya bisa diakses oleh Anda."
          >
            <div className="mt-8 relative h-48 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-6 overflow-hidden shadow-xl border border-slate-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-start/10 rounded-full mr-8 mb-8 blur-xl" />

              <div className="relative flex justify-between items-start">
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-1 italic">ENCRYPTED</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-start" />
                </div>
              </div>

              <div className="mt-auto pt-8">
                <p className="text-white/40 text-xs font-medium mb-2">Akses Terenkripsi</p>
                <p className="text-white text-lg font-mono tracking-[0.1em]">********-****-****</p>
              </div>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}

function BentoCard({
  className,
  title,
  description,
  children
}: {
  className?: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ ...smoothSpring }}
      className={`relative group p-8 lg:p-9 rounded-[2rem] bg-secondary/50 border border-border hover:bg-background hover:border-border/80 hover:shadow-2xl hover:shadow-brand-end/5 transition-all duration-500 flex flex-col justify-between ${className}`}
    >
      <div>
        <h3 className="text-lg font-bold text-foreground mb-2 leading-tight tracking-tight">
          {title}
        </h3>
        <p className="text-slate-500 text-[13px] leading-relaxed font-medium max-w-[90%]">
          {description}
        </p>
      </div>

      {children}
    </motion.div>
  );
}
