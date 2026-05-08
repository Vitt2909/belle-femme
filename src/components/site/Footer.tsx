import logo from "@/assets/belle-femme-logo.jpeg";
import { MessageCircle } from "lucide-react";
import { WHATSAPP } from "./Header";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-14">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Belle Femme" className="h-12 w-12 rounded-full ring-2 ring-accent" />
            <div>
              <div className="font-display text-xl font-bold text-primary">Belle Femme</div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Salão & Barbearia</div>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Beleza, cuidado e autoestima em cada detalhe. Uma experiência completa para você.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-primary">Links rápidos</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-primary">Sobre nós</a></li>
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="#unidades" className="hover:text-primary">Unidades</a></li>
            <li><a href="#feedbacks" className="hover:text-primary">Feedbacks</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base font-bold text-primary">Endereço</h4>
          <p className="mt-4 text-sm text-muted-foreground">
            Rua Nikita Kruschev, 18 — Shangrilá 4,<br/>Parque 10 de Novembro, Manaus — AM, 69054-729
          </p>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:bg-primary/90 transition"
          >
            <MessageCircle size={16} /> WhatsApp
          </a>
        </div>
      </div>

      <div className="container mx-auto px-6 mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
        Belle Femme © {new Date().getFullYear()} Todos os direitos reservados.
      </div>
    </footer>
  );
}
