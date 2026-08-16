import { useEffect, useState } from 'react'

type ToastItem = { id: number; msg: string }

let counter = 0
const listeners = new Set<(t: ToastItem) => void>()

/** Fire a transient toast from anywhere in the app. */
export function toast(msg: string) {
  const item = { id: ++counter, msg }
  listeners.forEach((l) => l(item))
}

/** Convenience for the many not-yet-built surfaces. */
export function soon(feature: string) {
  toast(`${feature} · em breve`)
}

export function Toaster() {
  const [items, setItems] = useState<ToastItem[]>([])

  useEffect(() => {
    const add = (t: ToastItem) => {
      setItems((cur) => [...cur, t])
      setTimeout(() => setItems((cur) => cur.filter((x) => x.id !== t.id)), 2200)
    }
    listeners.add(add)
    return () => {
      listeners.delete(add)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-24 z-50 flex flex-col items-center gap-2 px-6">
      {items.map((t) => (
        <div
          key={t.id}
          className="fade-up max-w-full rounded-[10px] border border-gold/40 bg-onyx/95 backdrop-blur px-4 py-2.5 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.8)]"
        >
          <span className="font-mono uppercase tracking-[0.1em] text-[11px] text-gold-hi">
            {t.msg}
          </span>
        </div>
      ))}
    </div>
  )
}
