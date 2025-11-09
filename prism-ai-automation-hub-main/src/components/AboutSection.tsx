import { Zap, Shield, TrendingUp } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Why Choose Prisim?
            </span>
          </h2>
          <p className="text-lg text-foreground/70 leading-relaxed">
            Prisim helps companies scale using voice and workflow automation. 
            We focus on reliability, easy integration, and results that matter. 
            Transform your business operations with AI that works 24/7, never misses a call, 
            and continuously optimizes your workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              description: "Deploy automation in days, not months. Our proven framework gets you up and running quickly."
            },
            {
              icon: Shield,
              title: "Enterprise Grade",
              description: "Built with security and compliance in mind. SOC2-ready processes and end-to-end encryption."
            },
            {
              icon: TrendingUp,
              title: "Proven ROI",
              description: "Average 3x improvement in response time and 40% reduction in operational costs."
            }
          ].map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="h-7 w-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
