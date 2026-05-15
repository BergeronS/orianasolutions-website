import ContactSection from "@/components/contact/contact-section";
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
          tag="Everything you need"
          title="Contact"
          description="Oriana Solutions, votre expert en applications mobiles, web, SaaS et automatisation IA sur mesure."
        />
      </div>
      <ContactSection />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
