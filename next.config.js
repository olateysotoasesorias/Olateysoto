/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/johnnyolate', destination: '/johnny_olate', permanent: true },
      { source: '/johnnyolate/:slug', destination: '/johnny_olate/:slug', permanent: true },
    ]
  },
}

module.exports = nextConfig
