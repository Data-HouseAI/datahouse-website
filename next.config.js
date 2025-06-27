/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['datahouseaisl.netlify.app'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'datahouseaisl.netlify.app',
      },
    ],
  },
  // Optimization settings
  swcMinify: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // Remove static export for Netlify
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig 