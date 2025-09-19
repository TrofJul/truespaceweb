import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    // Make sure Turbopack treats this folder as the root
    root: __dirname,
  },
};

export default nextConfig;
