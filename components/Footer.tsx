'use client';

import React from 'react'
import Link from "next/link";
import {usePathname} from "next/navigation";
import {socialMediaItems} from "@/constants";
import Image from "next/image";
import {ThemeToggle} from "@/components/ThemeToggle";
import {Tooltip, TooltipTrigger, TooltipContent} from "@/components/ui/tooltip";


const Footer = () => {
    const path = usePathname();
    return (
        <footer className={"container my-10 lg:px-8"}>
            {
                path != "/maintenance" ? (
                    <div
                        className={"flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-y-4"}>
                        <p className={"font-poppins text-center flex flex-col md:block text-ld font-medium"}>© {new Date().getFullYear()} Farhan
                            Keriwala. All rights
                            reserved. | <Link href={"/privacy-policy"} className={"hover:text-neutral-500"}>Privacy
                                Policy</Link>
                        </p>
                        <div>
                            {
                                path != "/maintenance" && (
                                    <div className={"flex items-center space-x-6 md:space-x-8"}>
                                        {socialMediaItems.map((item: SocialMediaItem) => (<Link
                                            href={item.url}
                                            key={item.label}
                                            className={"hover:scale-105 cursor-pointer"}
                                            target="_blank"
                                        >
                                            <Tooltip delayDuration={200}>
                                                <TooltipTrigger className={"cursor-pointer"}>
                                                    <Image src={item.icon} alt={item.label} width={28} height={28}/>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    {item.label}
                                                </TooltipContent>
                                            </Tooltip>
                                        </Link>))}
                                        <ThemeToggle/>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                ) : (<div
                    className={"flex flex-col-reverse md:flex-row items-center justify-center gap-y-4 py-8"}>
                    <p className={"font-poppins text-ld text-center font-medium"}>© {new Date().getDay()} Farhan
                        Keriwala. All rights
                        reserved.</p>

                </div>)
            }
        </footer>
    )
}
export default Footer
