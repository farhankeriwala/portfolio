import React from 'react'
import EducationTimeline from '@/components/about/EducationTimeline';
import ExperienceTimeline from "@/components/about/ExperienceTimeline";
import H1 from "@/components/typography/headings/H1";
import {fetchEducation, getExperience} from "@/lib/utils";
import BioIntro from "@/components/about/BioIntro";

const About = async () => {
    const education = await fetchEducation();
    const experiences = await getExperience();

    return (
        <div className={"container"}>
            <H1>About Me</H1>
            <main className={"flex flex-col space-y-12"}>
                <BioIntro/>
                <EducationTimeline education={education!}/>
                <ExperienceTimeline experiences={experiences!}/>
            </main>
        </div>
    )
}

export default About