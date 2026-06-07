import { Link } from 'react-router-dom'
import { Leaf, Mail, Phone } from 'lucide-react'

const social = [
  { label: 'Fb', name: 'Facebook', href: 'https://facebook.com/indowud' },
  { label: 'X', name: 'Twitter', href: 'https://twitter.com/indowud' },
  { label: 'In', name: 'LinkedIn', href: 'https://linkedin.com/company/indowud/' },
  { label: 'Yt', name: 'YouTube', href: 'https://youtube.com/channel/UC7akg1w5159gl0i0fubvYWw/videos' },
  { label: 'Ig', name: 'Instagram', href: 'https://instagram.com/indowud/' },
]

export default function Footer() {
  return (
    <footer className="bg-char-900 text-husk-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-flex items-center gap-2 mb-4">
            <span className="grid place-items-center w-9 h-9 rounded-full bg-leaf-600 text-husk-50">
              <Leaf size={18} strokeWidth={1.6} />
            </span>
            <span className="font-display text-xl text-husk-50">Indowud</span>
          </Link>
          <p className="text-sm leading-relaxed text-husk-200/80 max-w-sm">
            Climate-positive Natural Fibre Composite, made from agricultural rice husk
            waste — a pioneering wood that lets you breathe freely.
          </p>
        </div>

        <div>
          <h4 className="font-display text-base text-husk-50 mb-4">Explore</h4>
          <ul className="space-y-2.5 text-sm text-husk-200/80">
            <li><Link to="/about" className="hover:text-husk-50 transition-colors">About &amp; Philosophy</Link></li>
            <li><Link to="/products" className="hover:text-husk-50 transition-colors">Products</Link></li>
            <li><Link to="/sustainability" className="hover:text-husk-50 transition-colors">Sustainability</Link></li>
            <li><Link to="/contact" className="hover:text-husk-50 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-base text-husk-50 mb-4">Get in touch</h4>
          <ul className="space-y-2.5 text-sm text-husk-200/80">
            <li className="flex items-center gap-2">
              <Phone size={15} strokeWidth={1.5} /> +91 44 4215 8586
            </li>
            <li className="flex items-center gap-2">
              <Mail size={15} strokeWidth={1.5} /> info@indowud.com
            </li>
          </ul>
          <div className="flex items-center gap-3 mt-5">
            {social.map(({ label, name, href }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="grid place-items-center w-9 h-9 rounded-full border border-husk-100/15 text-xs tracking-wide text-husk-100/70 transition-all duration-300 hover:border-leaf-400 hover:text-husk-50 hover:-translate-y-0.5"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-husk-100/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-husk-200/60">
          <p>© {new Date().getFullYear()} Indowud Polymers Private Limited. All rights reserved.</p>
          <p>No trees cut. No forests destroyed. No beings harmed.</p>
        </div>
      </div>
    </footer>
  )
}
