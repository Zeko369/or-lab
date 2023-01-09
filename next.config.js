/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@prisma/client", "prisma"],
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
