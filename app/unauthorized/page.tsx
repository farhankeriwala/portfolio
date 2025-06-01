import React from "react";
import Link from "next/link";
import { IconLock } from "@tabler/icons-react";

const Page = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12 bg-white dark:bg-zinc-900 text-center">
            <div className="flex flex-col items-center space-y-4">
                <IconLock className="h-12 w-12 text-zinc-400 dark:text-zinc-600" />
                <h1 className="text-3xl font-semibold text-zinc-800 dark:text-zinc-100">401 – Unauthorized</h1>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-md">
                    You do not have permission to access this page. Please log in or contact support if you believe this is an error.
                </p>
                <Link
                    href="/"
                    className="mt-6 inline-block px-5 py-2 rounded-md text-sm font-medium bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition"
                >
                    Go to Homepage
                </Link>
            </div>
        </div>
    );
};

export default Page;
