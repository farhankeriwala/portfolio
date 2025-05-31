"use client";

import {
    IconBrandNextjs,
    IconBrandTailwind,
    IconBrandDjango,
    IconDatabase,
    IconBrandSupabase,
    IconBrandDocker,
    IconBrain,
    IconBrandPython,
    IconBrandJavascript,
    IconBrandTypescript,
    IconBrandReact,
    IconBrandCpp,
    IconBrandVue,
} from "@tabler/icons-react";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {bricolageGrotesque} from "@/fonts/bricolageGrotesque";

const stack = [
    {
        title: "Frontend",
        items: [
            { name: "React", icon: <IconBrandReact className="h-5 w-5" /> },
            { name: "Next.js", icon: <IconBrandNextjs className="h-5 w-5" /> },
            { name: "Vue.js", icon: <IconBrandVue className="h-5 w-5" /> },
            { name: "Tailwind CSS", icon: <IconBrandTailwind className="h-5 w-5" /> },
        ],
    },
    {
        title: "Backend",
        items: [
            { name: "Django", icon: <IconBrandDjango className="h-5 w-5" /> },
            { name: "Supabase", icon: <IconBrandSupabase className="h-5 w-5" /> },
            { name: "PostgreSQL", icon: <IconDatabase className="h-5 w-5" /> },
            { name: "Docker", icon: <IconBrandDocker className="h-5 w-5" /> },
        ],
    },
    {
        title: "Programming Languages",
        items: [
            { name: "Python", icon: <IconBrandPython className="h-5 w-5" /> },
            { name: "JavaScript", icon: <IconBrandJavascript className="h-5 w-5" /> },
            { name: "TypeScript", icon: <IconBrandTypescript className="h-5 w-5" /> },
            { name: "C++", icon: <IconBrandCpp className="h-5 w-5" /> },
        ],
    },
    {
        title: "Machine Learning / AI",
        items: [
            { name: "PyTorch", icon: <IconBrain className="h-5 w-5" /> },
            { name: "ML Systems", icon: <IconBrain className="h-5 w-5" /> },
        ],
    },
];

export const TechStackSection = () => {
    return (
        <section id="tech-stack" className="relative py-24 px-6 lg:px-12 overflow-hidden">
            {/* Soft background blobs */}
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div className="w-80 h-80 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full absolute top-10 left-10" />
                <div className="w-96 h-96 bg-gradient-to-bl from-blue-400 to-sky-500 rounded-full absolute bottom-10 right-10" />
            </div>

            <div className="max-w-5xl mx-auto text-center relative z-10">
                <h2 className={`text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6`}>
                    🧰 My Tech Stack
                </h2>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-14 text-lg">
                    A curated toolkit that powers my development from frontend to backend, ML to DevOps.
                </p>

                <div className="grid gap-10 md:grid-cols-2 items-stretch">
                    {stack.map((group, idx) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="h-full"
                        >
                            <Card className="relative h-full flex flex-col bg-white/10 dark:bg-zinc-900/30 border border-white/10 dark:border-white/10 backdrop-blur-xl rounded-2xl hover:shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)] transition-all duration-300 hover:scale-[1.015] hover:shadow-xl hover:ring-1 hover:ring-white/10 dark:hover:ring-zinc-600/30">
                                <CardContent className="flex-1 p-6 flex flex-col gap-4">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                                        {group.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {group.items.map((item) => (
                                            <div
                                                key={item.name}
                                                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md font-medium text-zinc-800 dark:text-zinc-100 bg-zinc-200/50 dark:bg-zinc-700/40 hover:bg-zinc-300/60 dark:hover:bg-zinc-600/50 transition-all"
                                            >
                                                {item.icon}
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
