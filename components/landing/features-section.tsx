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
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-4" style={{ 
            background: 'linear-gradient(to right, #59f6e3, #185cf8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
            Sistem Digital yang <span style={{ 
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>Memberdayakan</span> Bisnis Anda
          </h2>
        </motion.div>

        {/* Bento Grid — Inspired by Reference #2 */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 lg:gap-8">
          
          {/* Card 1: Balance Overview (2 cols on md) */}
          <BentoCard 
            className="md:col-span-3"
            title="Real Time Performance Overview"
            description="Pantau arus kas dan performa keuangan bisnis Anda setiap detik dengan akurasi tinggi."
          >
            <div className="mt-8 p-6 rounded-3xl bg-background border border-border/50 shadow-inner">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary/20 shadow-sm flex items-center justify-center">
                  <Wallet className="w-6 h-6 text-foreground" />
                </div>
                <div className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-[10px] font-bold uppercase tracking-wider">
                  Active
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-slate-400 text-xs font-medium">Total Balance</p>
                <h4 className="text-3xl font-bold text-slate-800 tracking-tight">$10,000.80</h4>
              </div>
              <div className="mt-8 flex gap-2">
                <div className="h-10 px-4 rounded-full bg-white border border-slate-200 flex items-center text-xs font-bold text-slate-600">
                  Withdrawal
                </div>
                <div className="h-10 px-4 rounded-full bg-slate-900 flex items-center text-xs font-bold text-white shadow-lg">
                  Send Money
                </div>
              </div>
            </div>
          </BentoCard>

          {/* Card 2: Revenue Growth (3 cols on md) */}
          <BentoCard 
            className="md:col-span-3"
            title="Recent Revenue Analysis"
            description="Visualisasi data pendapatan harian dan bulanan untuk pengambilan keputusan yang lebih tajam."
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
                  >
                    {i === 3 && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] py-1 px-2 rounded font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                        $2,450.00
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <div className="flex justify-between text-[10px] text-slate-400 font-bold px-2 uppercase tracking-tighter">
                <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
              </div>
            </div>
          </BentoCard>

          {/* Card 3: Growth Transfers (3 cols on md) */}
          <BentoCard 
            className="md:col-span-4"
            title="Growth Transfers & Payments"
            description="Konfirmasi transaksi otomatis dan sistem pembayaran terintegrasi untuk efisiensi operasional maksimal."
          >
            <div className="mt-8 space-y-3">
              {[
                { name: 'Sammie B.', amount: '- $12.00', status: 'Pending', icon: 'SB' },
                { name: 'Next Tech Corp', amount: '+ $1,240.00', status: 'Completed', icon: 'NT' },
                { name: 'Cloud Services', amount: '- $45.00', status: 'Completed', icon: 'CS' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-800">{item.name}</p>
                      <p className="text-[10px] font-medium text-slate-400 uppercase tracking-wider">{item.status}</p>
                    </div>
                  </div>
                  <p className={`text-sm font-bold ${item.amount.startsWith('+') ? 'text-emerald-500' : 'text-slate-800'}`}>
                    {item.amount}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Card 4: Secure Wallet (2 cols on md) */}
          <BentoCard 
            className="md:col-span-2"
            title="Secure Asset Management"
            description="Sistem keamanan tingkat perbankan untuk seluruh aset digital bisnis Anda."
          >
            <div className="mt-8 relative h-48 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 p-6 overflow-hidden shadow-xl border border-slate-700">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
              <div className="absolute bottom-0 right-0 w-16 h-16 bg-brand-start/10 rounded-full mr-8 mb-8 blur-xl" />
              
              <div className="relative flex justify-between items-start">
                <div className="flex flex-col">
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-1 italic">VISA</p>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-none mt-1">BUSINESS</p>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-brand-start" />
                </div>
              </div>
              
              <div className="mt-auto pt-8">
                <p className="text-white text-lg font-mono tracking-[0.2em] mb-2">**** **** 5621</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[8px] font-medium text-white/30 uppercase tracking-wider mb-0.5">Card Holder</p>
                    <p className="text-[10px] font-bold text-white">RAJA NYA</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[8px] font-medium text-white/30 uppercase tracking-wider mb-0.5">Exp</p>
                    <p className="text-[10px] font-bold text-white">12/28</p>
                  </div>
                </div>
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
