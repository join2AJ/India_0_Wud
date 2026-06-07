import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react'
import Button from './ui/Button'
import Logo from './Logo'

const primaryLinks = [
  { to: '/', label: 'Material' },
  { to: '/products', label: 'Products' },
  { to: '/about-us', label: 'About Us' },
]

const moreLinks = [
  { to: '/technical-details', label: 'Technical Details', desc: 'Matrix formulation & test reports' },
  { to: '/suggestions', label: 'Guidelines', desc: 'Installation & fabrication suggestions' },
  { to: '/downloads', label: 'Downloads', desc: 'Brochures, catalogues & spec sheets' },
]

const allMobileLinks = [...primaryLinks, ...moreLinks, { to: '/contact', label: 'Contact' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)

  const navItemClass = ({ isActive }) =>
    `relative font-heading text-[14.5px] font-medium px-3 py-2 rounded-[5px] transition-colors duration-300 ${
      isActive ? 'text-ink-900' : 'text-sand-500 hover:text-ink-900'
    }`

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-white/40 bg-husk-50/70 backdrop-blur-xl supports-[backdrop-filter]:bg-husk-50/55 shadow-[0_1px_0_rgba(255,255,255,0.6)_inset]"
    >
      <nav className="max-w-[1360px] mx-auto px-6 lg:px-10 flex items-center gap-7 h-[72px]">
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <Logo className="w-8 h-8 shrink-0" />
          <span className="font-display font-extrabold text-[22px] tracking-[-0.01em] text-ink-900">INDOWUD</span>
          <span className="font-mono text-[10px] font-semibold tracking-[0.28em] text-leaf-600 border border-leaf-500 px-1.5 py-0.5 rounded">NFC</span>
        </Link>

        <ul className="hidden md:flex items-center gap-1 ml-3">
          {primaryLinks.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} className={navItemClass}>
                {({ isActive }) => (
                  <span className="relative">
                    {l.label}
                    {isActive && <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-3 right-3 h-px bg-leaf-500" />}
                  </span>
                )}
              </NavLink>
            </li>
          ))}

          <li className="relative" onMouseEnter={() => setMoreOpen(true)} onMouseLeave={() => setMoreOpen(false)}>
            <button
              className={`flex items-center gap-1 font-heading text-[14.5px] font-medium px-3 py-2 rounded-[5px] transition-colors duration-300 ${
                moreOpen ? 'text-ink-900' : 'text-sand-500 hover:text-ink-900'
              }`}
            >
              Resources
              <ChevronDown size={14} className={`transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {moreOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
                  className="absolute top-full left-0 pt-2 w-[280px]"
                >
                  <div className="rounded-[12px] border border-husk-300 bg-husk-50/95 backdrop-blur-xl shadow-[var(--shadow-warm-lg)] p-2.5">
                    {moreLinks.map((l) => (
                      <Link
                        key={l.to}
                        to={l.to}
                        onClick={() => setMoreOpen(false)}
                        className="block rounded-[8px] px-3.5 py-2.5 transition-colors duration-200 hover:bg-leaf-100/60 group"
                      >
                        <span className="block font-heading font-semibold text-[14px] text-ink-900 group-hover:text-leaf-700">{l.label}</span>
                        <span className="block font-body text-[12.5px] text-sand-500 mt-0.5">{l.desc}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>

          <li>
            <NavLink to="/contact" className={navItemClass}>
              {({ isActive }) => (
                <span className="relative">
                  Contact
                  {isActive && <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-3 right-3 h-px bg-leaf-500" />}
                </span>
              )}
            </NavLink>
          </li>
        </ul>

        <div className="ml-auto hidden md:block">
          <Link to="/contact">
            <Button variant="accent" iconRight={<ArrowRight size={15} strokeWidth={2} />}>
              Request a sample
            </Button>
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="md:hidden ml-auto text-ink-900"
        >
          {open ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-husk-50/95 backdrop-blur-xl border-t border-husk-300"
          >
            <ul className="flex flex-col px-6 py-6 gap-5">
              {allMobileLinks.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => `font-heading text-lg ${isActive ? 'text-leaf-600' : 'text-ink-900'}`}
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <Link to="/contact" onClick={() => setOpen(false)}>
                  <Button variant="accent" block iconRight={<ArrowRight size={15} />}>Request a sample</Button>
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
