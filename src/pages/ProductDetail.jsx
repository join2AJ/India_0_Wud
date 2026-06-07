import { useEffect, useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, Package, Download, BadgeCheck, Droplet, Bug, Flame, Anvil } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import Swatch from '../components/ui/Swatch'
import SpecCard from '../components/ui/SpecCard'
import MaterialPreview from '../components/ui/MaterialPreview'
import { products, categories, finishes, thicknesses } from '../data/content'

const detailSpecs = [
  { Icon: Droplet, value: '100%', property: 'Waterproof', std: '0% absorption' },
  { Icon: Bug, value: '100%', property: 'Termite proof', std: 'Zero damage' },
  { Icon: Flame, value: 'Class 1/A', property: 'Flame retardant', std: 'ASTM E84' },
  { Icon: Anvil, value: '110 PHR', property: 'Husk-loaded density', std: 'High screw-hold' },
]

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [finish, setFinish] = useState(0)
  const [thick, setThick] = useState(2)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [id])

  if (!product) return <Navigate to="/products" replace />

  const category = categories.find((c) => c.slug === product.category)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
      className="max-w-[1200px] mx-auto px-6 lg:px-10 pt-16 pb-20"
    >
      <Link to={`/products/category/${product.category}`} className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] uppercase text-sand-500 hover:text-ink-900 transition-colors duration-200 mb-7">
        <ArrowLeft size={15} /> {category?.label || 'All products'}
      </Link>

      <div className="grid lg:grid-cols-2 gap-11 items-start">
        <div>
          <MaterialPreview finish={finishes[finish]} thickness={thicknesses[thick]} className="w-full" />
          <div className="flex gap-3 mt-3.5">
            <Swatch image={product.image} imageFit="contain" ratio="1/1" rounded="rounded-[5px]" className="flex-1" label="Product photo" />
            <Swatch tone={product.tone} ratio="1/1" rounded="rounded-[5px]" className="flex-1 opacity-80" label="Material tone" />
          </div>
        </div>

        <div>
          <div className="flex gap-2 mb-4">
            <Badge tone="cert" icon={<BadgeCheck size={13} />}>GreenPro</Badge>
            <Badge tone="accent">Zero-wood</Badge>
          </div>
          <h1 className="font-heading font-bold text-[clamp(2rem,4vw,2.75rem)] tracking-[-0.02em] text-ink-900 mb-3.5 leading-[1.04]">{product.name}</h1>
          <p className="text-lg leading-relaxed text-ink-600 mb-7 max-w-[46ch]">
            {product.longDesc || product.desc}
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

          <p className="text-xs text-sand-400 mb-7 max-w-[46ch] leading-relaxed">
            The swatch above is procedurally generated to preview your finish
            and thickness selection - actual board grain and tone may vary.
            Request a physical sample for an exact match.
          </p>

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
