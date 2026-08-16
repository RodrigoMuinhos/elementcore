import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Button, Card, Checkbox, MicroLabel, ProgressBar, ProgressRing, SectionHeader, Select, Toggle } from '../components/ui'
import { ArrowLeft, BoltIcon, CheckIcon, LockIcon } from '../components/icons'
import { BeforeAfterSlider, PrivateBadge } from '../components/media'
import { soon, toast } from '../components/toast'
import { useLang, type Lang } from '../i18n'
import {
  anamnesisSections,
  challenge90,
  coreXp,
  healthProfile,
  levels,
  rewards,
  user,
  xpActions,
} from '../data'

/* ---------------- 90 Day Challenge ---------------- */
export function Challenge90({ onProfile, onBell }: { onProfile: () => void; onBell: () => void }) {
  const { t } = useLang()
  const pct = (challenge90.day / challenge90.total) * 100
  const currentPhase = challenge90.phases.find((p, i) => {
    const start = [1, 16, 31, 51, 71][i]
    const end = [15, 30, 50, 70, 90][i]
    return challenge90.day >= start && challenge90.day <= end
  })

  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader label={t('challenge.label')} title={t('challenge.title')} subtitle={t('challenge.subtitle')} onProfile={onProfile} onBell={onBell} />

      <div className="px-5 space-y-6 mt-1">
        {/* Day counter */}
        <Card className="p-5 flex items-center gap-5 hex-field">
          <ProgressRing value={pct} size={120} stroke={9}>
            <span className="font-display text-[34px] font-700 leading-none tabular-nums">{challenge90.day}</span>
            <MicroLabel className="mt-0.5">of {challenge90.total}</MicroLabel>
          </ProgressRing>
          <div className="flex-1">
            <MicroLabel>Current phase</MicroLabel>
            <div className="font-display uppercase tracked-sm text-[19px] font-700 text-gold-hi mt-1">
              {currentPhase?.name ?? 'Foundation'}
            </div>
            <p className="text-[12px] text-sub mt-1">{currentPhase?.range}</p>
            <p className="font-mono text-[10px] text-muted mt-2">{challenge90.total - challenge90.day} days remaining</p>
          </div>
        </Card>

        {/* Metrics */}
        <div>
          <SectionHeader title="Your Progress" />
          <div className="grid grid-cols-2 gap-2.5">
            {challenge90.metrics.map((m) => (
              <Card key={m.key} className="p-4">
                <MicroLabel>{m.key}</MicroLabel>
                <div className="font-display text-[22px] font-700 text-ink mt-1 leading-none">{m.value}</div>
                {m.sub && <p className="font-mono text-[9px] text-muted mt-1">{m.sub}</p>}
              </Card>
            ))}
          </div>
        </div>

        {/* Phases */}
        <div>
          <SectionHeader title="The 5 Phases" />
          <Card className="p-2.5">
            <div className="divide-y divide-border">
              {challenge90.phases.map((p) => {
                const active = p.name === currentPhase?.name
                const done = challenge90.day > [15, 30, 50, 70, 90][p.n - 1]
                return (
                  <div key={p.n} className="flex items-center gap-3 px-2.5 py-3">
                    <span
                      className={`h-7 w-7 rounded-full border flex items-center justify-center font-display text-[12px] font-700 shrink-0 ${
                        done
                          ? 'bg-gold border-gold text-bg'
                          : active
                            ? 'border-gold text-gold-hi'
                            : 'border-border text-muted'
                      }`}
                    >
                      {done ? <CheckIcon width={13} height={13} strokeWidth={2.5} /> : p.n}
                    </span>
                    <div className="flex-1">
                      <div className={`font-display uppercase tracked-sm text-[13px] font-600 ${active ? 'text-gold-hi' : 'text-ink'}`}>
                        {p.name}
                      </div>
                      <div className="font-mono text-[9px] text-muted">{p.range}</div>
                    </div>
                    {active && <MicroLabel className="text-gold-hi">Now</MicroLabel>}
                  </div>
                )
              })}
            </div>
          </Card>
        </div>

        {/* Before / after */}
        <div>
          <SectionHeader title="Transformation" action={<PrivateBadge>Private</PrivateBadge>} />
          <BeforeAfterSlider
            before={challenge90.photos[0].img}
            after={challenge90.photos[1].img}
            beforeLabel={challenge90.photos[0].label}
            afterLabel={challenge90.photos[1].label}
          />
          <Button variant="secondary" full className="mt-3" onClick={() => soon('Upload progress photo')}>
            Add This Week's Photo
          </Button>
        </div>

        {/* Checkpoints */}
        <div>
          <SectionHeader title="Checkpoints" />
          <Card className="p-2.5">
            <div className="divide-y divide-border">
              {challenge90.checkpoints.map((c) => (
                <div key={c.day} className="flex items-center gap-3 px-2.5 py-3">
                  <span
                    className={`h-6 w-6 rounded-full border flex items-center justify-center shrink-0 ${
                      c.done ? 'bg-earth border-earth text-bg' : 'border-border-strong text-transparent'
                    }`}
                  >
                    <CheckIcon width={12} height={12} strokeWidth={2.5} />
                  </span>
                  <div className="flex-1">
                    <div className="font-display uppercase tracked-sm text-[12px] font-600">{c.name}</div>
                    <div className="font-mono text-[9px] text-muted">Day {c.day}</div>
                  </div>
                  {!c.done && challenge90.day >= c.day && (
                    <button onClick={() => soon('Start checkpoint')} className="font-mono uppercase tracking-[0.1em] text-[9px] text-gold-hi">
                      Start
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Rewards / Core XP ---------------- */
export function Rewards({ onBack }: { onBack: () => void }) {
  const currentLevel = user.levelNum
  const pct = (user.xp / user.xpMax) * 100

  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <h1 className="font-display uppercase tracked-sm text-[18px] font-600">Core XP & Rewards</h1>
      </div>

      <div className="px-5 space-y-6">
        {/* XP hero */}
        <Card className="p-5 hex-field">
          <div className="flex items-center justify-between">
            <div>
              <MicroLabel>Total Core XP</MicroLabel>
              <div className="font-display text-[36px] font-700 text-gold-hi leading-none mt-1 tabular-nums">
                {coreXp.toLocaleString()}
              </div>
            </div>
            <div className="h-14 w-14 rounded-full bg-gold/15 border border-gold flex items-center justify-center text-gold">
              <BoltIcon width={26} height={26} />
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between mb-1.5">
              <span className="font-mono text-[10px] text-sub">Lvl {currentLevel} · {user.levelTier}</span>
              <span className="font-mono text-[10px] text-muted">{user.xp.toLocaleString()} / {user.xpMax.toLocaleString()}</span>
            </div>
            <ProgressBar value={pct} />
          </div>
        </Card>

        {/* Levels */}
        <div>
          <SectionHeader title="Level Path" />
          <div className="flex gap-2">
            {levels.map((l) => {
              const on = l.name === user.levelTier
              return (
                <div
                  key={l.n}
                  className={`flex-1 rounded-[10px] border p-3 text-center ${
                    on ? 'border-gold bg-gold/10' : 'border-border'
                  }`}
                >
                  <div className={`font-display text-[15px] font-700 ${on ? 'text-gold-hi' : 'text-muted'}`}>{l.n}</div>
                  <div className={`font-mono uppercase tracking-[0.06em] text-[8px] mt-1 ${on ? 'text-gold-hi' : 'text-muted'}`}>
                    {l.name}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Earn XP */}
        <div>
          <SectionHeader title="Earn XP" />
          <Card className="p-2.5">
            <div className="divide-y divide-border">
              {xpActions.map((a) => (
                <div key={a.action} className="flex items-center justify-between px-2.5 py-3">
                  <span className="text-[13px] text-sub">{a.action}</span>
                  <span className="font-mono text-[12px] text-gold-hi">{a.xp}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Rewards */}
        <div>
          <SectionHeader title="Rewards" />
          <div className="space-y-2.5">
            {[...rewards].sort((a, b) => a.xp - b.xp).map((r) => (
              <Card key={r.name} className="p-4 flex items-center gap-3.5">
                <span
                  className={`h-11 w-11 rounded-[10px] flex items-center justify-center shrink-0 ${
                    r.locked ? 'bg-elevated text-muted' : 'bg-gold/15 text-gold border border-gold/40'
                  }`}
                >
                  {r.locked ? <LockIcon width={19} height={19} /> : <CheckIcon width={20} height={20} />}
                </span>
                <div className="flex-1">
                  <div className="font-display uppercase tracked-sm text-[13px] font-600">{r.name}</div>
                  <p className="text-[12px] text-sub mt-0.5">{r.desc}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="font-mono text-[11px] text-gold-hi">{r.xp.toLocaleString()}</div>
                  <MicroLabel>xp</MicroLabel>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Settings ---------------- */
export function Settings({ onBack }: { onBack: () => void }) {
  const { lang, setLang, t } = useLang()
  const [push, setPush] = useState(true)
  const [metric, setMetric] = useState(true)
  const [sound, setSound] = useState(true)

  const choose = (l: Lang) => {
    setLang(l)
    toast(t('settings.saved'))
  }

  const langs: { id: Lang; label: string; native: string }[] = [
    { id: 'en', label: 'English', native: 'English' },
    { id: 'es', label: 'Spanish', native: 'Español' },
    { id: 'pt', label: 'Portuguese', native: 'Português' },
  ]

  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <h1 className="font-display uppercase tracked-sm text-[18px] font-600">{t('settings.title')}</h1>
      </div>

      <div className="px-5 space-y-6">
        {/* Language selector */}
        <div>
          <SectionHeader title={t('settings.language')} />
          <p className="text-[12px] text-sub -mt-1 mb-3">{t('settings.language.desc')}</p>
          <div className="grid grid-cols-3 gap-2.5">
            {langs.map((l) => {
              const on = lang === l.id
              return (
                <button
                  key={l.id}
                  onClick={() => choose(l.id)}
                  aria-pressed={on}
                  className={`rounded-[12px] border p-3 text-center transition-all active:scale-[0.99] ${
                    on ? 'border-gold bg-gold/10 shadow-[inset_0_0_24px_-10px_rgba(226,169,59,0.45)]' : 'border-border'
                  }`}
                >
                  <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-muted">{l.id}</span>
                  <div className={`font-display uppercase tracked-sm text-[13px] font-700 mt-2 ${on ? 'text-gold-hi' : 'text-ink'}`}>
                    {l.native}
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Preferences */}
        <div>
          <SectionHeader title="Preferences" />
          <Card className="divide-y divide-border">
            <SettingRow label={t('settings.notifications')} desc={t('settings.notifications.desc')} checked={push} onChange={setPush} />
            <SettingRow label={t('settings.units')} desc={t('settings.units.desc')} checked={metric} onChange={setMetric} />
            <SettingRow label={t('settings.sound')} desc={t('settings.sound.desc')} checked={sound} onChange={setSound} />
          </Card>
        </div>
      </div>
    </div>
  )
}

function SettingRow({
  label,
  desc,
  checked,
  onChange,
}: {
  label: string
  desc: string
  checked: boolean
  onChange: (v: boolean) => void
}) {
  return (
    <div className="flex items-center justify-between px-5 py-4">
      <div className="flex-1 pr-4">
        <div className="font-display uppercase tracked-sm text-[13px] font-600 text-ink">{label}</div>
        <p className="font-mono text-[10px] text-muted mt-0.5">{desc}</p>
      </div>
      <Toggle checked={checked} onChange={onChange} label={label} />
    </div>
  )
}

/* ---------------- Level-up modal ---------------- */
export function LevelUpModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-8 fade">
      <div className="w-full rounded-[18px] border border-gold/50 bg-onyx p-7 text-center hex-field fade-up shadow-[0_30px_80px_-20px_rgba(0,0,0,0.9)]">
        <MicroLabel className="text-gold-hi">Level Up</MicroLabel>
        <div className="h-24 w-24 mx-auto mt-4 rounded-full bg-gold/15 border-2 border-gold flex items-center justify-center">
          <span className="font-display text-[42px] font-700 text-gold-hi leading-none">{user.levelNum + 1}</span>
        </div>
        <h1 className="font-display uppercase tracked text-[24px] font-700 mt-5">Control Tier</h1>
        <p className="text-[13px] text-sub mt-1.5">You've unlocked new performance content and a gold avatar frame.</p>
        <div className="font-display text-[26px] font-700 text-gold-hi mt-4">+500 XP</div>
        <Button full className="mt-6" onClick={onClose}>
          Continue
        </Button>
      </div>
    </div>
  )
}

/* ---------------- Health Profile / Anamnesis ---------------- */
export function HealthProfile({ onBack }: { onBack: () => void }) {
  const [open, setOpen] = useState<string | null>(null)
  const doneCount = anamnesisSections.filter((s) => s.done).length

  if (open) return <AnamnesisSection id={open} onBack={() => setOpen(null)} />

  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <h1 className="font-display uppercase tracked-sm text-[18px] font-600">Health Profile</h1>
      </div>

      <div className="px-5 space-y-5">
        <Card className="p-4 border-gold/25 bg-gold/5">
          <div className="flex items-center justify-between">
            <div>
              <MicroLabel className="text-gold-hi">Anamnesis</MicroLabel>
              <p className="text-[13px] text-ink mt-1">{doneCount} of {anamnesisSections.length} complete</p>
            </div>
            <ProgressRing value={(doneCount / anamnesisSections.length) * 100} size={56} stroke={5}>
              <span className="font-display text-[13px] font-700">{Math.round((doneCount / anamnesisSections.length) * 100)}%</span>
            </ProgressRing>
          </div>
        </Card>

        <div className="flex items-center gap-2">
          <PrivateBadge>Shared only with your coach & medical team</PrivateBadge>
        </div>

        <div className="space-y-2.5">
          {anamnesisSections.map((s) => (
            <Card key={s.id} onClick={() => setOpen(s.id)} className="p-4 flex items-center gap-3.5">
              <span
                className={`h-8 w-8 rounded-full border flex items-center justify-center shrink-0 ${
                  s.done ? 'bg-earth border-earth text-bg' : 'border-border-strong text-muted'
                }`}
              >
                {s.done ? <CheckIcon width={15} height={15} strokeWidth={2.5} /> : <span className="text-[11px] font-mono">·</span>}
              </span>
              <div className="flex-1">
                <div className="font-display uppercase tracked-sm text-[13px] font-600">{s.name}</div>
                <p className="text-[12px] text-sub mt-0.5">{s.desc}</p>
              </div>
              <ArrowLeft width={16} height={16} className="text-muted rotate-180" />
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

function AnamnesisSection({ id, onBack }: { id: string; onBack: () => void }) {
  const section = anamnesisSections.find((s) => s.id === id)
  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <div className="flex items-center gap-3 px-5 pt-5 pb-3">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <h1 className="font-display uppercase tracked-sm text-[18px] font-600 truncate">{section?.name}</h1>
      </div>
      <div className="px-5 space-y-5">
        {id === 'personal' && <PersonalSection />}
        {id === 'goals' && <GoalsSection />}
        {id === 'history' && <HistorySection />}
        {id === 'injuries' && <InjuriesSection />}
        {id === 'health' && <HealthHistorySection />}
        {id === 'meds' && <MedsSection />}
        {id === 'substances' && <SubstancesSection />}
        {id === 'consent' && <ConsentSection onBack={onBack} />}
      </div>
    </div>
  )
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between px-2.5 py-3">
      <span className="font-mono uppercase tracking-[0.08em] text-[10px] text-muted">{label}</span>
      <span className="text-[14px] text-ink">{value}</span>
    </div>
  )
}

function PersonalSection() {
  const p = healthProfile.personal
  return (
    <Card className="p-2.5">
      <div className="divide-y divide-border">
        <InfoRow label="Age" value={String(p.age)} />
        <InfoRow label="Sex" value={p.sex} />
        <InfoRow label="Height" value={p.height} />
        <InfoRow label="Weight" value={p.weight} />
        <InfoRow label="Blood type" value={p.blood} />
      </div>
    </Card>
  )
}

function GoalsSection() {
  return (
    <>
      <p className="text-[13px] text-sub leading-relaxed">Your primary goal guides the program your coach builds. Recorded from onboarding.</p>
      <Card className="p-4">
        <MicroLabel className="text-gold-hi">Primary goal</MicroLabel>
        <div className="font-display uppercase tracked-sm text-[16px] font-700 mt-1">Recomposition · Core control</div>
      </Card>
    </>
  )
}

function HistorySection() {
  const [level, setLevel] = useState(healthProfile.experienceLevels[1])
  const [activity, setActivity] = useState(healthProfile.activityLevels[3])
  return (
    <>
      <Select label="Training experience" value={level} options={healthProfile.experienceLevels} onChange={setLevel} />
      <Select label="Daily activity level" value={activity} options={healthProfile.activityLevels} onChange={setActivity} />
    </>
  )
}

function InjuriesSection() {
  const [selected, setSelected] = useState<string[]>(['Right shoulder'])
  const areas = ['Neck', 'Right shoulder', 'Left shoulder', 'Elbows', 'Wrists', 'Lower back', 'Hips', 'Knees', 'Ankles']
  const toggle = (a: string) => setSelected((cur) => (cur.includes(a) ? cur.filter((x) => x !== a) : [...cur, a]))
  return (
    <>
      <p className="text-[13px] text-sub leading-relaxed">Tap any area you want your coach to protect. This adjusts your exercise selection — it is not a diagnosis.</p>
      <div>
        <MicroLabel>Body regions</MicroLabel>
        <div className="flex flex-wrap gap-2 mt-2">
          {areas.map((a) => {
            const on = selected.includes(a)
            return (
              <button
                key={a}
                onClick={() => toggle(a)}
                className={`font-mono uppercase tracking-[0.06em] text-[10px] px-3 py-2 rounded-full border transition-colors ${
                  on ? 'border-danger/60 text-danger bg-danger/10' : 'border-border text-sub'
                }`}
              >
                {a}
              </button>
            )
          })}
        </div>
      </div>
      <div className="space-y-2.5">
        {healthProfile.injuries.map((inj) => (
          <Card key={inj.area} className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-display uppercase tracked-sm text-[13px] font-600">{inj.area}</span>
              <span
                className={`font-mono uppercase tracking-[0.08em] text-[9px] px-2 py-1 rounded-full ${
                  inj.active ? 'text-danger bg-danger/10' : 'text-muted bg-elevated'
                }`}
              >
                {inj.active ? 'Active' : 'Recovered'}
              </span>
            </div>
            <p className="text-[12px] text-sub mt-1.5">{inj.note}</p>
          </Card>
        ))}
      </div>
    </>
  )
}

function HealthHistorySection() {
  const [selected, setSelected] = useState<string[]>(['None'])
  const toggle = (c: string) => setSelected((cur) => (cur.includes(c) ? cur.filter((x) => x !== c) : [...cur, c]))
  return (
    <>
      <p className="text-[13px] text-sub leading-relaxed">Recorded for your coach and medical team. We never diagnose — this only informs safe programming.</p>
      <div>
        <MicroLabel>Conditions</MicroLabel>
        <div className="flex flex-wrap gap-2 mt-2">
          {healthProfile.conditions.map((c) => {
            const on = selected.includes(c)
            return (
              <button
                key={c}
                onClick={() => toggle(c)}
                className={`font-mono uppercase tracking-[0.06em] text-[10px] px-3 py-2 rounded-full border transition-colors ${
                  on ? 'border-gold text-gold-hi bg-gold/10' : 'border-border text-sub'
                }`}
              >
                {c}
              </button>
            )
          })}
        </div>
      </div>
    </>
  )
}

function MedsSection() {
  return (
    <>
      <PrivateBadge>Confidential health data</PrivateBadge>
      <div className="space-y-2.5">
        {healthProfile.medications.map((m) => (
          <Card key={m.name} className="p-4">
            <div className="flex items-center justify-between">
              <span className="font-display uppercase tracked-sm text-[13px] font-600">{m.name}</span>
              <span className="font-mono text-[10px] text-muted">{m.note}</span>
            </div>
            <p className="text-[12px] text-sub mt-1">{m.dose}</p>
          </Card>
        ))}
      </div>
      <Button variant="secondary" full onClick={() => soon('Add medication')}>
        Add Medication
      </Button>
      <p className="font-mono text-[10px] text-muted leading-relaxed">
        This app only records what you enter. It never recommends starting, stopping or changing any medication — talk to your doctor.
      </p>
    </>
  )
}

function SubstancesSection() {
  const [selected, setSelected] = useState<string[]>([])
  const toggle = (id: string) => setSelected((cur) => (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]))
  return (
    <>
      <PrivateBadge>Highly sensitive · coach & medical team only</PrivateBadge>
      <p className="text-[13px] text-sub leading-relaxed">
        Optional. Sharing this helps your coach train you safely. Recorded as-is — no medical advice is given here.
      </p>
      <div className="space-y-2.5">
        {healthProfile.substanceGroups.map((g) => {
          const on = selected.includes(g.id)
          return (
            <Card key={g.id} onClick={() => toggle(g.id)} selected={on} className="p-4 flex items-center gap-3.5">
              <span
                className={`h-6 w-6 rounded-[6px] border flex items-center justify-center shrink-0 ${
                  on ? 'bg-gold border-gold text-bg' : 'border-border-strong text-transparent'
                }`}
              >
                <CheckIcon width={13} height={13} strokeWidth={2.5} />
              </span>
              <div className="flex-1">
                <div className="font-display uppercase tracked-sm text-[12px] font-600">{g.label}</div>
                <p className="font-mono text-[10px] text-muted mt-0.5">{g.hint}</p>
              </div>
            </Card>
          )
        })}
      </div>
      <p className="font-mono text-[10px] text-muted leading-relaxed">
        If you use any of these, tell your physician. This tool does not diagnose, prescribe or advise on dosing.
      </p>
    </>
  )
}

function ConsentSection({ onBack }: { onBack: () => void }) {
  const [terms, setTerms] = useState(false)
  const [share, setShare] = useState(false)
  return (
    <>
      <Card className="p-4">
        <p className="text-[13px] text-sub leading-relaxed">
          I confirm the information provided is accurate and that ELEMENT CORE and my coach may use it to build a safe training and
          nutrition program. I understand this app does not provide medical diagnosis or treatment, and I remain responsible for
          consulting qualified professionals.
        </p>
      </Card>
      <Checkbox checked={terms} onChange={setTerms}>
        I accept the terms and take responsibility for my participation.
      </Checkbox>
      <Checkbox checked={share} onChange={setShare}>
        I consent to sharing my health data with my assigned coach and medical team.
      </Checkbox>
      <Button
        full
        disabled={!terms || !share}
        className={!terms || !share ? 'opacity-40 pointer-events-none' : ''}
        onClick={() => {
          toast('Consent recorded')
          onBack()
        }}
      >
        Confirm & Save
      </Button>
    </>
  )
}
