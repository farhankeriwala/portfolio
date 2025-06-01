"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IconMenu2 } from "@tabler/icons-react";
import { useTheme } from "next-themes";

import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { navItems, socialMediaItems } from "@/constants";
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";

// --- ThemedIcon component to avoid hydration mismatch ---
const ThemedIcon = ({ icon, label }: { icon: string; label: string }) => {
    const { theme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div style={{ width: 20, height: 20 }} />;
    }

    const resolvedTheme = theme === "system" ? systemTheme : theme;
    const iconSrc = `/assets/icons/${icon}${resolvedTheme === "light" ? "" : "-dark"}.svg`;

    return (
        <Image
            src={iconSrc}
            alt={label}
            width={20}
            height={20}
            className="opacity-80"
        />
    );
};

const Header: React.FC = () => {
    const [open, setOpen] = useState(false);
    const path = usePathname();

    return (
        <header className="sticky top-0 z-50 w-full bg-white/50 dark:bg-zinc-950/50 backdrop-blur-md">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:py-6 lg:px-8">
                {/* Logo */}
                <Link href="/" className="-m-1.5 p-1.5">
                    <h1
                        className={`${bricolageGrotesque.className} text-4xl font-semibold text-zinc-900 dark:text-zinc-100`}
                    >
                        FGK
                    </h1>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {path !== "/maintenance" &&
                        navItems.map((item: NavItem) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                                    path === item.href
                                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                        : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                                }`}
                            >
                                <ThemedIcon icon={item.icon} label={item.label} />
                                {item.label}
                            </Link>
                        ))}
                </div>

                {/* Mobile Menu */}
                {path !== "/maintenance" && (
                    <div className="md:hidden">
                        <Sheet open={open} onOpenChange={setOpen}>
                            <SheetTrigger className={"cursor-pointer"}>
                                <IconMenu2 className="h-6 w-6 text-zinc-900 dark:text-zinc-100" />
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetTitle>
                                        <Link href="/public" className="-m-1.5 p-1.5">
                                            <h1
                                                className={`${bricolageGrotesque.className} text-4xl font-semibold text-zinc-900 dark:text-zinc-100`}
                                            >
                                                FGK
                                            </h1>
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>

                                <Separator className="my-4" />

                                <div className="flex flex-col gap-2">
                                    {navItems.map((item: NavItem) => (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-base font-medium transition-colors ${
                                                path === item.href
                                                    ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                                    : "text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 hover:dark:bg-zinc-800"
                                            }`}
                                        >
                                            <ThemedIcon icon={item.icon} label={item.label} />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>

                                <Separator className="my-6" />

                                <div className="flex flex-col gap-2">
                                    {socialMediaItems.map((item: SocialMediaItem) => (
                                        <Link
                                            key={item.label}
                                            href={item.url}
                                            className="flex items-center gap-2 rounded-lg px-4 py-2 text-base text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                                        >
                                            <Image
                                                src={item.icon}
                                                alt={item.label}
                                                width={20}
                                                height={20}
                                                className="opacity-80"
                                            />
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>

                                <SheetFooter />
                            </SheetContent>
                        </Sheet>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Header;
