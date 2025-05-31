"use client";

const GITHUB_USERNAME = "farhankeriwala";

export const GitHubStats = () => {
    return (
        <section id="github-stats" className="py-24 px-6 lg:px-12 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6">My GitHub Activity</h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-12 text-lg">Consistent contributions, continuous learning, and a passion for open-source.</p>
            <div className="flex justify-center">
                <img
                    src={`https://github-readme-streak-stats.herokuapp.com/?user=${GITHUB_USERNAME}&theme=github-dark&border=DD2727&stroke=ffffff00`}
                    alt="GitHub Streak Stats"
                    className="rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-md w-full max-w-4xl"
                    loading="lazy"
                />
            </div>
        </section>
    );
};
