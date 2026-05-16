import ServiceFAQ from "@/components/service/faq-section";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";
import RealisationsSection from "@/components/case-study/realisation-section";
import { HeroSection } from "@/components/case-study/hero-section";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div>
        <AboutSectionMobileBlock
         tag="Services"
          title="Quietnest"
          description="Développement d'une application mobile sur mesure"
        />
      </div>
      <HeroSection />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
