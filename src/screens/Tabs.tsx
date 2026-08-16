import { useState } from 'react'
import { AppHeader } from '../components/AppHeader'
import { Photo } from '../components/Photo'
import {
  Button,
  Card,
  Chip,
  HexBadge,
  MicroLabel,
  ProgressBar,
  ProgressRing,
  SectionHeader,
} from '../components/ui'
import {
  ArrowLeft,
  BellIcon,
  BoltIcon,
  ChevronRight,
  FireIcon,
  HexIcon,
  LockIcon,
  PlayIcon,
  TargetIcon,
  WaveIcon,
} from '../components/icons'
import { ElementGlyph, elementMeta } from '../components/ElementGlyph'
import { soon } from '../components/toast'
import { useLang } from '../i18n'
import {
  achievements,
  bodyAreas,
  challengeHero,
  challenges,
  coreTrend,
  metrics,
  personalBests,
  profileMenu,
  programs,
  todaysSession,
  trainingFilters,
  user,
} from '../data'

/* ---------------- Training ---------------- */
export function Training({
  onSession,
  onMobility,
  onProfile,
  onBell,
}: {
  onSession: () => void
  onMobility: () => void
  onProfile: () => void
  onBell: () => void
}) {
  const { t } = useLang()
  const [filter, setFilter] = useState('Today')
  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader title={t('training.title')} subtitle={t('training.subtitle')} onProfile={onProfile} onBell={onBell} />
      <div className="flex gap-2 px-5 overflow-x-auto scroll-area pb-1">
        {trainingFilters.map((f) => (
          <Chip key={f} active={filter === f} onClick={() => setFilter(f)}>
            {f}
          </Chip>
        ))}
      </div>

      <div className="px-5 mt-5 space-y-6">
        <div>
          <SectionHeader title="Today's Session" />
          <Card className="relative overflow-hidden h-[150px]" onClick={onSession}>
            <Photo src={todaysSession.img} alt="Session" className="absolute inset-0" />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
            <div className="relative h-full flex flex-col justify-center px-5">
              <h3 className="font-display uppercase tracked-sm text-[20px] font-700">{todaysSession.title}</h3>
              <div className="flex gap-3 mt-1 font-mono text-[10px] uppercase tracking-[0.1em] text-gold-hi">
                <span>{todaysSession.duration}</span>
                <span className="text-sub">{todaysSession.difficulty}</span>
              </div>
              <div className="mt-3">
                <Button className="h-10 w-fit px-5" onClick={onSession}>
                  <PlayIcon width={14} height={14} /> Start
                </Button>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <SectionHeader title="Programs" />
          <div className="space-y-3">
            {programs.map((p) => (
              <Card
                key={p.id}
                className={`p-4 ${p.locked ? 'opacity-70' : ''}`}
                onClick={p.locked ? () => soon(`${p.name} locked`) : onSession}
              >
                <div className="flex items-center gap-3">
                  <HexBadge size={44} active={!p.locked}>
                    {p.locked ? <LockIcon width={16} height={16} /> : <BoltIcon width={18} height={18} />}
                  </HexBadge>
                  <div className="flex-1">
                    <div className="font-display uppercase tracked-sm text-[15px] font-600">{p.name}</div>
                    <div className="text-[11px] text-muted">{p.tag}</div>
                  </div>
                  {!p.locked && <ChevronRight width={18} height={18} className="text-muted" />}
                </div>
                {!p.locked && (
                  <div className="mt-3 flex items-center gap-3">
                    <ProgressBar value={p.progress} className="flex-1" />
                    <span className="font-mono text-[10px] text-sub whitespace-nowrap">{p.sessions}</span>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        <div>
          <SectionHeader title="Training Library" />
          <div className="grid grid-cols-2 gap-3">
            {[
              { c: 'Strength', icon: <BoltIcon />, go: onSession },
              { c: 'Core', icon: <HexIcon />, go: onSession },
              { c: 'Mobility', icon: <WaveIcon />, go: onMobility },
              { c: 'Recovery', icon: <TargetIcon />, go: onMobility },
            ].map(({ c, icon, go }) => (
              <Card key={c} className="p-4 h-24 flex flex-col justify-between" onClick={go}>
                {icon}
                <div className="font-display uppercase tracked-sm text-[14px] font-600">{c}</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Mobility (pushed screen) ---------------- */
export function Mobility({ onBack }: { onBack: () => void }) {
  return (
    <div className="h-full overflow-y-auto scroll-area pb-10 fade">
      <div className="flex items-center gap-4 px-5 pt-5 pb-1">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <div>
          <h1 className="font-display uppercase tracked text-[22px] font-700 leading-none">Mobility</h1>
          <p className="text-[12px] text-sub mt-1">Move better. Perform longer.</p>
        </div>
      </div>
      <div className="px-5 space-y-6 mt-2">
        <Card className="relative overflow-hidden h-[130px]">
          <Photo
            src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=500&fit=crop&auto=format"
            alt="Mobility reset"
            className="absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
          <div className="relative h-full flex flex-col justify-center px-5">
            <MicroLabel>Daily Mobility</MicroLabel>
            <h3 className="font-display uppercase tracked-sm text-[22px] font-700 mt-1">8 Min Reset</h3>
            <div className="mt-3">
              <Button className="h-10 w-fit px-6" onClick={() => soon('8 min reset')}>
                Start
              </Button>
            </div>
          </div>
        </Card>

        <div>
          <SectionHeader title="Body Areas" />
          <div className="grid grid-cols-3 gap-3">
            {bodyAreas.map((a) => (
              <Card key={a} className="p-3 h-20 flex flex-col items-center justify-center gap-2" onClick={() => soon(`${a} mobility`)}>
                <HexIcon width={22} height={22} className="text-gold/80" />
                <span className="font-mono uppercase tracking-[0.08em] text-[10px] text-sub text-center">{a}</span>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-5 flex items-center gap-5">
          <ProgressRing value={68} size={104} stroke={7}>
            <span className="font-display text-[26px] font-700 leading-none">68</span>
            <MicroLabel className="mt-0.5">/ 100</MicroLabel>
          </ProgressRing>
          <div className="flex-1">
            <MicroLabel>Mobility Score</MicroLabel>
            <div className="font-display uppercase tracked-sm text-[18px] font-600 text-warning mt-1">Moderate</div>
            <p className="text-[12px] text-muted mt-2 leading-relaxed">
              Hip and ankle mobility require attention.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

/* ---------------- Progress ---------------- */
const ranges = ['7D', '30D', '90D', 'ALL']
export function Progress({ onProfile, onBell }: { onProfile: () => void; onBell: () => void }) {
  const { t } = useLang()
  const [range, setRange] = useState('30D')
  const max = Math.max(...coreTrend)
  const min = Math.min(...coreTrend)
  const pts = coreTrend
    .map((v, i) => {
      const x = (i / (coreTrend.length - 1)) * 100
      const y = 100 - ((v - min) / (max - min || 1)) * 88 - 6
      return `${x},${y}`
    })
    .join(' ')
  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader title={t('progress.title')} onProfile={onProfile} onBell={onBell} />
      <div className="px-5">
        <div className="flex gap-2 mb-5">
          {ranges.map((r) => (
            <Chip key={r} active={range === r} onClick={() => setRange(r)}>
              {r}
            </Chip>
          ))}
        </div>

        <SectionHeader title="Core Score Trend" />
        <Card className="p-5">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-[32px] font-700 leading-none">78</span>
            <span className="font-display text-[13px] text-success">+14 pts</span>
          </div>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-28 mt-3">
            <defs>
              <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#c58a22" stopOpacity="0.35" />
                <stop offset="1" stopColor="#c58a22" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polygon points={`0,100 ${pts} 100,100`} fill="url(#area)" />
            <polyline points={pts} fill="none" stroke="#e2a93b" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          </svg>
        </Card>

        <div className="mt-6">
          <SectionHeader title="Elemental Metrics" />
          <div className="grid grid-cols-2 gap-3">
            {metrics.map((m) => {
              const meta = elementMeta[m.element]
              return (
                <Card key={m.key} className="p-4">
                  <div className="flex items-center justify-between">
                    <ElementGlyph element={m.element} size={30} />
                    <span className="font-display text-[12px] text-success">{m.delta}</span>
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-2">
                    <span className="font-mono uppercase tracking-[0.1em] text-[10px] text-muted">{m.key}</span>
                    <span className="font-mono text-[9px] tracking-[0.12em]" style={{ color: meta.hi }}>
                      {meta.label}
                    </span>
                  </div>
                  <div className="font-display text-[26px] font-700 leading-none mt-1">{m.value}</div>
                  <ProgressBar value={m.value} className="mt-3" color={meta.color} />
                </Card>
              )
            })}
          </div>
        </div>

        <div className="mt-6">
          <SectionHeader title="Training Volume" />
          <Card className="p-5 flex justify-between">
            <div>
              <div className="font-display text-[24px] font-700 leading-none">14</div>
              <MicroLabel className="block mt-1">Sessions</MicroLabel>
            </div>
            <div>
              <div className="font-display text-[24px] font-700 leading-none">8h 42m</div>
              <MicroLabel className="block mt-1">Total time</MicroLabel>
            </div>
            <div>
              <div className="font-display text-[24px] font-700 leading-none text-success">+18%</div>
              <MicroLabel className="block mt-1">vs last month</MicroLabel>
            </div>
          </Card>
        </div>

        <div className="mt-6">
          <SectionHeader title="Personal Bests" />
          <Card className="divide-y divide-border">
            {personalBests.map((b) => (
              <div key={b.name} className="flex justify-between items-center px-5 py-3.5">
                <span className="text-[13px] text-sub">{b.name}</span>
                <span className="font-mono text-[13px] text-gold-hi">{b.value}</span>
              </div>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Challenges ---------------- */
const chalCats = ['ACTIVE', 'WEEKLY', 'COMMUNITY', 'COMPLETED']
export function Challenges({ onProfile, onBell }: { onProfile: () => void; onBell: () => void }) {
  const [cat, setCat] = useState('ACTIVE')
  const list = cat === 'COMPLETED' ? [] : challenges.filter((c) => cat === 'ACTIVE' || c.cat === cat)
  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader title="Challenges" onProfile={onProfile} onBell={onBell} />
      <div className="px-5">
        <Card className="relative overflow-hidden h-[168px]" onClick={() => soon(challengeHero.name)}>
          <Photo src={challengeHero.img} alt="Challenge" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/20" />
          <div className="relative h-full flex flex-col justify-end p-5">
            <span className="font-mono uppercase tracking-[0.14em] text-[10px] text-gold-hi">Featured</span>
            <h3 className="font-display uppercase tracked-sm text-[22px] font-700 mt-1">{challengeHero.name}</h3>
            <div className="flex items-center gap-3 mt-2">
              <ProgressBar value={(challengeHero.progress / challengeHero.total) * 100} className="flex-1" />
              <span className="font-mono text-[11px] text-ink">
                {challengeHero.progress} / {challengeHero.total}
              </span>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-gold-hi mt-2">
              Reward {challengeHero.reward}
            </span>
          </div>
        </Card>

        <div className="flex gap-2 mt-5 overflow-x-auto scroll-area">
          {chalCats.map((c) => (
            <Chip key={c} active={cat === c} onClick={() => setCat(c)}>
              {c}
            </Chip>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {list.length === 0 ? (
            <EmptyState
              title="No completed challenges yet"
              body="Finish an active challenge to earn your first badge."
            />
          ) : (
            list.map((c) => (
              <Card key={c.name} className="p-4" onClick={() => soon(c.name)}>
                <div className="flex items-start gap-3">
                  <HexBadge size={44}>
                    <FlagMini />
                  </HexBadge>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-display uppercase tracked-sm text-[15px] font-600">{c.name}</span>
                      <span className="font-mono text-[10px] text-gold-hi">{c.reward}</span>
                    </div>
                    <p className="text-[12px] text-muted mt-0.5">{c.desc}</p>
                    <div className="flex items-center gap-3 mt-3">
                      <ProgressBar value={c.progress} className="flex-1" />
                      <span className="font-mono text-[10px] text-sub">{c.progress}%</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

function FlagMini() {
  return <BoltIcon width={18} height={18} />
}

export function EmptyState({ title, body, cta, onCta }: { title: string; body: string; cta?: string; onCta?: () => void }) {
  return (
    <Card className="py-12 px-6 flex flex-col items-center text-center">
      <HexBadge size={64} active={false}>
        <HexIcon width={24} height={24} />
      </HexBadge>
      <h3 className="font-display uppercase tracked-sm text-[16px] font-600 mt-4">{title}</h3>
      <p className="text-[12px] text-muted mt-1.5 max-w-[240px]">{body}</p>
      {cta && (
        <div className="mt-5">
          <Button className="h-11" onClick={onCta}>
            {cta}
          </Button>
        </div>
      )}
    </Card>
  )
}

/* ---------------- Profile ---------------- */
export function Profile({
  onBack,
  onRewards,
  onHealth,
  onSettings,
}: {
  onBack: () => void
  onRewards: () => void
  onHealth: () => void
  onSettings: () => void
}) {
  const { t } = useLang()
  const handleMenu = (m: string) => {
    if (m === 'Health Profile') return onHealth()
    if (m === 'Core XP & Rewards') return onRewards()
    if (m === 'Settings') return onSettings()
    soon(t(`menu.${m}`))
  }
  return (
    <div className="h-full overflow-y-auto scroll-area pb-10 fade">
      <div className="flex items-center gap-4 px-5 pt-5 pb-2">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <span className="font-display uppercase tracked text-[15px] text-sub">{t('profile.title')}</span>
      </div>

      <div className="px-5">
        <Card className="p-5 flex items-center gap-4" onClick={onRewards}>
          <div className="h-16 w-16 rounded-full border border-gold/40 bg-elevated flex items-center justify-center">
            <span className="font-display text-[22px] font-700 text-gold-hi">AM</span>
          </div>
          <div className="flex-1">
            <h2 className="font-display uppercase tracked-sm text-[20px] font-700">{user.name}</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="font-mono uppercase tracking-[0.1em] text-[10px] text-gold-hi bg-gold/10 border border-gold/30 rounded-full px-2 py-0.5">
                Level {user.levelNum} · {user.levelTier}
              </span>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <ProgressBar value={(user.xp / user.xpMax) * 100} className="flex-1" />
              <span className="font-mono text-[10px] text-sub whitespace-nowrap">
                {user.xp.toLocaleString()} / {user.xpMax.toLocaleString()} XP
              </span>
            </div>
          </div>
        </Card>

        <div className="mt-6">
          <SectionHeader title="Achievements" />
          <div className="grid grid-cols-4 gap-3">
            {achievements.map((a) => (
              <button
                key={a.name}
                onClick={() => soon(a.name)}
                className="flex flex-col items-center text-center gap-2"
              >
                <HexBadge size={54} active={a.earned}>
                  <HexIcon width={20} height={20} />
                </HexBadge>
                <span className={`font-mono uppercase tracking-[0.06em] text-[8.5px] leading-tight ${a.earned ? 'text-sub' : 'text-muted'}`}>
                  {a.name}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <Card className="divide-y divide-border">
            {profileMenu.map((m) => (
              <button
                key={m}
                onClick={() => handleMenu(m)}
                className={`w-full flex items-center justify-between px-5 py-3.5 text-left transition-colors hover:bg-elevated/50 ${
                  m === 'Sign Out' ? 'text-danger' : 'text-ink'
                }`}
              >
                <span className="text-[14px]">{t(`menu.${m}`)}</span>
                {m !== 'Sign Out' && <ChevronRight width={16} height={16} className="text-muted" />}
              </button>
            ))}
          </Card>
        </div>
      </div>
    </div>
  )
}

/* ---------------- Notifications ---------------- */
export function Notifications({ onBack }: { onBack: () => void }) {
  const { t } = useLang()
  const tone: Record<string, string> = {
    gold: 'text-gold',
    success: 'text-success',
    default: 'text-sub',
  }
  const items = [
    { title: 'Training Reminder', body: 'Your Upper Body Power session is ready.', t: 'gold', time: 'Now' },
    { title: 'Checkpoint Available', body: "You've unlocked the Foundation II assessment.", t: 'success', time: '2h' },
    { title: 'Streak', body: 'One more session to reach a 14-day streak.', t: 'default', time: '1d' },
  ]
  return (
    <div className="h-full overflow-y-auto scroll-area pb-10 fade">
      <div className="flex items-center gap-4 px-5 pt-5 pb-4">
        <button onClick={onBack} className="text-sub hover:text-ink -ml-1">
          <ArrowLeft width={22} height={22} />
        </button>
        <span className="font-display uppercase tracked text-[15px] text-sub">{t('notifications.title')}</span>
      </div>
      <div className="px-5 space-y-3">
        {items.map((n) => (
          <Card key={n.title} className="p-4 flex gap-3" onClick={() => soon(n.title)}>
            <BellIcon width={18} height={18} className={tone[n.t]} />
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="font-display uppercase tracked-sm text-[14px] font-600">{n.title}</span>
                <span className="font-mono text-[10px] text-muted">{n.time}</span>
              </div>
              <p className="text-[12px] text-sub mt-0.5">{n.body}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
