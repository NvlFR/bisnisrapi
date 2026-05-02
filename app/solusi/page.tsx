import { industries } from "@/lib/industries";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/landing/footer";

export const metadata = {
  title: "Daftar Solusi POS Kasir & Sistem Bisnis per Industri | BisnisRapi",
  description: "Temukan solusi kasir, e-commerce, dan sistem manajemen yang dirancang khusus untuk berbagai industri. Mulai dari F&B, Retail, hingga Jasa.",
};

export default function SolusiIndexPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 pt-32 pb-20 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Solusi Spesifik Untuk <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#59f6e3] to-[#185cf8]">
                Setiap Industri
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Apapun bisnis Anda, BisnisRapi hadir dengan fitur yang dirancang khusus untuk memecahkan masalah operasional dan mempercepat pertumbuhan bisnis Anda.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/solusi/${industry.slug}`}
                className="group relative p-6 rounded-3xl border bg-card/50 backdrop-blur-sm hover:shadow-xl hover:shadow-brand-end/5 hover:border-brand-end/30 transition-all duration-300 overflow-hidden hover:-translate-y-1 flex flex-col h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#59f6e3]/5 to-[#185cf8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-secondary/50 mb-6 text-3xl shadow-sm border border-border/50 group-hover:scale-110 group-hover:bg-background transition-all duration-300">
                    {industry.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#59f6e3] group-hover:to-[#185cf8] transition-colors">
                    {industry.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3 flex-1">
                    {industry.painPoint}
                  </p>
                  
                  <div className="flex items-center text-sm font-semibold text-[#185cf8] group-hover:gap-2 transition-all mt-auto pt-4 border-t border-border/50">
                    Lihat Solusi <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
