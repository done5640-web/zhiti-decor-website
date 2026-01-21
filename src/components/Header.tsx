import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Ballina" },
    { href: "#services", label: "Shërbimet" },
    { href: "#portfolio", label: "Punimet" },
    { href: "#about", label: "Rreth Nesh" },
    { href: "#contact", label: "Kontakt" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-elegant py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="flex items-center gap-2"
        >
          <span
            className={`font-display text-2xl font-bold tracking-tight transition-colors duration-300 ${
              isScrolled ? "text-foreground" : "text-primary-foreground"
            }`}
          >
            Zhiti<span className="text-gradient">Decor</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className={`font-medium text-sm tracking-wide transition-all duration-300 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${
                isScrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant={isScrolled ? "accent" : "hero"}
            size="lg"
            onClick={() => scrollToSection("#contact")}
          >
            Na Kontaktoni
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X
              className={`w-6 h-6 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          ) : (
            <Menu
              className={`w-6 h-6 ${
                isScrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg shadow-elegant-lg transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-foreground font-medium py-2 border-b border-border/50 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <Button
            variant="accent"
            size="lg"
            className="mt-4"
            onClick={() => scrollToSection("#contact")}
          >
            Na Kontaktoni
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
