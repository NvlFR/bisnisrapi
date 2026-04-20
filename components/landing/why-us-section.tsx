"use client";

import Image from "next/image";
import { Check, Award, Users, Zap } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const reasons = [
  {
    icon: Award,
    title: "Fokus pada Sistem, Bukan Sekadar Tampilan",
    description:
      "Kami tidak hanya membuat yang indah dipandang. Yang terpenting adalah sistem yang benar-benar digunakan dan membuat pekerjaan lebih mudah.",
  },
  {
    icon: Users,
    title: "Solusi Custom Sesuai Kebutuhan",
    description:
      "Setiap bisnis berbeda. Kami membuat solusi yang tepat untuk Anda, bukan template yang dipaksakan.",
  },
  {
    icon: Zap,
    title: "Siap untuk Pertumbuhan",
    description:
      "Sistem yang kami bangun siap berkembang bersama bisnis Anda. Tidak perlu memulai dari nol saat melakukan scale up.",
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
    <section className="py-24 lg:py-32 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center" ref={ref}>
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...smoothSpring }}
          >
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Mengapa BisnisRapi
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight text-balance">
              Berbeda dari yang lain
            </h2>
            <p className="mt-5 text-base text-muted-foreground leading-relaxed">
              Kami percaya bahwa teknologi harus membantu bisnis, bukan
              menambah kompleksitas. Karena itu pendekatan kami selalu dimulai dari
              memahami bisnis Anda terlebih dahulu.
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ ...smoothSpring, delay: 0.1 + index * 0.05 }}
                >
                  <motion.div
                    className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Check className="w-3 h-3 text-primary" />
                  </motion.div>
                  <span className="text-xs sm:text-sm text-foreground">{highlight}</span>
                </motion.div>
              ))}
            </div>

            {/* Image */}
            <motion.div
              className="mt-12 relative rounded-3xl overflow-hidden shadow-2xl group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...smoothSpring, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                alt="Tim BisnisRapi"
                width={600}
                height={350}
                className="object-cover w-full transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          </motion.div>

          {/* Right - Reason Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            {reasons.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ ...smoothSpring, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, x: 5, transition: { duration: 0.25 } }}
                className="group p-8 rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <motion.div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl bg-primary/10 group-hover:bg-primary flex items-center justify-center transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <reason.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Trust badge */}
            <motion.div
              className="flex items-center gap-4 p-6 rounded-2xl bg-primary/5 border border-primary/20"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ ...smoothSpring, delay: 0.7 }}
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-10 h-10 rounded-full bg-primary/20 border-2 border-card flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: 0.8 + i * 0.1, type: "spring" }}
                  >
                    <span className="text-xs text-primary font-semibold">{i}</span>
                  </motion.div>
                ))}
              </div>
              <div>
                <p className="font-semibold text-foreground">Dipercaya 50+ Bisnis</p>
                <p className="text-sm text-muted-foreground">dengan rating 4.9/5</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
