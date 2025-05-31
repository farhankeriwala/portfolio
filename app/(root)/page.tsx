"use client";

import React from "react";
import { CodeBlock } from "@/components/aceternity/CodeBlock";
import MyStatistics from "@/components/landing-page/MyStatistics";
import { javaCode, pythonCode, typescriptCode } from "@/constants";
import { TechStackSection } from "@/components/landing-page/TechStack";
import { GitHubStats } from "@/components/landing-page/GithubStats";
// import { Testimonials } from "@/components/landing-page/Testimonials";

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            {/* 🎯 Hero Section */}
            <section className="w-full px-6 lg:px-12 pt-24 pb-16 text-center bg-transparent">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    👋🏼 Hey, I’m Farhan
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
                    I'm a full-stack developer building modern, scalable SaaS products using Next.js, Django, and AI — with a focus on Fintech, EdTech, and Machine Learning.
                </p>
            </section>

            {/* 💻 Code Showcase */}
            <section className="w-full px-6 lg:px-12 py-24 bg-white dark:bg-zinc-950">
                <div className="max-w-7xl mx-auto">
                    <CodeBlock
                        language="tsx"
                        filename="AboutFarhan.ts"
                        tabs={[
                            {
                                name: "web.ts",
                                code: typescriptCode,
                                language: "tsx",
                                highlightLines: [3, 5, 9],
                            },
                            {
                                name: "engineering.java",
                                code: javaCode,
                                language: "java",
                                highlightLines: [6, 11],
                            },
                            {
                                name: "ml.py",
                                code: pythonCode,
                                language: "python",
                                highlightLines: [5, 7],
                            },
                        ]}
                    />
                </div>
            </section>

            {/* 📈 Statistics */}
            <section className="w-full bg-white dark:bg-zinc-950">
                <MyStatistics />
            </section>

            {/* 🧰 Tech Stack */}
            <section className="w-full bg-white dark:bg-zinc-950">
                <TechStackSection />
            </section>

            {/* 📊 GitHub Activity */}
            <section className="w-full bg-white dark:bg-zinc-950">
                <GitHubStats />
            </section>

            {/* ⭐ Testimonials - Optional */}
            {/*
            <section className="w-full bg-zinc-50 dark:bg-zinc-900">
                <Testimonials />
            </section>
            */}
        </main>
    );
};

export default Page;
