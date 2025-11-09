import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name is too long"),
  phone: z.string().trim().min(10, "Phone number must be at least 10 digits").max(20, "Phone number is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  requirements: z.string().trim().min(10, "Please provide more details").max(1000, "Requirements are too long")
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    // Replace this URL with your Google Apps Script Web App URL after deployment
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "";
    
    if (!GOOGLE_SCRIPT_URL) {
      toast({
        title: "Configuration Error",
        description: "Google Sheets integration is not configured yet.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          phone: data.phone,
          email: data.email,
          requirements: data.requirements,
          timestamp: new Date().toISOString()
        }),
      });

      toast({
        title: "Thank you!",
        description: "We'll get back to you soon.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  return <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-foreground via-foreground to-foreground/60 bg-clip-text text-transparent">
              Ready to Automate
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-xl text-foreground/70 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses that trust Prisim to handle their operations. 
            Let's discuss how AI automation can transform your workflow.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="max-w-xl mx-auto mb-12 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                {...register("name")}
                className="bg-background/50 border-primary/20"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                {...register("phone")}
                className="bg-background/50 border-primary/20"
              />
              {errors.phone && (
                <p className="text-sm text-destructive">{errors.phone.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                {...register("email")}
                className="bg-background/50 border-primary/20"
              />
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="requirements">Your Requirements</Label>
              <Textarea
                id="requirements"
                placeholder="Tell us about your automation needs..."
                rows={4}
                {...register("requirements")}
                className="bg-background/50 border-primary/20"
              />
              {errors.requirements && (
                <p className="text-sm text-destructive">{errors.requirements.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Request"}
            </Button>
          </form>

          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-16">
            {[{
            label: "Average Setup Time",
            value: "48 hours"
          }, {
            label: "Customer Satisfaction",
            value: "98%"
          }, {
            label: "Active Automations",
            value: "10,000+"
          }].map(stat => <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;