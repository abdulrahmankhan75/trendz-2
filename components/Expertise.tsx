"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const expertiseData = [
  {
    title: "Fabrics",
    desc: "Premium quality fabrics sourced from trusted partners.",
    image: "/images/expertise1.png",
  },
  {
    title: "Designing",
    desc: "Modern and functional uniform designs.",
    image: "/images/expertise2.png",
  },
  {
    title: "Stitching",
    desc: "High-precision stitching for durability and comfort.",
    image: "/images/expertise3.png",
  },
];

function ExpertiseCard({ item, index }: { item: typeof expertiseData[0], index: number }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`relative w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[520px] rounded-2xl sm:rounded-3xl overflow-hidden group scroll-fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Default Title */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/70 to-transparent text-white p-3 sm:p-4 group-hover:opacity-0 transition-opacity duration-500 z-10">
        <h3 className="text-lg sm:text-xl font-bold">
          {item.title}
        </h3>
      </div>
      {/* Image */}
      <Image
        src={item.image}
        alt={item.title}
        width={600}
        height={420}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-3 sm:p-4 md:p-6 z-20">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2 text-white">
          {item.title}
        </h3>
        <p className="text-gray-200 text-xs sm:text-sm">
          {item.desc}
        </p>
      </div>


    </div>
  );
}

export default function Expertise() {
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="expertise" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-[#2f2f2f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={headingRef}
          className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 md:mb-14 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          Our Expertise
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {expertiseData.map((item, i) => (
            <ExpertiseCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}