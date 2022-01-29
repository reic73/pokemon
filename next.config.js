/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  basePath: "/pokemon",
  assetPrefix: "/pokemon",
  async redirects() {
    return [
      {
        source: "/",
        destination: "/pokemon-list",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
