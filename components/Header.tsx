import Image from 'next/image';
import Ornament from './Ornament';

export default function Header({ hero = false }: { hero?: boolean }) {
  const content = (
    <>
      <div className="eyebrow">Private Sammlung · Kuratierte Einzelstücke</div>
      <h1>
        Aus einem <em>gelebten</em> Zuhause
      </h1>
      <div className="tagline">
        Stücke mit Geschichte — zum Weiterleben in neuen Händen
      </div>
      <Ornament />
    </>
  );

  if (!hero) {
    return <header className="site-header">{content}</header>;
  }

  return (
    <header className="site-header site-header--hero">
      <Image
        src="/images/hero-wohnraum.jpg"
        alt="Heller Altbau-Wohnraum im warmen Nachmittagslicht mit Ledersessel, angelehntem Bild und weinrotem Vorhang"
        fill
        priority
        sizes="100vw"
        className="hero-image"
      />
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-content">{content}</div>
    </header>
  );
}
