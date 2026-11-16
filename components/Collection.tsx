'use client';

import { useMemo, useState } from 'react';
import { pieces, type Piece } from '@/lib/pieces';
import FilterBar, { type Filter } from './FilterBar';
import PieceCard from './PieceCard';
import PieceModal from './PieceModal';

export default function Collection() {
  const [filter, setFilter] = useState<Filter>('all');
  const [selected, setSelected] = useState<Piece | null>(null);

  const visible = useMemo(
    () => (filter === 'all' ? pieces : pieces.filter((p) => p.category === filter)),
    [filter]
  );

  const available = pieces.filter((p) => !p.sold).length;

  return (
    <section className="collection-section" aria-labelledby="collection-heading">
      <div className="collection-head">
        <div className="section-eyebrow">
          Kuratierte Einzelstücke · {available} verfügbar
        </div>
        <h2 id="collection-heading">
          Die <em>Sammlung</em>
        </h2>
      </div>

      <FilterBar active={filter} onChange={setFilter} />

      <main className="collection" id="collection">
        {visible.map((piece) => (
          <PieceCard key={piece.id} piece={piece} onOpen={setSelected} />
        ))}
      </main>

      {selected && (
        <PieceModal piece={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}
