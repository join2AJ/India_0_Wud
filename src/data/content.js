import greenproBadge from '../assets/badges/greenpro.png'
import boardImg from '../assets/products/indowud-board.webp'
import doorImg from '../assets/products/nfc-door.webp'
import frameImg from '../assets/products/nfc-frame.webp'
import jaaliImg from '../assets/products/nfc-jaali.webp'
import deckingImg from '../assets/products/nfc-decking.webp'
import fenceImg from '../assets/products/nfc-fence.webp'

export const products = [
  { id: 'board', name: 'Indowud NFC Board', tone: 'board', tag: 'The hero panel', desc: 'A zero-wood substitute for plywood and MDF/HDF — termite proof, waterproof, flame retardant and easily machinable, with the natural look and feel of tropical wood.', image: boardImg },
  { id: 'door', name: 'NFC Door', tone: 'husk', tag: 'Joinery', desc: 'Pre-engineered door panels and shutters that never warp, swell or rot — built for Indian climates and decades of daily use.', image: doorImg },
  { id: 'frame', name: 'NFC Frame', tone: 'fiber', tag: 'Joinery', desc: 'Door and window frames engineered to match every panel in the range — dimensionally stable, paintable and CNC-ready.', image: frameImg },
  { id: 'jaali', name: 'NFC Jaali', tone: 'jaali', tag: 'Façades', desc: 'CNC-routed decorative screens and partitions that bring privacy with light — a modern take on a timeless architectural craft.', image: jaaliImg },
  { id: 'decking', name: 'NFC Decking', tone: 'deck', tag: 'Outdoor', desc: 'Ice, rain and water-proof planks engineered for patios, façades and poolside decks that face the elements every day.', image: deckingImg },
  { id: 'fence', name: 'NFC Fence', tone: 'leaf', tag: 'Outdoor', desc: 'Anti-rodent, weatherproof fencing and boundary panels that hold their shape and finish through every season.', image: fenceImg },
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
    desc: 'A Type III Environmental Product Declaration — independently verified, transparent reporting of our material’s lifecycle impact, end to end.',
    icon: 'file-check',
  },
]

export const benefits = [
  { title: 'Prevents Deforestation', desc: 'Every board replaces wood with agricultural rice husk waste — not a single tree falls in the process.', icon: 'trees' },
  { title: 'Healthier Indoor Air', desc: 'Anti-bacterial, formaldehyde-free panels that let the people inside breathe freely, year-round.', icon: 'wind' },
  { title: 'Weatherproof by Design', desc: 'Ice, rain and water resistant — engineered for every climate, indoors and out, without compromise.', icon: 'cloud-rain' },
  { title: 'Built to be Shaped', desc: 'Mouldable, machinable, paintable — a material that bends to the architect’s vision, not the other way round.', icon: 'shapes' },
  { title: 'Pest Secure for Decades', desc: 'Naturally guarded against termites and rodents — durability measured in decades, not seasons.', icon: 'shield-check' },
  { title: 'Closes the Waste Loop', desc: 'Converts husk that would otherwise be burned in open fields into architecture that lasts a lifetime.', icon: 'recycle' },
]

export const finishes = ['Natural Husk', 'Charcoal Oak', 'Smoked Teak', 'Linen White', 'Slate']
export const thicknesses = ['6mm', '12mm', '16mm', '18mm', '25mm']
