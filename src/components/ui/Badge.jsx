const tones = {
  neutral: 'bg-husk-200 text-sand-600',
  solid: 'bg-ink-900 text-husk-50',
  accent: 'bg-leaf-100 text-leaf-700 border border-leaf-200',
  cert: 'bg-leaf-500 text-husk-50 tracking-[0.08em]',
  outline: 'bg-transparent text-ink-700 border border-sand-200',
  positive: 'bg-leaf-100 text-[#3b5226]',
  warning: 'bg-[#F4E8D2] text-[#8a5e1e]',
  danger: 'bg-[#F1DED7] text-[#823525]',
}

export default function Badge({ children, tone = 'neutral', icon = null, dot = false, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium text-[11.5px] tracking-[0.04em] leading-none uppercase whitespace-nowrap px-2.5 py-1.5 rounded-[3px] ${tones[tone]} ${className}`}
    >
      {dot && <span className="w-1.5 h-1.5 rounded-full bg-current" />}
      {icon}
      {children}
    </span>
  )
}
