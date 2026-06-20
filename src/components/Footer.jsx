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

// Deer family silhouette — stag, doe and fawn — rendered as a single SVG so
// it scales cleanly at any footer width. The trio lives because the forest
// does: a quiet visual reminder of the Ahimsa promise.
function DeerFamily({ className }) {
  return (
    <svg viewBox="0 0 860 210" className={className} aria-hidden fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      {/* ── DOE (left) ─────────────────────────────────── */}
      {/* body */}
      <path d="M52,168 C52,138 75,112 138,107 C200,102 272,115 280,140 C287,160 262,173 210,175 C148,177 52,172 52,168 Z" />
      {/* neck */}
      <path d="M102,110 C104,93 112,76 122,63 C126,57 134,52 134,52 L140,58 C140,58 132,63 129,68 C119,81 113,97 112,112 Z" />
      {/* head */}
      <path d="M118,30 C118,17 130,8 144,11 C158,14 167,26 163,40 C159,52 147,57 134,53 C121,49 118,41 118,30 Z" />
      {/* muzzle */}
      <path d="M155,46 C162,44 170,48 172,56 C168,58 160,56 155,52 Z" />
      {/* ear */}
      <path d="M119,25 C109,14 106,1 116,-3 C125,-7 134,8 130,24 Z" />
      {/* front legs */}
      <path d="M118,170 C116,182 117,200 115,205 C113,207 109,207 109,204 C108,199 110,181 108,168 Z" />
      <path d="M143,172 C141,184 142,200 140,204 C138,207 134,207 134,204 C133,199 136,183 134,171 Z" />
      {/* back legs */}
      <path d="M222,170 C220,182 221,200 219,204 C217,207 213,207 213,204 C212,199 214,181 212,169 Z" />
      <path d="M248,167 C246,180 247,197 245,202 C243,205 239,205 239,202 C238,197 240,179 238,166 Z" />
      {/* tail */}
      <path d="M278,126 C290,120 298,130 293,142 C289,151 276,148 276,138 Z" />

      {/* ── FAWN (centre, smallest) ─────────────────────── */}
      {/* body */}
      <path d="M356,172 C356,152 370,138 408,135 C445,132 474,144 475,163 C476,175 460,182 422,183 C382,184 356,176 356,172 Z" />
      {/* neck */}
      <path d="M432,137 C434,124 441,113 449,107 C452,105 457,103 457,103 L461,108 C461,108 457,110 454,113 C446,119 440,130 439,138 Z" />
      {/* head */}
      <path d="M442,90 C442,80 452,74 462,77 C472,80 478,90 474,100 C470,109 460,113 450,110 C440,106 442,99 442,90 Z" />
      {/* muzzle */}
      <path d="M469,103 C475,101 481,105 483,111 C479,113 473,111 469,107 Z" />
      {/* ear */}
      <path d="M443,86 C435,76 433,66 441,63 C448,60 455,73 452,85 Z" />
      {/* front legs */}
      <path d="M372,178 C370,188 371,202 369,206 C367,208 364,208 363,205 C363,201 365,187 363,176 Z" />
      <path d="M390,179 C388,189 389,203 387,207 C385,209 382,209 381,206 C381,202 383,188 381,178 Z" />
      {/* back legs */}
      <path d="M440,177 C438,187 439,201 437,205 C435,207 432,207 431,204 C431,200 433,186 431,176 Z" />
      <path d="M455,175 C453,185 454,199 452,203 C450,205 447,205 446,202 C446,198 448,184 446,174 Z" />

      {/* ── STAG (right, largest, with antlers) ─────────── */}
      {/* body */}
      <path d="M548,162 C548,118 582,88 668,85 C754,82 808,110 808,145 C808,170 780,180 706,182 C622,184 548,172 548,162 Z" />
      {/* neck */}
      <path d="M604,92 C602,72 596,54 588,40 C584,33 578,27 578,27 L586,22 C586,22 592,28 597,36 C606,51 612,70 614,93 Z" />
      {/* head */}
      <path d="M568,10 C568,-5 583,-15 599,-11 C615,-7 624,7 618,22 C612,35 598,40 583,35 C568,30 568,22 568,10 Z" />
      {/* muzzle */}
      <path d="M610,25 C618,21 627,25 630,34 C625,37 616,34 611,29 Z" />
      {/* ear left */}
      <path d="M569,5 C558,-8 556,-22 567,-26 C577,-30 588,-12 584,5 Z" />
      {/* ear right */}
      <path d="M608,1 C613,-13 621,-22 629,-17 C637,-12 630,4 618,8 Z" />

      {/* antlers — left beam */}
      <path d="M578,22 C574,8 566,-12 558,-30 C557,-33 560,-35 562,-33 C570,-15 577,5 582,20 Z" />
      {/* left brow tine */}
      <path d="M565,-8 C558,-17 548,-24 541,-28 C539,-30 541,-33 543,-31 C550,-27 560,-20 568,-10 Z" />
      {/* left bez tine */}
      <path d="M558,-20 C555,-30 555,-42 560,-50 C561,-52 564,-50 563,-48 C559,-41 560,-30 563,-19 Z" />
      {/* left top fork */}
      <path d="M562,-30 C567,-40 574,-48 580,-52 C581,-54 584,-52 583,-50 C577,-47 571,-39 566,-28 Z" />

      {/* antlers — right beam */}
      <path d="M596,18 C600,4 608,-16 614,-35 C615,-38 618,-37 617,-34 C611,-16 604,5 600,19 Z" />
      {/* right brow tine */}
      <path d="M610,-10 C617,-20 628,-26 636,-30 C638,-31 639,-28 637,-27 C630,-23 620,-17 613,-8 Z" />
      {/* right bez tine */}
      <path d="M613,-22 C615,-33 613,-44 608,-52 C607,-54 610,-56 611,-54 C617,-46 619,-34 616,-22 Z" />
      {/* right top fork */}
      <path d="M614,-33 C610,-43 610,-54 615,-60 C616,-62 619,-60 618,-58 C614,-53 614,-43 617,-32 Z" />

      {/* front legs */}
      <path d="M584,174 C582,188 583,205 581,210 C579,212 575,212 574,209 C573,204 576,188 574,173 Z" />
      <path d="M614,176 C612,190 613,207 611,211 C609,213 605,213 604,210 C603,205 606,189 604,175 Z" />
      {/* back legs */}
      <path d="M724,172 C722,186 723,203 721,207 C719,209 715,209 714,206 C713,201 716,185 714,171 Z" />
      <path d="M752,168 C750,182 751,199 749,204 C747,206 743,206 742,203 C741,198 744,182 742,167 Z" />
      {/* tail */}
      <path d="M805,112 C820,106 830,118 824,132 C818,144 804,140 804,128 Z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="bg-ink-950 text-husk-100 px-6 lg:px-10 pt-14 pb-8">
      <div className="max-w-[1360px] mx-auto">
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
              <div key={c.h}>
                <p className="eyebrow text-leaf-300 mb-3.5">{c.h}</p>
                <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                  {c.items.map((it) => (
                    <li key={it.label}>
                      <Link to={it.to} className="font-body text-sm text-sand-300 hover:text-husk-50 transition-colors duration-200">
                        {it.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Deer family — centred above the copyright strip, very subtle */}
        <div className="mt-12 mb-1 flex justify-center">
          <DeerFamily className="w-full max-w-[600px] text-husk-100 opacity-[0.13]" />
        </div>

        <div className="border-t border-[#4A4234] mt-4 pt-5 flex flex-wrap justify-between gap-3">
          <span className="font-mono text-[11.5px] text-sand-400">© {new Date().getFullYear()} Indowud NFC · Chennai, India</span>
          <span className="font-mono text-[11.5px] text-sand-400">Climate-positive material science</span>
        </div>
      </div>
    </footer>
  )
}
