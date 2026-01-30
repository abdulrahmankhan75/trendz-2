"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function PartnerLogo({ logo, index }: { logo: string, index: number }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`w-44 sm:w-44 h-36 sm:h-36 flex items-center justify-center scroll-scale-in hover:scale-110 transition-transform duration-300 ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <img
        src={logo}
        alt="Fabric Partner"
        className="max-h-full object-contain grayscale-0 hover:scale-110 transition-all duration-500"
      />
    </div>
  );
}

export default function FabricPartners() {
  const partners = [
    "/images/fabric1.png",
    "/images/fabric2.png",
    "/images/fabric3.png",
    "/images/fabric4.png",
    "/images/fabric5.png",
  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="fabric-partners" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          Our Fabric Partners
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-16">
          {partners.map((logo, i) => (
            <PartnerLogo key={i} logo={logo} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
