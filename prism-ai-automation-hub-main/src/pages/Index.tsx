import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import InteractiveSection from "@/components/InteractiveSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import VoiceAgentsSection from "@/components/VoiceAgentsSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <InteractiveSection />
      <AboutSection />
      <ServicesSection />
      <VoiceAgentsSection />
      <HowItWorksSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
