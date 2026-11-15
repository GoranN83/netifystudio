import { BlurFade } from "@/components/magicui/blur-fade";
import { putanja } from "@/lib/putanja";
import { BrowserFrame } from "@/components/site/browser-frame";
import { Koncepti } from "@/components/site/koncepti";

const STATS = [
  { broj: "80", opis: "stranica na dva jezika" },
  { broj: "209", opis: "profesionalnih fotografija" },
  { broj: "13", opis: "PDF kataloga" },
  { broj: "26", opis: "proizvoda sa videom" },
];

export function Radovi() {
  return (
    <section id="radovi" className="scroll-mt-16 bg-ivory text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
        {/* Naslov */}
        <BlurFade inView delay={0.1} duration={0.7}>
          <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-ink-muted">
            Radovi
          </p>
          <h2 className="max-w-3xl font-serif text-[clamp(2.2rem,4.4vw,3.9rem)] font-normal leading-[1.1]">
            Ne verujte rečima. <em>Verujte radovima.</em>
          </h2>
        </BlurFade>

        {/* Ultracut — izveden projekat */}
        <div className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <BlurFade inView delay={0.15} duration={0.7}>
            <p className="text-[11px] uppercase tracking-[0.25em] text-ink-muted">
              Izveden projekat · Ultracut Solution
            </p>
            <h3 className="mt-3 font-serif text-4xl font-normal md:text-5xl">
              Precizan sajt za <em>preciznu</em> industriju.
            </h3>
            <p className="mt-5 max-w-md leading-relaxed text-ink-muted">
              Dvojezičan sajt za distributera YG-1 reznih alata — sadržaj,
              dizajn i izrada od nule. Uz sajt: logotip, memorandum i
              vizitkarte.
            </p>
            <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-8">
              {STATS.map((s) => (
                <div key={s.opis} className="border-t border-ink-hairline pt-4">
                  <dt className="sr-only">{s.opis}</dt>
                  <dd className="font-serif text-4xl">{s.broj}</dd>
                  <dd className="mt-1 text-sm text-ink-muted">{s.opis}</dd>
                </div>
              ))}
            </dl>
            <a
              href="https://ultracutsolution.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-block border-b border-ink/30 pb-0.5 text-sm tracking-wide transition-colors hover:border-ink"
            >
              Pogledajte sajt uživo ↗
            </a>
          </BlurFade>
          <BlurFade inView delay={0.25} duration={0.8} direction="up" offset={10}>
            <BrowserFrame url="ultracutsolution.com" tone="light">
              <video
                src={putanja("/works/ultracut-intro.mp4")}
                poster={putanja("/works/site-ultracut.jpg")}
                muted
                loop
                playsInline
                autoPlay
                className="aspect-[16/9] w-full object-cover"
              />
            </BrowserFrame>
          </BlurFade>
        </div>

        {/* Koncepti */}
        <div className="mt-24 md:mt-36">
          <BlurFade inView delay={0.1} duration={0.7}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-t border-ink-hairline pt-8">
              <h3 className="font-serif text-3xl font-normal md:text-4xl">
                Koncepti
              </h3>
              <p className="max-w-md text-sm leading-relaxed text-ink-muted">
                Napravljeni bez naručioca — da vidite kako razmišljamo pre nego
                što nas platite. Kliknite na koncept za celu stranicu.
              </p>
            </div>
          </BlurFade>
          <Koncepti />
        </div>
      </div>
    </section>
  );
}
