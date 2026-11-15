# Netify Studio

Sajt agencije Netify Studio, za dizajn i izradu sajtova.

> Vi vodite posao. Sajt prepustite nama.

## Tehnologija

- [Next.js](https://nextjs.org) 16 (App Router, TypeScript)
- Tailwind CSS v4
- [Motion](https://motion.dev) i komponente iz [Magic UI](https://magicui.design) (`blur-fade`, `marquee`)
- Fontovi: Playfair Display, Inter, Geist Mono (preko `next/font`)

## Pokretanje

```bash
npm install
npm run dev
```

Sajt se otvara na http://localhost:3000.

Produkcijska verzija:

```bash
npm run build
npm start
```

## Struktura

```
src/
├── app/
│   ├── layout.tsx                 fontovi, naslov i meta opis
│   ├── globals.css                boje, fontovi, animacije (@theme)
│   ├── page.tsx                   redosled sekcija
│   └── politika-privatnosti/      stranica o privatnosti
└── components/
    ├── magicui/                   blur-fade, marquee
    └── site/                      hero, radovi, koncepti, proces, paketi,
                                   garancija, faq, kontakt, plivajući meni
public/works/                      slike i video radova
docs/netify_studio_redizajn.md     kompletne beleške o projektu
```

## Beleške

Sve odluke o dizajnu, tekstovima, slikama i otvorenim zadacima opisane su u [`docs/netify_studio_redizajn.md`](docs/netify_studio_redizajn.md).

---

© 2026 Netify Studio
