import { useEffect, useState } from 'react'
import { Photo } from '../components/Photo'
import { Button, Card, Chip, MicroLabel, ProgressBar, ProgressRing } from '../components/ui'
import {
  ArrowLeft,
  CheckIcon,
  HexIcon,
  PauseIcon,
  PlayIcon,
  SkipIcon,
} from '../components/icons'
import { exercises, todaysSession } from '../data'
import { soon } from '../components/toast'
import { ExerciseVideoPlayer } from '../components/media'

/* ---------------- Exercise detail ---------------- */
export function ExerciseDetail({
  index,
  onBack,
  onStart,
}: {
  index: number
  onBack: () => void
  onStart: () => void
}) {
  const ex = exercises[index] ?? exercises[0]
  return (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-sub truncate">
          {ex.category}
        </span>
      </div>

      <div className="flex-1 overflow-y-auto scroll-area px-5 pb-28">
        <ExerciseVideoPlayer src={ex.video} poster={ex.photo} coach={ex.coach} duration={ex.duration} />

        <h1 className="font-display uppercase tracked-sm text-[26px] font-700 leading-none mt-4">
          {ex.name}
        </h1>

        <div className="grid grid-cols-3 gap-2.5 mt-4">
          {[
            [String(ex.sets), 'Sets'],
            [ex.reps, 'Reps'],
            [ex.rest, 'Rest'],
          ].map(([v, l]) => (
            <Card key={l} className="py-3 text-center">
              <div className="font-display text-[17px] font-700 leading-none">{v}</div>
              <MicroLabel className="block mt-1.5">{l}</MicroLabel>
            </Card>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <Chip tone="gold">{ex.difficulty}</Chip>
          <Chip>{ex.equipment}</Chip>
          {ex.muscles.map((m) => (
            <Chip key={m}>{m}</Chip>
          ))}
        </div>

        <div className="mt-6">
          <MicroLabel>How to perform</MicroLabel>
          <p className="text-[13px] text-sub leading-relaxed mt-2">{ex.instructions}</p>
        </div>

        <div className="mt-6">
          <MicroLabel>Common mistakes</MicroLabel>
          <div className="mt-2 space-y-2">
            {ex.mistakes.map((m) => (
              <div key={m} className="flex items-start gap-2.5 text-[13px] text-sub">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-danger shrink-0" />
                {m}
              </div>
            ))}
          </div>
        </div>

        <Card className="p-4 mt-6 border-gold/30 bg-gold/5">
          <MicroLabel className="text-gold-hi">Coach note · {ex.coach}</MicroLabel>
          <p className="text-[13px] text-ink mt-1.5 leading-relaxed">{ex.coachNote}</p>
        </Card>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-bg via-bg to-transparent">
        <Button full onClick={onStart}>
          Start This Exercise
        </Button>
      </div>
    </div>
  )
}

/* ---------------- Workout detail ---------------- */
export function WorkoutDetail({
  onStart,
  onBack,
  onExercise,
}: {
  onStart: () => void
  onBack: () => void
  onExercise: (index: number) => void
}) {
  return (
    <div className="h-full flex flex-col">
      <div className="relative h-52 shrink-0">
        <Photo src={todaysSession.img} alt="Workout" className="absolute inset-0" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-bg/20" />
        <button
          onClick={onBack}
          className="absolute top-5 left-5 h-10 w-10 rounded-full bg-bg/60 backdrop-blur flex items-center justify-center text-ink"
        >
          <ArrowLeft width={20} height={20} />
        </button>
        <div className="absolute bottom-4 left-5 right-5">
          <h1 className="font-display uppercase tracked-sm text-[26px] font-700 leading-none">
            {todaysSession.title}
          </h1>
          <div className="flex gap-2 mt-3">
            <Chip tone="gold">{todaysSession.duration}</Chip>
            <Chip>{todaysSession.difficulty}</Chip>
            <Chip>Strength</Chip>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scroll-area px-5 pt-5 pb-28">
        <MicroLabel>Objectives</MicroLabel>
        <div className="flex flex-wrap gap-2 mt-2">
          {['Explosive strength', 'Shoulder control', 'Core stabilization'].map((o) => (
            <span key={o} className="text-[12px] text-sub bg-elevated border border-border rounded-full px-3 py-1.5">
              {o}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <MicroLabel>Exercise list</MicroLabel>
          <div className="mt-3 space-y-2.5">
            {exercises.map((e, i) => (
              <Card key={e.name} onClick={() => onExercise(i)} className="p-2.5 pr-3.5 flex items-center gap-3">
                <Photo src={e.photo} alt={e.name} className="h-14 w-14 rounded-[10px] shrink-0" />
                <div className="flex-1">
                  <div className="font-display uppercase tracked-sm text-[14px] font-600">{e.name}</div>
                  <div className="font-mono text-[10px] text-muted mt-0.5">
                    {e.detail} · {e.sets} sets · {e.target}
                  </div>
                </div>
                <PlayIcon width={16} height={16} className="text-gold" />
              </Card>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-bg via-bg to-transparent">
        <Button full onClick={onStart}>
          Start Workout
        </Button>
      </div>
    </div>
  )
}

/* ---------------- Workout player ---------------- */
export function WorkoutPlayer({ onComplete, onBack }: { onComplete: () => void; onBack: () => void }) {
  const [idx, setIdx] = useState(2)
  const [set, setSet] = useState(2)
  const [seconds, setSeconds] = useState(37)
  const [running, setRunning] = useState(true)
  const total = exercises.length
  const ex = exercises[idx]

  useEffect(() => {
    if (!running) return
    const t = setInterval(() => setSeconds((s) => (s > 0 ? s - 1 : 0)), 1000)
    return () => clearInterval(t)
  }, [running])

  const fmt = (s: number) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`

  const next = () => {
    if (idx < total - 1) {
      setIdx((i) => i + 1)
      setSeconds(37)
      setSet(1)
    } else {
      onComplete()
    }
  }
  const prev = () => idx > 0 && setIdx((i) => i - 1)

  return (
    <div className="h-full flex flex-col">
      <div className="px-5 pt-5">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
            <ArrowLeft width={22} height={22} />
          </button>
          <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-sub">
            Exercise {idx + 1} / {total}
          </span>
        </div>
        <ProgressBar value={((idx + 1) / total) * 100} className="mt-3" />
      </div>

      <div className="flex-1 overflow-y-auto scroll-area px-5 pt-5 pb-6">
        <Card className="relative overflow-hidden h-40">
          <Photo src={ex.photo} alt={ex.name} className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 to-transparent" />
        </Card>

        <h1 className="font-display uppercase tracked-sm text-[24px] font-700 mt-4">{ex.name}</h1>
        <div className="flex gap-4 mt-1 font-mono text-[11px] uppercase tracking-[0.1em] text-gold-hi">
          <span>{ex.detail.includes(':') ? ex.detail : `${ex.detail}`}</span>
          <span className="text-sub">Set {set} of {ex.sets}</span>
        </div>

        <div className="flex justify-center my-7">
          <ProgressRing value={(seconds / 37) * 100} size={168} stroke={9}>
            <span className="font-display text-[46px] font-700 leading-none tabular-nums">{fmt(seconds)}</span>
            <MicroLabel className="mt-1">Remaining</MicroLabel>
          </ProgressRing>
        </div>

        <Card className="p-4 border-gold/30 bg-gold/5">
          <MicroLabel className="text-gold-hi">Coaching Cue</MicroLabel>
          <p className="text-[13px] text-ink mt-1.5 leading-relaxed">{ex.coachNote}</p>
        </Card>

        <div className="flex flex-wrap gap-2 mt-4">
          {ex.muscles.map((t) => (
            <Chip key={t} tone="gold">
              {t}
            </Chip>
          ))}
        </div>
      </div>

      <div className="px-5 pb-6 pt-2 flex items-center justify-center gap-5">
        <button
          onClick={prev}
          className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-sub hover:text-ink rotate-180"
        >
          <SkipIcon width={18} height={18} />
        </button>
        <button
          onClick={() => setRunning((r) => !r)}
          className="h-16 w-16 rounded-full bg-gold text-bg flex items-center justify-center shadow-[0_8px_28px_-8px_rgba(197,138,34,0.8)] active:scale-95 transition-transform"
        >
          {running ? <PauseIcon width={24} height={24} /> : <PlayIcon width={24} height={24} />}
        </button>
        <button
          onClick={next}
          className="h-12 w-12 rounded-full border border-border flex items-center justify-center text-sub hover:text-ink"
        >
          <SkipIcon width={18} height={18} />
        </button>
      </div>
    </div>
  )
}

/* ---------------- Workout complete ---------------- */
export function WorkoutComplete({ onDone, onPerformance }: { onDone: () => void; onPerformance: () => void }) {
  return (
    <div className="h-full flex flex-col items-center justify-center px-6 hex-field text-center">
      <div className="fade-up flex flex-col items-center w-full">
        <div className="h-20 w-20 rounded-full bg-gold/15 border border-gold flex items-center justify-center">
          <CheckIcon width={40} height={40} className="text-gold" strokeWidth={2} />
        </div>
        <h1 className="font-display uppercase tracked text-[26px] font-700 mt-5">Session Complete</h1>
        <p className="text-[13px] text-sub mt-1">Consistency builds capacity.</p>

        <div className="font-display text-[40px] font-700 text-gold-hi mt-5">+320 XP</div>

        <div className="grid grid-cols-3 gap-3 w-full mt-6">
          {[
            ['42 min', 'Duration'],
            ['6', 'Exercises'],
            ['428', 'kcal'],
          ].map(([v, l]) => (
            <Card key={l} className="py-4">
              <div className="font-display text-[20px] font-700">{v}</div>
              <MicroLabel className="block mt-1">{l}</MicroLabel>
            </Card>
          ))}
        </div>

        <Card className="w-full p-4 mt-3 flex items-center justify-between">
          <MicroLabel>Core Score</MicroLabel>
          <div className="flex items-center gap-2 font-display font-700">
            <span className="text-muted text-[20px]">78</span>
            <span className="text-gold-hi">→</span>
            <span className="text-[24px] text-gold-hi">79</span>
          </div>
        </Card>

        <div className="w-full mt-6 space-y-3">
          <Button full onClick={onPerformance}>
            View Performance
          </Button>
          <Button variant="secondary" full onClick={onDone}>
            Done
          </Button>
        </div>
      </div>
    </div>
  )
}
