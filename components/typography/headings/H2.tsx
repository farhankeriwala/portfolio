import React, { ReactNode } from "react";
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";

const H2 = ({ children }: { children: ReactNode }) => {
    return (
        <h2
            className={`scroll-m-20 border-b border-zinc-200 dark:border-zinc-700 pb-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 ${bricolageGrotesque.className}`}
        >
            {children}
        </h2>
    );
};

export default H2;
