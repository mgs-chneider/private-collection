import { bmw } from '@/lib/bmw';

const styles: Record<string, string> = {};

export default function BmwPage() {
  return (
    <main
      style={{
        fontFamily: "var(--font-jost), sans-serif",
        color: '#1e2428',
        background: '#f8f8f6',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* HERO */}
      <section
        className={styles.heroPad}
        style={{ padding: '72px 64px 48px', maxWidth: 960, margin: '0 auto' }}
      >
        <p
          className={styles.fadeOne}
          style={{
            fontSize: 10,
            letterSpacing: '.25em',
            textTransform: 'uppercase',
            color: '#5a6a7a',
            fontWeight: 500,
            marginBottom: 28,
          }}
        >
          Privatverkauf · Liebhaberstück
        </p>

        <h1
          className={`${styles.heroTitle} ${styles.fadeTwo}`}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 68,
            fontWeight: 600,
            color: '#1e2428',
            lineHeight: 1.0,
            letterSpacing: '-.01em',
          }}
        >
          {bmw.title}
        </h1>

        <p
          className={styles.fadeThree}
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: 22,
            fontStyle: 'italic',
            color: '#5a6a7a',
            marginTop: 10,
            fontWeight: 400,
          }}
        >
          {bmw.subtitle}
        </p>

        <div
          className={styles.fadeFour}
          style={{ width: 48, height: 1, background: '#5a6a7a', margin: '36px 0' }}
        />

        <p
          className={styles.fadeFive}
          style={{
            fontSize: 15,
            fontWeight: 300,
            color: '#6b7880',
            lineHeight: 1.9,
            maxWidth: 560,
            letterSpacing: '.02em',
          }}
        >
          {bmw.tagline}
        </p>
      </section>

      {/* SPECS */}
      <section
        className={styles.sectionPad}
        style={{ padding: '0 64px 48px', maxWidth: 960, margin: '0 auto' }}
      >
        <p style={{
          fontSize: 10,
          letterSpacing: '.2em',
          textTransform: 'uppercase',
          color: '#5a6a7a',
          fontWeight: 500,
          marginBottom: 20,
        }}>
          Technische Daten
        </p>
        <div style={{ border: '0.5px solid rgba(80,90,100,0.15)' }}>
          {bmw.specs.map((s) => (
            <div
              key={s.label}
              className={styles.specRow}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                padding: '14px 20px',
                gap: 24,
              }}
            >
              <span style={{
                fontSize: 11,
                letterSpacing: '.12em',
                textTransform: 'uppercase',
                color: '#9aa4ac',
                fontWeight: 500,
                flexShrink: 0,
              }}>
                {s.label}
              </span>
              <span style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: 18,
                color: '#1e2428',
                fontWeight: 500,
                textAlign: 'right',
              }}>
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* AUSSTATTUNG */}
      <section style={{
        borderTop: '0.5px solid rgba(80,90,100,0.1)',
        borderBottom: '0.5px solid rgba(80,90,100,0.1)',
        padding: '48px 64px',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{
            fontSize: 10,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: '#5a6a7a',
            fontWeight: 500,
            marginBottom: 24,
          }}>
            Ausstattung
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {bmw.features.map((f) => (
              <span key={f} className={styles.featurePill}>{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* BESCHREIBUNG */}
      <section
        className={styles.sectionPad}
        style={{ padding: '64px 64px', maxWidth: 960, margin: '0 auto' }}
      >
        <div className={styles.descGrid}>
          <div>
            <p style={{
              fontSize: 10,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: '#5a6a7a',
              fontWeight: 500,
              marginBottom: 16,
            }}>
              Zum Fahrzeug
            </p>
            <p style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: 32,
              fontWeight: 400,
              fontStyle: 'italic',
              color: '#1e2428',
              lineHeight: 1.3,
            }}>
              Ehrlich. Unverbastelt. Mit Charakter.
            </p>
          </div>
          <div>
            <p style={{
              fontSize: 15,
              fontWeight: 300,
              color: '#5a6570',
              lineHeight: 1.9,
              marginBottom: 28,
            }}>
              {bmw.description}
            </p>
            <p style={{
              fontSize: 14,
              fontWeight: 400,
              color: '#3a4550',
              lineHeight: 1.8,
              borderLeft: '2px solid #5a6a7a',
              paddingLeft: 20,
              fontStyle: 'italic',
            }}>
              {bmw.closing}
            </p>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section style={{
        background: 'rgba(90,106,122,0.06)',
        borderTop: '0.5px solid rgba(80,90,100,0.1)',
        borderBottom: '0.5px solid rgba(80,90,100,0.1)',
        padding: '40px 64px',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p style={{
            fontSize: 10,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
            color: '#5a6a7a',
            fontWeight: 500,
            marginBottom: 16,
          }}>
            Fahrzeugvideo
          </p>
          
            href={bmw.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.videoLink}
          >
            <div className={styles.playCircle}>
              <div className={styles.playTriangle} />
            </div>
            <div>
              <p style={{ fontSize: 14, fontWeight: 400, color: '#1e2428', marginBottom: 3 }}>
                Fahrgefühl, Zustand und Details — Video ansehen
              </p>
              <p style={{ fontSize: 12, color: '#9aa4ac', fontWeight: 300 }}>
                youtube.com
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* KONTAKT */}
      <section
        className={styles.sectionPad}
        style={{
          padding: '80px 64px',
          maxWidth: 960,
          margin: '0 auto',
          textAlign: 'center',
        }}
      >
        <p style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: 42,
          fontWeight: 400,
          fontStyle: 'italic',
          color: '#1e2428',
          marginBottom: 12,
        }}>
          Interesse?
        </p>
        <p style={{
          fontSize: 13,
          fontWeight: 300,
          color: '#9aa4ac',
          letterSpacing: '.05em',
          marginBottom: 40,
        }}>
          Wir freuen uns über ernstgemeinte Anfragen per E-Mail.
        </p>
        <a href="mailto:kontakt@privat-besitz.de" className={styles.ctaBtn}>
          Kontakt aufnehmen
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        borderTop: '0.5px solid rgba(80,90,100,0.1)',
        padding: '28px 64px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: 960,
        margin: '0 auto',
        flexWrap: 'wrap',
        gap: 12,
      }}>
        <p style={{
          fontSize: 11,
          fontWeight: 300,
          color: '#9aa4ac',
          letterSpacing: '.04em',
        }}>
          {bmw.legal}
        </p>
        
          href={bmw.collectionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.collectionLink}
        >
          {bmw.collectionHint} ↗
        </a>
      </footer>
    </main>
  );
}
