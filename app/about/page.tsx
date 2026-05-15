import AboutSectionMobileBlock from "@/components/about/about-section";
import AboutHero from "@/components/about/hero-section";
import AboutHighlight from "@/components/about/highlight";
import History from "@/components/about/history";
import Mission from "@/components/about/mission";
import Team from "@/components/about/team";
import Values from "@/components/about/values";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function page() {
  return (
    <>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div>
        <AboutSectionMobileBlock />
      </div>
      <AboutHero />
      <Mission />
      <Team />
      <AboutHighlight />
      <History />
      <Values />
      <div id="contact">
        <Footer />
      </div>
    </>
  );
}
