import Image from "next/image";
import { BlurFade } from "@/components/magicui/blur-fade";

const KORACI = [
  {
    naziv: "Razgovor i pravac",
    oznaka: "Besplatno",
    opis: "Na konsultaciji upoznajemo vaš posao i predlažemo pravo rešenje. Zatim zajedno definišemo publiku, cilj i ključnu poruku.",
  },
  {
    naziv: "Dizajn i izrada",
    opis: "Potvrđujemo strukturu i vizuelni pravac, pa oblikujemo i izrađujemo sajt. Svaku fazu vidite i odobravate pre nastavka.",
  },
  {
    naziv: "Objava i predaja",
    opis: "Proveravamo prikaz, brzinu i forme na svim ekranima, objavljujemo sajt i predajemo vam sve pristupe.",
  },
];

const PRAVILA = [
  { naslov: "Cena se ne menja.", tekst: "Cenu pišemo unapred i ne menjamo je." },
  {
    naslov: "Prvo vaše odobrenje.",
    tekst: "Dizajn ne počinjemo dok ne odobrite pravac.",
  },
  {
    naslov: "Bez zaključavanja.",
    tekst: "Sajt je vaš: predajemo sve pristupe i uputstvo.",
  },
  {
    naslov: "Odgovor za dan.",
    tekst: "Na svaki upit odgovaramo u roku od jednog radnog dana.",
  },
  {
    naslov: "Iskreno od starta.",
    tekst: "Ako nismo pravi izbor za vaš projekat, reći ćemo vam to odmah.",
  },
];

export function Proces() {
  return (
    <section id="proces" className="scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
        <BlurFade inView delay={0.1} duration={0.7}>
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-muted">
            Proces
          </p>
          <h2 className="max-w-3xl font-serif text-[clamp(2.2rem,4.4vw,3.9rem)] font-normal leading-[1.1]">
            Od prvog poziva <em>do objave sajta.</em>
          </h2>
        </BlurFade>

        <div className="mt-20 grid items-start gap-16 md:mt-24 lg:grid-cols-2 lg:gap-24">
          {/* Fotografija — cela, bez odsecanja */}
          <BlurFade
            inView
            delay={0.2}
            duration={0.8}
            direction="up"
            offset={10}
            className="order-last lg:order-first"
          >
            <figure className="lg:sticky lg:top-28">
              <div className="overflow-hidden rounded-lg ring-1 ring-foreground/10">
                <Image
                  src="/works/proces-studio.jpg"
                  alt="Radni sto studija: monitor sa dizajnom sajta i skice u svesci"
                  width={1600}
                  height={900}
                  sizes="(min-width: 1024px) 44vw, 92vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-5 text-sm leading-relaxed text-muted">
                Svaku fazu vidite i odobravate — ništa ne nastaje bez vas.
              </figcaption>
            </figure>
          </BlurFade>

          {/* Koraci sa linijom toka */}
          <div className="relative">
            <div
              className="absolute bottom-10 left-[5px] top-4 w-px bg-hairline"
              aria-hidden
            />
            {KORACI.map((k, i) => (
              <BlurFade key={k.naziv} inView delay={0.15 + i * 0.12} duration={0.7}>
                <div className="relative pb-16 pl-12 last:pb-0">
                  <span
                    className="absolute left-0 top-[16px] size-[11px] rounded-full border-2 border-accent bg-background"
                    aria-hidden
                  />
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    <h3 className="font-serif text-3xl font-normal md:text-4xl">
                      {k.naziv}
                    </h3>
                    {k.oznaka && (
                      <span className="rounded-full border border-accent/40 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-accent">
                        {k.oznaka}
                      </span>
                    )}
                  </div>
                  <p className="mt-5 max-w-md text-base leading-[1.75] text-muted">
                    {k.opis}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>

        {/* Pravila kojih se držimo */}
        <div className="mt-16 md:mt-24">
          <BlurFade inView delay={0.1} duration={0.7}>
            <h3 className="font-serif text-2xl font-normal md:text-3xl">
              Pravila kojih se <em>držimo.</em>
            </h3>
          </BlurFade>
          <div className="mt-10 grid gap-x-10 gap-y-12 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {PRAVILA.map((p, i) => (
              <BlurFade key={p.naslov} inView delay={0.1 + i * 0.06} duration={0.6}>
                <div className="border-l border-accent/50 pl-6">
                  <h4 className="font-medium leading-snug">{p.naslov}</h4>
                  <p className="mt-3 text-sm leading-[1.7] text-muted">
                    {p.tekst}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
