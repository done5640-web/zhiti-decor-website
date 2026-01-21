import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Mesazhi u dërgua me sukses!", {
      description: "Do t'ju kontaktojmë sa më shpejt të jetë e mundur.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const whatsappNumber = "355699999999";
  const whatsappMessage = encodeURIComponent(
    "Përshëndetje! Dua të marr informacion për shërbimet tuaja."
  );

  return (
    <section id="contact" className="py-16 lg:py-20 gradient-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm tracking-widest uppercase mb-4">
            Kontakt
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Na <span className="text-gradient">Kontaktoni</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Jemi këtu për t'ju ndihmuar. Na kontaktoni për çdo pyetje ose për të
            diskutuar projektin tuaj të ardhshëm.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-accent">
                <Phone className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Telefon</h3>
                <a
                  href="tel:+355699999999"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  +355 69 999 9999
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-accent">
                <Mail className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Email</h3>
                <a
                  href="mailto:info@zhitidecor.com"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  info@zhitidecor.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl gradient-accent flex items-center justify-center flex-shrink-0 shadow-accent">
                <MapPin className="w-5 h-5 text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">Lokacioni</h3>
                <p className="text-muted-foreground">Tiranë, Shqipëri</p>
              </div>
            </div>

            {/* WhatsApp Button */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 w-full p-4 rounded-xl bg-[#25D366] text-white font-semibold hover:bg-[#20BA5A] transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Na shkruani në WhatsApp</span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="bg-background rounded-2xl p-8 shadow-elegant border border-border/50"
            >
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Emri Juaj
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Shkruani emrin"
                    required
                    className="h-12"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Numri i Telefonit
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+355 6X XXX XXXX"
                    required
                    className="h-12"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@shembull.com"
                  required
                  className="h-12"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-2"
                >
                  Mesazhi
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Përshkruani projektin ose kërkesën tuaj..."
                  rows={5}
                  required
                  className="resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="accent"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-accent-foreground/30 border-t-accent-foreground rounded-full animate-spin" />
                    Duke Dërguar...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Dërgo Mesazhin
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
