import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW 325Ci Cabrio (E46) — Privatverkauf',
  description:
    'BMW 325Ci Cabrio E46, Schwarz/Schwarz, ca. 147.000 km, ' +
    'HU 10/2024, 8-fach bereift, Vollleder — gepflegter Privatbesitz seit 23 Jahren.',
  openGraph: {
    title: 'BMW 325Ci Cabrio (E46)',
    description:
      'Reihensechszylinder · Heckantrieb · 23 Jahre Erstbesitz · Privatverkauf',
    type: 'website',
  },
};

export default function BmwLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Jost:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, background: '#080808' }}>{children}</body>
    </html>
  );
}
