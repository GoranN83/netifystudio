import { BlurFade } from "@/components/magicui/blur-fade";

const STAVKE = [
  {
    naslov: "Ceo iznos",
    tekst: "Vraćamo kompletan iznos uplaćen za izradu — bez umanjenja i bez uslova.",
  },
  {
    naslov: "Samo obrazloženje",
    tekst: "Dovoljno je da nam napišete zbog čega sajt nije ispunio očekivanja. To je sve.",
  },
  {
    naslov: "Pismeno u ponudi",
    tekst: "Garancija stoji u ponudi koju potpisujemo pre početka rada.",
  },
];

function Pecat() {
  return (
    <div className="relative size-40 shrink-0 md:size-48" aria-hidden>
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 animate-[spin_40s_linear_infinite]"
      >
        <defs>
          <path
            id="krug"
            d="M 100,100 m -78,0 a 78,78 0 1,1 156,0 a 78,78 0 1,1 -156,0"
          />
        </defs>
        <text className="fill-foreground/70 font-sans text-[13.5px] uppercase tracking-[2.78px]">
          <textPath href="#krug">
            Garancija povrata novca · 14 dana · Bez rizika ·{" "}
          </textPath>
        </text>
      </svg>
      {/* Unutrašnji krug i broj u SVG-u: broj je usidren na tačan centar (100,100),
          pa ne zavisi od metrike fonta ni od veličine prikaza */}
      <svg viewBox="0 0 200 200" className="absolute inset-0">
        <circle
          cx="100"
          cy="100"
          r="56"
          fill="none"
          stroke="var(--accent)"
          strokeOpacity="0.5"
        />
        <text
          x="100"
          y="100"
          dy="0.19em"
          textAnchor="middle"
          fontSize="58"
          className="fill-foreground font-serif"
        >
          14
        </text>
      </svg>
    </div>
  );
}

export function Garancija() {
  return (
    <section id="garancija" className="scroll-mt-16 bg-background text-foreground">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[auto_1fr] lg:gap-20">
          <BlurFade inView delay={0.15} duration={0.8} className="justify-self-center lg:justify-self-start">
            <Pecat />
          </BlurFade>
          <div>
            <BlurFade inView delay={0.1} duration={0.7}>
              <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-muted">
                Garancija
              </p>
              <h2 className="max-w-2xl font-serif text-[clamp(2.2rem,4.4vw,3.9rem)] font-normal leading-[1.1]">
                14 dana. <em>Bez rizika.</em>
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-muted">
                Ako u prvih 14 dana od objave niste zadovoljni sajtom, vraćamo
                vam novac u celosti. Toliko verujemo u ono što predajemo.
              </p>
            </BlurFade>
            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-3">
              {STAVKE.map((s, i) => (
                <BlurFade key={s.naslov} inView delay={0.15 + i * 0.08} duration={0.6}>
                  <div className="border-t border-hairline pt-5">
                    <h3 className="font-medium">{s.naslov}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      {s.tekst}
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
