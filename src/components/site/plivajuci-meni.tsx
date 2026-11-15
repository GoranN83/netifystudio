"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKOVI = [
  { label: "Radovi", href: "#radovi" },
  { label: "Proces", href: "#proces" },
  { label: "Paketi", href: "#paketi" },
  { label: "Garancija", href: "#garancija" },
  { label: "Kontakt", href: "#kontakt" },
];

export function PlivajuciMeni() {
  const [vidljiv, setVidljiv] = useState(false);
  const [otvoren, setOtvoren] = useState(false);

  useEffect(() => {
    const naSkrol = () => {
      const treba = window.scrollY > window.innerHeight * 0.85;
      setVidljiv(treba);
      if (!treba) setOtvoren(false);
    };
    naSkrol();
    window.addEventListener("scroll", naSkrol, { passive: true });
    return () => window.removeEventListener("scroll", naSkrol);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500",
        vidljiv
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      )}
    >
      <div className="border-b border-foreground/10 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-12">
          <a
            href="#"
            onClick={() => setOtvoren(false)}
            className="text-sm font-medium uppercase tracking-[0.28em] text-foreground"
          >
            Netify Studio
          </a>

          {/* Desktop veze */}
          <nav aria-label="Glavna navigacija" className="hidden items-center gap-8 md:flex">
            {LINKOVI.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-foreground/70 transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#kontakt"
              className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Zakažite konsultacije
            </a>
          </nav>

          {/* Mobilni meni */}
          <button
            type="button"
            onClick={() => setOtvoren((o) => !o)}
            aria-expanded={otvoren}
            aria-label={otvoren ? "Zatvori meni" : "Otvori meni"}
            className="flex size-11 items-center justify-center rounded-full border border-foreground/15 text-foreground md:hidden"
          >
            <svg viewBox="0 0 20 20" fill="none" className="size-5" aria-hidden>
              {otvoren ? (
                <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>

        {otvoren && (
          <nav
            aria-label="Mobilna navigacija"
            className="border-t border-foreground/10 px-6 pb-6 pt-2 md:hidden"
          >
            {LINKOVI.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOtvoren(false)}
                className="flex min-h-12 items-center border-b border-foreground/10 text-base text-foreground/85 last:border-b-0"
              >
                {n.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </div>
  );
}
