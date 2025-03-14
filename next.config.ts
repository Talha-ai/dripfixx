import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix: './', // Fixes CSS/JS loading issues
  images: { unoptimized: true }
};

export default nextConfig;
