"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "Apa itu BisnisRapi?",
    answer:
      "BisnisRapi adalah layanan pembuatan sistem bisnis digital custom untuk UMKM dan startup. Kami fokus membangun sistem yang benar-benar digunakan sehari-hari, bukan sekadar website atau aplikasi yang bagus dilihat namun tidak fungsional.",
  },
  {
    question: "Apakah saya perlu memahami coding?",
    answer:
      "Tidak perlu sama sekali. Sistem yang kami bangun dirancang user-friendly. Kami juga memberikan pelatihan lengkap hingga tim Anda dapat mengoperasikannya secara mandiri. Tim support kami juga siap membantu kapanpun ada kendala.",
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer:
      "Bergantung pada kompleksitas sistem. Untuk sistem sederhana dapat selesai dalam 2-4 minggu. Untuk yang lebih kompleks biasanya memerlukan 1-3 bulan. Kami akan memberikan timeline yang jelas di awal setelah sesi diskusi kebutuhan.",
  },
  {
    question: "Bagaimana dengan keamanan data saya?",
    answer:
      "Keamanan data adalah prioritas utama kami. Semua sistem dibangun dengan standar keamanan tinggi - enkripsi data, backup otomatis, dan kontrol akses yang ketat. Data Anda aman bersama kami.",
  },
  {
    question: "Apakah ada layanan pemeliharaan setelah selesai?",
    answer:
      "Ya, kami menyediakan paket pemeliharaan bulanan yang mencakup pembaruan sistem, backup, monitoring, dan dukungan teknis. Anda juga dapat meminta fitur baru atau modifikasi seiring perkembangan bisnis.",
  },
  {
    question: "Bagaimana cara memulai?",
    answer:
      "Sangat mudah. Klik tombol 'Konsultasi Gratis' dan kami akan mengatur jadwal untuk berdiskusi tentang bisnis Anda. Dari situ kami akan memberikan rekomendasi solusi yang paling sesuai.",
  },
];

const smoothSpring = {
  type: "spring",
  stiffness: 100,
  damping: 20,
} as const;

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 lg:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left - Header & Image */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring }}
          >
            <div className="sticky top-32">
              <p className="text-xs font-bold text-accent uppercase tracking-[0.2em] mb-4">
                Pertanyaan Umum
              </p>
              <h2 className="text-4xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
              </p>

              {/* Image */}
              <motion.div 
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/50"
                whileHover={{ scale: 1.02 }}
                transition={smoothSpring}
              >
                <Image
                  src="/team_collaboration_bisnisrapi.png"
                  alt="Konsultasi Bisnis Rapi"
                  width={400}
                  height={500}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </motion.div>

              <p className="text-muted-foreground mb-4">
                Masih ada pertanyaan lain?
              </p>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button className="rounded-full gap-2 px-8 h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-bold shadow-lg shadow-accent/20" asChild>
                  <Link href="https://wa.me/6281234567890" target="_blank" rel="noopener noreferrer">
                    <MessageCircle size={18} />
                    Hubungi Kami
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - FAQ Items */}
          <motion.div 
            className="lg:col-span-3 space-y-4"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ ...smoothSpring, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ ...smoothSpring, delay: index * 0.05 }}
                className={`rounded-2xl border bg-card overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "border-primary/30 shadow-lg" : "border-border"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/30 transition-colors"
                >
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ ...smoothSpring }}
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      openIndex === index ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ ...smoothSpring }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
