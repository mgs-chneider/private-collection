import Ornament from './Ornament';

export default function Preamble() {
  return (
    <section className="preamble">
      <div className="section-eyebrow">Zum Anlass</div>
      <h2>
        Ein Abschied <em>mit Freude</em>
      </h2>
      <p className="lead">
        Wir ziehen um — und nicht alles kann mitkommen. So trennen wir uns
        schweren, aber auch fröhlichen Herzens von einigen ausgewählten
        Stücken, die uns lange begleitet haben.
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
