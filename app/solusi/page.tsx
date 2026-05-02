import { industries } from "@/lib/industries";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solusi Sistem Bisnis Digital per Industri | BisnisRapi",
  description:
    "Temukan solusi kasir, manajemen stok, dan sistem operasional yang dirancang khusus untuk industri Anda. F&B, Retail, Jasa, dan 35+ industri lainnya.",
  openGraph: {
    title: "Solusi Sistem Bisnis Digital per Industri | BisnisRapi",
    description:
      "Temukan solusi kasir, manajemen stok, dan sistem operasional yang dirancang khusus untuk industri Anda. F&B, Retail, Jasa, dan 35+ industri lainnya.",
    type: "website",
  },
  alternates: {
    canonical: "https://bisnisrapi.com/solusi",
  },
};

export default function SolusiIndexPage() {
  return (
    <main className="min-h-screen flex flex-col bg-background">
      <Navbar />

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-16 md:pt-44 md:pb-24 px-4 overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-[#59f6e3]/20 to-[#185cf8]/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4 text-[#59f6e3]" />
            35+ Industri Tersedia
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
            Solusi Digital yang{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59f6e3] to-[#185cf8]">
              Pas untuk Bisnis Anda
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Setiap industri punya tantangan unik. BisnisRapi hadir dengan solusi
            yang dirancang khusus — bukan solusi generik yang dipaksakan.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {[
              { value: "35+", label: "Industri" },
              { value: "500+", label: "Bisnis Terbantu" },
              { value: "1 Hari", label: "Setup Cepat" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#59f6e3] to-[#185cf8]">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY GRID ── */}
      <section className="pb-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section label */}
          <div className="flex items-center gap-3 mb-8">
            <Search className="w-5 h-5 text-muted-foreground" />
            <p className="text-muted-foreground font-medium">
              Pilih industri Anda untuk melihat solusi yang relevan
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/solusi/${industry.slug}`}
                className="group relative flex flex-col items-center text-center p-5 rounded-2xl border border-border bg-card hover:border-[#59f6e3]/40 hover:bg-card/80 hover:shadow-lg hover:shadow-[#59f6e3]/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#59f6e3]/5 to-[#185cf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

                <div className="relative z-10 flex flex-col items-center gap-3">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-secondary/60 text-3xl border border-border/50 group-hover:scale-110 group-hover:bg-background transition-all duration-300 shadow-sm">
                    {industry.icon}
                  </div>

                  {/* Name */}
                  <h2 className="text-sm font-semibold leading-tight text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#59f6e3] group-hover:to-[#185cf8] transition-colors">
                    {industry.name}
                  </h2>

                  {/* Arrow */}
                  <div className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-[#185cf8] transition-colors">
                    Lihat Solusi
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-20 px-4 bg-muted/30 border-t border-border/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Tidak menemukan industri Anda?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Kami juga melayani kustomisasi penuh untuk bisnis dengan alur kerja
            yang unik. Ceritakan kebutuhan Anda dan kami siap bantu.
          </p>
          <Link
            href="https://wa.me/6285156358380?text=Halo%20BisnisRapi,%20saya%20ingin%20konsultasi%20solusi%20untuk%20bisnis%20saya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-transform text-lg shadow-xl shadow-foreground/10"
          >
            Konsultasi Gratis <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
