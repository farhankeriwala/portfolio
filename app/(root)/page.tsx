"use client";

import React from "react";
import {CodeBlock} from "@/components/aceternity/CodeBlock";
import MyStatistics from "@/components/landing-page/MyStatistics";
import {javaCode, pythonCode, typescriptCode} from "@/constants";
import {TechStackSection} from "@/components/landing-page/TechStack";
import {GitHubStats} from "@/components/landing-page/GithubStats";
import {Testimonials} from "@/components/landing-page/Testimonials";

const Page = () => {

    return (
        <main className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
                👋🏼 Hey, I’m Farhan
            </h1>
            <p className="text-lg md:text-xl max-w-2xl text-zinc-600 dark:text-zinc-400 mb-12">
                I'm a full-stack developer who builds modern, scalable SaaS products using Next.js,
                Django, and AI-driven solutions — with a focus on Fintech, EdTech and Machine Learning.
            </p>

            <div className="w-full max-w-7xl">
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
            <MyStatistics/>
            <TechStackSection/>
            <GitHubStats/>
            {/*<Testimonials/>*/}
        </main>
    );
};

export default Page;
