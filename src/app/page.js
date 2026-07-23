import HeaderBar from "@/components/bar/HeaderBar";
import HeroBar from "@/components/bar/HeroBar";
import AboutBar from "@/components/bar/AboutBar";
import ServicesBar from "@/components/bar/ServicesBar";
import ServiceDetailsBar from "@/components/bar/ServiceDetailsBar";
import IndustriesBar from "@/components/bar/IndustriesBar";
import StatsBar from "@/components/bar/StatsBar";
import BenefitsBar from "@/components/bar/BenefitsBar";
import SignsBar from "@/components/bar/SignsBar";
import BeforeAfterBar from "@/components/bar/BeforeAfterBar";
import WorkBar from "@/components/bar/WorkBar";
import WhyUsBar from "@/components/bar/WhyUsBar";
import ProcessBar from "@/components/bar/ProcessBar";
import TestimonialsBar from "@/components/bar/TestimonialsBar";
import FaqBar from "@/components/bar/FaqBar";
import MobileCtaBar from "@/components/bar/MobileCtaBar";
import ScrollReveal from "@/components/bar/ScrollReveal";
import ServiceAreaBar, { SERVICE_AREAS } from "@/components/bar/ServiceAreaBar";
import { SITE_URL } from "@/lib/site";
import CtaBar from "@/components/bar/CtaBar";
import ContactBar from "@/components/bar/ContactBar";
import MapBar from "@/components/bar/MapBar";
import FooterBar from "@/components/bar/FooterBar";
import BackToTop from "@/components/BackToTop";

// LocalBusiness structured data for local SEO.
// Address: city/zip only — the client asked not to publish the street address.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "BAR Striping Services",
  description:
    "Professional parking lot striping, re-striping, ADA-compliant markings, fire lanes, and warehouse floor striping. Locally owned and operated.",
  url: SITE_URL,
  telephone: "+1-205-240-3158",
  email: "barstripingservices@gmail.com",
  image: `${SITE_URL}/LOGO.png`,
  priceRange: "$$",
  founder: {
    "@type": "Person",
    name: "Henry Randall",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Birmingham",
    addressRegion: "AL",
    postalCode: "35209",
    addressCountry: "US",
  },
  areaServed: [
    ...SERVICE_AREAS.map((city) => ({
      "@type": "City",
      name: `${city}, AL`,
    })),
    { "@type": "AdministrativeArea", name: "Central Alabama" },
    { "@type": "AdministrativeArea", name: "North Alabama" },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Parking Lot Striping Services",
    itemListElement: [
      "New Parking Lot Layout & Striping",
      "Parking Lot Re-Striping",
      "ADA-Compliant Markings",
      "Arrows, Crosswalks & Curb Painting",
      "Fire Lane Striping",
      "Warehouse Floor Striping",
    ].map((service) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: service },
    })),
  },
};

export default function Home() {
  return (
    <div className="onepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <HeaderBar />
      <HeroBar />
      <AboutBar />
      <ServicesBar />
      <ServiceDetailsBar />
      <IndustriesBar />
      <StatsBar />
      <BenefitsBar />
      <SignsBar />
      <BeforeAfterBar />
      <WorkBar />
      <WhyUsBar />
      <ProcessBar />
      <TestimonialsBar />
      <FaqBar />
      <ServiceAreaBar />
      <CtaBar />
      <ContactBar />
      <MapBar />
      <FooterBar />
      <MobileCtaBar />
      <ScrollReveal />
      <BackToTop />
    </div>
  );
}
