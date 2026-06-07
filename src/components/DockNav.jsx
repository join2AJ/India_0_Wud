import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, Boxes, FlaskConical, Hammer, FolderDown, Mail, Leaf, Menu, X } from 'lucide-react'

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
  const navigate = useNavigate()

  const close = () => setActivePanel(null)

  return (
    <div className="fixed top-5 inset-x-0 z-50 flex justify-center px-4" onMouseLeave={close}>
      {/* The "island" - a single pill that grows downward into a structural
          panel. Layout animations keep the pill and panel as one continuous
          surface rather than two disconnected elements. */}
      <motion.nav
        layout
        transition={{ layout: { duration: 0.45, ease: EASE } }}
        className="texture-grain texture-charcoal surface-engraved relative w-full max-w-[860px] rounded-[20px] text-husk-100 shadow-[var(--shadow-on-dark)] overflow-hidden"
      >
        <div className="relative flex items-center gap-1.5 px-3 py-2.5">
          <Link to="/" onClick={close} className="flex items-baseline gap-2 pl-2.5 pr-4 shrink-0">
            <span className="font-display font-extrabold text-[17px] tracking-[-0.01em] text-husk-50">INDOWUD</span>
            <span className="font-mono text-[9px] font-semibold tracking-[0.26em] text-leaf-300 border border-leaf-500/60 px-1.5 py-0.5 rounded">NFC</span>
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
                      isOpenPanel ? 'text-husk-50' : 'text-sand-300 hover:text-husk-50'
                    }`}
                  >
                    {isOpenPanel && (
                      <motion.span
                        layoutId="dock-pill"
                        className="absolute inset-0 rounded-[12px] bg-white/[0.06] surface-engraved"
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
                      isActive ? 'text-husk-50' : 'text-sand-300 hover:text-husk-50'
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
              className="hidden sm:inline-flex items-center gap-2 font-heading text-[13px] font-semibold text-ink-900 bg-leaf-400 hover:bg-leaf-300 px-4 py-2 rounded-[12px] transition-colors duration-200 whitespace-nowrap"
            >
              Request a sample
              <ArrowUpRight size={14} />
            </button>

            <button
              aria-label="Toggle menu"
              onClick={() => { setMobileOpen((v) => !v); close() }}
              className="md:hidden grid place-items-center w-9 h-9 rounded-[10px] text-husk-100 surface-engraved bg-white/[0.04]"
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
              className="md:hidden relative border-t border-white/[0.06] overflow-hidden"
            >
              <ul className="flex flex-col px-3 py-3 gap-0.5">
                {mobileLinks.map((l) => (
                  <li key={l.to}>
                    <NavLink
                      to={l.to}
                      onClick={() => setMobileOpen(false)}
                      className={({ isActive }) =>
                        `block font-heading text-[15px] font-medium px-4 py-2.5 rounded-[10px] transition-colors duration-200 ${
                          isActive ? 'text-husk-50 bg-white/[0.06]' : 'text-sand-300 hover:text-husk-50 hover:bg-white/[0.04]'
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
              className="relative border-t border-white/[0.06] bg-white/[0.035] px-7 py-7 grid sm:grid-cols-[0.9fr_1.1fr] gap-8"
            >
              {(() => {
                const panel = items.find((i) => i.label === activePanel)?.panel
                if (!panel) return null
                return (
                  <>
                    <div>
                      <p className="eyebrow text-leaf-300 mb-2.5">{panel.heading}</p>
                      <p className="text-[14px] leading-relaxed text-sand-300 max-w-[34ch]">{panel.blurb}</p>
                    </div>
                    <div className="grid gap-1.5">
                      {panel.links.map((l) => (
                        <Link
                          key={l.label}
                          to={l.to}
                          onClick={close}
                          className="group flex items-center justify-between gap-4 rounded-[10px] px-4 py-3 transition-colors duration-200 hover:bg-white/[0.05]"
                        >
                          <span>
                            <span className="block font-heading font-semibold text-[14px] text-husk-50">{l.label}</span>
                            <span className="block font-body text-[12px] text-sand-400 mt-0.5">{l.desc}</span>
                          </span>
                          <span className="text-sand-400 group-hover:text-leaf-300 group-hover:translate-x-0.5 transition-all duration-200">
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
