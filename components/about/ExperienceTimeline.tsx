'use client';

import React from "react";
import {formatSanityDate} from "@/lib/utils";
import Image from "next/image";
import {urlFor} from "@/lib/sanity/imageUrl";
import {SanityDocument} from "next-sanity";
import H2 from "@/components/typography/headings/H2";

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
                    {/* Vertical line */}
                    <div className="absolute left-5 top-0 bottom-0 w-px bg-zinc-300 dark:bg-zinc-700"/>

                    <ul className="space-y-12 pl-10">
                        {experiences?.length ? (
                            experiences.map((exp) => (
                                <li key={exp._id} className="relative">
                                    {/* Timeline dot */}
                                    <div className="absolute left-1 top-3 w-3 h-3 border-2 border-zinc-400 dark:border-zinc-600 bg-white dark:bg-zinc-900 rounded-full z-10" />

                                    {/* Card content */}
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
                                </li>
                            ))
                        ) : (
                            <p className="text-center text-zinc-500 dark:text-zinc-400">
                                No experience data found.
                            </p>
                        )}
                    </ul>

                </div>

                <div className="flex justify-center mt-16">
                    <a
                        href="/assets/resume.pdf"
                        download="farhan_keriwala_resume.pdf"
                        className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-xl bg-white/80 dark:bg-zinc-800/30 backdrop-blur-md border border-white/10 dark:border-white/10 text-zinc-900 dark:text-zinc-100 hover:shadow-lg transition-all"
                    >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                            <path
                                d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                        </svg>
                        Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ExperienceTimeline;
