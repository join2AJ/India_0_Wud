import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Leaf, ShieldCheck, Droplets, Flame } from 'lucide-react'
import Reveal from '../components/Reveal'
import { features, philosophy, stats, products } from '../data/content'

const heroIcons = [
  { Icon: Leaf, label: 'Zero Wood' },
  { Icon: Droplets, label: 'Waterproof' },
  { Icon: ShieldCheck, label: 'Termite Proof' },
  { Icon: Flame, label: 'Flame Retardant' },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative pt-36 pb-28 px-6 lg:px-10 overflow-hidden bg-gradient-to-b from-husk-100 via-cream to-cream">
        <motion.div
          aria-hidden
          animate={{ y: [0, 18, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-16 -right-32 w-[28rem] h-[28rem] rounded-full bg-leaf-100/70 blur-3xl"
        />
        <motion.div
          aria-hidden
          animate={{ y: [0, -22, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-40 -left-24 w-[26rem] h-[26rem] rounded-full bg-husk-200/60 blur-3xl"
        />

        <div className="relative max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.35em] text-leaf-600 mb-6"
          >
            Climate-Positive Material Science
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-char-900 text-balance"
          >
            A pioneering wood<br className="hidden sm:block" /> that lets you{' '}
            <span className="italic text-leaf-700">breathe freely</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-7 text-lg text-char-800/70 max-w-2xl mx-auto leading-relaxed"
          >
            Indowud crafts high-performance Natural Fibre Composite boards from
            agricultural rice husk waste — a 100% waterproof, termite-proof
            alternative to tropical wood, born from an Ahimsa design philosophy
            of zero deforestation and zero toxic emissions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 rounded-full bg-leaf-700 text-husk-50 px-7 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-leaf-600 hover:shadow-lg hover:shadow-leaf-700/20"
            >
              Explore the Collection
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 rounded-full border border-char-900/15 px-7 py-3.5 text-sm tracking-wide text-char-900 transition-all duration-300 hover:border-leaf-600 hover:text-leaf-700"
            >
              Our Philosophy
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            {heroIcons.map(({ Icon, label }, i) => (
              <div
                key={label}
                className="flex flex-col items-center gap-2.5 rounded-2xl border border-char-900/8 bg-white/50 backdrop-blur-sm py-6 px-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-leaf-400/40"
              >
                <Icon size={22} strokeWidth={1.4} className="text-leaf-700" />
                <span className="text-xs text-char-800/70 tracking-wide">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Philosophy band */}
      <section className="bg-leaf-700 text-husk-50 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-husk-200/80 mb-6">
              The Ahimsa Design Philosophy
            </p>
          </Reveal>
          <div className="space-y-3">
            {philosophy.map((line, i) => (
              <Reveal key={line} delay={i * 0.12} as="p">
                <span className="block text-2xl sm:text-3xl font-display italic text-balance">
                  {line}
                </span>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.4}>
            <p className="mt-8 text-sm text-husk-200/75 max-w-xl mx-auto leading-relaxed">
              Every Indowud panel converts agricultural rice-husk waste into
              architecture — closing the loop between farm and façade, without
              a single tree falling.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.1}>
              <p className="font-display text-4xl sm:text-5xl text-leaf-700">{s.value}</p>
              <p className="mt-2 text-sm tracking-wide text-char-800/60">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 lg:px-10 bg-husk-50">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-3">Engineered to Perform</p>
            <h2 className="text-3xl sm:text-4xl font-medium text-char-900 text-balance">
              Everything tropical wood promised — without the cost to the planet
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 0.1}>
                <div className="h-full rounded-2xl bg-white border border-char-900/6 p-7 transition-all duration-400 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-leaf-700/5 hover:border-leaf-400/30">
                  <h3 className="font-display text-xl text-char-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-char-800/65 leading-relaxed">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="py-24 px-6 lg:px-10">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-leaf-600 mb-3">The Collection</p>
              <h2 className="text-3xl sm:text-4xl font-medium text-char-900 max-w-lg text-balance">
                Boards, panels and profiles for every surface you imagine
              </h2>
            </div>
            <Link
              to="/products"
              className="group inline-flex items-center gap-2 text-sm text-leaf-700 tracking-wide"
            >
              View all products
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.slice(0, 3).map((p, i) => (
              <Reveal key={p.name} delay={i * 0.12}>
                <div className="group h-full rounded-2xl overflow-hidden border border-char-900/6 bg-white transition-all duration-400 hover:shadow-xl hover:-translate-y-1.5">
                  <div className="h-40 bg-gradient-to-br from-husk-200 via-husk-100 to-leaf-50 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-leaf-600/10 to-transparent" />
                    <span className="absolute bottom-4 left-5 text-xs uppercase tracking-[0.2em] text-leaf-700/80">{p.tag}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-lg text-char-900 mb-2">{p.name}</h3>
                    <p className="text-sm text-char-800/65 leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 lg:px-10">
        <Reveal className="max-w-4xl mx-auto rounded-3xl bg-char-900 text-husk-50 px-8 sm:px-16 py-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-leaf-600/20 blur-3xl" />
          <h2 className="text-3xl sm:text-4xl font-medium text-balance relative">
            Ready to build something that doesn't cost the earth?
          </h2>
          <p className="mt-4 text-husk-200/70 max-w-xl mx-auto relative">
            Talk to our team about specifications, applications and how Indowud
            NFC can fit into your next project.
          </p>
          <Link
            to="/contact"
            className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-husk-50 text-char-900 px-8 py-3.5 text-sm tracking-wide transition-all duration-300 hover:bg-leaf-400 hover:text-husk-50"
          >
            Start a conversation
            <ArrowRight size={16} />
          </Link>
        </Reveal>
      </section>
    </div>
  )
}
