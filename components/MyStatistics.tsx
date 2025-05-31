import React from "react";
import {IconBriefcase, IconCode, IconMoodHappy} from "@tabler/icons-react";
import H2 from "@/components/typography/headings/H2";

const stats = [
    {
        title: "Projects Delivered",
        value: "30+",
        icon: <IconCode className="h-10 w-10 text-blue-600 dark:text-blue-400"/>,
        description: "Built full-stack platforms and tools for startups, students, and real-world use.",
    },
    {
        title: "Years of Experience",
        value: "5+",
        icon: <IconBriefcase className="h-10 w-10 text-green-600 dark:text-green-400"/>,
        description: "Hands-on development across web, backend, AI, and cloud systems.",
    },
    {
        title: "Client Satisfaction",
        value: "★ ★ ★ ★ ★",
        icon: <IconMoodHappy className="h-10 w-10 text-yellow-500 dark:text-yellow-400"/>,
        description: "Consistent praise for delivery, clarity, and support throughout projects.",
    },
];

const MyStatistics = () => {
    return (
        <section className={"py-24 sm:py-32 bg-white dark:bg-zinc-950"}>
            <div className={"mx-auto max-w-7xl px-6 lg:px-8"}>
                <div className={"text-center mb-16"}>
                    <h2 className={"text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl"}>
                        My Track Record
                    </h2>
                    <p className={"mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto text-lg"}>
                        A snapshot of the impact and experience I bring to every project.
                    </p>
                </div>

                <dl className={"grid grid-cols-1 gap-y-12 gap-x-18 text-center md:grid-cols-3"}>
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={"mx-auto flex max-w-sm flex-col gap-y-4 px-6 py-6 border border-zinc-200 dark:border-zinc-800 rounded-2xl shadow-xl hover:shadow-md transition-shadow duration-200"}
                        >
                            <div className={"flex justify-center pb-5"}>{stat.icon}</div>
                            <dd className={"text-4xl sm:text-5xl font-bold font-bricolageGrotesque text-zinc-900 dark:text-zinc-100 tracking-tight"}>
                                {stat.value}
                            </dd>
                            <dt className={"text-base font-semibold text-zinc-700 dark:text-zinc-300"}>
                                {stat.title}
                            </dt>
                            <p className={"text-md text-zinc-500 dark:text-zinc-300"}>
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
