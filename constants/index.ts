export const navItems: NavItem[] = [
    {
        href: "/",
        label: "Home",
        icon: '/assets/icons/home.svg'
    },
    {
        href: "/about",
        label: "About",
        icon: '/assets/icons/user.svg'

    },
    {
        href: "/projects",
        label: "Projects",
        icon: '/assets/icons/gallery.svg'
    },
    // {
    //     href: "/services",
    //     label: "Services",
    //     icon: '/assets/icons/settings.svg'
    // },
    {
        href: "/contact",
        label: "Contact",
        icon: '/assets/icons/contact.svg'
    },
]

export const socialMediaItems: SocialMediaItem[] = [
    {
        url: 'https://www.instagram.com/farhan.keriwala/',
        label: 'Instagram',
        icon: '/assets/icons/instagram.svg'
    },
    {
        url: 'https://www.linkedin.com/in/farhankeriwala/',
        label: 'LinkedIn',
        icon: '/assets/icons/linkedin.svg'
    },
    {
        url: 'https://github.com/farhankeriwala',
        label: 'GitHub',
        icon: '/assets/icons/github.svg'
    },
]

export const heroCodeBlockCode = `import React from 'react';
import {Separator} from "@/components/ui/separator";
import Image from "next/image";

const Home = () => {
    return (
        <section className={"container"}>
            <div className={"w-full flex flex-col"}>
                <h1 className={"heading"}>Farhan Keriwala</h1>
                <Image src={'/assets/images/profile.png'} alt={"profile"} width={50} height={50} className={"object-contain"}/>
                <h2 className={"font-bold text-6xl"}>BSc Computer Science Student</h2>
                <div className={"flex items-center space-x-8"}>
                    <h3 className={"font-semiBold text-xl text-neutral-950"}>Upcoming Software Engineer</h3>
                    <Separator/>
                    <h3 className={"font-semiBold text-xl text-neutral-950"}>Aspiring Quantum Analyst</h3>
                    <Separator/>
                    <h3 className={"font-semiBold text-xl text-neutral-950"}>Freelance Web Developer</h3>
                </div>
            </div>
        </section>
    );
};

export default Home;`