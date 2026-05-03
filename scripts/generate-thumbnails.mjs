import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicBlogDir = path.join(__dirname, '..', 'public', 'blog');

// Slugs yang sudah punya thumbnail (skip)
const existing = new Set([
  'aplikasi-bisnis-custom-vs-saas',
  'bisnis-lancar-autopilot',
  'cara-digitalisasi-bisnis-umkm',
  'cara-kelola-stok-barang',
  'cara-scale-up-bisnis-umkm',
  'data-bisnis-berantakan-cara-merapikan',
  'kenapa-bisnis-butuh-website-profesional',
  'kenapa-digitalisasi-bisnis-wajib',
  'kesalahan-go-digital',
  'keuntungan-database-pelanggan',
  'manfaat-website-profesional',
  'otomasi-bisnis-workflow',
  'pentingnya-sistem-pos',
  'scale-up-dengan-teknologi',
  'sistem-operasional-bisnis-sop',
  'software-manajemen-bisnis-umkm',
  'tanda-bisnis-butuh-sistem',
  'tips-memilih-software-bisnis',
  'toko-online-custom-vs-marketplace',
  'transformasi-digital-startup-indonesia',
]);

// Mapping slug → { emoji, label, gradient }
const themes = {
  // Keuangan
  'cara-baca-laporan-keuangan-umkm':    { emoji: '📊', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'cara-hitung-hpp-produk':             { emoji: '🧮', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'manajemen-cashflow-umkm':            { emoji: '💰', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'manajemen-piutang-usaha':            { emoji: '📋', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'cara-buat-invoice-profesional':      { emoji: '🧾', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'cara-buat-laporan-penjualan-harian': { emoji: '📈', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'cara-buat-laporan-bulanan-bisnis':   { emoji: '📅', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'cara-hitung-break-even-point':       { emoji: '⚖️', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'cara-kelola-kasbon-pelanggan':       { emoji: '💳', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'manajemen-keuangan-cafe':            { emoji: '☕', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },
  'digitalisasi-koperasi-simpan-pinjam':{ emoji: '🏦', label: 'Keuangan Bisnis',    g: ['#3b82f6','#1d4ed8'] },

  // Manajemen Stok
  'manajemen-stok-toko-retail':         { emoji: '📦', label: 'Manajemen Stok',     g: ['#f59e0b','#d97706'] },
  'manajemen-gudang-umkm':              { emoji: '🏭', label: 'Manajemen Stok',     g: ['#f59e0b','#d97706'] },
  'pentingnya-audit-stok-berkala':      { emoji: '🔍', label: 'Manajemen Stok',     g: ['#f59e0b','#d97706'] },
  'cara-kelola-stok-frozen-food':       { emoji: '🧊', label: 'Manajemen Stok',     g: ['#f59e0b','#d97706'] },
  'cara-kelola-stok-bahan-baku-fnb':    { emoji: '🥬', label: 'Manajemen Stok',     g: ['#f59e0b','#d97706'] },

  // Teknologi Bisnis
  'kasir-digital-vs-kasir-manual':      { emoji: '🖥️', label: 'Teknologi Bisnis',   g: ['#8b5cf6','#6d28d9'] },
  'pentingnya-backup-data-bisnis':      { emoji: '💾', label: 'Teknologi Bisnis',   g: ['#8b5cf6','#6d28d9'] },
  'strategi-kelola-bisnis-dari-hp':     { emoji: '📱', label: 'Teknologi Bisnis',   g: ['#8b5cf6','#6d28d9'] },
  'pentingnya-website-untuk-umkm':      { emoji: '🌐', label: 'Teknologi Bisnis',   g: ['#8b5cf6','#6d28d9'] },
  'cara-kelola-toko-online-whatsapp':   { emoji: '💬', label: 'Teknologi Bisnis',   g: ['#8b5cf6','#6d28d9'] },

  // Strategi Bisnis
  'strategi-retensi-pelanggan-umkm':    { emoji: '🤝', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'strategi-pricing-produk-umkm':       { emoji: '🏷️', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'cara-analisis-produk-terlaris':      { emoji: '📊', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'cara-tingkatkan-omzet-toko':         { emoji: '📈', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'strategi-ekspansi-bisnis-umkm':      { emoji: '🚀', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'cara-buat-program-diskon-efektif':   { emoji: '🎯', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'sistem-loyalty-program-umkm':        { emoji: '⭐', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'strategi-upselling-cross-selling':   { emoji: '💡', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'cara-optimalkan-layout-toko':        { emoji: '🏪', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'strategi-kelola-bisnis-musiman':     { emoji: '🗓️', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'pentingnya-data-pelanggan-bisnis':   { emoji: '👥', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },
  'strategi-digital-marketing-umkm':   { emoji: '📣', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },

  // Manajemen SDM
  'cara-kelola-karyawan-toko':          { emoji: '👔', label: 'Manajemen SDM',      g: ['#ec4899','#db2777'] },
  'cara-onboarding-karyawan-baru':      { emoji: '🙋', label: 'Manajemen SDM',      g: ['#ec4899','#db2777'] },
  'sistem-absensi-karyawan-digital':    { emoji: '✅', label: 'Manajemen SDM',      g: ['#ec4899','#db2777'] },
  'cara-buat-sistem-shift-karyawan':    { emoji: '🔄', label: 'Manajemen SDM',      g: ['#ec4899','#db2777'] },

  // Operasional Bisnis
  'cara-buat-sop-bisnis-umkm':          { emoji: '📝', label: 'Operasional',        g: ['#64748b','#475569'] },
  'cara-kelola-multi-cabang':           { emoji: '🏢', label: 'Operasional',        g: ['#64748b','#475569'] },
  'cara-kelola-retur-barang':           { emoji: '↩️', label: 'Operasional',        g: ['#64748b','#475569'] },
  'manajemen-toko-online-dan-offline':  { emoji: '🛒', label: 'Operasional',        g: ['#64748b','#475569'] },

  // F&B
  'sistem-pos-untuk-restoran':          { emoji: '🍽️', label: 'F&B',               g: ['#ef4444','#dc2626'] },
  'cara-kurangi-waste-fnb':             { emoji: '♻️', label: 'F&B',               g: ['#ef4444','#dc2626'] },
  'cara-buat-menu-digital-restoran':    { emoji: '📱', label: 'F&B',               g: ['#ef4444','#dc2626'] },
  'manajemen-katering-harian':          { emoji: '🍱', label: 'F&B',               g: ['#ef4444','#dc2626'] },
  'cara-kelola-bakery-toko-roti':       { emoji: '🍞', label: 'F&B',               g: ['#ef4444','#dc2626'] },
  'manajemen-toko-kue-pastry':          { emoji: '🧁', label: 'F&B',               g: ['#ef4444','#dc2626'] },

  // Retail
  'digitalisasi-toko-baju':             { emoji: '👕', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-bangunan':          { emoji: '🏗️', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-elektronik':        { emoji: '📱', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-emas-perhiasan':    { emoji: '💍', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'manajemen-toko-kosmetik-skincare':   { emoji: '💄', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'digitalisasi-toko-buku-atk':         { emoji: '📚', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-grosir-sembako':         { emoji: '🍚', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'manajemen-konter-pulsa':             { emoji: '⚡', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-buah-segar':        { emoji: '🍎', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-florist-toko-bunga':     { emoji: '💐', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'digitalisasi-toko-sepatu-tas':       { emoji: '👟', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-herbal-jamu':       { emoji: '🌿', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'manajemen-toko-sport-olahraga':      { emoji: '🏅', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-musik':             { emoji: '🎸', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'manajemen-toko-komputer-laptop':     { emoji: '💻', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-hp-servis':         { emoji: '📲', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'digitalisasi-toko-furnitur-mebel':   { emoji: '🪑', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-tanaman-hias':      { emoji: '🌺', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-aquarium-ikan':     { emoji: '🐠', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-seafood-ikan':      { emoji: '🦐', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-oleh-oleh-wisata':  { emoji: '🎁', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'digitalisasi-toko-batik-kain':       { emoji: '🪡', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'cara-kelola-toko-craft-diy':         { emoji: '🧶', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'digitalisasi-toko-pertanian-pupuk':  { emoji: '🌾', label: 'Distribusi',         g: ['#84cc16','#65a30d'] },
  'manajemen-agen-gas-lpg':             { emoji: '🔥', label: 'Distribusi',         g: ['#84cc16','#65a30d'] },
  'digitalisasi-distributor-grosir':    { emoji: '🚚', label: 'Distribusi',         g: ['#84cc16','#65a30d'] },
  'cara-kelola-depot-air-minum':        { emoji: '💧', label: 'Retail',             g: ['#f97316','#ea580c'] },
  'sistem-kasir-minimarket-modern':     { emoji: '🛒', label: 'Retail',             g: ['#f97316','#ea580c'] },

  // Jasa & Layanan
  'cara-kelola-booking-salon':          { emoji: '✂️', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'sistem-tracking-laundry':            { emoji: '🧺', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'manajemen-membership-gym':           { emoji: '🏋️', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-gym-fitness-center':     { emoji: '💪', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'manajemen-petshop-digital':          { emoji: '🐶', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-rental-kendaraan':       { emoji: '🚙', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-studio-foto':            { emoji: '📸', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'manajemen-car-wash-digital':         { emoji: '🚗', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-percetakan-digital':     { emoji: '🖨️', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'manajemen-wedding-organizer':        { emoji: '💒', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-event-organizer':        { emoji: '🎪', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-spa-wellness':           { emoji: '🧖', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-jasa-cleaning-service':  { emoji: '🧹', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'digitalisasi-jasa-fotografi-videografi': { emoji: '🎬', label: 'Jasa & Layanan', g: ['#a855f7','#9333ea'] },
  'cara-kelola-kursus-les-privat':      { emoji: '📖', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'manajemen-studio-rekaman-musik':     { emoji: '🎹', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },
  'cara-kelola-jasa-pijat-refleksi':    { emoji: '💆', label: 'Jasa & Layanan',     g: ['#a855f7','#9333ea'] },

  // Kesehatan
  'cara-kelola-apotek-digital':         { emoji: '💊', label: 'Kesehatan',          g: ['#06b6d4','#0891b2'] },
  'manajemen-klinik-kecantikan':        { emoji: '✨', label: 'Kesehatan',          g: ['#06b6d4','#0891b2'] },
  'cara-kelola-klinik-gigi':            { emoji: '🦷', label: 'Kesehatan',          g: ['#06b6d4','#0891b2'] },
  'manajemen-klinik-umum':              { emoji: '🩺', label: 'Kesehatan',          g: ['#06b6d4','#0891b2'] },
  'manajemen-klinik-fisioterapi':       { emoji: '🏥', label: 'Kesehatan',          g: ['#06b6d4','#0891b2'] },

  // Otomotif & Konstruksi
  'digitalisasi-bengkel-otomotif':      { emoji: '🔧', label: 'Otomotif',           g: ['#78716c','#57534e'] },
  'digitalisasi-jasa-konstruksi':       { emoji: '🏚️', label: 'Konstruksi',         g: ['#78716c','#57534e'] },

  // Panduan Bisnis
  'manajemen-bisnis-umkm-2025':         { emoji: '🚀', label: 'Panduan Bisnis',     g: ['#59f6e3','#185cf8'] },
};

// Default theme untuk slug yang tidak ada di mapping
const defaultTheme = { emoji: '📊', label: 'BisnisRapi', g: ['#59f6e3', '#185cf8'] };

function makeSVG(slug, theme) {
  const { emoji, label, g } = theme;
  // Buat title dari slug
  const title = slug
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
    .replace(/Umkm/g, 'UMKM')
    .replace(/Fnb/g, 'F&B')
    .replace(/Pos /g, 'POS ')
    .replace(/Sop/g, 'SOP')
    .replace(/Hpp/g, 'HPP')
    .replace(/Atk/g, 'ATK')
    .replace(/Lpg/g, 'LPG')
    .replace(/Hp /g, 'HP ')
    .replace(/Diy/g, 'DIY');

  // Wrap title jadi max 2 baris ~28 char
  const words = title.split(' ');
  let line1 = '', line2 = '';
  for (const w of words) {
    if ((line1 + ' ' + w).trim().length <= 28) {
      line1 = (line1 + ' ' + w).trim();
    } else {
      line2 = (line2 + ' ' + w).trim();
    }
  }
  if (line2.length > 32) line2 = line2.slice(0, 30) + '…';

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${g[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${g[1]};stop-opacity:1" />
    </linearGradient>
    <linearGradient id="card" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:0.12" />
      <stop offset="100%" style="stop-color:#ffffff;stop-opacity:0.04" />
    </linearGradient>
    <filter id="blur1">
      <feGaussianBlur stdDeviation="60"/>
    </filter>
    <filter id="shadow">
      <feDropShadow dx="0" dy="8" stdDeviation="20" flood-color="#000000" flood-opacity="0.25"/>
    </filter>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg)"/>

  <!-- Decorative blobs -->
  <circle cx="150" cy="150" r="220" fill="white" opacity="0.06" filter="url(#blur1)"/>
  <circle cx="1050" cy="480" r="280" fill="white" opacity="0.06" filter="url(#blur1)"/>
  <circle cx="900" cy="100" r="160" fill="white" opacity="0.04" filter="url(#blur1)"/>

  <!-- Grid dots pattern -->
  <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
    <circle cx="2" cy="2" r="1.5" fill="white" opacity="0.08"/>
  </pattern>
  <rect width="1200" height="630" fill="url(#dots)"/>

  <!-- Card -->
  <rect x="80" y="80" width="1040" height="470" rx="32" fill="url(#card)" stroke="white" stroke-opacity="0.15" stroke-width="1.5" filter="url(#shadow)"/>

  <!-- Category badge -->
  <rect x="120" y="120" width="${label.length * 11 + 32}" height="36" rx="18" fill="white" opacity="0.2"/>
  <text x="${120 + (label.length * 11 + 32) / 2}" y="143" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="700" fill="white" text-anchor="middle" letter-spacing="0.5">${label.toUpperCase()}</text>

  <!-- Emoji -->
  <text x="600" y="310" font-size="120" text-anchor="middle" dominant-baseline="middle">${emoji}</text>

  <!-- Title line 1 -->
  <text x="600" y="${line2 ? '400' : '415'}" font-family="system-ui, -apple-system, sans-serif" font-size="${line1.length > 22 ? '36' : '42'}" font-weight="800" fill="white" text-anchor="middle" opacity="0.95">${line1}</text>
  ${line2 ? `<text x="600" y="450" font-family="system-ui, -apple-system, sans-serif" font-size="${line2.length > 22 ? '32' : '38'}" font-weight="700" fill="white" text-anchor="middle" opacity="0.85">${line2}</text>` : ''}

  <!-- BisnisRapi branding -->
  <text x="600" y="510" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="600" fill="white" text-anchor="middle" opacity="0.6" letter-spacing="2">bisnisrapi.com</text>

  <!-- Bottom accent line -->
  <rect x="540" y="530" width="120" height="3" rx="2" fill="white" opacity="0.4"/>
</svg>`;
}

// Get all slugs from content/blog
const contentDir = path.join(__dirname, '..', 'content', 'blog');
const allSlugs = fs.readdirSync(contentDir)
  .filter(f => f.endsWith('.md'))
  .map(f => f.replace('.md', ''));

let created = 0;
let skipped = 0;

for (const slug of allSlugs) {
  if (existing.has(slug)) {
    skipped++;
    continue;
  }

  const dir = path.join(publicBlogDir, slug);
  const svgPath = path.join(dir, 'thumbnail.svg');
  const webpPath = path.join(dir, 'thumbnail.webp');

  // Skip jika sudah ada thumbnail
  if (fs.existsSync(webpPath) || fs.existsSync(path.join(dir, 'thumbnail.png'))) {
    skipped++;
    continue;
  }

  // Buat folder
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const theme = themes[slug] || defaultTheme;
  const svg = makeSVG(slug, theme);
  fs.writeFileSync(svgPath, svg, 'utf8');
  created++;
  console.log(`✅ ${slug}`);
}

console.log(`\nDone! Created: ${created}, Skipped: ${skipped}`);
