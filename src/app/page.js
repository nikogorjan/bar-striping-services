import HeaderBar from "@/components/bar/HeaderBar";
import HeroBar from "@/components/bar/HeroBar";
import AboutBar from "@/components/bar/AboutBar";
import ServicesBar from "@/components/bar/ServicesBar";
import StatsBar from "@/components/bar/StatsBar";
import WhyUsBar from "@/components/bar/WhyUsBar";
import ProcessBar from "@/components/bar/ProcessBar";
import CtaBar from "@/components/bar/CtaBar";
import ContactBar from "@/components/bar/ContactBar";
import FooterBar from "@/components/bar/FooterBar";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <div className="onepage">
      <HeaderBar />
      <HeroBar />
      <AboutBar />
      <ServicesBar />
      <StatsBar />
      <WhyUsBar />
      <ProcessBar />
      <CtaBar />
      <ContactBar />
      <FooterBar />
      <BackToTop />
    </div>
  );
}
