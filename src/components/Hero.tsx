import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Zhiti Decor Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero opacity-90" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8 animate-fade-up opacity-0">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-primary-foreground/90 text-sm font-medium tracking-wide">
              Ndërtim & Dekorim Profesional
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up opacity-0 stagger-1">
            Zgjidhje Profesionale në{" "}
            <span className="text-gradient">Ndërtim & Dekorim</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up opacity-0 stagger-2">
            Transformojmë hapësirat tuaja me cilësi të lartë, precizion dhe
            përvojë profesionale. Nga sistemi kapot deri te punimet dekorative,
            ne sjellim vizionin tuaj në jetë.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up opacity-0 stagger-3">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              <Phone className="w-5 h-5" />
              Na Kontaktoni
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToPortfolio}>
              Shiko Punimet
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10 animate-fade-up opacity-0 stagger-4">
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                10+
              </div>
              <div className="text-primary-foreground/60 text-sm sm:text-base">
                Vite Përvojë
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                200+
              </div>
              <div className="text-primary-foreground/60 text-sm sm:text-base">
                Projekte
              </div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
                100%
              </div>
              <div className="text-primary-foreground/60 text-sm sm:text-base">
                Klientë të Kënaqur
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-primary-foreground/50 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
