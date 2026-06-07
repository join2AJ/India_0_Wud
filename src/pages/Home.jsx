import { Link } from 'react-router-dom'
import { ArrowRight, FileText, Droplet, Bug, Flame, Waves, Wind, Leaf } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Swatch from '../components/ui/Swatch'
import TactileHero from '../components/TactileHero'
import { products, matrix } from '../data/content'

const matrixIcons = {
  droplet: Droplet, bug: Bug, flame: Flame, waves: Waves, wind: Wind, leaf: Leaf,
}

export default function Home() {
  return (
    <div>
      <TactileHero />

      {/* NFC Matrix — engraved bento, same charcoal/grain surface as the hero */}
      <section className="texture-grain texture-charcoal py-20 px-6 lg:px-10 text-cream-100 border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-9">
            <div>
              <p className="eyebrow text-leaf-300 mb-3.5">The NFC Matrix</p>
              <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-cream-50 m-0 max-w-[18ch] leading-[1.05] text-balance">
                Every claim, engraved into one material.
              </h2>
            </div>
            <Button variant="ghost" iconRight={<FileText size={16} />} className="!text-cream-100 hover:!bg-white/[0.06]">Full spec sheet</Button>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:auto-rows-[150px]">
            {/* Feature cell — climate stat, spans 2x2 */}
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <div className="surface-well h-full p-7 flex flex-col justify-between gap-5">
                <span className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-leaf-200 bg-leaf-700/25 border border-leaf-500/40 rounded-full px-3 py-1.5">
                  <Leaf size={13} /> Climate-positive
                </span>
                <div>
                  <p className="font-display font-extrabold text-[56px] leading-none tracking-[-0.02em] text-cream-50">−60%</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-sand-300 max-w-[40ch]">
                    Lower embodied carbon than plywood — built from rice husk
                    that would otherwise be openly burned in the field.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5">GreenPro</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-1.5">EPD verified</span>
                </div>
              </div>
            </Reveal>

            {matrix.slice(0, 2).map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <Reveal key={m.property} delay={i * 0.06}>
                  <div className="surface-well h-full p-6 flex flex-col justify-between gap-4">
                    <span className="grid place-items-center w-10 h-10 rounded-[9px] bg-leaf-500/15 border border-leaf-500/30 text-leaf-300">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-[26px] tracking-[-0.02em] text-cream-50 leading-none">{m.value}</p>
                      <p className="font-heading font-semibold text-[14px] text-sand-200 mt-2">{m.property}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-2">{m.std}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}

            {/* Flame cell — spans 2 cols */}
            <Reveal delay={0.12} className="sm:col-span-2 lg:col-span-2">
              <div className="surface-well h-full p-6 flex items-center gap-5">
                <span className="grid place-items-center w-12 h-12 shrink-0 rounded-[10px] bg-grain-600/20 border border-grain-500/35 text-grain-300">
                  <Flame size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-display font-extrabold text-[22px] text-cream-50 tracking-[-0.02em]">Class 1/A flame retardant</p>
                  <p className="text-[13.5px] text-sand-300 mt-1.5">Smoke-suppressant and self-extinguishing — tested to ASTM E84.</p>
                </div>
              </div>
            </Reveal>

            {matrix.slice(3, 5).map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <Reveal key={m.property} delay={0.18 + i * 0.06}>
                  <div className="surface-well h-full p-6 flex flex-col justify-between gap-4">
                    <span className="grid place-items-center w-10 h-10 rounded-[9px] bg-leaf-500/15 border border-leaf-500/30 text-leaf-300">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-[26px] tracking-[-0.02em] text-cream-50 leading-none">{m.value}</p>
                      <p className="font-heading font-semibold text-[14px] text-sand-200 mt-2">{m.property}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-2">{m.std}</p>
                    </div>
                  </div>
                </Reveal>
              )
            })}

            {/* Trees cell — spans 2 cols */}
            <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-2">
              <div className="surface-well h-full p-6 flex items-center justify-between gap-5">
                <div>
                  <p className="eyebrow text-leaf-300 mb-1.5">Axe the Axe</p>
                  <p className="font-display font-extrabold text-[34px] tracking-[-0.02em] text-cream-50 leading-none">20,000+</p>
                  <p className="text-[13px] text-sand-300 mt-2 max-w-[34ch]">trees spared at full plant capacity, every single year.</p>
                </div>
                <Leaf size={48} strokeWidth={1.3} className="text-leaf-400/40 shrink-0" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product range — raised tiles on the same dark sheet */}
      <section id="products" className="texture-grain texture-charcoal py-20 px-6 lg:px-10 text-cream-100 border-t border-white/[0.05]">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-3.5">Product range</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-cream-50 mb-9 text-balance">
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

      {/* CTA band — engraved leaf panel, kept warm to break the charcoal rhythm */}
      <section className="texture-grain texture-charcoal py-24 px-6 lg:px-10 border-t border-white/[0.05]">
        <Reveal className="max-w-[1100px] mx-auto rounded-[16px] surface-well px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <div aria-hidden className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-leaf-500/10 blur-[100px]" />
          <p className="eyebrow text-leaf-300 mb-4 relative">Let's build something honest</p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-cream-50 text-balance relative">
            Ready to specify a material that doesn't cost the earth?
          </h2>
          <p className="mt-4 text-sand-300 max-w-xl mx-auto relative">
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
    <Link to={`/products/${p.id}`} className="group block h-full rounded-[14px] overflow-hidden surface-raised transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(0,0,0,0.55)]">
      <Swatch tone={p.tone} image={p.image} imageFit="contain" ratio={big ? '21/9' : '4/3'} rounded="rounded-none" />
      <div className="px-5 pt-4.5 pb-5">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-heading font-bold text-[20px] text-cream-50 m-0">{p.name}</h3>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-300 bg-white/[0.04] border border-white/[0.08] rounded-full px-2.5 py-1">{p.tag}</span>
        </div>
        <p className={`font-body text-[14.5px] leading-relaxed text-sand-400 m-0 ${big ? 'max-w-[52ch]' : ''}`}>{p.desc}</p>
        <span className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-400 group-hover:text-leaf-300 transition-colors duration-300">
          View product <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
