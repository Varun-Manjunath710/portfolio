import { FileText, Cog, Rocket } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: FileText,
      number: "01",
      title: "Share Your Process",
      description: "Tell us about your current workflow, pain points, and goals. We'll analyze and identify automation opportunities."
    },
    {
      icon: Cog,
      number: "02",
      title: "We Build Automation",
      description: "Our team designs and deploys custom AI solutions tailored to your business needs and integrations."
    },
    {
      icon: Rocket,
      number: "03",
      title: "You Grow Effortlessly",
      description: "Watch your business scale with 24/7 automation, improved efficiency, and data-driven insights."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              How It Works
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Get started with automation in three simple steps
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {steps.map((step, index) => (
              <div 
                key={step.number}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                )}

                <div className="relative">
                  {/* Number badge */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{step.number}</span>
                  </div>

                  {/* Card */}
                  <div className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 group">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <step.icon className="h-7 w-7 text-primary" />
                    </div>

                    <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
