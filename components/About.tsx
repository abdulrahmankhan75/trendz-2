"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const [textRef, textVisible] = useScrollAnimation();
  const [imageRef, imageVisible] = useScrollAnimation();

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Text */}
        <div 
          ref={textRef}
          className={`scroll-fade-in-left ${textVisible ? 'visible' : ''}`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-6">About Us</h2>
          <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
            Trendz Uniforms specializes in high-quality apparel for hospitality,
            healthcare, housekeeping, and security sectors. Beyond our core
            uniforms, we offer a full suite of accessories, including custom
            T-shirts, caps, and belts.
            <br /><br />
            We combine an extensive product range with premium fabrics to ensure
            every garment meets our rigorous standards. At Trendz, we are
            committed to manufacturing excellence and 100% customer
            satisfaction.
          </p>
        </div>

        {/* Image */}
        <div 
          ref={imageRef}
          className={`scroll-fade-in-right ${imageVisible ? 'visible' : ''}`}
        >
          <Image
            src="/images/about.jpg"
            alt="About Trendz"
            width={800}
            height={600}
            className="rounded-2xl shadow-lg w-full h-auto hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}
