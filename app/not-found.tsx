import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container" style={{ padding: "5rem 0" }}>
      <h1>Objekt nicht gefunden</h1>
      <p>Dieses Exposé ist nicht mehr verfügbar.</p>
      <Link href="/">Zurück zur Galerie</Link>
    </div>
  );
}
