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
};

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="masalah" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Main Image */}
              <motion.div 
                className="relative rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={smoothSpring}
              >
                <Image
                  src="https://placehold.co/600x600/fef3c7/d97706?text=Frustrated+Business+Owner"
                  alt="Pemilik bisnis yang kewalahan dengan sistem manual"
                  width={600}
                  height={600}
                  className="object-cover"
                />
              </motion.div>

              {/* Floating Problem Cards */}
              <motion.div 
                className="absolute -top-4 -right-4 p-4 rounded-2xl bg-card border border-border shadow-xl max-w-[200px]"
                initial={{ opacity: 0, y: -20, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, ...smoothSpring }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex items-center gap-2 text-red-500 mb-2">
                  <FileSpreadsheet className="w-4 h-4" />
                  <span className="text-xs font-medium">Error!</span>
                </div>
                <p className="text-xs text-muted-foreground">Data Excel corrupt, laporan bulanan hilang...</p>
              </motion.div>

              <motion.div 
                className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-card border border-border shadow-xl max-w-[180px]"
                initial={{ opacity: 0, y: 20, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, ...smoothSpring }}
                whileHover={{ rotate: 0, scale: 1.05 }}
              >
                <div className="flex items-center gap-2 text-orange-500 mb-2">
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-xs font-medium">999+ pesan</span>
                </div>
                <p className="text-xs text-muted-foreground">WhatsApp penuh, order terlewat...</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2" ref={ref}>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...smoothSpring }}
              className="mb-12"
            >
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
                Masalah Umum
              </p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
                Apakah ini yang Anda rasakan saat ini?
              </h2>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Banyak bisnis yang berkembang terhambat di masalah yang sama. Tidak perlu khawatir, Anda tidak sendirian.
              </p>
            </motion.div>

            <div className="space-y-4">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 40 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...smoothSpring, delay: 0.1 * (index + 1) }}
                  whileHover={{ x: 8, transition: { duration: 0.2 } }}
                  className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <motion.div 
                      className={`flex-shrink-0 w-12 h-12 rounded-xl ${problem.color} flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <problem.icon className="w-5 h-5" />
                    </motion.div>
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
