/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async headers() {
    return [
      {
        source: '/fonts/IRANSansXV.woff2',
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
