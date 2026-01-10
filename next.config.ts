import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // @ts-expect-error - eslint is a valid Next.js config property
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
