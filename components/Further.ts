import Ornament from './Ornament';
import { CONTACT_EMAIL } from '@/lib/pieces';

/**
 * Weiteres auf Anfrage — dezenter Hinweis zwischen Impressionen und Footer.
 *
 * Signalisiert, dass der Katalog nicht die komplette Sammlung zeigt: einige
 * Kleinteile (Leuchten, Spiegel, Beistelltische, moderne Teppiche, Bilder)
 * werden ohne eigenständige Katalogseite abgegeben und können gezielt
 * angefragt werden. Der Tonfall ist bewusst zurückhaltend — keine zweite
 * Hauptsektion, sondern eine stille Schlussnote vor der Kontaktsektion.
 */
const MAILTO =
  `mailto:${CONTACT_EMAIL}` +
  `?subject=${encodeURIComponent('Anfrage: Weitere Designobjekte')}` +
  `&body=${encodeURIComponent(
    `Sehr geehrte Damen und Herren,

über die zwölf im Katalog gezeigten Stücke hinaus interessiere ich mich für weitere Designobjekte aus Ihrem Bestand. Bitte senden Sie mir bei Gelegenheit eine kuratierte Auswahl.

Mit freundlichen Grüßen
`
  )}`;

export default function Further() {
  return (
    <section className="further" aria-labelledby="further-heading">
      <div className="further-heading">
        <Ornament />
        <h2 id="further-heading">Weiteres auf Anfrage</h2>
      </div>
      <p className="further-text">
        Über die zwölf hier gezeigten Stücke hinaus trennen wir uns von
        weiteren Designobjekten aus unserem Bestand. Dazu zählen einzelne
        Leuchten, Spiegel, Beistelltische, moderne Teppiche und Bilder —
        Stücke, die wir hier nicht eigens katalogisiert haben, zu denen wir
        aber gerne auf Anfrage eine kuratierte Auswahl mit Fotos,
        Urheberschaft und Maßangaben zusammenstellen.
      </p>
      <a className="further-link" href={MAILTO}>
        Auswahl anfragen
      </a>
    </section>
  );
}
