"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

function ClientLogo({ logo }: { logo: string }) {
  return (
    <div className="w-40 h-28 flex items-center justify-center hover:scale-110 transition-transform duration-300">
      <img
        src={logo}
        alt="Client Logo"
        className="max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-500"
      />
    </div>
  );
}

export default function Clientele() {
  const logos1 = [
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
    "/images/client6.png",
    "/images/client7.png",
    "/images/client8.png",
    "/images/client9.png",
    "/images/client1.png",
    "/images/client2.png",
    "/images/client3.png",
    "/images/client4.png",
    "/images/client5.png",
  ];
  const logos2 = [
    "/images/client10.png",
    "/images/client11.png",
    "/images/client12.png",
    "/images/client13.png",
    "/images/client14.png",
    "/images/client15.png",
    "/images/client16.png",
    "/images/client17.png",
    "/images/client18.png",
    "/images/client10.png",
    "/images/client11.png",
    "/images/client12.png",
    "/images/client13.png",
    "/images/client14.png",
  ];

  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="clientele" className="py-16 bg-[#2f2f2f] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-white text-center mb-12 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          Our Clientele
        </h2>

        {/* Row 1 */}
        <div className="overflow-hidden mb-8">
          <div className="flex w-max gap-16 marquee-left">
            {logos1.map((logo, i) => (
              <ClientLogo key={`r1-${i}`} logo={logo} />
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="overflow-hidden mb-8">
          <div className="flex w-max gap-16 marquee-right">
            {logos2.map((logo, i) => (
              <ClientLogo key={`r2-${i}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
