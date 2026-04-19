import type { MotifKey } from '@/lib/pieces';

const common = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const paths: Record<MotifKey, React.ReactNode> = {
  chair: (
    <path d="M18 10v26M46 10v26M18 12h28M20 36h24l-2 18H22z M14 54h36M16 36v4M48 36v4" />
  ),
  frame: (
    <>
      <rect x="10" y="10" width="44" height="44" />
      <rect x="16" y="16" width="32" height="32" />
      <path d="M10 10l6 6M54 10l-6 6M10 54l6-6M54 54l-6-6" />
    </>
  ),
  lamp: (
    <path d="M22 14h20l-4 18H26zM32 32v18M22 50h20M28 14V8h8v6" />
  ),
  vase: (
    <path d="M22 10h20M24 10c0 6 -6 8 -6 18s8 14 14 14s14 -4 14 -14s-6 -12 -6 -18M22 14h20" />
  ),
  landscape: (
    <>
      <rect x="8" y="12" width="48" height="36" />
      <path d="M8 40l12 -14l10 10l8 -10l18 18M42 22a3 3 0 1 0 0.01 0" />
    </>
  ),
  portrait: (
    <>
      <rect x="10" y="8" width="44" height="48" />
      <circle cx="32" cy="26" r="7" />
      <path d="M18 50c2 -8 8 -12 14 -12s12 4 14 12" />
    </>
  ),
  cabinet: (
    <>
      <rect x="12" y="8" width="40" height="48" />
      <path d="M32 8v48M20 20h4M40 20h4M12 56l-2 4M52 56l2 4" />
    </>
  ),
  carpet: (
    <>
      <rect x="10" y="14" width="44" height="36" />
      <rect x="16" y="20" width="32" height="24" />
      <path d="M22 26h20M22 38h20M32 20v24" />
    </>
  ),
};

export default function Motif({ motif }: { motif: MotifKey }) {
  return (
    <svg className="motif" viewBox="0 0 64 64" aria-hidden="true" {...common}>
      {paths[motif] ?? paths.frame}
    </svg>
  );
}
