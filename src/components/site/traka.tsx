import { Marquee } from "@/components/magicui/marquee";

const STAVKE = [
  "Dizajn po meri",
  "WordPress",
  "Next.js",
  "Astro",
  "Tehnički SEO",
  "Dvojezični sajtovi",
  "Brzina učitavanja",
  "Održavanje",
];

export function Traka() {
  return (
    <div className="border-y border-hairline bg-background py-5 text-foreground">
      <Marquee pauseOnHover className="[--duration:36s] [--gap:3.5rem]">
        {STAVKE.map((s) => (
          <span
            key={s}
            className="flex items-center gap-[3.5rem] text-[11px] uppercase tracking-[0.3em] text-muted"
          >
            {s}
            <span className="size-1 rounded-full bg-accent" aria-hidden />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
