import Hero from "@/components/Hero";
import AlumniLogos from "@/components/AlumniLogos";
import WhoItsFor from "@/components/WhoItsFor";
import Benefits from "@/components/Benefits";
import WhatsNext from "@/components/WhatsNext";
import HowItWorks from "@/components/HowItWorks";
import QuoteCarousel from "@/components/QuoteCarousel";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AlumniLogos />
      <WhoItsFor />
      <Benefits />
      <WhatsNext />
      <HowItWorks />
      <QuoteCarousel />
      <FAQ />
      <CTA />
    </>
  );
}
