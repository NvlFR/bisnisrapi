import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/landing/navbar'
import { Footer } from '@/components/landing/footer'
import { FramerProvider } from '@/components/providers/framer-provider'
import { SmoothScroll } from '@/components/providers/smooth-scroll'
import Script from 'next/script'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bisnisrapi.my.id'),

  title: {
    default: 'BisnisRapi | Aplikasi Kasir & Sistem Manajemen Bisnis UMKM Indonesia',
    template: '%s | BisnisRapi',
  },

  description: 'Aplikasi kasir untuk UMKM, sistem kasir digital, dan software manajemen stok otomatis. Digitalisasi operasional bisnis Anda — pantau dari HP, laporan keuangan otomatis, stok akurat. Konsultasi gratis!',

  keywords: [
    // Tier 1 — Utama
    'aplikasi kasir untuk umkm',
    'aplikasi kasir untuk bisnis toko',
    'sistem kasir digital umkm',
    'aplikasi pencatatan usaha',
    'aplikasi pencatatan pengeluaran dan pemasukan',
    'digitalisasi bisnis umkm',
    'aplikasi pencatatan umkm',
    // Tier 2 — Tambahan
    'aplikasi kasir pos',
    'software manajemen stok umkm',
    'pantau bisnis dari hp',
    'laporan keuangan otomatis usaha kecil',
    'cara merapikan operasional bisnis',
    'aplikasi stok barang umkm',
    'dashboard bisnis umkm',
    'sistem manajemen bisnis kecil',
    // Keyword masalah
    'kasir sering selisih solusi',
    'stok barang sering selisih solusi',
    'bisnis tidak bisa ditinggal solusi',
    'cara mengontrol bisnis dari hp',
    'laporan keuangan umkm otomatis',
    // Keyword solusi
    'jasa digitalisasi bisnis umkm',
    'software bisnis custom indonesia',
    'sistem bisnis autopilot indonesia',
    'BisnisRapi',
  ],

  authors: [{ name: 'BisnisRapi Team' }],

  openGraph: {
    title: 'BisnisRapi - Aplikasi Kasir & Sistem Manajemen Bisnis UMKM Indonesia',
    description: 'Aplikasi kasir untuk UMKM, manajemen stok otomatis, dan laporan keuangan real-time. Pantau bisnis dari HP. Solusi custom untuk 100+ industri. Konsultasi gratis!',
    url: 'https://bisnisrapi.my.id',
    siteName: 'BisnisRapi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BisnisRapi - Aplikasi Kasir & Sistem Manajemen Bisnis UMKM',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BisnisRapi - Aplikasi Kasir & Sistem Manajemen Bisnis UMKM',
    description: 'Sistem kasir digital, manajemen stok otomatis, dan laporan keuangan real-time untuk 100+ industri UMKM Indonesia.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: [
      { url: '/Logo.png', type: 'image/png' },
      { url: '/Logo.webp', type: 'image/webp' },
    ],
    shortcut: '/Logo.png',
    apple: '/Logo.png',
  },

  alternates: {
    canonical: 'https://bisnisrapi.my.id',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <head>
        <link rel="preconnect" href="https://wa.me" />
        <link rel="dns-prefetch" href="https://wa.me" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-B068PV07RS"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-B068PV07RS');
          `}
        </Script>

        <FramerProvider>
          <SmoothScroll>
            <Navbar />
            {children}
            <Footer />
          </SmoothScroll>
        </FramerProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
