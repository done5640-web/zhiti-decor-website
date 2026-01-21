import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logo from "@/assets/zhiti2.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/kreu", label: "Kreu" },
    { href: "/sherbimet", label: "Shërbimet" },
    { href: "/punimet", label: "Punimet" },
    { href: "/rreth-nesh", label: "Rreth Nesh" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  const handleNavigation = (href: string) => {
    navigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-md transition-all duration-300 py-3"
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img
            src={logo}
            alt="Zhiti Decor Logo"
            className="h-12 w-12 object-contain"
          />
          <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-foreground">
            Zhiti<span className="text-gradient">Decor</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className="font-medium text-sm tracking-wide transition-all duration-300 text-foreground/80 hover:text-accent relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            variant="accent"
            size="lg"
            onClick={() => handleNavigation("/kontakt")}
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
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
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
            <Link
              key={link.href}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-foreground font-medium py-2 border-b border-border/50 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          ))}
          <Button
            variant="accent"
            size="lg"
            className="mt-4"
            onClick={() => handleNavigation("/kontakt")}
          >
            Na Kontaktoni
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
