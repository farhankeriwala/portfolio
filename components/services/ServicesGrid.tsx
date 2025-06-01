"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/aceternity/BentoGrid";
import {
    IconLayoutGrid,
    IconCode,
    IconDatabase,
    IconDeviceDesktop,
    IconCloudUpload,
    IconShieldLock,
    IconSettings,
} from "@tabler/icons-react";
import Image from "next/image";

const items = [
    {
        title: "Custom Web Development",
        description: "Build fast, responsive, and scalable websites using modern frameworks like Next.js, React, and Tailwind CSS.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/web-dev.png"
                    alt="web development"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-2",
        icon: <IconDeviceDesktop className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Full-Stack SaaS Platforms",
        description: "End-to-end development of Software-as-a-Service apps with user auth, subscriptions, dashboards, and analytics.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/saas.png"
                    alt="saas"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconLayoutGrid className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "APIs & Backend Development",
        description: "Design and develop secure REST & GraphQL APIs, serverless functions, and backend systems using Django, Node.js, or Firebase.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/api.png"
                    alt="API"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-2",
        icon: <IconDatabase className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "CMS & Blog Integrations",
        description: "Custom CMS setups using Sanity, WordPress, or Headless CMS to help you easily manage your content.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/cms.png"
                    alt="CMS"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconCode className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Security & Authentication",
        description: "Implement secure authentication, access control, and app hardening best practices.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/security.png"
                    alt="security"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconShieldLock className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Deployment & Cloud Hosting",
        description: "Optimized deployment on Vercel, Netlify, or Hostinger with CI/CD and cloud infrastructure support.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/cloud-hosting.png"
                    alt="hosting"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconCloudUpload className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Maintenance & Optimization",
        description: "Regular updates, performance tuning, and technical support to keep your app fast and reliable.",
        header: (
            <div className="relative w-full h-40 md:h-48">
                <Image
                    src="/assets/images/maintenance.png"
                    alt="maintenance"
                    fill
                    className="object-contain rounded-xl"
                />
            </div>
        ),
        className: "md:col-span-1",
        icon: <IconSettings className="h-4 w-4 text-neutral-500" />,
    },
];

const ServicesGrid = () => {
    return (
        <BentoGrid className="max-w-7xl mx-auto md:auto-rows-[20rem]">
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    className={item.className}
                    icon={item.icon}
                />
            ))}
        </BentoGrid>
    );
};

export default ServicesGrid;
