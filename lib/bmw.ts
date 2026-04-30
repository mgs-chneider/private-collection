export interface BmwSpec {
  label: string;
  value: string;
}

export interface BmwData {
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  closing: string;
  videoUrl: string;
  specs: BmwSpec[];
  features: string[];
  legal: string;
  collectionHint: string;
  collectionUrl: string;
}

export const bmw: BmwData = {
  title: 'BMW 325Ci Cabrio',
  subtitle: 'E46 · Reihensechszylinder · Heckantrieb',
  tagline:
    'Schwarze Karosserie, schwarzes Leder, offener Himmel — ' +
    'seit 23 Jahren im selben Haushalt, stets als Zweitwagen gefahren.',
  description:
    'Nach 23 Jahren trennen wir uns von einem der zeitlos elegantesten ' +
    'Modelle dieser Baureihe. Der E46 325Ci gilt nicht ohne Grund als letztes ' +
    'großes Cabrio aus Bayern im klassischen Sinne: Reihensechszylinder, ' +
    'Hinterradantrieb, keine Kompromisse. Das Fahrzeug wurde von uns stets als ' +
    'Zweitwagen genutzt und befindet sich in einem gepflegten, dem Alter ' +
    'entsprechenden Zustand — ehrlich, unverbastelt, mit Charakter.',
  closing:
    'Kein Notverkauf. Wir wünschen uns einen Käufer, der dieses Fahrzeug ' +
    'ebenso zu schätzen weiß. Bitte nur ernstgemeinte Anfragen.',
  videoUrl: 'https://www.youtube.com/watch?v=IStopNBZykk',
  specs: [
    { label: 'Modell', value: 'BMW 325Ci Cabrio (E46)' },
    { label: 'Laufleistung', value: 'ca. 147.000 km' },
    { label: 'HU', value: '10/2024 (bei 145.546 km)' },
    { label: 'Farbe außen', value: 'Schwarz' },
    { label: 'Innenausstattung', value: 'Vollleder, Schwarz' },
    { label: 'Bereifung', value: '8-fach (Sommer + Winter)' },
    { label: 'Raucher', value: 'Nein' },
  ],
  features: [
    'Klimaanlage',
    'Tempomat',
    'Sitzheizung',
    'Navigationssystem',
    'Leichtmetallfelgen',
    'Volllederausstattung',
    '8-fach bereift',
    'Nichtraucherfahrzeug',
  ],
  legal:
    'Privatverkauf unter Ausschluss jeglicher Gewährleistung und Rücknahme.',
  collectionHint: 'Weitere Designklassiker aus Privatbesitz',
  collectionUrl: 'https://privat-besitz.de',
};
