import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { products, features } from '../data/content'

export default function Products() {
  return (
    <div>
      <PageHero
        eyebrow="The Collection"
        title="One material. Infinite applications."
        subtitle="From flush doors to fluted facades — Indowud NFC is not plywood, and it's not a wood-fibre board. While those contain wood particles, ours is built purely from agricultural husk, reimagined as a premium building material."
      />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.1}>
              <div className="group h-full rounded-2xl overflow-hidden border border-char-900/6 bg-white transition-all duration-400 hover:shadow-xl hover:-translate-y-1.5">
                <div className="h-44 bg-gradient-to-br from-husk-200 via-husk-100 to-leaf-50 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-leaf-600/0 to-transparent group-hover:from-leaf-600/10 transition-all duration-500" />
                  <div
                    aria-hidden
                    className="absolute -bottom-6 -right-6 w-28 h-28 rounded-full bg-husk-300/40 transition-transform duration-500 group-hover:scale-125"
                  />
                  <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-leaf-700/80">{p.tag}</span>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl text-char-900 mb-2.5">{p.name}</h3>
                  <p className="text-sm text-char-800/65 leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-leaf-700 text-husk-50">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-husk-200/80 mb-3">Built to Last</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-balance">
              Every panel carries the same uncompromising standard
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-5">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.08}>
                <div className="flex items-start gap-3">
                  <span className="grid place-items-center w-7 h-7 rounded-full bg-husk-50/10 mt-0.5 shrink-0">
                    <Check size={14} strokeWidth={2} />
                  </span>
                  <div>
                    <p className="font-display text-base">{f.title}</p>
                    <p className="text-sm text-husk-200/70 mt-0.5 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-medium text-char-900 text-balance">
            Want detailed specifications or a sample board?
          </h2>
          <p className="mt-4 text-char-800/65 max-w-xl mx-auto">
            Reach out and our team will guide you to the right product for your project.
          </p>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-leaf-700 text-husk-50 px-7 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:shadow-leaf-700/20"
          >
            Request a brochure
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
