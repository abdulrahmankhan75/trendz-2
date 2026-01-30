"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function HeroGetInTouch() {
    const [ref, isVisible] = useScrollAnimation<HTMLFormElement>({ threshold: 0.2 });

    return (
        <form
            ref={ref}
            action="https://formspree.io/f/abcdwxyz"
            method="POST"
            className={`
          hidden
          lg:block
          absolute
          right-4
          xl:right-10
          top-1/2
          -translate-y-1/2
          w-[320px]
          xl:w-[420px]
          bg-white/60
          backdrop-blur-md
          rounded-lg
          shadow-xl
          p-4
          xl:p-6
          scroll-fade-in-right
          ${isVisible ? 'visible' : ''}
        `}
        >
            {/* Heading */}
            <h3 className="text-lg font-semibold uppercase mb-3">
                Get in touch
            </h3>

            <div className="border-b mb-5" />

            {/* Row 1 */}
            <div className="grid grid-cols-2 gap-3 xl:gap-4 mb-4">
                <input
                    name="name"
                    placeholder="Your name here"
                    required
                    className="rounded-md px-3 py-2 text-xs xl:text-sm bg-amber-50 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />

                <input
                    name="phone"
                    type="tel"
                    placeholder="Your number here"
                    className="rounded-md px-3 py-2 text-xs xl:text-sm bg-amber-50 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
            </div>

            {/* Email */}
            <div className="mb-4">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="rounded-md px-3 py-2 text-xs xl:text-sm w-full bg-amber-50 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
            </div>

            {/* Message */}
            <div className="mb-5">
                <textarea
                    name="message"
                    rows={4}
                    placeholder="Enter your message"
                    className="rounded-md px-3 py-2 text-xs xl:text-sm w-full resize-none bg-amber-50 focus:outline-none focus:ring-2 focus:ring-black/20 transition-all"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-black text-white py-2 xl:py-2.5 rounded-md hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95 text-xs xl:text-sm font-medium"
            >
                Send message
            </button>
        </form>
    );
}
