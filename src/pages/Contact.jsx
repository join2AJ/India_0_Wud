import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'

const fields = [
  { name: 'name', label: 'Full name', type: 'text', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel', required: false },
  { name: 'company', label: 'Company / Studio', type: 'text', required: false },
]

const info = [
  { Icon: Phone, eyebrow: 'Call us', value: '+91 44 4215 8586' },
  { Icon: Mail, eyebrow: 'Email us', value: 'info@indowud.com' },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <section className="texture-grain texture-charcoal text-husk-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Let's Talk</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Tell us about your next project
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Whether you're an architect specifying materials, a designer
              exploring finishes, or simply curious about climate-positive
              building — we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-11">
          <Reveal>
            <div className="space-y-5">
              {info.map(({ Icon, eyebrow, value }) => (
                <div key={eyebrow} className="rounded-[12px] border border-sand-200 bg-white p-7 flex items-start gap-4 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
                  <span className="grid place-items-center w-11 h-11 rounded-[5px] bg-leaf-100 text-leaf-700 shrink-0">
                    <Icon size={18} strokeWidth={1.6} />
                  </span>
                  <div>
                    <p className="eyebrow text-leaf-600 mb-1">{eyebrow}</p>
                    <p className="font-heading font-semibold text-lg text-ink-900">{value}</p>
                  </div>
                </div>
              ))}
              <div className="rounded-[12px] border border-sand-200 bg-white p-7 flex items-start gap-4 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
                <span className="grid place-items-center w-11 h-11 rounded-[5px] bg-leaf-100 text-leaf-700 shrink-0">
                  <MapPin size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="eyebrow text-leaf-600 mb-1">Visit us</p>
                  <p className="font-heading font-semibold text-lg text-ink-900">Indowud Polymers Pvt. Ltd.</p>
                  <p className="text-sm text-sand-500 mt-1">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[12px] border border-sand-200 bg-white p-8 sm:p-10 shadow-[var(--shadow-warm-sm)]">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-80 flex flex-col items-center justify-center text-center gap-4"
                >
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-leaf-100 text-leaf-700">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-ink-900">Message received</h3>
                  <p className="text-sand-500 max-w-sm">
                    Thank you for reaching out — our team will get back to you
                    within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {fields.map((f) => (
                      <label key={f.name} className="block text-left">
                        <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">
                          {f.label}{f.required && ' *'}
                        </span>
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="block text-left">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Tell us about your project *</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15 resize-none"
                    />
                  </label>
                  <Button type="submit" variant="accent" size="lg" iconRight={<Send size={15} />}>
                    Send message
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
