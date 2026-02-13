"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ClientLogo({ logo, index }: { logo: string, index: number }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`p-4 sm:p-6 md:p-8 scroll-scale-in hover:scale-110 transition-transform duration-100 ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <img
        src={logo}
        alt="Client Logo"
        className="w-full h-auto max-h-16 sm:max-h-20 md:max-h-24 object-contain grayscale hover:grayscale-0 transition-all duration-500"
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
    "/images/client6.png",
    "/images/client7.png",
    "/images/client8.png",
    "/images/client9.png",
    "/images/client10.png",
    "/images/client11.png",
    "/images/client12.png",
    "/images/client13.png",
    "/images/client14.png",
    "/images/client15.png",
    "/images/client16.png",
    "/images/client17.png",
    "/images/client18.png",
  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="clientele" className="py-8 sm:py-12 md:py-16 bg-[#2f2f2f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8 md:mb-10 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          Our Clientele
        </h2>
        <div className="
  grid
  grid-cols-2
  sm:grid-cols-3
  md:grid-cols-4
  lg:grid-cols-6
  gap-4
  sm:gap-6
  md:gap-8
  justify-center items-center
">

          {logos.map((logo, i) => (
            <ClientLogo key={i} logo={logo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
