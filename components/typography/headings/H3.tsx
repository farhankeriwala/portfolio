import React, { ReactNode } from "react";
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";

const H3 = ({ children }: { children: ReactNode }) => {
    return (
        <h3
            className={`scroll-m-20 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100`}
        >
            {children}
        </h3>
    );
};

export default H3;
