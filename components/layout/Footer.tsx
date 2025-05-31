'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { socialMediaItems } from "@/constants";
import Image from "next/image";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

const Footer = () => {
    const path = usePathname();
    const isMaintenance = path === "/maintenance";

    return (
        <footer className="w-full py-12 px-6 md:px-8 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
            <div
                className={`max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-y-4 ${
                    isMaintenance ? "justify-center" : ""
                }`}
            >
                <p className="text-center md:text-left text-sm text-zinc-700 dark:text-zinc-300">
                    © {new Date().getFullYear()} Farhan Keriwala. All rights reserved.{" "}
                    {!isMaintenance && (
                        <>
                            |{" "}
                            <Link href="/privacy-policy" className="hover:underline text-zinc-600 dark:text-zinc-400">
                                Privacy Policy
                            </Link>
                        </>
                    )}
                </p>

                {!isMaintenance && (
                    <div className="flex items-center space-x-6">
                        {socialMediaItems.map((item: SocialMediaItem) => (
                            <Link
                                href={item.url}
                                key={item.label}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-105 transition-transform"
                            >
                                <Tooltip delayDuration={200}>
                                    <TooltipTrigger asChild>
                                        <Image src={item.icon} alt={item.label} width={28} height={28} />
                                    </TooltipTrigger>
                                    <TooltipContent>{item.label}</TooltipContent>
                                </Tooltip>
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </footer>
    );
};

export default Footer;
