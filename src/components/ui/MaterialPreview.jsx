import { useId } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import { finishTones, thicknesses } from '../../data/content'

/**
 * Procedurally generates a wood-grain swatch from SVG turbulence filters,
 * tinted to the selected finish and sized to suggest the selected thickness —
 * a stand-in for real photography per finish/thickness combination.
 */
export default function MaterialPreview({ finish, thickness, className = '' }) {
  const uid = useId().replace(/[:]/g, '')
  const [base, grain] = finishTones[finish] || finishTones['Natural Husk']
  const thicknessIndex = thicknesses.indexOf(thickness)
  const barHeight = 10 + thicknessIndex * 7

  return (
    <div className={`relative overflow-hidden rounded-[12px] border border-black/[0.06] bg-husk-100 ${className}`} style={{ aspectRatio: '4/3' }}>
      <AnimatePresence mode="wait">
        <motion.svg
          key={`${finish}-${thickness}`}
          viewBox="0 0 400 300"
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <defs>
            <filter id={`grain-${uid}`} x="-20%" y="-20%" width="140%" height="140%">
              <feTurbulence type="fractalNoise" baseFrequency="0.012 0.06" numOctaves="3" seed={thicknessIndex * 7 + 3} result="noise" />
              <feColorMatrix in="noise" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0.9 0.9 0.9 0 -0.35" result="grainAlpha" />
              <feComponentTransfer in="grainAlpha" result="grain">
                <feFuncA type="linear" slope="0.55" />
              </feComponentTransfer>
            </filter>
          </defs>

          {/* Base panel */}
          <rect x="0" y="0" width="400" height="300" fill={base} />
          {/* Grain overlay tinted to the darker tone */}
          <rect x="0" y="0" width="400" height="300" fill={grain} filter={`url(#grain-${uid})`} />
          {/* Soft directional sheen for a tactile, photographic feel */}
          <rect x="0" y="0" width="400" height="300" fill="url(#sheen)" opacity="0.5" />
          <defs>
            <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.22" />
              <stop offset="45%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {/* Edge profile suggesting board thickness */}
          <rect x="0" y={300 - barHeight} width="400" height={barHeight} fill={grain} opacity="0.34" />
          <rect x="0" y={300 - barHeight} width="400" height="2" fill="#FFFFFF" opacity="0.25" />
        </motion.svg>
      </AnimatePresence>

      <span className="absolute top-2.5 right-2.5 inline-flex items-center gap-1 font-mono text-[9px] tracking-[0.08em] uppercase text-ink-900/55 bg-husk-50/80 backdrop-blur-sm px-2 py-1 rounded-[3px]">
        <Sparkles size={10} /> AI-generated · for reference only
      </span>
      <span className="absolute bottom-2.5 left-2.5 font-mono text-[10px] tracking-[0.1em] uppercase text-husk-50/90 bg-ink-900/45 backdrop-blur-sm px-2.5 py-1 rounded-[3px]">
        {finish} · {thickness}
      </span>
    </div>
  )
}
