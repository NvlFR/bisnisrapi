"use client";

import Image from "next/image";
import { ArrowUpRight, Quote, Star } from "lucide-react";
import { m } from "framer-motion";

const caseStudies = [
  {
    title: "Coffee Shop Multi-Cabang",
    category: "Food & Beverage",
    image: "/portfolio_coffee_shop.webp",
    problem: "Sulit monitor sales & stok harian di 4 cabang yang berjauhan",
    solution: "Dashboard POS Terpusat & Notifikasi Sales Real-time via Telegram",
    result: "Growth Profit +45%",
    testimonial: "Nggak perlu keliling cabang tiap hari buat cek omzet. Semua tinggal buka HP, tim di lapangan juga lebih disiplin.",
    author: "Rizky Ramadhan",
    role: "Founder Kopi Senja",
    rating: 5,
  },
  {
    title: "Grosir Sembako Digital",
    category: "Retail & Distribution",
    image: "/portfolio_retail.webp",
    problem: "Stok ribuan SKU berantakan, sering selisih, & input manual yang lambat",
    solution: "Sistem Manajemen Gudang (WMS) dengan Barcode Scanner",
    result: "Akurasi Stok 100%",
    testimonial: "Dulu stok selisih terus. Sekarang setiap barang masuk-keluar tinggal scan, laporan langsung jadi tanpa nunggu sore.",
    author: "H. Mulyana",
    role: "Pemilik Toko Sumber Jaya",
    rating: 5,
  },
  {
    title: "Supply Chain Buah Lokal",
    category: "Logistik & Agri",
    image: "/portfolio_logistics.webp",
    problem: "Distribusi lambat & data buah rusak tidak terdata dengan baik",
    solution: "Tracking Armada & Digitalisasi Quality Control",
    result: "Waste Reduction -30%",
    testimonial: "Koordinasi antar kebun dan gudang jadi jauh lebih rapi. Kita bisa potong rantai distribusi yang nggak perlu.",
    author: "Dessy Amalia",
    role: "CEO SayurFresh",
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
    <section id="portfolio" className="py-24 lg:py-32 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ ...smoothSpring }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-brand-start/5 border border-brand-start/10 backdrop-blur-sm mb-6 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em]" style={{ 
              background: 'linear-gradient(to right, #59f6e3, #185cf8)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}>
              Portfolio
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-[1.2] tracking-tight">
            Dampak <span style={{ 
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Nyata</span> untuk Bisnis Anda
          </h2>
          <p className="mt-5 text-base text-muted-foreground leading-relaxed">
            Lihat bagaimana solusi kami mentransformasi operasional berbagai sektor bisnis menjadi lebih efisien dan menguntungkan.
          </p>
        </m.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {caseStudies.map((study, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothSpring, delay: 0.1 * index }}
              className="group relative rounded-[2rem] bg-card border border-border transition-all duration-500 overflow-hidden flex flex-col h-full hover:shadow-2xl hover:shadow-brand-end/5 hover:border-brand-end/20"
            >
              {/* Image & Problem/Solution Overlay */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={study.image}
                  alt={study.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  quality={70}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/90 transition-all duration-500" />
                
                {/* Category Badge */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1 rounded-lg bg-white/10 border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
                    {study.category}
                  </span>
                </div>

                {/* Problem/Solution Hover Overlay Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="space-y-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ 
                          background: 'linear-gradient(to right, #f97316, #ea580c)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}>Masalah</p>
                        <p className="text-white text-sm line-clamp-2 leading-relaxed">{study.problem}</p>
                      </div>
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ 
                          background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}>Solusi</p>
                        <p className="text-white text-sm line-clamp-2 leading-relaxed font-semibold">{study.solution}</p>
                      </div>
                   </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 pt-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-4 group-hover:text-brand-end transition-colors">
                  {study.title}
                </h3>

                {/* Testimonial Quote */}
                <div className="mb-8 relative flex-grow">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-brand-start/20" />
                  <p className="text-muted-foreground/90 font-medium italic leading-relaxed pl-6 text-[15px]">
                    "{study.testimonial}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-border shadow-inner">
                    <span className="text-brand-end font-bold text-sm">
                      {study.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-sm leading-tight">{study.author}</p>
                    <p className="text-[13px] text-muted-foreground font-medium">{study.role}</p>
                  </div>
                  <div className="ml-auto flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-brand-start fill-brand-start" />
                    ))}
                  </div>
                </div>

                {/* Impact Metric Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1">Hasil Akhir</p>
                    <p className="text-lg sm:text-xl font-bold tracking-tight" style={{ background: 'linear-gradient(to right, #59f6e3, #185cf8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                      {study.result}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground group-hover:bg-gradient-to-br group-hover:from-brand-start group-hover:to-brand-end group-hover:text-white transition-all duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
