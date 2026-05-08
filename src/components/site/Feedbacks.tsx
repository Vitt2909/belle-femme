import { Star } from "lucide-react";

const feedbacks = [
  { name: "Cliente Belle Femme", service: "Hidratação + Escova", text: "Atendimento maravilhoso e resultado impecável." },
  { name: "Cliente Belle Femme", service: "Coloração", text: "Ambiente agradável, equipe atenciosa e serviço de qualidade." },
  { name: "Cliente Belle Femme", service: "Design de sobrancelhas", text: "Saí muito satisfeita. Recomendo demais!" },
];

export function Feedbacks() {
  return (
    <section id="feedbacks" className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Depoimentos</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">O que dizem sobre nós</h2>
          <p className="mt-4 text-foreground/70">A satisfação dos nossos clientes é a nossa maior conquista.</p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {feedbacks.map((f, i) => (
            <div key={i} className="rounded-3xl bg-card border border-border p-7 shadow-card hover:-translate-y-1 hover:shadow-soft transition">
              <div className="flex gap-1 text-accent-foreground">
                {Array.from({ length: 5 }).map((_, n) => (
                  <Star key={n} size={18} className="fill-[oklch(0.85_0.2_95)] text-[oklch(0.85_0.2_95)]" />
                ))}
              </div>
              <p className="mt-4 text-foreground/85 italic leading-relaxed">"{f.text}"</p>
              <div className="mt-6 pt-5 border-t border-border">
                <div className="font-semibold text-primary">{f.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{f.service}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
