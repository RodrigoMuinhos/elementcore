import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = (props: IconProps) => ({
  width: 22,
  height: 22,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  ...props,
})

export const HexIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 2.5 20 7v10l-8 4.5L4 17V7z" />
  </svg>
)

export const HomeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-4v-6H9v6H5a1 1 0 0 1-1-1z" />
  </svg>
)

export const DumbbellIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 9v6M7 7v10M17 7v10M20 9v6M7 12h10" />
  </svg>
)

export const WaveIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 16c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
    <path d="M2 11c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" opacity=".5" />
  </svg>
)

export const ChartIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 20V10M12 20V4M19 20v-7" />
  </svg>
)

export const FlagIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 21V4M6 4h11l-2 4 2 4H6" />
  </svg>
)

export const UserIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 20c0-3.6 3.1-6 7-6s7 2.4 7 6" />
  </svg>
)

export const BellIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6" />
    <path d="M10 20a2 2 0 0 0 4 0" />
  </svg>
)

export const FireIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3c1 3-2 4-2 7a2 2 0 0 0 4 0c0-1 0-1.5-.5-2.5 2 1 4 3.5 4 7a5.5 5.5 0 1 1-11 0c0-4 3.5-6 5.5-11.5z" />
  </svg>
)

export const ChevronRight = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
)

export const ChevronDown = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export const ArrowLeft = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M19 12H5M11 18l-6-6 6-6" />
  </svg>
)

export const CheckIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="m5 13 4 4 10-11" />
  </svg>
)

export const LockIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <rect x="5" y="11" width="14" height="9" rx="1.5" />
    <path d="M8 11V8a4 4 0 0 1 8 0v3" />
  </svg>
)

export const EyeIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
)

export const PlayIcon = (props: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...props })}>
    <path d="M8 5v14l11-7z" />
  </svg>
)

export const PauseIcon = (props: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...props })}>
    <rect x="6" y="5" width="4" height="14" rx="1" />
    <rect x="14" y="5" width="4" height="14" rx="1" />
  </svg>
)

export const SkipIcon = (props: IconProps) => (
  <svg {...base({ fill: 'currentColor', stroke: 'none', ...props })}>
    <path d="M6 5v14l9-7zM16 5h2v14h-2z" />
  </svg>
)

export const BoltIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M13 3 5 13h5l-1 8 8-10h-5z" />
  </svg>
)

export const TargetIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="12" cy="12" r="0.8" fill="currentColor" />
  </svg>
)

export const MoveIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3v18M3 12h18M12 3 9 6m3-3 3 3M12 21l-3-3m3 3 3-3M3 12l3-3m-3 3 3 3M21 12l-3-3m3 3-3 3" />
  </svg>
)

export const StackIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3 3 8l9 5 9-5zM3 13l9 5 9-5M3 17l9 5 9-5" />
  </svg>
)

export const AppleIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={20} height={20} {...props}>
    <path d="M16.4 12.9c0-2 1.6-3 1.7-3-1-1.3-2.4-1.5-2.9-1.6-1.2-.1-2.4.7-3 .7s-1.6-.7-2.6-.7c-1.3 0-2.6.8-3.3 2-1.4 2.4-.4 6 1 8 .7 1 1.4 2 2.5 2s1.4-.6 2.6-.6 1.5.6 2.6.6 1.8-1 2.5-2c.8-1.1 1.1-2.2 1.1-2.2s-2.2-.8-2.2-3.4zM14.6 6.3c.6-.7 1-1.6.9-2.6-.8 0-1.9.6-2.5 1.3-.5.6-1 1.5-.9 2.4.9.1 1.8-.4 2.5-1.1z" />
  </svg>
)

export const HeartPulseIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 20s-7-4.5-9.2-9C1.3 8 3 4.5 6.3 4.5c2 0 3.2 1.3 3.7 2.5.5-1.2 1.7-2.5 3.7-2.5 3.3 0 5 3.5 3.5 6.5" />
    <path d="M14 14h2l1.5-3 2 6 1.5-3h1" />
  </svg>
)

export const DropIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11z" />
  </svg>
)

export const PlusIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M12 5v14M5 12h14" />
  </svg>
)

export const MinusIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M5 12h14" />
  </svg>
)

export const LeafIcon = (props: IconProps) => (
  <svg {...base(props)}>
    <path d="M4 20c0-8 6-14 16-14 0 10-6 16-16 14z" />
    <path d="M9 15c2-3 5-5 8-6" />
  </svg>
)

export const GoogleIcon = (props: IconProps) => (
  <svg viewBox="0 0 24 24" width={20} height={20} {...props}>
    <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.2 1.4-1.6 4.2-5.5 4.2-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.9 1.5l2.6-2.5C16.9 3.6 14.7 2.6 12 2.6 6.9 2.6 2.8 6.7 2.8 11.9S6.9 21.2 12 21.2c5.3 0 8.8-3.7 8.8-9 0-.6-.1-1.1-.2-1.6z" />
  </svg>
)
