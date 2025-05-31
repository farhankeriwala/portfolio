"use client";

import React from "react";
import {
    IconBriefcase,
    IconCode,
    IconMoodHappy,
} from "@tabler/icons-react";
import Image from "next/image";

const stats = [
    {
        title: "Projects Delivered",
        value: "30+",
        icon: <IconCode className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
        description:
            "Built full-stack platforms and tools for startups, students, and real-world use.",
    },
    {
        title: "Years of Experience",
        value: "5+",
        icon: (
            <IconBriefcase className="h-10 w-10 text-green-600 dark:text-green-400" />
        ),
        description:
            "Hands-on development across web, backend, AI, and cloud systems.",
    },
    {
        title: "Client Satisfaction",
        value: "★ ★ ★ ★ ★",
        icon: (
            <IconMoodHappy className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />
        ),
        description:
            "Consistent praise for delivery, clarity, and support throughout projects.",
    },
];

const MyStatistics = () => {
    return (
        <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div className="w-80 h-80 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-full absolute top-10 left-10" />
                <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400 to-purple-500 rounded-full absolute bottom-10 right-10" />
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex justify-center items-center gap-4 md:gap-6 mb-6 text-center">
                    <Image
                        src="/assets/icons/medal.svg"
                        alt="stats icon"
                        width={75}
                        height={75}
                    />
                    <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100">
                        Track Record
                    </h2>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-16 text-center text-lg">
                    A snapshot of the impact and experience I bring to every project.
                </p>

                <dl className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className="flex flex-col gap-y-4 items-center p-8 rounded-2xl bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md border border-white/10 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-300"
                        >
                            <div>{stat.icon}</div>
                            <dd className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 font-bricolageGrotesque">
                                {stat.value}
                            </dd>
                            <dt className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                                {stat.title}
                            </dt>
                            <p className="text-md text-zinc-500 dark:text-zinc-300">
                                {stat.description}
                            </p>
                        </div>
                    ))}
                </dl>
            </div>
        </section>
    );
};

export default MyStatistics;
