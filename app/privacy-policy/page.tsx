'use client';

import React from 'react';
import Link from "next/link";

const Page: React.FC = () => {
    return (
        <div className="mx-auto container max-w-4xl px-6 py-12">
            <h1>Privacy Policy</h1>

            <p className="text-base text-zinc-700 dark:text-white mb-6">
                <strong>Effective Date:</strong> 4th November 2025
            </p>

            <section className="mb-10">
                <h2>1. Introduction</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    This Privacy Policy describes how personal information is collected, used, and protected when using the portfolio website at{' '}
                    <Link
                        href="https://www.farhankeriwala.com"
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        www.farhankeriwala.com
                    </Link>.
                    By using this website, you agree to the terms outlined below.
                </p>
                <p className="text-base text-zinc-700 dark:text-white mt-4">
                    The controller responsible for your personal data is:
                    <br />
                    <strong>Farhan Keriwala</strong> — contact:{" "}
                    <a className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </a>
                </p>
            </section>

            <section className="mb-10">
                <h2>2. Information Collected</h2>
                <h3 className="mt-2">2.1 Information You Provide</h3>
                <p className="text-base text-zinc-700 dark:text-white">
                    When you submit a contact form, the following information may be collected:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 dark:text-white mt-4">
                    <li>Name</li>
                    <li>Email address</li>
                    <li>Message content</li>
                </ul>

                <h3 className="mt-6">2.2 Automatically Collected (Non-Personal) Data</h3>
                <p className="text-base text-zinc-700 dark:text-white">
                    This website uses Vercel Analytics to collect non-personal technical information such as:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 dark:text-white mt-4">
                    <li>Page views and visitor flows</li>
                    <li>Device type and screen size</li>
                    <li>Approximate region (not exact location)</li>
                </ul>
                <p className="text-base text-zinc-700 dark:text-white mt-4">
                    This data is anonymised and cannot identify you.
                </p>

                <h3 className="mt-6">2.3 Search Engine Crawling</h3>
                <p className="text-base text-zinc-700 dark:text-white">
                    The website is indexed by search engines such as Google. Crawlers do not collect personal data directly, but may collect public technical metadata such as page content and site structure.
                </p>
            </section>

            <section className="mb-10">
                <h2>3. Legal Basis for Processing (GDPR / UK GDPR)</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    Personal data is processed under the following lawful bases:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 dark:text-white mt-4">
                    <li><strong>Consent</strong> — when you voluntarily submit a contact form</li>
                    <li><strong>Legitimate interest</strong> — to respond to enquiries or maintain website functionality</li>
                </ul>
            </section>

            <section className="mb-10">
                <h2>4. How Your Information Is Used</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    Personal information submitted through the contact form is used solely to:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 dark:text-white mt-4">
                    <li>Respond to enquiries</li>
                    <li>Provide requested information</li>
                </ul>
                <p className="text-base text-zinc-700 dark:text-white mt-4">
                    It is not used for marketing unless you explicitly opt in.
                </p>
            </section>

            <section className="mb-10">
                <h2>5. Data Storage & Security</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    This website is hosted on Vercel. Contact form submissions are sent directly via email and may be stored in a secure email inbox. Reasonable technical measures are taken to keep data safe; however, no method of internet transmission is 100% secure.
                </p>
            </section>

            <section className="mb-10">
                <h2>6. Data Sharing</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    No personal data is sold, rented, or shared with third parties for marketing purposes.
                </p>
                <p className="text-base text-zinc-700 dark:text-white mt-4">
                    Non-personal analytics data is processed by Vercel according to their privacy and data protection terms.
                </p>
            </section>

            <section className="mb-10">
                <h2>7. Data Retention</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    Contact form submissions are retained only for as long as necessary to respond. You may request deletion at any time by contacting{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </a>.
                </p>
            </section>

            <section className="mb-10">
                <h2>8. Your Rights (GDPR / UK GDPR)</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    You have the right to:
                </p>
                <ul className="list-disc list-inside text-base text-zinc-700 dark:text-white mt-4">
                    <li>Request access to your data</li>
                    <li>Request corrections to inaccurate information</li>
                    <li>Request deletion (“right to be forgotten”)</li>
                    <li>Withdraw consent at any time</li>
                </ul>
                <p className="text-base text-zinc-700 dark:text-white mt-4">
                    To exercise these rights, contact{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </a>.
                </p>
            </section>

            <section className="mb-10">
                <h2>9. Children’s Privacy</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    This website is not intended for children under 13, and personal data from minors is not knowingly collected.
                </p>
            </section>

            <section className="mb-10">
                <h2>10. Changes to This Policy</h2>
                <p className="text-base text-zinc-700 dark:text-white">
                    This policy may be updated from time to time. The new effective date will be posted at the top of this page.
                </p>
            </section>

            <section>
                <p className="text-base text-zinc-700 dark:text-white">
                    For any privacy-related questions, email{' '}
                    <a className="text-blue-600 hover:underline" href="mailto:contact@farhankeriwala.com">
                        contact@farhankeriwala.com
                    </a>.
                </p>
            </section>
        </div>
    );
};

export default Page;
