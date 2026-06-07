import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, FileText, Droplet, Bug, Flame, Waves, Wind, Leaf } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Swatch from '../components/ui/Swatch'
import OrganicVector from '../components/ui/OrganicVector'
import TactileHero from '../components/TactileHero'
import { products, matrix } from '../data/content'

const matrixIcons = {
  droplet: Droplet, bug: Bug, flame: Flame, waves: Waves, wind: Wind, leaf: Leaf,
}

export default function Home() {
  return (
    <div>
      <TactileHero />

      {/* NFC Matrix — bento of claims, on the same warm husk surface as About */}
      <section className="relative py-20 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <OrganicVector className="absolute -top-24 -right-32 w-[34rem] h-[34rem] opacity-70" />
        <div className="relative max-w-[1200px] mx-auto">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-9">
            <div>
              <p className="eyebrow text-leaf-600 mb-3.5">The NFC Matrix</p>
              <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 m-0 max-w-[18ch] leading-[1.05] text-balance">
                Every claim, proven in one material.
              </h2>
            </div>
            <Button variant="ghost" iconRight={<FileText size={16} />}>Full spec sheet</Button>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:auto-rows-[150px]">
            {/* Feature cell — climate stat, spans 2x2 */}
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-7 flex flex-col justify-between gap-5"
              >
                <span className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-leaf-700 bg-leaf-100 border border-leaf-200 rounded-full px-3 py-1.5">
                  <Leaf size={13} /> Climate-positive
                </span>
                <div>
                  <p className="font-display font-extrabold text-[56px] leading-none tracking-[-0.02em] text-ink-900">−60%</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-sand-500 max-w-[40ch]">
                    Lower embodied carbon than plywood — built from rice husk
                    that would otherwise be openly burned in the field.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-500 bg-husk-100 border border-sand-200 rounded-full px-3 py-1.5">GreenPro</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-500 bg-husk-100 border border-sand-200 rounded-full px-3 py-1.5">EPD verified</span>
                </div>
              </motion.div>
            </Reveal>

            {matrix.slice(0, 2).map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <Reveal key={m.property} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-6 flex flex-col justify-between gap-4"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-[9px] bg-leaf-100 text-leaf-700">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-[26px] tracking-[-0.02em] text-ink-900 leading-none">{m.value}</p>
                      <p className="font-heading font-semibold text-[14px] text-ink-900 mt-2">{m.property}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-2">{m.std}</p>
                    </div>
                  </motion.div>
                </Reveal>
              )
            })}

            {/* Flame cell — spans 2 cols */}
            <Reveal delay={0.12} className="sm:col-span-2 lg:col-span-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-6 flex items-center gap-5"
              >
                <span className="grid place-items-center w-12 h-12 shrink-0 rounded-[10px] bg-grain-300/40 text-grain-600">
                  <Flame size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-display font-extrabold text-[22px] text-ink-900 tracking-[-0.02em]">Class 1/A flame retardant</p>
                  <p className="text-[13.5px] text-sand-500 mt-1.5">Smoke-suppressant and self-extinguishing — tested to ASTM E84.</p>
                </div>
              </motion.div>
            </Reveal>

            {matrix.slice(3, 5).map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <Reveal key={m.property} delay={0.18 + i * 0.06}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-6 flex flex-col justify-between gap-4"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-[9px] bg-leaf-100 text-leaf-700">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-[26px] tracking-[-0.02em] text-ink-900 leading-none">{m.value}</p>
                      <p className="font-heading font-semibold text-[14px] text-ink-900 mt-2">{m.property}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-2">{m.std}</p>
                    </div>
                  </motion.div>
                </Reveal>
              )
            })}

            {/* Trees cell — spans 2 cols */}
            <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[14px] bg-leaf-100 border border-leaf-200 shadow-[var(--shadow-warm-sm)] p-6 flex items-center justify-between gap-5"
              >
                <div>
                  <p className="eyebrow text-leaf-700 mb-1.5">Axe the Axe</p>
                  <p className="font-display font-extrabold text-[34px] tracking-[-0.02em] text-ink-900 leading-none">20,000+</p>
                  <p className="text-[13px] text-leaf-800 mt-2 max-w-[34ch]">trees spared at full plant capacity, every single year.</p>
                </div>
                <Leaf size={48} strokeWidth={1.3} className="text-leaf-500/50 shrink-0" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product range — raised cards on the warm husk surface */}
      <section id="products" className="relative py-20 px-6 lg:px-10 bg-husk-100 section-seam overflow-hidden">
        <OrganicVector flip className="absolute -bottom-28 -left-32 w-[30rem] h-[30rem] opacity-60" tone="grain" />
        <div className="relative max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">Product range</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 mb-9 text-balance">
              Five products. One zero-wood system.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.slice(0, 5).map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.07} className={i === 0 ? 'sm:col-span-2' : ''}>
                <ProductTile p={p} big={i === 0} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band — warm leaf-tinted panel, echoing the About hero's optimism */}
      <section className="relative py-24 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <Reveal className="max-w-[1100px] mx-auto rounded-[16px] bg-leaf-100 border border-leaf-200 px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <motion.div
            aria-hidden
            animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-leaf-300/40 blur-[100px]"
          />
          <OrganicVector className="absolute -bottom-16 -right-20 w-80 h-80 opacity-40" />
          <p className="eyebrow text-leaf-700 mb-4 relative">Let's build something honest</p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance relative">
            Ready to specify a material that doesn't cost the earth?
          </h2>
          <p className="mt-4 text-leaf-800 max-w-xl mx-auto relative">
            Talk to our team about specifications, finishes and how Indowud NFC
            can fit into your next project — or request a physical sample today.
          </p>
          <Link to="/contact" className="relative inline-block mt-8">
            <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Start a conversation</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}

function ProductTile({ p, big }) {
  return (
    <Link to={`/products/${p.id}`} className="group block h-full rounded-[14px] overflow-hidden bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-warm-lg)]">
      <Swatch tone={p.tone} image={p.image} imageFit="contain" ratio={big ? '21/9' : '4/3'} rounded="rounded-none" />
      <div className="px-5 pt-4.5 pb-5">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-heading font-bold text-[20px] text-ink-900 m-0">{p.name}</h3>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-500 bg-husk-100 border border-sand-200 rounded-full px-2.5 py-1">{p.tag}</span>
        </div>
        <p className={`font-body text-[14.5px] leading-relaxed text-sand-500 m-0 ${big ? 'max-w-[52ch]' : ''}`}>{p.desc}</p>
        <span className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-500 group-hover:text-leaf-600 transition-colors duration-300">
          View product <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
