import logo from "@/assets/belle-femme-logo.jpeg";
import { WHATSAPP } from "./Header";
import { Sparkles, MessageCircle } from "lucide-react";

export function Hero() {
  return (
    <section id="inicio" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-gradient-hero">
      {/* decorative blobs */}
      <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-accent/40 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider">
              <Sparkles size={14} /> Salão & Barbearia em Manaus
            </span>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-[1.05]">
              Beleza, cuidado e autoestima em <span className="relative inline-block">cada<span className="absolute inset-x-0 bottom-1 h-3 bg-accent -z-10 rounded" /></span> detalhe.
            </h1>
            <p className="mt-6 text-lg text-foreground/75 max-w-xl">
              No Belle Femme, cada atendimento é pensado para realçar sua beleza com profissionalismo, carinho e excelência.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3.5 font-semibold shadow-soft hover:scale-[1.02] transition"
              >
                <MessageCircle size={18} /> Agendar pelo WhatsApp
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition"
              >
                Ver serviços
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-display text-2xl text-primary font-bold">+5</span><br/>anos de cuidado</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="font-display text-2xl text-primary font-bold">10+</span><br/>serviços completos</div>
              <div className="h-10 w-px bg-border" />
              <div><span className="font-display text-2xl text-primary font-bold">5★</span><br/>avaliações</div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end animate-fade-up">
            <div className="relative">
              <div className="absolute -inset-8 rounded-full bg-gradient-yellow blur-2xl opacity-70" />
              <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-accent shadow-glow animate-float flex items-center justify-center ring-8 ring-white">
                <img src={logo} alt="Logo Belle Femme Salão de Beleza e Barbearia" className="w-[88%] h-[88%] object-contain rounded-full" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-card px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">★</div>
                <div className="text-sm">
                  <div className="font-semibold text-primary">Atendimento 5 estrelas</div>
                  <div className="text-xs text-muted-foreground">Clientes satisfeitos</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
