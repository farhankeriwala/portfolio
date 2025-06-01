'use client';

import React from 'react';
import H1 from "@/components/typography/headings/H1";
import H2 from "@/components/typography/headings/H2";
import H3 from "@/components/typography/headings/H3";
import Link from "next/link";

const Page: React.FC = () => {
    return (
        <div className="mx-auto container max-w-4xl px-6 py-12">
            <H1>Privacy Policy</H1>

            <p className="text-base text-zinc-700 mb-6">
                <strong>Effective Date:</strong> Sunday 1st June 2025
            </p>

            <section className="mb-10">
                <H2>1. Introduction</H2>
                <p className="text-base text-zinc-700">
                    Farhan Keriwala respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how information submitted through the portfolio website at{' '}
                    <Link href="https://www.farhankeriwala.com" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                        www.farhankeriwala.com
                    </Link>{' '}
                    is collected, used, and safeguarded.
                </p>
            </section>

            <section className="mb-10">
                <H2>2. Information Collected</H2>
                <H3>2.1 Information You Provide</H3>
                <p className="text-base text-zinc-700">
                    When you submit a contact form, the following information may be collected:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 mt-4">
                    <li>First Name</li>
                    <li>Email Address</li>
                    <li>Message Content</li>
                </ul>
            </section>

            <section className="mb-10">
                <H2>3. How Your Information Is Used</H2>
                <p className="text-base text-zinc-700">
                    Your information is used exclusively for the following purposes:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 mt-4">
                    <li>To respond to inquiries or messages.</li>
                    <li>To provide details about services, if requested.</li>
                </ul>
                <p className="text-base text-zinc-700 mt-4">
                    Your data is never used for marketing unless you explicitly opt in.
                </p>
            </section>

            <section className="mb-10">
                <H2>4. Data Sharing</H2>
                <p className="text-base text-zinc-700">
                    No personal data is sold or shared with third parties. All submitted information is treated as confidential and used only as outlined in this policy.
                </p>
            </section>

            <section className="mb-10">
                <H2>5. Data Retention</H2>
                <p className="text-base text-zinc-700">
                    Contact form submissions are retained only for as long as necessary to respond to your request. To request removal of your data, please email{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </a>.
                </p>
            </section>

            <section className="mb-10">
                <H2>6. Your Rights</H2>
                <p className="text-base text-zinc-700">
                    In accordance with data protection laws, you may:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 mt-4">
                    <li>Request access to the data held about you.</li>
                    <li>Request corrections to inaccurate or incomplete data.</li>
                    <li>Request deletion of your personal information (“right to be forgotten”).</li>
                </ul>
                <p className="text-base text-zinc-700 mt-4">
                    To exercise any of these rights, please contact{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </a>.
                </p>
            </section>

            <section className="mb-10">
                <H2>7. Security</H2>
                <p className="text-base text-zinc-700">
                    Reasonable security measures are in place to protect your data from unauthorized access or misuse. However, no method of data transmission over the internet is 100% secure.
                </p>
            </section>

            <section className="mb-10">
                <H2>8. Updates to This Policy</H2>
                <p className="text-base text-zinc-700">
                    This policy may be updated periodically to reflect changes in practice or legal requirements. Updates will be posted on this page with the new effective date.
                </p>
            </section>

            <section>
                <p className="text-base text-zinc-700">
                    For any questions or concerns regarding this Privacy Policy, contact{' '}
                    <Link className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </Link>.
                </p>
            </section>
        </div>
    );
};

export default Page;
