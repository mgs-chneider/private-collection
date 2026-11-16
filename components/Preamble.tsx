import Ornament from './Ornament';

export default function Preamble() {
  return (
    <section className="preamble">
      <div className="section-eyebrow">Zum Anlass</div>
      <h2>
        Ein Abschied <em>mit Freude</em>
      </h2>
      <p className="lead">
        Wir sind umgezogen — und nicht alles konnte mit. Einige Stücke, die
        uns über viele Jahre begleitet haben, warten seitdem sorgfältig
        verpackt auf ein neues Zuhause.
      </p>
      <p>
        Jeder Gegenstand in dieser Sammlung hat eine eigene Geschichte. Wir
        freuen uns, wenn diese Stücke bei neuen Besitzern ein zweites Kapitel
        beginnen dürfen.
      </p>
      <Ornament />
    </section>
  );
}
