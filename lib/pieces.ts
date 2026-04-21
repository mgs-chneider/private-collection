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
 * Die Sammlung — kuratorische Reihenfolge.
 *
 * Die `id` bestimmt zugleich die römische Katalognummer auf der Seite.
 * Die hier gewählte Anordnung folgt einer bewussten Dramaturgie:
 *   I.    Winter & Hörbelt — das künstlerische Solitär als Eröffnung
 *   II.   Martin Liebscher, Moskau (Detskij Mir) — zweite Kunstarbeit, schließt den Kunst-Auftakt
 *   III.  Bulthaup Küchenwerkstatt — das große, geschichtenreiche Ensemble
 *   IV.   Antiker Seidenteppich, China — klassisches Sammlerstück mit Provenienz
 *   V.    Essgruppe Kaminsky — Mid-Century mit Zeitgeschichte
 *   VI.   Bang & Olufsen — Designklassiker, dänisches Understatement
 *   VII.  de Sede Schlafsofa — sachliche Qualität
 *   VIII. Tolomeo Paar — kleines Schlussstück, Querverweis zur Küche
 *
 * Beim Hinzufügen oder Entfernen von Einträgen bitte sicherstellen, dass
 * - die `id` weiterhin lückenlos durchnummeriert ist (1, 2, 3 …) und
 * - eventuelle Querverweise im Beschreibungstext (etwa „Nr. III") angepasst werden.
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
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'Moskau (Detskij Mir)',
    artist: 'Martin Liebscher',
    origin: 'Panorama-Serie, C-Print auf Aludibond, 2000 — Auflage 1/3',
    motif: 'frame',
    images: [
      '/images/liebscher-moskau.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Eine großformatige Fotoarbeit von Martin Liebscher aus seiner Panorama-Serie: das Innere des legendären Moskauer Kaufhauses Detskij Mir („Kinderwelt") am Lubjanka-Platz, aufgenommen kurz vor der großen Umgestaltung des Gebäudes — in einem einzigen, 290 cm breiten Bildstreifen, der die riesige überkuppelte Halle so dreht und entrollt, dass Böden, Balustraden und Decken in ein ununterbrochenes Band fallen. Wo Liebscher im weiteren Kunstbetrieb vor allem für seine „Wimmelbilder" bekannt ist, in denen er sich selbst dutzendfach in öffentliche und private Räume einblendet, tritt er in der Panorama-Serie bewusst hinter das Bild zurück: der Raum selbst ist hier das Ereignis. Die Arbeit wurde seinerzeit direkt bei Galerie Voges + Deisen, der damaligen Frankfurter Galerie des Künstlers, erworben — als erstes Exemplar (Auflage 1/3), ausgeführt als C-Print auf Aludibond mit schützender UV-Folie. An einer freien Wand entfaltet sie ihre volle Wirkung: ein Panorama, das den Betrachter nicht gegenüber, sondern mitten hinein nimmt.',
    specs: {
      Künstler: 'Martin Liebscher',
      Titel: 'Moskau (Detskij Mir)',
      Serie: 'Panorama',
      Entstehung: '2000',
      Technik: 'C-Print auf Aludibond, UV-Folie',
      Maße: '290 × 70 cm',
      Auflage: 'Nr. 1/3',
      Provenienz: 'Erworben 15. Januar 2001 bei Galerie Voges + Deisen, Frankfurt am Main (Rechnung liegt vor)',
      Referenz: 'martinliebscher.de · Panorama-Serie',
      Hängung: 'Wandmontage — Raum-bestimmendes Einzelformat, wirkt ab ca. 3 m freier Wandbreite optimal',
    },
  },
  {
    id: 3,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Küchenwerkstatt, Bulthaup',
    origin: 'Edelstahl, System 25 — komplette Einbauküche',
    motif: 'cabinet',
    images: [
      '/images/bulthaup-werkbank.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Eine vollständige Bulthaup-Küche aus der Serie Küchenwerkstatt — jene Linie, mit der Bulthaup Ende der 1980er Jahre das Konzept der Küche als Werkstatt in den Wohnraum übersetzt hat: klare, industrielle Präzision auf jedem Quadratzentimeter, ohne dabei kühl zu wirken. Das Herzstück ist die etwa 2,60 m lange Edelstahl-Küchenwerkbank — aus älterer, besonders charaktervoller Fertigung — mit integriertem Kochfeld (zwei klassische Elektro-Kochplatten und zwei Gas-Kochstellen, letztere zwischen fester Gasleitung und Camping-Gas umrüstbar und deshalb unabhängig von einem stationären Gasanschluss), einem tiefen Spülbecken mit Kalt- und Warmwasser und einem zusätzlichen Kaltwaschbecken in der Mitte für Fisch, Gemüse und grobe Vorbereitung — beide mit den charakteristischen Kugelkopf-Armaturen, die nur die älteren Bulthaup-Werkbänke auszeichnen; eine verschiebbare Corian-Arbeitsplatte ergänzt die Werkbank als flexibles Zusatzelement. Dazu kommen Schränke aus dem Bulthaup-System 25 (ein 1680 mm hoher Umbauhochschrank mit fünf Auszügen und Backofen-Aussparung sowie zwei Unterschränke), ein unterbaufähiger Miele-Geschirrspüler in Edelstahl-Verkleidung und ein Gaggenau-Einbaubackofen EB 211 aus der professionellen 210er-Serie mit der originalen Drehknebel-Bedienung, die heutige Gaggenau-Geräte nicht mehr führen. Die feste Arbeitsplatte in Geograu ist farblich und materiell auf den Edelstahl der Möbel abgestimmt. Bevorzugt als Ensemble abzugeben.',
    specs: {
      Hersteller: 'Bulthaup (Bodnegg)',
      Serie: 'Küchenwerkstatt, System 25',
      Küchenwerkbank: 'Edelstahl, ca. 2600 × 800 × 900 mm, älterer Jahrgang',
      Kochfeld: '2 klassische Elektro-Kochplatten und 2 Gas-Kochstellen (auf feste Gasleitung umrüstbar — aktuell mit Camping-Gas betrieben und somit unabhängig von einem stationären Gasanschluss)',
      Spüle: 'Tiefes Spülbecken mit Kalt- und Warmwasser-Mischbatterie',
      Kaltwaschbecken: 'Zusätzliches Becken in der Mitte (Kaltwasser) — zum Schuppen von Fisch, Waschen von Gemüse, groben Vorbereitungen',
      Armaturen: 'Originale Kugelkopf-Armaturen — charakteristisches Detail der älteren Bulthaup-Werkbänke',
      'Schiebe-Arbeitsplatte': 'Corian, verschiebbar — als flexibles Zusatzelement',
      Umbauhochschrank: 'System 25, 1680 mm, 5 Auszüge, Aussparung für Backofen',
      'Unterschrank I': 'System 25, 900 mm, 3 Auszüge',
      'Unterschrank II': 'System 25, 600 mm, 2 Auszüge, 2 Schübe',
      Backofen: 'Gaggenau EB 211, Edelstahl (Einbau), mit originaler Drehknebel-Bedienung — heute nicht mehr erhältlich',
      Geschirrspüler: 'Miele, Edelstahl-Verkleidung, unterbaufähig',
      Arbeitsplatte: 'Geograu, auf Edelstahl der Möbel abgestimmt',
      'Empfohlener Grundriss': 'Länglicher Raum mit zwei Wandseiten von je ca. 2,60 m — Werkbank an der einen, Schrankzeile mit Backofen an der anderen Seite; Großraum-Kühlschrank separat zu ergänzen',
      Abgabe: 'Bevorzugt komplett als Ensemble',
    },
  },
  {
    id: 4,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Antiker Seidenteppich, China',
    origin: 'Seide, China, um 1900',
    motif: 'carpet',
    images: [
      '/images/china-teppich-1.jpeg',
      '/images/china-teppich-2.jpeg',
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
    id: 5,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Essgruppe, skandinavischer Stil',
    origin: 'Mid-Century, 1950er Jahre — Tisch und zehn Stühle',
    motif: 'chair',
    price: 'Preis auf Anfrage',
    description:
      'Eine außergewöhnliche Essgruppe im zeitlosen skandinavischen Stil, die klares Mid-Century-Design mit einer besonderen Biographie verbindet. Sie wurde in den 1950er Jahren exklusiv für den Bankier Walter Kaminsky — Gründer der Kundenkreditbank, heute Targobank — angefertigt und stand bis zu seinem Tod 1975 in seinem Landhaus bei Bonn. Das Ensemble besteht aus einem ausziehbaren Esstisch und zehn Hochlehnern, von denen zwei als Armlehnstühle für die Kopfplätze gearbeitet sind. Klare Linien, hochwertige Verarbeitung und eine zurückhaltende Eleganz prägen das Erscheinungsbild — charakteristisch für den skandinavischen Stil dieser Epoche. Die Stühle wurden vor Kurzem fachgerecht neu gepolstert und mit schwarzem Bezug versehen; das Holz (vermutlich Kirsch- oder Nussbaum) befindet sich in gepflegtem Zustand mit altersüblichen Gebrauchsspuren. Die Möbel wurden über viele Jahre in unserem Besitz genutzt und stets wertgeschätzt — ein Ensemble für Liebhaber von Design mit Geschichte, wo Zeitgeschichte und klares Design aufeinandertreffen.',
    specs: {
      Komposition: 'Ausziehbarer Esstisch und 10 Hochlehner (8 ohne, 2 mit Armlehnen)',
      Stil: 'Skandinavisch, Mid-Century',
      Datierung: '1950er Jahre',
      Holz: 'Vermutlich Kirsch- oder Nussbaum',
      Polsterung: 'Kürzlich fachgerecht neu gepolstert, schwarzer Bezug',
      Provenienz: 'Unikatanfertigung für Walter Kaminsky, Gründer der Kundenkreditbank (heute Targobank); bis 1975 im Landhaus bei Bonn',
      Zustand: 'Gepflegter Gesamtzustand mit altersüblichen Gebrauchsspuren',
      Hinweis: 'Aktuell eingelagert — Originalfotos stellen wir gerne auf Anfrage zur Verfügung',
    },
  },
  {
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Tolomeo, Artemide (Paar)',
    artist: 'Michele de Lucchi & Giancarlo Fassina, 1987',
    origin: 'Italien, Aluminium poliert — Paar, auf Wandmontage umgerüstet',
    motif: 'lamp',
    images: [
      '/images/tolomeo-links.jpeg',
      '/images/tolomeo-rechts.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Zwei Exemplare der Tolomeo von Artemide — einer der meistzitierten italienischen Leuchtenentwürfe des späten 20. Jahrhunderts, 1987 von Michele de Lucchi und Giancarlo Fassina entworfen und seither in den Sammlungen namhafter Designmuseen vertreten. Mit ihrer federgelagerten Doppelgelenk-Konstruktion und dem charakteristischen, poliert eloxierten Aluminium-Schirm gehören sie zur Grundausstattung jeder ambitionierten Werkstatt, Küche oder Leseecke. Die beiden Exemplare wurden von einem Spezialisten fachgerecht auf Wandmontage umgerüstet und haben über Jahre die Bulthaup-Küchenwerkstatt erhellt (siehe Foto der Katalog-Nr. III). Sie können zusammen mit der Küche oder als eigenständiges Paar erworben werden.',
    specs: {
      Hersteller: 'Artemide',
      Entwurf: 'Michele de Lucchi und Giancarlo Fassina, 1987',
      Modell: 'Tolomeo',
      Material: 'Poliert eloxiertes Aluminium, federgelagerter Doppelarm',
      Ausführung: 'Fachgerecht auf Wandmontage umgerüstet',
      Stückzahl: '2 Exemplare (Paar)',
      Hinweis: 'Können zusammen mit der Küchenwerkstatt (Nr. III) oder separat erworben werden',
    },
  },
];

export const CATEGORIES: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'Alle Stücke' },
  { key: 'moebel', label: 'Möbel & Einrichtung' },
  { key: 'kunst', label: 'Kunst & Gemälde' },
];

export const CONTACT_EMAIL = 'kontakt@privat-besitz.de';
