export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-6 sm:gap-8 text-sm sm:text-base">
          {/* Address */}
          <div className="text-center md:text-left animate-fade-in-up">
            <p className="font-semibold mb-2">Address</p>
            <p className="text-gray-300">
              #4-1-897, first floor, opp bonggulkunta water reserviou<br />
              tilak road, abids, hyd- 500001
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left animate-fade-in-up-delay">
            <p className="font-semibold mb-2">Contact</p>
            <p className="text-gray-300 mb-1">
              <a href="mailto:Trendzuniforms9@gmail.com" className="hover:text-white transition">
                Trendzuniforms9@gmail.com
              </a>
            </p>
            <p className="text-gray-300">
              <a href="tel:+916304965528" className="hover:text-white transition">
                +91 6304965528
              </a>
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right animate-fade-in-up-delay">
            <p className="text-gray-300">
              © 2025 Trendz Uniforms India.<br />
              All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
