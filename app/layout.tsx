import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/landing/navbar'
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://bisnis-rapi.my.id'),
  title: 'BisnisRapi - Bisnis Lebih Rapi, Operasional Lebih Efisien',
  description: 'Kami membantu Anda memiliki sistem bisnis digital yang membuat pekerjaan lebih efisien dan scalable. Fokus pada sistem, bukan sekadar tampilan.',
  generator: 'v0.app',
  keywords: ['sistem bisnis digital', 'web app manajemen bisnis', 'software bisnis custom', 'digitalisasi bisnis', 'otomatisasi bisnis', 'bisnis rapi'],
  authors: [{ name: 'BisnisRapi Team' }],
  openGraph: {
    title: 'BisnisRapi - Bisnis Lebih Rapi, Operasional Lebih Efisien',
    description: 'Solusi sistem bisnis digital kustom untuk UMKM dan startup. Bangun operasional yang scalable dan efisien.',
    url: 'https://bisnis-rapi.my.id',
    siteName: 'BisnisRapi',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'BisnisRapi - Transformasi Digital Bisnis',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BisnisRapi - Bisnis Lebih Rapi, Operasional Lebih Efisien',
    description: 'Transformasi operasional bisnis Anda dengan sistem kustom yang efisien.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id" className="bg-background">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <Navbar />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
