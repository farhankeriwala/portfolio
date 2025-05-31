import React, { ReactNode } from "react";
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";

const H2 = ({ children }: { children: ReactNode }) => {
    return (
        <h2
            className={`scroll-m-20 pb-3 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100`}
        >
            {children}
        </h2>
    );
};

export default H2;
