/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["lucide-react"],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enable Turbopack for faster dev builds
    turbo: {
      resolveAlias: {
        // Optimize imports
      },
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
  // Optimize webpack config for development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Disable source maps in dev for faster builds
      config.devtool = false;
    }
    return config;
  },
};

module.exports = nextConfig;
