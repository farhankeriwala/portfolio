"use server";

import React from "react";
import Carousel from "@/components/Carousel";
import {getProjects} from "@/lib/utils";
import {LinkPreview} from "@/components/aceternity/LinkPreview";
import {Button} from "@/components/ui/button";
import {urlFor} from "@/lib/sanity/imageUrl";
import Image from "next/image";
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from "@/components/ui/tooltip";
import H2 from "@/components/typography/headings/H2";
import H1 from "@/components/typography/headings/H1";

interface Feature {
    name: string;
    description: string;
}

const Page = async ({params}: { params: Promise<{ slug: string }> }) => {
    const slug = (await params).slug;
    const projects = await getProjects();
    const project = projects!.find((p) => p.slug.current === slug);

    return (
        <section className="relative w-full min-h-screen py-16 px-6 md:px-12">
            <div className="max-w-5xl mx-auto space-y-20">
                <div className="text-center">
                    <H1>{project?.title}</H1>
                </div>

                {/* Description */}
                <section className="space-y-4">
                    <H2>Description</H2>
                    <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                        {project?.description}
                    </p>
                </section>

                {/* Features */}
                <section className="space-y-4">
                    <H2>Features</H2>
                    <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-zinc-700 dark:text-zinc-300">
                        {project?.features.map((feature: Feature) => (
                            <li key={feature.name}>
                                <span className="font-semibold">{feature.name}</span> – {feature.description}
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Tech Stack */}
                <section className="space-y-6">
                    <H2>Technologies</H2>
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {project?.techStack.map((tech: any, index: number) => (
                            <TooltipProvider key={index}>
                                <Tooltip delayDuration={200}>
                                    <TooltipTrigger asChild>
                                        <div
                                            className="p-3 rounded-xl border border-zinc-200 dark:border-white/10 shadow-sm hover:shadow-md transition-all
                       bg-white dark:bg-neural-300 backdrop-blur-md"
                                        >
                                            <Image
                                                src={urlFor(tech.image.asset).url()}
                                                alt={tech.name}
                                                width={60}
                                                height={60}
                                                className="object-contain"
                                            />
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent className="text-sm font-medium">
                                        {tech.name}
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ))}
                    </div>

                </section>

                {/* Links */}
                {project?.github && (
                    <section className="space-y-4">
                        <H2>Links</H2>
                        <div className="grid gap-6 md:grid-cols-2">
                            {project?.url && (
                                <LinkPreview url={project?.url} quality={100} width={400} height={200}>
                                    <Button variant="outline" className="w-full">
                                        Live Demo
                                    </Button>
                                </LinkPreview>
                            )}
                            <LinkPreview url={project?.github} quality={100} width={400} height={200}>
                                <Button variant="outline" className="w-full">
                                    GitHub Repo
                                </Button>
                            </LinkPreview>
                        </div>
                    </section>
                )}

                {/* Images */}
                <section className="space-y-4">
                    <H2>Images</H2>
                    <div className="rounded-xl overflow-hidden border border-white/10 dark:border-white/10">
                        <Carousel images={project?.images}/>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Page;
