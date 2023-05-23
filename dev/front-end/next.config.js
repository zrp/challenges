/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      '*'
    ],
    unoptimized: true,
  },
}

module.exports = nextConfig
