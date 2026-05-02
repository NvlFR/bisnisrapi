import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/landing/navbar'
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
  metadataBase: new URL('https://bisnis-rapi.my.id'),

  title: 'BisnisRapi | Digitalisasi Operasional Bisnis Kamu Jadi Lebih Rapi & Terstruktur',

  description: 'Sistem manajemen bisnis digital untuk UMKM dan startup. Digitalisasi operasional, website profesional, dan e-commerce dalam satu sistem terpusat yang siap scale.',

  generator: 'v0.app',

  keywords: [
    'sistem bisnis digital',
    'web app manajemen bisnis',
    'software bisnis custom',
    'digitalisasi bisnis UMKM',
    'sistem operasional bisnis',
    'website bisnis profesional',
    'ecommerce custom indonesia',
    'bisnis rapi'
  ],

  authors: [{ name: 'BisnisRapi Team' }],

  openGraph: {
    title: 'BisnisRapi - Digitalisasi Operasional Bisnis Jadi Lebih Rapi & Efisien',

    description: 'Solusi sistem bisnis digital kustom untuk UMKM dan startup. Satukan operasional, data, dan workflow dalam satu sistem yang terstruktur dan scalable.',

    url: 'https://bisnis-rapi.my.id',
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

    title: 'BisnisRapi - Operasional Bisnis Lebih Rapi dengan Sistem Digital',

    description: 'Bukan sekadar tools, tapi sistem bisnis digital yang membantu operasional lebih terstruktur dan siap berkembang.',

    images: ['/og-image.png'],
  },

  icons: {
    icon: '/Logo.png',
    apple: '/Logo.png',
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
          </SmoothScroll>
        </FramerProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
