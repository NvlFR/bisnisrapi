import { Metadata } from 'next';
import { Footer } from '@/components/landing/footer';
import { KalkulatorKerugianStokClient } from '@/components/tools/kalkulator-kerugian-stok';

export const metadata: Metadata = {
  title: 'Kalkulator Kerugian Stok Bisnis | BisnisRapi',
  description: 'Hitung estimasi kerugian stok barang tahunan bisnis Anda karena barang rusak, hilang, atau kadaluwarsa akibat pencatatan manual.',
  openGraph: {
    title: 'Kalkulator Kerugian Stok Bisnis | BisnisRapi',
    description: 'Hitung estimasi kerugian stok barang tahunan bisnis Anda karena barang rusak, hilang, atau kadaluwarsa akibat pencatatan manual.',
    type: 'website',
  },
};

export default function KalkulatorKerugianStokPage() {
  return (
    <main className="min-h-screen bg-background flex flex-col pt-24">
      <KalkulatorKerugianStokClient />
      <Footer />
    </main>
  );
}
