'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { IconBriefcase, IconCode, IconMoodHappy } from "@tabler/icons-react";

const stats = [
    {
        title: "Projects",
        value: 35,
        label: "35+",
        icon: <IconCode className="h-10 w-10 text-blue-600 dark:text-blue-400" />,
        description: "Built full-stack platforms and tools for startups and production use.",
    },
    {
        title: "Years experience",
        value: 5,
        label: "5+",
        icon: <IconBriefcase className="h-10 w-10 text-green-600 dark:text-green-400" />,
        description: "Hands-on development across web, backend, AI, and cloud systems.",
    },
    {
        title: "Client satisfaction",
        value: 5,
        label: "★ ★ ★ ★ ★",
        icon: <IconMoodHappy className="h-10 w-10 text-yellow-500 dark:text-yellow-400" />,
        description: "Consistent praise for delivery, clarity and long-term support.",
    },
];

function useCountUp(target: number, duration = 800, enabled = true) {
    const [value, setValue] = useState(enabled ? 0 : target);
    const rafRef = useRef<number | null>(null);
    const startRef = useRef<number | null>(null);

    useEffect(() => {
        if (!enabled) {
            setValue(target);
            return;
        }
        startRef.current = null;
        const step = (timestamp: number) => {
            if (!startRef.current) startRef.current = timestamp;
            const elapsed = timestamp - startRef.current!;
            const t = Math.min(1, elapsed / duration);
            const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic-ish
            setValue(Math.round(target * eased));
            if (t < 1) {
                rafRef.current = requestAnimationFrame(step);
            }
        };
        rafRef.current = requestAnimationFrame(step);
        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [target, duration, enabled]);

    return value;
}

/* StatCard: a separate component so hooks are called at top level of a component */
const StatCard: React.FC<{
    stat: typeof stats[number];
    animateNumbers: boolean;
    reduceMotion: boolean;
    idx: number;
}> = ({ stat, animateNumbers, reduceMotion, idx }) => {
    const isNumeric = typeof stat.value === "number";
    // useCountUp is called at the top level of this component — valid
    const numericValue = useCountUp(Number(stat.value), 900, animateNumbers && isNumeric);

    return (
        <motion.div
            key={stat.title}
            className="rounded-2xl p-6 bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md border border-white/10 dark:border-white/10 shadow-md hover:shadow-lg transition-all duration-250 focus-within:shadow-lg"
            whileHover={reduceMotion ? undefined : { translateY: -4 }}
            initial={reduceMotion ? undefined : { opacity: 0, y: 8 }}
            whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: idx * 0.06 }}
            viewport={{ once: true }}
        >
            <div
                tabIndex={0}
                role="group"
                aria-labelledby={`stat-${stat.title}`}
                className="flex flex-col items-center text-center gap-4 outline-none focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-lg"
            >
                <div className="flex items-center justify-center">{stat.icon}</div>

                <dd className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                    {isNumeric ? (animateNumbers ? `${numericValue}+` : stat.label) : stat.label}
                </dd>

                <dt id={`stat-${stat.title}`} className="text-lg font-semibold text-zinc-700 dark:text-zinc-300">
                    {stat.title}
                </dt>

                <p className="text-sm text-zinc-500 dark:text-zinc-300 max-w-[28ch]">{stat.description}</p>
            </div>
        </motion.div>
    );
};

export const MyStatistics: React.FC = () => {
    const reduceMotion = useReducedMotion();
    const numericStats = useMemo(() => stats.map((s) => ({ ...s, isNumeric: typeof s.value === "number" })), []);

    return (
        <section className="relative py-20 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100">Track Record</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                                A snapshot of the impact and experience I bring to every project.
                            </p>
                        </div>
                    </div>
                </div>

                <motion.dl
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                    initial={reduceMotion ? undefined : { opacity: 0, y: 10 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    viewport={{ once: true }}
                >
                    {numericStats.map((stat, idx) => (
                        <StatCard
                            key={stat.title}
                            stat={stat as typeof stats[number]}
                            animateNumbers={!reduceMotion && stat.isNumeric}
                            reduceMotion={reduceMotion}
                            idx={idx}
                        />
                    ))}
                </motion.dl>
            </div>
        </section>
    );
};

export default MyStatistics;
