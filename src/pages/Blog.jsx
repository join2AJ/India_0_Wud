import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import Reveal from '../components/Reveal'
import Badge from '../components/ui/Badge'
import lounge from '../assets/applications/lounge-interior.jpg'
import entryway from '../assets/applications/entryway.jpg'
import facade from '../assets/applications/facade-lighting.jpg'
import riceFields from '../assets/photos/rice-fields.jpg'
import factoryInterior from '../assets/photos/factory-interior.jpg'
import boardSample from '../assets/photos/nfc-board-sample.webp'

const posts = [
  {
    tag: 'Sustainability',
    title: 'Why every Indowud board starts in a paddy field, not a forest',
    excerpt: 'A look at how rice husk - once an air-quality crisis waiting to happen each harvest - becomes the structural backbone of an architectural-grade panel.',
    date: 'May 2026',
    read: '6 min read',
    image: riceFields,
  },
  {
    tag: 'Material Science',
    title: '110 PHR, explained: the number that separates NFC from a WPC',
    excerpt: 'Parts-per-hundred-resin sounds technical, but it is the simplest way to understand why Indowud feels, machines and holds screws like real wood.',
    date: 'April 2026',
    read: '5 min read',
    image: boardSample,
  },
  {
    tag: 'Design',
    title: 'Specifying for humid climates: where waterproof boards earn their keep',
    excerpt: 'From bathroom panelling to coastal façades, a practical look at where 100% water-proof, termite-proof NFC outperforms plywood and MDF on site.',
    date: 'April 2026',
    read: '7 min read',
    image: lounge,
  },
  {
    tag: 'Inside Indowud',
    title: 'Inside the Chennai plant: from milled husk to finished panel in four steps',
    excerpt: 'A walk through the matrix-formulation line that turns agricultural waste into a dense, homogenous, formaldehyde-free composite at scale.',
    date: 'March 2026',
    read: '8 min read',
    image: factoryInterior,
  },
  {
    tag: 'Architecture',
    title: 'Thermoforming 101: designing curves into a "rigid" board',
    excerpt: 'Unlike traditional plywood, NFC behaves like a solid surface under heat. Here is how architects are using that to design complex façade geometry.',
    date: 'February 2026',
    read: '5 min read',
    image: facade,
  },
  {
    tag: 'Projects',
    title: 'A homeowner\'s walkthrough: replacing plywood, room by room',
    excerpt: 'From the entryway to the kitchen, a room-by-room look at where one Chennai household chose Indowud NFC over conventional panel products - and why.',
    date: 'January 2026',
    read: '6 min read',
    image: entryway,
  },
]

export default function Blog() {
  return (
    <div>
      <section className="texture-grain texture-charcoal text-husk-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Journal</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Notes on material, making and the world it builds
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Field notes from the factory floor, the design studio and the
              farms that supply our raw material - on what it takes to build
              without cutting down a single tree.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.08}>
              <article className="group h-full flex flex-col rounded-[14px] border border-sand-200 bg-white overflow-hidden shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1 cursor-pointer">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <span className="absolute top-3 left-3">
                    <Badge tone="accent">{p.tag}</Badge>
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-[17px] leading-snug text-ink-900 mb-2">{p.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-sand-500 mb-5 flex-1">{p.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-sand-200">
                    <div className="flex items-center gap-3.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-400">
                      <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                      <span className="inline-flex items-center gap-1.5"><Clock size={12} /> {p.read}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-leaf-600 transition-transform duration-300 -translate-x-1 group-hover:translate-x-0 opacity-0 group-hover:opacity-100" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-sand-500">
            Have a question you'd like the journal to cover? <Link to="/contact" className="text-leaf-700 font-semibold hover:underline">Write to our team</Link>.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
