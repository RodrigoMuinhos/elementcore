import { AppHeader } from '../components/AppHeader'
import { Photo } from '../components/Photo'
import { Button, Card, MicroLabel, ProgressBar, ProgressRing, SectionHeader } from '../components/ui'
import { CheckIcon, FireIcon, HexIcon } from '../components/icons'
import { elementMeta } from '../components/ElementGlyph'
import { soon } from '../components/toast'
import { metrics, todaysSession, user, weekTrack } from '../data'
import { useLang } from '../i18n'

export function Home({
  onStart,
  onProfile,
  onBell,
}: {
  onStart: () => void
  onProfile: () => void
  onBell: () => void
}) {
  const { t } = useLang()
  return (
    <div className="h-full overflow-y-auto scroll-area pb-24 fade">
      <AppHeader label={t('home.welcome')} title={user.first} onProfile={onProfile} onBell={onBell} />

      <div className="px-5 space-y-5 mt-1">
        {/* Today's training hero (top of hierarchy) */}
        <Card className="relative overflow-hidden h-[188px]" onClick={onStart}>
          <Photo src={todaysSession.img} alt="Today's session" className="absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/70 to-bg/10" />
          <div className="relative h-full flex flex-col justify-between p-5">
            <div className="flex items-center gap-2">
              <span className="font-mono uppercase tracking-[0.16em] text-[10px] text-gold-hi bg-gold/15 border border-gold/30 rounded-full px-2.5 py-1">
                Today&apos;s Training
              </span>
            </div>
            <div>
              <h2 className="font-display uppercase tracked-sm text-[24px] font-700 leading-none">
                {todaysSession.title}
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <MicroLabel className="text-sub">{todaysSession.category}</MicroLabel>
                <span className="text-muted">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-gold-hi">
                  {todaysSession.duration}
                </span>
                <span className="text-muted">·</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-sub">
                  {todaysSession.difficulty}
                </span>
              </div>
              <p className="text-[11px] text-muted mt-1">{todaysSession.meta}</p>
              <div className="mt-3">
                <Button className="h-11" onClick={onStart}>
                  Start Training
                </Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Core score */}
        <Card className="p-5 flex items-center gap-5">
          <ProgressRing value={user.coreScore} size={122}>
            <span className="font-display text-[34px] font-700 leading-none text-ink">
              {user.coreScore}
              <span className="text-[16px] text-gold-hi">%</span>
            </span>
            <MicroLabel className="mt-1">Core Score</MicroLabel>
          </ProgressRing>
          <div className="flex-1">
            <span className="font-mono uppercase tracking-[0.12em] text-[11px] text-success border border-success/30 bg-success/10 rounded-full px-2.5 py-1">
              Strong
            </span>
            <p className="font-display text-[13px] text-gold-hi mt-3">+3% this week</p>
            <div className="mt-4 space-y-2.5">
              {metrics.map((m) => (
                <div key={m.key}>
                  <div className="flex justify-between items-center text-[11px] mb-1">
                    <span className="font-mono uppercase tracking-[0.1em] text-muted">
                      {m.key}
                      <span className="ml-1.5" style={{ color: elementMeta[m.element].hi }}>
                        {elementMeta[m.element].label}
                      </span>
                    </span>
                    <span className="font-display font-600 text-ink">{m.value}</span>
                  </div>
                  <ProgressBar value={m.value} color={elementMeta[m.element].color} />
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Streak + weekly progress */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4" onClick={() => soon('Streak details')}>
            <FireIcon width={22} height={22} className="text-gold" />
            <MicroLabel className="block mt-3">Weekly Streak</MicroLabel>
            <div className="font-display text-[28px] font-700 leading-none mt-1">
              12 <span className="text-[14px] text-sub">DAYS</span>
            </div>
            <p className="text-[11px] text-muted mt-1">Best: {user.bestStreak} days</p>
          </Card>
          <Card className="p-4" onClick={() => soon('Weekly progress')}>
            <MicroLabel>This week</MicroLabel>
            <div className="flex justify-between mt-3">
              {weekTrack.map((d, i) => (
                <div key={i} className="flex flex-col items-center gap-1.5">
                  <span
                    className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-600 ${
                      d.state === 'done'
                        ? 'bg-gold text-bg'
                        : d.state === 'today'
                          ? 'border border-gold text-gold-hi'
                          : 'border border-border text-muted'
                    }`}
                  >
                    {d.state === 'done' ? <CheckIcon width={12} height={12} strokeWidth={2.5} /> : d.d}
                  </span>
                </div>
              ))}
            </div>
            <p className="font-display text-[13px] text-ink mt-3">
              {user.weeklyDone} / {user.weeklyTarget}{' '}
              <span className="text-muted text-[11px] font-sans">sessions completed</span>
            </p>
          </Card>
        </div>

        {/* Next checkpoint */}
        <div>
          <SectionHeader title="Next Checkpoint" />
          <Card className="p-5" onClick={() => soon('Checkpoint')}>
            <div className="flex items-center gap-3">
              <HexIcon width={26} height={26} className="text-gold" />
              <div className="flex-1">
                <div className="font-display uppercase tracked-sm text-[15px] font-600">
                  Foundation I → Foundation II
                </div>
                <p className="text-[11px] text-muted mt-0.5">
                  Complete 4 more sessions and pass your mobility checkpoint.
                </p>
              </div>
              <span className="font-display text-[18px] font-700 text-gold-hi">72%</span>
            </div>
            <ProgressBar value={72} className="mt-4" />
          </Card>
        </div>
      </div>
    </div>
  )
}
