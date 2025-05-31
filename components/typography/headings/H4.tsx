import React, { ReactNode } from 'react';
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";

const H4 = ({ children }: { children: ReactNode }) => {
    return (
        <h4
            className={`scroll-m-20 text-lg sm:text-xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100`}
        >
            {children}
        </h4>
    );
};

export default H4;
