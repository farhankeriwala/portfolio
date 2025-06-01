'use client';

import React from "react";
import { formatSanityDate } from "@/lib/utils";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/imageUrl";
import H2 from "@/components/typography/headings/H2";
import { motion } from "framer-motion";

const EducationTimeline = ({ education }: { education: SanityDocument[] }) => {
    return (
        <section className="relative py-24 px-6 lg:px-12 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div className="w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full absolute -top-10 -left-10" />
                <div className="w-96 h-96 bg-gradient-to-tr from-pink-400 to-rose-500 rounded-full absolute bottom-10 right-10" />
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <H2>Education</H2>

                <div className="relative mt-12">
                    {/* Vertical line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-300 dark:bg-zinc-700" />

                    <ul className="space-y-12 pl-10">
                        {education?.length ? (
                            education
                                .slice()
                                .reverse()
                                .map((edu, i) => (
                                    <motion.li
                                        key={edu._id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
                                        className="relative"
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-1 top-3 w-3 h-3 border-2 border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-full z-10" />

                                        {/* Card content */}
                                        <div className="bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md border border-white/10 dark:border-white/10 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all">
                                            <div className="flex items-center gap-4 mb-3">
                                                <Image
                                                    src={urlFor(edu.logo.asset).url()}
                                                    alt={edu.institution}
                                                    width={40}
                                                    height={40}
                                                    className="rounded-md object-contain"
                                                />
                                                <div>
                                                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                                                        {edu.degree}
                                                    </h3>
                                                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                                        {edu.institution}
                                                    </p>
                                                </div>
                                            </div>

                                            <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-2">
                                                {formatSanityDate(edu.startDate)} –{" "}
                                                {edu.endDate ? formatSanityDate(edu.endDate) : "Present"}
                                            </p>

                                            <div className="text-sm space-y-1">
                                                <p className="text-zinc-700 dark:text-zinc-300">
                                                    <span className="font-medium">Subject{edu.fieldsOfStudy.length > 1 ? "s" : ""}:</span>{" "}
                                                    {edu.fieldsOfStudy.join(", ")}
                                                </p>
                                                <p className="text-zinc-700 dark:text-zinc-300">
                                                    <span className="font-medium">Grade:</span> {edu.grades}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.li>
                                ))
                        ) : (
                            <p className="text-zinc-500 dark:text-zinc-400 text-center">No education data found.</p>
                        )}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default EducationTimeline;
