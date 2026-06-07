import { useRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

/**
 * Wraps an element so it drifts gently toward the cursor within its
 * bounds - the small "this responds to you" cue luxury product sites use
 * on primary calls to action.
 */
export default function Magnetic({ children, strength = 0.3, className = '' }) {
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springCfg = { stiffness: 200, damping: 18, mass: 0.4 }
  const springX = useSpring(x, springCfg)
  const springY = useSpring(y, springCfg)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }
  const handleLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  )
}
