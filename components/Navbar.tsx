"use client";

import { useEffect, useState, useRef } from "react";

const links = [
  { name: "Home", id: "home" },
  { name: "Our Expertise", id: "expertise" },
  { name: "About", id: "about" },
  { name: "Our Products", id: "products" },
  { name: "Testimonials", id: "testimonials" },
  // { name: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past hero section
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Active section detection
      links.forEach(link => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          setActive(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 w-full bg-black z-50 transition-all duration-300 animate-slide-in-left ${scrolled ? 'shadow-md' : 'shadow-sm'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex justify-between items-center">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
        <img src="/images/logo.png" alt="Trendz" className="w-16" />

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-6 xl:gap-8 text-sm uppercase font-medium">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`transition-all duration-300 ${active === link.id
                ? "text-white border-b-2 border-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              {link.name}
            </a>
          ))}

        </div>
        <a
          key="contact"
          href={`#contact`}
          className={`transition-all duration-300 ${active === "contact"
            ? "text-white border-b-2 border-white"
            : "bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200"
            }`}
        >
          Contact
        </a>

      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden bg-gray-900 border-t border-gray-800 transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 py-4 flex flex-col gap-4">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={handleLinkClick}
              className={`text-sm uppercase font-medium transition-all duration-300 py-2 ${active === link.id
                ? "text-white border-l-4 border-white pl-4"
                : "text-gray-400 hover:text-white pl-4"
                }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
