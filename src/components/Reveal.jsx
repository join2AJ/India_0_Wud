import { motion } from 'framer-motion'

const variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
}

export default function Reveal({ children, delay = 0, className = '', as = 'div', y = 36 }) {
  const Comp = motion[as] ?? motion.div
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  )
}

export { variants }
