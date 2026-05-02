import { getIndustryBySlug, industries } from '@/lib/industries';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { Footer } from '@/components/landing/footer';
import { Navbar } from '@/components/landing/navbar';
import { 
  ArrowRight, 
  CheckCircle2, 
  XCircle, 
  TrendingUp, 
  Clock, 
  ShieldCheck, 
  Zap, 
  Server, 
  PhoneCall,
  BarChart3,
  Users,
  Database,
  Lock,
  Headset,
  Smartphone
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

interface Props {
  params: Promise<{ industri: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { industri } = await params;
  const data = getIndustryBySlug(industri);
  
  if (!data) return {};

  const title = `Sistem Bisnis Digital & Kasir Terbaik Untuk ${data.name} | BisnisRapi`;
  const description = `Tinggalkan cara manual! Solusi digitalisasi sistem kasir dan manajemen operasional khusus untuk ${data.name}. Atasi masalah ${data.painPoint.toLowerCase()} dengan BisnisRapi.`;

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
    <main className="min-h-screen bg-background flex flex-col font-sans">
      <Navbar />

      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-brand-start/20 rounded-full blur-[120px] -z-10" />
        
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary border border-border text-foreground font-medium text-sm mb-8 animate-fade-in shadow-sm">
            <span className="text-2xl">{data.icon}</span> Solusi Digitalisasi {data.name}
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8 leading-[1.15]">
            Sistem Digital & Kasir Pintar <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
              Khusus Untuk {data.name}
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Berhenti membuang waktu dengan operasional manual yang rentan kesalahan. BisnisRapi hadir untuk mengintegrasikan seluruh alur kerja {data.name.toLowerCase()} Anda ke dalam satu ekosistem digital yang cerdas, rapi, dan otomatis. Skalakan bisnis Anda tanpa batasan.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href={`https://wa.me/6285156358380?text=Halo%20BisnisRapi,%20saya%20tertarik%20dengan%20sistem%20untuk%20${data.name}`}
              target="_blank"
              className="w-full sm:w-auto px-8 py-4 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg shadow-xl shadow-foreground/10"
            >
              Konsultasi Gratis <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="#problem"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground border border-border rounded-full font-bold hover:bg-secondary/80 transition-all flex items-center justify-center text-lg"
            >
              Pelajari Lebih Lanjut
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM & AGITATION SECTION */}
      <section id="problem" className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Realita Pahit di Bisnis {data.name}</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Banyak pengusaha {data.name.toLowerCase()} terjebak dalam operasional harian yang melelahkan. Jika Anda sering mengalami hal-hal di bawah ini, ini pertanda bisnis Anda butuh transformasi segera.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-8 bg-background rounded-3xl border border-red-500/20 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <XCircle className="w-10 h-10 text-red-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Masalah Klasik: {data.painPoint}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ini adalah keluhan nomor satu yang sering kami dengar dari pelaku usaha {data.name.toLowerCase()}. Ketidakmampuan mengatasi hal ini membuat operasional lambat, karyawan stres, dan pelanggan lari ke kompetitor.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-8 bg-background rounded-3xl border border-red-500/20 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <XCircle className="w-10 h-10 text-red-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Laporan Keuangan Buta</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Uang masuk dan keluar tidak tercatat dengan presisi. Di akhir bulan, Anda kesulitan mengetahui berapa laba bersih yang sebenarnya. Risiko kebocoran dana dari karyawan pun sangat tinggi karena minimnya pengawasan.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-background rounded-3xl border border-red-500/20 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <XCircle className="w-10 h-10 text-red-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Ketergantungan Ekstrem pada Owner</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Anda tidak bisa liburan tenang. Jika Anda tidak ada di tempat, operasional kacau. Bisnis yang seharusnya memberikan kebebasan waktu justru berubah menjadi penjara 24/7 bagi pemiliknya.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-background rounded-3xl border border-red-500/20 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <XCircle className="w-10 h-10 text-red-500 shrink-0 mt-1" />
              <div>
                <h3 className="text-2xl font-bold mb-3">Data Stok Berantakan & Hilang</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Stok di gudang tidak sesuai dengan catatan manual. Banyak barang yang expired, hilang, atau dibeli terlalu banyak karena minimnya visibilitas data inventaris yang akurat.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-2xl font-semibold text-foreground mb-4">Sudah saatnya Anda lepas dari masalah ini.</p>
          </div>
        </div>
      </section>

      {/* 3. SOLUTION & CORE APPROACH SECTION */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="inline-block mb-6 p-4 bg-brand-start/10 rounded-full">
            <ShieldCheck className="w-10 h-10 text-brand-start" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Masa Depan Bisnis {data.name} Ada di Sini</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            BisnisRapi bukan sekadar aplikasi kasir pasaran. Kami membangun ekosistem perangkat lunak yang disesuaikan secara khusus untuk merapikan alur kerja {data.name.toLowerCase()}.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border">
                <Database className="w-8 h-8 text-brand-start" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Database Terpusat</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Tidak ada lagi data yang tercecer. Mulai dari data transaksi, stok produk, absensi karyawan, hingga profil pelanggan loyal, semuanya terpusat dalam satu server cloud yang aman.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
                <span className="text-9xl">{data.icon}</span>
              </div>
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border relative z-10">
                <Zap className="w-8 h-8 text-brand-end" />
              </div>
              <h3 className="text-2xl font-bold mb-4 relative z-10">Otomatisasi Cerdas</h3>
              <p className="text-muted-foreground text-lg leading-relaxed relative z-10">
                Laporan keuangan yang terbentuk otomatis tiap detik, sinkronisasi stok antara gudang dan etalase, serta notifikasi peringatan dini ketika ada ketidakwajaran data.
              </p>
            </div>
            
            <div className="p-8 rounded-3xl bg-secondary/30 border border-border hover:bg-secondary/50 transition-colors">
              <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-border">
                <Smartphone className="w-8 h-8 text-brand-start" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Akses Darimana Saja</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Kelola bisnis dari rumah, saat liburan, atau saat meeting. Dashboard eksklusif kami memungkinkan owner memantau seluruh aktivitas cabang via smartphone secara real-time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPREHENSIVE FEATURES SECTION */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Fitur Canggih yang Mentransformasi Bisnis Anda</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Sistem kami dirancang untuk langsung memberikan dampak positif pada operasional dan efisiensi waktu Anda sejak hari pertama digunakan.
            </p>
          </div>

          <div className="space-y-12">
            {/* Fitur Industri */}
            <div className="flex flex-col md:flex-row gap-10 items-center p-10 bg-background rounded-[2.5rem] border border-border shadow-sm">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-start/10 text-brand-start font-bold text-sm mb-6 tracking-wider uppercase">
                  ⭐ Solusi Eksklusif
                </div>
                <h3 className="text-3xl font-bold mb-6">Spesialisasi {data.name}</h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Kami mengerti bahwa bisnis Anda unik. Oleh karena itu, sistem kami dilengkapi dengan alur kerja khusus: <span className="text-foreground font-semibold">"{data.solution}"</span>
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-brand-start" /> Menjawab langsung {data.painPoint.toLowerCase()}</li>
                  <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-brand-start" /> Disesuaikan dengan best-practice industri</li>
                </ul>
              </div>
              <div className="w-full md:w-[45%] aspect-square md:aspect-video bg-secondary rounded-3xl flex items-center justify-center text-8xl shadow-inner relative overflow-hidden">
                {data.icon}
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-start/10 to-transparent mix-blend-overlay" />
              </div>
            </div>

            {/* Fitur Dashboard */}
            <div className="flex flex-col md:flex-row-reverse gap-10 items-center p-10 bg-background rounded-[2.5rem] border border-border shadow-sm">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-500 font-bold text-sm mb-6 tracking-wider uppercase">
                  📊 Analitik
                </div>
                <h3 className="text-3xl font-bold mb-6">Dashboard Real-Time & Laporan Otomatis</h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Tidak perlu lagi merekap data di Excel. Setiap transaksi penjualan, pengeluaran kas, dan pergerakan inventaris langsung terkalkulasi secara otomatis menjadi grafik laporan yang mudah dibaca.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-blue-500" /> Pantau Omzet & Profit kapan saja</li>
                  <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-blue-500" /> Deteksi produk paling laris & barang mati</li>
                </ul>
              </div>
              <div className="w-full md:w-[45%] aspect-square md:aspect-video bg-secondary rounded-3xl flex items-center justify-center shadow-inner p-8">
                <div className="w-full h-full border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center text-muted-foreground">
                  <BarChart3 className="w-16 h-16 mb-4 opacity-50" />
                  <span className="font-mono">Realtime_Analytics_UI</span>
                </div>
              </div>
            </div>

            {/* Fitur Manajemen Karyawan */}
            <div className="flex flex-col md:flex-row gap-10 items-center p-10 bg-background rounded-[2.5rem] border border-border shadow-sm">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-500 font-bold text-sm mb-6 tracking-wider uppercase">
                  👥 SDM
                </div>
                <h3 className="text-3xl font-bold mb-6">Manajemen Karyawan & Hak Akses</h3>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Amankan aset bisnis Anda dari kecurangan. Berikan hak akses (role) yang berbeda untuk kasir, admin gudang, manager, dan owner. Segala aktivitas di dalam sistem akan tercatat log-nya.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-purple-500" /> Pembatasan edit/hapus transaksi</li>
                  <li className="flex items-center gap-3 text-lg"><CheckCircle2 className="w-6 h-6 text-purple-500" /> Laporan shift kasir presisi tanpa selisih</li>
                </ul>
              </div>
              <div className="w-full md:w-[45%] aspect-square md:aspect-video bg-secondary rounded-3xl flex items-center justify-center shadow-inner p-8">
                <div className="w-full h-full border-2 border-dashed border-muted-foreground/30 rounded-2xl flex flex-col items-center justify-center text-muted-foreground">
                  <Users className="w-16 h-16 mb-4 opacity-50" />
                  <span className="font-mono">Role_Management_UI</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA TENGAH - BOLD & PERSUASIVE */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-gradient-to-br from-brand-start to-brand-end rounded-[3rem] p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">Jangan Biarkan Masalah Operasional Menghambat Skala Bisnis Anda</h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Kompetitor Anda mungkin sudah beralih ke sistem digital. Jangan sampai tertinggal. Mari diskusi tentang kondisi {data.name.toLowerCase()} Anda saat ini, kami berikan rekomendasi setup yang paling ideal.
              </p>
              <Link 
                href="https://wa.me/6285156358380"
                target="_blank"
                className="inline-flex px-10 py-5 bg-background text-foreground rounded-full font-bold hover:scale-105 transition-transform items-center justify-center gap-3 text-xl shadow-xl"
              >
                Konsultasi Via WhatsApp <PhoneCall className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. BENEFIT (Hasil Nyata / ROI) */}
      <section className="py-24 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Investasi yang Menguntungkan</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Berpindah ke BisnisRapi bukan tentang pengeluaran biaya, melainkan investasi teknologi yang memberikan *Return of Investment* nyata bagi kelangsungan usaha Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-background p-10 rounded-3xl border border-border shadow-sm text-center hover:border-brand-start/50 transition-colors">
              <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Clock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Efisiensi Waktu 70%</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Pekerjaan administratif, pembukuan manual, dan pengecekan stok yang memakan waktu berjam-jam kini selesai secara otomatis dan real-time. Anda bisa fokus memikirkan strategi marketing.
              </p>
            </div>
            
            <div className="bg-background p-10 rounded-3xl border border-border shadow-sm text-center hover:border-blue-500/50 transition-colors">
              <div className="w-20 h-20 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <Lock className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Cegah Kebocoran Dana</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Selamat tinggal pada selisih laci kasir dan barang gudang yang hilang misterius. Tingkat keamanan sistem yang ketat memastikan tidak ada transaksi yang lolos dari pantauan Anda.
              </p>
            </div>

            <div className="bg-background p-10 rounded-3xl border border-border shadow-sm text-center hover:border-purple-500/50 transition-colors">
              <div className="w-20 h-20 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <TrendingUp className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Skalabilitas Mudah</h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Punya SOP yang terintegrasi di dalam sistem berarti Anda siap melakukan ekspansi. Membuka cabang ke-2 atau ke-10 menjadi jauh lebih mudah ketika pondasi sistem pusat sudah kuat.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TRUST / SOCIAL PROOF */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">Telah Dipercaya oleh Ratusan Pengusaha</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholder untuk logo client - in real app you'd use actual logos */}
            <div className="h-20 flex items-center justify-center font-bold text-2xl border-2 border-border rounded-xl">Brand 1</div>
            <div className="h-20 flex items-center justify-center font-bold text-2xl border-2 border-border rounded-xl">Brand 2</div>
            <div className="h-20 flex items-center justify-center font-bold text-2xl border-2 border-border rounded-xl">Brand 3</div>
            <div className="h-20 flex items-center justify-center font-bold text-2xl border-2 border-border rounded-xl">Brand 4</div>
          </div>
          <div className="mt-16 p-8 bg-secondary/50 rounded-3xl max-w-3xl mx-auto relative">
            <div className="text-6xl text-brand-start absolute top-4 left-6 opacity-20">"</div>
            <p className="text-xl md:text-2xl italic font-medium leading-relaxed mb-6 relative z-10">
              "Semenjak pakai sistem dari BisnisRapi, operasional {data.name.toLowerCase()} saya jadi sangat tertata. Nggak pusing lagi mikirin data hilang atau kasir yang error. Saya bisa pantau toko dari rumah sambil ngopi."
            </p>
            <div className="font-bold text-lg">— Salah satu klien {data.name} kami</div>
          </div>
        </div>
      </section>

      {/* 7. HOW IT WORKS / STEP BY STEP */}
      <section className="py-24 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">4 Langkah Mudah Go Digital</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Proses implementasi sistem dirancang agar terstruktur, tidak mengganggu operasional berjalan, dan didampingi penuh oleh tim profesional kami.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting line for desktop */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-1 bg-border -z-10" />
            
            {[
              { 
                step: '1', 
                title: 'Konsultasi Awal', 
                desc: `Kita berdiskusi mendalam tentang bagaimana flow bisnis ${data.name.toLowerCase()} Anda saat ini, masalah apa yang dihadapi, dan ekspektasi sistem.` 
              },
              { 
                step: '2', 
                title: 'Rancangan & Setup', 
                desc: 'Tim engineer kami akan men-setup arsitektur cloud, mengonfigurasi fitur, dan menyesuaikan modul (customization) sesuai hasil diskusi.' 
              },
              { 
                step: '3', 
                title: 'Migrasi & Training', 
                desc: 'Kami bantu memindahkan data lama Anda (produk, stok, pelanggan) ke sistem baru, lalu men-training karyawan Anda sampai mahir.' 
              },
              { 
                step: '4', 
                title: 'Go-Live & Support', 
                desc: 'Sistem siap beroperasi penuh! Jika ke depan ada kendala teknis, tim Customer Support kami siap sedia membantu Anda dengan cepat.' 
              },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center relative">
                <div className="w-24 h-24 rounded-full bg-background border-4 border-brand-start flex items-center justify-center text-3xl font-black text-brand-start mb-6 shadow-lg shadow-brand-start/20">
                  {item.step}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. COMPREHENSIVE FAQ SECTION */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center p-4 bg-secondary rounded-full mb-6">
              <Headset className="w-8 h-8 text-foreground" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Pertanyaan Seputar Sistem Kami</h2>
            <p className="text-xl text-muted-foreground">Menjawab keraguan Anda sebelum memulai transisi ke ekosistem digital BisnisRapi.</p>
          </div>

          <Accordion type="single" collapsible className="w-full space-y-6">
            <AccordionItem value="q1" className="bg-card px-8 rounded-3xl border border-border shadow-sm">
              <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8">
                Apakah sistem ini cocok untuk {data.name.toLowerCase()} skala UMKM yang baru mulai?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                Sangat cocok! Justru dengan memakai sistem sejak awal berdiri, Anda telah membangun fondasi data dan SOP operasional yang benar. Ketika nanti orderan Anda meledak, Anda sudah tidak kaget lagi mengaturnya karena semua by-system.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="q2" className="bg-card px-8 rounded-3xl border border-border shadow-sm">
              <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8">
                Apakah karyawan saya butuh keahlian IT khusus untuk menggunakannya?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                Tentu tidak. Antarmuka (UI/UX) BisnisRapi dirancang dengan sangat intuitif agar semudah mungkin digunakan oleh orang awam atau karyawan baru sekalipun. Waktu orientasi (learning curve) sistem ini sangat singkat, rata-rata karyawan mahir dalam 1-2 hari.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="q3" className="bg-card px-8 rounded-3xl border border-border shadow-sm">
              <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8">
                Bagaimana jika alur bisnis {data.name.toLowerCase()} saya sangat spesifik dan berbeda dari yang lain?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                Itulah keunggulan utama kami dibandingkan software berlangganan biasa. Kami menyediakan opsi kustomisasi (custom development) di mana modul sistem bisa di-tweak, ditambah, atau dikurangi agar benar-benar mengikuti SOP perusahaan Anda, bukan sebaliknya.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="q4" className="bg-card px-8 rounded-3xl border border-border shadow-sm">
              <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8">
                Apakah data bisnis saya aman tersimpan di cloud?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                Keamanan data adalah prioritas tertinggi kami. Server kami di-hosting pada infrastruktur cloud tier-1 dengan enkripsi tingkat tinggi, backup harian otomatis, dan firewall canggih untuk mencegah akses tidak sah. Data Anda 100% aman dan hanya bisa diakses oleh akun dengan hak izin yang valid.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q5" className="bg-card px-8 rounded-3xl border border-border shadow-sm">
              <AccordionTrigger className="text-left font-bold text-xl hover:no-underline py-8">
                Berapa lama proses setup hingga sistem siap dipakai di lapangan?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-lg leading-relaxed pb-8">
                Untuk setup paket standar, biasanya memakan waktu 3-7 hari kerja termasuk migrasi data master (produk, harga, stok awal) dan pengaturan server. Namun, jika ada permintaan kustomisasi fitur tambahan, waktu penyelesaian akan diestimasikan kembali sesuai tingkat kerumitannya.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* 10. FINAL CTA / STRONG CLOSING */}
      <section className="py-32 relative overflow-hidden bg-card border-t border-border">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-start/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-4 max-w-4xl text-center relative z-10">
          <div className="inline-flex items-center justify-center p-6 bg-background rounded-3xl border border-border shadow-xl mb-10 transform -rotate-3 hover:rotate-0 transition-transform">
            <span className="text-6xl">{data.icon}</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1]">
            Saatnya Merapikan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-start to-brand-end">
              Bisnis {data.name} Anda
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Mulai langkah besar Anda hari ini. Ambil kendali penuh atas operasional bisnis, minimalkan risiko kerugian, dan bersiaplah untuk tumbuh lebih pesat dari sebelumnya.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              href="https://wa.me/6285156358380"
              target="_blank"
              className="px-12 py-6 bg-foreground text-background rounded-full font-bold hover:scale-105 transition-transform text-xl shadow-2xl shadow-foreground/20 flex items-center justify-center gap-3 group"
            >
              Hubungi Kami Sekarang 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
          
          <p className="mt-8 text-muted-foreground text-sm">
            Respons cepat via WhatsApp. Tidak ada komitmen biaya untuk sesi konsultasi pertama.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
