"use client";

import Image from "next/image";
import { Check, Award, Users, Zap } from "lucide-react";
import { m, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: Award,
    title: "Sistem yang Praktis & Relevan",
    description:
      "Kami tidak sekadar membuat UI indah, tapi membangun sistem yang benar-benar mempermudah kerja harian tim Anda.",
  },
  {
    icon: Users,
    title: "100% Mengikuti Alur Anda",
    description:
      "Setiap bisnis punya cara kerja unik. Kami mendesain sistem yang menyesuaikan alur Anda, bukan sebaliknya.",
  },
  {
    icon: Zap,
    title: "Skalabel & Masa Depan",
    description:
      "Sistem yang kami bangun siap berkembang seiring bertambahnya skala bisnis Anda tanpa perlu bongkar ulang.",
  },
];

const highlights = [
  "Proses transparan dari awal hingga akhir",
  "Tim support yang responsif",
  "Dokumentasi lengkap untuk tim Anda",
  "Pelatihan hingga tim Anda mandiri",
  "Garansi kepuasan 30 hari",
  "Pemeliharaan & pembaruan berkala",
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mengapa-kami" className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left - Content */}
          <m.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
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
                Mengapa BisnisRapi
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Kenapa BisnisRapi Berbeda?
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Kami percaya bahwa teknologi harus membantu bisnis, bukan
              menambah kompleksitas. Karena itu pendekatan kami selalu dimulai dari
              memahami bisnis Anda terlebih dahulu.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <m.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...smoothSpring, delay: 0.1 + index * 0.05 }}
                >
                  <m.div
                    className="w-5 h-5 rounded-full bg-brand-start/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-3 h-3 text-brand-end" />
                  </m.div>
                  <span className="text-xs sm:text-sm text-foreground">{highlight}</span>
                </m.div>
              ))}
            </div>

            {/* Image */}
            <m.div
              className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ ...smoothSpring, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="/team_agency.webp"
                alt="Tim BisnisRapi"
                width={600}
                height={350}
                className="object-cover w-full transition-transform duration-700 group-hover:scale-110"
                quality={75}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </m.div>
          </m.div>

          {/* Right - Reason Cards */}
          <m.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ ...smoothSpring, delay: 0.2 + index * 0.1 }}
                whileHover={{ y: -5, x: 5, transition: { duration: 0.25 } }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-brand-end/20 hover:shadow-xl hover:shadow-brand-end/5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <m.div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-brand-start/10 group-hover:bg-gradient-to-br group-hover:from-brand-start group-hover:to-brand-end flex items-center justify-center transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <reason.icon className="w-6 h-6 text-brand-end group-hover:text-white transition-colors" />
                  </m.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-brand-end transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </m.div>
            ))}

            {/* Trust badge */}
            <m.div
              className="flex items-center gap-4 p-6 rounded-2xl bg-brand-start/5 border border-brand-start/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...smoothSpring, delay: 0.7 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <m.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-brand-start/20 border-2 border-card flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                  >
                    <span className="text-xs text-brand-end font-semibold">{i}</span>
                  </m.div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">Dipercaya 50+ Bisnis</p>
                <p className="text-sm text-muted-foreground">dengan rating 4.9/5</p>
              </div>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
