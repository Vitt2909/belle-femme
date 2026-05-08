import { MessageCircle, Navigation, Phone, Instagram, Clock, MapPin } from "lucide-react";
import { WHATSAPP } from "./Header";

export function Contact() {
  return (
    <section id="contato" className="py-24 bg-gradient-purple text-primary-foreground relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-accent/20 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-accent/10 blur-3xl" />

      <div className="container mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">Vamos te atender</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Pronta para realçar sua beleza?</h2>
            <p className="mt-5 text-lg text-primary-foreground/85 max-w-lg">
              Agende seu horário e venha viver a experiência Belle Femme.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-7 py-3.5 font-semibold shadow-glow hover:scale-[1.02] transition">
                <MessageCircle size={18} /> Agendar pelo WhatsApp
              </a>
              <a href="https://maps.app.goo.gl/X4HG2cKsnnMBk1HbA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/30 backdrop-blur px-7 py-3.5 font-semibold hover:bg-white/20 transition">
                <Navigation size={18} /> Como chegar
              </a>
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 ring-1 ring-white/20 backdrop-blur-md p-8 space-y-5">
            <InfoLine icon={Phone} label="Telefone / WhatsApp" value="(92) 0000-0000" />
            <InfoLine icon={Instagram} label="Instagram" value="@bellefemme" />
            <InfoLine icon={Clock} label="Horário de funcionamento" value="Seg a Sáb · 09h às 19h" />
            <InfoLine icon={MapPin} label="Endereço" value="Rua Nikita Kruschev, 18 — Parque 10, Manaus — AM" />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoLine({ icon: Icon, label, value }: { icon: typeof Phone; label: string; value: string }) {
  return (
    <div className="flex items-start gap-4">
      <div className="w-11 h-11 rounded-2xl bg-accent text-accent-foreground flex items-center justify-center shrink-0">
        <Icon size={20} />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wider text-accent/90">{label}</div>
        <div className="font-semibold mt-0.5">{value}</div>
      </div>
    </div>
  );
}
