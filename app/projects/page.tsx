import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/aceternity/ProjectCard";
import Image from "next/image";
import Link from "next/link";
import { getProjects } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/imageUrl";
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
                    <CardContainer
                        key={project.slug + project.description}
                        className="inter-var"
                    >
                        <CardBody className="bg-neutral-50 relative group/card hover:shadow-lg  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                            <CardItem
                                translateZ="50"
                                className="text-xl font-bold font-lato capitalize text-neutral-800 dark:text-white"
                            >
                                {project.title}
                            </CardItem>
                            <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-600 font-poppins capitalize text-sm max-w-sm truncate mt-2 dark:text-neutral-300"
                            >
                                {project.description}
                            </CardItem>
                            <CardItem translateZ="100" className="w-full mt-4">
                                <Image
                                    src={urlFor(project.images[0].asset).url()}
                                    alt={project.title}
                                    width={500}
                                    height={500}
                                    className={
                                        "border-2 max-h-[400px] w-auto mx-auto my-8 rounded-lg"
                                    }
                                />
                            </CardItem>
                            <div className="flex justify-end items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    as={Link}
                                    href={`/projects/${project.slug.current}`}
                                    className="px-8 py-2 rounded-xl font-lato text-base font-normal text-white border border-neutral-950  hover:text-neutral-950 bg-neutral-950 hover:bg-neutral-200"
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