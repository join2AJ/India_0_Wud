import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import AhimsaLoader from './ui/AhimsaLoader'
import OrganicVector from './ui/OrganicVector'
import CountUp from './ui/CountUp'
import Magnetic from './ui/Magnetic'
import boardImg from '../assets/products/indowud-board.webp'
import jaaliImg from '../assets/products/nfc-jaali.webp'
import deckingImg from '../assets/products/nfc-decking.webp'

const EASE = [0.16, 1, 0.3, 1]

const showcase = [
  { id: 'board', name: 'NFC Board', desc: 'The hero panel — zero-wood plywood replacement', image: boardImg },
  { id: 'jaali', name: 'NFC Jaali', desc: 'CNC-routed façade screens, light through privacy', image: jaaliImg },
  { id: 'decking', name: 'NFC Decking', desc: 'Weatherproof outdoor profiles, every season', image: deckingImg },
]

/**
 * A single bento card that tracks the cursor and tilts toward it in 3D.
 * `rotateX`/`rotateY` are derived from pointer position relative to the
 * card's centre, smoothed with a spring so the motion feels weighted
 * rather than snapping straight to the cursor.
 */
function TiltCard({ item, index }) {
  const ref = useRef(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springCfg = { stiffness: 220, damping: 22, mass: 0.6 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), springCfg)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springCfg)

  const handleMove = (e) => {
    const rect = ref.current.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }
  const handleLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.45 + index * 0.1, ease: EASE }}
      style={{ perspective: 1000 }}
      className={index === 0 ? 'sm:row-span-2' : ''}
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        whileHover={{ scale: 1.025, z: 40 }}
        transition={{ type: 'spring', ...springCfg }}
        className="group relative h-full min-h-[180px] rounded-[16px] overflow-hidden surface-engraved cursor-pointer"
      >
        <motion.img
          src={item.image}
          alt={item.name}
          style={{ transform: 'translateZ(0)' }}
          animate={{ scale: [1, 1.06, 1] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: index * 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-transparent pointer-events-none" />
        {/* Floating label plane — sits forward of the card surface in Z so
            the tilt reveals genuine depth rather than a flat sticker. */}
        <motion.div
          style={{ transform: 'translateZ(48px)', transformStyle: 'preserve-3d' }}
          className="relative h-full flex flex-col justify-end p-5"
        >
          <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-husk-100/70 mb-1.5">{`0${index + 1} · NFC Range`}</span>
          <h3 className="font-heading font-bold text-[19px] text-husk-50 mb-1">{item.name}</h3>
          <p className="text-[12.5px] leading-snug text-husk-100/75 max-w-[26ch]">{item.desc}</p>
          <span className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-[0.14em] text-husk-50/0 group-hover:text-husk-50/90 transition-all duration-300 -translate-x-1 group-hover:translate-x-0">
            Explore <ArrowUpRight size={13} />
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function TactileHero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const vectorY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={sectionRef} className="texture-grain texture-charcoal relative pt-8 pb-24 px-6 lg:px-10 overflow-hidden text-husk-100">
      {/* Ambient glow — breathing radial wash that keeps the matte charcoal
          from reading as inert flat colour. Drifts on scroll for parallax depth. */}
      <motion.div
        style={{ y: glowY }}
        aria-hidden
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-40 w-[36rem] h-[36rem] rounded-full bg-leaf-700/15 blur-[120px] pointer-events-none"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.06, 1] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
        className="absolute -bottom-40 -right-32 w-[30rem] h-[30rem] rounded-full bg-grain-600/10 blur-[110px] pointer-events-none"
      />
      <motion.div style={{ y: vectorY }} className="absolute top-1/2 -translate-y-1/2 -right-24 pointer-events-none hidden lg:block">
        <OrganicVector className="w-[34rem] h-[34rem] opacity-50" tone="grain" />
      </motion.div>

      <div className="relative max-w-[1280px] mx-auto grid lg:grid-cols-[1fr_0.92fr] gap-14 items-start">
        {/* ---- Copy column ---- */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-6 surface-engraved rounded-full pl-2 pr-4 py-2 bg-white/[0.03]"
          >
            <span className="grid place-items-center w-7 h-7 rounded-full bg-leaf-500/20 text-leaf-300">
              <AhimsaLoader size={26} />
            </span>
            <span className="eyebrow text-leaf-300">India's first agro-husk natural fibre composite</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.1, ease: EASE }}
            className="font-display font-extrabold text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.025em] text-husk-50"
          >
            Architecture, cut<br />from <span className="text-leaf-400">husk,</span> not forest.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mt-6 text-lg leading-relaxed text-sand-300 max-w-[48ch]"
          >
            A natural-fibre composite matrix engineered from rice-husk waste —
            plywood's strength and warmth, none of its compromises, displayed
            here as a tactile, three-dimensional material library.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-9 flex flex-wrap gap-3.5"
          >
            <Magnetic>
              <Link to="/contact">
                <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Request a sample</Button>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link to="/products">
                <Button variant="on-dark" size="lg">Explore the range</Button>
              </Link>
            </Magnetic>
          </motion.div>

          {/* Engraved metric strip — reads as routed into the surface via
              inset shadows rather than sitting on top of it. */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-px rounded-[14px] overflow-hidden surface-engraved bg-white/[0.04] max-w-[480px]"
          >
            {[
              { value: 20, prefix: '', suffix: 'K+', label: 'trees spared / yr' },
              { value: 60, prefix: '−', suffix: '%', label: 'carbon vs plywood' },
              { value: 0, prefix: '', suffix: '', label: 'formaldehyde & VOC' },
            ].map((m) => (
              <div key={m.label} className="bg-ink-900/40 px-4 py-4">
                <p className="font-display font-extrabold text-[22px] text-husk-50">
                  <CountUp value={m.value} prefix={m.prefix} suffix={m.suffix} />
                </p>
                <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-sand-400 mt-1 leading-tight">{m.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ---- 3D bento showcase column ---- */}
        <div className="grid sm:grid-cols-2 gap-4 sm:h-[520px]">
          {showcase.map((item, i) => (
            <TiltCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
