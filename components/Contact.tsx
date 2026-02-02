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
          {/* Left Half - Info Card */}
          {/* Left Half - Info Card */}
          <div
            ref={formRef}
            className={`bg-white border border-gray-300 p-8 rounded-xl scroll-fade-in-left ${formVisible ? 'visible' : ''}`}
          >

            {/* Heading */}
            <h2
              ref={headingRef}
              className={`text-3xl sm:text-4xl font-bold mb-10 text-center scroll-fade-in-up ${headingVisible ? 'visible' : ''}`}
            >
              Get in Touch
            </h2>

            {/* Info Grid */}
            <div className="grid gap-6">

              {/* Email */}
              <a
                href="mailto:info@trendzuniforms.com"
                className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  @
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium">info@trendzuniforms.com</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919999999999"
                target="_blank"
                className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  W
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium">+91 99999 99999</p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 border border-gray-300 rounded-lg p-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium leading-relaxed">
                    400 University Drive Suite 200,<br />
                    Coral Gables, FL 33134 USA
                  </p>
                </div>
              </div>

            </div>

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
