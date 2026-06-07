import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, Globe, FileCheck, Trees, Wind, CloudRain, Shapes, ShieldCheck, Recycle } from 'lucide-react'
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

const badgeStrip = [
  { src: iso9001, label: 'ISO 9001:2015' },
  { src: iso14001, label: 'ISO 14001:2015' },
  { src: iso45001, label: 'ISO 45001:2015' },
  { src: rohs, label: 'RoHS Compliant' },
]

const certIcons = { 'badge-check': BadgeCheck, globe: Globe, 'file-check': FileCheck }
const benefitIcons = { trees: Trees, wind: Wind, 'cloud-rain': CloudRain, shapes: Shapes, 'shield-check': ShieldCheck, recycle: Recycle }

export default function Sustainability() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-ink-900 text-husk-100 pt-20 pb-20 px-6 lg:px-10">
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
              "No trees cut. No forests destroyed. No beings harmed." Ahimsa —
              the principle of non-violence — sits at the centre of how we
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
              by-products — and one of the most under-used. Instead of being
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
              agricultural rice husk — sourced from surrounding farms — into
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

      {/* Benefits */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 border-y border-husk-300">
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
          <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {badgeStrip.map((b) => (
              <img key={b.label} src={b.src} alt={b.label} title={b.label} className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200" />
            ))}
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10 text-center">
        <Reveal>
          <p className="font-display italic text-2xl sm:text-3xl text-ink-900 leading-relaxed text-balance max-w-2xl mx-auto">
            "Only when we make the right choices, we achieve the right consequences."
          </p>
          <p className="mt-5 eyebrow text-leaf-600">— The Indowud Ethos</p>
          <Link to="/contact" className="inline-block mt-9">
            <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Talk to our team</Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
