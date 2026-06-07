import { Link } from 'react-router-dom'
import { BadgeCheck, Leaf } from 'lucide-react'
import Badge from './ui/Badge'

const cols = [
  { h: 'Products', items: [
    { label: 'NFC Boards', to: '/products' },
    { label: 'NFC Decking', to: '/products' },
    { label: 'NFC Jaali', to: '/products' },
    { label: 'NFC Trims', to: '/products' },
    { label: 'NFC-GLU', to: '/products' },
  ]},
  { h: 'Material', items: [
    { label: 'The NFC Matrix', to: '/technical-details' },
    { label: 'Technical specs', to: '/technical-details' },
    { label: 'Installation guidelines', to: '/suggestions' },
    { label: 'Spec sheets', to: '/downloads' },
  ]},
  { h: 'Company', items: [
    { label: 'Ahimsa Design', to: '/about-us' },
    { label: 'Sustainability & Certifications', to: '/about-us' },
    { label: 'Downloads', to: '/downloads' },
    { label: 'Contact', to: '/contact' },
  ]},
]

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-cream-100 px-6 lg:px-10 pt-14 pb-8">
      <div className="max-w-[1360px] mx-auto">
        <div className="flex flex-wrap gap-14">
          <div className="max-w-[300px]">
            <Link to="/" className="inline-flex items-baseline gap-2.5 mb-4">
              <span className="font-display font-extrabold text-[22px] text-cream-50">INDOWUD</span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.28em] text-leaf-300 border border-leaf-500 px-1.5 py-0.5 rounded">NFC</span>
            </Link>
            <p className="font-heading text-[17px] leading-snug text-sand-200 mb-4.5">
              We do not cut down to build.
            </p>
            <div className="flex gap-2 flex-wrap">
              <Badge tone="cert" icon={<BadgeCheck size={13} strokeWidth={2} />}>GreenPro</Badge>
              <Badge tone="cert" icon={<Leaf size={13} strokeWidth={2} />}>EPD</Badge>
            </div>
          </div>

          <div className="flex flex-wrap gap-14 ml-auto">
            {cols.map((c) => (
              <div key={c.h}>
                <p className="eyebrow text-leaf-300 mb-3.5">{c.h}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <Link to={it.to} className="font-body text-sm text-sand-300 hover:text-cream-50 transition-colors duration-200">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-[#4A4234] mt-10 pt-5 flex flex-wrap justify-between gap-3">
          <span className="font-mono text-[11.5px] text-sand-400">© {new Date().getFullYear()} Indowud NFC · Chennai, India</span>
          <span className="font-mono text-[11.5px] text-sand-400">Climate-positive material science</span>
        </div>
      </div>
    </footer>
  )
}
