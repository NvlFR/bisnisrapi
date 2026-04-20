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
    <section id="faq" className="pt-24 lg:pt-32 pb-12 lg:pb-16 overflow-hidden">
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
              <p className="text-xs font-bold uppercase tracking-[0.2em] mb-4" style={{ 
                background: 'linear-gradient(to right, #59f6e3, #185cf8)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>
                Pertanyaan Umum
              </p>
              <h2 className="text-4xl font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Temukan jawaban untuk pertanyaan yang sering diajukan tentang layanan kami.
              </p>

              {/* Image - Realistic & Professional */}
              <motion.div 
                className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-border/50 bg-muted/30 group"
                whileHover={{ scale: 1.02 }}
                transition={smoothSpring}
              >
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200"
                  alt="Sistem Bisnis Rapi Dashboard"
                  width={600}
                  height={800}
                  className="object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent pointer-events-none" />
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
                      openIndex === index ? "bg-brand-end text-white" : "bg-secondary text-muted-foreground"
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

        {/* New Centered Bottom CTA */}
        <motion.div 
          className="mt-20 text-center border-t border-border/50 pt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...smoothSpring, delay: 0.4 }}
        >
          <p className="text-muted-foreground mb-6">
            Masih ada pertanyaan yang belum terjawab?
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Button 
              className="rounded-full gap-2 px-10 h-14 text-white font-bold shadow-xl shadow-brand-end/20 text-md border-0 transition-all duration-300" 
              style={{ background: 'linear-gradient(135deg, #59f6e3 0%, #185cf8 100%)' }}
              asChild
            >
              <Link href="https://wa.me/6285199256640" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} className="fill-white/20" />
                Konsultasi via WhatsApp
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
