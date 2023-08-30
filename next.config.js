/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io', 'example.com'], // Add more domains if required
  },
  distDir: 'dist',
}

module.exports = nextConfig
