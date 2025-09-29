import React from 'react';
import ContactForm from "@/components/ContactForm";

const Page: React.FC = () => {
    return (
        <section className={"container"}>
            <h1>Contact</h1>
            <ContactForm/>
        </section>
    );
};

export default Page;