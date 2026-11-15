import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politika privatnosti — Netify Studio",
  description:
    "Kako Netify Studio postupa sa podacima koje ostavite kroz kontakt formu.",
};

const ODELJCI = [
  {
    naslov: "Koje podatke prikupljamo",
    tekst:
      "Kroz kontakt formu prikupljamo samo podatke koje nam sami pošaljete: ime i prezime, adresu e-pošte, broj telefona i sadržaj poruke. Sajt ne koristi kolačiće za praćenje niti alate za oglašavanje.",
  },
  {
    naslov: "Zašto ih prikupljamo",
    tekst:
      "Podatke koristimo isključivo da odgovorimo na vaš upit i dogovorimo termin konsultacije. Ne koristimo ih za slanje reklama i ne dodajemo vas ni na kakve liste bez vašeg izričitog pristanka.",
  },
  {
    naslov: "Sa kim ih delimo",
    tekst:
      "Ni sa kim. Vaše podatke ne prodajemo, ne iznajmljujemo i ne prosleđujemo trećim licima.",
  },
  {
    naslov: "Koliko ih čuvamo",
    tekst:
      "Prepisku čuvamo dok traje dogovor ili saradnja, a najduže dve godine od poslednjeg kontakta. Na vaš zahtev brišemo je i ranije.",
  },
  {
    naslov: "Vaša prava",
    tekst:
      "U svakom trenutku možete zatražiti uvid u podatke koje imamo o vama, njihovu ispravku ili brisanje. Dovoljno je da nas pozovete ili pošaljete poruku.",
  },
];

export default function PolitikaPrivatnosti() {
  return (
    <main className="min-h-svh bg-ivory text-ink">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <Link
          href="/"
          className="text-sm text-ink-muted transition-colors hover:text-ink"
        >
          ← Nazad na početnu
        </Link>
        <p className="mb-5 mt-12 text-[11px] uppercase tracking-[0.32em] text-ink-muted">
          Netify Studio
        </p>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.6rem)] font-normal leading-[1.1]">
          Politika <em>privatnosti.</em>
        </h1>
        <p className="mt-6 leading-relaxed text-ink-muted">
          Kratko i jasno: vaše podatke koristimo samo za odgovor na upit.
          Ispod je sve što treba da znate.
        </p>

        <div className="mt-14">
          {ODELJCI.map((o) => (
            <div key={o.naslov} className="border-t border-ink-hairline py-8">
              <h2 className="font-serif text-2xl">{o.naslov}</h2>
              <p className="mt-3 max-w-xl leading-[1.7] text-ink-muted">
                {o.tekst}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink-muted">
          Pitanja o privatnosti: +381 63 489 978. Poslednja izmena: novembar
          2026.
        </p>
      </div>
    </main>
  );
}
