import UtilityBar from "@/components/UtilityBar";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import InsuranceBar from "@/components/InsuranceBar";
import TrustStats from "@/components/TrustStats";
import ServicesSection from "@/components/ServicesSection";
import WhatWeTreat from "@/components/WhatWeTreat";
import AboutClinic from "@/components/AboutClinic";
import Testimonials from "@/components/Testimonials";
import FounderSection from "@/components/FounderSection";
import TeamCarousel from "@/components/TeamCarousel";
import FreeReports from "@/components/FreeReports";
import Credentials from "@/components/Credentials";
import DecideCTAs from "@/components/DecideCTAs";
import Workshops from "@/components/Workshops";
import SeoCopy from "@/components/SeoCopy";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ContactLocation from "@/components/ContactLocation";
import FinalCTA from "@/components/FinalCTA";
import SiteFooter from "@/components/SiteFooter";
import MobileStickyBar from "@/components/MobileStickyBar";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <UtilityBar />
      <SiteHeader />
      <Hero />
      <InsuranceBar />
      <TrustStats />
      <ServicesSection />
      <WhatWeTreat />
      <AboutClinic />
      <Testimonials />
      <FounderSection />
      <TeamCarousel />
      <FreeReports />
      <Credentials />
      <DecideCTAs />
      <Workshops />
      <SeoCopy />
      <BlogSection />
      <FAQSection />
      <ContactLocation />
      <FinalCTA />
      <SiteFooter />
      <MobileStickyBar />
    </div>
  );
}
