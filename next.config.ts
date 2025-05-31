import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github-readme-streak-stats.herokuapp.com",
            },
            {
                protocol: "https",
                hostname: "cdn.sanity.io",
            },
            {
                protocol: "https",
                hostname: "api.microlink.io",
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
