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

  return (
    <>
      <FilterBar active={filter} onChange={setFilter} />

      <main className="collection" id="collection">
        {visible.map((piece) => (
          <PieceCard key={piece.id} piece={piece} onOpen={setSelected} />
        ))}
      </main>

      {selected && (
        <PieceModal piece={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}
