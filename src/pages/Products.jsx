import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'
import { products, categories } from '../data/content'

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [active, setActive] = useState(searchParams.get('category') || 'all')

  useEffect(() => {
    const cat = searchParams.get('category')
    if (cat) setActive(cat)
  }, [searchParams])

  function selectTab(slug) {
    setActive(slug)
    if (slug === 'all') setSearchParams({})
    else setSearchParams({ category: slug })
  }

  const tabs = [{ slug: 'all', label: 'All Products' }, ...categories]
  const visible = active === 'all' ? products : products.filter((p) => p.category === active)

  return (
    <div className="bg-husk-50 min-h-screen">
      <Seo
        title="Products"
        description="Browse the full Indowud NFC range — eleven zero-wood products across panels, joinery, surfaces, outdoor profiles and adhesive, all engineered from rice-husk composite."
        path="/products"
      />

      {/* Hero */}
      <section className="pt-20 pb-12 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">The Range</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-ink-900 max-w-[20ch] leading-[1.05] text-balance">
              Eleven products. One zero-wood system.
            </h1>
            <p className="mt-5 text-lg text-sand-500 max-w-[60ch] leading-relaxed">
              Eco-friendly products for a healthier planet — across every surface,
              interior and exterior. Panels, joinery, surfaces, outdoor and adhesive.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Category filter tabs */}
      <div className="sticky top-16 z-10 bg-husk-50/95 backdrop-blur-sm border-b border-sand-200 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto flex gap-1 overflow-x-auto py-3 scrollbar-hide">
          {tabs.map((t) => (
            <button
              key={t.slug}
              onClick={() => selectTab(t.slug)}
              className={`shrink-0 px-4 py-2 rounded-[8px] font-mono text-[11px] tracking-[0.1em] uppercase transition-all duration-200
                ${active === t.slug
                  ? 'bg-ink-900 text-husk-50'
                  : 'text-sand-500 hover:text-ink-900 hover:bg-sand-100'}`}
            >
              {t.label}
              {t.slug !== 'all' && (
                <span className="ml-1.5 opacity-50">
                  {products.filter((p) => p.category === t.slug).length}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Product grid */}
      <section className="py-10 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {visible.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 0.06}>
              <Link
                to={`/products/${p.id}`}
                className="group flex flex-col h-full rounded-[12px] border border-sand-200 bg-white shadow-[var(--shadow-warm-sm)] overflow-hidden transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-[3px]"
              >
                {/* Product image */}
                <div className="relative bg-husk-100 aspect-[4/3] overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col flex-1 p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-heading font-bold text-[16px] text-ink-900 leading-snug">{p.name}</h3>
                    <Badge tone="outline" className="shrink-0 mt-0.5">{p.tag}</Badge>
                  </div>
                  <p className="text-[13.5px] leading-relaxed text-sand-500 flex-1">{p.desc}</p>
                  <span className="inline-flex items-center gap-1.5 mt-4 font-mono text-[11px] tracking-[0.08em] uppercase text-leaf-600 group-hover:text-leaf-700 transition-colors">
                    Learn more <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-ink-900 text-balance">
            Want detailed specifications or a sample board?
          </h2>
          <p className="mt-4 text-sand-500 max-w-xl mx-auto">
            Reach out and our team will guide you to the right product, finish and thickness for your project.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link to="/contact">
              <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Request a sample</Button>
            </Link>
            <Link to="/downloads">
              <Button variant="outline" size="lg">Download brochure</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
