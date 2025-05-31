import React, {ReactNode} from "react";

const H1 = ({children}: { children: ReactNode }) => {
    return (
        <h1
            className={`text-center scroll-m-20 my-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.01em] leading-tight text-zinc-900 dark:text-zinc-100/90`}
        >
            {children}
        </h1>
    );
};

export default H1;
