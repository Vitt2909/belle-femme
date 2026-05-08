import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Locations } from "@/components/site/Locations";
import { Feedbacks } from "@/components/site/Feedbacks";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { AccessibilityFAB } from "@/components/site/AccessibilityFAB";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Belle Femme Salão de Beleza e Barbearia em Manaus" },
      {
        name: "description",
        content:
          "Conheça o Belle Femme Salão de Beleza e Barbearia em Manaus. Serviços de beleza, cuidados capilares, barbearia, manicure, design de sobrancelhas e muito mais.",
      },
      { property: "og:title", content: "Belle Femme Salão de Beleza e Barbearia em Manaus" },
      {
        property: "og:description",
        content:
          "Beleza, cuidado e autoestima em cada detalhe. Agende seu horário no Belle Femme em Manaus.",
      },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600;700;800&family=Poppins:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <About />
      <Services />
      <Locations />
      <Feedbacks />
      <Contact />
      <Footer />
      <AccessibilityFAB />
    </main>
  );
}
