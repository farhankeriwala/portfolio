import React from "react";
import Link from "next/link";
import { IconSearchOff } from "@tabler/icons-react";

const NotFoundPage = () => {
    return (
        <div className="flex-grow mx-auto min-h-full flex-col items-center justify-center px-6 py-12 bg-white dark:bg-zinc-900 text-center">
            <div className="flex flex-col items-center space-y-4">
                <IconSearchOff className="h-12 w-12 text-zinc-400 dark:text-zinc-600" />
                <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-100">404 – Page Not Found</h1>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block px-5 py-2 rounded-md text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
                >
                    Return to Homepage
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
