'use client';

import type { Piece } from '@/lib/pieces';
import { toRoman } from '@/lib/roman';
import Motif from './Motif';

interface Props {
  piece: Piece;
  onOpen: (piece: Piece) => void;
}

export default function PieceCard({ piece, onOpen }: Props) {
  const hasPhoto = piece.images && piece.images.length > 0;

  return (
    <button
      type="button"
      className="piece"
      onClick={() => onOpen(piece)}
      aria-label={`${piece.title} — Details öffnen`}
    >
      <div className={`piece-image${hasPhoto ? ' has-photo' : ''}`}>
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
        <div className="piece-price">{piece.price}</div>
      </div>
    </button>
  );
}
