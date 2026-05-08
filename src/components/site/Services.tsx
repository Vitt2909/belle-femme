import { WHATSAPP } from "./Header";
import { Scissors, Wind, Droplets, Palette, Sparkles, Eye, Hand, User, Flower2, Brush } from "lucide-react";

const services = [
  { icon: Scissors, name: "Corte feminino", desc: "Cortes modernos e personalizados que valorizam o seu rosto." },
  { icon: User, name: "Corte masculino", desc: "Cortes precisos com acabamento perfeito para o seu estilo." },
  { icon: Wind, name: "Escova", desc: "Escova modeladora para um visual impecável em qualquer ocasião." },
  { icon: Droplets, name: "Hidratação", desc: "Devolve brilho, maciez e saúde aos fios." },
  { icon: Palette, name: "Coloração", desc: "Cores vibrantes e duradouras com produtos profissionais." },
  { icon: Sparkles, name: "Mechas", desc: "Mechas, luzes e iluminados feitos com técnica e cuidado." },
  { icon: Eye, name: "Design de sobrancelhas", desc: "Design que harmoniza e realça o seu olhar." },
  { icon: Hand, name: "Manicure e pedicure", desc: "Mãos e pés cuidados com capricho e higiene." },
  { icon: Brush, name: "Barbearia", desc: "Barba modelada e finalizada com técnicas tradicionais." },
  { icon: Flower2, name: "Tratamentos capilares", desc: "Reconstrução, nutrição e cauterização para fios saudáveis." },
];

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-muted/40">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Serviços</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">Nossos serviços</h2>
          <p className="mt-4 text-foreground/70">Tudo o que você precisa para se sentir incrível, em um só lugar.</p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.name} className="group relative rounded-3xl bg-card border border-border p-6 shadow-card hover:shadow-soft hover:-translate-y-1 transition-all overflow-hidden">
              <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-accent/0 group-hover:bg-accent/30 blur-2xl transition-colors" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-yellow flex items-center justify-center text-primary shadow-soft">
                  <s.icon size={26} />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-primary">{s.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground min-h-[3rem]">{s.desc}</p>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:gap-2 transition-all"
                >
                  Agendar →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
