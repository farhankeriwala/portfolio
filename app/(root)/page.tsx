"use client";

import React from "react";
import { CodeBlock } from "@/components/aceternity/CodeBlock";
import MyStatistics from "@/components/landing-page/MyStatistics";
import { javaCode, pythonCode, typescriptCode } from "@/constants";
import { TechStackSection } from "@/components/landing-page/TechStack";
// import { Testimonials } from "@/components/landing-page/Testimonials";

const Page = () => {
    return (
        <main className="flex flex-col items-center justify-center w-full overflow-x-hidden bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100">
            <section className="w-full px-6 lg:px-12 pt-24 pb-16 text-center bg-transparent">
                <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                    👋🏼 Hi, I’m Farhan
                </h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto text-zinc-600 dark:text-zinc-400">
                    Developer crafting modern SaaS products with Next.js and AI. Currently diving into quantitative models and algorithmic systems while studying for my MSc in Computational Finance at King’s College London.
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

            <section className="w-full bg-white dark:bg-zinc-950">
                <MyStatistics />
            </section>

            <section className="w-full bg-white dark:bg-zinc-950">
                <TechStackSection />
            </section>
        </main>
    );
};

export default Page;
