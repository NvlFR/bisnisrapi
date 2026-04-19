"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analisis Kebutuhan",
    description:
      "Kami memulai dengan sesi diskusi mendalam tentang bisnis Anda. Memahami apa yang berjalan baik, apa yang perlu diperbaiki, dan target yang ingin dicapai.",
    color: "bg-secondary/20 text-accent border border-accent/20",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Perancangan Sistem",
    description:
      "Berdasarkan hasil analisis, kami merancang sistem yang sesuai dengan alur kerja dan kebutuhan spesifik bisnis Anda.",
    color: "bg-secondary/20 text-accent border border-accent/20",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Pengembangan & Implementasi",
    description:
      "Sistem dikembangkan dan diimplementasikan dengan cermat. Tim Anda dilatih hingga mampu mengoperasikannya secara mandiri.",
    color: "bg-secondary/20 text-accent border border-accent/20",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Optimasi Berkelanjutan",
    description:
      "Bisnis berkembang, sistem juga. Kami terus melakukan optimasi seiring pertumbuhan bisnis Anda.",
    color: "bg-secondary/20 text-accent border border-accent/20",
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="cara-kerja" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <motion.div 
              className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-border/50"
              whileHover={{ scale: 1.02 }}
              transition={smoothSpring}
            >
              <Image
                src="/team_collaboration_bisnisrapi.png"
                alt="Tim BisnisRapi bekerja sama dengan klien"
                width={600}
                height={700}
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            </motion.div>

            {/* Timeline floating card */}
            <motion.div 
              className="absolute -right-8 top-1/2 -translate-y-1/2 p-6 rounded-2xl bg-card border border-border shadow-xl max-w-[220px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, ...smoothSpring }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="space-y-3">
                {["Diskusi", "Desain", "Develop", "Deploy"].map((step, i) => (
                  <motion.div 
                    key={step}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + i * 0.1, ...smoothSpring }}
                  >
                    <motion.div 
                      className={`w-3 h-3 rounded-full ${i <= 2 ? "bg-primary" : "bg-border"}`}
                      animate={i === 2 ? { scale: [1, 1.3, 1] } : {}}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                    <span className={`text-sm ${i <= 2 ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                      {step}
                    </span>
                    {i === 2 && (
                      <span className="text-xs text-primary font-medium ml-auto">Aktif</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Steps */}
          <div ref={ref}>
            <motion.div 
              className="mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...smoothSpring }}
            >
              <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
                Our Process
              </p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
                Proses Sederhana, Hasil <span className="text-accent">Dahsyat</span>
              </h2>
              <p className="mt-6 text-lg font-medium text-muted-foreground/80 leading-relaxed">
                Kami menangani seluruh kerumitan teknis sehingga Anda bisa fokus sepenuhnya pada pertumbuhan bisnis Anda.
              </p>
            </motion.div>

            <div className="relative">
              {/* Vertical Line */}
              <motion.div 
                className="absolute left-6 top-8 bottom-8 w-[1px] bg-gradient-to-b from-accent/50 via-accent/20 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ originY: 0 }}
              />

              <div className="space-y-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ ...smoothSpring, delay: 0.2 + index * 0.15 }}
                    className="relative flex gap-6 group"
                  >
                    {/* Step Circle */}
                    <motion.div 
                      className="relative z-10 flex-shrink-0"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <div className={`w-12 h-12 rounded-full ${step.color} flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-5 h-5" />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div 
                      className="flex-1 pb-6"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-xs font-black text-accent">{step.number}</span>
                        <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
