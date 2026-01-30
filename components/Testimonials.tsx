"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    name: "Fatima Khoury",
    text:
      "We’ve been sourcing our school uniforms from Trendz for three years now. The fabric quality is outstanding—it withstands daily wear and tear and multiple washes without losing color.",
  },
  {
    name: "Fatima Khoury",
    text:
      "Finding the right sizes for a diverse student body used to be a nightmare. Trendz Uniforms Unlimited made it seamless with their precise sizing charts and custom tailoring options.",
  },
  {
    name: "Fatima Khoury",
    text:
      "Our students look incredibly professional in their new blazers and trousers. The stitching is neat, and the fit is modern yet comfortable. It has truly elevated our school’s image.",
  },
  {
    name: "Fatima Khoury",
    text:
      "Our students look incredibly professional in their new blazers and trousers. The stitching is neat, and the fit is modern yet comfortable.",
  },
  {
    name: "Fatima Khoury",
    text:
      "From shirts and skirts to the specific school shoes, Trendz handles everything. It’s a huge relief for parents to have a reliable, high-quality source in Abids.",
  },
  {
    name: "Fatima Khoury",
    text:
      "As a head chef, I need a jacket that breathes and moves with me in a hot kitchen. The chef coats from Trendz are the best I’ve worn—durable, stylish, and very professional.",
  },
  {
    name: "Fatima Khoury",
    text:
      "Our front office staff receives compliments daily on their uniforms. Trendz perfectly captured our hotel's brand colors and provided an elegant, high-end look.",
  },
  {
    name: "Fatima Khoury",
    text:
      "We ordered waiter uniforms and aprons for our entire staff. Even after months of busy shifts, the stitching remains strong and the stains wash out easily. Truly industrial-grade quality.",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: typeof testimonials[0], index: number }) {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`
        relative
        bg-white/5
        backdrop-blur-md
        rounded-2xl
        p-4
        sm:p-6
        min-h-[200px]
        sm:h-[230px]
        flex flex-col justify-between
        border border-white/20
        shadow-lg shadow-black/20
        hover:border-white/30
        hover:bg-white/8
        transition-all duration-300
        overflow-hidden
        scroll-fade-in-up
        ${isVisible ? 'visible' : ''}
      `}
      style={{
        boxShadow: 'inset 0 1px 0 0 rgba(255, 255, 255, 0.1), 0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        transitionDelay: `${index * 0.05}s`,
      }}
    >
      {/* Inner border effect */}
      <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none" />
      {/* Quote */}
      <div className="text-4xl text-white/70">"</div>

      {/* Text */}
      <p className="text-sm text-gray-200 leading-relaxed">
        {testimonial.text}
      </p>

      {/* User */}
      <div className="flex items-center gap-3">
        <img
          src="/images/user1.png"
          className="w-10 h-10 rounded-full object-cover"
          alt=""
        />
        <div>
          <p className="text-sm font-semibold">{testimonial.name}</p>
          <p className="text-xs text-gray-400">
            google reviews
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [headingRef, headingVisible] = useScrollAnimation();

  return (
    <section id="testimonials" className="bg-[#2f2f2f] py-16 sm:py-20 md:py-24 text-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6  justify-flex-start items-center">
        {/* Heading */}
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl font-bold ml-29 mb-8 sm:mb-12 scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
        >
          What our clients say about us
        </h2>

        {/* Scroll Area */}
        <div className="relative overflow-x-auto -mx-4 sm:-mx-6 px-4 sm:px-6 justify-center items-center">
          {/* Mobile: Single column, Desktop: 2-row horizontal grid */}
          <div
            className="
              grid
              sm:grid-rows-2
              sm:grid-flow-col
              sm:auto-cols-[300px]
              md:auto-cols-[340px]
              gap-4
              sm:gap-6
              md:gap-8
              pb-4
              justify-center items-center
            "
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} index={i} />
            ))}
          </div>

          {/* Right fade overlay */}
          {/* <div className="pointer-events-none absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#2f2f2f] to-transparent" /> */}

        </div>

      </div>
    </section>
  );
}
