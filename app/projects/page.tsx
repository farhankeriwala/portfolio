import React from "react";
import {CardBody, CardContainer, CardItem} from "@/components/aceternity/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import {getProjects} from "@/lib/utils";
import {urlFor} from "@/lib/sanity/imageUrl";
import H1 from "@/components/typography/headings/H1";

const Page = async () => {
    const projects = await getProjects();
    return (
        <section className="container p-4">
            <H1>
                Projects
            </H1>
            <div className={"grid grid-cols-1 xl:grid-cols-2"}>
                {projects!.map((project) => (
                    <CardContainer key={project.slug + project.description} className="inter-var">
                        <CardBody
                            className="relative group/card hover:shadow-lg dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]
               dark:bg-black w-auto sm:w-[30rem] h-auto rounded-xl p-6 space-y-6"
                        >
                            {/* Title */}
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold font-lato capitalize text-neutral-800 dark:text-white"
                            >
                                {project.title}
                            </CardItem>

                            {/* Truncated Description */}
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-600 font-poppins capitalize text-sm max-w-sm truncate dark:text-neutral-300"
                            >
                                {project.description}
                            </CardItem>

                            {/* Project Image */}
                            <CardItem translateZ="100">
                                <div className="w-full max-h-[400px] overflow-hidden my-6 rounded-lg border">
                                    <Image
                                        src={urlFor(project.images[0].asset).url()}
                                        alt={project.title}
                                        width={500}
                                        height={500}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </CardItem>

                            {/* Button aligned right */}
                            <div className="flex justify-end">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={`/projects/${project.slug.current}`}
                                    className="px-6 py-2 rounded-xl font-lato text-sm font-medium text-white border
                   border-neutral-950 hover:text-neutral-950 bg-neutral-950 hover:bg-neutral-200 transition"
                                >
                                    See more &rarr;
                                </CardItem>
                            </div>
                        </CardBody>
                    </CardContainer>


                ))}
            </div>
        </section>
    );
};

export default Page;