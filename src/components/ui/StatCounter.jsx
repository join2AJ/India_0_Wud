import { useEffect, useRef, useState } from 'react'

const sizes = { md: 44, lg: 64, xl: 88 }

export default function StatCounter({
  value = 0,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1100,
  eyebrow,
  caption,
  size = 'lg',
  onDark = false,
  accent = false,
}) {
  const [display, setDisplay] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const run = () => {
      if (started.current) return
      started.current = true
      const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
      if (reduce) { setDisplay(value); return }
      const t0 = performance.now()
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration)
        const eased = 1 - Math.pow(1 - p, 3)
        setDisplay(value * eased)
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && run()), { threshold: 0.4 })
    io.observe(node)
    return () => io.disconnect()
  }, [value, duration])

  const shown = display.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })

  return (
    <div ref={ref} className="flex flex-col gap-2">
      {eyebrow && (
        <p className={`eyebrow m-0 ${onDark ? 'text-leaf-300' : 'text-leaf-600'}`}>{eyebrow}</p>
      )}
      <div
        className={`font-display font-extrabold leading-[0.92] tracking-[-0.025em] flex items-baseline ${
          accent ? (onDark ? 'text-leaf-300' : 'text-leaf-600') : (onDark ? 'text-husk-50' : 'text-ink-900')
        }`}
        style={{ fontSize: sizes[size] }}
      >
        {prefix && <span className="font-display font-bold">{prefix}</span>}
        <span>{shown}</span>
        {suffix && <span className="font-display font-bold">{suffix}</span>}
      </div>
      {caption && (
        <p className={`font-body text-[15px] leading-relaxed m-0 max-w-[32ch] ${onDark ? 'text-sand-300' : 'text-sand-500'}`}>
          {caption}
        </p>
      )}
    </div>
  )
}
