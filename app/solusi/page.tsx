import { industries, type Industry } from "@/lib/industries";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solusi Sistem Kasir & Manajemen per Industri | BisnisRapi",
  description:
    "Sistem bisnis digital yang dirancang khusus untuk 35+ industri UMKM Indonesia. Bukan solusi generik — kami memahami alur kerja spesifik industri Anda, dari F&B, Retail, hingga Jasa.",
  keywords: [
    "solusi bisnis digital Indonesia",
    "sistem kasir per industri",
    "software manajemen bisnis UMKM",
    "digitalisasi UMKM Indonesia",
    "aplikasi kasir kustom",
    "sistem POS industri spesifik",
  ],
  openGraph: {
    title: "Solusi Sistem Kasir & Manajemen per Industri | BisnisRapi",
    description:
      "35+ solusi sistem bisnis yang dirancang khusus sesuai industri Anda. Pilih industri dan lihat solusi yang relevan.",
    type: "website",
    url: "https://bisnisrapi.my.id/solusi",
  },
  alternates: {
    canonical: "https://bisnisrapi.my.id/solusi",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Solusi Bisnis Digital per Industri - BisnisRapi",
  description:
    "Direktori solusi sistem kasir dan manajemen bisnis untuk berbagai industri UMKM Indonesia",
  url: "https://bisnisrapi.my.id/solusi",
  numberOfItems: industries.length,
  itemListElement: industries.map((ind, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: `Sistem Bisnis untuk ${ind.name}`,
    url: `https://bisnisrapi.my.id/solusi/${ind.slug}`,
  })),
};

const categoryGroups = [
  {
    id: "fnb",
    label: "Makanan & Minuman",
    emoji: "🍽️",
    description: "Cafe, restoran, katering, dan semua bisnis kuliner",
    slugs: ["kedai-kopi", "resto", "katering", "toko-buah", "toko-daging"],
  },
  {
    id: "retail",
    label: "Toko & Retail",
    emoji: "🛍️",
    description: "Fashion, elektronik, minimarket, dan berbagai jenis toko",
    slugs: [
      "minimarket", "toko-baju", "toko-elektronik", "toko-sepatu",
      "kosmetik", "toko-emas", "baby-shop", "toko-atk", "frozen-food",
      "sembako", "toko-bangunan", "bahan-kue", "konter-pulsa",
      "toko-pancing", "toko-oleh-oleh", "toko-kaca", "toko-mainan", "toko-plastik",
    ],
  },
  {
    id: "jasa",
    label: "Jasa & Layanan",
    emoji: "⚙️",
    description: "Salon, bengkel, klinik, dan semua bisnis layanan",
    slugs: [
      "salon", "laundry", "bengkel", "car-wash", "gym-fitness",
      "percetakan", "studio-foto", "rental-kendaraan", "florist",
      "optik", "klinik-gigi", "klinik-kecantikan", "petshop",
    ],
  },
  {
    id: "distribusi",
    label: "Grosir & Distribusi",
    emoji: "📦",
    description: "Distributor, grosir, dan agen penjualan barang",
    slugs: ["distributor", "toko-sepeda"],
  },
];

function IndustryCard({ industry }: { industry: Industry }) {
  return (
    <Link
      href={`/solusi/${industry.slug}`}
      className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-[#59f6e3]/50 hover:shadow-lg hover:shadow-[#59f6e3]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#59f6e3]/3 to-[#185cf8]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
      <div className="relative z-10">
        <div className="flex items-start gap-3 mb-3">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/70 text-2xl border border-border/50 group-hover:scale-110 group-hover:bg-background transition-all duration-300 shadow-sm flex-shrink-0">
            {industry.icon}
          </div>
          <div>
            <h3 className="text-sm font-bold leading-tight text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#59f6e3] group-hover:to-[#185cf8] transition-colors">
              {industry.name}
            </h3>
          </div>
        </div>
        <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-3">
          {industry.painPoint}
        </p>
        <div className="flex items-center gap-1 text-xs text-[#59f6e3] font-semibold group-hover:gap-2 transition-all">
          Lihat solusi
          <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
}

export default function SolusiIndexPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-4 overflow-hidden">
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#59f6e3]/15 to-[#185cf8]/15 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium mb-6">
            <span className="text-base">🏭</span>
            {industries.length}+ Industri Tersedia
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            Sistem yang Benar-benar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59f6e3] to-[#185cf8]">
              Paham Bisnis Anda
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Setiap industri punya tantangan unik. Kami tidak menjual satu sistem untuk semua —
            kami membangun solusi yang memahami alur kerja spesifik bisnis Anda dari dalam.
          </p>

          {/* Why industry-specific matters */}
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {[
              "Fitur sesuai alur kerja industri Anda",
              "Tidak ada fitur sampah yang bikin bingung",
              "Onboarding lebih cepat karena sudah familiar",
            ].map((point) => (
              <div
                key={point}
                className="flex items-center gap-2 text-sm text-muted-foreground bg-secondary/50 border border-border/50 px-4 py-2 rounded-full"
              >
                <CheckCircle className="w-4 h-4 text-[#59f6e3] flex-shrink-0" />
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY QUICK NAV */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryGroups.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-sm font-semibold hover:border-[#59f6e3]/50 hover:bg-secondary/80 transition-all"
              >
                <span>{cat.emoji}</span>
                {cat.label}
                <span className="text-xs text-muted-foreground">
                  ({cat.slugs.filter((s) => industries.find((i) => i.slug === s)).length})
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRY GRID BY CATEGORY */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto space-y-16">
          {categoryGroups.map((cat) => {
            const catIndustries = cat.slugs
              .map((slug) => industries.find((i) => i.slug === slug))
              .filter(Boolean) as Industry[];

            if (catIndustries.length === 0) return null;

            return (
              <div key={cat.id} id={cat.id}>
                {/* Category header */}
                <div className="flex items-start gap-4 mb-8 pb-4 border-b border-border/50">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-secondary/70 border border-border text-2xl flex-shrink-0">
                    {cat.emoji}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-foreground">{cat.label}</h2>
                    <p className="text-sm text-muted-foreground mt-0.5">{cat.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {catIndustries.map((industry) => (
                    <IndustryCard key={industry.slug} industry={industry} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-20 px-4 bg-muted/30 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="text-4xl mb-4">🤔</div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Tidak menemukan industri Anda?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Industri Anda mungkin punya alur kerja yang sangat unik.
            Ceritakan kebutuhan Anda — kami siap bantu analisis dan bangunkan solusi yang sesuai.
          </p>
          <Link
            href="https://wa.me/6285156358380?text=Halo%20BisnisRapi,%20saya%20ingin%20konsultasi%20solusi%20untuk%20bisnis%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-transform text-lg shadow-xl shadow-foreground/10"
          >
            Konsultasi Gratis <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Tidak ada biaya konsultasi. Respons via WhatsApp dalam jam kerja.
          </p>
        </div>
      </section>


    </main>
  );
}
