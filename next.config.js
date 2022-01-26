/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/',
        destination: '/pokemon-list',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
