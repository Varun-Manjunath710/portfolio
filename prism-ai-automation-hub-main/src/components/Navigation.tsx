import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
const Navigation = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Prisim
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("services")} className="text-foreground/80 hover:text-foreground transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection("how-it-works")} className="text-foreground/80 hover:text-foreground transition-colors">
              How It Works
            </button>
            
            <button onClick={() => scrollToSection("contact")} className="text-foreground/80 hover:text-foreground transition-colors">
              Contact
            </button>
          </div>

          <Button variant="hero" size="lg" onClick={() => scrollToSection("contact")}>
            <Phone className="mr-2 h-4 w-4" />
            Book Demo
          </Button>
        </div>
      </div>
    </nav>;
};
export default Navigation;