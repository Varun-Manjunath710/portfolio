import { Button } from "@/components/ui/button";
import { Briefcase, ArrowRight, Volume2, VolumeX } from "lucide-react";
import aiRobot from "@/assets/ai-robot.jpg";
import { useRef, useState } from "react";
const InteractiveSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-30" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent/5 to-transparent" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8 animate-fade-in">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-foreground via-foreground/90 to-foreground/80 bg-clip-text text-transparent">
                Interactive AI Experience
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-xl">
              Experience the future of AI-powered automation. Our voice agents and MVP solutions create immersive experiences that capture attention and drive conversions.
            </p>

            <Button size="xl" className="group bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300" onClick={scrollToServices}>
              <Briefcase className="mr-2 h-5 w-5" />
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

          </div>
          
          {/* Right visual */}
          <div className="relative lg:h-[600px] animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-3xl blur-3xl" />
            <video ref={videoRef} autoPlay loop muted playsInline controls={false} poster={aiRobot} className="w-full h-full object-contain drop-shadow-2xl rounded-2xl relative z-10" onError={e => {
            e.currentTarget.style.display = 'none';
            e.currentTarget.nextElementSibling?.classList.remove('hidden');
          }}>
              <source src="/robot-speaking.mp4" type="video/mp4" />
            </video>
            <img src={aiRobot} alt="AI Robot Visualization" className="hidden w-full h-full object-contain drop-shadow-2xl relative z-10" />
            
            {/* Audio control button */}
            <Button size="icon" variant="outline" onClick={toggleAudio} className="absolute bottom-4 left-4 lg:bottom-8 lg:left-8 z-20 h-12 w-12 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300">
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default InteractiveSection;