import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";

const portfolioItems = [
  {
    image: portfolio1,
    title: "Apartament Modern",
    category: "Punime Gipsi & Lyerje",
  },
  {
    image: portfolio2,
    title: "Vilë Luksoze",
    category: "Sistem Kapot",
  },
  {
    image: portfolio3,
    title: "Zyrë Biznesi",
    category: "Tavane të Varura",
  },
  {
    image: portfolio4,
    title: "Restorant Elegant",
    category: "Punime Dekorative",
  },
  {
    image: portfolio5,
    title: "Shtëpi Private",
    category: "Renovim Komplet",
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
    <section id="portfolio" className="py-24 lg:py-32 bg-background">
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
