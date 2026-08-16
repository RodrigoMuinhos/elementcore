import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button, Card, MicroLabel, ProgressBar, ProgressRing, SectionHeader, Select, Toggle } from '../components/ui'
import { DropIcon, LeafIcon, MinusIcon, PlusIcon, ArrowLeft } from '../components/icons'
import { Photo } from '../components/Photo'
import { MealPhotoUploader } from '../components/media'
import { soon, toast } from '../components/toast'
import { calorieGoal, coachPlan, feelings, macros, mealLog, waterGoalMl, type Meal } from '../data'
import { useLang } from '../i18n'

const MEAL_TYPES = ['Breakfast', 'Snack', 'Lunch', 'Pre-workout', 'Dinner']

/* ---------------- Nutrition tab ---------------- */
export function Wellness({ onProfile, onBell }: { onProfile: () => void; onBell: () => void }) {
  const { t } = useLang()
  const [feeling, setFeeling] = useState('good')
  const [waterMl, setWaterMl] = useState(2000)
  const [reminder, setReminder] = useState(true)
  const [log, setLog] = useState<Meal[]>(mealLog)
  const [adding, setAdding] = useState(false)

  const logged = log.reduce((s, m) => s + m.kcal, 0)
  const remaining = Math.max(0, calorieGoal - logged)
  const waterPct = (waterMl / waterGoalMl) * 100

  const addMeal = (m: Meal) => {
    setLog((cur) => [m, ...cur])
    setAdding(false)
    toast('Meal logged · +20 XP')
  }

  if (adding) return <AddMeal onSave={addMeal} onBack={() => setAdding(false)} nextId={log.length + 100} />

  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader title={t('nutrition.title')} subtitle={t('nutrition.subtitle')} onProfile={onProfile} onBell={onBell} />

      <div className="px-5 space-y-6 mt-1">
        {/* Daily check-in */}
        <div>
          <SectionHeader title="How do you feel?" />
          <Card className="p-4">
            <div className="flex justify-between gap-2">
              {feelings.map((f) => {
                const on = feeling === f.id
                return (
                  <button key={f.id} onClick={() => setFeeling(f.id)} className="flex-1 flex flex-col items-center gap-2">
                    <span
                      className="h-9 w-9 rounded-full border-2 transition-all"
                      style={{
                        borderColor: on ? f.color : 'var(--color-border-strong)',
                        background: on ? f.color : 'transparent',
                        boxShadow: on ? `0 0 16px -4px ${f.color}` : 'none',
                      }}
                    />
                    <span
                      className="font-mono uppercase tracking-[0.06em] text-[9px]"
                      style={{ color: on ? f.color : 'var(--color-muted)' }}
                    >
                      {f.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Calories */}
        <div>
          <SectionHeader
            title="Today's Nutrition"
            action={
              <button onClick={() => setAdding(true)} className="font-mono uppercase tracking-[0.1em] text-[10px] text-gold-hi flex items-center gap-1">
                <PlusIcon width={13} height={13} /> Add meal
              </button>
            }
          />
          <Card className="p-5">
            <div className="flex items-end justify-between">
              <div>
                <div className="font-display text-[32px] font-700 leading-none tabular-nums">{logged.toLocaleString()}</div>
                <MicroLabel className="block mt-1">of {calorieGoal.toLocaleString()} kcal</MicroLabel>
              </div>
              <div className="text-right">
                <div className="font-display text-[18px] font-700 text-gold-hi tabular-nums">{remaining.toLocaleString()}</div>
                <MicroLabel className="block mt-1">remaining</MicroLabel>
              </div>
            </div>
            <ProgressBar value={(logged / calorieGoal) * 100} className="mt-3" />
            <div className="grid grid-cols-3 gap-3 mt-5">
              {macros.map((m) => (
                <div key={m.key}>
                  <div className="flex justify-between items-baseline mb-1">
                    <span className="font-mono uppercase tracking-[0.06em] text-[9px] text-muted">{m.key}</span>
                    <span className="font-display text-[11px] text-ink">{m.value}g</span>
                  </div>
                  <ProgressBar value={(m.value / m.goal) * 100} color={m.color} />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Water tracker */}
        <div>
          <SectionHeader title="Hydration" />
          <Card className="p-5">
            <div className="flex items-center gap-5">
              <ProgressRing value={waterPct} size={112} stroke={8}>
                <DropIcon width={18} height={18} className="text-water" />
                <span className="font-display text-[22px] font-700 leading-none mt-1 tabular-nums">
                  {(waterMl / 1000).toFixed(1)}
                  <span className="text-[12px] text-sub">L</span>
                </span>
                <MicroLabel className="mt-0.5">of {(waterGoalMl / 1000).toFixed(1)}L</MicroLabel>
              </ProgressRing>
              <div className="flex-1 space-y-2">
                <div className="grid grid-cols-2 gap-2">
                  {[250, 500].map((v) => (
                    <button
                      key={v}
                      onClick={() => setWaterMl((w) => Math.min(waterGoalMl + 500, w + v))}
                      className="h-11 rounded-[10px] border border-water/40 bg-water/10 text-water-hi font-mono text-[12px] flex items-center justify-center gap-1 active:scale-95 transition-transform"
                    >
                      <PlusIcon width={14} height={14} /> {v}ml
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => setWaterMl((w) => Math.max(0, w - 250))}
                  className="w-full h-9 rounded-[10px] border border-border text-muted font-mono text-[11px] flex items-center justify-center gap-1 hover:text-sub"
                >
                  <MinusIcon width={13} height={13} /> Remove 250ml
                </button>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
              <div>
                <div className="font-display uppercase tracked-sm text-[13px] font-600 text-ink">Water Reminder</div>
                <p className="font-mono text-[10px] text-muted mt-0.5">
                  {reminder ? 'Every 2h · 08:00 – 20:00' : 'Alerts off'}
                </p>
              </div>
              <Toggle checked={reminder} onChange={setReminder} label="Water reminder" />
            </div>
          </Card>
        </div>

        {/* Food journal */}
        <div>
          <SectionHeader
            title="Food Journal"
            action={<MicroLabel>{log.length} today</MicroLabel>}
          />
          <div className="space-y-2.5">
            {log.map((m) => (
              <Card key={m.id} className="p-2.5 flex items-center gap-3">
                {m.photo ? (
                  <Photo src={m.photo} alt={m.name} className="h-14 w-14 rounded-[10px] shrink-0" />
                ) : (
                  <div className="h-14 w-14 rounded-[10px] shrink-0 bg-elevated flex items-center justify-center">
                    <LeafIcon width={18} height={18} className="text-muted" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2">
                    <span className="font-display uppercase tracked-sm text-[13px] font-600">{m.meal}</span>
                    <span className="font-mono text-[9px] text-muted">{m.time}</span>
                  </div>
                  <div className="text-[12px] text-sub truncate">{m.name}</div>
                  <div className="font-mono text-[9px] text-muted mt-0.5">
                    P{m.protein} · C{m.carbs} · F{m.fat}
                  </div>
                </div>
                <span className="font-mono text-[12px] text-gold-hi shrink-0">{m.kcal}</span>
              </Card>
            ))}
          </div>
        </div>

        {/* Coach plan */}
        <div>
          <SectionHeader
            title="Coach's Plan"
            action={
              <button onClick={() => soon('Request new plan')} className="font-mono uppercase tracking-[0.1em] text-[10px] text-sub">
                Request update
              </button>
            }
          />
          <Card className="p-2.5">
            <div className="flex items-center gap-2 px-2.5 py-2 mb-1">
              <LeafIcon width={16} height={16} className="text-earth" />
              <span className="font-mono uppercase tracking-[0.1em] text-[10px] text-earth">
                From your coach · {coachPlan.phase}
              </span>
              <span className="font-mono text-[9px] text-muted ml-auto">{coachPlan.updated}</span>
            </div>
            <div className="divide-y divide-border">
              {coachPlan.meals.map((m) => (
                <div key={m.meal} className="flex items-center gap-3 px-2.5 py-3">
                  <span className="font-mono text-[10px] text-muted w-11 shrink-0">{m.time}</span>
                  <div className="flex-1">
                    <div className="font-display uppercase tracked-sm text-[12px] font-600">{m.meal}</div>
                    <div className="text-[12px] text-sub">{m.name}</div>
                  </div>
                  <span className="font-mono text-[11px] text-gold-hi">{m.kcal}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Add meal (photo) flow ---------------- */
function AddMeal({ onSave, onBack, nextId }: { onSave: (m: Meal) => void; onBack: () => void; nextId: number }) {
  const [photo, setPhoto] = useState<string>()
  const [type, setType] = useState('Lunch')
  const [name, setName] = useState('')
  const [kcal, setKcal] = useState('')
  const [note, setNote] = useState('')

  const save = () => {
    onSave({
      id: nextId,
      meal: type,
      name: name.trim() || 'Logged meal',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      kcal: Number(kcal) || 0,
      protein: 0,
      carbs: 0,
      fat: 0,
      photo,
      note: note.trim() || undefined,
    })
  }

  return (
    <div className="h-full flex flex-col fade">
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <h1 className="font-display uppercase tracked-sm text-[18px] font-600">Add Meal</h1>
      </div>

      <div className="flex-1 overflow-y-auto scroll-area px-5 pb-28 space-y-5">
        <MealPhotoUploader value={photo} onChange={setPhoto} />

        <Select label="Meal type" value={type} options={MEAL_TYPES} onChange={setType} />

        <label className="block">
          <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-muted">What did you eat?</span>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Chicken, rice & salad"
            className="mt-1.5 w-full h-[50px] rounded-[10px] bg-elevated border border-border px-4 text-[15px] text-ink placeholder:text-muted focus:border-gold focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-muted">Calories (optional)</span>
          <input
            value={kcal}
            onChange={(e) => setKcal(e.target.value.replace(/\D/g, ''))}
            inputMode="numeric"
            placeholder="kcal"
            className="mt-1.5 w-full h-[50px] rounded-[10px] bg-elevated border border-border px-4 text-[15px] text-ink placeholder:text-muted focus:border-gold focus:outline-none"
          />
        </label>

        <label className="block">
          <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-muted">Note for your coach</span>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            rows={3}
            placeholder="How was your appetite, timing, cravings…"
            className="mt-1.5 w-full rounded-[10px] bg-elevated border border-border px-4 py-3 text-[15px] text-ink placeholder:text-muted focus:border-gold focus:outline-none resize-none"
          />
        </label>
      </div>

      <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-bg via-bg to-transparent">
        <Button full onClick={save}>
          Log Meal
        </Button>
      </div>
    </div>
  )
}
