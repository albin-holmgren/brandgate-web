import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  turbopack: {
    root: __dirname,
  },
  // Cache bust: 2026-03-02-001
};

export default nextConfig;
