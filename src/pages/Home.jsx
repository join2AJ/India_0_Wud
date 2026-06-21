import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowRight, FileText, Droplet, Bug, Flame, Waves, Wind, Leaf,
  Wrench, ShieldCheck, Gem, Rat, Anchor, Microscope, ShieldPlus,
  Sun, Thermometer, CloudFog, Recycle, FlaskConical, Volume2, CloudOff,
  BadgeCheck, Axe, HeartPulse, Droplets, Blend, ShieldAlert, Sprout,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Swatch from '../components/ui/Swatch'
import OrganicVector from '../components/ui/OrganicVector'
import Magnetic from '../components/ui/Magnetic'
import TactileHero from '../components/TactileHero'
import { products, matrix } from '../data/content'
import greenproBadge from '../assets/badges/greenpro.png'
import iso9001 from '../assets/badges/iso-9001.png'
import iso14001 from '../assets/badges/iso-14001.png'
import iso45001 from '../assets/badges/iso-45001.png'
import rohsBadge from '../assets/badges/rohs.png'
import loungeInterior from '../assets/applications/lounge-interior.jpg'
import kitchenDining from '../assets/applications/kitchen-dining.jpg'
import entryway from '../assets/applications/entryway.jpg'
import bathroom from '../assets/applications/bathroom.jpg'
import terraceFurniture from '../assets/applications/terrace-furniture.jpg'
import decking from '../assets/applications/decking.jpg'
import facadeLighting from '../assets/applications/facade-lighting.jpg'
import fencing from '../assets/applications/fencing.jpg'

// Image badges we hold real assets for, plus the additional compliance
// marks the brochure calls out - rendered as styled chips since we don't
// carry separate logo files for those.
const imageBadges = [
  { src: greenproBadge, label: 'CII GreenPro Ecolabel' },
  { src: iso9001, label: 'ISO 9001:2015' },
  { src: iso14001, label: 'ISO 14001:2015' },
  { src: iso45001, label: 'ISO 45001:2018' },
  { src: rohsBadge, label: 'RoHS Compliant' },
]
const chipBadges = ['CE Marked', 'Lead-Free', 'Make in India', 'MSME Registered', '#StartupIndia', 'EPD Verified']

const matrixIcons = {
  droplet: Droplet, bug: Bug, flame: Flame, waves: Waves, wind: Wind, leaf: Leaf,
}

// Straight from the Indowud nfc brochure's "why choose us" property grid -
// the claims that set the material apart from conventional plywood/MDF.
const propertyTones = {
  green: 'bg-leaf-100 text-leaf-700',
  red: 'bg-[#A64B36]/10 text-[#A64B36]',
  gray: 'bg-sand-200 text-sand-600',
}

const properties = [
  { Icon: Bug, label: 'Termite proof', tone: 'green' },
  { Icon: Droplet, label: 'Water proof', tone: 'green' },
  { Icon: Flame, label: 'Flame retardant', tone: 'green' },
  { Icon: Wrench, label: 'Easily machinable', tone: 'gray' },
  { Icon: ShieldCheck, label: 'No splintering, no crack', tone: 'red' },
  { Icon: Gem, label: 'Durable', tone: 'green' },
  { Icon: Rat, label: 'Anti rodent', tone: 'green' },
  { Icon: Anchor, label: 'Good screw holding', tone: 'green' },
  { Icon: Microscope, label: 'Resistant to fungus, algae or mold', tone: 'green' },
  { Icon: ShieldPlus, label: 'Anti-bacterial', tone: 'green' },
  { Icon: Sun, label: 'UV resistant', tone: 'green' },
  { Icon: Thermometer, label: 'Thermoformable', tone: 'gray' },
  { Icon: CloudFog, label: 'Smoke suppressant', tone: 'green' },
  { Icon: Recycle, label: '100% Recyclable', tone: 'green' },
  { Icon: FlaskConical, label: 'No harmful ingredients', tone: 'red' },
  { Icon: Volume2, label: 'Absorbs sound', tone: 'gray' },
  { Icon: Leaf, label: '100% Eco-friendly', tone: 'green' },
  { Icon: CloudOff, label: 'No formaldehyde emission', tone: 'red' },
]

export default function Home() {
  return (
    <div>
      <TactileHero />

      {/* Property grid - straight from the brochure's "why choose Indowud nfc" page */}
      <section className="relative py-20 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <OrganicVector flip className="absolute -top-28 -left-28 w-[28rem] h-[28rem] opacity-50" />
        <div className="relative max-w-[1200px] mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">Eighteen reasons, one material</p>
            <h2 className="font-heading font-bold text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Everything plywood promises
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
            {properties.map(({ Icon, label, tone }, i) => (
              <Reveal key={label} delay={(i % 6) * 0.05}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full rounded-[12px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-5 text-center flex flex-col items-center gap-3"
                >
                  <span className={`grid place-items-center w-11 h-11 rounded-[10px] ${propertyTones[tone]}`}>
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <p className="font-heading font-semibold text-[12.5px] leading-snug text-ink-900">{label}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NFC Matrix - bento of claims, on the same warm husk surface as About */}
      <section className="relative py-20 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <OrganicVector className="absolute -top-24 -right-32 w-[34rem] h-[34rem] opacity-70" />
        <div className="relative max-w-[1200px] mx-auto">
          <Reveal className="flex flex-wrap items-end justify-between gap-6 mb-9">
            <div>
              <p className="eyebrow text-leaf-600 mb-3.5">The NFC Matrix</p>
              <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 m-0 max-w-[18ch] leading-[1.05] text-balance">
                Every claim, proven in one material.
              </h2>
            </div>
            <Button variant="ghost" iconRight={<FileText size={16} />}>Full spec sheet</Button>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 lg:auto-rows-[150px]">
            {/* Feature cell - climate stat, spans 2x2 */}
            <Reveal className="lg:col-span-2 lg:row-span-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-7 flex flex-col justify-between gap-5"
              >
                <span className="inline-flex w-fit items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.1em] text-leaf-700 bg-leaf-100 border border-leaf-200 rounded-full px-3 py-1.5">
                  <Leaf size={13} /> Climate-positive
                </span>
                <div>
                  <p className="font-display font-extrabold text-[56px] leading-none tracking-[-0.02em] text-ink-900">−60%</p>
                  <p className="mt-3 text-[14.5px] leading-relaxed text-sand-500 max-w-[40ch]">
                    Lower embodied carbon than plywood - built from rice husk
                    that would otherwise be openly burned in the field.
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-500 bg-husk-100 border border-sand-200 rounded-full px-3 py-1.5">GreenPro</span>
                  <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-500 bg-husk-100 border border-sand-200 rounded-full px-3 py-1.5">EPD verified</span>
                </div>
              </motion.div>
            </Reveal>

            {matrix.slice(0, 2).map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <Reveal key={m.property} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-6 flex flex-col justify-between gap-4"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-[9px] bg-leaf-100 text-leaf-700">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-[26px] tracking-[-0.02em] text-ink-900 leading-none">{m.value}</p>
                      <p className="font-heading font-semibold text-[14px] text-ink-900 mt-2">{m.property}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-2">{m.std}</p>
                    </div>
                  </motion.div>
                </Reveal>
              )
            })}

            {/* Flame cell - spans 2 cols */}
            <Reveal delay={0.12} className="sm:col-span-2 lg:col-span-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-6 flex items-center gap-5"
              >
                <span className="grid place-items-center w-12 h-12 shrink-0 rounded-[10px] bg-grain-300/40 text-grain-600">
                  <Flame size={21} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="font-display font-extrabold text-[22px] text-ink-900 tracking-[-0.02em]">Class 1/A flame retardant</p>
                  <p className="text-[13.5px] text-sand-500 mt-1.5">Smoke-suppressant and self-extinguishing - tested to ASTM E84.</p>
                </div>
              </motion.div>
            </Reveal>

            {matrix.slice(3, 5).map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <Reveal key={m.property} delay={0.18 + i * 0.06}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-[14px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] p-6 flex flex-col justify-between gap-4"
                  >
                    <span className="grid place-items-center w-10 h-10 rounded-[9px] bg-leaf-100 text-leaf-700">
                      <Icon size={19} strokeWidth={1.6} />
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-[26px] tracking-[-0.02em] text-ink-900 leading-none">{m.value}</p>
                      <p className="font-heading font-semibold text-[14px] text-ink-900 mt-2">{m.property}</p>
                      <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-2">{m.std}</p>
                    </div>
                  </motion.div>
                </Reveal>
              )
            })}

            {/* Trees cell - spans 2 cols */}
            <Reveal delay={0.3} className="sm:col-span-2 lg:col-span-2">
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="h-full rounded-[14px] bg-leaf-100 border border-leaf-200 shadow-[var(--shadow-warm-sm)] p-6 flex items-center justify-between gap-5"
              >
                <div>
                  <p className="eyebrow text-leaf-700 mb-1.5">Axe the Axe</p>
                  <p className="font-display font-extrabold text-[34px] tracking-[-0.02em] text-ink-900 leading-none">20,000+</p>
                  <p className="text-[13px] text-leaf-800 mt-2 max-w-[34ch]">trees spared at full plant capacity, every single year.</p>
                </div>
                <Leaf size={48} strokeWidth={1.3} className="text-leaf-500/50 shrink-0" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product range - raised cards on the warm husk surface */}
      <section id="products" className="relative py-20 px-6 lg:px-10 bg-husk-100 section-seam overflow-hidden">
        <OrganicVector flip className="absolute -bottom-28 -left-32 w-[30rem] h-[30rem] opacity-60" tone="grain" />
        <div className="relative max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">Product range</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 mb-9 text-balance">
              Eleven products. A zero-wood system.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.07} className={i === 0 ? 'sm:col-span-2' : ''}>
                <ProductTile p={p} big={i === 0} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-8 text-center">
              <Link to="/products">
                <Button variant="outline" iconRight={<ArrowRight size={15} />}>See all 11 products</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* AHIMSA acronym — the philosophy made tangible */}
      <section className="relative py-20 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-14 lg:gap-20 items-start">

            {/* Left: the philosophy text */}
            <Reveal className="lg:w-[320px] shrink-0 lg:sticky lg:top-24">
              <p className="eyebrow text-leaf-600 mb-3.5">The philosophy</p>
              <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance leading-[1.15]">
                Ahimsa Design Philosophy
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-sand-500">
                No trees are cut when making Indowud NFC.
                India has one of the worst termite problems
                — but NFC gives them nothing to eat.
                You don't even need to kill a single termite.
              </p>
              <Link to="/about-us" className="inline-flex items-center gap-2 mt-7 font-mono text-[11px] uppercase tracking-[0.18em] text-leaf-600 hover:text-leaf-700 transition-colors duration-200">
                Our full story <ArrowRight size={13} />
              </Link>
            </Reveal>

            {/* Right: AHIMSA rows */}
            <div className="flex-1 divide-y divide-sand-200 border-t border-sand-200">
              {[
                { letter: 'A', Icon: Axe,        title: 'Axe the axe',           sub: 'No more trees cut — not one.' },
                { letter: 'H', Icon: HeartPulse,  title: 'Healthy homes',          sub: 'Anti-bacterial protective properties.' },
                { letter: 'I', Icon: Droplets,    title: 'Ice, rain & water proof', sub: 'Zero swelling. Zero delamination.' },
                { letter: 'M', Icon: Blend,       title: 'Mouldable',              sub: 'Thermoformable and easy to design with.' },
                { letter: 'S', Icon: ShieldAlert, title: 'Secure',                 sub: 'Against termites and rodents alike.' },
                { letter: 'A', Icon: Sprout,      title: 'Agricultural-husk made', sub: 'Preventing air pollution from husk burning.' },
              ].map(({ letter, Icon, title, sub }, i) => (
                <Reveal key={i} delay={i * 0.07}>
                  <div className="flex items-center gap-6 py-6">
                    <span className="w-12 shrink-0 font-display font-extrabold text-[2.6rem] tracking-[-0.04em] text-leaf-600/40 leading-none select-none">
                      {letter}
                    </span>
                    <div className="flex items-center justify-center w-11 h-11 shrink-0 rounded-[11px] bg-leaf-100">
                      <Icon size={20} strokeWidth={1.5} className="text-leaf-700" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-[16.5px] text-ink-900 tracking-[-0.01em]">{title}</p>
                      <p className="text-[13.5px] text-sand-400 mt-1 font-medium">{sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications gallery - where the material actually lives, room by room */}
      <section className="relative py-20 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <div className="relative max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mb-9">
            <p className="eyebrow text-leaf-600 mb-3.5">Where it lives</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              From the entryway to the terrace, one material does it all
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-sand-500 max-w-[60ch]">
              Indowud NFC moves freely between indoor and outdoor, dry and damp,
              structural and decorative - the same panel that frames a doorway
              can deck a terrace or screen a façade against the monsoon.
            </p>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {[
              { image: loungeInterior, label: 'Living spaces' },
              { image: kitchenDining, label: 'Kitchens & dining' },
              { image: entryway, label: 'Entryways & lobbies' },
              { image: bathroom, label: 'Moisture-prone areas' },
              { image: terraceFurniture, label: 'Terraces & balconies' },
              { image: decking, label: 'Outdoor decking' },
              { image: facadeLighting, label: 'Façades & screens' },
              { image: fencing, label: 'Fencing & boundaries' },
            ].map((a, i) => (
              <Reveal key={a.label} delay={(i % 4) * 0.06} className={i === 0 ? 'col-span-2 row-span-2' : ''}>
                <div className={`group relative overflow-hidden rounded-[12px] surface-engraved-light ${i === 0 ? 'aspect-square sm:aspect-auto sm:h-full min-h-[260px]' : 'aspect-[4/3]'}`}>
                  <img src={a.image} alt={a.label} loading="lazy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/10 to-transparent" />
                  <span className="absolute bottom-3 left-3.5 font-heading font-semibold text-[13px] text-husk-50">{a.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications strip - the compliance marks the brochure leads with */}
      <section className="py-16 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="text-center mb-9">
            <p className="eyebrow text-leaf-600 mb-2.5">Certified, not just claimed</p>
            <h2 className="font-heading font-bold text-xl text-ink-900">Independently verified, every step of the way</h2>
          </Reveal>
          <Reveal delay={0.06}>
            <div className="flex flex-wrap items-center justify-center gap-3.5 mb-5">
              {imageBadges.map((b) => (
                <div key={b.label} className="flex items-center gap-2.5 rounded-[10px] bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] px-4 py-2.5">
                  <img src={b.src} alt={b.label} className="h-8 w-auto object-contain" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-500 max-w-[12ch] leading-tight">{b.label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {chipBadges.map((label) => (
                <span key={label} className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.08em] text-leaf-700 bg-leaf-100 border border-leaf-200 rounded-full px-3.5 py-1.5">
                  <BadgeCheck size={13} /> {label}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA band - warm leaf-tinted panel, echoing the About hero's optimism */}
      <section className="relative py-24 px-6 lg:px-10 bg-husk-50 overflow-hidden">
        <Reveal className="max-w-[1100px] mx-auto rounded-[16px] bg-leaf-100 border border-leaf-200 px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <motion.div
            aria-hidden
            animate={{ opacity: [0.5, 0.85, 0.5], scale: [1, 1.08, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-24 -left-16 w-72 h-72 rounded-full bg-leaf-300/40 blur-[100px]"
          />
          <OrganicVector className="absolute -bottom-16 -right-20 w-80 h-80 opacity-40" />
          <p className="eyebrow text-leaf-700 mb-4 relative">Let's build something honest</p>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance relative">
            Ready to specify a material that doesn't cost the earth?
          </h2>
          <p className="mt-4 text-leaf-800 max-w-xl mx-auto relative">
            Talk to our team about specifications, finishes and how Indowud NFC
            can fit into your next project - or request a physical sample today.
          </p>
          <Magnetic className="relative mt-8">
            <Link to="/contact" className="inline-block">
              <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>Start a conversation</Button>
            </Link>
          </Magnetic>
        </Reveal>
      </section>
    </div>
  )
}

function ProductTile({ p, big }) {
  return (
    <Link to={`/products/${p.id}`} className="group block h-full rounded-[14px] overflow-hidden bg-white border border-sand-200 shadow-[var(--shadow-warm-sm)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-[var(--shadow-warm-lg)]">
      <Swatch tone={p.tone} image={p.image} imageFit="contain" ratio={big ? '21/9' : '4/3'} rounded="rounded-none" />
      <div className="px-5 pt-4.5 pb-5">
        <div className="flex items-center gap-2.5 mb-2">
          <h3 className="font-heading font-bold text-[20px] text-ink-900 m-0">{p.name}</h3>
          <span className="font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-500 bg-husk-100 border border-sand-200 rounded-full px-2.5 py-1">{p.tag}</span>
        </div>
        <p className={`font-body text-[14.5px] leading-relaxed text-sand-500 m-0 ${big ? 'max-w-[52ch]' : ''}`}>{p.desc}</p>
        <span className="inline-flex items-center gap-1.5 mt-3.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-500 group-hover:text-leaf-600 transition-colors duration-300">
          View product <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}
