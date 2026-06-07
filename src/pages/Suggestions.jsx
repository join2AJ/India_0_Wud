import { Link } from 'react-router-dom'
import { ArrowRight, Hammer, Layers3, Flame, Ruler, Wrench } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const guidelines = [
  {
    Icon: Layers3,
    tag: 'Framing',
    title: 'Framing & constructive grid support',
    points: [
      'Frame on a grid no wider than 400mm centre-to-centre for 12–18mm boards used as load-bearing panels.',
      'Allow a 2–3mm expansion gap at every panel edge and joint — even on a dimensionally stable material, good carpentry leaves room to breathe.',
      'Use NFC Frame and NFC Trim profiles from the same batch to guarantee a consistent colour and grain match across the structure.',
    ],
  },
  {
    Icon: Wrench,
    tag: 'Fixing',
    title: 'Gluing, screwing and fastening',
    points: [
      'Indowud NFC-GLU is formulated specifically for this matrix — it bonds without the formaldehyde load of conventional wood adhesives.',
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
      'For curved forms, heat the panel evenly to 120–130°C — it becomes pliable enough to shape over a mould and locks into the new form on cooling.',
      'Avoid localised, concentrated heat sources; even, ambient heating produces the cleanest, most consistent curve.',
    ],
  },
]

export default function Suggestions() {
  return (
    <div>
      <section className="texture-grain texture-charcoal text-cream-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Installation & Technical Guidelines</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-cream-50 text-balance">
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

      <section className="pb-24 px-6 lg:px-10">
        <Reveal className="max-w-[1000px] mx-auto rounded-[12px] bg-husk-100 border border-husk-300 p-8 sm:p-10 grid sm:grid-cols-[auto_1fr_auto] items-center gap-6">
          <span className="grid place-items-center w-14 h-14 rounded-full bg-ink-900 text-husk-50 shrink-0">
            <Ruler size={22} strokeWidth={1.6} />
          </span>
          <div>
            <h3 className="font-heading font-bold text-xl text-ink-900 mb-1.5">Need site-specific guidance?</h3>
            <p className="text-sm text-sand-500 leading-relaxed max-w-md">
              Our technical team reviews drawings and specs directly with
              architects and fabricators — at no charge — before the order is placed.
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
