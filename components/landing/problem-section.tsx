"use client";

import Image from "next/image";
import { FileSpreadsheet, MessageSquare, Clock, TrendingDown } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const problems = [
  {
    icon: FileSpreadsheet,
    title: "Data Tidak Terorganisir",
    description:
      "Masih menggunakan Excel yang harus diperbarui manual? Data tersebar di berbagai tempat dan sulit diakses saat dibutuhkan.",
    color: "bg-orange-100 text-orange-600",
  },
  {
    icon: MessageSquare,
    title: "Operasional via WhatsApp",
    description:
      "Semua order, komplain, dan koordinasi melalui chat? Pesan menumpuk, informasi sering terlewat, dan sulit dilacak.",
    color: "bg-blue-100 text-blue-600",
  },
  {
    icon: Clock,
    title: "Pekerjaan Manual & Repetitif",
    description:
      "Proses yang sama diulang-ulang setiap hari? Banyak waktu terbuang untuk hal-hal yang seharusnya dapat diotomasi.",
    color: "bg-purple-100 text-purple-600",
  },
  {
    icon: TrendingDown,
    title: "Kesulitan Berkembang",
    description:
      "Bisnis mulai berkembang tapi sistem tidak mampu mengikuti? Menambah tim justru menambah kerumitan, bukan efisiensi.",
    color: "bg-red-100 text-red-600",
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="masalah" className="relative py-16 lg:py-32 overflow-hidden bg-background">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-brand-start/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-start">
          
          {/* Left - Image with Framed Style (Matching Solution Section) */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: -20 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:sticky lg:top-32 h-[450px] lg:h-[580px] rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-muted/30"
            >
              <Image
                src="/stressed_business_woman.png"
                alt="Owner Bisnis yang sedang kewalahan dengan operasional manual"
                fill
                className="object-cover object-center grayscale-[0.1] contrast-[1.1] transition-transform duration-700 hover:scale-105"
                priority
              />
              {/* Subtle Gradient Overlays for Depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-l from-background/10 via-transparent to-transparent pointer-events-none" />
            </motion.div>
          </div>

          {/* Right - Content */}
          <div ref={ref} className="order-1 lg:order-2 lg:pt-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...smoothSpring }}
              className="mb-10"
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
                  Masalah Umum
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Apakah ini yang Anda rasakan saat ini?
              </h2>
              <p className="mt-5 text-base text-muted-foreground leading-relaxed">
                Banyak bisnis yang berkembang terhambat di masalah yang sama.
                Tidak perlu khawatir, Anda tidak sendirian.
              </p>
            </motion.div>

            <div className="space-y-3">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...smoothSpring, delay: 0.1 * (index + 1) }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group p-5 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${problem.color} flex items-center justify-center shadow-sm`}>
                      <problem.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                        {problem.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}