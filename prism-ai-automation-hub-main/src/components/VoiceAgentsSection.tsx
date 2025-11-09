import { Target, Phone, Zap, Users, MessageSquare } from "lucide-react";

const VoiceAgentsSection = () => {
  const features = [
    {
      icon: Target,
      text: "Answer every incoming call: greet customers, understand their needs, and schedule appointments"
    },
    {
      icon: Phone,
      text: "Make outgoing calls: run campaigns, follow up with leads, and re-engage customers"
    },
    {
      icon: Zap,
      text: "Automatic follow-ups: send messages across phone, SMS, WhatsApp, and email"
    },
    {
      icon: Users,
      text: "Works with your CRM: saves notes, updates statuses, and tracks all tasks"
    },
    {
      icon: MessageSquare,
      text: "Sounds human: has natural conversations, remembers context, and hands off to your team smoothly"
    }
  ];

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                <span className="bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                  AI Voice Agents
                </span>
                <br />
                <span className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                  (Inbound + Outbound)
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Your always-on receptionist + SDR—polite, persistent, and impossible to "forget to follow up."
              </p>
            </div>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="flex items-start gap-4 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-purple-400" />
                  </div>
                  <p className="text-foreground/80 leading-relaxed pt-2">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VoiceAgentsSection;
