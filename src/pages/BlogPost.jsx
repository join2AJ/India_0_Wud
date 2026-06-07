import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Clock, Sun, Gem, Sofa, Leaf, CloudRain, Sparkles,
  Factory, LayoutPanelLeft, CheckCircle, ShieldCheck, FlaskConical, Scale,
  Sprout, Building2, Layers, ShieldPlus, Bug, Droplets, Flame, IndianRupee, Home,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import { blogPosts, blogPostBySlug, palettes } from '../data/blogPosts'

const icons = {
  sun: Sun, gem: Gem, sofa: Sofa, leaf: Leaf, 'cloud-rain': CloudRain, sparkles: Sparkles,
  factory: Factory, 'layout-panel-left': LayoutPanelLeft, 'check-circle': CheckCircle,
  'shield-check': ShieldCheck, 'flask-conical': FlaskConical, scale: Scale, sprout: Sprout,
  'building-2': Building2, layers: Layers, 'shield-plus': ShieldPlus, bug: Bug,
  droplets: Droplets, flame: Flame, 'indian-rupee': IndianRupee, home: Home,
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPostBySlug(slug)
  if (!post) return <Navigate to="/blog" replace />

  const index = blogPosts.findIndex((p) => p.slug === slug)
  const Icon = icons[post.icon]
  const art = palettes[index % palettes.length]
  const next = blogPosts[(index + 1) % blogPosts.length]
  const NextIcon = icons[next.icon]
  const nextArt = palettes[(index + 1) % palettes.length]

  return (
    <div>
      <section className={`relative texture-grain text-husk-100 min-h-[54vh] flex items-center pt-24 pb-16 px-6 lg:px-10 overflow-hidden bg-gradient-to-br ${art}`}>
        <div aria-hidden className="absolute inset-0 opacity-25 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, white, transparent 45%), radial-gradient(circle at 85% 80%, white, transparent 40%)' }} />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-ink-950/30 to-ink-950/10" />
        <div className="relative max-w-[760px] mx-auto text-center">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-husk-100/80 hover:text-husk-50 transition-colors duration-200 mb-6">
              <ArrowLeft size={13} /> Back to the journal
            </Link>
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="grid place-items-center w-11 h-11 rounded-full bg-white/15 backdrop-blur-[2px] text-husk-50 ring-1 ring-white/25">
                {Icon && <Icon size={19} strokeWidth={1.6} />}
              </span>
              <Badge tone="accent">{post.tag}</Badge>
            </div>
            <h1 className="font-display font-extrabold text-[clamp(1.9rem,4.5vw,3.1rem)] tracking-[-0.02em] text-husk-50 text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-5 font-mono text-[11px] uppercase tracking-[0.1em] text-husk-100/75">
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {post.read}</span>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-[720px] mx-auto">
          <Reveal>
            <p className="font-heading text-lg leading-relaxed text-ink-900 mb-8 text-balance">
              {post.excerpt}
            </p>
          </Reveal>
          <div className="space-y-5">
            {post.body.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p className="text-[15px] leading-relaxed text-sand-500">{para}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="mt-12 rounded-[14px] border border-leaf-200 bg-leaf-100/50 p-7 flex flex-wrap items-center justify-between gap-5">
              <div>
                <p className="font-heading font-bold text-lg text-ink-900 mb-1">Curious how this plays out on your project?</p>
                <p className="text-sm text-sand-500">Talk to our technical team about specifying Indowud NFC for your next build.</p>
              </div>
              <Link to="/contact" className="shrink-0">
                <Button variant="accent" iconRight={<ArrowRight size={15} />}>Get in touch</Button>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Up next */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-[720px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 mb-4">Read next</p>
            <Link to={`/blog/${next.slug}`} className="group flex items-center gap-5 rounded-[14px] border border-sand-200 bg-white p-5 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
              <div className={`relative shrink-0 w-20 h-20 rounded-[10px] overflow-hidden bg-gradient-to-br ${nextArt} grid place-items-center`}>
                <span className="grid place-items-center w-9 h-9 rounded-full bg-white/15 text-husk-50 ring-1 ring-white/25">
                  {NextIcon && <NextIcon size={16} strokeWidth={1.6} />}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-heading font-bold text-[15px] leading-snug text-ink-900 line-clamp-2">{next.title}</p>
                <p className="mt-1 text-[12.5px] text-sand-400">{next.tag} · {next.read}</p>
              </div>
              <ArrowUpRight size={17} className="shrink-0 text-leaf-600 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
