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
  {
    id: 2,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Antiker Seidenteppich, China',
    origin: 'Seide, China, um 1900',
    motif: 'carpet',
    images: [
      '/images/china-teppich-1.jpg',
      '/images/china-teppich-2.jpg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Ein großformatiger chinesischer Seidenteppich, über hundert Jahre alt, in einem ungewöhnlich zurückhaltenden, hellen Beigeton gehalten. Das florale Muster ist bewusst dezent gewebt — nicht üppig und bunt, wie es bei chinesischen Seidenteppichen häufig vorkommt, sondern still und feingliedrig. Gerade diese Ruhe macht ihn zum idealen Begleiter einer modernen Einrichtung, wo ein klassisches Orient-Motiv schnell zu laut wirkt; er bringt in jeden Raum die handgemachte Wärme eines antiken Teppichs, ohne sich in den Vordergrund zu drängen. Wir haben den Teppich Ende der 1990er Jahre bei Rolf Jaspers, Antike Teppiche in Frankfurt am Main erworben — einem der damals führenden deutschen Händler für antike orientalische Teppiche.',
    specs: {
      Material: 'Seide',
      Herkunft: 'China',
      Datierung: 'Über 100 Jahre alt, um 1900',
      Maße: 'ca. 3 × 4 m',
      Muster: 'Dezentes florales Muster, heller Beigeton',
      Provenienz: 'Rolf Jaspers, Antike Teppiche, Frankfurt am Main (Ende 1990er Jahre)',
    },
  },
  {
    id: 3,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Bang & Olufsen Surround-Anlage',
    origin: 'Dänisches Design, komplettes System',
    motif: 'cabinet',
    images: [
      '/images/bang-olufsen.jpg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Eine komplette Surround-Anlage aus dem Hause Bang & Olufsen — das dänische Understatement in Reinform, mit dem unverwechselbar eleganten Aluminium-Design und dem für B&O charakteristischen warmen, kultivierten Klang. Das Set besteht aus der BeoSound Ouverture als Zentraleinheit mit integriertem CD-Player, Tuner und Verstärker samt passendem Rack, dem massiven Subwoofer BeoLab 2 sowie vier aktiven Säulenlautsprechern (zwei BeoLab 8000 und zwei BeoLab 6000) und zwei Fernbedienungen. Erworben bei HiFi-Profis in Frankfurt am Main, damals einem der renommiertesten HiFi-Fachgeschäfte Deutschlands. Die Originale stehen aktuell bei einer Spedition in Frankfurt am Main fachgerecht verpackt und abholbereit.',
    specs: {
      Hersteller: 'Bang & Olufsen',
      Zentraleinheit: 'BeoSound Ouverture mit passendem Rack',
      Subwoofer: 'BeoLab 2',
      Lautsprecher: '2× BeoLab 8000 und 2× BeoLab 6000',
      Fernbedienungen: '2 Stück',
      Provenienz: 'HiFi-Profis, Frankfurt am Main',
      Zustand: 'Verpackt und abholbereit, Spedition in Frankfurt am Main',
      Hinweis: 'Das abgebildete Foto ist eine KI-generierte Darstellung — Originalfotos stellen wir gerne auf Anfrage zur Verfügung',
    },
  },
  {
    id: 4,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Schlafsofa, de Sede',
    origin: 'Schweiz, Leder schokobraun',
    motif: 'chair',
    images: [
      '/images/deSede-sofa.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Ein Schlafsofa des Schweizer Traditionshauses de Sede in tiefem, warmem Schokobraun. de Sede steht seit Jahrzehnten für in Handarbeit verarbeitete Lederpolstermöbel — die Adresse, wenn es um dauerhaft gutes Leder und langlebige Konstruktion geht. Als Schlafsofa vereint dieses Stück die wohnliche Eleganz einer hochwertigen Ledercouch mit der praktischen Funktion einer vollwertigen Liegefläche für den Gästebesuch.',
    specs: {
      Hersteller: 'de Sede, Schweiz',
      Material: 'Leder, schokobraun',
      Funktion: 'Schlafsofa mit ausklappbarer Liegefläche',
    },
  },
];

export const CATEGORIES: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'Alle Stücke' },
  { key: 'moebel', label: 'Möbel & Einrichtung' },
  { key: 'kunst', label: 'Kunst & Gemälde' },
];

export const CONTACT_EMAIL = 'mgs@schneiderundcie.com';
