import { ObjectCard } from "@/components/ObjectCard";
import { siteContent } from "@/content/site";
import { objects } from "@/content/objects";

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-inner">
          <p className="eyebrow">Virtuelle Galerie</p>
          <h1>{siteContent.siteTitle}</h1>
          <p className="hero-tagline">{siteContent.siteTagline}</p>
          <p className="hero-intro">{siteContent.intro}</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container gallery-grid">
          {objects.map((entry) => (
            <ObjectCard key={entry.slug} entry={entry} />
          ))}
        </div>
      </section>
    </div>
  );
}
