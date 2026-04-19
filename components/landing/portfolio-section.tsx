"use client";

import Image from "next/image";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Toko Fashion Online",
    category: "E-Commerce",
    image: "/dashboard_analytics_bisnisrapi.png",
    problem: "Semua order melalui WhatsApp, sering terlewat, stok tidak akurat",
    solution: "Sistem order terpusat + inventory real-time",
    result: "Order meningkat +215%",
    testimonial: "Sekarang tim tidak perlu input manual lagi. Semua otomatis dan data selalu akurat. Sangat membantu operasional harian kami.",
    author: "Sarah Wijaya",
    role: "Pemilik FashionKu",
    rating: 5,
  },
  {
    title: "Jaringan Restoran & Kafe",
    category: "Food & Beverage",
    image: "/business_automation_bisnisrapi_secondary.png",
    problem: "5 cabang dengan laporan masih manual di Excel setiap minggu",
    solution: "Dashboard multi-cabang + reporting otomatis harian",
    result: "Reporting 10 Menit",
    testimonial: "Dulu butuh 3 hari untuk kompilasi laporan semua cabang. Sekarang tinggal buka dashboard dan semua data tersedia real-time.",
    author: "Budi Santoso",
    role: "Manajer Operasional Kopi Nikmat",
    rating: 5,
  },
  {
    title: "Jasa Ekspedisi",
    category: "Logistik",
    image: "/order_tracking_bisnisrapi.png",
    problem: "Pelacakan manual, pelanggan sering bertanya posisi barang",
    solution: "Sistem tracking real-time + notifikasi otomatis",
    result: "CS Load -60%",
    testimonial: "Pelanggan sekarang bisa melacak sendiri. Tim customer service jadi bisa fokus pada hal yang lebih penting.",
    author: "Andi Pratama",
    role: "Founder KirimCepat",
    rating: 5,
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 80,
  damping: 20,
} as const;

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring }}
        >
          <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
            Success Stories
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight text-balance">
            Dampak <span className="text-accent">Nyata</span> untuk Bisnis Anda
          </h2>
          <p className="mt-6 text-lg font-medium text-muted-foreground/80 leading-relaxed">
            Lihat bagaimana solusi kami mentransformasi operasional berbagai sektor bisnis menjadi lebih efisien dan menguntungkan.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 * index }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl bg-card border border-border hover:border-primary/30 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute bottom-4 left-6">
                  <span className="px-3 py-1 rounded-full bg-accent/20 border border-accent/20 text-accent text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="p-8 pt-4">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(study.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                    >
                      <Star className="w-4 h-4 text-accent fill-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Quote */}
                <div className="mb-8 relative">
                  <Quote className="absolute -top-4 -left-2 w-10 h-10 text-accent/10 mb-3" />
                  <p className="text-foreground/90 font-medium italic leading-relaxed pl-6">
                    "{study.testimonial}"
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <span className="text-primary font-semibold">
                      {study.author.charAt(0)}
                    </span>
                  </motion.div>
                  <div>
                    <p className="font-semibold text-foreground">{study.author}</p>
                    <p className="text-sm text-muted-foreground">{study.role}</p>
                  </div>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">Impact</p>
                    <p className="text-2xl font-black text-accent tracking-tighter">{study.result}</p>
                  </div>
                  <motion.div 
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 45 }}
                  >
                    <ArrowUpRight className="w-5 h-5 text-primary" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
