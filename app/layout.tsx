import type { Metadata } from 'next';
import { Cormorant_Garamond, Inter, Jost } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-jost',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Private Sammlung – Kuratierte Einzelstücke',
  description:
    'Kuratierte Einzelstücke aus Privatbesitz: Möbel, Einrichtung, Kunst und Gemälde. Anfragen per E-Mail.',
  openGraph: {
    title: 'Private Sammlung – Kuratierte Einzelstücke',
    description: 'Aus einem gelebten Zuhause – Stücke mit Geschichte.',
    type: 'website',
    locale: 'de_DE',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${cormorant.variable} ${inter.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  );
}
