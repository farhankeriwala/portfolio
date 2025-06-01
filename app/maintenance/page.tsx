import React from "react";

const Page = () => {
    return (
        <div className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <p className="text-lg font-semibold text-blue-600">
                    307 Temporary Redirect
                </p>
                <h1 className="mt-4 text-balance text-5xl font-lato font-semibold tracking-tight text-neutral-900 sm:text-7xl">
                    I&apos;ll be back soon...
                </h1>
                <p className="mt-6 text-pretty text-lg font-poppins font-medium text-neutral-500 sm:text-xl/8">
                    My website is currently undergoing scheduled maintenance. Thank you
                    for your patience!
                </p>
                <div className="flex justify-center items-center">
                    <span className={"loader my-20"}></span>
                </div>
            </div>
        </div>
    );
};

export default Page;