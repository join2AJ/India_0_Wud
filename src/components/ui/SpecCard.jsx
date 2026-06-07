import { motion } from 'framer-motion'

export default function SpecCard({ icon, value, property, description, standard, dark = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`relative flex flex-col gap-3 rounded-[8px] border p-6 transition-shadow duration-300 ${
        dark
          ? 'bg-ink-900 text-husk-100 border-[#4A4234] shadow-[var(--shadow-on-dark)]'
          : 'bg-white text-ink-900 border-sand-200 shadow-[var(--shadow-warm-sm)] hover:shadow-[var(--shadow-warm-md)]'
      }`}
    >
      <div className="flex items-center justify-between">
        {icon && (
          <span className={`grid place-items-center w-[42px] h-[42px] rounded-[5px] ${dark ? 'bg-leaf-500/20 text-leaf-300' : 'bg-leaf-100 text-leaf-700'}`}>
            {icon}
          </span>
        )}
      </div>
      {value !== undefined && (
        <div className="font-display font-bold text-[30px] leading-none tracking-[-0.02em]">{value}</div>
      )}
      {property && <p className="font-heading font-semibold text-[15px] m-0">{property}</p>}
      {description && (
        <p className={`font-body text-[13px] leading-relaxed m-0 ${dark ? 'text-sand-300' : 'text-sand-500'}`}>{description}</p>
      )}
      {standard && (
        <span className="font-mono text-[10.5px] tracking-[0.08em] uppercase text-sand-400">{standard}</span>
      )}
    </motion.div>
  )
}
