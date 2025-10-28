/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
  },
  images: {
    domains: ['github.com'],
  },
};

module.exports = nextConfig;
