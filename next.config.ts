/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://affiliates.expediagroup.com; object-src 'none';",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;