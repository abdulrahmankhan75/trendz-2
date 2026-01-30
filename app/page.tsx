import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FabricPartners from "@/components/FabricPartners";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Products from "@/components/Products";
import Clientele from "@/components/Clientele";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FabricPartners />
      <Expertise />
      <About />

      <Clientele />
      <Products />

      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}
