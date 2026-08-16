import {
  useEffect,
  useRef,
  useState,
  type ButtonHTMLAttributes,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { CheckIcon, ChevronDown, EyeIcon, HexIcon } from './icons'

/* ---------------- Buttons ---------------- */

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  full?: boolean
}

export function Button({
  variant = 'primary',
  full,
  className = '',
  children,
  ...rest
}: BtnProps) {
  const styles: Record<string, string> = {
    primary:
      'bg-gold text-bg hover:bg-gold-hi active:scale-[0.98] shadow-[0_6px_20px_-8px_rgba(197,138,34,0.7)]',
    secondary:
      'bg-transparent text-ink border border-border-strong hover:border-gold/70 active:scale-[0.98]',
    ghost: 'bg-transparent text-sub hover:text-ink',
  }
  return (
    <button
      className={`font-display tracked-sm uppercase text-[15px] font-600 h-[50px] rounded-[10px] px-6 flex items-center justify-center gap-2 transition-all duration-200 ${
        full ? 'w-full' : ''
      } ${styles[variant]} ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

export function IconButton({
  children,
  className = '',
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`h-11 w-11 rounded-[10px] border border-border bg-elevated/60 text-sub flex items-center justify-center transition-colors hover:text-ink hover:border-border-strong active:scale-95 ${className}`}
      {...rest}
    >
      {children}
    </button>
  )
}

/* ---------------- Card ---------------- */

export function Card({
  children,
  className = '',
  selected = false,
  onClick,
  style,
}: {
  children: ReactNode
  className?: string
  selected?: boolean
  onClick?: () => void
  style?: import('react').CSSProperties
}) {
  return (
    <div
      onClick={onClick}
      style={style}
      className={`rounded-[14px] border bg-surface transition-all duration-200 ${
        selected
          ? 'border-gold shadow-[inset_0_0_24px_-8px_rgba(226,169,59,0.35)]'
          : 'border-border'
      } ${onClick ? 'cursor-pointer active:scale-[0.99]' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

/* ---------------- Labels / headers ---------------- */

export function MicroLabel({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={`font-mono uppercase tracking-[0.16em] text-[10px] text-muted ${className}`}
    >
      {children}
    </span>
  )
}

export function SectionHeader({
  title,
  action,
}: {
  title: string
  action?: ReactNode
}) {
  return (
    <div className="flex items-end justify-between mb-3">
      <h2 className="font-display uppercase tracked-sm text-[17px] font-600 text-ink">
        {title}
      </h2>
      {action}
    </div>
  )
}

/* ---------------- Chip ---------------- */

export function Chip({
  children,
  active = false,
  tone = 'default',
  onClick,
}: {
  children: ReactNode
  active?: boolean
  tone?: 'default' | 'gold' | 'success' | 'danger'
  onClick?: () => void
}) {
  const tones: Record<string, string> = {
    default: 'border-border text-sub',
    gold: 'border-gold/50 text-gold-hi bg-gold/10',
    success: 'border-success/40 text-success bg-success/10',
    danger: 'border-danger/40 text-danger bg-danger/10',
  }
  const activeCls = active
    ? 'border-gold text-bg bg-gold'
    : tones[tone]
  return (
    <button
      onClick={onClick}
      className={`font-mono uppercase tracking-[0.1em] text-[10.5px] px-3 py-1.5 rounded-full border whitespace-nowrap transition-colors ${activeCls}`}
    >
      {children}
    </button>
  )
}

/* ---------------- Progress ---------------- */

export function ProgressBar({
  value,
  className = '',
  tone = 'gold',
  color,
}: {
  value: number
  className?: string
  tone?: 'gold' | 'success'
  /** explicit CSS color (e.g. an element token) overrides tone */
  color?: string
}) {
  const toneCls = tone === 'success' ? 'bg-success' : 'bg-gradient-to-r from-gold-dark to-gold-hi'
  return (
    <div className={`h-1.5 rounded-full bg-elevated overflow-hidden ${className}`}>
      <div
        className={`h-full rounded-full transition-all duration-500 ${color ? '' : toneCls}`}
        style={{
          width: `${Math.min(100, Math.max(0, value))}%`,
          ...(color ? { background: color } : {}),
        }}
      />
    </div>
  )
}

export function ProgressRing({
  value,
  size = 132,
  stroke = 8,
  children,
}: {
  value: number
  size?: number
  stroke?: number
  children?: ReactNode
}) {
  const r = (size - stroke) / 2
  const c = 2 * Math.PI * r
  const [shown, setShown] = useState(0)
  useEffect(() => {
    const t = setTimeout(() => setShown(value), 60)
    return () => clearTimeout(t)
  }, [value])
  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="var(--color-elevated)"
          strokeWidth={stroke}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke="url(#ring-gold)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c - (c * shown) / 100}
          style={{ transition: 'stroke-dashoffset 1s cubic-bezier(0.2,0.7,0.2,1)' }}
        />
        <defs>
          <linearGradient id="ring-gold" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#765015" />
            <stop offset="0.6" stopColor="#c58a22" />
            <stop offset="1" stopColor="#e2a93b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {children}
      </div>
    </div>
  )
}

/* ---------------- Inputs ---------------- */

type FieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string
  password?: boolean
}

export function Field({ label, password, className = '', ...rest }: FieldProps) {
  const [show, setShow] = useState(false)
  return (
    <label className="block">
      <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-muted">
        {label}
      </span>
      <div className="relative mt-1.5">
        <input
          {...rest}
          type={password ? (show ? 'text' : 'password') : rest.type}
          className={`w-full h-[50px] rounded-[10px] bg-elevated border border-border px-4 text-[15px] text-ink placeholder:text-muted transition-colors focus:border-gold focus:outline-none ${className}`}
        />
        {password && (
          <button
            type="button"
            onClick={() => setShow((s) => !s)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-sub"
            aria-label={show ? 'Hide password' : 'Show password'}
          >
            <EyeIcon width={18} height={18} />
          </button>
        )}
      </div>
    </label>
  )
}

export function Checkbox({
  checked,
  onChange,
  children,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  children: ReactNode
}) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className="flex items-start gap-3 text-left"
    >
      <span
        className={`mt-0.5 h-5 w-5 shrink-0 rounded-[6px] border flex items-center justify-center transition-colors ${
          checked ? 'bg-gold border-gold text-bg' : 'border-border-strong text-transparent'
        }`}
      >
        <CheckIcon width={14} height={14} strokeWidth={2.4} />
      </span>
      <span className="text-[13px] leading-relaxed text-sub">{children}</span>
    </button>
  )
}

export function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const h = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', h)
    return () => document.removeEventListener('mousedown', h)
  }, [])
  return (
    <div ref={ref} className="relative">
      <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-muted">
        {label}
      </span>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-1.5 w-full h-[50px] rounded-[10px] bg-elevated border border-border px-4 flex items-center justify-between text-[15px] text-ink transition-colors hover:border-border-strong"
      >
        {value}
        <ChevronDown
          width={18}
          height={18}
          className={`text-muted transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && (
        <div className="absolute z-20 mt-2 w-full rounded-[10px] border border-border bg-elevated overflow-hidden fade">
          {options.map((o) => (
            <button
              key={o}
              onClick={() => {
                onChange(o)
                setOpen(false)
              }}
              className={`w-full text-left px-4 py-3 text-[14px] transition-colors hover:bg-surface ${
                o === value ? 'text-gold-hi' : 'text-sub'
              }`}
            >
              {o}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

/* ---------------- Toggle ---------------- */

export function Toggle({
  checked,
  onChange,
  label,
}: {
  checked: boolean
  onChange: (v: boolean) => void
  label?: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={`relative h-6 w-11 rounded-full border transition-colors ${
        checked ? 'bg-gold/90 border-gold' : 'bg-elevated border-border-strong'
      }`}
    >
      <span
        className={`absolute top-0.5 h-[18px] w-[18px] rounded-full transition-all ${
          checked ? 'left-[22px] bg-bg' : 'left-0.5 bg-sub'
        }`}
      />
    </button>
  )
}

/* ---------------- Hex badge ---------------- */

export function HexBadge({
  size = 56,
  active = true,
  children,
}: {
  size?: number
  active?: boolean
  children: ReactNode
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <HexIcon
        width={size}
        height={size}
        strokeWidth={1.2}
        className={active ? 'text-gold' : 'text-border-strong'}
        style={{ position: 'absolute' }}
      />
      <span className={active ? 'text-gold-hi' : 'text-muted'}>{children}</span>
    </div>
  )
}
