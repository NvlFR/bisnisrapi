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
    color: "bg-orange-500/10 text-orange-600 border-orange-500/20",
    hoverColor: "group-hover:bg-orange-500 group-hover:text-white",
  },
  {
    icon: MessageSquare,
    title: "Operasional via WhatsApp",
    description:
      "Semua order, komplain, dan koordinasi melalui chat? Pesan menumpuk, informasi sering terlewat, dan sulit dilacak.",
    color: "bg-blue-500/10 text-blue-600 border-blue-500/20",
    hoverColor: "group-hover:bg-blue-500 group-hover:text-white",
  },
  {
    icon: Clock,
    title: "Pekerjaan Manual & Repetitif",
    description:
      "Proses yang sama diulang-ulang setiap hari? Banyak waktu terbuang untuk hal-hal yang seharusnya dapat diotomasi.",
    color: "bg-purple-500/10 text-purple-600 border-purple-500/20",
    hoverColor: "group-hover:bg-purple-500 group-hover:text-white",
  },
  {
    icon: TrendingDown,
    title: "Kesulitan Berkembang",
    description:
      "Bisnis mulai berkembang tapi sistem tidak mampu mengikuti? Menambah tim justru menambah kerumitan, bukan efisiensi.",
    color: "bg-red-500/10 text-red-600 border-red-500/20",
    hoverColor: "group-hover:bg-red-500 group-hover:text-white",
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <section id="masalah" className="relative py-16 lg:py-24 overflow-hidden">
      {/* Desktop Image with Floating Frame Effect (Mirrored from Solution Section) */}
      <div className="absolute inset-y-0 left-0 w-[50%] hidden lg:flex items-center justify-center overflow-hidden pointer-events-none p-12 pl-0">
        <motion.div
          className="relative w-full h-[600px] xl:h-[700px] max-h-[85%] rounded-r-[48px] overflow-hidden shadow-[0_32px_80px_-15px_rgba(0,0,0,0.3)] border-y border-r border-white/20 will-change-transform bg-muted/30"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/stressed_business_woman.png"
            alt="Owner Bisnis yang sedang kewalahan"
            fill
            className="object-cover object-center grayscale-[0.1] contrast-[1.1]"
            priority
          />
          {/* Seamless Transition Mask */}
          <div className="absolute inset-0 bg-gradient-to-l from-background/20 via-transparent to-transparent pointer-events-none" />
          
          {/* Decorative glass glow */}
          <div className="absolute top-0 left-0 w-32 h-full bg-white/5 blur-3xl pointer-events-none" />
        </motion.div>
      </div>

      <div className="relative max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 xl:gap-32 items-center min-h-[640px]">
          
          {/* Spacer kiri (buat ruang Floating Frame desktop) */}
          <div className="hidden lg:block h-full w-full" />

          {/* Right - Content */}
          <div ref={ref} className="lg:pl-10 xl:pl-16 py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
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
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                  transition={{ ...smoothSpring, delay: 0.1 * (index + 1) }}
                  whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-brand-end/20 hover:shadow-xl hover:shadow-brand-end/5 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${problem.color} border ${problem.hoverColor} flex items-center justify-center shadow-sm transition-all duration-300`}>
                      <problem.icon className="w-6 h-6 transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand-end transition-colors">
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

      {/* Mobile Image */}
      <div className="lg:hidden mt-4 px-4 pb-12">
        <div className="relative w-full h-[250px] rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/stressed_business_woman.png"
            alt="Owner Bisnis kewalahan"
            fill
            className="object-cover object-center grayscale-[0.1]"
          />
        </div>
      </div>
    </section>
  );
}