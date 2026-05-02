import { getIndustryBySlug, industries } from '@/lib/industries';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/landing/footer';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface Props {
  params: Promise<{ industri: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industri } = await params;
  const data = getIndustryBySlug(industri);
  
  if (!data) return {};

  const title = `Sistem Kasir & Manajemen Terbaik untuk ${data.name} | BisnisRapi`;
  const description = `Tinggalkan cara manual! Solusi sistem kasir dan manajemen khusus untuk ${data.name}. Atasi masalah ${data.painPoint.toLowerCase()}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export async function generateStaticParams() {
  return industries.map((i) => ({
    industri: i.slug,
  }));
}

export default async function IndustrySolutionPage({ params }: Props) {
  const { industri } = await params;
  const data = getIndustryBySlug(industri);

  if (!data) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-4 relative overflow-hidden flex-grow flex items-center">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-8">
            <span className="text-xl">{data.icon}</span> Solusi Khusus {data.name}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-tight">
            Sistem Kasir & Manajemen <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
              Khusus {data.name}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
            Apakah Anda {data.painPoint.toLowerCase()}?
            Ubah cara Anda berbisnis dengan {data.solution.toLowerCase()}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/#cta"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:shadow-xl hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
            >
              Konsultasi Gratis Sekarang <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/#fitur"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-full font-bold hover:bg-secondary/80 transition-all flex items-center justify-center"
            >
              Lihat Fitur Lengkap
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Kenapa {data.name} Harus Pakai BisnisRapi?</h2>
            <p className="text-muted-foreground text-lg">Sistem yang dirancang khusus untuk mengatasi masalah operasional Anda.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Berhenti Kehilangan Uang", desc: "Sistem mencatat setiap pergerakan uang & barang secara akurat tanpa manipulasi." },
              { title: "Bisa Ditinggal Liburan", desc: "Pantau omzet, stok, dan absensi karyawan langsung dari HP Anda kapan saja." },
              { title: "Bukan Sistem Pasaran", desc: "Kami menyesuaikan fitur dengan cara kerja bisnis Anda, bukan Anda yang harus beradaptasi." }
            ].map((benefit, i) => (
              <div key={i} className="bg-background p-8 rounded-3xl border border-border/50 shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
