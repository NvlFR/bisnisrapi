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
  metadataBase: new URL('https://bisnisrapi.com'),

  title: {
    default: 'BisnisRapi | Sistem Manajemen Bisnis Digital untuk UMKM Indonesia',
    template: '%s | BisnisRapi',
  },

  description: 'Digitalisasi operasional bisnis UMKM dengan sistem kasir, manajemen stok, dan laporan otomatis. Solusi custom untuk 100+ industri di Indonesia. Konsultasi gratis!',

  keywords: [
    'sistem bisnis digital',
    'aplikasi kasir UMKM',
    'software manajemen bisnis',
    'digitalisasi bisnis Indonesia',
    'sistem operasional bisnis',
    'website bisnis profesional',
    'toko online custom',
    'BisnisRapi',
    'sistem kasir Indonesia',
    'software UMKM',
  ],

  authors: [{ name: 'BisnisRapi Team' }],

  openGraph: {
    title: 'BisnisRapi - Sistem Manajemen Bisnis Digital untuk UMKM Indonesia',
    description: 'Digitalisasi operasional bisnis UMKM dengan sistem kasir, manajemen stok, dan laporan otomatis. Solusi custom untuk 100+ industri. Konsultasi gratis!',
    url: 'https://bisnisrapi.com',
    siteName: 'BisnisRapi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BisnisRapi - Sistem Bisnis Digital Terpusat',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
    title: 'BisnisRapi - Sistem Manajemen Bisnis Digital UMKM',
    description: 'Digitalisasi operasional bisnis dengan sistem kasir, stok, dan laporan otomatis untuk 100+ industri di Indonesia.',
    images: ['/og-image.png'],
  },

  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
  },

  alternates: {
    canonical: 'https://bisnisrapi.com',
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
