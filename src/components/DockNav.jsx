import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Boxes, FlaskConical, Hammer, FolderDown, Mail, Leaf, Menu, X, Newspaper } from 'lucide-react'
import Logo from './Logo'

const EASE = [0.16, 1, 0.3, 1]

// Each entry can carry a `panel` - when present, hovering/tapping the pill
// expands the dock into a layered structural mega-menu instead of routing.
const items = [
  { to: '/about-us', label: 'About', icon: Leaf },
  {
    label: 'Products',
    icon: Boxes,
    panel: {
      heading: 'The NFC Range',
      blurb: 'One matrix, six profiles - boards, joinery, façades and the outdoors, all engineered from the same rice-husk composite.',
      links: [
        { to: '/products/category/boards-doors', label: 'Boards & Doors', desc: 'The hero panel and pre-engineered shutters' },
        { to: '/products/category/frames-jaali', label: 'Frames & Jaali', desc: 'Joinery and CNC-routed façade screens' },
        { to: '/products/category/decking-fence', label: 'Decking & Fence', desc: 'Outdoor profiles built for every season' },
      ],
    },
  },
  {
    label: 'Material',
    icon: FlaskConical,
    panel: {
      heading: 'Engineered, Tested, Proven',
      blurb: 'From raw rice husk to a finished matrix that outperforms plywood on every axis that matters on site.',
      links: [
        { to: '/technical-details', label: 'Technical Details', desc: 'Raw materials, matrix formulation & test reports' },
        { to: '/suggestions', label: 'Guidelines', desc: 'Framing, fixing, edge protection & thermoforming' },
        { to: '/downloads', label: 'Downloads', desc: 'Brochures, catalogues & specification sheets' },
      ],
    },
  },
  {
    label: 'Journal',
    icon: Newspaper,
    panel: {
      heading: 'Stories From The Loop',
      blurb: 'The narrative behind the material - case studies, field notes and the running log of what changes at Indowud.',
      links: [
        { to: '/case-study', label: 'Case Study', desc: 'How rice-husk waste becomes a forest-saving material' },
        { to: '/blog', label: 'Blog', desc: 'Notes on material, making and design from the field' },
        { to: '/notice-board', label: 'Notice Board', desc: 'Certifications, milestones, releases and events' },
      ],
    },
  },
  { to: '/contact', label: 'Contact', icon: Mail },
]

// Flattened for the mobile drawer, where a hover mega-menu doesn't apply.
const mobileLinks = [
  { to: '/', label: 'Home' },
  { to: '/about-us', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/technical-details', label: 'Technical Details' },
  { to: '/suggestions', label: 'Guidelines' },
  { to: '/downloads', label: 'Downloads' },
  { to: '/case-study', label: 'Case Study' },
  { to: '/blog', label: 'Blog' },
  { to: '/notice-board', label: 'Notice Board' },
  { to: '/contact', label: 'Contact' },
]

function PanelLinkIcon({ label }) {
  if (label === 'Boards & Doors' || label === 'Decking & Fence') return <Hammer size={15} />
  if (label === 'Downloads') return <FolderDown size={15} />
  return <ArrowUpRight size={15} />
}

export default function DockNav() {
  const [activePanel, setActivePanel] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [onDark, setOnDark] = useState(true)
  const navigate = useNavigate()
  const navRef = useRef(null)
  const location = useLocation()

  const close = () => setActivePanel(null)

  // Detects whether the section currently sitting behind the floating dock
  // is a dark (texture-charcoal) panel or a bright husk surface, so the dock
  // can flip to a light pill over dark art and a dark pill over bright pages.
  useEffect(() => {
    let raf = null
    const sample = () => {
      const el = navRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = rect.left + rect.width / 2
      // Sample just beneath the pill's bottom edge - that's the surface the
      // floating dock visually sits on, rather than the gap above it.
      const y = rect.bottom + 6
      const stack = document.elementsFromPoint(x, y)
      const behind = stack.find((node) => !el.contains(node))
      setOnDark(!!behind?.closest('.texture-charcoal'))
    }
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => { raf = null; sample() })
    }
    sample()
    // Re-sample a few times while the splash overlay fades and route-transition
    // animations settle - elementsFromPoint would otherwise hit those overlays
    // and freeze the dock on its default theme.
    const settleTimers = [200, 600, 1200, 1800, 2400].map((ms) => setTimeout(sample, ms))
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
      settleTimers.forEach(clearTimeout)
    }
  }, [location.pathname])

  // Two complete colour sets - swapped wholesale depending on what the dock
  // is currently floating over, so the pill always reads as a clean cut-out
  // against its surroundings rather than blending in or fighting for contrast.
  const t = onDark
    ? {
        pill: 'bg-husk-50/90 backdrop-blur-xl surface-engraved-light shadow-[var(--shadow-warm-md)]',
        text: 'text-ink-900',
        brand: 'text-ink-900',
        badge: 'text-leaf-700 border-leaf-600/40',
        link: 'text-sand-500 hover:text-ink-900',
        linkActive: 'text-ink-900',
        pillHighlight: 'bg-ink-900/[0.05] surface-engraved-light',
        menuBtn: 'text-ink-900 surface-engraved-light bg-ink-900/[0.04]',
        divider: 'border-ink-900/[0.08]',
        panelBg: 'bg-ink-900/[0.03]',
        eyebrow: 'text-leaf-700',
        blurb: 'text-sand-500',
        linkTitle: 'text-ink-900',
        linkDesc: 'text-sand-500',
        linkHover: 'hover:bg-ink-900/[0.04]',
        linkIcon: 'text-sand-400 group-hover:text-leaf-700',
      }
    : {
        pill: 'texture-grain texture-charcoal surface-engraved shadow-[var(--shadow-on-dark)]',
        text: 'text-husk-100',
        brand: 'text-husk-50',
        badge: 'text-leaf-300 border-leaf-500/60',
        link: 'text-sand-300 hover:text-husk-50',
        linkActive: 'text-husk-50',
        pillHighlight: 'bg-white/[0.06] surface-engraved',
        menuBtn: 'text-husk-100 surface-engraved bg-white/[0.04]',
        divider: 'border-white/[0.06]',
        panelBg: 'bg-white/[0.035]',
        eyebrow: 'text-leaf-300',
        blurb: 'text-sand-300',
        linkTitle: 'text-husk-50',
        linkDesc: 'text-sand-400',
        linkHover: 'hover:bg-white/[0.05]',
        linkIcon: 'text-sand-400 group-hover:text-leaf-300',
      }

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4" onMouseLeave={close}>
      {/* The "island" - a single pill that grows downward into a structural
          panel. Layout animations keep the pill and panel as one continuous
          surface rather than two disconnected elements. */}
      <motion.nav
        ref={navRef}
        layout
        transition={{ layout: { duration: 0.45, ease: EASE }, backgroundColor: { duration: 0.3 } }}
        className={`relative w-full max-w-[980px] rounded-[20px] overflow-hidden transition-colors duration-300 ${t.pill} ${t.text}`}
      >
        <div className="relative flex items-center gap-1.5 px-3 py-2.5">
          <Link to="/" onClick={close} className="flex items-center gap-2 pl-2.5 pr-4 shrink-0">
            <Logo className="w-7 h-7 shrink-0" />
            <span className={`font-display font-extrabold text-[17px] tracking-[-0.01em] transition-colors duration-300 ${t.brand}`}>INDOWUD</span>
            <span className={`font-mono text-[9px] font-semibold tracking-[0.26em] border px-1.5 py-0.5 rounded transition-colors duration-300 ${t.badge}`}>NFC</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {items.map((it) => {
              const Icon = it.icon
              const isOpenPanel = activePanel === it.label

              if (it.panel) {
                return (
                  <button
                    key={it.label}
                    onMouseEnter={() => setActivePanel(it.label)}
                    onClick={() => setActivePanel(isOpenPanel ? null : it.label)}
                    aria-expanded={isOpenPanel}
                    className={`relative flex items-center gap-1.5 font-heading text-[13.5px] font-medium px-4 py-2 rounded-[12px] transition-colors duration-300 ${
                      isOpenPanel ? t.linkActive : t.link
                    }`}
                  >
                    {isOpenPanel && (
                      <motion.span
                        layoutId="dock-pill"
                        className={`absolute inset-0 rounded-[12px] ${t.pillHighlight}`}
                        transition={{ duration: 0.35, ease: EASE }}
                      />
                    )}
                    <Icon size={14} className="relative" strokeWidth={1.7} />
                    <span className="relative">{it.label}</span>
                  </button>
                )
              }

              return (
                <NavLink
                  key={it.to}
                  to={it.to}
                  onMouseEnter={close}
                  className={({ isActive }) =>
                    `relative flex items-center gap-1.5 font-heading text-[13.5px] font-medium px-4 py-2 rounded-[12px] transition-colors duration-300 ${
                      isActive ? t.linkActive : t.link
                    }`
                  }
                >
                  <Icon size={14} strokeWidth={1.7} />
                  {it.label}
                </NavLink>
              )
            })}
          </div>

          <div className="ml-auto flex items-center gap-2.5">
            <button
              onClick={() => navigate('/contact')}
              className="hidden lg:inline-flex items-center gap-2 font-heading text-[13px] font-semibold text-ink-900 bg-leaf-400 hover:bg-leaf-300 px-4 py-2 rounded-[12px] transition-colors duration-200 whitespace-nowrap"
            >
              Request a sample
              <ArrowUpRight size={14} />
            </button>

            <button
              aria-label="Toggle menu"
              onClick={() => { setMobileOpen((v) => !v); close() }}
              className={`md:hidden grid place-items-center w-9 h-9 rounded-[10px] transition-colors duration-300 ${t.menuBtn}`}
            >
              {mobileOpen ? <X size={18} strokeWidth={1.7} /> : <Menu size={18} strokeWidth={1.7} />}
            </button>
          </div>
        </div>

        {/* Mobile drawer - flat link list, same engraved surface, slides
            open beneath the pill row as one continuous physical layer. */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: EASE }}
              className={`md:hidden relative border-t overflow-hidden transition-colors duration-300 ${t.divider}`}
            >
              <ul className="flex flex-col px-3 py-3 gap-0.5">
                {mobileLinks.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block font-heading text-[15px] font-medium px-4 py-2.5 rounded-[10px] transition-colors duration-200 ${
                          isActive ? `${t.linkActive} ${t.pillHighlight}` : `${t.link} ${t.linkHover}`
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
                <li className="px-2 pt-2">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    <button className="w-full inline-flex items-center justify-center gap-2 font-heading text-[14px] font-semibold text-ink-900 bg-leaf-400 hover:bg-leaf-300 px-4 py-2.5 rounded-[10px] transition-colors duration-200">
                      Request a sample
                      <ArrowUpRight size={14} />
                    </button>
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mega-menu - slides open beneath the pill row as a second physical
            layer of the same engraved surface (shared rounded container). */}
        <AnimatePresence mode="wait">
          {activePanel && (
            <motion.div
              key={activePanel}
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: EASE }}
              className={`relative border-t px-7 py-7 grid sm:grid-cols-[0.9fr_1.1fr] gap-8 transition-colors duration-300 ${t.divider} ${t.panelBg}`}
            >
              {(() => {
                const panel = items.find((i) => i.label === activePanel)?.panel
                if (!panel) return null
                return (
                  <>
                    <div>
                      <p className={`eyebrow mb-2.5 ${t.eyebrow}`}>{panel.heading}</p>
                      <p className={`text-[14px] leading-relaxed max-w-[34ch] ${t.blurb}`}>{panel.blurb}</p>
                    </div>
                    <div className="grid gap-1.5">
                      {panel.links.map((l) => (
                        <Link
                          key={l.label}
                          to={l.to}
                          onClick={close}
                          className={`group flex items-center justify-between gap-4 rounded-[10px] px-4 py-3 transition-colors duration-200 ${t.linkHover}`}
                        >
                          <span>
                            <span className={`block font-heading font-semibold text-[14px] ${t.linkTitle}`}>{l.label}</span>
                            <span className={`block font-body text-[12px] mt-0.5 ${t.linkDesc}`}>{l.desc}</span>
                          </span>
                          <span className={`group-hover:translate-x-0.5 transition-all duration-200 ${t.linkIcon}`}>
                            <PanelLinkIcon label={l.label} />
                          </span>
                        </Link>
                      ))}
                    </div>
                  </>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  )
}
