import ServicesHero from "@/components/service/hero-section";
import ServicesSection from "@/components/service/services-section";
import ProcessSection from "@/components/service/process-section";
import ServiceAboutSection from "@/components/service/about-section";
import ServiceFAQ from "@/components/service/faq-section";
import AboutSectionMobileBlock from "@/components/shared/about-section";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div>
        <AboutSectionMobileBlock
          title="Nos services"
          description="Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation IA sur mesure."
        />
      </div>

      <ServicesHero />

      <ServicesSection />

      <ProcessSection />

     <ServiceAboutSection />

      <ServiceFAQ />

      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
