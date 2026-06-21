import { useState } from 'react'
import { motion } from 'framer-motion'
import JSZip from 'jszip'
import { saveAs } from 'file-saver'
import { Download, FileText, BookOpen, Layers, Languages, CheckCircle2, AlertCircle, Eye, Package } from 'lucide-react'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import Button from '../components/ui/Button'
import Badge from '../components/ui/Badge'

const resources = [
  {
    Icon: BookOpen,
    title: 'E-Brochure · English',
    desc: 'The full product overview — range, finishes, certifications and the Ahimsa story, in English.',
    tag: 'PDF · 8.2 MB',
    pdf: '/downloads/indowud-nfc-brochure-english.pdf',
    filename: 'Indowud-NFC-Brochure-English.pdf',
    html: '/downloads/brochure-english/index.html',
  },
  {
    Icon: Languages,
    title: 'E-Brochure · Hindi',
    desc: 'वही जानकारी, हिंदी में — उन ग्राहकों और साझेदारों के लिए जो हिंदी में पढ़ना पसंद करते हैं।',
    tag: 'PDF · 8.4 MB',
    pdf: '/downloads/indowud-nfc-brochure-hindi.pdf',
    filename: 'Indowud-NFC-Brochure-Hindi.pdf',
    html: '/downloads/brochure-hindi/index.html',
  },
  {
    Icon: FileText,
    title: 'Technical Guidelines',
    desc: 'Framing, fastening, edge protection and thermoforming instructions for fabricators and site teams.',
    tag: 'PDF · 3.1 MB',
    pdf: '/downloads/indowud-nfc-technical-guidelines.pdf',
    filename: 'Indowud-NFC-Technical-Guidelines.pdf',
    html: '/downloads/technical-guidelines/index.html',
  },
  {
    Icon: Layers,
    title: 'Product Catalogue',
    desc: 'Full specification sheets for every panel in the range — boards, doors, frames, decking, jaali and more.',
    tag: 'PDF · 12.6 MB',
    pdf: '/downloads/indowud-nfc-product-catalogue.pdf',
    filename: 'Indowud-NFC-Product-Catalogue.pdf',
    html: '/downloads/product-catalogue/index.html',
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

async function buildAndDownloadZip() {
  const zip = new JSZip()
  const folder = zip.folder('Indowud-NFC-Resources')

  await Promise.all(
    resources.map(async (r) => {
      const res = await fetch(r.pdf)
      const blob = await res.blob()
      folder.file(r.filename, blob)
    })
  )

  const content = await zip.generateAsync({ type: 'blob' })
  saveAs(content, 'Indowud-NFC-Resources.zip')
}

export default function Downloads() {
  const [values, setValues] = useState({ name: '', email: '', org: '' })
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [zipping, setZipping] = useState(false)

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
    setTouched({ name: true, email: true, org: true })
    const errs = validate(values)
    setErrors(errs)
    if (Object.keys(errs).length) return

    // Save lead to Netlify Forms (fire-and-forget — email disabled for now)
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encodeForm({
        'form-name': 'downloads',
        'bot-field': '',
        name: values.name.trim(),
        email: values.email.trim(),
        org: values.org.trim(),
      }),
    }).catch(() => {}) // silently ignore — zip still downloads

    setSent(true)
    setSubmitError(false)
    setZipping(true)
    try {
      await buildAndDownloadZip()
    } catch {
      setSubmitError(true)
    } finally {
      setZipping(false)
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
              View any resource online or download the PDF individually.
              Want everything in one go? Fill the short form and download the full set as a ZIP.
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
                <div className="h-full flex flex-col rounded-[12px] border border-sand-200 bg-white p-7 shadow-[var(--shadow-warm-sm)] transition-all duration-300 hover:shadow-[var(--shadow-warm-lg)] hover:-translate-y-1">
                  <span className="grid place-items-center w-11 h-11 rounded-[5px] bg-leaf-100 text-leaf-700 mb-4">
                    <r.Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="font-heading font-bold text-lg text-ink-900 mb-2">{r.title}</h3>
                  <p className="text-sm leading-relaxed text-sand-500 mb-5 flex-1">{r.desc}</p>

                  <div className="flex items-center gap-2 flex-wrap">
                    <Badge tone="outline">{r.tag}</Badge>
                    <div className="ml-auto flex items-center gap-3">
                      {/* View online — HTML if available, else PDF in tab */}
                      <a
                        href={r.html || r.pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-sand-500 hover:text-ink-900 transition-colors"
                        title={r.html ? 'View as webpage' : 'View in browser'}
                      >
                        <Eye size={13} /> View
                      </a>
                      {/* Download PDF individually — always available */}
                      <a
                        href={r.pdf}
                        download={r.filename}
                        className="inline-flex items-center gap-1.5 font-mono text-[11px] tracking-[0.06em] uppercase text-leaf-600 hover:text-leaf-800 transition-colors"
                        title="Download PDF"
                      >
                        <Download size={13} /> PDF
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* ZIP form */}
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
                  <h3 className="font-heading font-bold text-2xl text-ink-900">
                    {zipping ? 'Packing your ZIP…' : 'Download started!'}
                  </h3>
                  <p className="text-sand-500 max-w-sm">
                    {zipping
                      ? 'Bundling all 4 files — this will take just a moment.'
                      : 'Indowud-NFC-Resources.zip has been saved to your device. You can also download files individually from the cards.'}
                  </p>
                  {!zipping && (
                    <button
                      onClick={async () => {
                        setZipping(true)
                        try { await buildAndDownloadZip() } catch {}
                        setZipping(false)
                      }}
                      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-leaf-600 hover:text-leaf-800 transition-colors mt-2"
                    >
                      <Package size={13} /> Download ZIP again
                    </button>
                  )}
                  {submitError && (
                    <p className="flex items-center gap-2 text-[12px] text-red-500 mt-1">
                      <AlertCircle size={13} /> ZIP failed — use the individual PDF links instead.
                    </p>
                  )}
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

                  <div className="flex items-center gap-3 mb-1">
                    <span className="grid place-items-center w-10 h-10 rounded-[8px] bg-leaf-100 text-leaf-700 shrink-0">
                      <Package size={18} strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-mono text-[11px] tracking-[0.16em] uppercase text-sand-500">Download the full set</p>
                      <h3 className="font-heading font-bold text-xl text-ink-900 leading-snug">All 4 files in one ZIP</h3>
                    </div>
                  </div>

                  <p className="text-[13px] text-sand-400 border-b border-sand-100 pb-5">
                    E-Brochure (EN + HI) · Technical Guidelines · Product Catalogue
                  </p>

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

                  <Button type="submit" variant="accent" size="lg" iconRight={<Package size={15} />} className="w-full justify-center">
                    Download all as ZIP
                  </Button>
                  <p className="text-center text-[11.5px] text-sand-400">No spam. Your details help us serve you better.</p>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
