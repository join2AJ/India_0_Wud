import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

function getInitial() {
  if (typeof document === 'undefined') return false
  return document.documentElement.classList.contains('dark')
}

export default function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(getInitial)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <button
      type="button"
      onClick={() => setDark((d) => !d)}
      aria-label={dark ? 'Switch to day mode' : 'Switch to night mode'}
      aria-pressed={dark}
      className={`relative grid place-items-center w-9 h-9 rounded-full surface-engraved bg-white/[0.03] text-cream-100 hover:bg-white/[0.07] transition-colors duration-300 cursor-pointer ${className}`}
    >
      <motion.span
        initial={false}
        animate={{ rotate: dark ? 0 : 180, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="grid place-items-center"
      >
        {dark ? <Moon size={16} strokeWidth={1.8} /> : <Sun size={16} strokeWidth={1.8} />}
      </motion.span>
    </button>
  )
}
