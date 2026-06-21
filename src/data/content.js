import greenproBadge from '../assets/badges/greenpro.png'
import zerowudImg from '../assets/products/zerowud-board.webp'
import boardImg from '../assets/products/indowud-board.webp'
import doorImg from '../assets/products/nfc-door.webp'
import frameImg from '../assets/products/nfc-frame.webp'
import jaaliImg from '../assets/products/nfc-jaali.webp'
import deckingImg from '../assets/products/nfc-decking.webp'
import fluteImg from '../assets/products/nfc-flute.png'
import texturedImg from '../assets/products/nfc-textured.png'
import trimImg from '../assets/products/nfc-trim.png'
import fenceImg from '../assets/products/nfc-fence.webp'
import gluImg from '../assets/products/nfc-glu.webp'

export const categories = [
  { slug: 'panels', label: 'Panels', blurb: 'The foundation of the NFC system — zero-wood boards that replace plywood and MDF across every application.' },
  { slug: 'joinery', label: 'Joinery', blurb: 'Doors, frames and CNC-routed Jaali screens engineered to match every panel in the range.' },
  { slug: 'surfaces', label: 'Surfaces & Profiles', blurb: 'Fluted louvers, textured panels and trim profiles that bring depth and texture to any interior.' },
  { slug: 'outdoor', label: 'Outdoor', blurb: 'Decking and fencing profiles built to face the elements — sun, rain and termites — without losing form.' },
  { slug: 'adhesive', label: 'Adhesive', blurb: 'NFC-GLU: the purpose-made bonding agent designed to pair with every panel in the Indowud system.' },
]

export const products = [
  {
    id: 'zerowud-board',
    name: 'zerOwud NFC Board',
    tone: 'board',
    tag: 'Panel',
    category: 'panels',
    desc: 'The entry-level NFC panel — a direct, zero-wood substitute for standard plywood and MDF, termite proof and waterproof from the core.',
    longDesc: 'zerOwud NFC Board is engineered from compressed rice husk fibre — the same agricultural waste that would otherwise be burned in open fields. It is dimensionally stable, termite and rodent proof, and never warps, swells or delaminates. A practical, sustainable replacement for plywood across cabinetry, partitions and general interior work.',
    image: zerowudImg,
  },
  {
    id: 'board',
    name: 'Indowud NFC Board',
    tone: 'board',
    tag: 'Hero Panel',
    category: 'panels',
    desc: 'A premium zero-wood substitute for plywood and MDF/HDF — termite proof, waterproof, flame retardant and easily machinable, with the natural look and feel of tropical wood.',
    longDesc: 'Engineered from rice husk, Indowud NFC Board looks and works like premium plywood — only it never warps, rots, or burns easily. It is the foundation panel of the entire range: machinable, paintable, and ready for laminate or veneer overlay, suited to interiors and exteriors alike.',
    image: boardImg,
  },
  {
    id: 'door',
    name: 'NFC Door',
    tone: 'husk',
    tag: 'Joinery',
    category: 'joinery',
    desc: 'Pre-engineered door panels and shutters that never warp, swell or rot — built for Indian climates and decades of daily use.',
    longDesc: 'Indowud NFC Doors combine the timeless beauty of natural wood with a zero-wood, zero-compromise core. Termite and moisture proof by design, they can be painted, polished, varnished or laminated — an eco-friendly entryway that performs for decades in Indian climates.',
    image: doorImg,
  },
  {
    id: 'frame',
    name: 'NFC Frame',
    tone: 'fiber',
    tag: 'Joinery',
    category: 'joinery',
    desc: 'Door and window frames engineered to match every panel in the range — dimensionally stable, paintable and CNC-ready.',
    longDesc: 'With open grains akin to natural wood, Indowud NFC Frames adapt to any aesthetic — paint, varnish or stain with ease. Dimensionally stable and CNC-ready, they merge effortlessly with every panel and door in the range for a unified, sustainable joinery system.',
    image: frameImg,
  },
  {
    id: 'jaali',
    name: 'NFC Jaali',
    tone: 'jaali',
    tag: 'Façades',
    category: 'joinery',
    desc: 'CNC-routed decorative screens and partitions that bring privacy with light — a modern take on a timeless architectural craft.',
    longDesc: 'A fusion of art, sustainability and strength — Indowud NFC Jaali brings intricate, CNC-routed mashrabia-inspired patterns to interiors and exteriors. It lightens façade loads while filtering light into privacy, reviving a timeless architectural craft in a zero-wood material.',
    image: jaaliImg,
  },
  {
    id: 'flute',
    name: 'NFC Flute',
    tone: 'fiber',
    tag: 'Louver',
    category: 'surfaces',
    desc: 'Precision-milled fluted louver panels that add depth, rhythm and acoustic softness to walls, ceilings and partitions.',
    longDesc: 'NFC Flute panels bring the warmth and texture of fluted wood to any surface — without a single tree. CNC-milled from the Indowud NFC board, each channel is crisp and consistent. Ideal for feature walls, ceiling baffles and partition accents in hospitality, retail and residential interiors.',
    image: fluteImg,
  },
  {
    id: 'textured',
    name: 'NFC Textured Panel',
    tone: 'husk',
    tag: 'Surface',
    category: 'surfaces',
    desc: 'Surface-embossed NFC panels that bring tactile depth to feature walls, furniture faces and cladding without wood or veneers.',
    longDesc: 'Indowud NFC Textured Panels are pressed with surface relief patterns that replicate the tactile quality of natural stone or wood grain — zero formaldehyde, zero timber. Lightweight, moisture-resistant and ready to paint or coat, they transform plain surfaces into architectural statements.',
    image: texturedImg,
  },
  {
    id: 'trim',
    name: 'NFC Trim',
    tone: 'board',
    tag: 'Profiles',
    category: 'surfaces',
    desc: 'Precision edge and corner profiles that finish every Indowud panel installation — clean lines, no exposed grain, no splitting.',
    longDesc: 'NFC Trim profiles complete the system. Engineered to snap and bond cleanly onto every Indowud panel edge, they eliminate exposed core, prevent moisture ingress at joints and deliver crisp architectural lines across skirting, architrave and reveal applications.',
    image: trimImg,
  },
  {
    id: 'decking',
    name: 'NFC Decking',
    tone: 'deck',
    tag: 'Outdoor',
    category: 'outdoor',
    desc: 'Ice, rain and water-proof planks engineered for patios, façades and poolside decks that face the elements every day.',
    longDesc: 'The natural beauty of wood, without the maintenance hassle. Indowud NFC Decking delivers exceptional strength, durability and weather resistance for patios, façades and poolside decks — and stains easily to match any palette you specify.',
    image: deckingImg,
  },
  {
    id: 'fence',
    name: 'NFC Fence',
    tone: 'leaf',
    tag: 'Outdoor',
    category: 'outdoor',
    desc: 'Anti-rodent, weatherproof fencing and boundary panels that hold their shape and finish through every season.',
    longDesc: 'A beautiful, eco-friendly alternative to traditional wood fencing. Strong, durable and weather-resistant, Indowud NFC Fence holds its shape and finish through every season — available in standard, single, double and triple-twist styles.',
    image: fenceImg,
  },
  {
    id: 'glu',
    name: 'NFC-GLU',
    tone: 'jaali',
    tag: 'Adhesive',
    category: 'adhesive',
    desc: 'The purpose-formulated bonding agent for the entire Indowud NFC system — high-strength, moisture-resistant and zero-VOC.',
    longDesc: 'NFC-GLU is engineered to bond NFC panels to themselves and to standard substrates — concrete, metal, glass and tile — with a grip that outlasts the installation. Zero formaldehyde, zero VOC. Moisture and heat resistant. The finishing link in a fully zero-wood system.',
    image: gluImg,
  },
]

export const matrix = [
  { icon: 'droplet', value: '100%', property: 'Waterproof & ice-proof', desc: 'Zero swelling. Zero delamination, even fully submerged.', std: '0% water absorption' },
  { icon: 'bug', value: '100%', property: 'Termite & rodent proof', desc: 'No wood means no buffet — nothing to digest, nothing to lose.', std: 'Zero pest damage' },
  { icon: 'flame', value: 'Class 1/A', property: 'Flame retardant', desc: 'Smoke-suppressant and self-extinguishing for safer interiors.', std: 'ASTM E84' },
  { icon: 'waves', value: '130–160°C', property: 'Thermoformable', desc: 'Heat and mould into organic curves — a five-minute lock-in.', std: 'Dimensionally stable' },
  { icon: 'wind', value: '0', property: 'Formaldehyde & VOC', desc: 'Safe indoor air. Nothing toxic ever off-gasses from the panel.', std: 'GREENGUARD' },
  { icon: 'leaf', value: '−60%', property: 'Carbon vs plywood', desc: 'Built from rice husk that would otherwise be openly burned.', std: 'GreenPro · EPD' },
]

export const philosophy = [
  'We do not kill to create.',
  'We do not destroy to design.',
  'We do not cut down to build.',
]

export const certifications = [
  {
    name: 'CII GreenPro Ecolabel',
    desc: 'Certified as a sustainable green product with measurably lower environmental impact — contributing directly to Green Building and Green Company ratings.',
    icon: 'badge-check',
    badge: greenproBadge,
  },
  {
    name: 'GEN Accreditation · GENICES',
    desc: 'Accredited by the Global Ecolabelling Network, validating our environmental claims against rigorous, independent international standards.',
    icon: 'globe',
  },
  {
    name: 'EPD Verification',
    desc: 'A Type III Environmental Product Declaration — independently verified, transparent reporting of our material lifecycle impact, end to end.',
    icon: 'file-check',
  },
]

export const benefits = [
  { title: 'Prevents Deforestation', desc: 'Every board replaces wood with agricultural rice husk waste — not a single tree falls in the process.', icon: 'trees' },
  { title: 'Healthier Indoor Air', desc: 'Anti-bacterial, formaldehyde-free panels that let the people inside breathe freely, year-round.', icon: 'wind' },
  { title: 'Weatherproof by Design', desc: 'Ice, rain and water resistant — engineered for every climate, indoors and out, without compromise.', icon: 'cloud-rain' },
  { title: 'Built to be Shaped', desc: 'Mouldable, machinable, paintable — a material that bends to the architect\'s vision, not the other way round.', icon: 'shapes' },
  { title: 'Pest Secure for Decades', desc: 'Naturally guarded against termites and rodents — durability measured in decades, not seasons.', icon: 'shield-check' },
  { title: 'Closes the Waste Loop', desc: 'Converts husk that would otherwise be burned in open fields into architecture that lasts a lifetime.', icon: 'recycle' },
]

export const finishes = ['Natural Husk', 'Charcoal Oak', 'Smoked Teak', 'Linen White', 'Slate']
export const thicknesses = ['6mm', '12mm', '16mm', '18mm', '25mm']

export const finishTones = {
  'Natural Husk': ['#D9C9AC', '#A78A60'],
  'Charcoal Oak': ['#46392C', '#241B14'],
  'Smoked Teak': ['#6B4A33', '#3C2A1C'],
  'Linen White': ['#EFE8DA', '#CBBFA8'],
  'Slate': ['#6B6E6C', '#3F4341'],
}
