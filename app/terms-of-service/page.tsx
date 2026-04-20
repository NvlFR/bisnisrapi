import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | BisnisRapi",
  description: "Syarat dan ketentuan penggunaan layanan BisnisRapi.",
};

export default function TermsOfServicePage() {
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
          <p
            className="text-sm font-bold uppercase tracking-[0.2em] mb-3"
            style={{
              background: "linear-gradient(to right, #59f6e3, #185cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Legal
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">
            Terakhir diperbarui: 20 April 2025
          </p>
        </div>

        {/* Intro */}
        <div className="mb-10 p-6 rounded-2xl bg-secondary/50 border border-border">
          <p className="text-muted-foreground leading-relaxed text-sm">
            Dengan menggunakan layanan BisnisRapi, Anda menyetujui syarat dan
            ketentuan berikut. Silakan baca dengan seksama sebelum menggunakan
            layanan kami.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              1. Definisi
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  <strong className="text-foreground">"BisnisRapi"</strong>{" "}
                  merujuk pada tim, brand, dan layanan yang beroperasi di bawah
                  domain bisnisrapi.my.id.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  <strong className="text-foreground">"Klien"</strong> merujuk
                  pada individu atau entitas bisnis yang menggunakan layanan
                  BisnisRapi.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  <strong className="text-foreground">"Layanan"</strong>{" "}
                  mencakup pembuatan website, sistem informasi, aplikasi bisnis,
                  dan layanan terkait lainnya yang ditawarkan oleh BisnisRapi.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              2. Penggunaan Layanan
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Dengan menggunakan layanan kami, Anda setuju untuk:
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Memberikan informasi yang akurat dan lengkap terkait kebutuhan
                  proyek Anda.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Tidak menggunakan layanan kami untuk tujuan ilegal atau yang
                  melanggar hak pihak ketiga.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Memberikan respons dan persetujuan tepat waktu selama proses
                  pengerjaan proyek.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              3. Proses & Pembayaran
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Setiap proyek dimulai dengan sesi konsultasi gratis untuk
                  mengidentifikasi kebutuhan dan ruang lingkup pekerjaan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Estimasi harga dan timeline akan diberikan secara tertulis
                  sebelum pekerjaan dimulai.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Pembayaran dilakukan sesuai dengan skema yang disepakati
                  (umumnya 50% di awal dan 50% setelah proyek selesai).
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Perubahan ruang lingkup di luar yang disepakati dapat
                  mempengaruhi harga dan timeline proyek.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              4. Hak Kekayaan Intelektual
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Setelah pembayaran lunas, klien memiliki hak penuh atas
                  produk akhir yang dikembangkan khusus untuk mereka.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  BisnisRapi berhak menggunakan proyek yang telah selesai
                  sebagai portofolio, kecuali ada perjanjian kerahasiaan (NDA)
                  yang ditandatangani.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Framework, library, dan alat open-source yang digunakan tetap
                  tunduk pada lisensi masing-masing.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              5. Garansi & Dukungan
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  BisnisRapi memberikan garansi perbaikan bug selama{" "}
                  <strong className="text-foreground">30 hari</strong> setelah
                  proyek diserahkan, untuk bug yang timbul dari pengerjaan kami.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Garansi tidak mencakup kerusakan yang disebabkan oleh
                  perubahan yang dilakukan oleh klien atau pihak ketiga setelah
                  serah terima.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Layanan dukungan lanjutan tersedia dengan biaya tambahan yang
                  disepakati secara terpisah.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              6. Pembatasan Tanggung Jawab
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BisnisRapi tidak bertanggung jawab atas kerugian tidak langsung,
              insidental, atau konsekuensial yang timbul dari penggunaan atau
              ketidakmampuan menggunakan layanan kami, termasuk namun tidak
              terbatas pada kehilangan data, kehilangan pendapatan, atau
              gangguan bisnis. Total tanggung jawab kami tidak melebihi jumlah
              yang dibayarkan oleh klien untuk layanan terkait.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              7. Kebijakan Pembatalan
            </h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Klien dapat membatalkan proyek kapan saja dengan pemberitahuan
                  tertulis.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  Pembayaran yang telah dilakukan tidak dapat dikembalikan,
                  namun klien berhak menerima semua hasil pekerjaan yang telah
                  diselesaikan hingga saat pembatalan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-brand-end flex-shrink-0" />
                <span>
                  BisnisRapi berhak membatalkan atau menangguhkan proyek jika
                  klien melanggar syarat dan ketentuan ini.
                </span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              8. Hukum yang Berlaku
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Syarat dan ketentuan ini diatur oleh dan ditafsirkan sesuai dengan
              hukum Republik Indonesia. Setiap perselisihan yang timbul akan
              diselesaikan melalui musyawarah mufakat. Jika tidak tercapai
              kesepakatan, perselisihan akan diselesaikan melalui pengadilan
              yang berwenang di Indonesia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              9. Perubahan Syarat
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              BisnisRapi berhak mengubah syarat dan ketentuan ini kapan saja.
              Perubahan akan berlaku setelah diterbitkan di halaman ini.
              Penggunaan layanan kami setelah perubahan berarti Anda menyetujui
              syarat yang telah diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-foreground mb-4">
              10. Hubungi Kami
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Untuk pertanyaan tentang syarat dan ketentuan ini, silakan
              hubungi kami:
            </p>
            <div className="p-6 rounded-2xl bg-secondary/50 border border-border space-y-2">
              <p className="font-semibold text-foreground">BisnisRapi</p>
              <p className="text-muted-foreground text-sm">
                Email:{" "}
                <a
                  href="mailto:hello@bisnisrapi.com"
                  className="text-brand-end hover:underline"
                >
                  hello@bisnisrapi.com
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                WhatsApp:{" "}
                <a
                  href="https://wa.me/6285199256640"
                  className="text-brand-end hover:underline"
                >
                  +62 851 9925 6640
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
