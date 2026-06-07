import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ArrowLeft, Package, Download, BadgeCheck, Droplet, Bug, Flame, Anvil } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Swatch from '../components/ui/Swatch'
import SpecCard from '../components/ui/SpecCard'
import { products, finishes, thicknesses } from '../data/content'
import nfcBoardSample from '../assets/photos/nfc-board-sample.webp'
import interiorShowcase from '../assets/photos/interior-showcase.webp'

const detailSpecs = [
  { Icon: Droplet, value: '100%', property: 'Waterproof', std: '0% absorption' },
  { Icon: Bug, value: '100%', property: 'Termite proof', std: 'Zero damage' },
  { Icon: Flame, value: 'Class 1/A', property: 'Flame retardant', std: 'ASTM E84' },
  { Icon: Anvil, value: '110 PHR', property: 'Husk-loaded density', std: 'High screw-hold' },
]

export default function Products() {
  const [active, setActive] = useState(null)

  return (
    <div className="bg-husk-50 min-h-screen">
      {active ? (
        <ProductDetail product={active} onBack={() => setActive(null)} />
      ) : (
        <ProductGrid onOpen={setActive} />
      )}
    </div>
  )
}

function ProductGrid({ onOpen }) {
  return (
    <div>
      <section className="pt-16 pb-14 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">The Collection</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-ink-900 max-w-[18ch] leading-[1.05] text-balance">
              Five products. One zero-wood system.
            </h1>
            <p className="mt-5 text-lg text-sand-500 max-w-[60ch] leading-relaxed">
              Indowud NFC isn't plywood, and it isn't a wood-fibre board — those
              still carry wood particles. Ours is built purely from agricultural
              husk, engineered to outperform tropical wood at every turn.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
          {products.map((p, i) => (
            <Reveal key={p.id} delay={(i % 3) * 0.08} className={i === 0 ? 'sm:col-span-2 lg:col-span-2' : ''}>
              <button onClick={() => onOpen(p)} className="group block w-full text-left h-full rounded-[12px] overflow-hidden border border-sand-200 bg-white shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-[3px] cursor-pointer">
                <Swatch tone={p.tone} ratio={i === 0 ? '21/9' : '4/3'} rounded="rounded-none" />
                <div className="px-5 pt-4.5 pb-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <h3 className="font-heading font-bold text-[20px] text-ink-900 m-0">{p.name}</h3>
                    <Badge tone="outline">{p.tag}</Badge>
                  </div>
                  <p className="font-body text-[14.5px] leading-relaxed text-sand-500 m-0">{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-500 group-hover:text-leaf-600 transition-colors duration-200">
                    View product <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-ink-900 text-balance">
            Want detailed specifications or a sample board?
          </h2>
          <p className="mt-4 text-sand-500 max-w-xl mx-auto">
            Reach out and our team will guide you to the right product, finish and thickness for your project.
          </p>
          <Link to="/contact" className="inline-block mt-8">
            <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Request a brochure</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}

function ProductDetail({ product, onBack }) {
  const [finish, setFinish] = useState(0)
  const [thick, setThick] = useState(2)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-20"
    >
      <button onClick={onBack} className="inline-flex items-center gap-1.5 bg-transparent border-0 cursor-pointer font-mono text-xs tracking-[0.08em] uppercase text-sand-500 hover:text-ink-900 transition-colors duration-200 p-0 mb-7">
        <ArrowLeft size={15} /> All products
      </button>

      <div className="grid lg:grid-cols-2 gap-11 items-start">
        <div>
          <Swatch
            tone={product.tone}
            ratio="4/3"
            frame
            image={product.id === 'board' ? nfcBoardSample : undefined}
            imageFit="contain"
            label={`${product.name} · ${thicknesses[thick]} ${finishes[finish]}`}
          />
          <div className="flex gap-3 mt-3.5">
            <Swatch image={nfcBoardSample} imageFit="contain" ratio="1/1" rounded="rounded-[5px]" className="flex-1 cursor-pointer" />
            <Swatch image={interiorShowcase} ratio="1/1" rounded="rounded-[5px]" className="flex-1 cursor-pointer opacity-70" label="In application" />
            <Swatch tone="jaali" ratio="1/1" rounded="rounded-[5px]" className="flex-1 cursor-pointer opacity-70" />
          </div>
        </div>

        <div>
          <div className="flex gap-2 mb-4">
            <Badge tone="cert" icon={<BadgeCheck size={13} />}>GreenPro</Badge>
            <Badge tone="accent">Zero-wood</Badge>
          </div>
          <h1 className="font-heading font-bold text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.02em] text-ink-900 mb-3.5 leading-[1.04]">{product.name}</h1>
          <p className="text-lg leading-relaxed text-ink-600 mb-7 max-w-[46ch]">
            {product.desc} Engineered from rice husk, it looks and works like
            premium plywood — only it never warps, rots, or burns easily.
          </p>

          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-sand-500 mb-2.5">Finish</p>
          <div className="flex flex-wrap gap-2.5 mb-6">
            {finishes.map((f, i) => (
              <button
                key={f}
                onClick={() => setFinish(i)}
                className={`font-body text-[13.5px] px-3.5 py-2 cursor-pointer rounded-full border-[1.5px] transition-all duration-200 ${
                  finish === i ? 'border-ink-900 bg-ink-900 text-husk-50' : 'border-sand-200 bg-transparent text-ink-600 hover:border-ink-700'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-sand-500 mb-2.5">Thickness</p>
          <div className="flex flex-wrap gap-2.5 mb-7">
            {thicknesses.map((t, i) => (
              <button
                key={t}
                onClick={() => setThick(i)}
                className={`font-mono text-[13px] px-3.5 py-2 cursor-pointer rounded-[5px] border-[1.5px] transition-all duration-200 ${
                  thick === i ? 'border-leaf-500 bg-leaf-100 text-leaf-700 font-semibold' : 'border-sand-200 bg-transparent text-ink-600 hover:border-leaf-400'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <Link to="/contact"><Button variant="accent" size="lg" iconRight={<Package size={17} />}>Request this sample</Button></Link>
            <Button variant="secondary" size="lg" iconLeft={<Download size={17} />}>Datasheet</Button>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-14">
        {detailSpecs.map((s, i) => (
          <SpecCard key={s.property} delay={i * 0.06} icon={<s.Icon size={22} strokeWidth={1.6} />} value={s.value} property={s.property} standard={s.std} />
        ))}
      </div>
    </motion.div>
  )
}
