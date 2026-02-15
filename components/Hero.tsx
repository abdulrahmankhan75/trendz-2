"use client";

import { useEffect, useState } from "react";
import HeroGetInTouch from "./contactHero";

const banners = [
    "/images/banner1.png",
    "/images/banner2.png",
    "/images/banner3.png",
];

const mobileBanners = [
    "/images/banner-mobile1.png",
    "/images/banner-mobile2.png",
    "/images/banner-mobile3.png",
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="home"
            onClick={scrollToContact}
            className="relative h-screen w-full flex items-center overflow-hidden cursor-pointer"
        >
            {/* Slideshow Container */}
            <div className="absolute inset-0 w-full h-full">
                {/* Desktop Images */}
                {banners.map((banner, index) => (
                    <div
                        key={`desktop-${index}`}
                        className={`pt-20 absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out hidden md:block ${index === currentIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                            }`}
                    >
                        <img
                            src={banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}

                {/* Mobile Images */}
                {mobileBanners.map((banner, index) => (
                    <div
                        key={`mobile-${index}`}
                        className={`pt-20 absolute inset-0 w-full h-full transition-all duration-1500 ease-in-out block md:hidden ${index === currentIndex
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-105"
                            }`}
                    >
                        <img
                            src={banner}
                            alt={`Mobile Banner ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
