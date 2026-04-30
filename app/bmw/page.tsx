import { bmw } from '@/lib/bmw';

const gold = '#b8a272';
const goldMuted = 'rgba(184,162,114,0.15)';

export default function BmwPage() {
  return (
    <main
      style={{
        fontFamily: "'Jost', sans-serif",
        color: '#e8e4dc',
        background: '#080808',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-1 { animation: fadeUp .9s ease both; }
        .fade-2 { animation: fadeUp .9s .15s ease both; }
        .fade-3 { animation: fadeUp .9s .3s ease both; }
        .fade-4 { animation: fadeUp .9s .45s ease both; }
        .fade-5 { animation: fadeUp .9s .6s ease both; }

        .spec-row:not(:last-child) {
          border-bottom: 0.5px solid rgba(184,162,114,0.2);
        }

        .feature-pill {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          border: 0.5px solid rgba(184,162,114,0.3);
          padding: 6px 14px;
          font-size: 12px;
          letter-spacing: .12em;
          text-transform: uppercase;
          color: #c8bfa8;
          font-weight: 400;
        }

        .feature-pill::before {
          content: '';
          display: block;
          width: 3px;
          height: 3px;
          background: ${gold};
          border-radius: 50%;
          flex-shrink: 0;
        }

        .cta-btn {
          display: inline-block;
          background: transparent;
          border: 0.5px solid ${gold};
          color: ${gold};
          font-family: 'Jost', sans-serif;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: .2em;
          text-transform: uppercase;
          padding: 14px 40px;
          cursor: pointer;
          text-decoration: none;
          transition: background .2s, color .2s;
        }

        .cta-btn:hover {
          background: ${gold};
          color: #080808;
        }

        .video-link {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          border: 0.5px solid rgba(255,255,255,0.08);
          padding: 18px 24px;
          transition: border-color .2s;
        }

        .video-link:hover {
          border-color: rgba(184,162,114,0.4);
        }

        .play-circle {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 0.5px solid ${gold};
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .play-triangle {
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 6px 0 6px 11px;
          border-color: transparent transparent transparent ${gold};
          margin-left: 2px;
        }

        .collection-link {
          color: rgba(184,162,114,0.6);
          text-decoration: none;
          font-size: 11px;
          letter-spacing: .15em;
          text-transform: uppercase;
          font-weight: 300;
          transition: color .2s;
        }
        .collection-link:hover { color: ${gold}; }

        @media (max-width: 640px) {
          .hero-title { font-size: 42px !important; }
          .hero-pad { padding: 80px 24px 60px !important; }
          .section-pad { padding: 60px 24px !important; }
          .desc-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="hero-pad"
        style={{ padding: '120px 64px 80px', maxWidth: 960, margin: '0 auto' }}
      >
        <p
          className="fade-1"
          style={{
            fontSize: 10,
            letterSpacing: '.25em',
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 500,
            marginBottom: 28,
          }}
        >
          Privatverkauf · Liebhaberstück
        </p>

        <h1
          className="hero-title fade-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 68,
            fontWeight: 600,
            color: '#f5f0e8',
            lineHeight: 1.0,
            letterSpacing: '-.01em',
          }}
        >
          {bmw.title}
        </h1>

        <p
          className="fade-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 22,
            fontStyle: 'italic',
            color: gold,
            marginTop: 10,
            fontWeight: 400,
          }}
        >
          {bmw.subtitle}
        </p>

        <div
          className="fade-4"
          style={{ width: 48, height: 0.5, background: gold, margin: '36px 0' }}
        />

        <p
          className="fade-5"
          style={{
            fontSize: 15,
            fontWeight: 300,
            color: '#9a9590',
            lineHeight: 1.9,
            maxWidth: 560,
            letterSpacing: '.02em',
          }}
        >
          {bmw.tagline}
        </p>
      </section>

      {/* ── SPECS ────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ padding: '0 64px 80px', maxWidth: 960, margin: '0 auto' }}
      >
        <p
          style={{
            fontSize: 10,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: gold,
            fontWeight: 500,
            marginBottom: 20,
          }}
        >
          Technische Daten
        </p>
        <div style={{ border: '0.5px solid rgba(184,162,114,0.2)' }}>
          {bmw.specs.map((s) => (
            <div
              key={s.label}
              className="spec-row"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '14px 20px',
                gap: 24,
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  letterSpacing: '.12em',
                  textTransform: 'uppercase',
                  color: '#5a5650',
                  fontWeight: 500,
                  flexShrink: 0,
                }}
              >
                {s.label}
              </span>
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 18,
                  color: '#d4cfc5',
                  fontWeight: 500,
                  textAlign: 'right',
                }}
              >
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── AUSSTATTUNG ──────────────────────────────────────── */}
      <section
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.05)',
          borderBottom: '0.5px solid rgba(255,255,255,0.05)',
          padding: '60px 64px',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: gold,
              fontWeight: 500,
              marginBottom: 24,
            }}
          >
            Ausstattung
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {bmw.features.map((f) => (
              <span key={f} className="feature-pill">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BESCHREIBUNG ─────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ padding: '80px 64px', maxWidth: 960, margin: '0 auto' }}
      >
        <div
          className="desc-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div>
            <p
              style={{
                fontSize: 10,
                letterSpacing: '.2em',
                textTransform: 'uppercase',
                color: gold,
                fontWeight: 500,
                marginBottom: 16,
              }}
            >
              Zum Fahrzeug
            </p>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 32,
                fontWeight: 400,
                fontStyle: 'italic',
                color: '#f5f0e8',
                lineHeight: 1.3,
              }}
            >
              Ehrlich. Unverbastelt. Mit Charakter.
            </p>
          </div>
          <div>
            <p
              style={{
                fontSize: 15,
                fontWeight: 300,
                color: '#9a9590',
                lineHeight: 1.9,
                marginBottom: 28,
              }}
            >
              {bmw.description}
            </p>
            <p
              style={{
                fontSize: 14,
                fontWeight: 400,
                color: '#c8bfa8',
                lineHeight: 1.8,
                borderLeft: `2px solid ${gold}`,
                paddingLeft: 20,
                fontStyle: 'italic',
              }}
            >
              {bmw.closing}
            </p>
          </div>
        </div>
      </section>

      {/* ── VIDEO ────────────────────────────────────────────── */}
      <section
        style={{
          background: goldMuted,
          borderTop: '0.5px solid rgba(184,162,114,0.15)',
          borderBottom: '0.5px solid rgba(184,162,114,0.15)',
          padding: '40px 64px',
        }}
      >
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p
            style={{
              fontSize: 10,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: gold,
              fontWeight: 500,
              marginBottom: 16,
            }}
          >
            Fahrzeugvideo
          </p>
          
            href={bmw.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="video-link"
          >
            <div className="play-circle">
              <div className="play-triangle" />
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 400, color: '#e8e4dc', marginBottom: 3 }}>
                Fahrgefühl, Zustand und Details — Video ansehen
              </p>
              <p style={{ fontSize: 12, color: '#5a5650', fontWeight: 300 }}>
                youtube.com
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* ── KONTAKT ──────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{
          padding: '100px 64px',
          maxWidth: 960,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 42,
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#f5f0e8',
            marginBottom: 12,
          }}
        >
          Interesse?
        </p>
        <p
          style={{
            fontSize: 13,
            fontWeight: 300,
            color: '#5a5650',
            letterSpacing: '.05em',
            marginBottom: 40,
          }}
        >
          Wir freuen uns über ernstgemeinte Anfragen per E-Mail.
        </p>
        <a href="mailto:kontakt@privat-besitz.de" className="cta-btn">
          Kontakt aufnehmen
        </a>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: '0.5px solid rgba(255,255,255,0.05)',
          padding: '28px 64px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          maxWidth: 960,
          margin: '0 auto',
          flexWrap: 'wrap',
          gap: 12,
        }}
      >
        <p style={{ fontSize: 11, fontWeight: 300, color: '#2e2c2a', letterSpacing: '.04em' }}>
          {bmw.legal}
        </p>
        
          href={bmw.collectionUrl}
          className="collection-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {bmw.collectionHint} ↗
        </a>
      </footer>
    </main>
  );
}
