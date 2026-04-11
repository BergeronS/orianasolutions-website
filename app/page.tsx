import Navbar from "@/components/shared/navbar";
import HeroSection from "@/components/home/hero-section";
import Experties from "@/components/home/experties";
import ServicesSection from "@/components/home/services-section";
import RealisationsSection from "@/components/home/realisations-section";
import About from "@/components/home/about";
import AboutSection from "@/components/home/about-section";
import Testimonial from "@/components/home/testimonial";
import Footer from "@/components/shared/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Experties/>
      <About/>
      <ServicesSection/>
      <RealisationsSection/>
      <AboutSection/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
