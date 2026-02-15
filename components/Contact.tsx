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
                href="https://wa.me/916304965528"
                target="_blank"
                className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  W
                </div>
                <div>
                  <p className="text-sm text-gray-500">WhatsApp</p>
                  <p className="font-medium">+91 63049 65528</p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+916304965528"
                className="flex items-center gap-4 border border-gray-300 rounded-lg p-4 hover:bg-gray-50 transition"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <p className="font-medium">+91 63049 65528</p>
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
                    9FQJ+J9J, Cross Road, near by Mayur Chaat House, Ramkoti, Bogulkunta, Abids, Hyderabad, Telangana 500001
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
            <div className="w-full rounded-lg overflow-hidden shadow-lg">
              <div className="relative w-full h-[350px] sm:h-[450px] md:h-[550px] lg:h-[650px]">
                <iframe
                  src="https://www.google.com/maps?q=17.385044,78.486671&hl=en&z=16&output=embed"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 0,
                    maxWidth: '100%'
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Location Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
