import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    typescript: {
        ignoreBuildErrors: true, // Ignores TypeScript build errors
    },

    eslint: {
        ignoreDuringBuilds: true, // Ignores ESLint build errors
    },
    images: {
        domains: [
            "api.microlink.io", // Microlink Image Preview
        ],

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
            //     source: "/",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
            // {
            //     source: "/about",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
            // {
            //     source: "/projects",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
            {
                source: "/services",
                destination: "/maintenance",
                permanent: false,
            },
            // {
            //     source: "/contact",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
            // {
            //     source: "/privacy-policy",
            //     destination: "/maintenance",
            //     permanent: false,
            // },
        ];
    },
};

export default nextConfig;
