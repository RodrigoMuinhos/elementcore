import { useRef, useState, type ReactNode } from 'react'
import { PlayIcon, PauseIcon, LockIcon, PlusIcon } from './icons'
import { Photo } from './Photo'

/* ---------------- Exercise video player ---------------- */

export function ExerciseVideoPlayer({
  src,
  poster,
  coach,
  duration,
}: {
  src: string
  poster: string
  coach?: string
  duration?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)
  const [started, setStarted] = useState(false)

  const toggle = () => {
    const v = ref.current
    if (!v) return
    if (v.paused) {
      v.play()
      setPlaying(true)
      setStarted(true)
    } else {
      v.pause()
      setPlaying(false)
    }
  }

  return (
    <div className="relative w-full aspect-video rounded-[14px] overflow-hidden border border-border bg-black group">
      <video
        ref={ref}
        src={src}
        poster={poster}
        playsInline
        onEnded={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      />
      {!started && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />
      )}

      <button
        onClick={toggle}
        aria-label={playing ? 'Pause' : 'Play'}
        className="absolute inset-0 flex items-center justify-center"
      >
        {(!playing || !started) && (
          <span className="h-16 w-16 rounded-full bg-gold text-bg flex items-center justify-center shadow-[0_8px_30px_-6px_rgba(226,169,59,0.7)] active:scale-95 transition-transform">
            {playing ? (
              <PauseIcon width={26} height={26} />
            ) : (
              <PlayIcon width={26} height={26} className="ml-0.5" />
            )}
          </span>
        )}
      </button>

      <div className="absolute bottom-0 inset-x-0 flex items-center justify-between px-3 py-2.5 pointer-events-none">
        <span className="font-mono uppercase tracking-[0.14em] text-[9px] text-gold-hi bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
          {coach ? `${coach} · demo` : 'Technique'}
        </span>
        {duration && (
          <span className="font-mono text-[10px] text-white/90 bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm tabular-nums">
            {duration}
          </span>
        )}
      </div>
    </div>
  )
}

/* ---------------- Meal photo uploader ---------------- */

export function MealPhotoUploader({
  value,
  onChange,
}: {
  value?: string
  onChange: (dataUrl: string) => void
}) {
  const fileRef = useRef<HTMLInputElement>(null)
  const [busy, setBusy] = useState(false)

  const pick = () => fileRef.current?.click()

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (!f) return
    setBusy(true)
    const reader = new FileReader()
    reader.onload = () => {
      onChange(String(reader.result))
      setBusy(false)
    }
    reader.readAsDataURL(f)
  }

  return (
    <div>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={onFile}
        className="hidden"
      />
      {value ? (
        <button
          onClick={pick}
          className="relative w-full aspect-[4/3] rounded-[14px] overflow-hidden border border-border"
        >
          <Photo src={value} alt="Meal" className="absolute inset-0 h-full w-full object-cover" />
          <span className="absolute bottom-2 right-2 font-mono uppercase tracking-[0.12em] text-[9px] text-white bg-black/70 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
            Retake
          </span>
        </button>
      ) : (
        <button
          onClick={pick}
          disabled={busy}
          className="w-full aspect-[4/3] rounded-[14px] border border-dashed border-border-strong bg-elevated/40 flex flex-col items-center justify-center gap-3 hex-field active:scale-[0.99] transition-transform"
        >
          <span className="h-14 w-14 rounded-full border border-gold/40 bg-gold/10 flex items-center justify-center text-gold">
            <PlusIcon width={24} height={24} />
          </span>
          <span className="font-display uppercase tracked-sm text-[13px] font-600 text-ink">
            {busy ? 'Loading…' : 'Take or upload a photo'}
          </span>
          <span className="font-mono text-[10px] text-muted">Snap your plate</span>
        </button>
      )}
    </div>
  )
}

/* ---------------- Before / after slider ---------------- */

export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = 'Before',
  afterLabel = 'After',
}: {
  before: string
  after: string
  beforeLabel?: string
  afterLabel?: string
}) {
  const [pos, setPos] = useState(50)
  return (
    <div className="relative w-full aspect-[4/5] rounded-[14px] overflow-hidden border border-border select-none bg-black">
      <Photo src={after} alt={afterLabel} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${pos}%` }}
      >
        <Photo
          src={before}
          alt={beforeLabel}
          className="absolute inset-0 h-full object-cover"
          style={{ width: '100vw', maxWidth: 420 }}
        />
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-gold"
        style={{ left: `${pos}%` }}
      >
        <span className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-gold text-bg flex items-center justify-center shadow-lg text-[10px] font-mono">
          ↔
        </span>
      </div>
      <span className="absolute top-2 left-2 font-mono uppercase tracking-[0.12em] text-[9px] text-white bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute top-2 right-2 font-mono uppercase tracking-[0.12em] text-[9px] text-gold-hi bg-black/60 px-2 py-1 rounded-full backdrop-blur-sm">
        {afterLabel}
      </span>
      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 h-full w-full opacity-0 cursor-ew-resize"
      />
    </div>
  )
}

/* ---------------- Private content badge ---------------- */

export function PrivateBadge({ children = 'Private · only you & your coach' }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 font-mono uppercase tracking-[0.1em] text-[9px] text-muted">
      <LockIcon width={12} height={12} /> {children}
    </span>
  )
}
