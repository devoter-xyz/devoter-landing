import type { NextConfig } from "next";


const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    minimumCacheTTL: 86400,
    domains: ["devoter.xyz"],
  },
  compress: true,
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
