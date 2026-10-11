
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  images: {
    qualities: [75, 95],
  },
  cacheComponents: true,
  partialPrefetching: true,
};

export default nextConfig;
