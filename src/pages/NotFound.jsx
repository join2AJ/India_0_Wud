import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Home, Boxes, Mail, Newspaper } from 'lucide-react'
import Seo from '../components/Seo'

const EASE = [0.16, 1, 0.3, 1]

// A broken / splintered plank - what happens to real wood when it fails.
// Deliberately contrasted against the smooth, intact husk-board aesthetic
// everywhere else on the site.
function BrokenPlankIllustration() {
  return (
    <motion.svg
      viewBox="0 0 320 200"
      className="w-full max-w-[320px] mx-auto"
      aria-hidden
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
    >
      <defs>
        <linearGradient id="plank-a" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4B4133" />
          <stop offset="100%" stopColor="#272219" />
        </linearGradient>
        <linearGradient id="plank-b" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#383024" />
          <stop offset="100%" stopColor="#1C1813" />
        </linearGradient>
        <linearGradient id="splinter-glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7E9C60" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#7E9C60" stopOpacity="0" />
        </linearGradient>
        <filter id="shadow">
          <feDropShadow dx="0" dy="8" stdDeviation="10" floodColor="#000" floodOpacity="0.5" />
        </filter>
      </defs>

      {/* Left plank half */}
      <g filter="url(#shadow)">
        <polygon
          points="20,60 148,60 136,140 20,140"
          fill="url(#plank-a)"
          rx="4"
        />
        {/* Wood grain lines */}
        <line x1="40" y1="65" x2="38" y2="135" stroke="#594E3F" strokeWidth="1" opacity="0.6" />
        <line x1="70" y1="62" x2="66" y2="138" stroke="#594E3F" strokeWidth="0.8" opacity="0.4" />
        <line x1="100" y1="61" x2="96" y2="138" stroke="#594E3F" strokeWidth="0.8" opacity="0.4" />
        <line x1="125" y1="61" x2="120" y2="138" stroke="#594E3F" strokeWidth="0.6" opacity="0.3" />
        {/* Splinter edge */}
        <polygon
          points="136,140 142,120 148,60 138,90 132,100 140,110 130,130"
          fill="#594E3F"
        />
        {/* Highlight top edge */}
        <line x1="20" y1="60" x2="148" y2="60" stroke="#786A57" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Right plank half */}
      <g filter="url(#shadow)">
        <polygon
          points="172,60 300,60 300,140 184,140"
          fill="url(#plank-b)"
        />
        {/* Wood grain lines */}
        <line x1="200" y1="62" x2="200" y2="138" stroke="#594E3F" strokeWidth="0.8" opacity="0.4" />
        <line x1="230" y1="62" x2="230" y2="138" stroke="#594E3F" strokeWidth="0.8" opacity="0.4" />
        <line x1="260" y1="62" x2="260" y2="138" stroke="#594E3F" strokeWidth="0.6" opacity="0.3" />
        {/* Splinter edge */}
        <polygon
          points="172,60 184,140 178,115 186,98 174,85 180,70"
          fill="#4B4133"
        />
        {/* Highlight top edge */}
        <line x1="172" y1="60" x2="300" y2="60" stroke="#786A57" strokeWidth="1.5" opacity="0.5" />
      </g>

      {/* Break gap glow - suggests something better filling the gap */}
      <ellipse cx="160" cy="100" rx="18" ry="50" fill="url(#splinter-glow)" />

      {/* Floating splinter shards */}
      {[
        { x: 150, y: 45, r: -15 },
        { x: 165, y: 38, r: 20 },
        { x: 170, y: 54, r: -8 },
        { x: 144, y: 156, r: 12 },
        { x: 162, y: 162, r: -22 },
      ].map(({ x, y, r }, i) => (
        <motion.rect
          key={i}
          x={x} y={y}
          width={10 - i * 0.5} height={3}
          rx={1}
          fill="#786A57"
          opacity={0.7 - i * 0.08}
          style={{ transformOrigin: `${x + 5}px ${y + 1.5}px` }}
          animate={{ rotate: [r, r + 5, r], y: [y, y - 4, y] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
        />
      ))}

      {/* "404" etched into the gap */}
      <text
        x="160" y="108"
        textAnchor="middle"
        fontSize="22"
        fontWeight="800"
        fontFamily="'Archivo Expanded', system-ui, sans-serif"
        letterSpacing="-0.5"
        fill="#A6C08A"
        opacity="0.9"
      >
        404
      </text>
    </motion.svg>
  )
}

const quickLinks = [
  { to: '/', Icon: Home, label: 'Home' },
  { to: '/products', Icon: Boxes, label: 'Products' },
  { to: '/blog', Icon: Newspaper, label: 'Journal' },
  { to: '/contact', Icon: Mail, label: 'Contact' },
]

export default function NotFound() {
  const { pathname } = useLocation()

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      <Seo title="Page not found" path={pathname} noindex />

      {/* Dark hero matching the site's charcoal section language */}
      <section className="texture-grain texture-charcoal text-husk-100 flex-1 flex flex-col items-center justify-center px-6 py-24 text-center">

        <BrokenPlankIllustration />

        <motion.div
          className="mt-10 max-w-[520px] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
        >
          <p className="eyebrow text-leaf-300 mb-4">That page doesn't exist</p>
          <h1 className="font-display font-extrabold text-[clamp(1.75rem,4.5vw,2.75rem)] tracking-[-0.025em] text-husk-50 text-balance leading-[1.1]">
            Even in a zero-waste process, some things get lost.
          </h1>
          <p className="mt-5 text-[15px] leading-relaxed text-sand-300 max-w-[44ch] mx-auto">
            The page you're looking for may have moved, been renamed, or was
            never there to begin with. The good stuff is still right here:
          </p>

          {/* Quick-nav pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {quickLinks.map(({ to, Icon, label }) => (
              <Link
                key={to}
                to={to}
                className="inline-flex items-center gap-2 font-heading text-[13.5px] font-medium px-5 py-2.5 rounded-[12px] bg-white/[0.06] hover:bg-white/[0.11] text-husk-100 hover:text-husk-50 border border-white/[0.08] transition-all duration-200 hover:-translate-y-0.5"
              >
                <Icon size={14} strokeWidth={1.7} />
                {label}
              </Link>
            ))}
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-husk-100/60 hover:text-husk-50 transition-colors duration-200"
          >
            <ArrowLeft size={13} />
            Back to the beginning
          </Link>
        </motion.div>

        {/* Subtle material fact strip at the bottom */}
        <motion.div
          className="mt-16 border border-white/[0.06] rounded-[10px] px-7 py-4 bg-white/[0.03] max-w-[460px] text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.65 }}
        >
          <p className="eyebrow text-leaf-400 mb-1.5">While you're here</p>
          <p className="text-[13px] text-sand-400 leading-relaxed">
            Unlike a sheet of plywood that splinters when it fails, Indowud NFC
            boards are engineered to never crack, splinter or rot — no matter
            what life (or a misdirected URL) throws at them.
          </p>
        </motion.div>
      </section>
    </div>
  )
}
