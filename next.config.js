/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  env: {
    NEXT_PUBLIC_API_SERVER_URL: 'http://localhost:3000/'
  }
}

module.exports = nextConfig
