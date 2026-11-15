import { BlurFade } from "@/components/magicui/blur-fade";

const PITANJA = [
  {
    p: "Koliko košta izrada sajta?",
    o: "Landing stranica od 790 €, poslovni sajt od 1.890 €, a sajt sa blogom i tri jezika od 2.990 €. Tačnu cenu dobijate pisano posle besplatne konsultacije i ona se posle ne menja.",
  },
  {
    p: "Koliko traje izrada?",
    o: "Landing stranica 1–2 nedelje, poslovni sajt 2–3 nedelje, veći sajt 3–5 nedelja. Rok zavisi i od toga kada stignu tekstovi i fotografije.",
  },
  {
    p: "Zašto ste skuplji od ponuda iz oglasa?",
    o: "Za jednostavnu vizitkartu jeftinija ponuda može biti dovoljna. Naša cena uključuje razgovor o vašem poslu, plan sadržaja, dizajn i proveru na svim ekranima. Izračunajte koliko vam vredi jedan novi klijent, jer sajt treba da ih donosi godinama.",
  },
  {
    p: "Mogu li sam da menjam sadržaj?",
    o: "Da, ako to želite. Tada sajt pravimo u WordPress-u i Elementoru i dobijate kratko uputstvo za uređivanje. Ako izmene prepustite nama, sajt pravimo u savremenim tehnologijama kao što su Astro, Next.js i React. Takav sajt se brže učitava, a sve izmene radimo mi.",
  },
  {
    p: "Šta mi treba za početak?",
    o: "Samo kratak razgovor. Na konsultaciji pričamo o vašem poslu i cilju, a posle dobijate preporuku i pisanu ponudu. Tekstove i fotografije dogovaramo kasnije.",
  },
  {
    p: "Šta se plaća posebno?",
    o: "Domen, hosting i mesečno održavanje. U ponudi jasno piše ko ih nabavlja i plaća.",
  },
  {
    p: "Šta ako mi se dizajn ne svidi?",
    o: "Zato pravac odobravate pre izrade — ne radimo nedeljama pa da pokažemo gotovo. Svaku celinu vidite na vreme i korigujemo je dok ne bude kako treba.",
  },
  {
    p: "Da li postoji garancija na urađeno?",
    o: "Da. Ako u prvih 14 dana od objave niste zadovoljni — dizajn nije pogodio, sajt ne radi kako je dogovoreno — napišete nam zbog čega i vraćamo vam kompletan iznos uplaćen za izradu. Garancija stoji pismeno u ponudi.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-16 bg-sand text-ink">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <div className="grid items-start gap-12 lg:grid-cols-[2fr_3fr] lg:gap-24">
          {/* Levi, lepljivi deo */}
          <BlurFade inView delay={0.1} duration={0.7}>
            <div className="lg:sticky lg:top-16">
              <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-ink-muted">
                Česta pitanja
              </p>
              <h2 className="font-serif text-[clamp(2.2rem,4vw,3.6rem)] font-normal leading-[1.1]">
                Sve što pitaju <em>pre početka.</em>
              </h2>
              <p className="mt-6 max-w-sm leading-relaxed text-ink-muted">
                Ako vaše pitanje nije ovde, postavite ga direktno — odgovaramo
                u roku od jednog radnog dana.
              </p>
              <a
                href="#kontakt"
                className="mt-8 inline-flex min-h-12 items-center rounded-full border border-ink/20 px-6 text-sm font-medium transition-colors hover:border-ink/50"
              >
                Postavite pitanje
              </a>
            </div>
          </BlurFade>

          {/* Pitanja */}
          <div className="border-t border-ink-hairline">
            {PITANJA.map((q, i) => (
              <BlurFade key={q.p} inView delay={0.06 + i * 0.04} duration={0.6}>
                <details className="group border-b border-ink-hairline">
                  <summary className="flex min-h-[72px] cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg font-medium transition-colors hover:text-ink/70 [&::-webkit-details-marker]:hidden">
                    {q.p}
                    <span
                      className="relative size-5 shrink-0 text-accent"
                      aria-hidden
                    >
                      <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 bg-current" />
                      <span className="absolute left-0 top-1/2 h-[2px] w-5 -translate-y-1/2 rotate-90 bg-current transition-transform duration-300 group-open:rotate-0" />
                    </span>
                  </summary>
                  <p className="max-w-xl pb-7 pr-12 leading-relaxed text-ink-muted">
                    {q.o}
                  </p>
                </details>
              </BlurFade>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
