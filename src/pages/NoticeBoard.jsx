import { Pin, Megaphone, CalendarClock, FileBadge, Factory, Award } from 'lucide-react'
import Reveal from '../components/Reveal'
import Badge from '../components/ui/Badge'

const toneMap = {
  Announcement: 'accent',
  Certification: 'positive',
  Production: 'outline',
  Event: 'warning',
}

const notices = [
  {
    Icon: Award,
    category: 'Certification',
    date: '28 May 2026',
    title: 'Indowud NFC boards re-certified under CII GreenPro Ecolabel',
    body: 'Our flagship NFC board range has cleared its annual GreenPro re-assessment with an improved life-cycle score, reaffirming compliance with the strictest Indian green-building benchmarks for embodied carbon and indoor air quality.',
  },
  {
    Icon: Factory,
    category: 'Production',
    date: '14 May 2026',
    title: 'Husk intake crosses 4,000 tonnes for the current harvest cycle',
    body: 'Procurement from partner farms and rice mills around Tamil Nadu has crossed 4,000 tonnes of parali for this season alone - all of it diverted from open-field burning and now milled into board-ready fibre at the Chennai facility.',
  },
  {
    Icon: Megaphone,
    category: 'Announcement',
    date: '02 May 2026',
    title: 'NFC Jaali now available in three new CNC-routed pattern profiles',
    body: 'Three additional façade-screen patterns join the NFC Jaali range this month, expanding the catalogue for architects designing light-filtering screens, privacy partitions and ventilated cladding systems.',
  },
  {
    Icon: CalendarClock,
    category: 'Event',
    date: '22 April 2026',
    title: 'Indowud at IndiaWood 2026 - visit us at Hall 3, Stall C-114',
    body: 'Our technical team will be on the floor with live machining demonstrations, finish samples and project consultations throughout the show. Book a slot in advance through the contact page to skip the queue.',
  },
  {
    Icon: FileBadge,
    category: 'Certification',
    date: '30 March 2026',
    title: 'Updated Environmental Product Declaration (EPD) now live',
    body: 'A refreshed EPD reflecting this year\'s production data - including the most current carbon and water-use figures - is now available for download from the resources page for project life-cycle assessments.',
  },
  {
    Icon: Megaphone,
    category: 'Announcement',
    date: '11 March 2026',
    title: 'Extended dealer network now covers six additional states',
    body: 'New authorised dealers are now operational across six additional states, bringing sample access, technical support and faster fulfilment closer to architects and fabricators outside Tamil Nadu.',
  },
]

export default function NoticeBoard() {
  return (
    <div>
      <section className="texture-grain texture-charcoal text-husk-100 pt-20 pb-20 px-6 lg:px-10">
        <div className="max-w-[820px] mx-auto text-center">
          <Reveal>
            <p className="eyebrow text-leaf-300 mb-5">Notice Board</p>
            <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,3.5rem)] tracking-[-0.025em] text-husk-50 text-balance">
              What's moving at Indowud, as it happens
            </h1>
            <p className="mt-6 text-lg text-sand-300 leading-relaxed max-w-xl mx-auto">
              Certifications, production milestones, new product releases and
              events - the running log of what's changing across the company
              and the factory floor.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-20 px-6 lg:px-10">
        <div className="max-w-[860px] mx-auto space-y-4">
          {notices.map((n, i) => (
            <Reveal key={n.title} delay={i * 0.06}>
              <div className="rounded-[12px] border border-sand-200 bg-white p-6 sm:p-7 shadow-[var(--shadow-warm-sm)] flex gap-5">
                <span className="shrink-0 grid place-items-center w-11 h-11 rounded-[10px] bg-leaf-100 text-leaf-700">
                  <n.Icon size={19} strokeWidth={1.6} />
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2.5 mb-2">
                    <Badge tone={toneMap[n.category] || 'neutral'}>{n.category}</Badge>
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10.5px] uppercase tracking-[0.08em] text-sand-400">
                      <Pin size={11} /> {n.date}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[16.5px] leading-snug text-ink-900 mb-1.5">{n.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-sand-500">{n.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-10 text-center text-sm text-sand-500 max-w-md mx-auto">
            Notices are updated as they happen - bookmark this page or follow
            our resources feed for certification and dispatch updates.
          </p>
        </Reveal>
      </section>
    </div>
  )
}
