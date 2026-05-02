export interface Industry {
  slug: string;
  name: string;
  icon: string;
  painPoint: string;
  solution: string;
}

export const industries: Industry[] = [
  {
    slug: 'kedai-kopi',
    name: 'Kedai Kopi & Cafe',
    icon: '☕',
    painPoint: 'Sering kewalahan ngatur stok bahan baku (kopi, susu) dan kasir yang lemot saat jam sibuk.',
    solution: 'Sistem POS super cepat dengan manajemen inventaris resep otomatis, bikin operasional cafe lu jalan sendiri.'
  },
  {
    slug: 'toko-baju',
    name: 'Toko Baju & Fashion',
    icon: '👕',
    painPoint: 'Pusing ngurus varian ukuran, warna, dan stok barang mati yang numpuk di gudang.',
    solution: 'Katalog digital terintegrasi kasir, pantau pergerakan tiap varian ukuran & warna secara real-time.'
  },
  {
    slug: 'bengkel',
    name: 'Bengkel & Otomotif',
    icon: '🔧',
    painPoint: 'Susah ngelacak riwayat servis pelanggan, stok sparepart tercecer, dan antrean nggak jelas.',
    solution: 'Catatan riwayat servis kendaraan digital, reminder ganti oli otomatis, dan integrasi stok sparepart.'
  },
  {
    slug: 'apotek',
    name: 'Apotek & Klinik',
    icon: '💊',
    painPoint: 'Pusing mantau tanggal kedaluwarsa (expired date) ribuan obat dan stok minimum.',
    solution: 'Sistem POS dengan notifikasi otomatis untuk obat hampir kedaluwarsa & laporan mutasi stok presisi.'
  },
  {
    slug: 'minimarket',
    name: 'Minimarket & Retail',
    icon: '🛒',
    painPoint: 'Sering ada selisih uang kas dan barang hilang karena nggak ada pencatatan yang rapi.',
    solution: 'Barcode scanner support, laporan shift otomatis, dan deteksi pergerakan uang kas tanpa celah.'
  },
  {
    slug: 'salon',
    name: 'Salon & Barbershop',
    icon: '✂️',
    painPoint: 'Jadwal booking tabrakan, ribet hitung komisi kapster, dan susah jaga loyalitas pelanggan.',
    solution: 'Sistem booking online, hitung komisi otomatis tiap kapster, dan database pelanggan buat kirim promo diskon.'
  },
  {
    slug: 'laundry',
    name: 'Jasa Laundry',
    icon: '🧺',
    painPoint: 'Baju pelanggan tertukar, nota hilang, dan susah melacak cucian udah selesai atau belum.',
    solution: 'Tracking status cucian via WhatsApp, nota digital, dan manajemen rak otomatis.'
  },
  {
    slug: 'toko-bangunan',
    name: 'Toko Bangunan',
    icon: '🏗️',
    painPoint: 'Hutang pelanggan numpuk susah ditagih dan barang besar susah dicatat stoknya.',
    solution: 'Manajemen piutang pelanggan (kasbon) dengan pengingat tagihan otomatis & laporan aset terkini.'
  },
  {
    slug: 'distributor',
    name: 'Distributor & Grosir',
    icon: '📦',
    painPoint: 'Tim sales lapangan ribet catat orderan manual, sering salah kirim barang ke agen.',
    solution: 'Aplikasi mobile untuk tim sales, integrasi order langsung ke gudang, dan tier harga grosir otomatis.'
  },
  {
    slug: 'resto',
    name: 'Restoran & Rumah Makan',
    icon: '🍲',
    painPoint: 'Pesanan di meja sering salah masuk ke dapur, bahan baku banyak terbuang (waste).',
    solution: 'Aplikasi order QR menu di meja, langsung nge-print ke dapur, dan laporan waste bahan baku.'
  },
  {
    slug: 'petshop',
    name: 'Petshop & Klinik Hewan',
    icon: '🐶',
    painPoint: 'Ribet bedain stok makanan hewan, obat, aksesoris, serta jadwal grooming atau vaksin.',
    solution: 'Pencatatan varian produk super lengkap dan fitur reminder jadwal grooming pelanggan setia.'
  },
  {
    slug: 'toko-elektronik',
    name: 'Toko Elektronik & Gadget',
    icon: '📱',
    painPoint: 'Sering kewalahan ngelacak nomor seri (SN) dan garansi tiap barang yang terjual.',
    solution: 'Fitur input & tracking Serial Number (SN) di setiap struk, gampang cek garansi kapan aja.'
  },
  {
    slug: 'bahan-kue',
    name: 'Toko Bahan Kue',
    icon: '🍰',
    painPoint: 'Banyak bahan curah yang harus ditimbang, stok gramasi sering nggak sinkron dengan catatan kasir.',
    solution: 'Dukungan satuan dinamis (gram, kg, ml) dan resep konversi otomatis saat barang terjual.'
  },
  {
    slug: 'frozen-food',
    name: 'Toko Frozen Food',
    icon: '🧊',
    painPoint: 'Stok barang banyak yang mirip, susah ngatur stok minimum biar nggak kehabisan barang fast-moving.',
    solution: 'Peringatan stok menipis otomatis (low-stock alert) dan manajemen barcode produk yang mudah.'
  },
  {
    slug: 'kosmetik',
    name: 'Toko Kosmetik & Skincare',
    icon: '💄',
    painPoint: 'Banyak brand dan varian shade, bingung cari barang saat pelanggan tanya ketersediaan.',
    solution: 'Pencarian produk kilat dengan filter kategori & brand, plus integrasi poin member pelanggan.'
  },
  {
    slug: 'toko-atk',
    name: 'Toko Buku & Alat Tulis (ATK)',
    icon: '📚',
    painPoint: 'Ribuan item kecil-kecil sering hilang atau lupa input, stok riil dan sistem nggak pernah klop.',
    solution: 'Sistem scan barcode super cepat dan fitur opname stok (stock opname) tanpa harus tutup toko.'
  },
  {
    slug: 'sembako',
    name: 'Grosir Sembako',
    icon: '🍚',
    painPoint: 'Fluktuasi harga modal tiap hari bikin pusing nentuin harga jual grosir dan ecer.',
    solution: 'Update harga massal dalam 1 klik dan sistem tier harga (ecer, grosir, member) otomatis.'
  },
  {
    slug: 'konter-pulsa',
    name: 'Konter Pulsa & Aksesoris',
    icon: '⚡',
    painPoint: 'Uang fisik dari jual pulsa dan aksesoris sering campur, laba harian susah dihitung.',
    solution: 'Pemisahan laporan kas penjualan fisik dan digital, ketahuan untung bersih tiap hari.'
  },
  {
    slug: 'baby-shop',
    name: 'Toko Perlengkapan Bayi',
    icon: '🍼',
    painPoint: 'Sering kasih diskon manual ke ibu-ibu langganan, laba malah jadi minus tanpa sadar.',
    solution: 'Sistem program loyalitas (member) otomatis diskon tanpa harus input manual tiap transaksi.'
  },
  {
    slug: 'toko-sepeda',
    name: 'Toko & Servis Sepeda',
    icon: '🚲',
    painPoint: 'Campur aduk antara penjualan part, unit sepeda, dan ongkos jasa servis mekanik.',
    solution: 'Sistem pisah item barang dan jasa, gampang bagi hasil atau komisi untuk mekanik.'
  },
  {
    slug: 'optik',
    name: 'Optik Kacamata',
    icon: '👓',
    painPoint: 'Data resep mata pelanggan sering hilang karena dicatat di buku manual.',
    solution: 'Simpan resep mata (minus, silinder) langsung di profil pelanggan, next order tinggal panggil data.'
  },
  {
    slug: 'florist',
    name: 'Florist (Toko Bunga)',
    icon: '💐',
    painPoint: 'Terima order custom, DP masuk, tapi lupa jadwal kirim atau salah alamat penerima.',
    solution: 'Manajemen pesanan custom (Pre-order), pencatatan DP, dan reminder jadwal pengiriman.'
  },
  {
    slug: 'toko-emas',
    name: 'Toko Perhiasan & Emas',
    icon: '💍',
    painPoint: 'Harga emas naik turun tiap jam, capek ngubah harga di setiap display produk.',
    solution: 'Fitur harga fluktuatif berdasarkan persentase atau harga dasar pasaran saat itu juga.'
  },
  {
    slug: 'car-wash',
    name: 'Cuci Mobil & Motor',
    icon: '🚗',
    painPoint: 'Mobil yang masuk antrean suka terlewat, ngeribetin kalau lagi ramai di akhir pekan.',
    solution: 'Sistem antrean digital berdasarkan pelat nomor kendaraan, dan struk antrean otomatis.'
  },
  {
    slug: 'gym-fitness',
    name: 'Gym & Studio Fitness',
    icon: '🏋️',
    painPoint: 'Ribet mantau masa aktif membership anggota dan jualan suplemen secara terpisah.',
    solution: 'Satu sistem untuk kelola masa aktif member, akses masuk, dan POS kantin/suplemen.'
  },
  {
    slug: 'percetakan',
    name: 'Digital Printing & Fotocopy',
    icon: '🖨️',
    painPoint: 'Banyak order file masuk, DP belum lunas, hasil cetakan diambil orang lain.',
    solution: 'Nota digital tracking progres cetak, pencatatan termin pembayaran (DP & Pelunasan).'
  },
  {
    slug: 'toko-buah',
    name: 'Toko Buah Segar',
    icon: '🍎',
    painPoint: 'Susah mantau buah mana yang udah mau busuk biar bisa cepat didiskon (clearance).',
    solution: 'Manajemen masa simpan produk dan promo bundling otomatis untuk produk hampir layu.'
  },
  {
    slug: 'toko-pancing',
    name: 'Toko Alat Pancing',
    icon: '🎣',
    painPoint: 'Barang printilan kecil (kail, pelampung) sering hilang, susah di-track manual.',
    solution: 'Stok opname super gampang dengan scan barcode via HP, cocok buat item-item kecil.'
  },
  {
    slug: 'studio-foto',
    name: 'Studio Fotografi',
    icon: '📸',
    painPoint: 'Jadwal sesi foto bentrok, bingung ngatur paket foto + cetak pigura.',
    solution: 'Kalender booking terintegrasi dan sistem invoice otomatis lengkap dengan paket custom.'
  },
  {
    slug: 'toko-daging',
    name: 'Meat Shop & Toko Daging',
    icon: '🥩',
    painPoint: 'Sisa potongan daging (trimming) bingung dicatat sebagai stok apa, malah bikin rugi.',
    solution: 'Fitur konversi produk turunan (daging utuh ke slice/mince) dengan HPP otomatis menyesuaikan.'
  },
  {
    slug: 'klinik-gigi',
    name: 'Klinik Dokter Gigi',
    icon: '🦷',
    painPoint: 'Pasien sering lupa jadwal kontrol, riwayat rekam medis berantakan di map kertas.',
    solution: 'Digitalisasi rekam medis pasien terintegrasi dengan reminder WhatsApp otomatis jadwal kontrol.'
  },
  {
    slug: 'toko-sepatu',
    name: 'Toko Sepatu & Tas',
    icon: '👟',
    painPoint: 'Punya banyak cabang, bingung mutasi stok sepatu kalau di toko A habis tapi di toko B numpuk.',
    solution: 'Sistem multi-cabang terpusat, gampang request mutasi antar toko dalam hitungan detik.'
  },
  {
    slug: 'toko-oleh-oleh',
    name: 'Pusat Oleh-oleh',
    icon: '🎁',
    painPoint: 'Jam sibuk rombongan bus datang, kasir kewalahan input, antrean mengular panjang.',
    solution: 'Kasir mode cepat dengan shortcut tombol, transaksi nggak sampai 10 detik per pelanggan.'
  },
  {
    slug: 'klinik-kecantikan',
    name: 'Klinik Kecantikan',
    icon: '✨',
    painPoint: 'Sulit melacak pemakaian bahan treatment krim oleh dokter dan penjualan produk skincare.',
    solution: 'Pemotongan stok bahan otomatis tiap tindakan treatment (BOM) & rekap komisi dokter presisi.'
  },
  {
    slug: 'rental-kendaraan',
    name: 'Rental Mobil & Motor',
    icon: '🚙',
    painPoint: 'Susah melacak unit kendaraan mana yang lagi disewa, kapan balik, dan denda keterlambatan.',
    solution: 'Sistem ketersediaan kalender unit, pencatatan deposit uang, dan denda perpanjangan otomatis.'
  },
  {
    slug: 'katering',
    name: 'Katering & Warteg',
    icon: '🍱',
    painPoint: 'Sering keliru hitung kebutuhan bahan belanja mentah dari orderan katering harian yang masuk.',
    solution: 'Kalkulator kebutuhan belanja bahan baku otomatis berdasarkan jumlah pesanan porsi harian.'
  },
  {
    slug: 'toko-kaca',
    name: 'Toko Kaca & Aluminium',
    icon: '🪟',
    painPoint: 'Menghitung harga kaca berdasarkan ukuran (P x L) secara manual rentan salah hitung.',
    solution: 'Fitur input ukuran meter persegi (m2) di kasir yang otomatis menghitung total harga.'
  },
  {
    slug: 'toko-mainan',
    name: 'Toko Mainan Anak',
    icon: '🧸',
    painPoint: 'Harga beda-beda tiap pelanggan tergantung nawar, susah menetapkan harga pas.',
    solution: 'Sistem limit diskon kasir, biar karyawan nggak sembarangan kasih harga terlalu murah.'
  },
  {
    slug: 'toko-plastik',
    name: 'Toko Plastik & Kemasan',
    icon: '🛍️',
    painPoint: 'Jual barang dalam hitungan pak, slop, dan ecer bikin bingung nentuin modal dasar (HPP).',
    solution: 'Sistem multi-satuan (PCS, PACK, KARTON) dengan HPP yang menyesuaikan konversi otomatis.'
  }
];

export function getIndustryBySlug(slug: string): Industry | undefined {
  return industries.find((i) => i.slug === slug);
}
