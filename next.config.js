/** @type {import('next').NextConfig} */
const nextConfig = {
  // GitHub Pages hosts static files, not a Next.js server.
  output: 'export',

  // This repository is published under /netgraud-ai/.
  basePath: '/netgraud-ai',
  trailingSlash: true,

  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
