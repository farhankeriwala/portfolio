'use client';

import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {Grid2X2Icon, LogsIcon, SearchIcon} from "lucide-react";

type StackGroup = {
    title: string;
    items: { name: string; iconSrc: string; meta?: string }[];
};

const stack: StackGroup[] = [
    {
        title: "Frontend",
        items: [
            { name: "React", iconSrc: "/assets/icons/react.svg" },
            { name: "Next.js", iconSrc: "/assets/icons/nextjs.svg" },
            { name: "Vue.js", iconSrc: "/assets/icons/vue.svg" },
            { name: "Tailwind CSS", iconSrc: "/assets/icons/tailwind.svg" },
            { name: "shadcn/ui", iconSrc: "/assets/icons/shadcn.png" },
            { name: "Framer Motion", iconSrc: "/assets/icons/framer.svg" },
        ],
    },
    {
        title: "Backend & Infra",
        items: [
            { name: "Supabase", iconSrc: "/assets/icons/supabase.svg" },
            { name: "PostgreSQL", iconSrc: "/assets/icons/postgres.svg" },
            { name: "Docker", iconSrc: "/assets/icons/docker.svg" },
            { name: "Firebase", iconSrc: "/assets/icons/firebase.svg" },
            { name: "Node.js", iconSrc: "/assets/icons/nodejs.svg" },
            { name: "Express", iconSrc: "/assets/icons/express.svg" },
        ],
    },
    {
        title: "Languages & DB",
        items: [
            { name: "Python", iconSrc: "/assets/icons/python.svg" },
            { name: "JavaScript", iconSrc: "/assets/icons/javascript.svg" },
            { name: "TypeScript", iconSrc: "/assets/icons/typescript.svg" },
            { name: "C++", iconSrc: "/assets/icons/cpp.svg" },
            { name: "Java", iconSrc: "/assets/icons/java.svg" },
            { name: "SQLite", iconSrc: "/assets/icons/sqlite.svg" },
        ],
    },
    {
        title: "ML / AI",
        items: [
            { name: "PyTorch", iconSrc: "/assets/icons/pytorch.svg" },
            { name: "TensorFlow", iconSrc: "/assets/icons/tensorflow.svg" },
            { name: "NumPy", iconSrc: "/assets/icons/numpy.svg" },
            { name: "scikit-learn", iconSrc: "/assets/icons/scikit-learn.svg" },
            { name: "Jupyter", iconSrc: "/assets/icons/jupyter.svg" },
        ],
    },
];

export const TechStackSection: React.FC = () => {
    const [query, setQuery] = useState("");
    const [compact, setCompact] = useState(true);
    const reduceMotion = useReducedMotion();

    const filtered = useMemo(() => {
        if (!query.trim()) return stack;
        const q = query.toLowerCase();
        return stack
            .map((g) => ({
                ...g,
                items: g.items.filter((it) => it.name.toLowerCase().includes(q)),
            }))
            .filter((g) => g.items.length > 0);
    }, [query]);

    return (
        <section id="tech-stack" className="relative py-20 px-6 lg:px-12">
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
                    <div className="flex items-center gap-4">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 dark:text-zinc-100">My Tech Stack</h2>
                            <p className="text-zinc-600 dark:text-zinc-400 mt-1 max-w-xl">
                                A curated set of tools powering my work across frontend, backend, ML, and DevOps.
                            </p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 ml-auto">
                        <div className="relative">
                            <label htmlFor="tech-search" className="sr-only">Search tech</label>
                            <div className="flex items-center gap-2 bg-white/60 dark:bg-zinc-800/30 rounded-full px-3 py-2 shadow-sm">
                                <SearchIcon className="w-4 h-4 text-zinc-500 dark:text-zinc-300" />
                                <input
                                    id="tech-search"
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Filter technologies"
                                    className="bg-transparent text-sm outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-400 text-zinc-800 dark:text-zinc-100"
                                />
                            </div>
                        </div>

                        <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 dark:bg-zinc-800/30 p-1">
                            <button
                                onClick={() => setCompact(true)}
                                aria-pressed={compact}
                                className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${compact ? "bg-white/70 dark:bg-zinc-700/60" : "hover:bg-white/30 dark:hover:bg-zinc-700/20"}`}
                                title="Compact view"
                            >
                                <Grid2X2Icon className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setCompact(false)}
                                aria-pressed={!compact}
                                className={`p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 ${!compact ? "bg-white/70 dark:bg-zinc-700/60" : "hover:bg-white/30 dark:hover:bg-zinc-700/20"}`}
                                title="Detailed view"
                            >
                                <LogsIcon className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className={`grid gap-6 ${compact ? "grid-cols-1 md:grid-cols-2" : "grid-cols-1 md:grid-cols-3"}`}>
                    {filtered.length ? (
                        filtered.map((group, gi) => (
                            <motion.div
                                key={group.title}
                                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                                transition={{ duration: 0.36, delay: gi * 0.06 }}
                                viewport={{ once: true }}
                                className="h-full"
                            >
                                <Card className="h-full rounded-2xl border border-white/10 dark:border-white/10 bg-gradient-to-br from-white/5 to-white/2 dark:from-zinc-900/25 dark:to-zinc-800/20 shadow-sm">
                                    <CardContent className="p-5">
                                        <div className="flex items-baseline justify-between">
                                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                                {group.title} <span className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">({group.items.length})</span>
                                            </h3>
                                        </div>

                                        <div className={`mt-4 flex ${compact ? "flex-wrap gap-2" : "flex-col gap-3"}`}>
                                            {group.items.map((item) => (
                                                <div
                                                    key={item.name}
                                                    tabIndex={0}
                                                    role="button"
                                                    aria-label={item.name}
                                                    className={`group flex items-center gap-3 rounded-md px-3 py-2 ${compact ? "bg-white/60 dark:bg-zinc-700/30" : "bg-white/40 dark:bg-zinc-800/30"} text-zinc-800 dark:text-zinc-100 hover:scale-[1.02] focus:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-indigo-400 transition`}
                                                >
                                                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-md bg-white/0">
                                                        <Image src={item.iconSrc} alt={`${item.name} icon`} width={20} height={20} className="object-contain" />
                                                    </div>

                                                    <div className={`${compact ? "text-sm font-medium" : "text-sm"}`}>
                                                        <div className="leading-5">{item.name}</div>
                                                        {!compact && <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{item.meta ?? "Used in production & projects"}</div>}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-zinc-500 dark:text-zinc-400 py-8">No matches found.</div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default TechStackSection;
