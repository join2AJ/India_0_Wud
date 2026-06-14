import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Flame, TreePine, Wind, Users, Factory, Sprout, ArrowRight, Quote } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import CountUp from '../components/ui/CountUp'
import riceFieldsImg from '../assets/photos/rice-fields.jpg'
import factoryAerialImg from '../assets/photos/factory-aerial-2.jpg'
import factoryInteriorImg from '../assets/photos/factory-interior.jpg'

const stats = [
  { Icon: TreePine, value: 20, suffix: 'K+', label: 'Trees spared every year by replacing plywood with husk-based panels' },
  { Icon: Wind, value: 60, prefix: '-', suffix: '%', label: 'Lower embodied carbon than a comparable plywood panel' },
  { Icon: Flame, value: 0, label: 'Tonnes of parali burned to make a single Indowud board' },
  { Icon: Users, value: 140, suffix: '+', label: 'Direct and indirect livelihoods supported around the Chennai facility' },
]

const chapters = [
  {
    Icon: Flame,
    title: 'The problem: a field on fire every winter',
    body: "Across North India, paddy farmers burn millions of tonnes of rice-stalk stubble - locally called parali - every harvest season, simply because there has been no economical way to clear it before the next sowing. The smoke blankets entire regions, spikes respiratory illness, and erases any goodwill the crop earned the soil. Multiply that by every field, every season, and the scale of the crisis becomes a public-health emergency repeating on a calendar.",
    art: 'from-[#3b1f12] via-[#7a3a1a] to-[#d97a3a]',
  },
  {
    Icon: TreePine,
    title: 'The other half of the problem: a forest behind every sheet of plywood',
    body: "Meanwhile, the construction industry's appetite for plywood keeps climbing - and every panel begins life as a tree, often decades old, felled to feed a market that has no real substitute. Two unrelated industries, two compounding forms of environmental damage: one burning a resource it has too much of, the other felling a resource it can't replace fast enough.",
    art: 'from-[#15231a] via-[#1f3d2a] to-[#5e9c5f]',
  },
  {
    Icon: Sprout,
    title: 'The idea: what if the waste became the wood?',
    body: "Indowud's founders had spent decades inside the plywood trade and knew exactly what the industry was costing the country's forest cover. The insight that became Indowud NFC was simple to say and hard to execute: rice husk - an agricultural waste stream large enough to choke entire districts in smoke - has the density, the silica content and the fibre structure to become the backbone of an engineered board. Reclaim the husk before it's burned, mill it, bind it into a matrix, and you replace a forest product with a farm by-product.",
    art: 'from-[#241c0c] via-[#5b4a1e] to-[#c9a227]',
  },
  {
    Icon: Factory,
    title: 'The build: a closed loop, from field to façade',
    body: 'The Chennai facility now runs on a simple circular logic. Local rice mills and farming communities supply husk that would otherwise be burned in the open. The plant mills it, blends it into the NFC matrix at a 110 PHR fibre concentration, and presses it into architectural-grade board - termite-proof, waterproof, flame-retardant, and entirely free of added formaldehyde. What returns to the farmer is not smoke and lost topsoil, but a steady cash buyer for a crop residue that used to be a liability.',
    art: 'from-[#1b1f24] via-[#34414d] to-[#7fa8c9]',
  },
  {
    Icon: Users,
    title: 'The ripple: an economy that grows around cleaner air',
    body: "The shift creates work at every link - husk collection and logistics in farming districts, milling and production on the factory floor, and specification and fabrication wherever an architect chooses NFC over plywood. None of it depends on cutting a single tree, and all of it depends on keeping a harvest residue out of the sky.",
    art: 'from-[#1c2317] via-[#3a4a2b] to-[#a9c46c]',
  },
]

export default function CaseStudy() {
  return (
    <div>
      <Seo
        title="Case Study"
        description="How rice-husk waste becomes a forest-saving building material - the story behind Indowud NFC's closed-loop manufacturing."
        path="/case-study"
      />
      <section className="texture-grain texture-charcoal text-husk-100 min-h-[62vh] flex items-center pt-24 pb-20 px-6 lg:px-10 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.16]" aria-hidden>
          <img src={riceFieldsImg} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-ink-950/40" aria-hidden />
        <div className="relative max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Case Study</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              How a season of smoke became a building material
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-2xl mx-auto">
              Every Indowud panel begins where a farmer's fire used to. This is
              the story of how rice-husk waste - and the air, the forests and
              the livelihoods around it - became the raw material for a new
              kind of architecture.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Impact stats */}
      <section className="py-16 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {stats.map(({ Icon, value, prefix = '', suffix = '', label }, i) => (
            <Reveal key={label} delay={i * 0.07}>
              <div className="h-full rounded-[12px] bg-white border border-sand-200 p-6 shadow-[var(--shadow-warm-sm)]">
                <span className="grid place-items-center w-11 h-11 rounded-[10px] bg-leaf-100 text-leaf-700 mb-4">
                  <Icon size={19} strokeWidth={1.6} />
                </span>
                <p className="font-display font-extrabold text-[34px] leading-none tracking-[-0.02em] text-ink-900">
                  <CountUp value={value} prefix={prefix} suffix={suffix} />
                </p>
                <p className="mt-2.5 text-[13px] leading-snug text-sand-500">{label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Narrative chapters */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto">
          <Reveal className="text-center max-w-xl mx-auto mb-14">
            <p className="eyebrow text-leaf-600 mb-3.5">The Story</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Two crises, one closed loop
            </h2>
          </Reveal>
          <div className="space-y-5">
            {chapters.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.06}>
                <div className="rounded-[14px] border border-sand-200 bg-white overflow-hidden shadow-[var(--shadow-warm-sm)] grid sm:grid-cols-[180px_1fr]">
                  <div className={`relative min-h-[140px] sm:min-h-full bg-gradient-to-br ${c.art} overflow-hidden`}>
                    <div aria-hidden className="absolute inset-0 opacity-25 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 30% 30%, white, transparent 45%), radial-gradient(circle at 75% 70%, white, transparent 40%)' }} />
                    <div aria-hidden className="absolute inset-0 texture-grain opacity-40" />
                    <div className="absolute inset-0 grid place-items-center">
                      <span className="grid place-items-center w-14 h-14 rounded-full bg-white/15 backdrop-blur-[2px] text-husk-50 ring-1 ring-white/25">
                        <c.Icon size={24} strokeWidth={1.5} />
                      </span>
                    </div>
                  </div>
                  <div className="p-7 sm:p-8">
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sand-400 mb-1">{`Chapter 0${i + 1}`}</p>
                    <h3 className="font-heading font-bold text-lg text-ink-900 mb-2">{c.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-sand-500">{c.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Voice from the ground */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="h-full rounded-[14px] overflow-hidden">
              <img src={factoryAerialImg} alt="Indowud manufacturing facility, Chennai" className="w-full h-full object-cover min-h-[260px]" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-[14px] bg-white border border-sand-200 p-8 shadow-[var(--shadow-warm-sm)] flex flex-col justify-center">
              <Quote className="text-leaf-300 mb-3" size={28} strokeWidth={1.4} />
              <p className="text-ink-600 leading-relaxed italic mb-5">
                "We didn't want to build another factory that takes from the
                land. We wanted one that gives the land's leftovers somewhere
                useful to go - and gives the people who grow our food a reason
                not to set their fields alight."
              </p>
              <p className="font-heading font-bold text-ink-900">Founder &amp; Chairman</p>
              <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-500 mt-0.5">Indowud NFC, Chennai</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Inside the loop */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <Reveal>
            <div className="rounded-[14px] overflow-hidden">
              <img src={factoryInteriorImg} alt="Husk milling and production line" className="w-full h-full object-cover min-h-[260px]" />
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="eyebrow text-leaf-600 mb-4">What changes, measurably</p>
            <h2 className="font-heading font-bold text-3xl tracking-[-0.02em] text-ink-900 mb-5 text-balance">
              Cleaner air, standing forests, working farms
            </h2>
            <ul className="space-y-3.5">
              {[
                'Parali that would be burned in the open is purchased, collected and milled instead - cutting smoke at its source during the harvest months that matter most for air quality.',
                'Every cubic metre of NFC produced is a cubic metre of plywood that didn\'t need a tree - compounding into tens of thousands of mature trees spared each year at current production volumes.',
                'Farmers gain a buyer for a crop residue that used to cost them time and money to clear, turning a disposal problem into a small but steady second income.',
                'Indowud\'s own workforce - over 140 direct and indirect roles - sits entirely inside this loop, from husk logistics to CNC finishing.',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-sand-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-leaf-500 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <Reveal className="max-w-[1100px] mx-auto rounded-[16px] bg-leaf-100 border border-leaf-200 px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <p className="eyebrow text-leaf-700 mb-4">Be part of the loop</p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.75rem)] tracking-[-0.02em] text-ink-900 max-w-2xl mx-auto text-balance">
            Specify a material whose supply chain solves problems instead of creating them
          </h2>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
            <Link to="/contact">
              <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Talk to our team</Button>
            </Link>
            <Link to="/about-us">
              <Button variant="secondary" size="lg">Read our story</Button>
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  )
}
