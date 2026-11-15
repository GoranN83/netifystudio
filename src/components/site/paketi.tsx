import { BlurFade } from "@/components/magicui/blur-fade";
import { cn } from "@/lib/utils";

const PAKETI = [
  {
    naziv: "Start",
    cena: "790 €",
    jednokratno: true,
    za: "Jedna usluga ili kampanja",
    rok: "1–2 nedelje",
    stavke: [
      "Landing stranica do 5 sekcija",
      "Prilagođeno telefonu i tabletu",
      "Sajt na dva jezika",
      "Kontakt forma",
      "Osnovna SEO podešavanja",
      "Prijava na Google pretraživač",
    ],
  },
  {
    naziv: "Biznis",
    cena: "1.890 €",
    jednokratno: true,
    za: "Firme i uslužne delatnosti",
    rok: "2–3 nedelje",
    preporuka: true,
    stavke: [
      "Do 10 stranica",
      "Dizajn prilagođen brendu",
      "Sajt na dva jezika",
      "Samostalna izmena sadržaja",
      "SEO podešavanja i Google Analytics",
      "Prijava na pretraživače i Search Console",
    ],
  },
  {
    naziv: "Premium",
    cena: "2.990 €",
    jednokratno: true,
    za: "Firme na više tržišta",
    rok: "3–5 nedelja",
    stavke: [
      "Do 20 stranica",
      "Dizajn po meri",
      "Sajt na tri jezika",
      "Blog sa kategorijama",
      "Napredni SEO i mapa sajta",
      "Prijava na pretraživače i praćenje posete",
    ],
  },
  {
    naziv: "Po meri",
    cena: "na upit",
    za: "Veliki i složeni projekti",
    rok: "po dogovoru",
    stavke: [
      "Planiranje strukture i sadržaja",
      "Jedinstven dizajn",
      "Jezici po potrebi",
      "Napredne funkcionalnosti i integracije",
      "Napredni SEO i prijava na pretraživače",
      "Obim i podrška po dogovoru",
    ],
  },
];

function Check({ dark = false }: { dark?: boolean }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className={cn("mt-1 size-4 shrink-0", dark ? "text-accent" : "text-accent")}
    >
      <path
        d="M3 8.5 6.5 12 13 4.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Paketi() {
  return (
    <section id="paketi" className="scroll-mt-16 bg-ivory text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
        <BlurFade inView delay={0.1} duration={0.7}>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-ink-muted">
                Paketi i cene
              </p>
              <h2 className="max-w-3xl font-serif text-[clamp(2.2rem,4.4vw,3.9rem)] font-normal leading-[1.1]">
                Jasna ponuda. <em>Cena unapred.</em>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-ink-muted">
              Tačnu cenu dobijate pisano posle besplatne konsultacije — i ona
              se posle ne menja.
            </p>
          </div>
        </BlurFade>

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-2 xl:grid-cols-4">
          {PAKETI.map((p, i) => {
            const dark = !!p.preporuka;
            return (
              <BlurFade
                key={p.naziv}
                inView
                delay={0.1 + i * 0.07}
                duration={0.7}
                direction="up"
                offset={10}
                className="h-full"
              >
                <article
                  className={cn(
                    "relative flex h-full flex-col rounded-xl p-8",
                    dark
                      ? "bg-ink text-ivory shadow-[0_40px_90px_-30px_rgba(23,20,15,0.5)]"
                      : "bg-white text-ink ring-1 ring-ink/10"
                  )}
                >
                  {dark && (
                    <span className="absolute -top-3 left-8 rounded-full bg-accent px-3.5 py-1 text-[10px] font-medium uppercase tracking-[0.18em] text-white">
                      Preporučeno
                    </span>
                  )}
                  <h3 className="font-serif text-2xl">{p.naziv}</h3>
                  <p
                    className={cn(
                      "mt-1 text-sm",
                      dark ? "text-ivory/65" : "text-ink-muted"
                    )}
                  >
                    {p.za}
                  </p>
                  <div className="mt-7 flex items-baseline gap-2">
                    {p.cena !== "na upit" && (
                      <span
                        className={cn(
                          "text-sm",
                          dark ? "text-ivory/65" : "text-ink-muted"
                        )}
                      >
                        od
                      </span>
                    )}
                    <span className="font-serif text-[2.6rem] leading-none">
                      {p.cena}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "mt-2 text-xs uppercase tracking-[0.18em]",
                      dark ? "text-ivory/55" : "text-ink-muted"
                    )}
                  >
                    {p.jednokratno ? "jednokratno · " : ""}
                    {p.rok}
                  </p>
                  <ul
                    className={cn(
                      "mt-7 flex-1 space-y-3 border-t pt-7 text-sm leading-relaxed",
                      dark ? "border-ivory/15" : "border-ink-hairline"
                    )}
                  >
                    {p.stavke.map((s) => (
                      <li key={s} className="flex gap-3">
                        <Check dark={dark} />
                        <span className={dark ? "text-ivory/90" : "text-ink/85"}>
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#kontakt"
                    className={cn(
                      "mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-medium transition-transform hover:scale-[1.02]",
                      dark
                        ? "bg-accent text-white"
                        : "border border-ink/20 text-ink hover:border-ink/50"
                    )}
                  >
                    Zatražite ponudu
                  </a>
                </article>
              </BlurFade>
            );
          })}
        </div>

        <BlurFade inView delay={0.2} duration={0.7}>
          <div className="mt-12 flex flex-col gap-2 text-sm leading-relaxed text-ink-muted md:flex-row md:justify-between md:gap-10">
            <p>
              Cene izrade su jednokratne. Domen, hosting i održavanje
              obračunavaju se posebno.
            </p>
            <p className="md:text-right">
              Istovremeno radimo na ograničenom broju projekata, da bi svaki
              dobio punu pažnju.
            </p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
