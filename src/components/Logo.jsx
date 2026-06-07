// Hand-drawn SVG brandmark - two interlocking diamonds forming the
// Indowud monogram, so the mark renders crisply at any size with no
// raster asset to fetch.
export default function Logo({ className = 'w-9 h-9' }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden role="img">
      <rect x="0.5" y="0.5" width="39" height="39" rx="9" fill="#EFF6F4" stroke="#CFE3DD" />
      <path
        d="M20 8 L30 20 L20 32 L15.5 26.5 L22.5 20 L15.5 13.5 Z"
        fill="none"
        stroke="#1F8F84"
        strokeWidth="2.6"
        strokeLinejoin="round"
      />
      <path
        d="M20 8 L10 20 L20 32 L24.5 26.5 L17.5 20 L24.5 13.5 Z"
        fill="none"
        stroke="#1F8F84"
        strokeWidth="2.6"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  )
}
