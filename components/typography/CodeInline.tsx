import React, { ReactNode } from 'react';

const CodeInline = ({ children }: { children: ReactNode }) => {
    return (
        <code className="rounded-md px-1.5 py-0.5 font-mono text-sm font-medium bg-zinc-200 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-100">
            {children}
        </code>
    );
};

export default CodeInline;
