import React from 'react'
import EducationTimeline from '@/components/about/EducationTimeline';
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import {fetchEducation, getExperience} from "@/lib/utils";
import BioIntro from "@/components/about/BioIntro";

const About = async () => {
    const education = await fetchEducation();
    const experiences = await getExperience();

    return (
        <div className={"container"}>
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    About
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    I am a passionate developer with a strong background in building web applications, integrating AI technologies, and creating SaaS products.
                </p>
            </div>            <main className={"flex flex-col space-y-12"}>
                <BioIntro/>
                <EducationTimeline education={education!}/>
                <ExperienceTimeline experiences={experiences!}/>
            </main>
        </div>
    )
}

export default About