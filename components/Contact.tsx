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
                href="mailto:Trendzuniforms9@gmail.com"
                className="group flex items-center gap-4 border-2 border-gray-300 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-black hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Email</p>
                  <p className="font-medium group-hover:text-black transition-colors duration-300">Trendzuniforms9@gmail.com</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/916304965528"
                target="_blank"
                className="group flex items-center gap-4 border-2 border-gray-300 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-black hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.386 1.262.617 1.694.79.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 9.89c0 2.096.547 4.142 1.588 5.945L.057 24l8.305-2.184a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">WhatsApp</p>
                  <p className="font-medium group-hover:text-black transition-colors duration-300">+91 6304965528</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:+916304965528"
                className="group flex items-center gap-4 border-2 border-gray-300 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:border-black hover:shadow-lg hover:scale-[1.02] hover:bg-gray-50 active:scale-[0.98]"
              >
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover:bg-gray-800 group-hover:scale-110">
                  <svg className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300">Phone</p>
                  <p className="font-medium group-hover:text-black transition-colors duration-300">+91 6304965528</p>
                </div>
                <svg className="w-5 h-5 text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>

              {/* Address */}
              <div className="flex items-center gap-4 border-2 border-gray-300 rounded-lg p-4">
                <div className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="font-medium leading-relaxed">
                    #4-1-897, first floor, opp bonggulkunta water reserviou tilak road, abids, hyd- 500001
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
                  src="https://www.google.com/maps?q=17.3899145,78.4801223&hl=en&z=16&output=embed"
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
