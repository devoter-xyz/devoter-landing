import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
    domains: ["devoter.xyz", "images.unsplash.com"],
  },
  compress: true,
  experimental: {
    optimizeCss: false,
  },
};

export default nextConfig;
