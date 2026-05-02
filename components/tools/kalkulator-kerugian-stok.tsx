"use client";

import { useState } from 'react';
import { ArrowRight, Calculator, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import { m } from 'framer-motion';

export function KalkulatorKerugianStokClient() {
  const [stokBulanan, setStokBulanan] = useState<number>(50000000);
  const [persentaseRusak, setPersentaseRusak] = useState<number>(3);

  const formatRupiah = (value: number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const rugiBulan = stokBulanan * (persentaseRusak / 100);
  const rugiTahun = rugiBulan * 12;

  return (
    <section className="py-12 md:py-20 px-4 relative overflow-hidden flex-grow">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[100px] -z-10" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-500 font-medium text-sm mb-6">
            <Calculator className="w-4 h-4" /> Tools Gratis BisnisRapi
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
            Kalkulator Kerugian Stok
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hitung berapa banyak uang yang terbuang sia-sia setiap tahunnya karena stok barang yang rusak, kedaluwarsa, atau hilang akibat pencatatan manual.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Input */}
          <m.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card p-6 md:p-8 rounded-3xl border border-border/50 shadow-sm"
          >
            <h3 className="text-xl font-bold mb-6">Input Data Anda</h3>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Nilai Rata-rata Stok per Bulan (Rp)
                </label>
                <input 
                  type="number"
                  value={stokBulanan}
                  onChange={(e) => setStokBulanan(Number(e.target.value))}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border focus:ring-2 focus:ring-primary focus:outline-none transition-all"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Contoh: 50000000
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Estimasi Stok Rusak / Hilang per Bulan (%)
                </label>
                <div className="flex items-center gap-4">
                  <input 
                    type="range"
                    min="0"
                    max="20"
                    step="0.5"
                    value={persentaseRusak}
                    onChange={(e) => setPersentaseRusak(Number(e.target.value))}
                    className="w-full accent-primary"
                  />
                  <span className="w-16 px-3 py-2 text-center rounded-lg bg-background border border-border font-medium">
                    {persentaseRusak}%
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Rata-rata UMKM kehilangan 2% - 5% stok setiap bulan.
                </p>
              </div>
            </div>
          </m.div>

          {/* Result Panel */}
          <m.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-primary/5 p-6 md:p-8 rounded-3xl border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-bl-full -z-10" />
            
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <AlertTriangle className="text-yellow-500 w-5 h-5" /> 
              Estimasi Kerugian Anda
            </h3>
            
            <div className="space-y-6">
              <div className="bg-background/80 p-5 rounded-2xl border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Potensi Kerugian per Bulan</p>
                <p className="text-2xl font-bold text-red-500">{formatRupiah(rugiBulan)}</p>
              </div>
              
              <div className="bg-background/80 p-5 rounded-2xl border border-border/50">
                <p className="text-sm text-muted-foreground mb-1">Potensi Kerugian per Tahun</p>
                <p className="text-4xl font-black text-red-500 tracking-tight">{formatRupiah(rugiTahun)}</p>
              </div>
              
              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground mb-4">
                  Jangan biarkan uang Anda menguap begitu saja. Sistem manajemen stok otomatis bisa menekan angka kerugian ini hingga 95%.
                </p>
                <Link 
                  href="/#cta"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-xl font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  Atasi Sekarang dengan BisnisRapi <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
