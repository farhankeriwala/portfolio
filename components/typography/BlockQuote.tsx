import React, { ReactNode } from 'react';
import { karla } from "@/fonts/karla";

const BlockQuote = ({ children }: { children: ReactNode }) => {
    return (
        <blockquote
            className={`mt-8 border-l-4 border-zinc-300 dark:border-zinc-600 pl-6 py-4 text-zinc-700 dark:text-zinc-300 italic text-lg ${karla.className}`}
        >
            &quot;{children}&quot;
        </blockquote>
    );
};

export default BlockQuote;
