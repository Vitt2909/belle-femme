import { Heart, Sparkles, Users, Star, ShieldCheck } from "lucide-react";

const features = [
  { icon: Users, title: "Atendimento profissional", desc: "Equipe qualificada e atenciosa em cada detalhe." },
  { icon: Heart, title: "Ambiente acolhedor", desc: "Espaço pensado para o seu conforto e bem-estar." },
  { icon: Sparkles, title: "Beleza feminina e masculina", desc: "Serviços completos para todos os estilos." },
  { icon: Star, title: "Cuidado personalizado", desc: "Atendimento adaptado ao que você precisa." },
  { icon: ShieldCheck, title: "Qualidade e confiança", desc: "Produtos e técnicas de excelência." },
];

export function About() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Sobre nós</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">Sobre o Belle Femme</h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed">
            O Belle Femme Salão de Beleza e Barbearia nasceu para oferecer uma experiência completa de cuidado, beleza e bem-estar.
            Nosso compromisso é unir técnica, atendimento acolhedor e resultados de qualidade para que cada cliente se sinta mais
            confiante, valorizado e satisfeito.
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-3xl bg-card p-6 shadow-card border border-border hover:-translate-y-1 hover:shadow-soft transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-accent flex items-center justify-center text-primary shadow-soft group-hover:rotate-6 transition-transform">
                <f.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold text-primary">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
