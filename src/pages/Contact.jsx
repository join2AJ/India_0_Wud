import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock, MessageCircleQuestion, FileText, Hammer, AlertCircle } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import factoryAerial from '../assets/photos/factory-aerial-2.jpg'
import factoryInterior from '../assets/photos/factory-interior.jpg'

const officeAddress = 'First Floor, New, 30, 1st Main Rd E, Shenoy Nagar, Chennai, Tamil Nadu 600030'
const mapEmbedSrc = `https://www.google.com/maps?q=${encodeURIComponent(officeAddress)}&output=embed`

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

// ── Validation rules ───────────────────────────────────────────────────────

// Rejects strings that contain obvious HTML/script injection patterns.
// React already escapes output, but this catches bad intent at entry.
const INJECTION = /<[a-z!/?]|javascript:|on[a-z]+=|data:/i

function validateName(v) {
  const s = v.trim()
  if (!s) return 'Full name is required.'
  if (s.length < 2) return 'Name must be at least 2 characters.'
  if (s.length > 100) return 'Name must be under 100 characters.'
  if (INJECTION.test(s)) return 'Name contains invalid characters.'
  if (/[<>{}[\]\\]/.test(s)) return 'Please remove special characters from the name.'
  return ''
}

function validateEmail(v) {
  const s = v.trim()
  if (!s) return 'Email address is required.'
  // RFC-5321-ish: user@domain.tld with common characters
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s)) return 'Please enter a valid email address.'
  if (INJECTION.test(s)) return 'Email contains invalid characters.'
  if (s.length > 254) return 'Email address is too long.'
  return ''
}

function validatePhone(v) {
  if (!v.trim()) return '' // optional field
  // Accept: optional +91 / 0 / 91 prefix, then 10 digits starting with 6–9
  const digits = v.trim().replace(/[\s\-().]/g, '')
  if (!/^(\+91|91|0)?[6-9]\d{9}$/.test(digits)) {
    return 'Enter a valid 10-digit Indian mobile number (e.g. 98765 43210).'
  }
  return ''
}

function validateCompany(v) {
  if (!v.trim()) return '' // optional
  if (v.trim().length > 100) return 'Company name must be under 100 characters.'
  if (INJECTION.test(v)) return 'Company name contains invalid characters.'
  return ''
}

function validateReason(v) {
  if (!v || !reasons.includes(v)) return 'Please select a reason for reaching out.'
  return ''
}

function validateMessage(v) {
  const s = v.trim()
  if (!s) return 'Please tell us about your project.'
  if (s.length < 10) return 'Message is too short — a brief description helps us respond better.'
  if (s.length > 2000) return 'Message must be under 2000 characters.'
  if (INJECTION.test(s)) return 'Message contains invalid characters.'
  return ''
}

const validators = { name: validateName, email: validateEmail, phone: validatePhone, company: validateCompany, reason: validateReason, message: validateMessage }

function validate(data) {
  return Object.fromEntries(
    Object.entries(validators).map(([field, fn]) => [field, fn(data[field] ?? '')])
  )
}

// ── Encoding for Netlify Forms ─────────────────────────────────────────────

function encodeFormData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')
}

// ── Shared field wrapper ───────────────────────────────────────────────────

function FieldWrap({ label, required, error, touched, children }) {
  const showError = touched && error
  return (
    <label className="block text-left">
      <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">
        {label}{required && ' *'}
      </span>
      {children(showError)}
      {showError && (
        <span className="flex items-center gap-1 mt-1.5 text-[11px] text-[#A64B36]">
          <AlertCircle size={11} />
          {error}
        </span>
      )}
    </label>
  )
}

const inputClass = (showError) =>
  `mt-2 w-full rounded-[5px] border bg-husk-50/60 px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 focus:ring-2 ${
    showError
      ? 'border-[#A64B36] focus:border-[#A64B36] focus:ring-[#A64B36]/15'
      : 'border-sand-200 focus:border-leaf-500 focus:ring-leaf-500/15'
  }`

// ── Main component ─────────────────────────────────────────────────────────

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [values, setValues] = useState({ name: '', email: '', phone: '', company: '', reason: '', message: '' })
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})

  const handleChange = useCallback((field, value) => {
    setValues((v) => ({ ...v, [field]: value }))
    if (touched[field]) {
      setErrors((e) => ({ ...e, [field]: validators[field](value) }))
    }
  }, [touched])

  const handleBlur = useCallback((field) => {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors((e) => ({ ...e, [field]: validators[field](values[field] ?? '') }))
  }, [values])

  const handleSubmit = (e) => {
    e.preventDefault()

    // Mark all fields touched and run full validation on submit
    const allTouched = Object.fromEntries(Object.keys(validators).map((k) => [k, true]))
    setTouched(allTouched)
    const errs = validate(values)
    setErrors(errs)
    if (Object.values(errs).some(Boolean)) return // abort if any error

    const sanitised = Object.fromEntries(
      Object.entries(values).map(([k, v]) => [k, typeof v === 'string' ? v.trim() : v])
    )

    setSubmitError(false)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeFormData({ 'form-name': 'contact', ...sanitised }),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitError(true))
  }

  const hasErrors = Object.values(errors).some(Boolean)

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
                <form
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  noValidate
                >
                  <input type="hidden" name="form-name" value="contact" />
                  {/* Honeypot — hidden from real users, bots fill it in */}
                  <input type="text" name="bot-field" className="hidden" tabIndex="-1" autoComplete="off" />

                  <div className="grid sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <FieldWrap label="Full name" required error={errors.name} touched={touched.name}>
                      {(showError) => (
                        <input
                          type="text"
                          name="name"
                          value={values.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          onBlur={() => handleBlur('name')}
                          autoComplete="name"
                          maxLength={100}
                          className={inputClass(showError)}
                        />
                      )}
                    </FieldWrap>

                    {/* Email */}
                    <FieldWrap label="Email address" required error={errors.email} touched={touched.email}>
                      {(showError) => (
                        <input
                          type="email"
                          name="email"
                          value={values.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          onBlur={() => handleBlur('email')}
                          autoComplete="email"
                          maxLength={254}
                          className={inputClass(showError)}
                        />
                      )}
                    </FieldWrap>

                    {/* Phone */}
                    <FieldWrap label="Phone number" error={errors.phone} touched={touched.phone}>
                      {(showError) => (
                        <input
                          type="tel"
                          name="phone"
                          value={values.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          onBlur={() => handleBlur('phone')}
                          autoComplete="tel"
                          placeholder="+91 98765 43210"
                          maxLength={15}
                          className={inputClass(showError)}
                        />
                      )}
                    </FieldWrap>

                    {/* Company */}
                    <FieldWrap label="Company / Studio" error={errors.company} touched={touched.company}>
                      {(showError) => (
                        <input
                          type="text"
                          name="company"
                          value={values.company}
                          onChange={(e) => handleChange('company', e.target.value)}
                          onBlur={() => handleBlur('company')}
                          autoComplete="organization"
                          maxLength={100}
                          className={inputClass(showError)}
                        />
                      )}
                    </FieldWrap>
                  </div>

                  {/* Reason */}
                  <FieldWrap label="What can we help with?" required error={errors.reason} touched={touched.reason}>
                    {(showError) => (
                      <select
                        name="reason"
                        value={values.reason}
                        onChange={(e) => handleChange('reason', e.target.value)}
                        onBlur={() => handleBlur('reason')}
                        className={inputClass(showError)}
                      >
                        <option value="">Select a reason for reaching out</option>
                        {reasons.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                    )}
                  </FieldWrap>

                  {/* Message */}
                  <FieldWrap label="Tell us about your project" required error={errors.message} touched={touched.message}>
                    {(showError) => (
                      <>
                        <textarea
                          name="message"
                          value={values.message}
                          onChange={(e) => handleChange('message', e.target.value)}
                          onBlur={() => handleBlur('message')}
                          rows={5}
                          maxLength={2000}
                          className={`${inputClass(showError)} resize-none`}
                        />
                        <span className="block text-right text-[10px] text-sand-400 mt-1">
                          {values.message.length} / 2000
                        </span>
                      </>
                    )}
                  </FieldWrap>

                  {submitError && (
                    <p className="flex items-center gap-2 text-sm text-[#A64B36]">
                      <AlertCircle size={14} />
                      Something went wrong — please try again or email us directly at info@indowud.com
                    </p>
                  )}

                  {hasErrors && touched.name && (
                    <p className="text-[11px] text-sand-400">
                      Please fix the errors above before sending.
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

      {/* What happens next */}
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
