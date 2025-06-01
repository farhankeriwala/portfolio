"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity/imageUrl";

interface CarouselProps {
    images: { asset: any }[];
}

export default function Carousel({ images }: CarouselProps) {
    const [current, setCurrent] = useState(0);
    const refs = useRef<(HTMLDivElement | null)[]>([]);

    const scrollToIndex = (index: number) => {
        refs.current[index]?.scrollIntoView({ behavior: "smooth", inline: "center" });
        setCurrent(index);
    };

    const handleNext = () => scrollToIndex((current + 1) % images.length);
    const handlePrevious = () => scrollToIndex((current - 1 + images.length) % images.length);

    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") handlePrevious();
            if (e.key === "ArrowRight") handleNext();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [current]);

    return (
        <div className="relative w-full max-w-8xl mx-auto overflow-hidden">
            <div className="flex snap-x snap-mandatory overflow-x-auto scroll-smooth no-scrollbar">
                {images.map((image, index) => (
                    <div
                        key={index}
                        ref={(el) => (refs.current[index] = el)}
                        className="flex-shrink-0 w-full snap-center h-[50vw] max-h-[700px] relative"
                    >
                        <Image
                            src={urlFor(image.asset).url()}
                            alt="Project image"
                            fill
                            loading="lazy"
                            className="object-contain rounded-xl"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 50vw"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Buttons */}
            <button
                className="absolute cursor-pointer hover:scale-105 top-1/2 left-2 transform -translate-y-1/2 bg-neutral-50/80 p-2 rounded-full shadow-lg hover:bg-neutral-100 transition md:left-4"
                onClick={handlePrevious}
                aria-label="Previous slide"
            >
                <Image src="/assets/icons/arrow-left.svg" alt="previous" width={24} height={24} />
            </button>

            <button
                className="absolute cursor-pointer hover:scale-105 top-1/2 right-2 transform -translate-y-1/2 bg-neutral-50/80 p-2 rounded-full shadow-lg hover:bg-neutral-100 transition md:right-4"
                onClick={handleNext}
                aria-label="Next slide"
            >
                <Image src="/assets/icons/arrow-right.svg" alt="next" width={24} height={24} />
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition ${
                            current === index ? "bg-blue-600 scale-125" : "bg-neutral-300"
                        }`}
                        onClick={() => scrollToIndex(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
