/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.optimization.mergeDuplicateChunks = true;

    return config;
  },

  async headers() {
    return [
      {
        source: '/fonts/iransansxv.woff',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000 , immutable',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
