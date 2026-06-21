import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, FileText, BookOpen, Layers, Languages, CheckCircle2, AlertCircle } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const resources = [
  {
    Icon: BookOpen,
    title: 'E-Brochure · English',
    desc: 'The full product overview - range, finishes, certifications and the Ahimsa story, in English.',
    tag: 'PDF · 8.2 MB',
    file: '/downloads/indowud-nfc-brochure-english.pdf',
    filename: 'Indowud-NFC-Brochure-English.pdf',
  },
  {
    Icon: Languages,
    title: 'E-Brochure · Hindi',
    desc: 'वही जानकारी, हिंदी में - उन ग्राहकों और साझेदारों के लिए जो हिंदी में पढ़ना पसंद करते हैं।',
    tag: 'PDF · 8.4 MB',
    file: '/downloads/indowud-nfc-brochure-hindi.pdf',
    filename: 'Indowud-NFC-Brochure-Hindi.pdf',
  },
  {
    Icon: FileText,
    title: 'Technical Guidelines',
    desc: 'Framing, fastening, edge protection and thermoforming instructions for fabricators and site teams.',
    tag: 'PDF · 3.1 MB',
    file: '/downloads/indowud-nfc-technical-guidelines.pdf',
    filename: 'Indowud-NFC-Technical-Guidelines.pdf',
  },
  {
    Icon: Layers,
    title: 'Product Catalogue',
    desc: 'Full specification sheets for every panel in the range - boards, doors, frames, decking, jaali and more.',
    tag: 'PDF · 12.6 MB',
    file: '/downloads/indowud-nfc-product-catalogue.pdf',
    filename: 'Indowud-NFC-Product-Catalogue.pdf',
  },
]

function encodeForm(data) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&')
}

function validate({ name, email }) {
  const errs = {}
  if (!name.trim()) errs.name = 'Full name is required'
  if (!email.trim()) errs.email = 'Work email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Enter a valid email address'
  return errs
}

export default function Downloads() {
  const [values, setValues] = useState({ name: '', email: '', org: '' })
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const errsFor = (field) => touched[field] && errors[field]

  function handleChange(field, value) {
    const next = { ...values, [field]: value }
    setValues(next)
    if (touched[field]) setErrors(validate(next))
  }

  function handleBlur(field) {
    setTouched((t) => ({ ...t, [field]: true }))
    setErrors(validate(values))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const allTouched = { name: true, email: true, org: true }
    setTouched(allTouched)
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'downloads',
          'bot-field': '',
          name: values.name.trim(),
          email: values.email.trim(),
          org: values.org.trim(),
        }),
      })
      if (res.ok) {
        setSent(true)
        setSubmitError(false)
      } else {
        setSubmitError(true)
      }
    } catch {
      setSubmitError(true)
    }
  }

  const inputCls = (field) =>
    `mt-2 w-full rounded-[5px] border px-4 py-3 text-sm text-ink-900 outline-none transition-all duration-200 bg-husk-50/60
     ${errsFor(field)
       ? 'border-red-400 ring-2 ring-red-400/15'
       : 'border-sand-200 focus:border-leaf-500 focus:ring-2 focus:ring-leaf-500/15'}`

  return (
    <div>
      <Seo
        title="Downloads"
        description="Download Indowud NFC brochures, technical guidelines and full product catalogue specification sheets."
        path="/downloads"
      />
      <section className="texture-grain texture-charcoal text-husk-100 min-h-[56vh] flex items-center pt-24 pb-16 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Resources</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              Brochures, specs and guidelines — ready to share with your team
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Everything an architect, fabricator or procurement team needs to
              specify Indowud NFC with confidence — fill the form and download
              the full set instantly.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1.15fr_0.85fr] gap-11 items-start">

          {/* Resource cards */}
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
                    {sent ? (
                      <a
                        href={r.file}
                        download={r.filename}
                        className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.06em] uppercase text-leaf-600 hover:text-leaf-800 transition-colors"
                      >
                        <Download size={14} /> Download
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-[0.06em] uppercase text-sand-400 cursor-default select-none">
                        <Download size={14} /> Fill form →
                      </span>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Form / success */}
          <Reveal delay={0.1}>
            <div className="rounded-[12px] border border-sand-200 bg-white p-8 sm:p-10 shadow-[var(--shadow-warm-sm)]">
              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center gap-4 py-4"
                >
                  <span className="grid place-items-center w-14 h-14 rounded-full bg-leaf-100 text-leaf-700">
                    <CheckCircle2 size={28} strokeWidth={1.5} />
                  </span>
                  <h3 className="font-heading font-bold text-2xl text-ink-900">All yours</h3>
                  <p className="text-sand-500 max-w-sm">
                    Click <strong>Download</strong> on any card to save the file. All four are ready.
                  </p>
                  <div className="w-full mt-2 space-y-2.5">
                    {resources.map((r) => (
                      <a
                        key={r.title}
                        href={r.file}
                        download={r.filename}
                        className="flex items-center justify-between w-full rounded-[8px] border border-sand-200 bg-husk-50/60 px-4 py-3 text-sm font-heading font-medium text-ink-900 hover:border-leaf-400 hover:bg-leaf-50 transition-all duration-200 group"
                      >
                        <span className="truncate">{r.title}</span>
                        <Download size={14} className="shrink-0 ml-3 text-leaf-600 group-hover:text-leaf-700" />
                      </a>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <form
                  name="downloads"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  noValidate
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <input type="hidden" name="form-name" value="downloads" />
                  <input type="hidden" name="bot-field" />

                  <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500 mb-1">Request the full set</p>
                  <h3 className="font-heading font-bold text-2xl text-ink-900 mb-1">One form, every resource</h3>

                  <div>
                    <label className="block text-left">
                      <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Full name *</span>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        onBlur={() => handleBlur('name')}
                        className={inputCls('name')}
                        placeholder="Your full name"
                      />
                    </label>
                    {errsFor('name') && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-500">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-left">
                      <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Work email *</span>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        onBlur={() => handleBlur('email')}
                        className={inputCls('email')}
                        placeholder="you@company.com"
                      />
                    </label>
                    {errsFor('email') && (
                      <p className="mt-1.5 flex items-center gap-1.5 text-[12px] text-red-500">
                        <AlertCircle size={12} /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-left">
                      <span className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Organisation</span>
                      <input
                        type="text"
                        name="org"
                        value={values.org}
                        onChange={(e) => handleChange('org', e.target.value)}
                        className={inputCls('org')}
                        placeholder="Company or firm name"
                      />
                    </label>
                  </div>

                  {submitError && (
                    <p className="flex items-center gap-2 text-[13px] text-red-500 bg-red-50 border border-red-200 rounded-[6px] px-3 py-2.5">
                      <AlertCircle size={14} /> Something went wrong. Please try again.
                    </p>
                  )}

                  <Button type="submit" variant="accent" size="lg" iconRight={<Download size={15} />} className="w-full justify-center">
                    Get all resources
                  </Button>
                  <p className="text-center text-[11.5px] text-sand-400">No spam. Just the files.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
