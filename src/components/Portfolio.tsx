import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/411408222_1054958222368452_4468872725427950307_n.jpg";
import portfolio2 from "@/assets/411571036_224953270642608_2208709308777537019_n.jpg";
import portfolio3 from "@/assets/411857000_171148779388400_5821450382298634115_n.jpg";
import portfolio4 from "@/assets/412186896_335766425834419_3871677165919096425_n.jpg";
import portfolio5 from "@/assets/418667374_2750479608432333_1715209089758997271_n.jpg";
import portfolio6 from "@/assets/418997094_263907983384788_6158233903786652649_n.jpg";
import portfolio7 from "@/assets/430315189_1061064278532645_1954259242241019420_n.jpg";
import portfolio8 from "@/assets/464627173_558052510241321_6731253810547605589_n.jpg";
import portfolio9 from "@/assets/464738685_571285305409183_4217127311339833561_n.jpg";
import portfolio10 from "@/assets/464765487_586656400704827_1767808734328167923_n.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Punë Profesionale",
    category: "Ndërtim & Dekorim",
  },
  {
    image: portfolio2,
    title: "Projekt i Përfunduar",
    category: "Punime Dekorative",
  },
  {
    image: portfolio3,
    title: "Dekorim Modern",
    category: "Dizajn Interior",
  },
  {
    image: portfolio4,
    title: "Renovim Komplet",
    category: "Ndërtim",
  },
  {
    image: portfolio5,
    title: "Punime Cilësore",
    category: "Sistem Kapot",
  },
  {
    image: portfolio6,
    title: "Stil Bashkëkohor",
    category: "Dekorim",
  },
  {
    image: portfolio7,
    title: "Hapësirë Elegante",
    category: "Punime Gipsi",
  },
  {
    image: portfolio8,
    title: "Dizajn i Sofistikuar",
    category: "Interior",
  },
  {
    image: portfolio9,
    title: "Ambient Modern",
    category: "Dekorim",
  },
  {
    image: portfolio10,
    title: "Punë e Detajuar",
    category: "Finishing",
  },
];

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section id="portfolio" className="py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Portofoli
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Punimet <span className="text-gradient">Tona</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Shikoni disa nga projektet tona të përfunduara me sukses, që
            dëshmojnë cilësinë dhe profesionalizmin tonë.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Main Image */}
          <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-elegant-lg">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                
                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-accent/90 text-accent-foreground text-sm font-medium mb-3">
                    {item.category}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="secondary"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-elegant hover:scale-110 transition-transform"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full shadow-elegant hover:scale-110 transition-transform"
            onClick={nextSlide}
          >
            <ChevronRight className="w-6 h-6" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {portfolioItems.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? "w-8 h-2 bg-accent"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
