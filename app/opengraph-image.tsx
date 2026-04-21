import { ImageResponse } from 'next/og';

export const alt =
  'Private Sammlung — Kuratierte Einzelstücke aus langjährigem Privatbesitz';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/**
 * Dynamisch generierte Social-Vorschaukarte.
 *
 * Wird von Next.js automatisch unter /opengraph-image ausgeliefert und
 * über die `openGraph.images`-Metadaten (implizit durch die Dateiposition
 * in `app/`) referenziert. Erscheint in Vorschauen auf LinkedIn, WhatsApp,
 * Slack, Signal, Telegram, E-Mail-Clients usw.
 */
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#f5efe3',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Georgia, "Times New Roman", serif',
          color: '#2b2520',
          padding: '80px',
        }}
      >
        {/* Kapitel-Kapitelchen oben */}
        <div
          style={{
            fontSize: 24,
            letterSpacing: 8,
            color: '#a0864a',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Privatverkauf
        </div>

        {/* Feine Trennlinie */}
        <div
          style={{
            width: 80,
            height: 1,
            background: '#a0864a',
            marginTop: 32,
            marginBottom: 32,
          }}
        />

        {/* Haupttitel */}
        <div
          style={{
            fontSize: 104,
            fontWeight: 400,
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: -1,
          }}
        >
          Private Sammlung
        </div>

        {/* Unterzeile, kursiv */}
        <div
          style={{
            fontSize: 34,
            fontStyle: 'italic',
            color: '#6b5d4a',
            marginTop: 28,
            textAlign: 'center',
            maxWidth: 900,
          }}
        >
          Kuratierte Einzelstücke aus langjährigem Privatbesitz
        </div>

        {/* Ornament + Domain am Fuß */}
        <div
          style={{
            marginTop: 72,
            display: 'flex',
            alignItems: 'center',
            gap: 20,
          }}
        >
          <div style={{ width: 80, height: 1, background: '#a0864a' }} />
          <div
            style={{
              width: 10,
              height: 10,
              background: '#a0864a',
              transform: 'rotate(45deg)',
            }}
          />
          <div style={{ width: 80, height: 1, background: '#a0864a' }} />
        </div>
        <div
          style={{
            marginTop: 20,
            fontSize: 22,
            letterSpacing: 6,
            color: '#6b5d4a',
            textTransform: 'uppercase',
            fontFamily: 'Helvetica, Arial, sans-serif',
          }}
        >
          privat-besitz.de
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
