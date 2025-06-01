'use client';

import React, {ChangeEvent, FormEvent, useState} from 'react';
import {Checkbox} from "@/components/ui/checkbox";
import {Alert, AlertDescription} from "@/components/ui/alert";
import Loader from "@/components/Loader";
import Link from "next/link";
import {IconCheck} from "@tabler/icons-react";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });

    const [isPrivacyAgreed, setIsPrivacyAgreed] = useState<boolean>(false);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const [alertMessage, setAlertMessage] = useState<string>('');

    const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY) {
            console.error('API key is not set.');
            return;
        }

        try {
            setIsSubmitting(true);

            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB_3_FORMS_API_KEY,
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                    message: formData.message,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setFormData({firstName: '', lastName: '', email: '', message: ''});
                setIsPrivacyAgreed(false);
                setAlertMessage('Form submitted successfully');
                setShowAlert(true);
            } else {
                setAlertMessage('Form submission failed. Try again later.');
                setShowAlert(true);
            }
        } catch (error) {
            console.error('An error occurred during form submission:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}
              className="max-w-3xl mx-auto space-y-8 p-6 bg-white/30 dark:bg-zinc-800/20 backdrop-blur-md rounded-2xl border border-white/10 dark:border-white/10 shadow-md">
            {isSubmitting && <Loader/>}

            {showAlert && (
                <Alert
                    className="my-6 animate-in fade-in slide-in-from-top-2 border border-green-400 bg-green-100/80 dark:bg-green-400/10 text-green-900 dark:text-green-100 px-6 py-4 rounded-xl shadow-lg"
                >
                    <AlertDescription className="text-base font-medium text-white flex items-center space-x-2">
                        <IconCheck className={'h-5 w-5 text-black dark:text-white'}/>
                        {alertMessage}
                    </AlertDescription>
                </Alert>
            )}


            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl border bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="col-span-full border w-full rounded-xl bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="col-span-full border w-full rounded-xl bg-white dark:bg-zinc-900 px-4 py-3 text-sm text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-500"
                />
            </div>

            <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2">Please allow 5–7 business days for your enquiry
                to be answered.</p>

            <div className="flex items-start space-x-3 sm:col-span-2">
                <Checkbox
                    id="privacy-policy"
                    checked={isPrivacyAgreed}
                    onCheckedChange={(checked) => setIsPrivacyAgreed(!!checked)}
                />
                <label
                    htmlFor="privacy-policy"
                    className="text-sm text-zinc-700 dark:text-zinc-300 leading-snug"
                >
                    By selecting this, you agree to the{" "}
                    <Link
                        href="/privacy-policy"
                        className="underline font-medium text-zinc-700 dark:text-zinc-300"
                    >
                        privacy policy
                    </Link>
                    .
                </label>
            </div>


            <button
                type="submit"
                disabled={!isPrivacyAgreed || isSubmitting}
                className="mt-6 w-full rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white cursor-pointer dark:text-zinc-900 px-5 py-3 text-sm font-medium transition hover:bg-zinc-800 dark:hover:bg-zinc-200 disabled:opacity-60 disabled:cursor-not-allowed"
            >
                Submit
            </button>
        </form>
    );
};

export default ContactForm;
