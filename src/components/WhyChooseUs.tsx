import { useEffect, useRef, useState } from "react";
import { Award, Clock, Gem, ThumbsUp } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Cilësi e Lartë",
    description:
      "Përdorim materiale premium dhe teknika moderne për rezultate të përsosura që zgjasin.",
  },
  {
    icon: ThumbsUp,
    title: "Punë Korrekte",
    description:
      "Çdo detaj trajtohet me kujdes dhe precizion profesional, pa kompromis.",
  },
  {
    icon: Award,
    title: "Materiale Cilësore",
    description:
      "Bashkëpunojmë vetëm me furnitorë të besueshëm për materiale të certifikuara.",
  },
  {
    icon: Clock,
    title: "Respektim Afatesh",
    description:
      "Dorëzojmë projektet në kohë, duke respektuar çdo marrëveshje me klientët.",
  },
];

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      className="py-24 lg:py-32 gradient-dark"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={isVisible ? "animate-fade-up" : "opacity-0"}>
            <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
              Pse Ne?
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Përse të Zgjidhni{" "}
              <span className="text-gradient">Zhiti Decor?</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-8">
              Me mbi 10 vite përvojë në fushën e ndërtimit dhe dekorimit, kemi
              ndërtuar një reputacion të fortë bazuar në cilësi, besnikëri dhe
              profesionalizëm. Çdo projekt është një mundësi për të treguar
              përkushtimin tonë ndaj ekselencës.
            </p>
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-accent mb-1">
                  98%
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  Klientë të kthyer
                </div>
              </div>
              <div className="w-px h-16 bg-primary-foreground/20" />
              <div className="text-center">
                <div className="font-display text-4xl font-bold text-accent mb-1">
                  5★
                </div>
                <div className="text-primary-foreground/60 text-sm">
                  Vlerësim mesatar
                </div>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/10 transition-all duration-300 ${
                  isVisible
                    ? `animate-fade-up stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
