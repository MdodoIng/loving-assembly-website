/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // trailingSlash: true,
  // output: "export",

  // staticPageGenerationTimeout: 1000,
};

export default nextConfig;
