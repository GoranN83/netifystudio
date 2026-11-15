import { Hero } from "@/components/site/hero";
import { PlivajuciMeni } from "@/components/site/plivajuci-meni";
import { Traka } from "@/components/site/traka";
import { Radovi } from "@/components/site/radovi";
import { Proces } from "@/components/site/proces";
import { Paketi } from "@/components/site/paketi";
import { Garancija } from "@/components/site/garancija";
import { Faq } from "@/components/site/faq";
import { Kontakt } from "@/components/site/kontakt";

export default function Home() {
  return (
    <main>
      <PlivajuciMeni />
      <Hero />
      <Traka />
      <Radovi />
      <Proces />
      <Paketi />
      <Garancija />
      <Faq />
      <Kontakt />
    </main>
  );
}
