'use client';

import React from 'react';
import Image from "next/image";

const Loader: React.FC = () => {
    return (
        <div className="fixed h-full w-full inset-0 z-50 flex items-center justify-center bg-white/60 dark:bg-zinc-900/60 backdrop-blur-md">
            <div className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-white/80 dark:bg-zinc-800/80 border border-white/10 dark:border-white/10 shadow-xl">
                <Image
                    src="/assets/icons/loader.svg"
                    alt="Loading"
                    width={50}
                    height={50}
                    className="animate-spin"
                />
                <p className="text-base font-medium text-zinc-800 dark:text-zinc-100">
                    Loading...
                </p>
            </div>
        </div>
    );
};

export default Loader;
