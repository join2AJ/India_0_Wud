const variants = {
  primary: 'bg-ink-900 text-husk-50 border-ink-900 hover:bg-ink-800 hover:shadow-[var(--shadow-warm-md)]',
  accent: 'bg-leaf-500 text-husk-50 border-leaf-500 hover:bg-leaf-600 hover:border-leaf-600 hover:shadow-[var(--shadow-warm-md)]',
  secondary: 'bg-transparent text-ink-900 border-ink-900 hover:bg-ink-900 hover:text-husk-50',
  ghost: 'bg-transparent text-ink-700 border-transparent hover:bg-husk-200',
  'on-dark': 'bg-husk-100 text-ink-900 border-husk-100 hover:bg-white hover:shadow-[var(--shadow-on-dark)]',
}

const sizes = {
  sm: 'text-[13px] px-3.5 py-1.5',
  md: 'text-[15px] px-5 py-2.5',
  lg: 'text-[17px] px-7 py-3.5',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft = null,
  iconRight = null,
  block = false,
  className = '',
  ...rest
}) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 font-heading font-semibold tracking-[-0.005em] border rounded-[var(--radius-sm,5px)] cursor-pointer whitespace-nowrap transition-all duration-200 active:scale-[0.975] ${variants[variant]} ${sizes[size]} ${block ? 'flex w-full' : ''} ${className}`}
      {...rest}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  )
}
