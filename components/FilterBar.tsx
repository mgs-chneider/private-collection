'use client';

import { CATEGORIES, type Category } from '@/lib/pieces';

export type Filter = 'all' | Category;

interface Props {
  active: Filter;
  onChange: (filter: Filter) => void;
}

export default function FilterBar({ active, onChange }: Props) {
  return (
    <div className="filter-bar" role="tablist" aria-label="Kategorien">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          type="button"
          role="tab"
          aria-selected={active === cat.key}
          className={`filter-btn ${active === cat.key ? 'active' : ''}`}
          onClick={() => onChange(cat.key)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
