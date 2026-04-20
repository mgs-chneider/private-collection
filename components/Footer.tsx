'use client';

import { useState } from 'react';
import Ornament from './Ornament';
import LegalModal from './LegalModal';
import { CONTACT_EMAIL } from '@/lib/pieces';
import { IMPRESSUM, DATENSCHUTZ, HAFTUNGSAUSSCHLUSS } from '@/lib/legal';

type LegalKey = 'impressum' | 'datenschutz' | 'haftungsausschluss';

const LEGAL_CONTENT: Record<LegalKey, { title: string; body: string }> = {
  impressum: { title: 'Impressum', body: IMPRESSUM },
  datenschutz: { title: 'Datenschutz', body: DATENSCHUTZ },
  haftungsausschluss: { title: 'Haftungsausschluss', body: HAFTUNGSAUSSCHLUSS },
};

export default function Footer() {
  const [open, setOpen] = useState<LegalKey | null>(null);

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

      <nav className="legal-nav" aria-label="Rechtliche Hinweise">
        <button type="button" onClick={() => setOpen('impressum')}>
          Impressum
        </button>
        <span className="legal-sep" aria-hidden="true">·</span>
        <button type="button" onClick={() => setOpen('datenschutz')}>
          Datenschutz
        </button>
        <span className="legal-sep" aria-hidden="true">·</span>
        <button type="button" onClick={() => setOpen('haftungsausschluss')}>
          Haftungsausschluss
        </button>
      </nav>

      {open && (
        <LegalModal
          title={LEGAL_CONTENT[open].title}
          body={LEGAL_CONTENT[open].body}
          onClose={() => setOpen(null)}
        />
      )}
    </footer>
  );
}
