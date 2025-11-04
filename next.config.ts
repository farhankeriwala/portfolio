import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ["api.microlink.io"],
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

    async redirects() {
        return [
            // {
            //     source: "/((?!maintenance).*)",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
            {
                source: "/contact",
                destination: "/",
                permanent: true,
            }
        ];
    },
};

export default nextConfig;
