import type { ObjectEntry } from "@/lib/types";

export const objects: ObjectEntry[] = [
 
  {
    slug: "bang-olufsen-anlage",
    category: "Audio",
    title: "Bang & Olufsen Surround-System",
    subtitle: "Zeitloser Klang",
    teaser:
      "Hochwertiges Surround-System mit ikonischem Design und beeindruckender Präsenz.",
    story:
      "Ein hochwertiges System aus unserem Privatbesitz, das Klangqualität und Gestaltung in besonderer Weise verbindet.",
    description:
      "BeoSound Ouverture inkl. Rack, BeoLab 2, ein Paar BeoLab 6000, ein Paar BeoLab 8000 sowie zwei Fernbedienungen.",
    condition: "Sehr gepflegter Zustand, Nichtraucherhaushalt.",
    price: "Preis auf Anfrage",
    location: "Frankfurt am Main",
    pickup: "Abholung über Spedition in Frankfurt",
    status: "verfuegbar",
    images: ["/images/bo/hero.jpg"],
  },
  {
    slug: "esstischgruppe-kaminsky",
    category: "Möbel",
    title: "Esstischgruppe im skandinavischen Stil",
    subtitle: "Zeitgeschichte trifft Design",
    teaser:
      "Maßgefertigte Essgruppe mit besonderer Provenienz und zeitloser Eleganz.",
    story:
      "Gefertigt in den 1970er-Jahren für Walter Kaminsky und seither unverändert im Familienbesitz.",
    description:
      "Ausziehbarer Tisch und zwölf Hochlehner-Stühle, jüngst neu gepolstert und mit schwarzem Bezug versehen.",
    condition: "Gepflegter Zustand mit altersüblichen Gebrauchsspuren.",
    price: "Preis auf Anfrage",
    location: "Nach Absprache",
    pickup: "Nur Abholung",
    status: "verfuegbar",
    images: ["/images/esstisch/hero.jpg"],
  },
  {
    slug: "bulthaup-kuechenwerkbank",
    category: "Küche",
    title: "Bulthaup Küchenwerkbank",
    subtitle: "Werkstatt für Genuss",
    teaser:
      "Massive Küchenwerkbank für ambitioniertes Kochen – funktional, reduziert und charakterstark.",
    story:
      "Eine Küchenlösung mit klarer gestalterischer Haltung, hochwertiger Verarbeitung und konsequenter Funktionalität.",
    description:
      "Frühes Modell mit runden Armaturen und Kochfeld mit 2x Elektro und 2x Gas. Optional können ein Gaggenau Backofen, ein Miele Geschirrspüler sowie Bulthaup Möbel-Elemente aus dem System 25 ergänzt werden.",
    condition: "Sehr guter, gepflegter Zustand mit altersüblichen Gebrauchsspuren.",
    price: "2.500 € VB",
    location: "Bad Homburg",
    pickup: "Nur Abholung",
    status: "verfuegbar",
    images: ["/images/kueche/hero.jpeg"],
    extras: [
      "Gaggenau Backofen",
      "Miele Geschirrspüler (Edelstahl, unterbaufähig)",
      "Bulthaup Möbel-Elemente aus dem System 25",
    ],
  },
];

export function getObjectBySlug(slug: string) {
  return objects.find((entry) => entry.slug === slug);
}
