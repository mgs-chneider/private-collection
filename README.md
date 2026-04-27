# privat-besitz.de — Private Sammlung

Ein eleganter Online-Katalog für kuratierte Einzelstücke aus Privatbesitz. Gebaut mit **Next.js 14** (App Router, TypeScript), deployed auf **Vercel**.

Die Gestaltung orientiert sich am klassischen Auktionskatalog: cremefarbene Palette, Serifenschrift (Cormorant Garamond), dezente Goldakzente.

## Funktionsumfang

- Einseitiger Katalog mit Filterung nach Kategorie
- Detailansicht als Modal mit Bildergalerie, Lightbox, Thumbnails und Mailto-Button
- Einzelne Unterseite pro Stück unter `/stueck/[slug]` — statisch generiert, SEO-optimiert
- Dynamische Sitemap unter `/sitemap.xml`
- Canonical Tags und OpenGraph-Metadaten pro Unterseite
- Reserviert-Markierung via `reserved: boolean` im Piece-Interface
- Responsive Gestaltung für Desktop, Tablet und Mobilgerät

## Lokales Arbeiten

Voraussetzungen: Node.js 18.18 oder neuer (empfohlen: 20 LTS).

```bash
npm install
npm run dev
```

Danach ist die Seite unter [http://localhost:3000](http://localhost:3000) erreichbar.

Weitere Skripte:

- `npm run build` — Produktions-Build erzeugen
- `npm run start` — Produktions-Build lokal starten
- `npm run lint` — ESLint-Prüfung

## Stücke pflegen

Die gesamte Sammlung wird in einer einzigen Datei gepflegt:

**`lib/pieces.ts`**

Jeder Eintrag hat folgende Felder:

| Feld | Bedeutung |
|------|-----------|
| `id` | Eindeutige Nummer, lückenlos (wird als römische Katalognummer angezeigt) |
| `category` | `'moebel'` oder `'kunst'` |
| `categoryLabel` | Angezeigter Kategorietext |
| `title` | Titel des Stücks — Künstlername voranstellen für SEO |
| `artist` | Künstler oder Designer (optional) |
| `origin` | Herkunft / Datierung (Kurzzeile unter dem Titel) |
| `motif` | Platzhalter-Symbol wenn kein Foto vorhanden: `chair`, `frame`, `lamp`, `vase`, `landscape`, `portrait`, `cabinet`, `carpet`, `sculpture` |
| `images` | Array von Bildpfaden relativ zu `public/` — erstes Bild ist Hauptfoto |
| `price` | Preis oder `'Preis auf Anfrage'` |
| `description` | Freitext für die Detailansicht |
| `specs` | Objekt mit Schlüssel/Wert-Paaren |
| `reserved` | `true` zeigt „Reserviert" statt Preis (optional) |

### Stück hinzufügen
Eintrag in `pieces.ts` ergänzen, `id` lückenlos weiterführen.

### Stück entfernen (verkauft)
Eintrag löschen, alle nachfolgenden `id`-Werte neu nummerieren.
Querverweise in anderen Beschreibungstexten prüfen und anpassen.

### Slugs
Werden automatisch aus dem Titel generiert via `lib/slugs.ts`.
Sonderzeichen: ä→ae, ö→oe, ü→ue, ß→ss.
Beispiel: „Eames Lounge Chair 670, Herman Miller" → `/stueck/eames-lounge-chair-670-herman-miller`

## Projektstruktur
