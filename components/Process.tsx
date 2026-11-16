import Ornament from './Ornament';

/**
 * „So kommt ein Stück zu Ihnen" — ersetzt die frühere Impressionen-Sektion.
 *
 * Beantwortet die praktischen Fragen, die Interessenten bei einem
 * Privatverkauf haben (Seriosität, Herkunft, Ablauf, Übergabe), direkt
 * vor dem Hinweis „Weiteres auf Anfrage". Dunkles Band als Gegengewicht
 * zum hellen Hero.
 *
 * Fakten (Stand 11/2026): Stücke liegen verpackt im Lager; nur Abholung,
 * Zahlung bei Abholung. Für beide Liebscher-Arbeiten liegt die
 * Originalrechnung der Frankfurter Galerie Voges vor.
 */
const steps: { title: string; text: string }[] = [
  {
    title: 'Anfragen',
    text: 'Schreiben Sie uns zu dem Stück, das Sie interessiert. Wir antworten persönlich.',
  },
  {
    title: 'Kennenlernen',
    text: 'Weitere Fotos, Maße und Angaben zur Herkunft schicken wir Ihnen gerne. Für die beiden Arbeiten von Martin Liebscher liegt die Originalrechnung der Galerie Voges, Frankfurt, vor.',
  },
  {
    title: 'Vereinbaren',
    text: 'Preis und Abholtermin klären wir direkt miteinander — privat, ohne Händler dazwischen.',
  },
  {
    title: 'Abholen',
    text: 'Die Stücke liegen sorgfältig verpackt im Lager. Sie holen ab und bezahlen bei Abholung.',
  },
];

export default function Process() {
  return (
    <section className="process" aria-labelledby="process-heading">
      <div className="process-head">
        <Ornament />
        <div className="section-eyebrow">Privat, persönlich, unkompliziert</div>
        <h2 id="process-heading">
          So kommt ein Stück <em>zu Ihnen</em>
        </h2>
      </div>

      <ol className="process-steps">
        {steps.map((step, i) => (
          <li key={step.title} className="process-step">
            <span className="process-number" aria-hidden="true">
              {['I', 'II', 'III', 'IV'][i]}
            </span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
