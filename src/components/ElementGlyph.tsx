import type { ReactElement } from 'react'

export type Element = 'fire' | 'air' | 'water' | 'earth'

export const elementMeta: Record<
  Element,
  { pillar: string; label: string; quality: string; color: string; hi: string }
> = {
  fire: { pillar: 'POWER', label: 'FIRE', quality: 'Power', color: 'var(--color-fire)', hi: 'var(--color-fire-hi)' },
  air: { pillar: 'FLEX', label: 'AIR', quality: 'Control', color: 'var(--color-air)', hi: 'var(--color-air-hi)' },
  water: { pillar: 'BALANCE', label: 'WATER', quality: 'Flow', color: 'var(--color-water)', hi: 'var(--color-water-hi)' },
  earth: { pillar: 'CORE', label: 'EARTH', quality: 'Stability', color: 'var(--color-earth)', hi: 'var(--color-earth-hi)' },
}

const inner: Record<Element, ReactElement> = {
  // fire — rising angular flame strokes
  fire: (
    <g>
      <path d="M24 15l6 8-4 1 3 6-9-8 4-1z" />
    </g>
  ),
  // air — concentric squared control marks
  air: (
    <g>
      <rect x="18" y="18" width="12" height="12" rx="1" />
      <rect x="21.5" y="21.5" width="5" height="5" rx="0.5" />
    </g>
  ),
  // water — flowing wave lines
  water: (
    <g>
      <path d="M15 22c2.2 0 2.2-2.4 4.5-2.4S21.7 22 24 22s2.2-2.4 4.5-2.4S30.7 22 33 22" />
      <path d="M15 27c2.2 0 2.2-2.4 4.5-2.4S21.7 27 24 27s2.2-2.4 4.5-2.4S30.7 27 33 27" />
    </g>
  ),
  // earth — stacked stability bars
  earth: (
    <g>
      <path d="M17 20h14M18.5 24h11M20 28h8" />
    </g>
  ),
}

export function ElementGlyph({
  element,
  size = 48,
  active = true,
}: {
  element: Element
  size?: number
  active?: boolean
}) {
  const c = active ? elementMeta[element].color : 'var(--color-border-strong)'
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <rect
        x="8"
        y="8"
        width="32"
        height="32"
        rx="4"
        transform="rotate(45 24 24)"
        stroke={c}
        strokeWidth="1.4"
      />
      <g
        stroke={c}
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={element === 'fire' ? c : 'none'}
      >
        {inner[element]}
      </g>
    </svg>
  )
}
