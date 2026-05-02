import { getIndustryBySlug, industries } from '@/lib/industries';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/landing/footer';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  PhoneCall,
  BarChart3,
  Database,
  Headset,
  Smartphone,
  ChevronRight
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Props {
  params: Promise<{ industri: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industri } = await params;
  const data = getIndustryBySlug(industri);
  
  if (!data) return {};

  const title = `Sistem Kasir & Manajemen Digital untuk ${data.name} | BisnisRapi`;
  const description = data.metaDescription;

  return {
    title,
    description,
    keywords: data.keywords,
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: `/og/solusi/${industri}.png`, width: 1200, height: 630, alt: data.imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://bisnis-rapi.my.id/solusi/${industri}`,
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

  // JSON-LD structured data for SEO
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: `Sistem Bisnis Digital untuk ${data.name}`,
      description: `Solusi kasir dan manajemen operasional khusus ${data.name} dari BisnisRapi`,
      provider: {
        '@type': 'Organization',
        name: 'BisnisRapi',
        url: 'https://bisnis-rapi.my.id',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer service',
          availableLanguage: 'Indonesian',
        },
      },
      serviceType: 'Software as a Service',
      areaServed: 'ID',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: `Apakah sistem BisnisRapi cocok untuk ${data.name.toLowerCase()} skala UMKM?`,
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sangat cocok. Justru memulai dengan sistem yang benar dari awal akan membangun fondasi data dan SOP yang kuat untuk bisnis Anda berkembang.',
          },
        },
        {
          '@type': 'Question',
          name: 'Berapa lama proses setup hingga sistem siap dipakai?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Untuk paket standar, biasanya 3–7 hari kerja termasuk migrasi data dan konfigurasi. Jika ada kustomisasi tambahan, waktu disesuaikan tingkat kerumitannya.',
          },
        },
        {
          '@type': 'Question',
          name: 'Apakah karyawan perlu keahlian IT khusus?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Tidak perlu. Antarmuka dirancang sangat intuitif. Rata-rata karyawan baru bisa mahir dalam 1–2 hari setelah training.',
          },
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background flex flex-col font-sans">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[0]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd[1]) }}
      />

      {/* ── 1. HERO ── */}
      <section className="pt-28 pb-16 md:pt-40 md:pb-24 px-4 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-gradient-to-br from-brand-start/15 to-brand-end/15 rounded-full blur-[120px]" />
        </div>

        <div className="container mx-auto max-w-5xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-muted-foreground mb-8 justify-center">
            <Link href="/" className="hover:text-foreground transition-colors">Beranda</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/solusi" className="hover:text-foreground transition-colors">Solusi</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{data.name}</span>
          </nav>

          <div className="text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm font-medium mb-6 shadow-sm">
              <span className="text-xl">{data.icon}</span>
              Solusi Khusus {data.name}
            </div>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-[1.15]">
              Sistem Kasir & Manajemen{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
                Khusus {data.name}
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
              Berhenti kelola bisnis secara manual. BisnisRapi mengintegrasikan kasir, stok, laporan, dan tim Anda dalam satu sistem digital yang mudah dipakai siapa saja.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link
                href={`https://wa.me/6285156358380?text=Halo%20BisnisRapi,%20saya%20tertarik%20dengan%20sistem%20untuk%20${encodeURIComponent(data.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-base shadow-xl shadow-foreground/10"
              >
                Konsultasi Gratis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#masalah"
                className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-full font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center text-base"
              >
                Lihat Masalah yang Kami Selesaikan
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {[
                '✅ Setup 3–7 hari kerja',
                '✅ Tanpa biaya konsultasi',
                '✅ Support langsung via WhatsApp',
              ].map((item) => (
                <span key={item} className="font-medium">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. MASALAH ── */}
      <section id="masalah" className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold mb-4">
              Masalah Umum
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Kenapa Bisnis {data.name} Sering Stuck?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Kalau Anda pernah mengalami salah satu hal di bawah ini, Anda tidak sendirian — dan ada solusinya.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {[
              {
                title: data.painPoint,
                desc: `Ini masalah utama yang paling sering dikeluhkan pemilik ${data.name.toLowerCase()}. Tanpa sistem yang tepat, masalah ini terus berulang dan menguras energi.`,
              },
              {
                title: 'Laporan keuangan tidak akurat',
                desc: 'Uang masuk dan keluar tidak tercatat rapi. Di akhir bulan bingung berapa laba bersih, dan risiko kebocoran kas dari karyawan sangat tinggi.',
              },
              {
                title: 'Bisnis terlalu bergantung pada owner',
                desc: 'Kalau Anda tidak ada, operasional kacau. Bisnis yang harusnya memberi kebebasan malah jadi penjara 24/7.',
              },
              {
                title: 'Data stok tidak bisa dipercaya',
                desc: 'Stok fisik tidak cocok dengan catatan. Barang expired, hilang, atau over-stock karena tidak ada visibilitas data yang akurat.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-6 bg-background rounded-2xl border border-red-500/15 hover:border-red-500/30 hover:shadow-sm transition-all"
              >
                <div className="shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                    <XCircle className="w-5 h-5 text-red-500" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg font-semibold text-foreground">
              Kabar baiknya — semua masalah di atas bisa diselesaikan dengan sistem yang tepat. 👇
            </p>
          </div>
        </div>
      </section>

      {/* ── 3. SOLUSI INTI ── */}
      <section className="py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-brand-start/10 mb-5">
              <ShieldCheck className="w-7 h-7 text-brand-start" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Satu Sistem, Semua Terkontrol
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
              BisnisRapi bukan aplikasi kasir biasa. Ini ekosistem digital yang dirancang khusus untuk merapikan alur kerja {data.name.toLowerCase()} dari A sampai Z.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Database className="w-6 h-6 text-brand-start" />,
                color: 'bg-brand-start/10',
                title: 'Data Terpusat',
                desc: 'Transaksi, stok, karyawan, dan pelanggan tersimpan di satu tempat yang aman. Tidak ada lagi data tercecer di buku atau Excel.',
              },
              {
                icon: <Zap className="w-6 h-6 text-brand-end" />,
                color: 'bg-brand-end/10',
                title: 'Otomatis & Cerdas',
                desc: 'Laporan keuangan terbentuk sendiri, stok berkurang otomatis saat transaksi, dan notifikasi muncul kalau ada yang tidak wajar.',
              },
              {
                icon: <Smartphone className="w-6 h-6 text-brand-start" />,
                color: 'bg-brand-start/10',
                title: 'Pantau dari Mana Saja',
                desc: 'Lihat omzet, stok, dan aktivitas karyawan langsung dari HP Anda — kapan saja, di mana saja, tanpa harus ada di toko.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-7 rounded-2xl bg-secondary/30 border border-border hover:bg-secondary/50 hover:-translate-y-1 transition-all"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center mb-5`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FITUR UNGGULAN ── */}
      <section className="py-20 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Fitur yang Langsung Terasa Manfaatnya
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Dirancang agar mudah dipakai karyawan baru sekalipun, tapi cukup canggih untuk kebutuhan bisnis yang berkembang.
            </p>
          </div>

          <div className="space-y-6">
            {/* Fitur Spesifik Industri */}
            <div className="grid md:grid-cols-2 gap-6 items-center p-8 bg-background rounded-2xl border border-border">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-start/10 text-brand-start text-xs font-bold uppercase tracking-wider mb-4">
                  ⭐ Eksklusif untuk {data.name}
                </span>
                <h3 className="text-2xl font-bold mb-3">Solusi Spesifik Industri Anda</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Sistem kami dilengkapi alur kerja khusus:{' '}
                  <span className="text-foreground font-semibold">"{data.solution}"</span>
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-start shrink-0" />
                    Menjawab langsung: {data.painPoint.toLowerCase()}
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-start shrink-0" />
                    Disesuaikan dengan best-practice industri
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-brand-start shrink-0" />
                    Bisa dikustomisasi sesuai SOP bisnis Anda
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-secondary rounded-xl overflow-hidden relative border border-border">
                <div className="absolute inset-0 flex flex-col p-4 gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-2xl">{data.icon}</span>
                    <div className="h-2 w-24 bg-brand-start/30 rounded-full" />
                  </div>
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="bg-background/60 rounded-lg p-2 border border-border/50">
                        <div className="h-1.5 w-12 bg-muted-foreground/20 rounded mb-1" />
                        <div className="h-3 w-16 bg-brand-start/30 rounded" />
                      </div>
                    ))}
                  </div>
                  <div className="h-6 bg-brand-start/20 rounded-lg flex items-center px-2">
                    <div className="h-2 w-32 bg-brand-start/40 rounded" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-start/5 to-transparent" />
              </div>
            </div>

            {/* Fitur Dashboard & Laporan */}
            <div className="grid md:grid-cols-2 gap-6 items-center p-8 bg-background rounded-2xl border border-border">
              <div className="order-2 md:order-1 aspect-video bg-secondary rounded-xl overflow-hidden relative border border-border">
                <div className="absolute inset-0 flex flex-col p-4 gap-2">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">📊 Laporan Hari Ini</div>
                  <div className="flex gap-2 flex-1">
                    <div className="flex-1 bg-background/60 rounded-lg p-2 border border-border/50 flex flex-col justify-between">
                      <div className="h-1.5 w-10 bg-muted-foreground/20 rounded" />
                      <div className="space-y-1">
                        {[60, 80, 45, 90, 70].map((h, i) => (
                          <div key={i} className="flex items-end gap-0.5 h-8">
                            <div className="w-3 bg-brand-start/40 rounded-sm" style={{ height: `${h}%` }} />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      {['Omzet', 'Transaksi', 'Laba'].map((label) => (
                        <div key={label} className="bg-background/60 rounded-lg p-2 border border-border/50">
                          <div className="text-[9px] text-muted-foreground">{label}</div>
                          <div className="h-2.5 w-12 bg-brand-end/30 rounded mt-0.5" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider mb-4">
                  📊 Laporan Otomatis
                </span>
                <h3 className="text-2xl font-bold mb-3">Laporan Keuangan Tanpa Rekap Manual</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Setiap transaksi langsung terhitung otomatis. Lihat omzet, laba, dan pergerakan stok dalam grafik yang mudah dibaca — tanpa perlu buka Excel.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    Pantau omzet & profit kapan saja
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                    Deteksi produk terlaris & barang mati
                  </li>
                </ul>
              </div>
            </div>

            {/* Fitur Manajemen Karyawan */}
            <div className="grid md:grid-cols-2 gap-6 items-center p-8 bg-background rounded-2xl border border-border">
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 text-purple-500 text-xs font-bold uppercase tracking-wider mb-4">
                  👥 Manajemen Tim
                </span>
                <h3 className="text-2xl font-bold mb-3">Kontrol Penuh atas Karyawan</h3>
                <p className="text-muted-foreground mb-5 leading-relaxed">
                  Berikan hak akses berbeda untuk kasir, admin, dan manager. Semua aktivitas tercatat — tidak ada yang bisa diedit atau dihapus tanpa izin.
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    Pembatasan edit & hapus transaksi
                  </li>
                  <li className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 shrink-0" />
                    Laporan shift kasir tanpa selisih
                  </li>
                </ul>
              </div>
              <div className="aspect-video bg-secondary rounded-xl overflow-hidden relative border border-border">
                <div className="absolute inset-0 flex flex-col p-4 gap-2">
                  <div className="text-xs font-semibold text-muted-foreground mb-1">👥 Manajemen Akses</div>
                  {['Owner', 'Manager', 'Kasir'].map((role, i) => (
                    <div key={role} className="flex items-center justify-between bg-background/60 rounded-lg px-3 py-1.5 border border-border/50">
                      <div className="flex items-center gap-2">
                        <div className={`w-5 h-5 rounded-full text-[8px] flex items-center justify-center font-bold ${
                          i === 0 ? 'bg-brand-start/30 text-brand-start' :
                          i === 1 ? 'bg-blue-500/30 text-blue-500' :
                          'bg-muted-foreground/20 text-muted-foreground'
                        }`}>{role[0]}</div>
                        <span className="text-xs font-medium">{role}</span>
                      </div>
                      <div className="flex gap-1">
                        {[...Array(i === 0 ? 3 : i === 1 ? 2 : 1)].map((_, j) => (
                          <div key={j} className="w-2 h-2 rounded-full bg-brand-start/40" />
                        ))}
                        {[...Array(3 - (i === 0 ? 3 : i === 1 ? 2 : 1))].map((_, j) => (
                          <div key={j} className="w-2 h-2 rounded-full bg-border" />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA TENGAH ── */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-gradient-to-br from-brand-start to-brand-end rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
                Jangan Biarkan Masalah Operasional Menghambat Pertumbuhan Bisnis Anda
              </h2>
              <p className="text-white/85 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
                Kompetitor Anda mungkin sudah pakai sistem digital. Diskusikan kondisi {data.name.toLowerCase()} Anda sekarang — gratis, tanpa komitmen.
              </p>
              <Link
                href="https://wa.me/6285156358380"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-full font-bold hover:scale-105 transition-transform text-base shadow-xl"
              >
                Konsultasi via WhatsApp <PhoneCall className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. PERBANDINGAN SEBELUM vs SESUDAH ── */}
      <section className="py-20 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sebelum & Sesudah Pakai Sistem Digital
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ini perbedaan nyata yang biasanya pemilik {data.name.toLowerCase()} rasakan setelah sistemnya rapi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div className="p-7 rounded-2xl bg-red-500/5 border border-red-500/20">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">😓</span>
                <h3 className="font-bold text-lg text-red-500">Tanpa Sistem Digital</h3>
              </div>
              <ul className="space-y-3">
                {[
                  `${data.painPoint}`,
                  'Laporan keuangan dikerjakan manual di akhir bulan',
                  'Stok tidak bisa dipercaya — sering ada selisih',
                  'Kalau pemilik tidak ada, operasional kacau',
                  'Sulit tahu produk mana yang untung, mana yang tidak',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="p-7 rounded-2xl bg-brand-start/5 border border-brand-start/20">
              <div className="flex items-center gap-2 mb-5">
                <span className="text-lg">✅</span>
                <h3 className="font-bold text-lg text-brand-start">Dengan BisnisRapi</h3>
              </div>
              <ul className="space-y-3">
                {[
                  data.solution,
                  'Laporan keuangan terbentuk otomatis setiap hari',
                  'Stok akurat — setiap transaksi langsung terpotong',
                  'Pantau bisnis dari HP, di mana saja kapan saja',
                  'Lihat produk terlaris dan margin keuntungan real-time',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-brand-start mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── 6. HASIL NYATA ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hasil yang Bisa Kamu Ekspektasikan
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Berdasarkan pola umum yang kami lihat dari bisnis yang berpindah dari sistem manual ke digital.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            {[
              {
                metric: '< 10 menit',
                label: 'Waktu tutup kasir harian',
                before: 'Sebelumnya: 45–60 menit rekap manual',
                icon: Clock,
              },
              {
                metric: '~95%',
                label: 'Akurasi stok barang',
                before: 'Sebelumnya: Sering selisih, susah dilacak',
                icon: TrendingUp,
              },
              {
                metric: 'Real-time',
                label: 'Laporan omzet harian',
                before: 'Sebelumnya: Baru tahu angka saat akhir bulan',
                icon: BarChart3,
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 text-center hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-start to-brand-end flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-black text-foreground mb-1">{item.metric}</div>
                  <div className="font-semibold text-foreground mb-3">{item.label}</div>
                  <div className="text-xs text-muted-foreground bg-secondary/50 rounded-lg px-3 py-2">
                    {item.before}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Disclaimer honest */}
          <div className="flex items-start gap-3 p-5 bg-secondary/40 rounded-xl border border-border/50 max-w-2xl mx-auto text-sm text-muted-foreground">
            <ShieldCheck className="w-5 h-5 text-brand-start flex-shrink-0 mt-0.5" />
            <p>
              Angka di atas adalah estimasi umum berdasarkan perbandingan operasional manual vs. digital. 
              Hasil aktual bervariasi tergantung skala bisnis, konsistensi penggunaan, dan kondisi spesifik masing-masing usaha.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7. CARA KERJA ── */}
      <section className="py-20 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proses Onboarding yang Mudah
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              4 langkah terstruktur, didampingi tim kami dari awal sampai sistem berjalan lancar.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 relative">
            {/* Connecting line desktop */}
            <div className="hidden md:block absolute top-10 left-[14%] right-[14%] h-px bg-border -z-10" />

            {[
              {
                step: '1',
                title: 'Konsultasi Awal',
                desc: `Diskusi mendalam tentang alur bisnis ${data.name.toLowerCase()} Anda, masalah yang dihadapi, dan ekspektasi sistem.`,
              },
              {
                step: '2',
                title: 'Setup & Konfigurasi',
                desc: 'Tim engineer kami setup server cloud dan konfigurasi fitur sesuai kebutuhan spesifik bisnis Anda.',
              },
              {
                step: '3',
                title: 'Migrasi & Training',
                desc: 'Data lama dipindahkan ke sistem baru, lalu karyawan Anda ditraining sampai mahir menggunakannya.',
              },
              {
                step: '4',
                title: 'Go-Live & Support',
                desc: 'Sistem aktif beroperasi. Tim support kami siap membantu kapan pun ada kendala teknis.',
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-brand-start flex items-center justify-center text-2xl font-black text-brand-start mb-5 shadow-md shadow-brand-start/10 relative z-10">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary mb-4">
              <Headset className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Pertanyaan yang Sering Ditanyakan
            </h2>
            <p className="text-muted-foreground text-lg">
              Jawaban jujur sebelum Anda memutuskan untuk mulai.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {[
              {
                id: 'q1',
                q: `Apakah cocok untuk ${data.name.toLowerCase()} skala UMKM yang baru mulai?`,
                a: 'Sangat cocok. Justru mulai dari awal dengan sistem yang benar akan membangun fondasi data dan SOP yang kuat. Ketika bisnis berkembang, Anda sudah siap — tidak kaget lagi mengaturnya.',
              },
              {
                id: 'q2',
                q: 'Apakah karyawan perlu keahlian IT khusus?',
                a: 'Tidak perlu. Antarmuka BisnisRapi dirancang sangat intuitif. Rata-rata karyawan baru bisa mahir dalam 1–2 hari setelah training.',
              },
              {
                id: 'q3',
                q: `Bagaimana kalau alur bisnis ${data.name.toLowerCase()} saya sangat spesifik?`,
                a: 'Itu justru keunggulan kami. Kami menyediakan opsi kustomisasi penuh — modul bisa ditambah, diubah, atau disesuaikan agar mengikuti SOP Anda, bukan sebaliknya.',
              },
              {
                id: 'q4',
                q: 'Apakah data bisnis saya aman di cloud?',
                a: 'Keamanan data adalah prioritas utama kami. Server menggunakan enkripsi tingkat tinggi, backup harian otomatis, dan firewall canggih. Data Anda hanya bisa diakses oleh akun dengan izin yang valid.',
              },
              {
                id: 'q5',
                q: 'Berapa lama proses setup hingga sistem siap dipakai?',
                a: 'Untuk paket standar, biasanya 3–7 hari kerja termasuk migrasi data dan konfigurasi server. Jika ada kustomisasi tambahan, waktu akan diestimasikan sesuai tingkat kerumitannya.',
              },
            ].map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card px-6 rounded-2xl border border-border"
              >
                <AccordionTrigger className="text-left font-semibold text-base hover:no-underline py-5">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ── 9. FINAL CTA ── */}
      <section className="py-24 relative overflow-hidden bg-card border-t border-border">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-brand-start/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-background rounded-2xl border border-border shadow-lg mb-8 hover:rotate-3 transition-transform">
            <span className="text-4xl">{data.icon}</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-[1.15]">
            Saatnya Merapikan{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
              Bisnis {data.name} Anda
            </span>
          </h2>

          <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Ambil kendali penuh atas operasional bisnis Anda. Mulai langkah pertama hari ini — konsultasi gratis, tanpa komitmen biaya.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="https://wa.me/6285156358380"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-transform text-base shadow-2xl shadow-foreground/20 flex items-center justify-center gap-2 group"
            >
              Hubungi Kami Sekarang
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/solusi"
              className="px-10 py-5 bg-secondary text-secondary-foreground border border-border rounded-full font-semibold hover:bg-secondary/80 transition-all flex items-center justify-center gap-2 text-base"
            >
              Lihat Industri Lain
            </Link>
          </div>

          <p className="mt-6 text-muted-foreground text-sm">
            Respons cepat via WhatsApp. Konsultasi pertama gratis, tanpa komitmen.
          </p>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <Footer />
    </main>
  );
}
