import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageCircleQuestion, FileText, Hammer } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import factoryAerial from '../assets/photos/factory-aerial-2.jpg'
import factoryInterior from '../assets/photos/factory-interior.jpg'

const officeAddress = 'First Floor, New, 30, 1st Main Rd E, Shenoy Nagar, Chennai, Tamil Nadu 600030'
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`

const fields = [
  { name: 'name', label: 'Full name', type: 'text', required: true },
  { name: 'email', label: 'Email address', type: 'email', required: true },
  { name: 'phone', label: 'Phone number', type: 'tel', required: false },
  { name: 'company', label: 'Company / Studio', type: 'text', required: false },
]

const reasons = [
  'Request a material sample',
  'Get a project quote',
  'Become a dealer / distributor',
  'Technical specification support',
  'Something else',
]

const info = [
  { Icon: Phone, eyebrow: 'Call us', value: '+91 44 4215 8586' },
  { Icon: Mail, eyebrow: 'Email us', value: 'info@indowud.com' },
  { Icon: Clock, eyebrow: 'Working hours', value: 'Mon - Sat, 9:30 AM - 6:30 PM IST' },
]

const nextSteps = [
  { Icon: MessageCircleQuestion, title: 'We listen first', desc: 'Our technical team reviews your brief and reaches out within one business day.' },
  { Icon: FileText, title: 'We recommend', desc: 'You receive finish, thickness and profile suggestions matched to your application.' },
  { Icon: Hammer, title: 'We support the build', desc: 'From sample dispatch to on-site guidance, we stay with you through installation.' },
]

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = Object.fromEntries(new FormData(form))

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({ 'form-name': 'contact', ...data }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
  }

  return (
    <div>
      <Seo
        title="Contact"
        description="Get in touch with Indowud NFC for material samples, project quotes, dealership enquiries and technical specification support."
        path="/contact"
      />
      <section className="texture-grain texture-charcoal text-husk-100 min-h-[56vh] flex items-center pt-24 pb-16 px-6 lg:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Let's Talk</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Tell us about your next project
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Whether you're an architect specifying materials, a designer
              exploring finishes, or simply curious about climate-positive
              building - we'd love to hear from you.
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
                  <p className="text-sm text-sand-500 mt-1">{officeAddress}</p>
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
                    Thank you for reaching out - our team will get back to you
                    within one business day.
                  </p>
                </motion.div>
              ) : (
                <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} className="space-y-6">
                  <input type="hidden" name="form-name" value="contact" />
                  <input type="text" name="bot-field" className="hidden" tabIndex="-1" autoComplete="off" />
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
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">What can we help with? *</span>
                    <select
                      name="reason"
                      required
                      defaultValue=""
                      className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15"
                    >
                      <option value="" disabled>Select a reason for reaching out</option>
                      {reasons.map((r) => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                  </label>
                  <label className="block text-left">
                    <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Tell us about your project *</span>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      className="mt-2 w-full rounded-[5px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15 resize-none"
                    />
                  </label>
                  {error && (
                    <p className="text-sm text-[#A64B36]">
                      Something went wrong sending your message - please try again or email us directly.
                    </p>
                  )}
                  <Button type="submit" variant="accent" size="lg" iconRight={<Send size={15} />}>
                    Send message
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Where we are - the office on the map, plus a glimpse of the factory */}
      <section className="py-20 px-6 lg:px-10 bg-husk-100 section-seam">
        <div className="max-w-[1200px] mx-auto">
          <Reveal className="max-w-2xl mb-9">
            <p className="eyebrow text-leaf-600 mb-3">Find us</p>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-balance">
              Drop by the office, or see where the material is made
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-sand-500 max-w-[60ch]">
              We're based in Shenoy Nagar, Chennai - reach out to schedule a
              visit to the office or a tour of the manufacturing facility
              where rice husk becomes architecture.
            </p>
          </Reveal>
          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-5">
            <Reveal>
              <div className="h-full min-h-[340px] rounded-[12px] overflow-hidden border border-sand-200 shadow-[var(--shadow-warm-sm)]">
                <iframe
                  title="Indowud Polymers Pvt. Ltd. location map"
                  src={mapEmbedSrc}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full min-h-[340px] border-0"
                />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="grid grid-rows-2 gap-5 h-full">
                <div className="relative rounded-[12px] overflow-hidden surface-engraved-light min-h-[160px]">
                  <img src={factoryAerial} alt="Indowud manufacturing facility, aerial view" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/65 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3.5 font-heading font-semibold text-[13px] text-husk-50">The factory, from above</span>
                </div>
                <div className="relative rounded-[12px] overflow-hidden surface-engraved-light min-h-[160px]">
                  <img src={factoryInterior} alt="Inside the Indowud manufacturing facility" loading="lazy" className="absolute inset-0 w-full h-full object-cover" />
                  <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-ink-950/65 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-3.5 font-heading font-semibold text-[13px] text-husk-50">On the factory floor</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* What happens next - sets expectations for the journey from enquiry to install */}
      <section className="pb-24 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto">
          <Reveal>
            <p className="eyebrow text-leaf-600 text-center mb-3">What happens next</p>
            <h2 className="font-display font-bold text-[clamp(1.75rem,3.5vw,2.5rem)] tracking-[-0.02em] text-ink-900 text-center max-w-2xl mx-auto text-balance">
              From the first message to the finished install
            </h2>
          </Reveal>
          <div className="mt-12 grid sm:grid-cols-3 gap-6">
            {nextSteps.map(({ Icon, title, desc }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="h-full rounded-[12px] border border-sand-200 bg-white p-7 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-md)] hover:-translate-y-1">
                  <span className="grid place-items-center w-11 h-11 rounded-[10px] bg-leaf-100 text-leaf-700 mb-4">
                    <Icon size={19} strokeWidth={1.6} />
                  </span>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-sand-400 mb-1.5">{`Step 0${i + 1}`}</p>
                  <h3 className="font-heading font-bold text-lg text-ink-900 mb-1.5">{title}</h3>
                  <p className="text-sm leading-relaxed text-sand-500">{desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
