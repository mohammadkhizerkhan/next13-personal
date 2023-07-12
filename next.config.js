/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["images.pexels.com"],
  },
  experimental: {
    serverActions: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
},
staticPageGenerationTimeout: 1000,
typescript: {
  // !! WARN !!
  // Dangerously allow production builds to successfully complete even if
  // your project has type errors.
  // !! WARN !!
  ignoreBuildErrors: true,
},
};

module.exports = nextConfig;
