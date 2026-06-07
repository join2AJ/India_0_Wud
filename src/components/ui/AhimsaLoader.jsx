import { motion } from 'framer-motion'

const EASE = [0.22, 0.61, 0.36, 1]

// Each "grain" is a vesica (lens) traced from two compass-drawn arcs,
// splayed alternately off a central stem like a rice panicle.
const GRAINS = Array.from({ length: 7 }, (_, i) => {
  const t = i / 6 // 0 = base, 1 = tip
  const side = i % 2 === 0 ? 1 : -1
  return {
    cy: 202 - t * 158,
    angle: side * (16 + t * 14),
    rx: 9 - t * 4.5,
    ry: 22 - t * 11,
    delay: i * 0.11,
  }
})

export default function AhimsaLoader({ size = 240, className = '' }) {
  return (
    <div
      role="status"
      aria-label="Loading"
      className={`grid place-items-center text-leaf-600 ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 240 240" width={size} height={size} fill="none">
        {/* bounding compass circle */}
        <circle cx="120" cy="120" r="92" stroke="currentColor" strokeOpacity="0.12" strokeWidth="1" />

        {/* stem, drawn in on loop */}
        <motion.line
          x1="120" y1="206" x2="120" y2="48"
          stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0.25 }}
          animate={{ pathLength: [0, 1, 1], opacity: [0.25, 1, 0.6] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: EASE, times: [0, 0.55, 1] }}
        />

        {/* grains - vesica shapes built from two circular arcs */}
        {GRAINS.map((g, i) => {
          const d = `M 0 ${-g.ry} A ${g.rx} ${g.ry} 0 0 1 0 ${g.ry} A ${g.rx} ${g.ry} 0 0 1 0 ${-g.ry} Z`
          return (
            <g key={i} transform={`translate(${120 + g.angle * 0.85} ${g.cy}) rotate(${g.angle})`}>
              <motion.path
                d={d}
                stroke="currentColor"
                strokeWidth="1.4"
                style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
                initial={{ pathLength: 0, opacity: 0, scale: 0.72 }}
                animate={{
                  pathLength: [0, 1, 1, 1],
                  opacity: [0, 1, 1, 0.35],
                  scale: [0.72, 1, 1, 0.86],
                }}
                transition={{
                  duration: 2.8,
                  repeat: Infinity,
                  ease: EASE,
                  delay: g.delay,
                  times: [0, 0.4, 0.8, 1],
                }}
              />
            </g>
          )
        })}

        {/* tip bud - a single compass circle, breathing */}
        <motion.circle
          cx="120" cy="44" r="4.5"
          stroke="currentColor" strokeWidth="1.6"
          style={{ transformBox: 'fill-box', transformOrigin: '50% 50%' }}
          initial={{ scale: 0.5, opacity: 0.3 }}
          animate={{ scale: [0.5, 1.1, 0.5], opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: EASE }}
        />

        {/* root mark */}
        <motion.circle
          cx="120" cy="206" r="2.5"
          fill="currentColor"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.9, 0.3] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: EASE }}
        />
      </svg>
    </div>
  )
}
