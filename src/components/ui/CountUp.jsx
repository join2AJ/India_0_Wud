import { useEffect, useRef, useState } from 'react'
import { useInView, animate } from 'framer-motion'

/**
 * Animates a number counting up from zero the first time it scrolls
 * into view — turns static stats into something that feels alive.
 */
export default function CountUp({ value, prefix = '', suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return controls.stop
  }, [inView, value, duration])

  return (
    <span ref={ref}>
      {prefix}{display.toLocaleString('en-IN')}{suffix}
    </span>
  )
}
