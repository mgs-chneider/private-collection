import Ornament from './Ornament';

/**
 * Impressionen — eine stille, dezente Schluss-Sektion vor dem Footer.
 *
 * Drei Fotografien aus dem tatsächlichen Alltag des Hauses, in dem die
 * Stücke dieses Katalogs über viele Jahre gelebt wurden. Keine Produkt-
 * aufnahmen, sondern Atmosphären: sie zeigen, dass es sich hier nicht um
 * die Inszenierung eines Händlers handelt, sondern um gewachsene,
 * bewohnte Räume — und verankern die Sammlung biographisch.
 *
 * Bewusst schmucklos gerahmt (auch ohne Klick-Modal), mit einer einzigen
 * Bildunterschrift am Fuß der Sektion.
 */
const impressions: { src: string; alt: string }[] = [
  {
    src: '/images/impression-wohnzimmer.jpeg',
    alt: 'Blick in das frühere Wohnzimmer — mit einigen der in diesem Katalog gezeigten Stücke',
  },
  {
    src: '/images/eames-impression.jpeg',
    alt: 'Der Eames Lounge Chair 670 von Herman Miller — in einer Bibliotheksatmosphäre',
  },
  {
    src: '/images/impression-panorama.jpeg',
    alt: 'Das Liebscher-Panorama Moskau (Detskij Mir) an einer freien Wand',
  },
];
export default function Impressions() {
  return (
    <section className="impressions" aria-labelledby="impressions-heading">
      <div className="impressions-head">
        <Ornament />
        <h2 id="impressions-heading">Impressionen</h2>
      </div>

      <div className="impressions-grid">
        {impressions.map((img) => (
          <figure key={img.src} className="impression">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={img.src} alt={img.alt} loading="lazy" />
          </figure>
        ))}
      </div>

      <p className="impressions-caption">
        Impressionen aus zwei Jahrzehnten des Zusammenlebens mit diesen Stücken.
      </p>
    </section>
  );
}
