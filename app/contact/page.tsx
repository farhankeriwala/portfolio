import React from 'react';
import ContactForm from "@/components/ContactForm";
import H1 from "@/components/typography/headings/H1";

const Page: React.FC = () => {
    return (
        <section className={"container"}>
            <H1>Contact</H1>
            <ContactForm/>
        </section>
    );
};

export default Page;