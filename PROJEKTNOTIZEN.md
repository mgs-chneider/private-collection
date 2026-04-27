# privat-besitz.de — Projektnotizen

Stand: April 2026

## Technischer Stack
- Next.js 14 (App Router) auf Vercel
- TypeScript
- Domain: privat-besitz.de (registriert bei IONOS)
- Repository: github.com/mgs-chneider/private-collection

## Architektur-Entscheidungen

### Datenhaltung
Alle Inhalte leben in `lib/pieces.ts` als TypeScript-Array.
Kein CMS, keine Datenbank — bewusste Entscheidung für Einfachheit.
Neue Stücke: Eintrag im Array ergänzen, id lückenlos nummerieren.
Verkaufte Stücke: Eintrag entfernen und ids neu nummerieren.

### URL-Struktur
Artikel-Unterseiten unter `/stueck/[slug]`.
Slugs werden automatisch aus dem Titel generiert via `lib/slugs.ts`.
Sonderzeichen: ä→ae, ö→oe, ü→ue, ß→ss.
Beispiel: „Eames Lounge Chair 670, Herman Miller" → `/stueck/eames-lounge-chair-670-herman-miller`

### Komponenten-Struktur
- `PieceCard` — Karte im Grid, öffnet Modal per onClick, Link zur Unterseite
- `PieceModal` — Overlay mit Lightbox, Thumbnails, Mailto-Button
- `PieceGallery` — klickbare Thumbnails auf der Unterseite (Client Component)
- `app/stueck/[slug]/page.tsx` — statisch generierte Unterseite pro Stück

### Reserviert-Funktion
Feld `reserved?: boolean` im Piece-Interface.
Bei `reserved: true` zeigt die Karte „Reserviert" statt des Preises.
Badge erscheint auf dem Foto oben links.

## SEO-Setup
- `app/sitemap.ts` — dynamisch, aktualisiert sich automatisch bei jedem Deploy
- Canonical Tags in `generateMetadata` jeder Unterseite
- OpenGraph-Metadaten pro Stück (Titel, Beschreibung, erstes Foto)
- Google Search Console eingerichtet, Sitemap eingereicht (26.04.2026, 15 URLs erkannt)
- PageSpeed: 98 Leistung / 96 Barrierefreiheit / 100 Best Practices / 100 SEO

## Titel-Konventionen (SEO)
Künstlername immer voranstellen:
- „Martin Liebscher — Moskau (Detskij Mir)"
- „Winter/Hoerbelt — Stehende Figur" (Schreibweise so vom Duo selbst verwendet)
- „Eames Lounge Chair 670, Herman Miller"
- „Gallotti & Radice, President Junior — Glasschreibtisch, 1971"

## Bilder
Alle Fotos in `public/images/`.
Namenskonvention: `[objekt]-[beschreibung].jpeg`
Beispiel: `eames-front.jpeg`, `eames-nummer.jpeg`
Hauptfoto immer als erstes im `images`-Array.
Freigestellte Fotos (Hintergrund entfernt via Freepik) bevorzugt als Hauptfoto.

## Redaktionelle Entscheidungen

### Provenienz-Angaben
- Essgruppe: Familienname und Bankname nicht nennen → „Berliner Privathaushalt eines deutschen Bankgründers"
- Essgruppe: seit Anschaffung ununterbrochen in Familienbesitz (Enkeltochter des ursprünglichen Besitzers)
- Eames: drei Generationen Familienbesitz, nie restauriert, nie den Besitzer gewechselt
- Impressum: nur Stadt, keine Straße (Datenschutz)

### Querverweise zwischen Stücken
Nach Neunummerierung (Stand April 2026, 11 Stücke):
- Seidenteppich: Nr. IV (früher V)
- Donghia: verweist auf Liebscher Nr. II und Seidenteppich Nr. IV
- Fontana Arte: verweist auf Donghia Nr. VII

### Verkaufte Stücke (entfernt)
- id 4: Bulthaup Küchenwerkstatt — verkauft (auch bei eBay inseriert)
- id 12: Tolomeo Artemide Paar — verkauft

### Reservierte Stücke
- Aktuell keine (KWB war reserviert, ist jetzt verkauft)

## Aktuelle Sammlung (Stand April 2026)
| Nr. | Titel | Kategorie |
|-----|-------|-----------|
| I | Winter/Hoerbelt — Stehende Figur | Kunst |
| II | Martin Liebscher — Moskau (Detskij Mir) | Kunst |
| III | Martin Liebscher — New York (TWA Edition) | Kunst |
| IV | Antiker Seidenteppich, China | Möbel |
| V | Essgruppe, skandinavischer Stil | Möbel |
| VI | Bang & Olufsen Surround-Anlage | Möbel |
| VII | Donghia Lounge Chair | Möbel |
| VIII | Eames Lounge Chair 670, Herman Miller | Möbel |
| IX | Tavolo con Ruote, Fontana Arte | Möbel |
| X | de Sede DS-76, Schlafsofa | Möbel |
| XI | Gallotti & Radice, President Junior | Möbel |

## Offene Punkte / Nächste Schritte
- Eames-Fotos in public/images/ hochladen und deployen
- LinkedIn-Post absetzen (Text fertig, Variante 1 „Kuratorisch & souverän")
- Google Search Console weiter beobachten (erste Daten nach 1–2 Wochen)
- Schema.org Markup (ItemList + Product) noch nicht umgesetzt — nächster SEO-Schritt
- Direkte Ansprache: Galerien (Liebscher, Winter/Hoerbelt), Architekten, Innenarchitekten

## Reichweiten-Strategie
Besprochen aber noch nicht umgesetzt:
- LinkedIn: persönlicher Post mit Geschichte (Text fertig)
- Galerien: Liebscher wird vertreten bei Voges + Partner Frankfurt
- Plattformen: 1stDibs und Pamono für Designklassiker geeignet
- SEO: Suchbegriffe wie „Liebscher Panorama kaufen", „Eames Lounge Chair Herman Miller vintage", „Donghia Phantom Sessel" gezielt abdecken
