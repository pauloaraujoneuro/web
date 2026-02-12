import BackgroundSection from "@/app/components/sections/BackgroundSection";
import ContactSection from "@/app/components/sections/ContactSection";
import ExpertiseSection from "@/app/components/sections/ExpertiseSection";
import HeroSection from "@/app/components/sections/HeroSection";
import PublicationsSection from "@/app/components/sections/PublicationsSection";
import Footer from "@/app/components/layout/Footer";
import Header from "@/app/components/layout/Header";
import WhatsAppFloatButton from "@/app/components/custom/WhatsAppFloatButton";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ExpertiseSection />
        <BackgroundSection />
        <PublicationsSection />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatButton />
    </>
  );
}
