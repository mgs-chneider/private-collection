import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ContactBlock } from "@/components/ContactBlock";
import { getObjectBySlug, objects } from "@/content/objects";
import { statusLabels } from "@/lib/format";

export function generateStaticParams() {
  return objects.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const entry = getObjectBySlug(slug);

  if (!entry) {
    return {
      title: "Objekt nicht gefunden | Aus Privatbesitz",
    };
  }

  return {
    title: `${entry.title} | Aus Privatbesitz`,
    description: entry.teaser,
  };
}

export default async function ObjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getObjectBySlug(slug);

  if (!entry) {
    notFound();
  }

  return (
    <div className="object-page">
      <div className="container object-page-inner">
        <div className="object-hero">
          <Image
            src={entry.images[0]}
            alt={entry.title}
            className="object-hero-image"
            width={1600}
            height={1000}
            priority
            sizes="100vw"
          />
        </div>

        <div className="object-header">
          <p className="object-category">{entry.category}</p>
          <h1>{entry.title}</h1>
          <p className="object-subtitle">{entry.subtitle}</p>
        </div>

        <div className="object-layout">
          <section className="object-main">
            <div className="content-section">
              <h2>Einordnung</h2>
              <p>{entry.story}</p>
            </div>

            <div className="content-section">
              <h2>Beschreibung</h2>
              <p>{entry.description}</p>
            </div>

            <div className="content-section">
              <h2>Zustand</h2>
              <p>{entry.condition}</p>
            </div>

            {entry.extras?.length ? (
              <div className="content-section">
                <h2>Optionale Ergänzungen</h2>
                <ul className="extras-list">
                  {entry.extras.map((extra) => (
                    <li key={extra}>{extra}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {entry.images.length > 1 ? (
              <div className="content-section">
                <h2>Weitere Ansichten</h2>
                <div className="detail-gallery">
                  {entry.images.slice(1).map((src) => (
                    <div key={src} className="detail-gallery-item">
                      <Image
                        src={src}
                        alt={`${entry.title} – weitere Ansicht`}
                        width={1200}
                        height={900}
                        sizes="(max-width: 900px) 100vw, 66vw"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {entry.videoUrl ? (
              <div className="content-section">
                <h2>Video</h2>
                <p>
                  <a href={entry.videoUrl} target="_blank" rel="noreferrer">
                    Video öffnen
                  </a>
                </p>
              </div>
            ) : null}
          </section>

          <aside className="object-sidebar">
            <div className="facts-card">
              <h3>Details</h3>
              <dl>
                <div>
                  <dt>Preis</dt>
                  <dd>{entry.price}</dd>
                </div>
                <div>
                  <dt>Standort</dt>
                  <dd>{entry.location}</dd>
                </div>
                <div>
                  <dt>Übergabe</dt>
                  <dd>{entry.pickup}</dd>
                </div>
                <div>
                  <dt>Status</dt>
                  <dd>{statusLabels[entry.status]}</dd>
                </div>
              </dl>
            </div>

            <ContactBlock />
          </aside>
        </div>
      </div>
    </div>
  );
}
