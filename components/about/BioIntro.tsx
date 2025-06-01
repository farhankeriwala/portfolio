'use client'

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { bricolageGrotesque } from "@/fonts/bricolageGrotesque";
import BlockQuote from "@/components/typography/BlockQuote";

const BioIntro = () => {
    return (
        <section className="relative px-4 py-24 sm:px-6 lg:px-12 overflow-hidden">
            {/* Background blur gradients */}
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div className="w-72 h-72 bg-gradient-to-tr from-orange-400 to-amber-500 rounded-full absolute -top-10 -left-10" />
                <div className="w-96 h-96 bg-gradient-to-bl from-yellow-400 to-orange-600 rounded-full absolute bottom-10 right-10" />
            </div>

            {/* Main Card */}
            <div className="relative z-10 max-w-4xl mx-auto bg-white/30 dark:bg-zinc-900/30 backdrop-blur-lg rounded-2xl shadow-xl border border-white/10 dark:border-white/10 p-8 md:p-12">
                <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 items-center">
                    {/* Animated Avatar */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="flex justify-center"
                    >
                        <Image
                            src="/assets/images/farhan.png"
                            alt="Farhan Keriwala"
                            width={120}
                            height={120}
                            className="rounded-full border border-zinc-200 dark:border-zinc-700 shadow-md"
                            priority
                        />
                    </motion.div>

                    {/* Animated Bio Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                        className={`text-zinc-700 dark:text-zinc-300 leading-relaxed ${bricolageGrotesque.className}`}
                    >
                        <p className="text-base md:text-lg">
                            I’m a full-stack developer with a passion for building scalable SaaS products—
                            blending clean frontend UX with powerful backend logic. With a strong foundation
                            in computer science, I work at the intersection of Fintech, AI, and Education.
                        </p>
                        <p className="mt-4 text-base md:text-lg">
                            Whether it’s integrating real-time APIs, deploying ML models, or designing interactive dashboards,
                            I bring a product-first mindset to every line of code.
                        </p>

                        {/* Staggered BlockQuote */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                            className="mt-6"
                        >
                            <BlockQuote>
                                I aim to ship fast, reliable, and meaningful software.
                            </BlockQuote>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default BioIntro;
