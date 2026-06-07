import { Link } from 'react-router-dom'
import { ArrowRight, Sprout } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { certifications, benefits } from '../data/content'

export default function Sustainability() {
  return (
    <div>
      <PageHero
        eyebrow="Sustainability & Green Rating"
        title="From farm waste to climate-positive architecture"
        subtitle="Each year, millions of tonnes of rice husk are burned across the world, releasing smoke and particulate matter into the air. Indowud intercepts that waste stream and transforms it into a material that builds — closing a loop that nature never asked us to break."
      />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-3xl bg-gradient-to-br from-husk-200 via-husk-100 to-leaf-50 aspect-square flex items-center justify-center relative overflow-hidden">
              <Sprout size={72} strokeWidth={1} className="text-leaf-700/50" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-leaf-400/20 blur-2xl" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-4">Husk to Habitat</p>
            <h2 className="text-3xl font-medium text-char-900 mb-5 text-balance">
              A material that gives back more than it takes
            </h2>
            <p className="text-char-800/70 leading-relaxed mb-4">
              Rice husk is one of the world's most abundant agricultural by-products
              — and one of the most under-used. Instead of being burned in open
              fields, the husk used in Indowud NFC is processed into a dense,
              durable composite that performs like premium tropical wood, without
              a single tree felled.
            </p>
            <p className="text-char-800/70 leading-relaxed">
              The result is a board that is climate-positive at every stage: it
              prevents deforestation, reduces agricultural air pollution, and
              keeps emissions out of the homes and buildings it furnishes.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-husk-50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-3">Why It Matters</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-char-900 text-balance">
              Six reasons architects and designers are switching to NFC
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => (
              <Reveal key={b.title} delay={(i % 3) * 0.1}>
                <div className="h-full rounded-2xl bg-white border border-char-900/6 p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-leaf-700/5 hover:border-leaf-400/30">
                  <h3 className="font-display text-xl text-char-900 mb-2">{b.title}</h3>
                  <p className="text-sm text-char-800/65 leading-relaxed">{b.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-3">Verified, Not Just Promised</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-char-900 text-balance">
              Our green claims are independently certified
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6">
            {certifications.map((c, i) => (
              <Reveal key={c.name} delay={i * 0.12}>
                <div className="h-full rounded-2xl border border-leaf-700/15 bg-leaf-50/60 p-7 text-center transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-leaf-700/5">
                  <div className="mx-auto mb-4 grid place-items-center w-12 h-12 rounded-full bg-leaf-700 text-husk-50 font-display text-lg">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg text-char-900 mb-2">{c.name}</h3>
                  <p className="text-sm text-char-800/65 leading-relaxed">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="text-3xl sm:text-4xl font-medium text-char-900 text-balance">
            Building green isn't a trend for us — it's the only way we know how
          </h2>
          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-2 rounded-full bg-leaf-700 text-husk-50 px-7 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:shadow-leaf-700/20"
          >
            Talk to our sustainability team
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
