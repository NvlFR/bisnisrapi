import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicBlogDir = path.join(__dirname, '..', 'public', 'blog');
const contentDir = path.join(__dirname, '..', 'content', 'blog');
const DOMAIN = 'bisnisrapi.my.id';

// Slugs to skip (original list from user, but we might want to regenerate them if they were generic)
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
  'strategi-digital-marketing-umkm':    { emoji: '📣', label: 'Strategi Bisnis',    g: ['#10b981','#059669'] },

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

// Default theme pool for variety
const colorPools = [
  ['#3b82f6', '#1d4ed8'], // Blue
  ['#f59e0b', '#d97706'], // Amber
  ['#10b981', '#059669'], // Emerald
  ['#8b5cf6', '#6d28d9'], // Violet
  ['#ec4899', '#db2777'], // Pink
  ['#f97316', '#ea580c'], // Orange
  ['#ef4444', '#dc2626'], // Red
  ['#06b6d4', '#0891b2'], // Cyan
  ['#84cc16', '#65a30d'], // Lime
  ['#6366f1', '#4338ca'], // Indigo
];

const emojiPool = ['📊', '📈', '🚀', '💡', '🏢', '🛒', '🤝', '💰', '📦', '📝', '🌐', '📱', '👔', '🏗️', '🔋', '⚡', '🎯', '✨'];

function getRandomTheme(slug) {
  const hash = getHash(slug);
  const rnd = createRandom(hash);
  const colors = colorPools[Math.floor(rnd() * colorPools.length)];
  const emoji = emojiPool[Math.floor(rnd() * emojiPool.length)];
  return {
    emoji,
    label: 'Tips Bisnis',
    g: colors
  };
}

// Simple hash for seeding randomness
function getHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Pseudo-random based on seed
function createRandom(seed) {
  let s = seed;
  return function() {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function makeSVG(slug, theme) {
  const { emoji, label, g } = theme;
  const hash = getHash(slug);
  const rnd = createRandom(hash);

  // Formatting title from slug
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

  const words = title.split(' ');
  let line1 = '', line2 = '';
  for (const w of words) {
    if ((line1 + ' ' + w).trim().length <= 25) {
      line1 = (line1 + ' ' + w).trim();
    } else if ((line2 + ' ' + w).trim().length <= 30) {
      line2 = (line2 + ' ' + w).trim();
    }
  }
  if (line2.length > 32) line2 = line2.slice(0, 30) + '…';

  // Random visual elements based on seed
  const shapes = [];
  for (let i = 0; i < 5; i++) {
    const type = rnd() > 0.6 ? 'circle' : (rnd() > 0.5 ? 'rect' : 'polygon');
    const x = rnd() * 1200;
    const y = rnd() * 630;
    const size = 50 + rnd() * 200;
    const opacity = 0.03 + rnd() * 0.05;
    const rotate = rnd() * 360;
    
    if (type === 'circle') {
      shapes.push(`<circle cx="${x}" cy="${y}" r="${size/2}" fill="white" opacity="${opacity}" />`);
    } else if (type === 'rect') {
      shapes.push(`<rect x="${x}" y="${y}" width="${size}" height="${size}" rx="${size/4}" fill="white" opacity="${opacity}" transform="rotate(${rotate}, ${x}, ${y})" />`);
    } else {
      // Triangle
      const p1 = `${x},${y - size/2}`;
      const p2 = `${x - size/2},${y + size/2}`;
      const p3 = `${x + size/2},${y + size/2}`;
      shapes.push(`<polygon points="${p1} ${p2} ${p3}" fill="white" opacity="${opacity}" transform="rotate(${rotate}, ${x}, ${y})" />`);
    }
  }

  // Random background patterns
  const patterns = [
    `<pattern id="dots-${hash}" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="white" opacity="0.1"/></pattern>`,
    `<pattern id="lines-${hash}" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="30" stroke="white" stroke-opacity="0.05" stroke-width="1"/></pattern>`,
    `<pattern id="grid-${hash}" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" stroke-opacity="0.05" stroke-width="1"/></pattern>`
  ];
  const selectedPattern = patterns[Math.floor(rnd() * patterns.length)];

  const escapeXml = (unsafe) => {
    return unsafe.replace(/[<>&"']/g, (m) => {
      switch (m) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '"': return '&quot;';
        case "'": return '&apos;';
        default: return m;
      }
    });
  };

  const escapedLabel = escapeXml(label.toUpperCase());
  const escapedLine1 = escapeXml(line1);
  const escapedLine2 = line2 ? escapeXml(line2) : '';
  const escapedDomain = escapeXml(DOMAIN.toUpperCase());

  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg-${hash}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${g[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${g[1]};stop-opacity:1" />
    </linearGradient>
    <filter id="blur-${hash}">
      <feGaussianBlur stdDeviation="80"/>
    </filter>
    <filter id="shadow-${hash}">
      <feDropShadow dx="0" dy="12" stdDeviation="25" flood-color="#000000" flood-opacity="0.3"/>
    </filter>
    ${selectedPattern}
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="url(#bg-${hash})"/>

  <!-- Decorative dynamic shapes -->
  <circle cx="${100 + rnd() * 200}" cy="${100 + rnd() * 200}" r="${200 + rnd() * 100}" fill="white" opacity="0.08" filter="url(#blur-${hash})"/>
  <circle cx="${900 + rnd() * 200}" cy="${400 + rnd() * 200}" r="${250 + rnd() * 100}" fill="white" opacity="0.06" filter="url(#blur-${hash})"/>
  ${shapes.join('\n')}

  <!-- Pattern Overlay -->
  <rect width="1200" height="630" fill="url(#${selectedPattern.match(/id="([^"]+)"/)[1]})"/>

  <!-- Glass Card -->
  <rect x="80" y="80" width="1040" height="470" rx="48" fill="white" fill-opacity="0.08" stroke="white" stroke-opacity="0.2" stroke-width="1.5" filter="url(#shadow-${hash})"/>
  <rect x="80" y="80" width="1040" height="470" rx="48" fill="none" stroke="white" stroke-opacity="0.1" stroke-width="1"/>

  <!-- Badge -->
  <rect x="130" y="130" width="${label.length * 11 + 40}" height="40" rx="20" fill="white" fill-opacity="0.2"/>
  <text x="${130 + (label.length * 11 + 40) / 2}" y="156" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="800" fill="white" text-anchor="middle" letter-spacing="1">${escapedLabel}</text>

  <!-- Emoji -->
  <text x="600" y="300" font-size="140" text-anchor="middle" dominant-baseline="middle">${emoji}</text>

  <!-- Title -->
  <text x="600" y="${line2 ? '420' : '440'}" font-family="system-ui, -apple-system, sans-serif" font-size="52" font-weight="900" fill="white" text-anchor="middle" letter-spacing="-0.5">${escapedLine1}</text>
  ${line2 ? `<text x="600" y="480" font-family="system-ui, -apple-system, sans-serif" font-size="42" font-weight="700" fill="white" text-anchor="middle" opacity="0.9" letter-spacing="-0.5">${escapedLine2}</text>` : ''}

  <!-- Branding -->
  <text x="600" y="525" font-family="system-ui, -apple-system, sans-serif" font-size="24" font-weight="600" fill="white" text-anchor="middle" opacity="0.6" letter-spacing="4">${escapedDomain}</text>

  <!-- Accent line -->
  <rect x="540" y="550" width="120" height="4" rx="2" fill="white" opacity="0.3"/>
</svg>`;
}

// Get all slugs from content/blog
const allFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md'));
const allSlugs = allFiles.map(f => f.replace('.md', ''));

let created = 0;
let skipped = 0;

for (const slug of allSlugs) {
  // If you want to force regenerate all for the new design, comment out the skip logic
  /*
  if (existing.has(slug)) {
    skipped++;
    continue;
  }
  */

  const dir = path.join(publicBlogDir, slug);
  const svgPath = path.join(dir, 'thumbnail.svg');
  const webpPath = path.join(dir, 'thumbnail.webp');
  const pngPath = path.join(dir, 'thumbnail.png');

  // Skip only if there's a custom manually uploaded thumbnail (webp or png)
  // If it's just the old thumbnail.svg, we might want to overwrite it with the new design
  // But for now, let's follow the user's logic of skipping if thumbnail exists.
  // Actually, the user said "redesain", so I should probably overwrite existing SVGs if they are not "real images".
  
  if (fs.existsSync(webpPath) || fs.existsSync(pngPath)) {
    skipped++;
    continue;
  }

  // Create folder
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const theme = themes[slug] || getRandomTheme(slug);
  const svg = makeSVG(slug, theme);
  fs.writeFileSync(svgPath, svg, 'utf8');

  // Update frontmatter image path in .md file
  const mdPath = path.join(contentDir, `${slug}.md`);
  if (fs.existsSync(mdPath)) {
    let mdContent = fs.readFileSync(mdPath, 'utf8');
    const svgUrl = `/blog/${slug}/thumbnail.svg`;
    
    // Check if image frontmatter needs update
    const imageRegex = /^image:\s*["']?.*["']?$/m;
    if (imageRegex.test(mdContent)) {
      const match = mdContent.match(imageRegex)[0];
      if (!match.includes(svgUrl)) {
        mdContent = mdContent.replace(imageRegex, `image: "${svgUrl}"`);
        fs.writeFileSync(mdPath, mdContent, 'utf8');
      }
    }
  }

  created++;
  process.stdout.write(`\r✅ ${created} thumbnails processed...`);
}

console.log(`\n\nDone! Created/Updated: ${created}, Skipped: ${skipped}`);
console.log(`Domain updated to: ${DOMAIN}`);
