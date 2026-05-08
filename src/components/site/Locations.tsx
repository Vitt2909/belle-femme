import { MapPin, Clock, Navigation, CalendarCheck } from "lucide-react";
import { WHATSAPP } from "./Header";

const units = [
  {
    name: "Belle Femme — Parque Dez",
    address: "Rua Nikita Kruschev, 18 — Shangrilá 4, Parque 10 de Novembro, Manaus — AM, 69054-729",
    hours: "Seg a Sáb · 09h às 19h",
    maps: "https://maps.app.goo.gl/X4HG2cKsnnMBk1HbA",
    embed: "https://www.google.com/maps?q=Rua+Nikita+Kruschev,+18+Parque+10+de+Novembro+Manaus&output=embed",
  },
];

export function Locations() {
  return (
    <section id="unidades" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/70">Onde estamos</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-primary">Nossas unidades</h2>
          <p className="mt-4 text-foreground/70">Venha nos visitar — será um prazer receber você.</p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {units.map((u) => (
            <article key={u.name} className="rounded-3xl overflow-hidden bg-card border border-border shadow-card">
              <div className="aspect-[16/10] bg-muted relative">
                <iframe
                  title={`Mapa ${u.name}`}
                  src={u.embed}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl font-bold text-primary">{u.name}</h3>
                <div className="mt-4 space-y-3 text-sm">
                  <div className="flex gap-3 text-foreground/80">
                    <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{u.address}</span>
                  </div>
                  <div className="flex gap-3 text-foreground/80">
                    <Clock size={18} className="text-primary shrink-0 mt-0.5" />
                    <span>{u.hours}</span>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={u.maps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition"
                  >
                    <Navigation size={16} /> Como chegar
                  </a>
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-2.5 text-sm font-semibold hover:scale-[1.02] transition"
                  >
                    <CalendarCheck size={16} /> Agendar nessa unidade
                  </a>
                </div>
              </div>
            </article>
          ))}

          <article className="rounded-3xl border-2 border-dashed border-border bg-muted/30 flex items-center justify-center p-10 text-center">
            <div>
              <div className="mx-auto w-14 h-14 rounded-2xl bg-accent flex items-center justify-center text-primary">
                <MapPin size={26} />
              </div>
              <h3 className="mt-4 font-display text-xl font-bold text-primary">Em breve, mais unidades</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-xs">Estamos crescendo para estar ainda mais perto de você.</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
