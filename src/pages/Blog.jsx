import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Calendar, Clock, Search, X } from 'lucide-react'
import Reveal from '../components/Reveal'
import Badge from '../components/ui/Badge'
import BlogIllustration from '../components/BlogIllustration'
import { blogPosts } from '../data/blogPosts'

export default function Blog() {
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return blogPosts
    return blogPosts.filter((p) =>
      [p.title, p.excerpt, p.tag, String(p.no).padStart(2, '0')]
        .join(' ')
        .toLowerCase()
        .includes(q)
    )
  }, [query])

  return (
    <div>
      <section className="texture-grain texture-charcoal text-husk-100 min-h-[56vh] flex items-center pt-24 pb-16 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Journal</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Notes on material, making and the world it builds
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Field notes from the factory floor, the design studio and the
              farms that supply our raw material - on what it takes to build
              without cutting down a single tree. Twenty-one essays, each
              paired with the numbers and visuals behind the claim.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pt-14 px-6 lg:px-10">
        <div className="max-w-[600px] mx-auto">
          <Reveal>
            <div className="relative">
              <Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-sand-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search the journal — try “termite”, “solar”, “price”…"
                className="w-full rounded-[8px] border border-sand-200 bg-white pl-11 pr-11 py-3.5 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-sand-400 hover:text-ink-900 transition-colors duration-200"
                >
                  <X size={16} />
                </button>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-14 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
        {results.length === 0 ? (
          <Reveal>
            <p className="text-center text-sand-500 py-16">
              No essays match “{query}”. Try a different keyword.
            </p>
          </Reveal>
        ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.07}>
              <Link to={`/blog/${p.slug}`} className="group block h-full">
                <article className="h-full flex flex-col rounded-[14px] border border-sand-200 bg-white overflow-hidden shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <BlogIllustration scene={p.art} className="absolute inset-0 w-full h-full transition-transform duration-500 group-hover:scale-105" />
                    <span className="absolute top-3 left-3">
                      <Badge tone="accent">{p.tag}</Badge>
                    </span>
                    <span className="absolute top-3 right-3 rounded-[6px] bg-ink-900/70 backdrop-blur-sm px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-husk-50">
                      No. {String(p.no).padStart(2, '0')}
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
              </Link>
            </Reveal>
          ))}
        </div>
        )}

        <Reveal delay={0.2}>
          <p className="mt-12 text-center text-sm text-sand-500">
            Have a question you'd like the journal to cover? <Link to="/contact" className="text-leaf-700 font-semibold hover:underline">Write to our team</Link>.
          </p>
        </Reveal>
        </div>
      </section>
    </div>
  )
}
