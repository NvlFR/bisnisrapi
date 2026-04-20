import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | BisnisRapi",
  description: "Kebijakan privasi BisnisRapi – bagaimana kami mengumpulkan, menggunakan, dan melindungi data Anda.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Beranda
        </Link>

        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-bold uppercase tracking-[0.2em] mb-3" style={{
            background: "linear-gradient(to right, #59f6e3, #185cf8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">
            Terakhir diperbarui: 20 April 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-slate dark:prose-invert max-w-none space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">1. Informasi yang Kami Kumpulkan</h2>
            <p className="text-muted-foreground leading-relaxed">
              Ketika Anda menggunakan layanan atau menghubungi BisnisRapi, kami dapat mengumpulkan informasi berikut:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span><strong className="text-foreground">Informasi Identitas:</strong> Nama, alamat email, nomor telepon yang Anda berikan saat menghubungi kami.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span><strong className="text-foreground">Informasi Bisnis:</strong> Jenis usaha, kebutuhan sistem, dan informasi lain yang relevan untuk keperluan konsultasi.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span><strong className="text-foreground">Data Teknis:</strong> Alamat IP, jenis browser, halaman yang dikunjungi, dan data analitik dasar melalui layanan pihak ketiga (Vercel Analytics).</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">2. Cara Kami Menggunakan Data Anda</h2>
            <p className="text-muted-foreground leading-relaxed">
              Informasi yang kami kumpulkan digunakan untuk:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Merespons pertanyaan dan permintaan konsultasi Anda.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Memberikan layanan, pembaruan, dan informasi relevan terkait proyek Anda.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Meningkatkan kualitas website dan layanan kami.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Memenuhi kewajiban hukum yang berlaku.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">3. Perlindungan Data</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kami berkomitmen untuk menjaga keamanan data Anda. Langkah-langkah yang kami ambil meliputi:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Enkripsi data saat transit (HTTPS/TLS).</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Akses data dibatasi hanya untuk anggota tim yang berwenang.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Tidak menjual atau menyewakan data Anda kepada pihak ketiga.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">4. Berbagi Data dengan Pihak Ketiga</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kami tidak menjual data pribadi Anda. Kami hanya berbagi data dengan pihak ketiga dalam kondisi berikut:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span><strong className="text-foreground">Penyedia Layanan:</strong> Platform hosting (Vercel), analitik, dan alat komunikasi yang mendukung operasional kami.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span><strong className="text-foreground">Kewajiban Hukum:</strong> Jika diwajibkan oleh hukum atau perintah pengadilan.</span></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">5. Hak Anda</h2>
            <p className="text-muted-foreground leading-relaxed">
              Anda memiliki hak untuk:
            </p>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Mengakses data pribadi yang kami miliki tentang Anda.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Meminta koreksi data yang tidak akurat.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Meminta penghapusan data Anda.</span></li>
              <li className="flex items-start gap-2"><span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" /><span>Menarik persetujuan kapan saja.</span></li>
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Untuk menggunakan hak-hak tersebut, hubungi kami di{" "}
              <a href="mailto:hello@bisnisrapi.com" className="text-brand-end hover:underline font-medium">
                hello@bisnisrapi.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookie</h2>
            <p className="text-muted-foreground leading-relaxed">
              Website ini menggunakan cookie minimal untuk keperluan analitik dasar (Vercel Analytics) guna memahami cara pengguna berinteraksi dengan website kami. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">7. Perubahan Kebijakan</h2>
            <p className="text-muted-foreground leading-relaxed">
              Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu. Perubahan akan diumumkan di halaman ini dengan tanggal pembaruan terbaru. Penggunaan layanan kami setelah perubahan berarti Anda menyetujui kebijakan yang telah diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">8. Hubungi Kami</h2>
            <p className="text-muted-foreground leading-relaxed">
              Jika ada pertanyaan mengenai kebijakan privasi ini, silakan hubungi kami:
            </p>
            <div className="mt-4 p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
              <p className="font-semibold text-foreground">BisnisRapi</p>
              <p className="text-muted-foreground text-sm">Email: <a href="mailto:hello@bisnisrapi.com" className="text-brand-end hover:underline">hello@bisnisrapi.com</a></p>
              <p className="text-muted-foreground text-sm">WhatsApp: <a href="https://wa.me/6285199256640" className="text-brand-end hover:underline">+62 851 9925 6640</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
