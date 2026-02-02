"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const products = [
  "/images/product1.png",
  "/images/product2.png",
  "/images/product3.png",
];

function ProductCard({ img, index }: { img: string, index: number }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`rounded-3xl overflow-hidden shadow-lg scroll-scale-in hover:shadow-xl transition-all duration-500 ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Image
        src={img}
        alt={`Product ${index + 1}`}
        width={600}
        height={420}
        className="w-full h-[250px] sm:h-[300px] md:h-[420px] object-cover hover:scale-110 transition-transform duration-700"
      />
    </div>
  );
}

export default function Products() {
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="products" className="py-16 sm:py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold text-center mb-10 sm:mb-14 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          Our Products
        </h2>

        <div className="
  grid
  grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-3
  gap-6
  md:gap-8
  mx-0
  md:mx-20
  lg:mx-40
">

          {products.map((img, i) => (
            <ProductCard key={i} img={img} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
