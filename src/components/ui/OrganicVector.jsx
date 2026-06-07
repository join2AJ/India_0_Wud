import { motion } from 'framer-motion'

/**
 * Decorative background vector — an organic leaf-vein silhouette that
 * breathes slowly behind section content. Kept near-invisible so it
 * textures the surface like an engraving rather than competing with it.
 */
export default function OrganicVector({ className = '', flip = false, tone = 'leaf' }) {
  const strokeColor = tone === 'leaf' ? 'var(--color-leaf-500)' : 'var(--color-grain-500)'

  return (
    <motion.svg
      aria-hidden
      viewBox="0 0 600 600"
      className={`pointer-events-none select-none ${className} ${flip ? '-scale-x-100' : ''}`}
      initial={{ opacity: 0, scale: 0.92, rotate: flip ? 6 : -6 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.path
        d="M300 40 C 420 90, 540 200, 540 320 C 540 460, 420 560, 300 560 C 180 560, 60 460, 60 320 C 60 200, 180 90, 300 40 Z"
        fill="none"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeOpacity="0.16"
        animate={{ rotate: [0, 4, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        style={{ transformOrigin: '300px 320px' }}
      />
      <motion.path
        d="M300 40 C 300 200, 300 400, 300 560 M 110 180 C 220 260, 380 260, 490 180 M 110 460 C 220 380, 380 380, 490 460"
        fill="none"
        stroke={strokeColor}
        strokeWidth="0.8"
        strokeOpacity="0.12"
        animate={{ rotate: [0, -3, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        style={{ transformOrigin: '300px 320px' }}
      />
    </motion.svg>
  )
}
