import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, Layers3, Flame, Ruler, Wrench, Scissors, Drill, PaintBucket, Printer, Layers, Thermometer } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

// Maximum constructive support span (in mm) by board range and thickness -
// straight from the technical dossier, so fabricators can frame correctly
// the first time.
const supportSpans = {
  thicknesses: ['6mm', '8mm', '12mm', '15/16mm', '18mm', '20mm', '25mm'],
  ranges: [
    { range: 'NFC Neo', density: '625+ Kg/CBM', spans: [150, 200, 250, 300, 350, 400, 500] },
    { range: 'NFC Create', density: '725+ Kg/CBM', spans: [200, 250, 300, 350, 400, 450, 550] },
    { range: 'NFC Build', density: '825+ Kg/CBM', spans: [250, 350, 450, 550, 600, 650, 750] },
  ],
}

const thermoforming = [
  { label: 'Heating temperature', value: '140 – 160 °C' },
  { label: 'Heating time', value: '1–2 min per mm of thickness (e.g. 18–36 min for an 18mm board)' },
  { label: 'Locking time', value: '5–20 minutes, depending on thickness & ambient conditions' },
  { label: 'Cooling time', value: '1–2 minutes per mm of board thickness' },
]

const handling = [
  { Icon: Scissors, label: 'Cut' },
  { Icon: Hammer, label: 'Nail' },
  { Icon: Wrench, label: 'Screw' },
  { Icon: Drill, label: 'Drill' },
  { Icon: PaintBucket, label: 'Paint & varnish' },
  { Icon: Printer, label: 'Print' },
  { Icon: Layers, label: 'Overlay laminate / veneer' },
  { Icon: Thermometer, label: 'Thermoform' },
]

const guidelines = [
  {
    Icon: Layers3,
    tag: 'Framing',
    title: 'Framing & constructive grid support',
    points: [
      'Frame on a grid no wider than 400mm centre-to-centre for 12–18mm boards used as load-bearing panels.',
      'Allow a 2–3mm expansion gap at every panel edge and joint - even on a dimensionally stable material, good carpentry leaves room to breathe.',
      'Use NFC Frame and NFC Trim profiles from the same batch to guarantee a consistent colour and grain match across the structure.',
    ],
  },
  {
    Icon: Wrench,
    tag: 'Fixing',
    title: 'Gluing, screwing and fastening',
    points: [
      'Indowud NFC-GLU is formulated specifically for this matrix - it bonds without the formaldehyde load of conventional wood adhesives.',
      'Standard wood screws and carpentry tools work directly on the board; pre-drilling is recommended only at panel corners and near edges.',
      'Screw-holding strength exceeds MDF and particle board, so fixtures, hinges and hardware can be mounted without additional reinforcement blocks.',
    ],
  },
  {
    Icon: Flame,
    tag: 'Forming',
    title: 'Edge protection & thermoforming',
    points: [
      'Seal cut edges with NFC Trim or an edge band to preserve the factory finish and maintain the flush, monolithic look.',
      'For curved forms, heat the panel evenly to 120–130°C - it becomes pliable enough to shape over a mould and locks into the new form on cooling.',
      'Avoid localised, concentrated heat sources; even, ambient heating produces the cleanest, most consistent curve.',
    ],
  },
]

export default function Suggestions() {
  return (
    <div>
      <section className="texture-grain texture-charcoal text-husk-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Installation & Technical Guidelines</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Built to work the way carpenters already do
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Indowud NFC needs no specialised machinery. These are the
              important suggestions our technical team gives every fabricator,
              architect and site team before the first board is cut.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto space-y-7">
          {guidelines.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.1}>
              <div className="rounded-[12px] border border-sand-200 bg-white p-8 sm:p-9 shadow-[var(--shadow-warm-sm)]">
                <div className="flex items-start gap-5">
                  <span className="grid place-items-center w-12 h-12 rounded-[5px] bg-leaf-100 text-leaf-700 shrink-0">
                    <g.Icon size={20} strokeWidth={1.6} />
                  </span>
                  <div className="flex-1">
                    <Badge tone="outline" className="mb-2.5">{g.tag}</Badge>
                    <h3 className="font-heading font-bold text-xl text-ink-900 mb-4">{g.title}</h3>
                    <ul className="space-y-3">
                      {g.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-sand-500">
                          <span className="mt-2 w-1.5 h-1.5 rounded-full bg-leaf-500 shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Handling - what you can do to the board, straight off the line */}
      <section className="py-16 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="text-center mb-10">
            <p className="eyebrow text-leaf-600 mb-3">Works Like Wood, Behaves Better</p>
            <h2 className="font-heading font-bold text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Handle it exactly like conventional timber
            </h2>
            <p className="mt-3 text-sand-500 max-w-xl mx-auto">
              No specialised machinery, no learning curve - every tool already on site works directly on Indowud NFC.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {handling.map(({ Icon, label }) => (
                <div key={label} className="rounded-[10px] border border-sand-200 bg-white p-5 text-center shadow-[var(--shadow-warm-sm)]">
                  <span className="grid place-items-center w-11 h-11 mx-auto mb-3 rounded-[8px] bg-leaf-100 text-leaf-700">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <p className="font-heading font-semibold text-[13.5px] text-ink-900">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Maximum support span table - straight from the technical dossier */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1000px] mx-auto">
          <Reveal className="max-w-2xl mb-9">
            <p className="eyebrow text-leaf-600 mb-3.5">Constructive Support Reference</p>
            <h2 className="font-heading font-bold text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Maximum support span by thickness &amp; range
            </h2>
            <p className="mt-3 text-sand-500 max-w-xl">
              Indowud NFC boards are homogeneous - frame to this grid for larger
              areas to keep panels flat and free of deformation over time.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="rounded-[12px] border border-sand-200 bg-white overflow-hidden shadow-[var(--shadow-warm-sm)]">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[640px]">
                  <thead>
                    <tr className="border-b border-sand-200">
                      <th className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-sand-400 font-medium px-5 py-3.5">Range · Density</th>
                      {supportSpans.thicknesses.map((t) => (
                        <th key={t} className="font-mono text-[10.5px] uppercase tracking-[0.1em] text-sand-400 font-medium px-5 py-3.5 text-center">{t}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {supportSpans.ranges.map((r) => (
                      <tr key={r.range} className="border-b border-sand-100 last:border-0">
                        <td className="px-5 py-4">
                          <p className="font-heading font-semibold text-[14px] text-ink-900">{r.range}</p>
                          <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-sand-400 mt-0.5">{r.density}</p>
                        </td>
                        {r.spans.map((s, j) => (
                          <td key={j} className="px-5 py-4 text-center text-[13.5px] text-sand-600">{s}mm</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <ul className="mt-7 space-y-2.5">
              {[
                'Fix a magnetic ball catch at both the top and bottom of every wardrobe or cabinet shutter, with a straightener/stiffener as recommended.',
                'Use box-type hinges at a span of every 300mm, and frame all four sides with the necessary stiffeners on sliding doors and shutters.',
                'Fix shutters only after overlaying laminate, veneer or edge banding - or after sealing micro-pores with epoxy / solvent-based putty, primer or sealant.',
                'For ceilings, use 12mm+ board on a 300mm grid (Create / Build) or 200mm grid (Neo). For decking, use 25mm+ board on a 300mm support grid with a 4mm gap between panels.',
                'Leave a 12mm gap between board and wall, 5mm at ceiling and floor, and 3mm between adjoining boards or trims - the panel needs room to breathe and expand.',
                'Recommended adhesives: NFC-GLU, PUR, HeatX, WP1, Probond, Plastilok or Relam - drying time varies with atmospheric conditions.',
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm leading-relaxed text-sand-500">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-leaf-500 shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Thermoforming spec sheet */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-10 items-start">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-3.5">Forming &amp; Finishing</p>
            <h2 className="font-heading font-bold text-[clamp(1.5rem,3.5vw,2.1rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Thermoforming, without compromising strength
            </h2>
            <p className="mt-3 text-sand-500 leading-relaxed">
              Indowud NFC can be thermoformed with a thermoforming machine, heat
              oven, heat gun or infrared heater. Its high natural-fibre content
              keeps density and dimensional stability uncompromised after
              shaping - the panel may shrink slightly into its new form, so cut
              or machine it only after it has taken its final shape, ideally
              over a purpose-built mould.
            </p>
            <p className="mt-3 text-sand-500 leading-relaxed">
              Any pattern can also be printed directly onto the board with a
              flatbed digital printer - keep the surface dust-free, and seal
              the printed area with a transparent varnish or sealant to guard
              against abrasion.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-[12px] border border-sand-200 bg-white divide-y divide-sand-100 shadow-[var(--shadow-warm-sm)]">
              {thermoforming.map((row) => (
                <div key={row.label} className="flex items-start justify-between gap-6 px-6 py-4.5">
                  <span className="font-heading font-semibold text-[14px] text-ink-900 shrink-0">{row.label}</span>
                  <span className="text-[13.5px] text-sand-500 text-right">{row.value}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-10">
        <Reveal className="max-w-[1000px] mx-auto rounded-[12px] bg-husk-100 border border-husk-300 p-8 sm:p-10 grid sm:grid-cols-[auto_1fr_auto] items-center gap-6">
          <span className="grid place-items-center w-14 h-14 rounded-full bg-ink-900 text-husk-50 shrink-0">
            <Ruler size={22} strokeWidth={1.6} />
          </span>
          <div>
            <h3 className="font-heading font-bold text-xl text-ink-900 mb-1.5">Need site-specific guidance?</h3>
            <p className="text-sm text-sand-500 leading-relaxed max-w-md">
              Our technical team reviews drawings and specs directly with
              architects and fabricators - at no charge - before the order is placed.
            </p>
          </div>
          <Link to="/contact">
            <Button variant="accent" size="lg" iconRight={<ArrowRight size={17} />}>
              <Hammer size={16} className="mr-1" /> Talk to technical support
            </Button>
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
