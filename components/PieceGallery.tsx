'use client';
import { useState } from 'react';

interface Props {
  images: string[];
  title: string;
}

export default function PieceGallery({ images, title }: Props) {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <div className="piece-gallery">
      <div className="piece-gallery-main">
        <img
          src={images[activeIdx]}
          alt={title}
          className="piece-gallery-photo"
        />
      </div>
      {images.length > 1 && (
        <div className="modal-thumbs">
          {images.map((src, i) => (
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
    </div>
  );
}
