/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["storage.atramart.com"],
  },
};

module.exports = nextConfig;
