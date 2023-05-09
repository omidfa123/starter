/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.optimization.mergeDuplicateChunks = true;

    return config;
  },
};

module.exports = nextConfig;
