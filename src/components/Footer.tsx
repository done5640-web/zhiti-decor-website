import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="gradient-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="inline-block mb-4"
            >
              <span className="font-display text-2xl font-bold text-primary-foreground">
                Zhiti<span className="text-gradient">Decor</span>
              </span>
            </Link>
            <p className="text-primary-foreground/60 leading-relaxed max-w-md mb-6">
              Zgjidhje profesionale në ndërtim dhe dekorim. Transformojmë
              hapësirat tuaja me cilësi të lartë dhe përvojë profesionale.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="tel:+355699999999"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:info@zhitidecor.com"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/zhiti_decor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center text-primary-foreground/60 hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Lidhje të Shpejta
            </h4>
            <nav className="flex flex-col gap-3">
              {[
                { href: "/kreu", label: "Kreu" },
                { href: "/sherbimet", label: "Shërbimet" },
                { href: "/punimet", label: "Punimet" },
                { href: "/rreth-nesh", label: "Rreth Nesh" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold text-primary-foreground mb-4">
              Kontakt
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Phone className="w-4 h-4 text-accent" />
                <span>+355 69 999 9999</span>
              </div>
              <div className="flex items-center gap-3 text-primary-foreground/60">
                <Mail className="w-4 h-4 text-accent" />
                <span>info@zhitidecor.com</span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/60">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Tiranë, Shqipëri</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-primary-foreground/40 text-sm">
            © {currentYear} Zhiti Decor. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
