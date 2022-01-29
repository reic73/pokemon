/** @type {import('next').NextConfig} */

const isLocal = process.env.NEXT_PUBLIC_ENV == "local";
const baseUrl = isLocal ? "" : "/" + process.env.NEXT_PUBLIC_PROJECT_NAME;
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  basePath: baseUrl,
  assetPrefix: baseUrl,
};

module.exports = nextConfig;
