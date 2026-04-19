# Private Sammlung

Ein eleganter, einseitiger Online-Katalog für kuratierte Einzelstücke aus Privatbesitz. Gebaut mit **Next.js 14** (App Router, TypeScript) und ausgelegt für das Deployment auf **Vercel**.

Die Gestaltung orientiert sich am klassischen Auktionskatalog: cremefarbene Paletten, Serifenschrift (Cormorant Garamond), dezente Goldakzente. Besucher können durch die Stücke blättern, nach Kategorie filtern und über ein vorformuliertes E-Mail an Sie in Kontakt treten.

## Funktionsumfang

- Einseitiger Katalog unter einer einzigen URL
- Filterung nach Kategorie (Möbel & Einrichtung, Kunst & Gemälde)
- Detailansicht als Modal mit Beschreibung, Spezifikationen und Preis
- Direkter E-Mail-Kontakt mit vorausgefülltem Betreff und Nachrichtentext
- Responsive Gestaltung für Desktop, Tablet und Mobilgerät
- SEO-freundliche Meta-Daten, Open-Graph-Unterstützung

## Lokales Arbeiten

Voraussetzungen: Node.js 18.18 oder neuer (empfohlen: 20 LTS).

```bash
npm install
npm run dev
```

Danach ist die Seite unter [http://localhost:3000](http://localhost:3000) erreichbar.

Weitere Skripte:

- `npm run build` — Produktions-Build erzeugen
- `npm run start` — Produktions-Build lokal starten (nach `build`)
- `npm run lint` — ESLint-Prüfung

## Stücke pflegen

Die gesamte Sammlung wird in einer einzigen Datei gepflegt:

**`lib/pieces.ts`**

Jeder Eintrag hat folgende Felder:

| Feld            | Bedeutung                                                        |
| --------------- | ---------------------------------------------------------------- |
| `id`            | Eindeutige Nummer (wird als römische Katalognummer angezeigt)   |
| `category`      | `'moebel'` oder `'kunst'`                                        |
| `categoryLabel` | Angezeigter Kategorietext                                        |
| `title`         | Titel des Stücks                                                 |
| `origin`        | Herkunft / Datierung (als Kurzzeile unter dem Titel)             |
| `motif`         | Platzhalter-Symbol: `chair`, `frame`, `lamp`, `vase`, `landscape`, `portrait`, `cabinet`, `carpet` |
| `price`         | Preis oder `'Preis auf Anfrage'`                                 |
| `description`   | Freitext für die Detailansicht                                   |
| `specs`         | Objekt mit Schlüssel/Wert-Paaren (Material, Maße, Zustand etc.)  |

## Deployment auf Vercel

1. Änderungen auf GitHub pushen.
2. Auf [vercel.com](https://vercel.com) mit GitHub anmelden.
3. **New Project** → Repository `private-collection` auswählen → **Import**.
4. Einstellungen unverändert lassen (Vercel erkennt Next.js automatisch) → **Deploy**.
5. Nach wenigen Sekunden erhalten Sie eine URL (z. B. `private-collection.vercel.app`).

Bei jedem neuen Git-Push auf den `main`-Branch baut Vercel die Seite automatisch neu.

### Eigene Domain verbinden

Im Vercel-Dashboard unter **Settings → Domains** können Sie eine eigene Domain eintragen (z. B. `sammlung.schneiderundcie.com`). Vercel zeigt Ihnen die DNS-Einträge an, die bei Ihrem Domain-Provider zu hinterlegen sind.

## Projektstruktur

```
private-collection/
├── app/
│   ├── globals.css        — gesamte Stilschicht
│   ├── layout.tsx         — Root-Layout, Schriftarten, Meta-Daten
│   └── page.tsx           — Startseite (einzige Route)
├── components/
│   ├── Collection.tsx     — Grid + Filter + Modal-Koordination
│   ├── FilterBar.tsx      — Kategorie-Umschalter
│   ├── Footer.tsx         — Kontakt-Bereich
│   ├── Header.tsx         — Titel und Intro
│   ├── Motif.tsx          — SVG-Platzhalterillustrationen
│   ├── Ornament.tsx       — Dezente Linie + Punkt
│   ├── PieceCard.tsx      — Einzelne Katalogkarte
│   ├── PieceModal.tsx     — Detail-Ansicht
│   └── Preamble.tsx       — Einleitungstext
├── lib/
│   ├── pieces.ts          — Die Sammlung (Datenquelle)
│   └── roman.ts           — Umwandlung in römische Zahlen
├── public/                — Später: Bilder
├── package.json
├── next.config.mjs
├── tsconfig.json
└── README.md
```

## Lizenz und Hinweise

Dies ist ein privater Verkaufskatalog, keine gewerbliche Veräußerung.
Bei Fragen schreiben Sie an **mgs@schneiderundcie.com**.
