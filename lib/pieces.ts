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
 *   II.   Martin Liebscher, Moskau (Detskij Mir) — großes Panorama (290 × 70 cm)
 *   III.  Martin Liebscher, New York (TWA Edition) — kleineres Pendant aus gleicher Werkphase
 *   IV.   Bulthaup Küchenwerkstatt — narrativer Anschluss (hing bei Nr. III gegenüber)
 *   V.    Antiker Seidenteppich, China — klassisches Sammlerstück mit Provenienz
 *   VI.   Essgruppe Kaminsky — Mid-Century mit Zeitgeschichte
 *   VII.  Bang & Olufsen — Designklassiker, dänisches Understatement
 *   VIII. Donghia Lounge Chair (John Hutton) — amerikanische Designer-Ikone in Maisgelb
 *   IX.   Fontana Arte „Tavolo con Ruote" (Gae Aulenti) — italienische Design-Ikone, Pendant zum Donghia-Sessel
 *   X.    de Sede Schlafsofa — sachliche Qualität
 *   XI.   Gallotti & Radice „Presidente Junior" — italienischer Glas-Schreibtisch, Nachlass-Provenienz
 *   XII.  Tolomeo Paar — kleines Schlussstück, Querverweis zur Küche
 
 * Beim Hinzufügen oder Entfernen von Einträgen bitte sicherstellen, dass
 * - die `id` weiterhin lückenlos durchnummeriert ist (1, 2, 3 …) und
 * - eventuelle Querverweise im Beschreibungstext (etwa „Nr. IV") angepasst werden.
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
      'Eine schlanke, in transluzentem Acryl gegossene Figur in warmen Bernstein- und Rosétönen — mit rund 1,30 m Höhe (samt Sockel knapp zwei Meter erreichend) eine eher kammerspielartige, keineswegs lebensgroße Arbeit des Künstlerduos Winter & Hörbelt. Die Entstehung ist selbst Teil der Faszination: Das flüssige Kunstharz wurde in eine bewusst nicht starre Negativform gegossen, sodass jede Ausformung zu einem vollkommen eigenen Wesen wurde. Manche der so entstandenen Figuren erinnern an Michelin-Männchen; dieses Exemplar gehört zu den deutlich eleganteren Ausformungen und ließ uns an eine gotische Madonna denken — weshalb wir uns seinerzeit gerade für sie entschieden. Der ausgestreckte Arm wurde nach dem Erkalten separat angefügt. Winter & Hörbelt sind im weiteren Kunstbetrieb vor allem durch ihre dreidimensionalen Objekte aus Getränkekisten bekannt; diese frühe Werkgruppe in Acrylguss ist im Œuvre der beiden eine seltene und besonders poetische Arbeit.',
    specs: {
      Künstler: 'Winter & Hörbelt',
      Entstehung: '1999',
      Material: 'Acryl / Kunstharz, transluzent',
      'Höhe (Figur)': 'ca. 130 cm',
      'Höhe (mit Sockel)': 'knapp 200 cm',
      Breite: 'ca. 40 cm (mit ausgestrecktem Arm)',
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
      '/images/liebscher-moskau-detail.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Eine großformatige Fotoarbeit von Martin Liebscher aus seiner Panorama-Serie: das geschwungene Treppenhaus im Inneren des legendären Moskauer Kaufhauses Detskij Mir („Kinderwelt") am Lubjanka-Platz, aufgenommen kurz vor der großen Umgestaltung des Gebäudes — in einem einzigen, 290 cm breiten Bildstreifen, der die gewundenen Stufenläufe, Balustraden und Geländer so dreht und entrollt, dass das vertikale Treppenhaus zu einem horizontal ausgebreiteten, ununterbrochenen Band wird. Wo Liebscher im weiteren Kunstbetrieb vor allem für seine „Wimmelbilder" bekannt ist, in denen er sich selbst dutzendfach in öffentliche und private Räume einblendet, tritt er in der Panorama-Serie bewusst hinter das Bild zurück: der Raum selbst ist hier das Ereignis. Die Arbeit wurde seinerzeit direkt bei Galerie Voges + Deisen, der damaligen Frankfurter Galerie des Künstlers, erworben — als erstes Exemplar (Auflage 1/3), ausgeführt als C-Print auf Aludibond mit schützender UV-Folie, im persönlichen Gespräch mit dem bei der Ausstellung anwesenden Künstler. An einer freien Wand entfaltet die Arbeit ihre volle Wirkung: ein Panorama, das den Betrachter nicht gegenüber, sondern mitten hinein nimmt.',
    specs: {
      Künstler: 'Martin Liebscher',
      Titel: 'Moskau (Detskij Mir)',
      Serie: 'Panorama',
      Entstehung: '2000',
      Technik: 'C-Print auf Aludibond, UV-Folie',
      Maße: '290 × 70 cm',
      Auflage: 'Nr. 1/3',
      Provenienz: 'Erworben 15. Januar 2001 bei Galerie Voges + Deisen, Frankfurt am Main — direkt aus der laufenden Ausstellung im persönlichen Gespräch mit Martin Liebscher (Rechnung liegt vor)',
      Referenz: 'martinliebscher.de · Panorama-Serie',
      Hängung: 'Wandmontage — Raum-bestimmendes Einzelformat, wirkt ab ca. 3 m freier Wandbreite optimal',
    },
  },
  {
    id: 3,
    category: 'kunst',
    categoryLabel: 'Kunst & Gemälde',
    title: 'New York (TWA Edition)',
    artist: 'Martin Liebscher',
    origin: 'Panorama-Serie, C-Print auf Aludibond, 2004 — Auflage 5/12 zzgl. 2 Künstlerexemplaren',
    motif: 'frame',
    price: 'Preis auf Anfrage',
    description:
      'Eine zweite Arbeit Martin Liebschers aus derselben Werkphase wie das Moskau-Panorama — kleiner im Format (200 × 50 cm), aber in der Bildsprache verwandt: Liebscher entrollt den Innenraum in seinem charakteristischen Panorama-Verfahren zu einem durchlaufenden Bildband, in dem Decken, Böden und Architektur zu einer einzigen Bewegung werden. Der Untertitel „TWA Edition" verweist auf Eero Saarinens legendäres TWA Flight Center am Flughafen JFK — das 1962 eröffnete Meisterwerk der Luftfahrt-Architektur mit seinen fließenden, flügelartigen Betonschalen. Auch diese Arbeit haben wir direkt bei der Frankfurter Galerie des Künstlers erworben (zum Zeitpunkt des Erwerbs firmierend als Voges + Partner); das Zertifikat der Galerie mit Versicherungswert und Auflagenbescheinigung liegt vor. Über viele Jahre hing das Werk in unserer Bulthaup-Küche (siehe Nr. IV) gegenüber der Edelstahl-Werkbank — ein stilles architektonisches Gegenüber zur industriellen Präzision der Küche. Aktuell eingelagert; Originalfoto gerne nach Auspacken auf Anfrage.',
    specs: {
      Künstler: 'Martin Liebscher',
      Titel: 'New York (TWA Edition)',
      Serie: 'Panorama',
      Entstehung: '2004',
      Technik: 'C-Print auf Aludibond, Acryl',
      Maße: '200 × 50 cm (Breite × Höhe)',
      Auflage: '5/12 zzgl. 2 Künstlerexemplaren',
      Inventarnummer: 'ML-2004-011',
      Provenienz: 'Erworben bei Galerie Voges + Partner, Frankfurt am Main — Zertifikat der Galerie mit Versicherungswert (2.200 €, incl. MwSt) liegt vor',
      Referenz: 'martinliebscher.de · Panorama-Serie',
      Hinweis: 'Aktuell eingelagert — Originalfoto stellen wir gerne nach Auspacken zur Verfügung',
    },
  },
  {
    id: 4,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Küchenwerkstatt, Bulthaup',
    origin: 'Edelstahl, System 25 — komplette Einbauküche',
    motif: 'cabinet',
    images: [
      '/images/bulthaup-werkbank.jpeg',
      '/images/kueche-module.jpeg',
      '/images/kueche-kochfeld.jpeg',
      '/images/kueche-armatur.jpeg',
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
      'Zweite Abbildung': 'KI-unterstütze Darstellung der gegenüberliegenden Schrankwand mit Backofen, Kühlschrank und dem Liebscher-Panorama New York (Nr. III) an der Wand — dient dem räumlichen Gesamteindruck; Proportionen nicht maßstabsgetreu',
      Abgabe: 'Bevorzugt komplett als Ensemble',
    },
  },
  {
    id: 5,
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
    id: 6,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Essgruppe, skandinavischer Stil',
    origin: 'Mid-Century, 1950er Jahre — Tisch und zehn Stühle',
    motif: 'chair',
    images: [
      '/images/essgruppe-ensemble.jpeg',
      '/images/essgruppe-stuhl.jpeg',
      '/images/stuhl-original.jpeg',
    ],
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
      'Erste Abbildung': 'KI-unterstützte Visualisierung des Ensembles — Tisch mit sechs von insgesamt zehn zugehörigen Stühlen',
      'Zweite Abbildung': 'KI-unterstützte Visualisierung eines Einzelstuhls zur Ansicht der Proportionen und Polsterung',
      'Dritte Abbildung': 'Originalaufnahme aus dem Lager (Stuhl in Umzugsfolie, Hintergrund bereinigt)',
      Hinweis: 'Aktuell eingelagert — weitere Originalfotos und Besichtigungstermine auf Anfrage',
    },
  },
  {
    id: 7,
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
      Hinweis: 'Das abgebildete Foto ist eine KI-unterstützte Darstellung — Originalfotos stellen wir gerne auf Anfrage zur Verfügung',
    },
  },
  {
    id: 8,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Donghia Lounge Chair',
    artist: 'John Hutton',
    origin: 'USA, Fischgrat-Bezug maisgelb — ohne Ottomane',
    motif: 'chair',
    images: [
      '/images/donghia-detail.jpeg',
      '/images/donghia-impression.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Ein Sessel aus dem Hause Donghia in leuchtendem Maisgelb — gezeichnet von John Hutton, dem langjährigen Chefgestalter des 1968 in New York gegründeten Traditionshauses, das über drei Jahrzehnte hinweg zu den ersten Adressen amerikanischer Interieur-Kultur zählte. Hutton, unter Kollegen wie Kritikern gleichermaßen geschätzt, verband in seinen Entwürfen eine fast aristokratisch zurückgenommene Silhouette mit bewusst moderner, tailored gearbeiteter Präzision: hier eine kompakte, in weichem Bogen über die Schultern schwingende Rückenlehne, kurze gerundete Beine und ausgesprochen behutsame Proportionen. Nach jüngerer Recherche lässt sich das Modell der Donghia-Serie „Phantom" zuordnen. Der Bezug — in der Detailaufnahme gut erkennbar — ist ein dicht gewebter Fischgrat in warmem Maisgelb, dessen handwerkliche Stoffqualität sich bei Nähe sofort erschließt. Der Sessel wurde seinerzeit ohne zugehörige Ottomane erworben und wird entsprechend einzeln abgegeben. Die zweite Abbildung ist eine KI-unterstützte Darstellung zur räumlichen Einordnung — sie zeigt den Sessel in einer modernen Wohnraumsituation unter dem Liebscher-Panorama „Moskau" (siehe Nr. II). Erworben haben wir ihn gebraucht bei Rolf Jaspers — Exklusive Teppiche in Frankfurt am Main, im Zuge mehrerer Teppich-Käufe (zwei antike Chinateppiche und ein rund zwölf Quadratmeter großer, zeitgenössischer weißer Designer-Teppich); der Händler hätte ihn ursprünglich lieber behalten und trennte sich erst nach einigem Zögern von dem Stück. Aus derselben Quelle stammt auch der antike Seidenteppich unter Nr. V.',    specs: {
      specs: {
      Hersteller: 'Donghia, New York',
      Serie: 'Phantom (nach Eigenrecherche)',
      Entwurf: 'John Hutton',
      Bezug: 'Fischgrat-Gewebe, maisgelb',
      Ausführung: 'Einzelsessel, ohne Ottomane',
      Provenienz: 'Gebraucht erworben bei Rolf Jaspers, Exklusive Teppiche, Frankfurt am Main — im Zuge mehrerer Teppich-Käufe; derselbe Händler, von dem auch der antike Seidenteppich unter Nr. V stammt',
      Zustand: 'Gepflegter Gesamtzustand, aktuell eingelagert',
      'Erste Abbildung': 'Detailaufnahme aus dem Lager mit Nahaufnahme des Fischgrat-Bezugs',
      'Zweite Abbildung': 'KI-unterstützte Darstellung zur räumlichen Einordnung (mit dem Liebscher-Panorama Nr. II an der Wand und dem Fontana-Arte-Couchtisch „Tavolo con Ruote" von Nr. IX)',      Hinweis: 'Originalfotos aus bewohnter Aufstellung stellen wir gerne auf Anfrage zur Verfügung',
    },
  },
  {
    id: 9,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Tavolo con Ruote',
    artist: 'Gae Aulenti',
    origin: 'Italien, Kristallglas auf Industrie-Gummirädern, Entwurf 1980',
    motif: 'cabinet',
    images: [
      '/images/fontana-arte-wohnraum.jpeg',
      '/images/fontana-arte-detail.jpeg',
      '/images/fontana-arte-freistellung.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Ein Couchtisch „Tavolo con Ruote" aus dem Hause Fontana Arte — der 1932 in Mailand von Gio Ponti und Pietro Chiesa gegründeten Glas-Manufaktur, die seither als eine der maßgeblichen Adressen italienischer Designgeschichte gilt. Der 1980 von Gae Aulenti entworfene Tisch gehört zu den zitierfähigsten italienischen Möbelentwürfen des späten 20. Jahrhunderts und ist bei Fontana Arte bis heute ununterbrochen in Produktion: eine schwere Platte aus klarem Kristallglas ruht auf vier markanten Industrie-Gummirädern — derselben Gattung, wie man sie von Werkstattwagen kennt, hier aber ins Wohnen überführt und zum tragenden Gestaltungselement erhoben. Gae Aulenti, eine der einflussreichsten italienischen Architektinnen und Gestalterinnen des 20. Jahrhunderts — ihr verdanken Paris den Umbau des Musée d\'Orsay und Venedig den des Palazzo Grassi — erzielt hier mit wenigen Mitteln ein Maximum an Präsenz: die Spannung zwischen fein geschliffenem Glas und bewusst utilitärer Rollen-Konstruktion ist die eigentliche Aussage des Entwurfs. Die vorliegende Ausführung misst 120 × 120 × 25 cm, Räder und Befestigungen sind vollständig schwarz. Über viele Jahre stand der Tisch in unserem Wohnzimmer und bildete dort das Pendant zum Donghia-Sessel (siehe Nr. VIII).',
    specs: {
      Hersteller: 'Fontana Arte, Mailand',
      Entwurf: 'Gae Aulenti, 1980',
      Material: 'Kristallglas-Platte auf vier Industrie-Gummirädern',
      Maße: '120 × 120 × 25 cm',
      Ausführung: 'Räder und Befestigungen vollständig schwarz',
      Produktion: 'Seit 1980 ununterbrochen im Fontana-Arte-Programm',
      'Erste Abbildung': 'Im bewohnten Zusammenhang unseres Wohnzimmers',
      'Zweite Abbildung': 'Detailaufnahme der Rad-Befestigung am Glas',
      'Dritte Abbildung': 'Reale Aufnahme mit KI-unterstützter Bildbereinigung (Dekoration entfernt) zur besseren Sicht auf den Tisch',
    },
  },
  {
    id: 10,
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
    id: 11,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Schreibtisch „Presidente Junior"',
    artist: 'Gallotti & Radice',
    origin: 'Italien, Glas und Chromstahl, 1970er Jahre',
    motif: 'cabinet',
    images: [
      '/images/gallotti-presidente.jpeg',
      '/images/gallotti-presidente-details.jpeg',
      '/images/gallotti-presidente-office.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Ein Schreibtisch „Presidente Junior" aus dem Hause Gallotti & Radice — jene 1956 in der Brianza gegründete italienische Manufaktur, die sich über Jahrzehnte dem Glas als tragendem Möbelwerkstoff verschrieben hat und deren Entwürfe heute in Sammlungen italienischen Designs einen festen Platz haben. Der „Presidente Junior" aus den 1970er Jahren ist die kompaktere Ausführung des großen „Presidente"-Schreibtischs und gehört zu den Signature-Stücken des Hauses: eine leicht geschwungene Glas-Arbeitsfläche, die an den Enden auf zwei senkrechten Glasstützen ruht und über ein durchlaufendes Chromstahl-Profil mit einer zentralen Chromstrebe verbunden ist — ein fast körperloses Zusammenspiel aus Transparenz und reflektierender Präzision, das der Arbeitsfläche ihre charakteristische, schwebende Anmutung gibt. Das Stück stammt aus dem Nachlass des bekannten Cellisten Peter Girth und wurde 2003 von dessen Witwe erworben; die Originalrechnung liegt vor. In unserem früheren Home-Office hat es viele Jahre treu Dienst getan — die dritte Abbildung zeigt den Tisch im gelebten Gebrauch mit iMac und Arbeitsleuchte.',
    specs: {
      Hersteller: 'Gallotti & Radice, Brianza (Italien)',
      Modell: 'Presidente Junior',
      Entstehung: '1970er Jahre',
      Material: 'Klarglas und Chromstahl',
      Form: 'Leicht geschwungene Arbeitsfläche auf zwei seitlichen Glasstützen, verbunden über durchlaufendes Chromstahl-Profil mit zentraler Strebe',
      Provenienz: 'Aus dem Nachlass von Peter Girth — Cellist und Intendant der Berliner Philharmoniker (1978–1984) in der Ära Karajan, danach weitere Intendanzen an deutschen Orchestern und Opernhäusern; 2003 von seiner Witwe erworben (Originalrechnung liegt vor)',
      Einsatz: 'Über viele Jahre als Home-Office-Schreibtisch in unserem Besitz',
      'Zweite Abbildung': 'Detail-Raster aus neun Nahaufnahmen — Glas, Chromstahl, Verbindungen',
      'Dritte Abbildung': 'Im früheren Home-Office in Benutzung (iMac, Magic Keyboard, Arbeitsleuchte)',
    },
  },
  {
    id: 12,
    category: 'moebel',
    categoryLabel: 'Möbel & Einrichtung',
    title: 'Tolomeo, Artemide (Paar)',
    artist: 'Michele de Lucchi & Giancarlo Fassina, 1987',
    origin: 'Italien, Aluminium poliert — Paar, auf Wandmontage umgerüstet',
    motif: 'lamp',
    images: [
      '/images/tolomeo-rechts.jpeg',
      '/images/tolomeo-links.jpeg',
    ],
    price: 'Preis auf Anfrage',
    description:
      'Zwei Exemplare der Tolomeo von Artemide — einer der meistzitierten italienischen Leuchtenentwürfe des späten 20. Jahrhunderts, 1987 von Michele de Lucchi und Giancarlo Fassina entworfen und seither in den Sammlungen namhafter Designmuseen vertreten. Mit ihrer federgelagerten Doppelgelenk-Konstruktion und dem charakteristischen, poliert eloxierten Aluminium-Schirm gehören sie zur Grundausstattung jeder ambitionierten Werkstatt, Küche oder Leseecke. Die beiden Exemplare wurden von einem Spezialisten fachgerecht auf Wandmontage umgerüstet und haben über Jahre die Bulthaup-Küchenwerkstatt erhellt (siehe Foto der Katalog-Nr. IV). Sie können zusammen mit der Küche oder als eigenständiges Paar erworben werden.',
    specs: {
      Hersteller: 'Artemide',
      Entwurf: 'Michele de Lucchi und Giancarlo Fassina, 1987',
      Modell: 'Tolomeo',
      Material: 'Poliert eloxiertes Aluminium, federgelagerter Doppelarm',
      Ausführung: 'Fachgerecht auf Wandmontage umgerüstet',
      Stückzahl: '2 Exemplare (Paar)',
      Hinweis: 'Können zusammen mit der Küchenwerkstatt (Nr. IV) oder separat erworben werden',
    },
  },
];

export const CATEGORIES: { key: 'all' | Category; label: string }[] = [
  { key: 'all', label: 'Alle Stücke' },
  { key: 'moebel', label: 'Möbel & Einrichtung' },
  { key: 'kunst', label: 'Kunst & Gemälde' },
];

export const CONTACT_EMAIL = 'kontakt@privat-besitz.de';
