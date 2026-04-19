"use client";

import { useState } from "react";
import Image from "next/image";
import {
  BarChart3,
  ShoppingCart,
  Activity,
  FileText,
  Users,
  Bell,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    icon: BarChart3,
    title: "Dashboard Monitoring",
    description: "Pantau performa bisnis secara real-time dalam satu layar yang intuitif dan mudah dipahami.",
  },
  {
    icon: ShoppingCart,
    title: "Manajemen Order",
    description: "Lacak pesanan dari awal hingga selesai dengan status yang jelas dan transparan.",
  },
  {
    icon: Activity,
    title: "Pelacakan Real-time",
    description: "Data selalu diperbarui secara otomatis, tanpa perlu refresh manual.",
  },
  {
    icon: FileText,
    title: "Laporan Otomatis",
    description: "Laporan dibuat secara otomatis, menghemat waktu dan menjamin akurasi.",
  },
  {
    icon: Users,
    title: "Manajemen Tim",
    description: "Atur akses dan tugas tim dengan pembagian peran yang jelas dan terstruktur.",
  },
  {
    icon: Bell,
    title: "Notifikasi Cerdas",
    description: "Dapatkan pemberitahuan untuk hal-hal penting yang memerlukan perhatian Anda.",
  },
];

const tabs = [
  { 
    id: "dashboard", 
    label: "Dashboard",
    image: "/dashboard_analytics_bisnisrapi.png",
  },
  { 
    id: "orders", 
    label: "Pesanan",
    image: "/order_tracking_bisnisrapi.png",
  },
  { 
    id: "reports", 
    label: "Tim",
    image: "/team_collaboration_bisnisrapi.png",
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
} as const;

export function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring }}
        >
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
            Capabilities
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
            Sistem Digital yang <span className="text-accent">Memberdayakan</span> Bisnis Anda
          </h2>
        </motion.div>

        {/* Tab Preview Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring, delay: 0.2 }}
        >
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1.5 rounded-full bg-card border border-border">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab.id
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="activeFeatureTab"
                      className="absolute inset-0 bg-primary rounded-full shadow-lg"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Image */}
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ ...smoothSpring }}
                className="rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-border"
              >
                <Image
                  src={tabs.find(t => t.id === activeTab)?.image || tabs[0].image}
                  alt={`Tampilan ${tabs.find(t => t.id === activeTab)?.label}`}
                  width={800}
                  height={500}
                  className="w-full object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating Elements */}
            <motion.div 
              className="absolute -left-8 top-1/4 p-4 rounded-2xl bg-card border border-border shadow-xl will-change-transform"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.5, 
                duration: 4, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              animate={{ y: [0, -8, 0] }}
            >
              <Activity className="w-6 h-6 text-primary" />
            </motion.div>

            <motion.div 
              className="absolute -right-8 bottom-1/4 p-4 rounded-2xl bg-card border border-border shadow-xl will-change-transform"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.6, 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              animate={{ y: [0, 8, 0] }}
            >
              <BarChart3 className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.05 * index }}
              whileHover={{ y: -10 }}
              className="group relative p-10 rounded-[2.5rem] bg-secondary/10 border border-border/50 hover:bg-secondary/20 hover:border-accent/30 transition-all duration-500 overflow-hidden"
            >
              {/* Feature Icon Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-accent/10 transition-colors" />
              
              <motion.div 
                className="w-16 h-16 rounded-[1.25rem] bg-foreground text-background flex items-center justify-center mb-8 shadow-xl group-hover:bg-accent group-hover:text-white transition-all duration-500"
                whileHover={{ scale: 1.1, rotate: -5 }}
              >
                <feature.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground/80 leading-relaxed text-lg font-medium">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
