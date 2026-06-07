import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, BookOpen, Layers, Languages, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const resources = [
  { Icon: BookOpen, title: 'E-Brochure · English', desc: 'The full product overview — range, finishes, certifications and the Ahimsa story, in English.', tag: 'PDF · 8.2 MB' },
  { Icon: Languages, title: 'E-Brochure · Hindi', desc: 'वही जानकारी, हिंदी में — उन ग्राहकों और साझेदारों के लिए जो हिंदी में पढ़ना पसंद करते हैं।', tag: 'PDF · 8.4 MB' },
  { Icon: FileText, title: 'Technical Guidelines', desc: 'Framing, fastening, edge protection and thermoforming instructions for fabricators and site teams.', tag: 'PDF · 3.1 MB' },
  { Icon: Layers, title: 'Product Catalogue', desc: 'Full specification sheets for every panel in the range — boards, doors, frames, decking, jaali and more.', tag: 'PDF · 12.6 MB' },
]

export default function Downloads() {
  const [sent, setSent] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div>
      <section className="bg-ink-900 text-husk-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Resources</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Brochures, specs and guidelines — ready to share with your team
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Everything an architect, fabricator or procurement team needs to
              specify Indowud NFC with confidence — request access below and
              we'll email the full set directly to you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-11 items-start">
          <div className="grid sm:grid-cols-2 gap-4.5">
            {resources.map((r, i) => (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-[12px] border border-sand-200 bg-white p-7 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-1">
                  <span className="grid place-items-center w-11 h-11 rounded-[5px] bg-leaf-100 text-leaf-700 mb-4">
                    <r.Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-ink-900 mb-2">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-sand-500 mb-4">{r.desc}</p>
                  <div className="flex items-center justify-between">
                    <Badge tone="outline">{r.tag}</Badge>
                    <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.06em] uppercase text-leaf-600">
                      <Download size={14} /> Request
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.1}>
            <div className="rounded-[12px] border border-sand-200 bg-white p-8 sm:p-10 shadow-[var(--shadow-warm-sm)]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-72 flex flex-col items-center justify-center text-center gap-4"
                >
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-leaf-100 text-leaf-700">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-ink-900">On its way</h3>
                  <p className="text-sand-500 max-w-sm">
                    Check your inbox — the full resource set will land within
                    the next few minutes.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500 mb-1">Request the full set</p>
                  <h3 className="font-heading font-bold text-2xl text-ink-900 mb-1">One form, every resource</h3>
                  <label className="block text-left">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Full name *</span>
                    <input type="text" required className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15" />
                  </label>
                  <label className="block text-left">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Work email *</span>
                    <input type="email" required className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15" />
                  </label>
                  <label className="block text-left">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Organisation</span>
                    <input type="text" className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15" />
                  </label>
                  <Button type="submit" variant="accent" size="lg" iconRight={<Download size={15} />} className="w-full justify-center">
                    Send me the resources
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
