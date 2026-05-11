'use client';
import Link from 'next/link';
import type { Piece } from '@/lib/pieces';
import { toRoman } from '@/lib/roman';
import { toSlug } from '@/lib/slugs';
import Motif from './Motif';

interface Props {
  piece: Piece;
  onOpen: (piece: Piece) => void;
}

export default function PieceCard({ piece, onOpen }: Props) {
  const hasPhoto = piece.images && piece.images.length > 0;
  const slug = toSlug(piece.title);

  return (
    <div className="piece-wrapper">
      <button
        type="button"
        className="piece"
        onClick={() => onOpen(piece)}
        aria-label={`${piece.title} — Details öffnen`}
      >
        <div className={`piece-image${hasPhoto ? ' has-photo' : ''}`}>
          {piece.reserved && (
            <div className="piece-reserved-badge">Reserviert</div>
          )}
          {piece.auctionUrl && (
            
              href={piece.auctionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="piece-auction-badge"
              onClick={(e) => e.stopPropagation()}
            >
              Bei Catawiki →
            </a>
          )}
          {hasPhoto ? (
            <img
              className="piece-photo"
              src={piece.images![0]}
              alt={piece.title}
              loading="lazy"
            />
          ) : (
            <div className="frame-inner">
              <Motif motif={piece.motif} />
              <div className="roman">{toRoman(piece.id)}</div>
              <div className="placeholder-label">Abbildung auf Anfrage</div>
            </div>
          )}
        </div>
        <div className="piece-meta">
          <div className="piece-category">{piece.categoryLabel}</div>
          <h3 className="piece-title">{piece.title}</h3>
          <div className="piece-origin">{piece.origin}</div>
          <div className="piece-price">
            {piece.reserved ? 'Reserviert' : piece.price}
          </div>
        </div>
      </button>

      <Link
        href={`/stueck/${slug}`}
        className="piece-permalink"
        aria-label={`${piece.title} — eigene Seite öffnen`}
        tabIndex={-1}
      >
        Eigene Seite →
      </Link>
    </div>
  );
}
