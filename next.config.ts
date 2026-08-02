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
};

export default nextConfig;
