"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { putanja } from "@/lib/putanja";
import { BrowserFrame } from "@/components/site/browser-frame";

const KONCEPTI = [
  {
    id: "aurelija",
    url: "aurelija.rs",
    naziv: "Aurelija",
    opis: "Vinarija — vino koje priča o mestu.",
    slika: putanja("/works/site-aurelija.jpg"),
  },
  {
    id: "mirna",
    url: "vile-mirna.com",
    naziv: "Mirna",
    opis: "Planinske vile — odmor koji se pamti.",
    slika: putanja("/works/koncept-mirna.jpg"),
  },
  {
    id: "arken",
    url: "arken.studio",
    naziv: "Arken",
    opis: "Arhitektonski studio — prostor oblikovan svetlom.",
    slika: putanja("/works/koncept-arken.jpg"),
  },
  {
    id: "trpeza",
    url: "trpeza.rs",
    naziv: "Trpeza",
    opis: "Restoran — domaća kuhinja, moderan ukus.",
    slika: putanja("/works/koncept-trpeza.jpg"),
  },
  {
    id: "vidik",
    url: "vidik.legal",
    naziv: "Vidik",
    opis: "Advokatska kancelarija — pravna sigurnost za vaš posao.",
    slika: putanja("/works/koncept-vidik.jpg"),
  },
  {
    id: "sola",
    url: "solaceramics.com",
    naziv: "Sola Ceramics",
    opis: "Radnja keramike — ručni rad za svaki dan.",
    slika: putanja("/works/koncept-sola.jpg"),
  },
];

export function Koncepti() {
  const [otvoren, setOtvoren] = useState<number | null>(null);

  const zatvori = useCallback(() => setOtvoren(null), []);

  useEffect(() => {
    if (otvoren === null) return;
    const naTaster = (e: KeyboardEvent) => {
      if (e.key === "Escape") zatvori();
    };
    document.addEventListener("keydown", naTaster);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", naTaster);
      document.body.style.overflow = "";
    };
  }, [otvoren, zatvori]);

  const aktivan = otvoren === null ? null : KONCEPTI[otvoren];

  return (
    <>
      <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:gap-14">
        {KONCEPTI.map((k, i) => (
          <BlurFade
            key={k.id}
            inView
            delay={0.1 + (i % 2) * 0.08}
            duration={0.7}
            direction="up"
            offset={10}
          >
            <div className="group">
              <button
                type="button"
                onClick={() => setOtvoren(i)}
                aria-label={`Uvećaj koncept: ${k.naziv} — prikaz cele stranice`}
                className="block w-full cursor-pointer text-left"
              >
                <BrowserFrame
                  url={k.url}
                  koncept
                  tone="light"
                  className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5"
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <Image
                      src={k.slika}
                      alt={`Koncept sajta: ${k.naziv}`}
                      fill
                      sizes="(min-width: 640px) 46vw, 92vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                    <span className="pointer-events-none absolute bottom-4 right-4 flex size-11 items-center justify-center rounded-full bg-ink/70 text-ivory opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                      <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden>
                        <circle cx="9" cy="9" r="6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="m13.5 13.5 3.5 3.5M9 6.5v5M6.5 9h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </BrowserFrame>
              </button>
              <p className="mt-4 text-sm text-ink-muted">
                <span className="font-medium text-ink">{k.naziv}</span>
                {" — "}
                {k.opis.split("— ")[1]}
              </p>
            </div>
          </BlurFade>
        ))}
      </div>

      {/* Uvećan prikaz cele stranice koncepta */}
      {aktivan && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Koncept ${aktivan.naziv} — cela stranica`}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B0A08]/85 p-4 backdrop-blur-sm md:p-10"
          onClick={zatvori}
        >
          <div
            className="relative flex max-h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-ink-hairline bg-white px-5 py-3">
              <span className="font-mono text-xs tracking-wide text-ink-muted">
                {aktivan.url} · Koncept
              </span>
              <button
                type="button"
                onClick={zatvori}
                aria-label="Zatvori uvećani prikaz"
                className="flex size-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5"
              >
                <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden>
                  <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </button>
            </div>
            <div className="overflow-y-auto overscroll-contain">
              <Image
                src={aktivan.slika}
                alt={`Cela stranica koncepta: ${aktivan.naziv}`}
                width={1100}
                height={2400}
                sizes="(min-width: 768px) 768px, 92vw"
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
