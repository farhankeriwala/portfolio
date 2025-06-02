"use client";

import {IconBrain} from "@tabler/icons-react";

import {Card, CardContent} from "@/components/ui/card";
import {motion} from "framer-motion";
import Image from "next/image";

const stack = [
    {
        title: "Frontend",
        items: [
            {name: "React", icon: <Image src={'/assets/icons/react.svg'} alt={'java'} width={20} height={20}/>},
            {name: "Next.js", icon: <Image src={'/assets/icons/nextjs.svg'} alt={'java'} width={20} height={20}/>},
            {name: "Vue.js", icon: <Image src={'/assets/icons/vue.svg'} alt={'java'} width={20} height={20}/>},
            {
                name: "Tailwind CSS",
                icon: <Image src={'/assets/icons/tailwind.svg'} alt={'java'} width={20} height={20}/>
            },
            {name: "ShadCN UI", icon: <Image src={'/assets/icons/shadcn.png'} alt={'shadcn'} width={20} height={20}/>},
            {
                name: "Framer Motion",
                icon: <Image src={'/assets/icons/framer.svg'} alt={'framer'} width={20} height={20}/>
            },


        ],
    },
    {
        title: "Backend",
        items: [
            {name: "Django", icon: <Image src={'/assets/icons/django.svg'} alt={'java'} width={20} height={20}/>},
            {name: "Supabase", icon: <Image src={'/assets/icons/supabase.svg'} alt={'java'} width={20} height={20}/>},
            {name: "PostgreSQL", icon: <Image src={'/assets/icons/postgres.svg'} alt={'java'} width={20} height={20}/>},
            {name: "Docker", icon: <Image src={'/assets/icons/docker.svg'} alt={'java'} width={20} height={20}/>},
            {
                name: "Firebase",
                icon: <Image src={'/assets/icons/firebase.svg'} alt={'firebase'} width={20} height={20}/>
            },
            {name: "Node.js", icon: <Image src={'/assets/icons/nodejs.svg'} alt={'nodejs'} width={20} height={20}/>},
            {
                name: "Express.js",
                icon: <Image src={'/assets/icons/express.svg'} alt={'express'} width={20} height={20}/>
            },
        ],
    },
    {
        title: "Programming Languages",
        items: [
            {name: "Python", icon: <Image src={'/assets/icons/python.svg'} alt={'java'} width={20} height={20}/>},
            {
                name: "JavaScript",
                icon: <Image src={'/assets/icons/javascript.svg'} alt={'java'} width={20} height={20}/>
            },
            {
                name: "TypeScript",
                icon: <Image src={'/assets/icons/typescript.svg'} alt={'java'} width={20} height={20}/>
            },
            {name: "C++", icon: <Image src={'/assets/icons/cpp.svg'} alt={'java'} width={20} height={20}/>},
            {name: "Java", icon: <Image src={'/assets/icons/java.svg'} alt={'java'} width={20} height={20}/>},
            {name: "SQLite", icon: <Image src={'/assets/icons/sqlite.svg'} alt={'sql'} width={20} height={20}/>},

        ],
    },
    {
        title: "Machine Learning / AI",
        items: [
            {name: "PyTorch", icon: <Image src={'/assets/icons/pytorch.svg'} alt={'java'} width={20} height={20}/>},
            {
                name: "Tensorflow",
                icon: <Image src={'/assets/icons/tensorflow.svg'} alt={'java'} width={20} height={20}/>
            },
            {name: "NumPy", icon: <Image src={'/assets/icons/numpy.svg'} alt={'java'} width={20} height={20}/>},
            {name: "ML Systems", icon: <IconBrain className="h-5 w-5"/>},
            {
                name: "Scikit-Learn",
                icon: <Image src={'/assets/icons/scikit-learn.svg'} alt={'scikit'} width={20} height={20}/>
            },
            {name: "Jupyter", icon: <Image src={'/assets/icons/jupyter.svg'} alt={'jupyter'} width={20} height={20}/>},

        ],
    },

];

export const TechStackSection = () => {
    return (
        <section id="tech-stack" className="relative py-24 px-6 lg:px-12 overflow-hidden">
            {/* Background blobs */}
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div
                    className="w-80 h-80 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full absolute top-10 left-10"/>
                <div
                    className="w-96 h-96 bg-gradient-to-bl from-blue-400 to-sky-500 rounded-full absolute bottom-10 right-10"/>
            </div>

            <div className="max-w-7xl mx-auto text-center relative z-10">
                <div className="flex justify-center items-center gap-4 md:gap-6 mb-6">
                    <Image src="/assets/icons/code.svg" alt="code icon" width={75} height={75}/>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100">
                        My Tech Stack
                    </h2>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-14 text-lg">
                    A curated toolkit that powers my development from frontend to backend, ML to DevOps.
                </p>

                <div className="grid gap-10 md:grid-cols-2 items-stretch">
                    {stack.map((group, idx) => (
                        <motion.div
                            key={group.title}
                            initial={{opacity: 0, y: 40}}
                            whileInView={{opacity: 1, y: 0}}
                            transition={{duration: 0.4, delay: idx * 0.1}}
                            viewport={{once: true}}
                            className="h-full"
                        >
                            <Card
                                className="relative h-full flex flex-col bg-gradient-to-br from-white/10 to-white/5 dark:from-zinc-900/30 dark:to-zinc-800/20 border border-white/10 dark:border-white/10 backdrop-blur-lg rounded-2xl transition-all duration-300 hover:scale-[1.015] hover:shadow-md">
                                <CardContent className="flex-1 p-6 flex flex-col gap-6">
                                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 tracking-tight">
                                        {group.title}
                                    </h3>

                                    <div className="flex flex-wrap gap-3">
                                        {group.items.map((item) => (
                                            <div
                                                key={item.name}
                                                className="flex items-center gap-2 text-sm px-3 py-1.5 rounded-md font-medium text-zinc-800 dark:text-zinc-100 bg-white/60 dark:bg-zinc-700/40 hover:bg-white/80 dark:hover:bg-zinc-600/50 transition-all shadow-sm"
                                            >
                                                {item.icon}
                                                {item.name}
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
