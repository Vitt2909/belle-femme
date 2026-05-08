import { useEffect, useState } from "react";
import logo from "@/assets/belle-femme-logo.jpeg";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#sobre", label: "Sobre nós" },
  { href: "#servicos", label: "Serviços" },
  { href: "#unidades", label: "Unidades" },
  { href: "#feedbacks", label: "Feedbacks" },
  { href: "#contato", label: "Contato" },
];

const WHATSAPP = "https://wa.me/559200000000?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20no%20Belle%20Femme.";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/85 backdrop-blur-md shadow-card" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between h-20">
        <a href="#inicio" className="flex items-center gap-3">
          <img src={logo} alt="Belle Femme Salão de Beleza e Barbearia" className="h-12 w-12 rounded-full object-cover ring-2 ring-accent shadow-soft" />
          <div className="hidden sm:block leading-tight">
            <div className="font-display text-lg font-bold text-primary">Belle Femme</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Salão & Barbearia</div>
          </div>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition shadow-soft"
          >
            Agendar horário
          </a>
        </div>

        <button
          aria-label="Abrir menu"
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border animate-fade-up">
          <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium text-foreground/90 hover:text-primary">
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-5 py-3 font-semibold"
            >
              Agendar horário
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

export { WHATSAPP };
