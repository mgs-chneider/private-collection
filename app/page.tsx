import { siteContent } from "@/content/site";
import { objects } from "@/content/objects";
import { ObjectFeature } from "@/components/ObjectFeature";

export default function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-inner">
          <p className="eyebrow">Private Collection</p>
          <h1>{siteContent.siteTitle}</h1>
          <p className="hero-tagline">{siteContent.siteTagline}</p>
          <p className="hero-intro">{siteContent.intro}</p>
        </div>
      </section>

      <section className="feature-flow">
        {objects.map((entry, index) => (
          <ObjectFeature key={entry.slug} entry={entry} index={index} />
        ))}
      </section>
    </div>
  );
}
