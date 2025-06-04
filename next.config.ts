import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  images: {
    domains: [],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'harfatrading-bucket.s3.me-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
    unoptimized: false,  
  }
};

export default nextConfig;
