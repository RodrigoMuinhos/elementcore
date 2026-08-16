import { BellIcon, UserIcon } from './icons'
import { MicroLabel } from './ui'

export function AppHeader({
  label,
  title,
  subtitle,
  onProfile,
  onBell,
  notif = true,
}: {
  label?: string
  title: string
  subtitle?: string
  onProfile?: () => void
  onBell?: () => void
  notif?: boolean
}) {
  return (
    <div className="flex items-start justify-between px-5 pt-5 pb-3">
      <div>
        {label && <MicroLabel>{label}</MicroLabel>}
        <h1 className="font-display uppercase tracked text-[26px] font-700 leading-none mt-1">
          {title}
        </h1>
        {subtitle && <p className="text-[13px] text-sub mt-1.5">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-2 pt-1">
        {onBell && (
          <button
            onClick={onBell}
            className="relative h-10 w-10 rounded-[10px] border border-border flex items-center justify-center text-sub hover:text-ink"
            aria-label="Notifications"
          >
            <BellIcon width={19} height={19} />
            {notif && (
              <span className="absolute top-2 right-2.5 h-1.5 w-1.5 rounded-full bg-gold" />
            )}
          </button>
        )}
        {onProfile && (
          <button
            onClick={onProfile}
            className="h-10 w-10 rounded-full border border-gold/40 bg-elevated flex items-center justify-center text-gold-hi hover:border-gold"
            aria-label="Profile"
          >
            <UserIcon width={20} height={20} />
          </button>
        )}
      </div>
    </div>
  )
}
