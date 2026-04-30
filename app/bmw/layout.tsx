import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BMW 325Ci Cabrio (E46) — Privatverkauf',
  description:
    'BMW 325Ci Cabrio E46, Schwarz/Schwarz, ca. 147.000 km, ' +
    'HU 10/2024, 8-fach bereift, Vollleder — gepflegter Privatbesitz seit 23 Jahren.',
  openGraph: {
    title: 'BMW 325Ci Cabrio (E46)',
    description: 'Reihensechszylinder · Heckantrieb · 23 Jahre Erstbesitz · Privatverkauf',
    type: 'website',
  },
};

export default function BmwLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
