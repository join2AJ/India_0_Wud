import { Link } from 'react-router-dom'
import { BadgeCheck, Leaf } from 'lucide-react'
import Badge from './ui/Badge'
import Logo from './Logo'

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
  { h: 'Journal', items: [
    { label: 'Case Study', to: '/case-study' },
    { label: 'Blog', to: '/blog' },
    { label: 'Notice Board', to: '/notice-board' },
  ]},
]

// Deer family rendered entirely as filled SVG paths so it scales perfectly
// at any size. Pointer-events are disabled — the illustration sits behind the
// nav columns and never blocks a click. Opacity is kept low enough to keep
// every link readable while still making the family clearly visible.
function DeerFamily() {
  return (
    <svg
      viewBox="0 0 520 310"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: '#F5F0E4', pointerEvents: 'none', display: 'block', width: '100%', height: '100%' }}
    >
      {/* ─── DOE (left, medium) ──────────────────────────── */}
      {/* Body */}
      <ellipse cx="115" cy="218" rx="88" ry="42" />
      {/* Neck – thick tapered slab angled forward-up */}
      <path d="M75,182 C72,164 65,148 56,136 L70,130 C80,142 88,158 92,178 Z" />
      {/* Head – elongated oval */}
      <ellipse cx="50" cy="122" rx="26" ry="18" transform="rotate(-15 50 122)" />
      {/* Ear back */}
      <path d="M36,112 C28,96 27,80 36,76 C44,72 52,88 48,110 Z" />
      {/* Ear forward */}
      <path d="M62,108 C68,92 76,82 84,88 C90,94 82,110 70,112 Z" />
      {/* Muzzle */}
      <ellipse cx="72" cy="126" rx="14" ry="10" transform="rotate(-10 72 126)" />
      {/* Front legs */}
      <path d="M72,256 C70,270 71,292 69,298 C67,301 62,301 62,297 C61,292 63,270 62,255 Z" />
      <path d="M96,260 C94,274 95,296 93,302 C91,305 86,305 86,301 C85,296 87,274 86,259 Z" />
      {/* Back legs */}
      <path d="M155,256 C153,270 154,292 152,298 C150,301 145,301 145,297 C144,292 146,270 145,255 Z" />
      <path d="M176,252 C174,266 175,288 173,294 C171,297 166,297 166,293 C165,288 167,266 166,251 Z" />
      {/* Tail */}
      <path d="M200,200 C212,193 220,204 215,216 C210,226 198,223 198,213 Z" />

      {/* ─── FAWN (centre, smallest) ─────────────────────── */}
      {/* Body */}
      <ellipse cx="298" cy="232" rx="60" ry="32" />
      {/* Neck */}
      <path d="M263,206 C260,193 256,181 250,172 L260,167 C267,176 272,188 274,204 Z" />
      {/* Head */}
      <ellipse cx="246" cy="160" rx="20" ry="14" transform="rotate(-12 246 160)" />
      {/* Ear back */}
      <path d="M234,152 C227,139 226,126 234,123 C241,120 248,133 244,150 Z" />
      {/* Ear forward */}
      <path d="M256,148 C261,135 268,126 275,131 C280,136 273,150 263,152 Z" />
      {/* Muzzle */}
      <ellipse cx="262" cy="163" rx="11" ry="8" transform="rotate(-8 262 163)" />
      {/* Front legs */}
      <path d="M262,260 C260,272 261,290 259,295 C257,298 253,298 253,294 C252,289 254,271 253,258 Z" />
      <path d="M280,264 C278,276 279,294 277,299 C275,302 271,302 271,298 C270,293 272,275 271,262 Z" />
      {/* Back legs */}
      <path d="M322,260 C320,272 321,290 319,295 C317,298 313,298 313,294 C312,289 314,271 313,258 Z" />
      <path d="M340,256 C338,268 339,286 337,291 C335,294 331,294 331,290 C330,285 332,267 331,254 Z" />
      {/* Tail */}
      <path d="M357,218 C366,212 374,222 370,232 C366,240 356,237 356,229 Z" />

      {/* ─── STAG (right, tallest, antlers) ─────────────── */}
      {/* Body */}
      <ellipse cx="440" cy="205" rx="72" ry="52" transform="rotate(-5 440 205)" />
      {/* Neck – broad and powerful */}
      <path d="M397,162 C392,142 383,122 373,108 L387,101 C398,115 407,136 412,158 Z" />
      {/* Head */}
      <ellipse cx="367" cy="94" rx="30" ry="21" transform="rotate(-18 367 94)" />
      {/* Ear back */}
      <path d="M350,82 C341,64 340,47 350,43 C359,39 368,56 363,80 Z" />
      {/* Ear forward */}
      <path d="M380,77 C387,59 396,48 405,55 C412,61 403,78 390,81 Z" />
      {/* Muzzle */}
      <ellipse cx="386" cy="99" rx="16" ry="11" transform="rotate(-15 386 99)" />

      {/* ANTLERS ── the defining feature */}
      {/* Left main beam: sweeps up and back from the skull */}
      <path d="
        M356,72
        C352,56 344,34 336,14
        C335,11 339,8 341,11
        C349,31 357,54 361,72 Z" />
      {/* Left brow tine – first branch off main beam */}
      <path d="
        M346,42
        C338,30 326,22 315,18
        C313,16 314,12 317,13
        C328,17 340,25 349,38 Z" />
      {/* Left bez tine */}
      <path d="
        M339,22
        C336,10 337,-2 342,-12
        C343,-14 347,-13 346,-10
        C342,-1 341,10 344,22 Z" />
      {/* Left top fork A */}
      <path d="
        M337,12
        C330,0 330,-14 335,-22
        C336,-25 340,-23 339,-20
        C335,-13 335,0 340,12 Z" />
      {/* Left top fork B */}
      <path d="
        M337,12
        C344,2 352,-6 356,-10
        C358,-12 361,-10 360,-7
        C356,-3 348,3 342,12 Z" />

      {/* Right main beam: sweeps up and forward */}
      <path d="
        M374,68
        C378,50 382,28 382,8
        C382,5 386,4 386,7
        C386,27 382,50 378,68 Z" />
      {/* Right brow tine */}
      <path d="
        M381,36
        C389,24 402,16 412,12
        C414,10 415,13 413,15
        C404,19 391,27 383,38 Z" />
      {/* Right bez tine */}
      <path d="
        M382,16
        C386,4 384,-9 380,-18
        C379,-20 382,-23 384,-21
        C388,-11 390,3 386,16 Z" />
      {/* Right top fork A */}
      <path d="
        M382,8
        C378,-4 378,-18 383,-26
        C384,-29 388,-27 387,-24
        C383,-17 383,-3 386,8 Z" />
      {/* Right top fork B */}
      <path d="
        M382,8
        C388,-2 396,-8 402,-11
        C404,-13 406,-10 405,-8
        C399,-5 392,0 386,9 Z" />

      {/* Stag front legs */}
      <path d="M400,250 C398,266 399,290 397,296 C395,299 390,299 389,295 C388,290 391,266 390,249 Z" />
      <path d="M426,254 C424,270 425,294 423,300 C421,303 416,303 415,299 C414,294 417,270 416,253 Z" />
      {/* Stag back legs */}
      <path d="M488,246 C486,262 487,286 485,292 C483,295 478,295 477,291 C476,286 479,262 478,245 Z" />
      <path d="M508,240 C506,256 507,280 505,286 C503,289 498,289 497,285 C496,280 499,256 498,239 Z" />
      {/* Tail */}
      <path d="M510,182 C524,174 534,187 528,200 C522,212 508,208 508,197 Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-ink-950 text-husk-100 px-6 lg:px-10 pt-14 pb-8 overflow-hidden">

      {/* Deer family — absolutely pinned to the bottom-right, behind all text.
          Sized so the family fills the right half of the footer height.
          Pointer-events are off so every nav link underneath stays clickable. */}
      <div
        aria-hidden
        className="hidden lg:block absolute w-[460px] opacity-[0.22]"
        style={{ pointerEvents: 'none', zIndex: 0, bottom: '2rem', right: '2.5rem' }}
      >
        <DeerFamily />
      </div>

      {/* All footer content sits above the illustration */}
      <div className="relative max-w-[1360px] mx-auto" style={{ zIndex: 1 }}>
        <div className="flex flex-wrap gap-14">
          <div className="max-w-[300px]">
            <Link to="/" className="inline-flex items-center gap-2.5 mb-4">
              <Logo className="w-8 h-8 shrink-0" />
              <span className="font-display font-extrabold text-[22px] text-husk-50">INDOWUD</span>
              <span className="font-mono text-[10px] font-semibold tracking-[0.28em] text-leaf-300 border border-leaf-500 px-1.5 py-0.5 rounded">NFC</span>
            </Link>
            <p className="font-heading text-[17px] leading-snug text-sand-200 mb-4.5">
              We do not cut down to build.
            </p>
            <div className="flex gap-2 flex-wrap mb-5">
              <Badge tone="cert" icon={<BadgeCheck size={13} strokeWidth={2} />}>GreenPro</Badge>
              <Badge tone="cert" icon={<Leaf size={13} strokeWidth={2} />}>EPD</Badge>
            </div>

            <dl className="space-y-3 border-t border-white/10 pt-4">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf-300">NFC</dt>
                <dd className="mt-1 text-[12.5px] leading-relaxed text-sand-300">
                  Short for Natural Fibre Composite — our board material, made by binding agricultural rice-husk fibre into a dense panel that performs like wood without using any of it.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.2em] text-leaf-300">Ahimsa</dt>
                <dd className="mt-1 text-[12.5px] leading-relaxed text-sand-300">
                  A Sanskrit word meaning non-violence — the design principle behind Indowud: build without cutting down a single tree or harming the land that supplies it.
                </dd>
              </div>
            </dl>
          </div>

          <div className="flex flex-wrap gap-14 ml-auto">
            {cols.map((c) => (
              <div key={c.h} className="relative" style={{ zIndex: 2 }}>
                <p className="eyebrow text-leaf-300 mb-3.5">{c.h}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <Link
                        to={it.to}
                        className="font-body text-sm text-sand-200 hover:text-husk-50 transition-colors duration-200"
                      >
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
