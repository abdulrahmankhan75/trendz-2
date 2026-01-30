"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ClientLogo({ logo, index }: { logo: string, index: number }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`scroll-scale-in hover:scale-110 transition-transform duration-300 ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <img
        src={logo}
        alt="Client Logo"
        className="h-12 sm:h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}

export default function Clientele() {
  const logos = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="clientele" className="py-12 sm:py-16 md:py-20 bg-[#2f2f2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-12 md:mb-14 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          Our Clientele
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          {logos.map((logo, i) => (
            <ClientLogo key={i} logo={logo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
