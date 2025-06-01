"use client";

import React from "react";
import ServicesGrid from "@/components/services/ServicesGrid";

const Page = () => {
    return (
        <main className="px-4 py-12 md:py-20 bg-white dark:bg-black">
            <section className="max-w-7xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-100 mb-4">
                    Development Services
                </h1>
                <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                    From frontend interfaces to backend systems, explore a wide range of full-stack services tailored to your project’s needs.
                </p>
            </section>

            <ServicesGrid />
        </main>
    );
};

export default Page;
