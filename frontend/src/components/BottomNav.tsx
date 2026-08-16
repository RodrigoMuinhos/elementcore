import { ChartIcon, DumbbellIcon, FlagIcon, LeafIcon, HomeIcon } from './icons'
import { useLang } from '../i18n'

export type Tab = 'home' | 'training' | 'wellness' | 'progress' | 'challenges'

const items: { id: Tab; key: string; Icon: typeof HomeIcon }[] = [
  { id: 'home', key: 'nav.home', Icon: HomeIcon },
  { id: 'training', key: 'nav.training', Icon: DumbbellIcon },
  { id: 'wellness', key: 'nav.nutrition', Icon: LeafIcon },
  { id: 'challenges', key: 'nav.challenge', Icon: FlagIcon },
  { id: 'progress', key: 'nav.progress', Icon: ChartIcon },
]

export function BottomNav({
  active,
  onChange,
}: {
  active: Tab
  onChange: (t: Tab) => void
}) {
  const { t } = useLang()
  return (
    <nav className="absolute bottom-0 inset-x-0 z-30 border-t border-border bg-surface/95 backdrop-blur-md">
      <div className="flex items-stretch px-2 pt-2 pb-3">
        {items.map(({ id, key, Icon }) => {
          const on = active === id
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex-1 flex flex-col items-center gap-1.5 py-1 min-h-[44px]"
              aria-current={on}
            >
              <Icon
                width={21}
                height={21}
                className={on ? 'text-gold' : 'text-muted'}
                strokeWidth={on ? 1.9 : 1.5}
              />
              <span
                className={`font-mono uppercase tracking-[0.08em] text-[9px] ${
                  on ? 'text-gold-hi' : 'text-muted'
                }`}
              >
                {t(key)}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
