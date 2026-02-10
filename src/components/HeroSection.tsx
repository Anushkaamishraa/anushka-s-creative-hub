import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-primary/20 blur-[100px] animate-pulse" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 rounded-full bg-accent/10 blur-[120px] animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 rounded-full bg-primary/15 blur-[80px] animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">
          Hello, I'm
        </p>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in [animation-delay:0.1s]">
          <span className="gradient-text">Anushka Mishra</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in [animation-delay:0.2s]">
          Frontend Developer
        </p>
        <p className="text-muted-foreground max-w-lg mx-auto mb-10 animate-fade-in [animation-delay:0.3s]">
          Crafting beautiful, performant, and accessible web experiences with modern technologies.
        </p>
        <div className="flex gap-4 justify-center animate-fade-in [animation-delay:0.4s]">
          <Button
            size="lg"
            className="rounded-full px-8"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            <Mail className="mr-2 h-4 w-4" /> Get in Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          >
            <ArrowDown className="mr-2 h-4 w-4" /> View My Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
