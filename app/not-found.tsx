import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container not-found-page">
      <p className="eyebrow">404</p>
      <h1>Dieses Objekt wurde nicht gefunden</h1>
      <p>
        Möglicherweise ist der Eintrag nicht mehr verfügbar oder der Link nicht
        mehr aktuell.
      </p>
      <p>
        <Link href="/" className="text-link">
          Zurück zur Galerie
        </Link>
      </p>
    </div>
  );
}
