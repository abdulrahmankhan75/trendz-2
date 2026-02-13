"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function LogoItem({ logo }: { logo: string }) {
  return (
    <div className="w-40 h-28 flex items-center justify-center hover:scale-110 transition-transform duration-300">
      <img
        src={logo}
        alt="Fabric Partner"
        className="max-h-full object-contain"
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
    "/images/fabric6.png",
    "/images/fabric7.png",
    "/images/fabric8.png",
    "/images/fabric9.png",
    "/images/fabric10.png",
    "/images/fabric11.png",
    "/images/fabric12.png",
    "/images/fabric13.png",
    "/images/fabric14.png",
  ];

  // duplicate array for seamless loop
  const loopLogos = [...partners, ...partners];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="fabric-partners" className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-center mb-12 scroll-fade-in-up ${headingVisible ? "visible" : ""
            }`}
        >
          Our Fabric Partners
        </h2>

        {/* Row 1 */}
        <div className="overflow-hidden mb-8">
          <div className="flex w-max gap-16 marquee-left">
            {loopLogos.map((logo, i) => (
              <LogoItem key={`r1-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mb-8">
          <div className="flex w-max gap-16 marquee-right">
            {loopLogos.map((logo, i) => (
              <LogoItem key={`r2-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 3 */}
        {/* <div className="overflow-hidden">
          <div className="flex w-max gap-16 marquee-left">
            {loopLogos.map((logo, i) => (
              <LogoItem key={`r3-${i}`} logo={logo} />
            ))}
          </div>
        </div> */}

      </div>
    </section>
  );
}
