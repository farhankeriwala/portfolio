'use client'

import React from "react";
import Image from "next/image";
import {bricolageGrotesque} from "@/fonts/bricolageGrotesque";

const BioIntro = () => {
    return (
        <section className="relative py-20 px-6 lg:px-12 overflow-hidden">
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div
                    className="w-72 h-72 bg-gradient-to-tr from-orange-400 to-amber-500 rounded-full absolute top-0 left-0"/>
                <div
                    className="w-96 h-96 bg-gradient-to-bl from-yellow-400 to-orange-600 rounded-full absolute bottom-10 right-10"/>
            </div>


            <div
                className="max-w-4xl mx-auto relative z-10 bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md rounded-2xl p-8 border border-white/10 dark:border-white/10 shadow-md">
                <div className="flex flex-col items-center space-y-6">
                    <Image
                        src="/assets/images/farhan.png"
                        alt="Farhan Keriwala"
                        width={100}
                        height={100}
                        className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm"
                    />
                    <p className={`text-lg md:text-xl text-zinc-700 dark:text-zinc-300 leading-relaxed text-center ${bricolageGrotesque.className}`}>
                        I’m a full-stack developer with a passion for building scalable SaaS products,
                        combining clean frontend UX with powerful backend logic. With a strong foundation in
                        computer science, I work at the intersection of Fintech, AI, and Education.
                        Whether I’m integrating real-time APIs, deploying machine learning models, or designing
                        interactive dashboards — I aim to ship fast, reliable, and meaningful software.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default BioIntro;
