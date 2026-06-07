import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Droplet, Bug, Flame, Waves, Wind, Leaf } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Swatch from '../components/ui/Swatch'
import SpecCard from '../components/ui/SpecCard'
import StatCounter from '../components/ui/StatCounter'
import Badge from '../components/ui/Badge'
import { products, matrix } from '../data/content'
import nfcBoardSample from '../assets/photos/nfc-board-sample.webp'

const matrixIcons = {
  droplet: Droplet, bug: Bug, flame: Flame, waves: Waves, wind: Wind, leaf: Leaf,
}

export default function Home() {
  return (
    <div>
      {/* Hero — dark architectural */}
      <section className="relative bg-ink-900 text-husk-100 pt-16 pb-16 px-6 lg:px-10 overflow-hidden">
        <motion.div
          aria-hidden
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-40 w-[34rem] h-[34rem] rounded-full bg-leaf-700/15 blur-[100px]"
        />
        <div className="relative max-w-[1200px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow text-leaf-300 mb-5"
            >
              Ahimsa Design · Natural Fiber Composite
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              className="font-display font-extrabold text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.98] tracking-[-0.025em] text-husk-50"
            >
              We don't cut<br />down to <span className="text-leaf-400">build.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.28 }}
              className="mt-6 text-lg leading-relaxed text-sand-200 max-w-[46ch]"
            >
              High-performance architectural panels engineered from agricultural
              rice-husk waste. Plywood's strength, none of its compromises — and
              not a single tree felled in the making of it.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-3.5"
            >
              <Link to="/contact">
                <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Request a sample</Button>
              </Link>
              <Link to="/products">
                <Button variant="on-dark" size="lg">Explore the range</Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.52 }}
              className="mt-12 flex flex-wrap gap-12"
            >
              <StatCounter onDark accent eyebrow="Axe the Axe" value={20000} suffix="+" size="lg" caption="trees spared at full capacity, every single year." />
              <StatCounter onDark eyebrow="Footprint" value={60} prefix="−" suffix="%" size="lg" caption="lower carbon footprint than traditional plywood." />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <Swatch tone="board" ratio="3/4" frame image={nfcBoardSample} imageFit="contain" label="NFC Board · husk-grain finish" className="shadow-[var(--shadow-on-dark)]" />
          </motion.div>
        </div>
      </section>

      {/* NFC Matrix */}
      <section className="bg-husk-50 py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-9">
            <div>
              <p className="eyebrow text-leaf-600 mb-3.5">The NFC Matrix</p>
              <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 m-0 max-w-[18ch] leading-[1.05] text-balance">
                One material. Every performance claim, verified.
              </h2>
            </div>
            <Button variant="secondary" iconRight={<FileText size={16} />}>Full spec sheet</Button>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matrix.map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <SpecCard
                  key={m.property}
                  delay={(i % 3) * 0.08}
                  icon={Icon && <Icon size={22} strokeWidth={1.6} />}
                  value={m.value}
                  property={m.property}
                  description={m.desc}
                  standard={m.std}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Product range */}
      <section id="products" className="bg-husk-100 border-t border-husk-300 py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">Product range</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 mb-9 text-balance">
              Five products. One zero-wood system.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5 gap-y-5">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.08} className={i === 0 ? 'sm:col-span-2' : ''}>
                <ProductTile p={p} big={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-24 px-6 lg:px-10">
        <Reveal className="max-w-[1100px] mx-auto rounded-[12px] bg-leaf-700 text-husk-50 px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <div className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-husk-50/10 blur-3xl" />
          <p className="eyebrow text-leaf-200 mb-4 relative">Let's build something honest</p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-balance relative">
            Ready to specify a material that doesn't cost the earth?
          </h2>
          <p className="mt-4 text-leaf-100/80 max-w-xl mx-auto relative">
            Talk to our team about specifications, finishes and how Indowud NFC
            can fit into your next project — or request a physical sample today.
          </p>
          <Link to="/contact" className="relative inline-block mt-8">
            <Button variant="on-dark" size="lg" iconRight={<ArrowRight size={17} />}>Start a conversation</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}

function ProductTile({ p, big }) {
  return (
    <Link to="/products" className="group block h-full rounded-[12px] overflow-hidden border border-sand-200 bg-white shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-[3px]">
      <Swatch tone={p.tone} ratio={big ? '21/9' : '4/3'} rounded="rounded-none" />
      <div className="px-5 pt-4.5 pb-5">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-heading font-bold text-[20px] text-ink-900 m-0">{p.name}</h3>
          <Badge tone="outline">{p.tag}</Badge>
        </div>
        <p className={`font-body text-[14.5px] leading-relaxed text-sand-500 m-0 ${big ? 'max-w-[52ch]' : ''}`}>{p.desc}</p>
        <span className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-500 group-hover:text-leaf-600 transition-colors duration-200">
          View product <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
