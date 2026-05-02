const nextConfig = {
  output: 'export', // Penting untuk shared hosting
  trailingSlash: true, // Memastikan routing di shared hosting lebih stabil
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Diperlukan untuk static export
    formats: ['image/avif', 'image/webp'],
    qualities: [70, 75, 80, 85, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  allowedDevOrigins: ['192.168.100.12'],
}

export default nextConfig