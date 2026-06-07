import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Globe, FileCheck, Trees, Wind, CloudRain, Shapes, ShieldCheck, Recycle, Target, Eye, Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Swatch from '../components/ui/Swatch'
import { certifications, benefits, philosophy } from '../data/content'
import riceFields from '../assets/photos/rice-fields.jpg'
import factoryAerial from '../assets/photos/factory-aerial-2.jpg'
import factoryInterior from '../assets/photos/factory-interior.jpg'
import iso9001 from '../assets/badges/iso-9001.png'
import iso14001 from '../assets/badges/iso-14001.png'
import iso45001 from '../assets/badges/iso-45001.png'
import rohs from '../assets/badges/rohs.png'
import chairmanPhoto from '../assets/team/chairman.webp'
import varunPhoto from '../assets/team/varun.webp'
import chairmanSign from '../assets/team/chairman-sign.png'

const badgeStrip = [
  { src: iso9001, label: 'ISO 9001:2015', desc: 'Our quality management system is certified to the international standard, keeping every batch consistent from raw husk to finished board.' },
  { src: iso14001, label: 'ISO 14001:2015', desc: 'An externally audited environmental management system that holds our factory floor accountable to measurable ecological targets.' },
  { src: iso45001, label: 'ISO 45001:2015', desc: 'Independently certified occupational health and safety management, protecting every person who helps make Indowud NFC.' },
  { src: rohs, label: 'RoHS Compliant', desc: 'Verified free of the hazardous substances restricted under RoHS — safe to specify for homes, schools and healthcare interiors alike.' },
]

// Mission, Vision and Quality - reproduced as published on the company's
// official Mission & Vision page, word for word.
const principles = [
  { Icon: Target, title: 'Mission', text: 'Our mission is to become the pioneers of agri-based NFC products in the world, as superior alternate of wood for home owners, builders, architects and designers.' },
  { Icon: Eye, title: 'Vision', text: 'Our vision is to make Indowud NFC a brand synonymous with sustainability and innovation in the building materials with Make in India Initiative.' },
  { Icon: Award, title: 'Quality', text: 'We strategize around one principle goal - passion for producing and delivering quality products that surpass customer expectations.' },
]

const certIcons = { 'badge-check': BadgeCheck, globe: Globe, 'file-check': FileCheck }
const benefitIcons = { trees: Trees, wind: Wind, 'cloud-rain': CloudRain, shapes: Shapes, 'shield-check': ShieldCheck, recycle: Recycle }

export default function Sustainability() {
  return (
    <div>
      {/* Hero */}
      <section className="texture-grain texture-charcoal text-husk-100 min-h-[58vh] flex items-center pt-24 pb-16 px-6 lg:px-10">
        <div className="max-w-[900px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">The Ahimsa Design Philosophy</p>
          </Reveal>
          <div className="space-y-2.5">
            {philosophy.map((line, i) => (
              <Reveal key={line} delay={i * 0.12}>
                <p className="font-display font-medium italic text-2xl sm:text-3xl text-husk-50 text-balance">{line}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.45}>
            <p className="mt-8 text-sand-300 leading-relaxed max-w-2xl mx-auto">
              "No trees cut. No forests destroyed. No beings harmed." Ahimsa -
              the principle of non-violence - sits at the centre of how we
              design, manufacture and think about material. It isn't a tagline.
              It's the filter every decision passes through, from the rice
              field to the finished panel.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Husk to habitat */}
      <section className="py-20 px-6 lg:px-10 bg-husk-50">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <Swatch tone="leaf" ratio="1/1" rounded="rounded-[12px]" image={riceFields} label="Rice husk · raw material" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="eyebrow text-leaf-600 mb-4">Husk to Habitat</p>
            <h2 className="font-heading font-bold text-3xl tracking-[-0.02em] text-ink-900 mb-5 text-balance">
              A material that gives back more than it takes
            </h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              Rice husk is one of the world's most abundant agricultural
              by-products - and one of the most under-used. Instead of being
              burned in open fields, the husk used in Indowud NFC is processed
              into a dense, durable composite that performs like premium
              tropical wood, without a single tree felled.
            </p>
            <p className="text-ink-600 leading-relaxed">
              The result is a board that's climate-positive at every stage: it
              prevents deforestation, reduces agricultural air pollution, and
              keeps emissions out of the homes and buildings it furnishes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-leaf-600 mb-3.5">From the Leadership</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              A philosophy carried forward, generation to generation
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            <Reveal>
              <div className="h-full rounded-[14px] bg-white border border-sand-200 p-8 shadow-[var(--shadow-warm-sm)]">
                <img src={chairmanPhoto} alt="Chairman" className="w-20 h-20 rounded-full object-cover mb-5" />
                <p className="text-ink-600 leading-relaxed italic mb-5">
                  "We started this company with one belief - that progress
                  shouldn't come at the cost of the planet. Every board we make
                  is proof that you can build a business, and a better future,
                  without cutting down a single tree."
                </p>
                <img src={chairmanSign} alt="Chairman's signature" className="h-10 w-auto object-contain mb-1.5" />
                <p className="font-heading font-bold text-ink-900">Chairman</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-500 mt-0.5">Indowud NFC</p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="h-full rounded-[14px] bg-white border border-sand-200 p-8 shadow-[var(--shadow-warm-sm)]">
                <img src={varunPhoto} alt="Team member" className="w-20 h-20 rounded-full object-cover mb-5" />
                <p className="text-ink-600 leading-relaxed italic mb-5">
                  "Ahimsa isn't a marketing line for us - it's the standard
                  every decision is measured against, from sourcing husk to
                  shipping the finished panel. We're building a material
                  India's architects can specify with a clear conscience."
                </p>
                <p className="font-heading font-bold text-ink-900 mt-[52px]">Varun</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-500 mt-0.5">Indowud NFC</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Factory */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-10 items-center">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-4">Made in Chennai</p>
            <h2 className="font-heading font-bold text-3xl tracking-[-0.02em] text-ink-900 mb-5 text-balance">
              Inside the factory where husk becomes habitat
            </h2>
            <p className="text-ink-600 leading-relaxed mb-4">
              Our manufacturing facility in Chennai, Tamil Nadu turns
              agricultural rice husk - sourced from surrounding farms - into
              dense, engineered NFC panels through a closed-loop process
              designed to leave nothing behind: no wood pulp, no toxic
              binders, no wasted husk.
            </p>
            <p className="text-ink-600 leading-relaxed">
              Every board that leaves this site carries CII GreenPro
              certification and an Environmental Product Declaration (EPD),
              so architects can specify it with full confidence in its
              life-cycle impact.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-3.5">
              <Swatch tone="board" ratio="3/4" rounded="rounded-[12px]" image={factoryAerial} label="Factory · aerial view" className="col-span-2 sm:col-span-1" />
              <Swatch tone="husk" ratio="3/4" rounded="rounded-[12px]" image={factoryInterior} label="Production line" className="col-span-2 sm:col-span-1" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Founder's journey - the origin story behind the pivot to NFC */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[880px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">Where It Began</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              From ₹100 a month to an eco-industrial pioneer
            </h2>
            <p className="mt-5 text-ink-600 leading-relaxed max-w-xl mx-auto">
              Indowud's founder spent four decades inside the plywood trade
              before walking away from a thriving business to build something
              that wouldn't cost the country its forests.
            </p>
          </Reveal>
          <div className="space-y-5">
            {[
              { year: '1972', text: 'Arrives in Kolkata and takes up work as an office boy on ₹100 a month, completing his B.Com at night college alongside.' },
              { year: '1987', text: 'Moves to Chennai as an accountant, then pivots into marketing within the plywood industry - learning the trade from the ground up.' },
              { year: '2000s', text: 'Launches his own plywood enterprise, building it into a major importing-and-manufacturing operation with substantial turnover.' },
              { year: '2015', text: 'Recognising the environmental toll of working in wood, he divests entirely from a successful company to search for a genuinely sustainable alternative.' },
              { year: '2017', text: 'Founds Indowud Design Technology to transform paddy stubble - "parali" - into premium architectural boards, turning a pollution crisis into a building material.' },
            ].map((m, i) => (
              <Reveal key={m.year} delay={i * 0.06}>
                <div className="flex gap-5 items-start rounded-[12px] border border-sand-200 bg-white p-6 shadow-[var(--shadow-warm-sm)]">
                  <span className="shrink-0 font-mono text-sm font-semibold text-leaf-700 bg-leaf-100 border border-leaf-200 rounded-full px-3.5 py-1.5">{m.year}</span>
                  <p className="text-[14.5px] leading-relaxed text-sand-500">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3}>
            <div className="mt-7 rounded-[12px] bg-leaf-100/60 border border-leaf-200 p-6 text-center">
              <p className="text-[14.5px] leading-relaxed text-leaf-800">
                Today, the Chennai-based startup provides <strong>40 direct jobs</strong> and
                supports <strong>over 100 indirect livelihoods</strong>, actively reshaping
                the local economy around a cleaner way to build.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission, Vision & Quality */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">What Drives Us</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Mission, vision and the standard we hold ourselves to
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-[14px] bg-white border border-sand-200 p-7 shadow-[var(--shadow-warm-sm)]">
                  <span className="grid place-items-center w-11 h-11 rounded-[10px] bg-leaf-100 text-leaf-700 mb-4">
                    <p.Icon size={19} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-ink-900 mb-2">{p.title}</h3>
                  <p className="text-[14.5px] leading-relaxed text-sand-500">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-leaf-600 mb-3.5">Why It Matters</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Six reasons architects are switching to NFC
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4.5">
            {benefits.map((b, i) => {
              const Icon = benefitIcons[b.icon]
              return (
                <Reveal key={b.title} delay={(i % 3) * 0.08}>
                  <div className="h-full rounded-[12px] bg-white border border-sand-200 p-7 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-1.5">
                    <span className="grid place-items-center w-11 h-11 rounded-[5px] bg-leaf-100 text-leaf-700 mb-4">
                      {Icon && <Icon size={20} strokeWidth={1.6} />}
                    </span>
                    <h3 className="font-heading font-bold text-lg text-ink-900 mb-2">{b.title}</h3>
                    <p className="text-sm leading-relaxed text-sand-500">{b.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="eyebrow text-leaf-600 mb-3.5">Verified, Not Just Promised</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Our green claims are independently certified
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {certifications.map((c, i) => {
              const Icon = certIcons[c.icon]
              return (
                <Reveal key={c.name} delay={i * 0.1}>
                  <div className="h-full rounded-[12px] border border-leaf-200 bg-leaf-100/50 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-warm-lg)]">
                    {c.badge ? (
                      <img src={c.badge} alt="" className="mx-auto mb-4 w-16 h-16 object-contain" />
                    ) : (
                      <div className="mx-auto mb-4 grid place-items-center w-12 h-12 rounded-full bg-leaf-500 text-husk-50">
                        {Icon && <Icon size={20} strokeWidth={1.8} />}
                      </div>
                    )}
                    <h3 className="font-heading font-bold text-lg text-ink-900 mb-2">{c.name}</h3>
                    <p className="text-sm leading-relaxed text-sand-500">{c.desc}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
          <Reveal delay={0.2} className="mt-7">
            <p className="eyebrow text-leaf-600 mb-5 text-center">And the standards behind every batch</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {badgeStrip.map((b, i) => (
                <Reveal key={b.label} delay={i * 0.08}>
                  <div className="h-full rounded-[12px] border border-leaf-200 bg-leaf-100/50 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-warm-lg)]">
                    <img src={b.src} alt={b.label} className="mx-auto mb-4 w-16 h-16 object-contain" />
                    <h3 className="font-heading font-bold text-base text-ink-900 mb-2">{b.label}</h3>
                    <p className="text-[13px] leading-relaxed text-sand-500">{b.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="texture-grain texture-charcoal py-24 px-6 lg:px-10 text-center text-husk-100">
        <Reveal>
          <p className="font-heading font-semibold text-2xl sm:text-3xl lg:text-4xl text-husk-50 leading-snug text-balance max-w-2xl mx-auto tracking-[-0.01em]">
            "Only when we make the right choices, we achieve the right consequences."
          </p>
          <p className="mt-5 eyebrow text-leaf-300">- The Indowud Ethos</p>
          <Link to="/contact" className="inline-block mt-9">
            <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Talk to our team</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
