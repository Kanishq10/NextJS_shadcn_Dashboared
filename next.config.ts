import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns:[
      {
        protocol : "https",   //only do if ssl error in company network
        hostname : "images.pexels.com"
      }
    ]
  },
};

export default nextConfig;
