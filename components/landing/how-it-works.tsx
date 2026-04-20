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
    <section id="cara-kerja" className="relative py-24 lg:py-32 bg-muted/30 overflow-hidden">
      
      {/* Desktop Image — Strategic/Collaboration vibe with Floating Frame */}
      <div className="absolute inset-y-0 left-0 w-[50%] hidden lg:flex items-center justify-center overflow-hidden pointer-events-none p-12 pl-0">
        <motion.div 
          className="relative w-full h-[80%] rounded-r-[48px] overflow-hidden shadow-[0_32px_80px_-15px_rgba(0,0,0,0.15)] border-y border-r border-border/50 will-change-transform"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <Image
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2000" 
            alt="Strategic Planning Bisnis Rapi"
            fill
            className="object-cover object-left opacity-90 transition-transform duration-700 hover:scale-105"
          />
          {/* Seamless Edge Masking */}
          <div className="absolute inset-0 bg-gradient-to-l from-muted/30 via-transparent to-transparent pointer-events-none" />
          
          {/* subtle decorative glass glow */}
          <div className="absolute top-0 left-0 w-32 h-full bg-white/10 blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start" ref={ref}>
          
          {/* Left - Spacer for image display on desktop */}
          <div className="hidden lg:block h-full w-full" />

          {/* Right - Content */}
          <div className="lg:pl-8 xl:pl-16">
            <motion.div 
              className="mb-16"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-start/5 border border-brand-start/10 backdrop-blur-sm mb-6 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary">
                  Workflow
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
                Proses <span style={{ 
                    background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>Sederhana</span>,<br /> Hasil Dahsyat
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Kami menangani seluruh kerumitan teknis sehingga Anda bisa fokus sepenuhnya pada pertumbuhan bisnis Anda.
              </p>
            </motion.div>

            {/* Timeline Steps */}
            <div className="relative space-y-12">
              {/* Vertical Connector Line */}
              <motion.div 
                className="absolute left-[31px] top-8 bottom-8 w-[2px] bg-gradient-to-b from-brand-start to-brand-end/20"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                style={{ originY: 0 }}
              />

              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...smoothSpring, delay: 0.3 + index * 0.2 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-8 relative z-10 group"
                >
                  {/* Step Icon Circle */}
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-card border border-border shadow-sm flex items-center justify-center group-hover:border-brand-end/30 group-hover:shadow-lg transition-all duration-300">
                    <step.icon className="w-8 h-8 text-foreground" strokeWidth={1.5} />
                  </div>

                  {/* Text Content */}
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-foreground mb-1.5 tracking-tight group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-[15px] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Image (Visible only on mobile) */}
          <motion.div 
            className="lg:hidden mt-8 rounded-3xl overflow-hidden shadow-2xl border border-border aspect-video relative"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
              alt="Strategic Planning"
              fill
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
