'use client';

import { Fragment, useEffect, useState } from 'react';
import type { Piece } from '@/lib/pieces';
import { CONTACT_EMAIL } from '@/lib/pieces';
import { toRoman } from '@/lib/roman';
import Motif from './Motif';
import Lightbox from './Lightbox';

interface Props {
  piece: Piece;
  onClose: () => void;
}

function buildMailto(piece: Piece): string {
  const romanId = toRoman(piece.id);
  const subject = encodeURIComponent(
    `Anfrage: ${piece.title} (Nr. ${romanId})`
  );
  const body = encodeURIComponent(
    `Sehr geehrte Damen und Herren,

ich interessiere mich für folgendes Stück aus Ihrer Sammlung:

  ${piece.title}
  ${piece.origin}
  Katalog-Nr. ${romanId}

Ich würde mich freuen, wenn Sie mir weitere Bilder zukommen lassen könnten und mir einen Vorschlag für eine Besichtigung machen würden.

Mit freundlichen Grüßen
`
  );
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
}

export default function PieceModal({ piece, onClose }: Props) {
  const hasPhotos = !!(piece.images && piece.images.length > 0);
  const [activeIdx, setActiveIdx] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [onClose]);

  const romanId = toRoman(piece.id);

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Schließen"
        >
          ×
        </button>

        <div className={`modal-image${hasPhotos ? ' has-photo' : ''}`}>
          {hasPhotos ? (
            <>
              <img
                className="modal-photo is-zoomable"
                src={piece.images![activeIdx]}
                alt={piece.title}
                onClick={() => setIsZoomed(true)}
              />
              {piece.images!.length > 1 && (
                <div className="modal-thumbs" role="tablist" aria-label="Weitere Bilder">
                  {piece.images!.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      role="tab"
                      aria-selected={i === activeIdx}
                      className={`modal-thumb${i === activeIdx ? ' is-active' : ''}`}
                      onClick={() => setActiveIdx(i)}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              )}
            </>
          ) : (
            <div className="frame-inner">
              <Motif motif={piece.motif} />
              <div className="roman">{romanId}</div>
              <div className="placeholder-label">Abbildung auf Anfrage</div>
            </div>
          )}
        </div>

        <div className="modal-body">
          <div className="category">
            {piece.categoryLabel} · Nr. {romanId}
          </div>
          <h2 id="modal-title">{piece.title}</h2>
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

          <a className="inquiry-btn" href={buildMailto(piece)}>
            Anfrage senden
          </a>
        </div>
      </div>

      {isZoomed && hasPhotos && (
        <Lightbox
          src={piece.images![activeIdx]}
          alt={piece.title}
          onClose={() => setIsZoomed(false)}
        />
      )}
    </div>
  );
}
