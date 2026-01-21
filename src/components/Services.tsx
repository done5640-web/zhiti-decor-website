import { useEffect, useRef, useState } from "react";
import {
  Building2,
  Layers,
  LayoutGrid,
  Columns,
  Palette,
  PaintBucket,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Sistem Kapot",
    description:
      "Izolim termik profesional për ambiente më të ngrohta dhe kursim energjie të konsiderueshëm.",
  },
  {
    icon: Layers,
    title: "Punime Gipsi",
    description:
      "Instalim dhe përfundim gipsi me precizion të lartë për sipërfaqe të përsosura.",
  },
  {
    icon: LayoutGrid,
    title: "Tavane të Varura",
    description:
      "Dizajne moderne tavanesh që transformojnë çdo ambient me elegancë.",
  },
  {
    icon: Columns,
    title: "Mure Ndarëse",
    description:
      "Zgjidhje praktike dhe estetike për ndarjen e hapësirave të brendshme.",
  },
  {
    icon: Palette,
    title: "Punime Dekorative",
    description:
      "Detaje artistike dhe dekorative që shtojnë karakter në hapësirën tuaj.",
  },
  {
    icon: PaintBucket,
    title: "Patenim & Lyerje",
    description:
      "Përfundime profesionale me materiale cilësore për rezultate të qëndrueshme.",
  },
];

const Services = () => {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-16 lg:py-20 gradient-light" ref={sectionRef}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Shërbimet Tona
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Zgjidhje të Plota për{" "}
            <span className="text-gradient">Çdo Projekt</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ofrojmë një gamë të gjerë shërbimesh profesionale në ndërtim dhe
            dekorim, duke garantuar cilësi dhe kënaqësi maksimale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              data-index={index}
              className={`service-card group relative p-8 rounded-2xl gradient-card border border-border/50 shadow-elegant hover:shadow-elegant-lg transition-all duration-500 hover:-translate-y-2 ${
                visibleCards.includes(index)
                  ? "animate-fade-up opacity-100"
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center mb-6 shadow-accent group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover Accent Line */}
              <div className="absolute bottom-0 left-8 right-8 h-1 rounded-full bg-accent/0 group-hover:bg-accent transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
