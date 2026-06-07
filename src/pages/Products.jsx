import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Swatch from '../components/ui/Swatch'
import { products, categories } from '../data/content'

export default function Products() {
  return (
    <div className="bg-husk-50 min-h-screen">
      <section className="pt-16 pb-14 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">The Collection</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-ink-900 max-w-[18ch] leading-[1.05] text-balance">
              Three categories. One zero-wood system.
            </h1>
            <p className="mt-5 text-lg text-sand-500 max-w-[60ch] leading-relaxed">
              Indowud NFC isn't plywood, and it isn't a wood-fibre board — those
              still carry wood particles. Ours is built purely from agricultural
              husk, organised into three families engineered for every part of
              a build.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-3 gap-4.5">
          {categories.map((c, i) => {
            const sample = products.find((p) => p.category === c.slug)
            const members = products.filter((p) => p.category === c.slug)
            return (
              <Reveal key={c.slug} delay={i * 0.08}>
                <Link to={`/products/category/${c.slug}`} className="group block w-full text-left h-full rounded-[12px] overflow-hidden border border-sand-200 bg-white shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-[3px]">
                  <Swatch tone={sample.tone} image={sample.image} imageFit="contain" ratio="4/3" rounded="rounded-none" />
                  <div className="px-5 pt-4.5 pb-5">
                    <h3 className="font-heading font-bold text-[20px] text-ink-900 m-0 mb-2">{c.label}</h3>
                    <p className="font-body text-[14.5px] leading-relaxed text-sand-500 m-0">{c.blurb}</p>
                    <p className="font-mono text-[11px] tracking-[0.08em] uppercase text-sand-400 mt-3.5">
                      {members.map((m) => m.name.replace('Indowud NFC ', '').replace('NFC ', '')).join(' · ')}
                    </p>
                    <span className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-500 group-hover:text-leaf-600 transition-colors duration-200">
                      Browse category <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
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
