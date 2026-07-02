import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyApolo from "@/components/WhyApolo";
import Qualifier from "@/components/Qualifier";
import Location from "@/components/Location";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <WhyApolo />
        <Qualifier />
        <Location />
        <Faq />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
