import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Services from "@/components/Services";
import QuantMethods from "@/components/QuantMethods";
import QualMethods from "@/components/QualMethods";
import SpecializedCapabilities from "@/components/SpecializedCapabilities";
import BalticExpertise from "@/components/BalticExpertise";
import ResearchPanel from "@/components/ResearchPanel";
import Process from "@/components/Process";
import Standards from "@/components/Standards";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Intro />
      <Services />
      <QuantMethods />
      <QualMethods />
      <SpecializedCapabilities />
      <BalticExpertise />
      <ResearchPanel />
      <Process />
      <Standards />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
