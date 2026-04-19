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
    image: "https://placehold.co/800x500/e0e7ff/6366f1?text=Dashboard+View",
  },
  { 
    id: "orders", 
    label: "Pesanan",
    image: "https://placehold.co/800x500/dcfce7/22c55e?text=Order+Management",
  },
  { 
    id: "reports", 
    label: "Laporan",
    image: "https://placehold.co/800x500/fef3c7/f59e0b?text=Reports+Analytics",
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
};

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
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Fitur Lengkap
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
            Semua yang Anda butuhkan untuk bisnis yang terorganisir
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
              className="absolute -left-8 top-1/4 p-4 rounded-2xl bg-card border border-border shadow-xl"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, ...smoothSpring }}
              animate={{ y: [0, -8, 0] }}
            >
              <Activity className="w-6 h-6 text-primary" />
            </motion.div>

            <motion.div 
              className="absolute -right-8 bottom-1/4 p-4 rounded-2xl bg-card border border-border shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, ...smoothSpring }}
              animate={{ y: [0, 8, 0] }}
            >
              <BarChart3 className="w-6 h-6 text-primary" />
            </motion.div>
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              <motion.div 
                className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/25 transition-all duration-300"
                whileHover={{ scale: 1.05, rotate: 3 }}
              >
                <feature.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
