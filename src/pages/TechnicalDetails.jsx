import { Link } from 'react-router-dom'
import { ArrowRight, FlaskConical, Layers, FileBarChart, Bug, Flame, Wind, Droplets, Check, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import SpecCard from '../components/ui/SpecCard'
import { matrix } from '../data/content'
import rawMaterialImg from '../assets/process/selection-of-raw-material.webp'
import matrixFormulationImg from '../assets/process/matrix-formulation.webp'
import interfaceStrengthImg from '../assets/process/interface-strength.webp'
import manufacturingImg from '../assets/process/manufacturing.webp'

const matrixIcons = { droplet: Droplets, bug: Bug, flame: Flame, waves: FlaskConical, wind: Wind, leaf: Layers }

const comparison = [
  { label: 'Termite proof', nfc: true, wpc: true, ply: false, mdf: false },
  { label: 'Water proof', nfc: true, wpc: true, ply: false, mdf: false },
  { label: 'Flame resistant', nfc: true, wpc: false, ply: false, mdf: false },
  { label: 'Screw holding', nfc: 'Above par', wpc: 'Below par', ply: 'Above par', mdf: 'Below par' },
  { label: 'Indoor & outdoor use', nfc: true, wpc: 'Not always', ply: false, mdf: false },
  { label: 'Eco-friendly', nfc: true, wpc: 'Not always', ply: 'For some time', mdf: 'Hazardous' },
]

const labResults = [
  { test: 'Density', method: 'ASTM D792', value: '800 Kg/CBM' },
  { test: 'Water absorption · 24 hrs', method: 'IS 2380', value: '0.12%' },
  { test: 'Thickness swelling · 2 hrs', method: 'IS 2380', value: '0.06%' },
  { test: 'Modulus of rupture', method: 'IS 2380', value: '14.5 N/mm²' },
  { test: 'Screw withdrawal · face', method: 'IS 2380', value: '2,252 N' },
  { test: 'Tensile strength', method: 'ASTM D638', value: '7.6 MPa' },
  { test: 'Heat deflection · 0.45 MPa', method: 'ASTM D648', value: '64.45°C' },
  { test: 'VOC emissions', method: 'EPA 5035A', value: 'Below detectable limit' },
]

const testReports = [
  { Icon: Bug, title: 'Termite Resistance', std: 'IS 4833 / EN 117', result: 'No damage after 8-week graveyard exposure — zero colonisation.' },
  { Icon: Flame, title: 'Fire Performance', std: 'ASTM E84 · Class 1/A', result: 'Self-extinguishing, low flame spread, smoke-suppressant char layer.' },
  { Icon: Wind, title: 'Smoke Density', std: 'ASTM E662', result: 'Significantly lower optical smoke density than plywood and MDF.' },
  { Icon: Droplets, title: 'Moisture & Swelling', std: '24-hr water immersion', result: '0% thickness swelling, 0% water absorption — fully sealed matrix.' },
]

const composition = [
  {
    title: 'Agricultural rice husk',
    desc: 'The structural backbone — pulverised into a fine, silica-rich fibre that gives the board its density, screw-holding strength and natural wood-like grain.',
  },
  {
    title: 'Engineered polymer matrix',
    desc: 'A blend of mineral additives and polymer resins binds the husk fibres into a homogenous, moisture-sealed composite — with zero added formaldehyde.',
  },
  {
    title: 'Functional additives',
    desc: 'Flame-retardant and anti-microbial compounds are dispersed through the matrix at the formulation stage, not coated on — so the protection runs through the full thickness of the board.',
  },
]

const process = [
  { title: 'Selection of raw material', desc: 'Agricultural rice husk is sourced from surrounding farms and screened for quality before entering the line.', image: rawMaterialImg },
  { title: 'Matrix formulation', desc: 'Husk fibre is blended with the engineered polymer matrix and functional additives in precise ratios.', image: matrixFormulationImg },
  { title: 'Interface strength', desc: 'Heat and pressure fuse the matrix into a dense, homogenous composite with strong inter-fibre bonding.', image: interfaceStrengthImg },
  { title: 'Manufacturing', desc: 'Panels are pressed, cured, trimmed and finished to spec — ready for joinery, façades and interiors.', image: manufacturingImg },
]

export default function TechnicalDetails() {
  return (
    <div>
      <section className="texture-grain texture-charcoal text-cream-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Technical Specifications</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-cream-50 text-balance">
              The science behind a board that performs like wood — and outlasts it
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Every Indowud NFC panel is engineered to a precise matrix
              formulation and verified against international test standards —
              so what you specify is exactly what gets delivered to site.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Raw materials & matrix formulation */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">Raw Materials &amp; Matrix Formulation</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Three components. One homogenous composite.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-5">
            {composition.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="h-full rounded-[12px] border border-sand-200 bg-white p-7 shadow-[var(--shadow-warm-sm)]">
                  <span className="font-mono text-xs text-leaf-600 tracking-[0.14em]">0{i + 1}</span>
                  <h3 className="font-heading font-bold text-lg text-ink-900 mt-2 mb-2">{c.title}</h3>
                  <p className="text-sm leading-relaxed text-sand-500">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing process */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">From Husk to Panel</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Four steps. One closed-loop process.
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
            {process.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="h-full rounded-[14px] border border-sand-200 bg-white p-6 text-center shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
                  <div className="relative w-28 h-28 mx-auto mb-5">
                    <span className="absolute inset-0 rounded-full bg-leaf-100 scale-110" aria-hidden />
                    <img src={p.image} alt={p.title} className="relative w-full h-full rounded-full object-cover border-[3px] border-white shadow-[var(--shadow-warm-sm)]" loading="lazy" />
                    <span className="absolute -bottom-1.5 -right-1.5 grid place-items-center w-8 h-8 rounded-full bg-leaf-600 text-cream-50 font-mono text-[12px] font-semibold border-2 border-white">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-ink-900 mb-1.5">{p.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-sand-500">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Performance matrix */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">The NFC Matrix</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Every performance claim, quantified
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {matrix.map((m, i) => {
              const Icon = matrixIcons[m.icon]
              return (
                <SpecCard
                  key={m.property}
                  delay={(i % 3) * 0.08}
                  icon={Icon && <Icon size={22} strokeWidth={1.6} />}
                  value={m.value}
                  property={m.property}
                  description={m.desc}
                  standard={m.std}
                />
              )
            })}
          </div>
        </div>
      </section>

      {/* Test reports */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">Independently Verified</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Test reports architects can specify against
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-5">
            {testReports.map((t, i) => (
              <Reveal key={t.title} delay={i * 0.08}>
                <div className="h-full rounded-[12px] border border-sand-200 bg-white p-7 flex items-start gap-4 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
                  <span className="grid place-items-center w-11 h-11 rounded-[5px] bg-leaf-100 text-leaf-700 shrink-0">
                    <t.Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5 mb-1.5">
                      <h3 className="font-heading font-bold text-lg text-ink-900 m-0">{t.title}</h3>
                      <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-sand-500 bg-husk-100 px-2 py-1 rounded-[3px]">{t.std}</span>
                    </div>
                    <p className="text-sm leading-relaxed text-sand-500">{t.result}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comparative study */}
      <section className="texture-grain texture-charcoal py-20 px-6 lg:px-10 text-cream-100 border-t border-white/[0.05]">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-leaf-300 mb-3.5">How NFC Compares</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-cream-50 text-balance">
              Measured against plywood, MDF and PVC/WPC foam board
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="surface-well overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-white/[0.08]">
                      <th className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-400 font-medium px-6 py-4">Property</th>
                      <th className="font-mono text-[11px] uppercase tracking-[0.1em] text-leaf-300 font-medium px-6 py-4">Indowud NFC</th>
                      <th className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-400 font-medium px-6 py-4">PVC / WPC Foam</th>
                      <th className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-400 font-medium px-6 py-4">Plywood</th>
                      <th className="font-mono text-[11px] uppercase tracking-[0.1em] text-sand-400 font-medium px-6 py-4">MDF</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.map((row) => (
                      <tr key={row.label} className="border-b border-white/[0.05] last:border-0">
                        <td className="text-[14px] text-sand-200 px-6 py-4">{row.label}</td>
                        {[row.nfc, row.wpc, row.ply, row.mdf].map((cell, j) => (
                          <td key={j} className="px-6 py-4">
                            {cell === true && <Check size={17} className="text-leaf-400" strokeWidth={2.2} />}
                            {cell === false && <X size={17} className="text-signal-danger" strokeWidth={2.2} />}
                            {typeof cell === 'string' && <span className="text-[13px] text-sand-300">{cell}</span>}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lab test results */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1100px] mx-auto">
          <Reveal className="max-w-2xl mb-12">
            <p className="eyebrow text-leaf-600 mb-3.5">Lab-Verified, Not Self-Declared</p>
            <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Tested by CIPET, IPIRTI, Spectro &amp; SGS Labs
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {labResults.map((r, i) => (
                <div key={r.test} className="rounded-[10px] border border-sand-200 bg-white p-5">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-sand-400 mb-2">{r.method}</p>
                  <p className="font-display font-extrabold text-[20px] text-ink-900 leading-tight">{r.value}</p>
                  <p className="text-[13px] text-sand-500 mt-1.5">{r.test}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10 text-center">
        <Reveal>
          <h2 className="font-heading font-bold text-[clamp(1.75rem,4vw,2.5rem)] text-ink-900 text-balance">
            Need the full data sheets for a tender submission?
          </h2>
          <p className="mt-4 text-sand-500 max-w-xl mx-auto">
            Download the complete technical dossier — matrix formulation, test
            certificates and dimensional tolerances — from our resources page.
          </p>
          <Link to="/downloads" className="inline-block mt-8">
            <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>
              <FileBarChart size={16} className="mr-1" /> Go to downloads
            </Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
