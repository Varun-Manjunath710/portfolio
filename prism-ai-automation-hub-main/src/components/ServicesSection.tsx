import { Phone, MessageSquare, Workflow } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      icon: Phone,
      title: "AI Telecalling",
      description: "24/7 virtual callers for lead generation, surveys, and customer support. Never miss an opportunity again.",
      features: [
        "Intelligent call routing",
        "Natural conversations",
        "Real-time analytics",
        "Multi-language support"
      ]
    },
    {
      icon: MessageSquare,
      title: "WhatsApp Automation",
      description: "Auto-message, follow-up, and lead nurturing system. Engage customers where they are.",
      features: [
        "Automated responses",
        "Lead qualification",
        "Campaign management",
        "Rich media messaging"
      ]
    },
    {
      icon: Workflow,
      title: "Backend Automation",
      description: "Custom workflow automation for CRM, lead tracking, and reporting. Streamline your operations.",
      features: [
        "CRM integration",
        "Custom workflows",
        "Real-time reporting",
        "API connectivity"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Our Services
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Three powerful solutions. One goal: transform your business operations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="relative p-8">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_0_30px_hsl(200_100%_50%_/_0.3)] transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
