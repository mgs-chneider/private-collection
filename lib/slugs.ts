import { pieces } from './pieces';

export function toSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/ä/g, 'ae')
    .replace(/ö/g, 'oe')
    .replace(/ü/g, 'ue')
    .replace(/ß/g, 'ss')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

export function pieceBySlug(slug: string) {
  return pieces.find((p) => toSlug(p.title) === slug) ?? null;
}

export function allSlugs() {
  return pieces.map((p) => ({ slug: toSlug(p.title) }));
}
