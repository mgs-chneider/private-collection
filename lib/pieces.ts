export type Category = 'moebel' | 'kunst';

export type MotifKey =
  | 'chair'
  | 'frame'
  | 'lamp'
  | 'vase'
  | 'landscape'
  | 'portrait'
  | 'cabinet'
  | 'carpet'
  | 'sculpture';

export interface Piece {
  id: number;
  category: Category;
  categoryLabel: string;
  title: string;
  /** Künstler oder Manufaktur (optional, erscheint in der Modal-Detailansicht). */
  artist?: string;
  origin: string;
  /**
   * Platzhalter-Symbol — wird verwendet, wenn keine Fotos im `images`-Array
   * angegeben sind. Mögliche Werte siehe `MotifKey`.
   */
  motif: MotifKey;
  /**
   * Reale Fotos des Stücks, jeweils als Pfad relativ zum `public/`-Ordner
   * (z. B. `/images/winter-hoerbelt-1.jpg`). Wenn leer oder nicht gesetzt,
   * wird die `motif`-Illustration verwendet.
   */
  images?: string[];
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
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'Stehende Figur',
    artist: 'Winter & Hörbelt',
    origin: 'Acryl / Kunstharz, Unikat, 1999',
    motif: 'sculpture',
    images: [
      '/images/winter-hoerbelt-1.jpg',
      '/images/winter-hoerbelt-2.jpg',
      '/images/winter-hoerbelt-3.jpg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Eine lebensgroße, in transluzentem Acryl gegossene Figur in warmen Bernstein- und Rosétönen — eine Arbeit des Künstlerduos Winter & Hörbelt. Die Entstehung ist selbst Teil der Faszination: Das flüssige Kunstharz wurde in eine bewusst nicht starre Negativform gegossen, sodass jede Ausformung zu einem vollkommen eigenen Wesen wurde. Manche der so entstandenen Figuren erinnern an Michelin-Männchen; dieses Exemplar gehört zu den deutlich eleganteren Ausformungen und ließ uns an eine gotische Madonna denken — weshalb wir uns seinerzeit gerade für sie entschieden. Der ausgestreckte Arm wurde nach dem Erkalten separat angefügt. Winter & Hörbelt sind im weiteren Kunstbetrieb vor allem durch ihre dreidimensionalen Objekte aus Getränkekisten bekannt; diese frühe Werkgruppe in Acrylguss ist im Œuvre der beiden eine seltene und besonders poetische Arbeit.',
    specs: {
      Künstler: 'Winter & Hörbelt',
      Entstehung: '1999',
      Material: 'Acryl / Kunstharz, transluzent',
      'Maße mit Sockel': 'Höhe ca. 190 cm',
      Ausführung: 'Unikat aus flexibler Negativform',
      Provenienz: 'Direkt im Atelier der Künstler erworben',
      Besonderheit: 'Arm separat angefügt',
    },
  },
];

export const CATEGORIES: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'Alle Stücke' },
  { key: 'moebel', label: 'Möbel & Einrichtung' },
  { key: 'kunst', label: 'Kunst & Gemälde' },
];

export const CONTACT_EMAIL = 'mgs@schneiderundcie.com';
