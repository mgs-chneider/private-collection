import Ornament from './Ornament';
import { CONTACT_EMAIL } from '@/lib/pieces';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Ornament />
      <h3>Ihre Anfrage ist willkommen</h3>
      <p>
        Für Rückfragen, weitere Bilder oder einen Besichtigungstermin schreiben
        Sie uns gerne eine Nachricht — wir antworten persönlich.
      </p>
      <a className="email" href={`mailto:${CONTACT_EMAIL}`}>
        {CONTACT_EMAIL}
      </a>
      <div className="fineprint">
        Privatverkauf · Keine gewerbliche Veräußerung
      </div>
    </footer>
  );
}
