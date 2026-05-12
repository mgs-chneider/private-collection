import { notFound } from 'next/navigation';
import { allSlugs, pieceBySlug, toSlug } from '@/lib/slugs';
import { toRoman } from '@/lib/roman';
import { CONTACT_EMAIL } from '@/lib/pieces';
import type { Piece } from '@/lib/pieces';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Fragment } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PieceGallery from '@/components/PieceGallery';

export function generateStaticParams() {
  return allSlugs();
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const piece = pieceBySlug(params.slug);
  if (!piece) return {};
  const roman = toRoman(piece.id);
  return {
    title: `${piece.title} — Nr. ${roman} · Private Sammlung`,
    description: piece.description.slice(0, 155),
    alternates: {
      canonical: `https://www.privat-besitz.de/stueck/${toSlug(piece.title)}`,
    },
    openGraph: {
      title: `${piece.title} · Privatbesitz`,
      description: piece.description.slice(0, 155),
      images: piece.images?.[0]
        ? [`https://www.privat-besitz.de${piece.images[0]}`]
        : [],
      url: `https://www.privat-besitz.de/stueck/${toSlug(piece.title)}`,
    },
  };
}

function buildMailto(piece: Piece): string {
  const romanId = toRoman(piece.id);
  const subject = encodeURIComponent(`Anfrage: ${piece.title} (Nr. ${romanId})`);
  const body = encodeURIComponent(
    `Sehr geehrte Damen und Herren,\n\nich interessiere mich für folgendes Stück aus Ihrer Sammlung:\n\n  ${piece.title}\n  ${piece.origin}\n  Katalog-Nr. ${romanId}\n\nIch würde mich freuen, wenn Sie mir weitere Bilder zukommen lassen könnten und mir einen Vorschlag für eine Besichtigung machen würden.\n\nMit freundlichen Grüßen\n`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function PiecePage({
  params,
}: {
  params: { slug: string };
}) {
  const piece = pieceBySlug(params.slug);
  if (!piece) notFound();

  const roman = toRoman(piece.id);
  const hasPhotos = !!(piece.images && piece.images.length > 0);

  return (
    <>
      <Header />

      <div className="piece-page">
        <Link href="/#collection" className="piece-page-back">
          ← Zur Sammlung
        </Link>

        <article className="modal">
          <div className="modal-image has-photo">
            {hasPhotos ? (
              <PieceGallery images={piece.images!} title={piece.title} />
            ) : (
              <div className="frame-inner">
                <div className="roman">{roman}</div>
                <div className="placeholder-label">Abbildung auf Anfrage</div>
              </div>
            )}
          </div>

          <div className="modal-body">
            <div className="category">
              {piece.categoryLabel} · Nr. {roman}
            </div>
            <h1 id="piece-title" style={{ fontSize: 'inherit' }}>{piece.title}</h1>
            {piece.artist && <div className="artist">{piece.artist}</div>}
            <div className="origin">{piece.origin}</div>
            <div className="description">{piece.description}</div>

            <dl className="specs">
              {Object.entries(piece.specs).map(([key, value]) => (
                <Fragment key={key}>
                  <dt>{key}</dt>
                  <dd>{value}</dd>
                </Fragment>
              ))}
            </dl>

            <div className="price-block">
              <span className="price-label">Preis</span>
              <span className="price">{piece.price}</span>
            </div>

            {piece.auctionUrl && (
             <a
                href={piece.auctionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="auction-link"
              >
                Dieses Stück ist aktuell bei Catawiki in der Auktion →
              </a>
            )}

            <a className="inquiry-btn" href={buildMailto(piece)}>
              Anfrage senden
            </a>
          </div>
        </article>
      </div>

      <Footer />
    </>
  );
}
