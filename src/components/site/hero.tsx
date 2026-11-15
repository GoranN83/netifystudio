"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { BlurFade } from "@/components/magicui/blur-fade";
import { putanja } from "@/lib/putanja";

const NAV = [
  { label: "Radovi", href: "#radovi" },
  { label: "Proces", href: "#proces" },
  { label: "Paketi", href: "#paketi" },
  { label: "Kontakt", href: "#kontakt" },
];

const FAKTI = [
  "Besplatna konsultacija, bez obaveze",
  "Cena unapred — pismeno",
  "Odgovor u roku od jednog radnog dana",
];

function WorkWindow() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [2.2, -2.2]), {
    stiffness: 120,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-3, 3]), {
    stiffness: 120,
    damping: 18,
  });

  return (
    <motion.div
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onMouseLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      className="w-full overflow-hidden rounded-lg bg-[#14120e]/90 ring-1 ring-foreground/15 shadow-[0_60px_140px_-30px_rgba(0,0,0,0.9)] backdrop-blur-sm"
    >
      <div className="flex items-center gap-4 border-b border-hairline px-4 py-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="size-2.5 rounded-full bg-foreground/20" />
          <span className="size-2.5 rounded-full bg-foreground/20" />
          <span className="size-2.5 rounded-full bg-foreground/20" />
        </div>
        <span className="font-mono text-xs tracking-wide text-muted">
          vile-mirna.com
        </span>
        <span className="ml-auto rounded-full border border-hairline px-2.5 py-0.5 text-[10px] uppercase tracking-[0.18em] text-muted">
          Koncept
        </span>
      </div>
      <div className="relative aspect-[16/10]">
        <Image
          src={putanja("/works/site-mirna.jpg")}
          alt="Koncept sajta za planinske vile Mirna"
          fill
          priority
          sizes="(min-width: 1024px) 44vw, 92vw"
          className="object-cover object-top"
        />
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] flex-col overflow-hidden">
      {/* Pozadina: fotografija vile preko celog ekrana */}
      <div className="absolute inset-0 -z-10" aria-hidden>
        <div
          className="absolute -inset-10"
          style={{ animation: "kenburns 30s ease-out forwards" }}
        >
          <Image
            src={putanja("/works/backdrop-mirna.jpg")}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/55 to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/15 to-background/50" />
      </div>

      {/* Zaglavlje */}
      <BlurFade delay={0.9} duration={0.7} className="relative z-10">
        <header className="flex h-20 items-center justify-between border-b border-foreground/10 px-6 md:px-12">
          <a
            href="#"
            className="text-sm font-medium uppercase tracking-[0.28em]"
          >
            Netify Studio
          </a>
          <nav className="hidden items-center gap-10 md:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href="tel:+38163489978"
            className="font-mono text-xs tracking-wide text-foreground/70 transition-colors hover:text-foreground"
          >
            +381 63 489 978
          </a>
        </header>
      </BlurFade>

      {/* Sredina */}
      <div className="relative z-10 grid flex-1 items-center gap-12 px-6 py-14 md:px-12 lg:grid-cols-[1.08fr_1fr] lg:gap-16">
        <div className="max-w-2xl">
          <BlurFade delay={0.15} duration={0.6}>
            <p className="mb-6 text-[11px] uppercase tracking-[0.32em] text-foreground/60">
              Dizajn i izrada sajtova
            </p>
          </BlurFade>
          <BlurFade delay={0.3} duration={0.8}>
            <h1 className="font-serif text-[clamp(2.7rem,6vw,5.6rem)] font-normal leading-[1.08] tracking-[-0.01em]">
              Vi vodite posao.
              <br />
              Sajt prepustite <em>nama.</em>
            </h1>
          </BlurFade>
          <BlurFade delay={0.55} duration={0.7}>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-foreground/75 md:text-lg">
              Tekst, dizajn, izrada, objava — sve radimo mi, vi samo
              odobravate. Za 1–5 nedelja imate sajt koji dovodi upite. Cena se
              posle dogovora ne menja, a garancija od 14 dana znači da ne
              rizikujete ništa.
            </p>
          </BlurFade>
          <BlurFade delay={0.75} duration={0.7}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#kontakt"
                className="rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Zakažite konsultacije
              </a>
              <a
                href="#radovi"
                className="rounded-full border border-foreground/25 px-7 py-3.5 text-sm text-foreground/85 transition-colors hover:border-foreground/50 hover:text-foreground"
              >
                Pogledajte radove
              </a>
            </div>
          </BlurFade>
        </div>

        <BlurFade delay={0.5} duration={0.9} direction="up" offset={10}>
          <WorkWindow />
        </BlurFade>
      </div>

      {/* Tri činjenice sa starog sajta */}
      <BlurFade delay={1.0} duration={0.7} className="relative z-10">
        <div className="border-t border-foreground/10 px-6 py-6 md:px-12">
          <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-12 sm:gap-y-3">
            {FAKTI.map((f) => (
              <li
                key={f}
                className="flex items-center gap-3 text-sm text-foreground/75"
              >
                <span
                  className="size-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden
                />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </BlurFade>
    </section>
  );
}
