'use client';

import { useEffect } from 'react';

interface Props {
  title: string;
  body: string;
  onClose: () => void;
}

export default function LegalModal({ title, body, onClose }: Props) {
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

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal modal-text-only">
        <button
          type="button"
          className="close-btn"
          onClick={onClose}
          aria-label="Schließen"
        >
          ×
        </button>
        <div className="modal-body legal-body">
          <h2 id="legal-title">{title}</h2>
          <div className="legal-content">{body}</div>
        </div>
      </div>
    </div>
  );
}
