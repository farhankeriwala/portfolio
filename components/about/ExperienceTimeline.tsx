'use client';

import React from "react";
import {formatSanityDate} from "@/lib/utils";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/imageUrl";
import {SanityDocument} from "next-sanity";
import H2 from "@/components/typography/headings/H2";
import Link from "next/link";
import {IconDownload} from "@tabler/icons-react";
import { motion } from "framer-motion";


const ExperienceTimeline = ({experiences}: { experiences: SanityDocument[] }) => {
    return (
        <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div
                    className="w-80 h-80 bg-gradient-to-br from-sky-500 to-blue-500 rounded-full absolute top-10 left-10"/>
                <div
                    className="w-96 h-96 bg-gradient-to-tr from-fuchsia-400 to-pink-500 rounded-full absolute bottom-10 right-10"/>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <H2>Experience</H2>

                <div className="relative mt-12">
                    {/* Vertical timeline line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-300 dark:bg-zinc-700" />

                    <motion.ul
                        className="space-y-12 pl-10"
                        initial="hidden"
                        whileInView="show"
                        variants={{
                            hidden: {},
                            show: {
                                transition: {
                                    staggerChildren: 0.2,
                                },
                            },
                        }}
                        viewport={{ once: true }}
                    >
                        {experiences?.length ? (
                            experiences.map((exp) => (
                                <motion.li
                                    key={exp._id}
                                    variants={{
                                        hidden: { opacity: 0, y: 40 },
                                        show: { opacity: 1, y: 0 },
                                    }}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    className="relative"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute left-1 top-3 w-3 h-3 border-2 border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-full z-10" />

                                    {/* Card */}
                                    <div className="bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 shadow-md hover:shadow-lg transition-all">
                                        <div className="flex items-center gap-4 mb-3">
                                            <Image
                                                src={urlFor(exp.companyLogo.asset).url()}
                                                alt={exp.company}
                                                width={40}
                                                height={40}
                                                className="rounded-md object-contain"
                                            />
                                            <div>
                                                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                                    {exp.position}
                                                </h3>
                                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                    {exp.company}
                                                </p>
                                            </div>
                                        </div>
                                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                                            {formatSanityDate(exp.startDate)} –{" "}
                                            {exp.endDate ? formatSanityDate(exp.endDate) : "Present"}
                                        </p>
                                        <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.li>
                            ))
                        ) : (
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                No experience data found.
                            </p>
                        )}
                    </motion.ul>
                </div>

                <motion.div
                    className="flex justify-center mt-16"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/assets/resume.pdf"
                        download="farhan_keriwala_resume.pdf"
                        target="_blank"
                        className="inline-flex items-center gap-2 px-5 py-3 text-base font-medium rounded-xl bg-white/80 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 hover:shadow-lg transition-all"
                    >
                        <IconDownload className="w-6 h-6" />
                        Download Resume
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
