import { Card, CardContent } from "@/components/ui/card";
import { Building2, Hotel, ShoppingBag } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      icon: Building2,
      industry: "Real Estate",
      company: "PropTech Solutions",
      result: "3x increase in qualified leads",
      quote: "Prisim's AI telecalling handles initial inquiries 24/7. Our agents focus on closing deals instead of answering basic questions.",
      metrics: [
        { label: "Lead Response Time", value: "< 60 seconds" },
        { label: "Cost Reduction", value: "45%" }
      ]
    },
    {
      icon: Hotel,
      industry: "Hospitality",
      company: "Grand Hotels Group",
      result: "Zero missed bookings",
      quote: "WhatsApp automation keeps guests engaged from inquiry to checkout. Our booking rates increased significantly.",
      metrics: [
        { label: "Booking Rate", value: "+35%" },
        { label: "Guest Satisfaction", value: "4.8/5" }
      ]
    },
    {
      icon: ShoppingBag,
      industry: "Retail",
      company: "StyleHub Fashion",
      result: "Streamlined operations",
      quote: "Backend automation connected our inventory, sales, and customer data. We now make decisions in real-time.",
      metrics: [
        { label: "Order Processing", value: "5x faster" },
        { label: "Error Rate", value: "-90%" }
      ]
    }
  ];

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-transparent">
              Success Stories
            </span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            How Prisim helps businesses across industries save time and grow revenue
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.company}
              className="group relative overflow-hidden border-border hover:border-primary/50 transition-all duration-300 bg-card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <CardContent className="relative p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <testimonial.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-foreground/60 uppercase tracking-wider">
                      {testimonial.industry}
                    </div>
                    <div className="font-semibold">{testimonial.company}</div>
                  </div>
                </div>

                <div className="mb-4 text-xl font-bold text-primary">
                  {testimonial.result}
                </div>

                <p className="text-foreground/70 mb-6 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
                  {testimonial.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="text-2xl font-bold text-primary mb-1">
                        {metric.value}
                      </div>
                      <div className="text-xs text-foreground/60">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
