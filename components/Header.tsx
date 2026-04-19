import Ornament from './Ornament';

export default function Header() {
  return (
    <header className="site-header">
      <div className="eyebrow">Private Sammlung · Kuratierte Einzelstücke</div>
      <h1>
        Aus einem <em>gelebten</em> Zuhause
      </h1>
      <div className="tagline">
        Stücke mit Geschichte — zum Weiterleben in neuen Händen
      </div>
      <Ornament />
    </header>
  );
}
