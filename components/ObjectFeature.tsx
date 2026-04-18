import Link from "next/link";
import type { ObjectEntry } from "@/lib/types";

export function ObjectFeature({
  entry,
  index,
}: {
  entry: ObjectEntry;
  index: number;
}) {
  const isReversed = index % 2 === 1;

  return (
    <section className={`feature ${isReversed ? "feature-reverse" : ""}`}>
      <div className="feature-inner container">
        <div className="feature-image">
          <img src={entry.images[0]} alt={entry.title} />
        </div>

        <div className="feature-content">
          <p className="feature-category">{entry.category}</p>
          <h2>{entry.title}</h2>
          <p className="feature-subtitle">{entry.subtitle}</p>
          <p className="feature-teaser">{entry.teaser}</p>

          <Link href={`/objekt/${entry.slug}`} className="feature-link">
            Exposé ansehen →
          </Link>
        </div>
      </div>
    </section>
  );
}
