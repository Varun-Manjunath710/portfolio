import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0" style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/90 to-background" />
      </div>

      {/* Gradient glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-pulse" style={{
      animationDelay: "1s"
    }} />

      <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Sparkles className="h-5 w-5 text-primary" />
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">
            AI-Powered Automation
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/80 bg-clip-text text-transparent">
            Automate Everything
          </span>
          <br />
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            with AI
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-foreground/70 mb-12 max-w-3xl mx-auto">
          AI Telecalling, WhatsApp Automation, and Smart Workflows for Businesses
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          
          <Button variant="hero-outline" size="xl" onClick={scrollToContact}>
            Book Demo
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[{
          label: "AI Agents",
          value: "24/7"
        }, {
          label: "Response Time",
          value: "<1s"
        }, {
          label: "Automation",
          value: "100%"
        }, {
          label: "Uptime",
          value: "99.9%"
        }].map(stat => <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-foreground/60">{stat.label}</div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default HeroSection;