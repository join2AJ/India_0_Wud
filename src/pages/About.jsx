import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { philosophy } from '../data/content'

const values = [
  {
    title: 'Zero Deforestation',
    desc: 'We never source from forests. Every board begins as agricultural rice husk — a waste stream turned into a resource.',
  },
  {
    title: 'Zero Toxic Emissions',
    desc: 'No formaldehyde, no harmful binders. What goes into our boards is as carefully chosen as what stays out of the air you breathe.',
  },
  {
    title: 'Designed with Intention',
    desc: '"If you love something, it will work — that is the real design mantra." Every panel is engineered to be loved, used and lived with for decades.',
  },
  {
    title: 'Right Choices, Right Consequences',
    desc: 'We believe material science carries a moral weight. Only when we make the right choices do we arrive at the right outcomes — for people and planet alike.',
  },
]

export default function About() {
  return (
    <div>
      <PageHero
        eyebrow="Our Story"
        title="Born from rice fields, built for the future"
        subtitle="Indowud Polymers Private Limited is a pioneer in climate-positive material science — transforming agricultural rice husk waste into a high-performance Natural Fibre Composite that stands shoulder to shoulder with, and beyond, traditional wood."
      />

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-6">The Ahimsa Design Philosophy</p>
          </Reveal>
          <div className="space-y-2">
            {philosophy.map((line, i) => (
              <Reveal key={line} delay={i * 0.12}>
                <p className="font-display italic text-2xl sm:text-3xl text-char-900 text-balance">{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.45}>
            <p className="mt-8 text-char-800/70 leading-relaxed max-w-2xl mx-auto">
              "No trees cut. No forests destroyed. No beings harmed." Ahimsa — the
              principle of non-violence — sits at the very centre of how we design,
              manufacture and think about material. It's not a tagline; it's the
              filter every decision passes through.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10 bg-husk-50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-3">What We Stand For</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-char-900 text-balance">
              Four ideas that shape every board we make
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.12}>
                <div className="h-full rounded-2xl bg-white border border-char-900/6 p-8 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-leaf-700/5 hover:border-leaf-400/30">
                  <span className="inline-block text-xs font-mono text-leaf-600 mb-3">0{i + 1}</span>
                  <h3 className="font-display text-xl text-char-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-char-800/65 leading-relaxed">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-10">
        <Reveal className="max-w-3xl mx-auto text-center">
          <p className="font-display italic text-2xl sm:text-3xl text-char-900 leading-relaxed text-balance">
            "Only when we make the right choices, we achieve the right consequences."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.3em] text-leaf-600">— The Indowud Ethos</p>
        </Reveal>
      </section>
    </div>
  )
}
