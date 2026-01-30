"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function Contact() {
  const [headingRef, headingVisible] = useScrollAnimation();
  const [formRef, formVisible] = useScrollAnimation();
  const [mapRef, mapVisible] = useScrollAnimation();

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-white justify-center items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 ">


        <div className=" grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Left Half - Contact Form */}
          <div
            ref={formRef}
            className={`bg-pink-50/50 border border-gray-300 p-5 rounded-xl scroll-fade-in-left ${formVisible ? 'visible' : ''}`}
          >
            <h2
              ref={headingRef}
              className={`text-3xl sm:text-4xl font-bold mb-8 sm:mb-10 text-center scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
            >
              Get in Touch
            </h2>
            <form action="https://formspree.io/f/abcdwxyz"
              method="POST" className="space-y-4 sm:space-y-6 ">
              <input
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows={4}
                className="w-full border border-gray-300 p-3 rounded focus:outline-none focus:ring-2 focus:ring-black transition-all duration-300 resize-none"
              />

              <button
                type="submit"
                className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Half - Map */}
          <div
            ref={mapRef}
            className={`scroll-fade-in-right ${mapVisible ? 'visible' : ''}`}
          >
            <div className="w-full h-full min-h-[400px] md:min-h-[500px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Location Map"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
