import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  allowedDevOrigins: [
    "192.168.31.246", 
    "192.168.20.1", 
    "localhost", 
    "*.loca.lt",
    "*.lhr.life",
    "*.localhost.run",
    "*.pinggy.link",
    "*.pinggy.io"
  ],
  async redirects() {
    return [
      { source: "/starter-pack/:path*", destination: "/freshers/:path*", permanent: true },
      { source: "/before-class/:path*", destination: "/explore", permanent: false },
      { source: "/future-features", destination: "/explore", permanent: false },
      { source: "/campus-circle", destination: "/explore", permanent: false },
      { source: "/dashboard-admin/feed", destination: "/network", permanent: false },
    ];
  },
};

export default nextConfig;
