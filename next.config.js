/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Remove static export for Netlify
  // output: 'export',
  // trailingSlash: true,
}

module.exports = nextConfig 