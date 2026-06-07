import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'

const fields = [
  { name: 'name', label: 'Full name', type: 'text', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel', required: false },
  { name: 'company', label: 'Company / Studio', type: 'text', required: false },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <PageHero
        eyebrow="Let's Talk"
        title="Tell us about your next project"
        subtitle="Whether you're an architect specifying materials, a designer exploring finishes, or simply curious about climate-positive building — we'd love to hear from you."
      />

      <section className="py-16 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.2fr] gap-12">
          <Reveal>
            <div className="space-y-6">
              <div className="rounded-2xl border border-char-900/6 bg-white p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-leaf-50 text-leaf-700 shrink-0">
                  <Phone size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-leaf-600 mb-1">Call us</p>
                  <p className="font-display text-lg text-char-900">+91 44 4215 8586</p>
                </div>
              </div>

              <div className="rounded-2xl border border-char-900/6 bg-white p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-leaf-50 text-leaf-700 shrink-0">
                  <Mail size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-leaf-600 mb-1">Email us</p>
                  <p className="font-display text-lg text-char-900">info@indowud.com</p>
                </div>
              </div>

              <div className="rounded-2xl border border-char-900/6 bg-white p-7 flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <span className="grid place-items-center w-11 h-11 rounded-full bg-leaf-50 text-leaf-700 shrink-0">
                  <MapPin size={18} strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-leaf-600 mb-1">Visit us</p>
                  <p className="font-display text-lg text-char-900">Indowud Polymers Pvt. Ltd.</p>
                  <p className="text-sm text-char-800/60 mt-1">Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-char-900/6 bg-white p-8 sm:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full min-h-80 flex flex-col items-center justify-center text-center gap-4"
                >
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-leaf-50 text-leaf-700">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-display text-2xl text-char-900">Message received</h3>
                  <p className="text-char-800/65 max-w-sm">
                    Thank you for reaching out — our team will get back to you
                    within one business day.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    {fields.map((f) => (
                      <label key={f.name} className="block text-left">
                        <span className="text-xs uppercase tracking-[0.2em] text-char-800/50">
                          {f.label}{f.required && ' *'}
                        </span>
                        <input
                          type={f.type}
                          name={f.name}
                          required={f.required}
                          className="mt-2 w-full rounded-xl border border-char-900/12 bg-cream/40 px-4 py-3 text-sm text-char-900 outline-none transition-all duration-300 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15"
                        />
                      </label>
                    ))}
                  </div>
                  <label className="block text-left">
                    <span className="text-xs uppercase tracking-[0.2em] text-char-800/50">Tell us about your project *</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-xl border border-char-900/12 bg-cream/40 px-4 py-3 text-sm text-char-900 outline-none transition-all duration-300 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15 resize-none"
                    />
                  </label>
                  <button
                    type="submit"
                    className="group inline-flex items-center gap-2 rounded-full bg-leaf-700 text-husk-50 px-7 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:shadow-leaf-700/20"
                  >
                    Send message
                    <Send size={15} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
