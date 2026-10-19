import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Keep the local preview separate from production builds so concurrent runs
  // cannot replace each other's generated chunks.
  distDir: process.env.NODE_ENV === "development" ? ".next-dev" : ".next",
  images: { unoptimized: true },
};

export default nextConfig;
