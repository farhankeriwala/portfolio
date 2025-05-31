import React, { ReactNode } from "react";
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";

const H1 = ({ children }: { children: ReactNode }) => {
    return (
        <h1
            className={`scroll-m-20 text-center text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight text-zinc-900 dark:text-zinc-100 ${bricolageGrotesque.className} text-balance`}
        >
            {children}
        </h1>
    );
};

export default H1;
