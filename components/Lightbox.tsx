'use client';

import { useEffect } from 'react';

interface Props {
  src: string;
  alt: string;
  onClose: () => void;
}

/**
 * Lightbox — schlichter Vollbild-Overlay für ein einzelnes Bild.
 *
 * Wird vom Katalog-Modal aufgerufen, wenn der Nutzer auf das große Foto
 * klickt. Zeigt das Bild über dem gesamten Viewport (Objekt-fit: contain),
 * mit schwarzem Hintergrund und einer dezenten Schließen-Schaltfläche.
 * Schließen per Klick auf den Hintergrund, per × oder per Escape-Taste.
 *
 * Bewusst ohne Navigation zwischen mehreren Bildern — zum Wechsel dient
 * der Thumbnail-Streifen im Katalog-Modal darunter.
 */
export default function Lightbox({ src, alt, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="lightbox-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Bild in Originalgröße"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        className="lightbox-close"
        onClick={onClose}
        aria-label="Schließen"
      >
        ×
      </button>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="lightbox-image" src={src} alt={alt} />
    </div>
  );
}
