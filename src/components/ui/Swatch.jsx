const tones = {
  fiber: 'swatch-fiber',
  husk: 'swatch-husk',
  board: 'swatch-board',
  leaf: 'swatch-leaf',
  jaali: 'swatch-jaali',
  deck: 'swatch-deck',
}

export default function Swatch({ label, tone = 'fiber', ratio = '4/3', frame = false, rounded = 'rounded-[12px]', className = '', image, imageFit = 'cover', children }) {
  return (
    <div
      className={`relative overflow-hidden flex items-end ${image ? '' : tones[tone] || tones.fiber} ${frame ? 'border-[3px] border-ink-900 rounded-[5px]' : `border border-black/[0.06] ${rounded}`} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {image && (
        <img
          src={image}
          alt=""
          className={`absolute inset-0 w-full h-full ${imageFit === 'contain' ? 'object-contain bg-husk-100' : 'object-cover'}`}
          loading="lazy"
        />
      )}
      {children}
      {label && (
        <span className="font-mono text-[10.5px] tracking-[0.1em] uppercase text-ink-900/60 bg-husk-50/80 backdrop-blur-sm px-2.5 py-1.5 m-2.5 rounded-[3px]">
          {label}
        </span>
      )}
    </div>
  )
}
