"use client";

import Image from "next/image";

export const GitHubStats = () => {
    return (
        <section
            id="github-stats"
            className="relative py-24 px-6 lg:px-12 overflow-hidden"
        >
            <div className="absolute inset-0 z-0 blur-3xl opacity-10 pointer-events-none">
                <div className="w-80 h-80 bg-gradient-to-br from-pink-500 to-red-500 rounded-full absolute top-10 left-10" />
                <div className="w-96 h-96 bg-gradient-to-bl from-amber-400 to-yellow-500 rounded-full absolute bottom-10 right-10" />
            </div>

            <div className="max-w-7xl w-full mx-auto text-center relative z-10">
                <div className="flex justify-center items-center gap-4 md:gap-6 mb-6">
                    <Image
                        src={"/assets/icons/graph-up.svg"}
                        alt={"graph"}
                        width={75}
                        height={75}
                    />
                    <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100">
                        GitHub Activity
                    </h2>
                </div>

                <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-12 text-lg">
                    Consistent contributions, continuous learning, and a passion for
                    open-source.
                </p>

                <div className="mx-auto max-w-7xl w-full rounded-2xl bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md shadow-md hover:shadow-lg transition-all duration-200">
                    <img
                        src={`https://github-readme-streak-stats.herokuapp.com/?user=${process.env.NEXT_PUBLIC_GITHUB_USERNAME}&theme=github-dark&border=ffffff00&stroke=ffffff00`}
                        alt="GitHub Streak Stats"
                        className="rounded-2xl w-full transition-transform duration-300 hover:scale-105"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
};
