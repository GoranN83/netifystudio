"use client";

import Image from "next/image";
import { useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { putanja } from "@/lib/putanja";

const EMAIL = "kontakt@netifystudio.com";

function polje(label: string) {
  return (
    <label className="block text-[11px] uppercase tracking-[0.25em] text-muted">
      {label}
    </label>
  );
}

export function Kontakt() {
  const [ime, setIme] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");
  const [poruka, setPoruka] = useState("");

  const posalji = (e: React.FormEvent) => {
    e.preventDefault();
    const telo = [
      poruka,
      "",
      `— ${ime}`,
      email && `Email: ${email}`,
      telefon && `Telefon: ${telefon}`,
    ]
      .filter(Boolean)
      .join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Upit za sajt — ${ime}`
    )}&body=${encodeURIComponent(telo)}`;
  };

  const inputKlase =
    "w-full border-b border-hairline bg-transparent py-3 text-base text-foreground placeholder:text-foreground/30 focus:border-foreground/60 focus:outline-none transition-colors";

  return (
    <section id="kontakt" className="relative scroll-mt-16 overflow-hidden bg-background text-foreground">
      {/* Diskretna noćna fotografija u pozadini desno */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[44%] lg:block" aria-hidden>
        <Image
          src={putanja("/works/kontakt-noc.jpg")}
          alt=""
          fill
          sizes="44vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/55 to-background/25" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
        <div className="max-w-2xl">
          <BlurFade inView delay={0.1} duration={0.7}>
            <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-muted">
              Kontakt
            </p>
            <h2 className="font-serif text-[clamp(2.4rem,5vw,4.4rem)] font-normal leading-[1.08]">
              Počnimo <em>razgovorom.</em>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted">
              Konsultacija je besplatna i bez obaveze. Pošaljite upit ili nas
              pozovite — javljamo se u roku od jednog radnog dana i dogovaramo
              termin.
            </p>
          </BlurFade>

          <BlurFade inView delay={0.2} duration={0.7}>
            <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4">
              <a
                href="tel:+38163489978"
                className="font-serif text-2xl font-light transition-colors hover:text-accent"
              >
                +381 63 489 978
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="font-serif text-2xl font-light transition-colors hover:text-accent"
              >
                {EMAIL}
              </a>
            </div>
          </BlurFade>

          <BlurFade inView delay={0.3} duration={0.7}>
            <form onSubmit={posalji} className="mt-14 space-y-8">
              <div className="grid gap-8 sm:grid-cols-2">
                <div>
                  {polje("Ime i prezime")}
                  <input
                    required
                    value={ime}
                    onChange={(e) => setIme(e.target.value)}
                    className={inputKlase}
                    placeholder="Vaše ime"
                    autoComplete="name"
                  />
                </div>
                <div>
                  {polje("Telefon")}
                  <input
                    value={telefon}
                    onChange={(e) => setTelefon(e.target.value)}
                    className={inputKlase}
                    placeholder="+381 …"
                    autoComplete="tel"
                  />
                </div>
              </div>
              <div>
                {polje("Email")}
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputKlase}
                  placeholder="vi@firma.rs"
                  autoComplete="email"
                />
              </div>
              <div>
                {polje("Poruka")}
                <textarea
                  required
                  value={poruka}
                  onChange={(e) => setPoruka(e.target.value)}
                  rows={4}
                  className={inputKlase}
                  placeholder="Čime se bavite i šta želite da postignete sajtom?"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-foreground px-8 py-4 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Pošaljite upit
              </button>
              <p className="text-sm leading-relaxed text-muted">
                Bez obaveze. Vaše podatke koristimo samo za odgovor na upit.
              </p>
            </form>
          </BlurFade>
        </div>
      </div>

      {/* Podnožje */}
      <footer className="relative border-t border-hairline">
        <div className="mx-auto max-w-7xl px-6 py-12 md:px-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <span className="text-sm font-medium uppercase tracking-[0.28em]">
              Netify Studio
            </span>
            <nav
              aria-label="Podnožje"
              className="flex flex-wrap gap-x-8 gap-y-3"
            >
              {[
                ["Radovi", "#radovi"],
                ["Proces", "#proces"],
                ["Paketi", "#paketi"],
                ["Kontakt", "#kontakt"],
                ["Politika privatnosti", putanja("/politika-privatnosti/")],
              ].map(([l, h]) => (
                <a
                  key={h}
                  href={h}
                  className="text-sm text-muted transition-colors hover:text-foreground"
                >
                  {l}
                </a>
              ))}
            </nav>
            <div className="flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram (uskoro)"
                className="flex size-11 items-center justify-center rounded-full border border-hairline text-foreground/70 transition-colors hover:border-foreground/50 hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Facebook (uskoro)"
                className="flex size-11 items-center justify-center rounded-full border border-hairline text-foreground/70 transition-colors hover:border-foreground/50 hover:text-foreground"
              >
                <svg viewBox="0 0 24 24" fill="none" className="size-5" aria-hidden>
                  <path
                    d="M14 8.5h2.5V5.5H14a3.5 3.5 0 0 0-3.5 3.5v2h-2v3h2v6.5h3V14h2.3l.5-3h-2.8V9.3c0-.5.3-.8.8-.8Z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="#"
                aria-label="Nazad na vrh stranice"
                className="ml-2 flex size-11 items-center justify-center rounded-full bg-foreground text-background transition-transform hover:scale-105"
              >
                <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden>
                  <path d="M10 16V4m0 0 -5 5m5-5 5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <p className="mt-10 border-t border-hairline pt-6 text-sm text-muted">
            © 2026 Netify Studio. Sajt je naše delo — od ideje do koda.
          </p>
        </div>
      </footer>
    </section>
  );
}
