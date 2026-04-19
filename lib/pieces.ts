export type Category = 'moebel' | 'kunst';

export type MotifKey =
  | 'chair'
  | 'frame'
  | 'lamp'
  | 'vase'
  | 'landscape'
  | 'portrait'
  | 'cabinet'
  | 'carpet';

export interface Piece {
  id: number;
  category: Category;
  categoryLabel: string;
  title: string;
  origin: string;
  motif: MotifKey;
  price: string;
  description: string;
  specs: Record<string, string>;
}

/**
 * Die Sammlung.
 *
 * Jedes Stück bekommt eine eindeutige `id`, die auch als römische
 * Katalognummer angezeigt wird. Passen Sie Titel, Herkunft, Beschreibung
 * und Spezifikationen nach Ihren eigenen Stücken an.
 *
 * Wenn Sie ein Stück entfernen möchten, löschen Sie einfach den Eintrag
 * aus dieser Liste. Um ein neues hinzuzufügen, kopieren Sie einen
 * bestehenden Eintrag und ändern die Felder.
 */
export const pieces: Piece[] = [
  {
    id: 1,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Biedermeier-Sekretär',
    origin: 'Süddeutschland, um 1835',
    motif: 'cabinet',
    price: 'Preis auf Anfrage',
    description:
      'Ein zurückhaltend gearbeiteter Sekretär aus Kirschbaum mit charakteristisch schlichter Formensprache. Die Schreibklappe ruht über drei Schubladen; im Inneren gegliedertes Fächerwerk mit kleinen Schubkästen. Eine stille Arbeitsfläche, die über Generationen ihren Dienst verrichtet hat.',
    specs: {
      Material: 'Kirschbaum, furniert auf Nadelholz',
      Maße: 'H 148 × B 102 × T 52 cm',
      Zustand: 'Sehr gut, altersentsprechend gepflegt',
      Provenienz: 'Aus süddeutschem Familienbesitz',
    },
  },
  {
    id: 2,
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'Landschaft am Oberrhein',
    origin: 'Öl auf Leinwand, signiert, datiert 1912',
    motif: 'landscape',
    price: 'Preis auf Anfrage',
    description:
      'Eine atmosphärische Flusslandschaft im späten Impressionismus — weiches Morgenlicht über stillen Wassern, eine Weidengruppe im Mittelgrund. Die originale Holzrahmung mit schlichtem Goldstuck ist erhalten.',
    specs: {
      Technik: 'Öl auf Leinwand',
      Maße: '64 × 82 cm (mit Rahmen 78 × 96 cm)',
      Signatur: 'Unten rechts, datiert 1912',
      Zustand: 'Rückseitig restauriert, Firnis erneuert',
    },
  },
  {
    id: 3,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Paar Messing-Tischleuchten',
    origin: 'Wiener Werkstätten-Umfeld, um 1925',
    motif: 'lamp',
    price: 'Preis auf Anfrage',
    description:
      'Ein Paar zeitlos eleganter Tischleuchten aus patiniertem Messing mit gefalteten Seidenschirmen in warmem Elfenbein. Neu verkabelt, funktionstüchtig. Das weiche Licht hat viele Abende begleitet.',
    specs: {
      Material: 'Messing, patiniert; Seidenschirm',
      Maße: 'Höhe 58 cm, Schirm Ø 32 cm',
      Zustand: 'Neu verkabelt, betriebsbereit',
      Besonderheit: 'Als Paar',
    },
  },
  {
    id: 4,
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'Damenporträt im Profil',
    origin: 'Kohle und Rötel auf Bütten, um 1908',
    motif: 'portrait',
    price: 'Preis auf Anfrage',
    description:
      'Eine feine, zurückhaltende Studie — mit wenigen Linien entsteht ein konzentriertes Bildnis. Unter Passepartout und Glas in einen schlichten dunklen Holzrahmen gefasst.',
    specs: {
      Technik: 'Kohle und Rötel auf Bütten',
      Maße: '42 × 32 cm (Blattmaß)',
      Signatur: 'Monogrammiert unten links',
      Rahmung: 'Passepartout, antikes Glas, Holzrahmen',
    },
  },
  {
    id: 5,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Perserteppich Täbriz',
    origin: 'Nordwest-Iran, Mitte 20. Jahrhundert',
    motif: 'carpet',
    price: 'Preis auf Anfrage',
    description:
      'Ein klassischer Täbriz mit zentralem Medaillon auf elfenbeinfarbenem Grund, umrahmt von filigranen Bordüren in Indigo und Terrakotta. Handgeknüpft in feiner Knüpfdichte. Regelmäßig gereinigt, in ruhigen Räumen benutzt.',
    specs: {
      Herkunft: 'Täbriz, Nordwest-Iran',
      Maße: '310 × 215 cm',
      Material: 'Schurwolle auf Baumwolle',
      Zustand: 'Sehr gut, gleichmäßig',
    },
  },
  {
    id: 6,
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'Stillleben mit Porzellan',
    origin: 'Aquarell, signiert, um 1960',
    motif: 'vase',
    price: 'Preis auf Anfrage',
    description:
      'Ein stilles Kammerbild in gebrochenem Weiß, Grau und altem Rosa — ein Stillleben aus weißer Porzellankanne, einer aufgeschnittenen Zitrone und einem Tuch. Die leise Poesie des Alltags.',
    specs: {
      Technik: 'Aquarell auf Büttenpapier',
      Maße: '38 × 48 cm',
      Signatur: 'Unten rechts, datiert',
      Rahmung: 'Unter Passepartout, Silberrahmen',
    },
  },
  {
    id: 7,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Polsterstuhl mit Kirschholzgestell',
    origin: 'Dänisches Design, 1960er Jahre',
    motif: 'chair',
    price: 'Preis auf Anfrage',
    description:
      'Ein bequemer Lesesessel mit schlankem Gestell aus massiver Kirsche; die Polsterung erneuert in einem zeitlos gedeckten Wollstoff. Auf Gehrung gearbeitete Verbindungen, sichtbar saubere Handwerksarbeit.',
    specs: {
      Material: 'Kirsche massiv; Wollpolsterung (erneuert)',
      Maße: 'H 84 × B 72 × T 78 cm',
      Zustand: 'Sehr gut; Polster wie neu',
      Herkunft: 'Dänische Manufaktur, 1960er',
    },
  },
  {
    id: 8,
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'Radierung — Blick auf eine Altstadt',
    origin: 'Signierter Handdruck, um 1930',
    motif: 'frame',
    price: 'Preis auf Anfrage',
    description:
      'Feine Radierung einer süddeutschen Altstadt mit Brücke und Turm, in sorgfältiger Strichführung. Handgerissenes Bütten, betitelt und vom Künstler signiert. Hinter entspiegeltem Glas gerahmt.',
    specs: {
      Technik: 'Radierung auf Bütten',
      Auflage: 'Signiert, numeriert 24/75',
      Maße: '28 × 38 cm (Plattenmaß)',
      Rahmung: 'Holzleiste, entspiegeltes Glas',
    },
  },
];

export const CATEGORIES: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'Alle Stücke' },
  { key: 'moebel', label: 'Möbel & Einrichtung' },
  { key: 'kunst', label: 'Kunst & Gemälde' },
];

export const CONTACT_EMAIL = 'mgs@schneiderundcie.com';
