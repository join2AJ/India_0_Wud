import { motion } from 'framer-motion'

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative pt-40 pb-24 px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-husk-100 to-cream">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-leaf-100/60 blur-3xl" />
      <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-husk-200/50 blur-3xl" />
      <div className="relative max-w-4xl mx-auto text-center">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-4"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-char-900 text-balance"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-6 text-lg text-char-800/70 max-w-2xl mx-auto leading-relaxed"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  )
}
