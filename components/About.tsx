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
          <p className="text-gray-900 leading-relaxed text-base sm:text-lg">
            Trendz Uniforms Unlimited is an experienced uniform manufacturer known for high quality products and dependable service. We work closely with businesses to create uniforms that truly match their needs, focusing on great design, comfort, and cost effectiveness from start to finish.

            <br /><br />
            Our skilled team brings creativity and fresh design ideas to everyday uniforms, offering custom styles, fabrics, and colors with no fixed templates. Whether it is custom made, cut and sew, or private labeling, we stay flexible to handle urgent and special requirements.
            We have proudly worked with leading hotels, corporates, restaurants, educational institutions, and international clients across India, UAE, Saudi Arabia, and Bahrain. Our product range includes uniforms for hospitality, housekeeping, chefs, industrial teams, corporate wear, and casual business attire. We are also honored to have supplied uniforms to the AP and Telangana Police departments.
          </p>
        </div>

        {/* Image */}
        <div
          ref={imageRef}
          className={`scroll-fade-in-right ${imageVisible ? 'visible' : ''}`}
        >
          <Image
            src="/images/about-us.png"
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
