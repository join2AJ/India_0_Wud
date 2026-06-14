import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, ArrowUpRight, Calendar, Clock, CircleCheck } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'
import BlogIllustration from '../components/BlogIllustration'
import { CompareTable, StatBars } from '../components/BlogDataViz'
import { blogPosts, blogPostBySlug } from '../data/blogPosts'

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPostBySlug(slug)
  if (!post) return <Navigate to="/blog" replace />

  const index = blogPosts.findIndex((p) => p.slug === slug)
  const next = blogPosts[(index + 1) % blogPosts.length]

  return (
    <div>
      <Seo
        title={post.title}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: post.title,
          description: post.excerpt,
          author: { '@type': 'Organization', name: 'Indowud NFC' },
          publisher: { '@type': 'Organization', name: 'Indowud NFC' },
          mainEntityOfPage: `https://india-0-wud.netlify.app/blog/${post.slug}`,
        }}
      />
      <section className="relative texture-grain texture-charcoal text-husk-100 min-h-[40vh] flex items-end pt-24 pb-0 px-6 lg:px-10 overflow-hidden">
        <div className="relative max-w-[760px] mx-auto text-center pb-10">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-husk-100/80 hover:text-husk-50 transition-colors duration-200 mb-6">
              <ArrowLeft size={13} /> Back to the journal
            </Link>
            <div className="flex items-center justify-center gap-2.5">
              <Badge tone="accent">{post.tag}</Badge>
              <span className="rounded-[6px] border border-husk-100/25 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-husk-100/80">
                Entry No. {String(post.no).padStart(2, '0')}
              </span>
            </div>
            <h1 className="mt-4 font-display font-extrabold text-[clamp(1.9rem,4.5vw,3.1rem)] tracking-[-0.02em] text-husk-50 text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex items-center justify-center gap-5 font-mono text-[11px] uppercase tracking-[0.1em] text-husk-100/75">
              <span className="inline-flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
              <span className="inline-flex items-center gap-1.5"><Clock size={13} /> {post.read}</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Cover illustration - the visual anchor for the essay's theme */}
      <section className="px-6 lg:px-10 -mt-1">
        <Reveal>
          <div className="max-w-[860px] mx-auto rounded-[16px] overflow-hidden surface-engraved-light aspect-[16/7]">
            <BlogIllustration scene={post.art} className="w-full h-full" />
          </div>
        </Reveal>
      </section>

      <section className="py-14 px-6 lg:px-10">
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

          {post.bullets && (
            <Reveal delay={0.1}>
              <ul className="mt-6 space-y-3.5">
                {post.bullets.map((b) => (
                  <li key={b.title} className="flex items-start gap-3 rounded-[10px] border border-sand-200 bg-white px-4 py-3.5">
                    <CircleCheck size={17} className="shrink-0 mt-0.5 text-leaf-600" strokeWidth={1.8} />
                    <p className="text-[14px] leading-relaxed text-sand-500">
                      <span className="font-heading font-semibold text-ink-900">{b.title}.</span> {b.desc}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {post.viz && (
            <Reveal delay={0.12}>
              <div className="mt-8">
                {post.viz.type === 'table' ? (
                  <CompareTable caption={post.viz.caption} columns={post.viz.columns} rows={post.viz.rows} highlight={post.viz.highlight} />
                ) : (
                  <StatBars caption={post.viz.caption} unit={post.viz.unit} items={post.viz.items} />
                )}
              </div>
            </Reveal>
          )}

          {post.bodyAfterViz && (
            <div className="mt-6 space-y-5">
              {post.bodyAfterViz.map((para, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p className="text-[15px] leading-relaxed text-sand-500">{para}</p>
                </Reveal>
              ))}
            </div>
          )}

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
              <div className="relative shrink-0 w-20 h-20 rounded-[10px] overflow-hidden">
                <BlogIllustration scene={next.art} className="absolute inset-0 w-full h-full" />
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
