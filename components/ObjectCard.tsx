import Link from "next/link";
import Image from "next/image";
import type { ObjectEntry } from "@/lib/types";

export function ObjectCard({ entry }: { entry: ObjectEntry }) {
  return (
    <article className="object-card">
      <div className="object-card-image-wrap">
        <Image
          src={entry.images[0]}
          alt={entry.title}
          width={1200}
          height={900}
          className="object-card-image"
          sizes="(max-width: 900px) 100vw, 50vw"
        />
      </div>

      <div className="object-card-content">
        <p className="object-category">{entry.category}</p>
        <h2>{entry.title}</h2>
        <p className="object-subtitle">{entry.subtitle}</p>
        <p className="object-teaser">{entry.teaser}</p>

        <Link href={`/objekt/${entry.slug}`} className="text-link">
          Exposé ansehen
        </Link>
      </div>
    </article>
  );
}
