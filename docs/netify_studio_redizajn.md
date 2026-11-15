# Netify Studio — redizajn sajta

Stanje: 14. novembar 2026. Sajt je kompletan i radi lokalno, ali još nije objavljen.

---

## 1. Cilj

Novi sajt agencije treba posetiocu da prenese jednu misao: *„Ako je ovako napravio sajt za sebe, kako bi tek napravio za moj biznis."*
Stari sajt: https://gorann83.github.io/netifystudio/ (sa njega su preuzeti marketinški tekstovi).

## 2. Tehnologija

| Šta | Čime |
|---|---|
| Okvir | Next.js 16 (App Router, TypeScript, `src/` folder) |
| Stilovi | Tailwind CSS v4 (boje i fontovi su u `src/app/globals.css`, blok `@theme inline`) |
| Animacije | `motion` + Magic UI komponente (`blur-fade`, `marquee`), ručno prepisane |
| Fontovi | **Playfair Display** (naslovi) + **Inter** (tekst) + Geist Mono (adrese u okvirima) |
| Slike | Higgsfield (Nano Banana 2), snimci sajtova napravljeni pomoću headless Edge-a |

## 3. Pokretanje (VAŽNO)

Korisničko ime `G&K` sadrži znak `&`, a on kvari npm/npx na Windows-u. Zato je Node prenosna kopija u `D:\netifystudio\tools\nodejs`.

U Bash terminalu, pre svake npm komande:
```bash
export PATH="/d/netifystudio/tools/nodejs:$PATH"
export npm_config_cache="D:\\netifystudio\\tools\\npm-cache"
```

- Razvojni server: konfiguracija `netify-dev` u `ns_redizajn\.claude\launch.json` → http://localhost:3000
- Provera pred objavu: `cd netify && npx next build`
- `shadcn init` traži odgovore u terminalu i ne može da se automatizuje. Magic UI komponente se zato prepisuju ručno u `src/components/magicui/`.

## 4. Struktura projekta

```
ns_redizajn\
├── netify_studio_redizajn.md   ← ovaj fajl
├── .claude\launch.json          ← dev server
├── assets\                      ← originalni snimci Ultracut sajta
└── netify\                      ← Next.js projekat
    ├── public\works\            ← sve slike i video sajta
    └── src\
        ├── app\
        │   ├── layout.tsx              fontovi, naslov, meta opis
        │   ├── globals.css             boje, fontovi, animacije
        │   ├── page.tsx                redosled sekcija
        │   ├── icon.svg                favicon (kurzivno N + terakota tačka)
        │   └── politika-privatnosti\page.tsx
        └── components\
            ├── magicui\  blur-fade.tsx, marquee.tsx
            └── site\     hero, traka, radovi, koncepti, browser-frame,
                          proces, paketi, garancija, faq, kontakt,
                          plivajuci-meni
```

## 5. Dizajn sistem

**Boje**
| Naziv | Vrednost | Upotreba |
|---|---|---|
| background | `#0B0A08` | tamne sekcije |
| foreground / ivory | `#F5F1E8` | tekst na tamnom, svetle sekcije |
| sand | `#EDE3D3` | FAQ |
| ink | `#17140F` | tekst na svetlom, kartica Biznis |
| muted | `#A8A195` | sporedni tekst na tamnom |
| accent (terakota) | `#D96E45` | samo tačke, oznake, fokus, Preporučeno |

**Ritam sekcija:** dve susedne sekcije nikad nemaju istu boju. Redosled: tamna → traka → svetla → tamna → svetla → tamna → pesak → tamna.

**Razmaci (ui-ux-pro-max):** skala sa korakom od 8 px.
- između sekcija: 144 px (desktop) / 96 px (telefon)
- naslov → sadržaj: 64 px (desktop) / 48 px
- unutar blokova: 24 do 40 px

Ostala pravila: prored teksta 1,5–1,75; dodirne mete najmanje 44 px; vidljiv fokus (terakota obrub); podrška za smanjeno kretanje (reduced motion).

**Animacije:** jedan stil pojavljivanja (blur-fade) za ceo sajt. Pored njega: spori zum pozadine u hero sekciji, nagib prozora prema mišu, pokretna traka i rotirajući pečat garancije.

## 6. Sekcije (redosled na stranici)

1. **Plivajući meni** — pojavljuje se kada korisnik prođe hero sekciju. Sadrži veze ka sekcijama i dugme „Zakažite konsultacije". Na telefonu se otvara preko hamburger dugmeta.
2. **Hero** — bez slajdera, sadrži samo koncept **Mirna**. Pozadina je fotografija vile nad jezerom sa sporim zumom, a desno je prozor pregledača.
   - Naslov (Hormozi, predlog 2): **„Vi vodite posao. Sajt prepustite *nama.*"**
   - Podnaslov: „Tekst, dizajn, izrada, objava — sve radimo mi, vi samo odobravate. Za 1–5 nedelja imate sajt koji dovodi upite. Cena se posle dogovora ne menja, a garancija od 14 dana znači da ne rizikujete ništa."
   - Dno: tri činjenice (besplatna konsultacija · cena unapred · odgovor za dan).
3. **Traka** — pokretni niz usluga (Magic UI marquee).
4. **Radovi** — „Ne verujte rečima. *Verujte radovima.*"
   - Ultracut: „Precizan sajt za *preciznu* industriju." Prikazuje video sajta i brojke 80 / 209 / 13 / 26.
   - Koncepti, šest komada: Aurelija, Mirna (svetla verzija), Arken, Trpeza, Vidik, Sola Ceramics. Klik na koncept otvara uvećan prikaz cele stranice; zatvara se klikom na X, klikom van slike ili tasterom Esc.
5. **Proces** — „Od prvog poziva *do objave sajta.*" Tri koraka na vertikalnoj liniji, prikazana cela fotografija studija i blok „Pravila kojih se *držimo.*" (5 stubića, bez razdelne linije).
6. **Paketi** — Start 790 € · **Biznis 1.890 €** (tamna kartica, oznaka „Preporučeno") · Premium 2.990 € · Po meri. Stavke su doslovno preuzete sa starog sajta.
7. **Garancija** — „14 dana. *Bez rizika.*" Rotirajući pečat sa brojem 14 u centru i tri stavke (ceo iznos, samo obrazloženje, pismeno u ponudi).
8. **Česta pitanja** — levo naslov koji ostaje na mestu pri skrolovanju, desno 8 pitanja: 6 originalnih, „Šta ako mi se dizajn ne svidi?" i „Da li postoji garancija na urađeno?".
9. **Kontakt + podnožje** — forma (mailto), telefon, email, Instagram, Facebook, Politika privatnosti i dugme za povratak na vrh.

## 7. Tekstovi — pravila

- Gde postoji tekst na starom sajtu, prenosi se **doslovno**, bez prepravki (marketinški je obrađen).
- Novi tekstovi se pišu po resursima iz `D:\netifystudio\resursi\Marketing`: Hormozi (*$100M Offers*), Godin, Cialdini i Stefan Gajić („prodaja bez prodaje").
- Bez generičkih fraza. Svaka rečenica treba da kaže čime se agencija bavi, koji problem rešava ili zašto kupac nema rizik.
- Garancija se navodi kao „kompletan iznos, bez umanjenja". Za povraćaj je dovoljno da klijent obrazloži zbog čega nije zadovoljan. Ne pominju se bonovi.

## 8. Slike i video (`netify/public/works/`)

| Fajl | Izvor | Gde se koristi |
|---|---|---|
| backdrop-mirna.jpg | Higgsfield (novo, 11.11.) | pozadina hero sekcije |
| site-mirna.jpg | Higgsfield istorija | prozor u hero sekciji |
| koncept-mirna.jpg | Higgsfield istorija (svetla verzija) | galerija koncepata |
| site-aurelija.jpg, koncept-arken/trpeza/vidik/sola.jpg | Higgsfield istorija | galerija koncepata |
| site-ultracut.jpg | snimak ultracutsolution.com | poster videa |
| ultracut-intro.mp4 | projekat Ultracut | Radovi |
| proces-studio.jpg | Higgsfield (novo, 12.11.) | Proces |
| kontakt-noc.jpg | Higgsfield istorija | pozadina kontakta |

Higgsfield: generisanje se radi u Goranovom Chrome-u (higgsfield.ai/ai/image, Nano Banana 2, 16:9, 1,5 kredita po slici). Promptovi se ukucavaju tastaturom. Na nalogu je ostalo oko 35 kredita.

## 9. Odbijeno — ne vraćati

- Prototipovi 1–5 (Rendgen, Manifest, Hrom, Veza v1–v3, Noir).
- Font **Cormorant Garamond** (velike kvačice na č/š/ž).
- Hero kao slajder, „sajt koji upravo gledate" kao rad u portfoliju.
- Zamućene ili pretamne pozadine, isečene slike, ista slika upotrebljena dva puta.
- Generički naslovi („Jedan zanat. Različiti svetovi." i slično).
- Numeracija 01/02, uputstva tipa „pređite mišem".

## 10. Usput rešeni problemi (za buduće izmene)

- `@keyframes` unutar `@theme inline` tiho prekida generisanje boja. Keyframes moraju biti van tog bloka.
- Broj 14 u pečatu je iscrtan u SVG-u, sa `dy="0.19em"` (izmereno po pikselima za Playfair Display).
- Kružni tekst koristi `letter-spacing: 2.78px`, izračunat iz izmerene širine teksta i obima kruga. SVG `textLength` ne radi u svim pregledačima, pa se ne koristi. Ako se tekst menja, razmak treba ponovo izračunati.
- Sajt 21st.dev zamrzava Chrome. Ne otvarati ga kroz automatizaciju, nego primeniti poznate obrasce.
- Fotografije koje moraju biti cele prikazuju se sa `width/height` + `h-auto`, a ne sa `fill`, da se ne bi isekle.

## 11. Otvoreno — pre objave

- [ ] **Email:** `kontakt@netifystudio.com` je izmišljena adresa. Upisati pravu u `kontakt.tsx`.
- [ ] **Slanje forme:** sada otvara program za poštu posetioca (mailto). Za pravo slanje potreban je servis (npr. Resend ili Formspree).
- [ ] **Instagram i Facebook:** veze su `#`. Upisati prave adrese u `kontakt.tsx`.
- [ ] **Garancija 14 dana:** to je poslovna obaveza. Formulacija mora da se potvrdi i da se unese u ponudu.
- [ ] **ultracut-intro.mp4 ima 14 MB:** kompresovati pre objave.
- [ ] Adrese koncepata (aurelija.rs, vile-mirna.com…) su izmišljene i služe samo kao ukras.
- [ ] Izabrati hosting (preporuka: Vercel) i povezati domen.
- [ ] EN verzija sajta (stari sajt je imao SR/EN).
