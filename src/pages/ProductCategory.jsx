import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ArrowLeft } from 'lucide-react'
import Reveal from '../components/Reveal'
import Badge from '../components/ui/Badge'
import Swatch from '../components/ui/Swatch'
import { products, categories } from '../data/content'

export default function ProductCategory() {
  const { slug } = useParams()
  const category = categories.find((c) => c.slug === slug)
  const items = products.filter((p) => p.category === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [slug])

  if (!category) return <Navigate to="/products" replace />

  return (
    <div className="bg-husk-50 min-h-screen">
      <section className="pt-16 pb-14 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Link to="/products" className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.08em] uppercase text-sand-500 hover:text-ink-900 transition-colors duration-200 mb-7">
            <ArrowLeft size={15} /> All categories
          </Link>
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">Product Category</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-ink-900 max-w-[18ch] leading-[1.05] text-balance">
              {category.label}
            </h1>
            <p className="mt-5 text-lg text-sand-500 max-w-[60ch] leading-relaxed">
              {category.blurb}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 gap-4.5">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 0.08}>
              <Link to={`/products/${p.id}`} className="group block w-full text-left h-full rounded-[12px] overflow-hidden border border-sand-200 bg-white shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-[3px]">
                <Swatch tone={p.tone} image={p.image} imageFit="contain" ratio="4/3" rounded="rounded-none" />
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
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}
