// Small flat-style scene illustrations for the journal - hand-built SVGs
// (not stock art or icons) so each post topic gets a distinct visual instead
// of a generic photo or single glyph. Palette pulled from the brand tokens.

const C = {
  ink: '#1C1813',
  ink2: '#272219',
  husk: '#FBF8F1',
  husk2: '#F5F0E4',
  sand: '#D6CBB9',
  sand2: '#BBAD97',
  leaf: '#5E7E45',
  leaf2: '#7E9C60',
  leaf3: '#A6C08A',
  leafDark: '#4C6A3A',
  grain: '#C49A5A',
  grain2: '#E2C896',
}

function Frame({ children }) {
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      {children}
    </svg>
  )
}

const scenes = {
  // sun rising behind a panel/frame on a terrace - for UV / outdoor topics
  'sun-panel': () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <circle cx="232" cy="62" r="34" fill={C.grain} />
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2
        const x1 = 232 + Math.cos(a) * 44, y1 = 62 + Math.sin(a) * 44
        const x2 = 232 + Math.cos(a) * 56, y2 = 62 + Math.sin(a) * 56
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.grain2} strokeWidth="3" strokeLinecap="round" />
      })}
      <rect x="40" y="92" width="150" height="92" rx="6" fill={C.ink2} />
      <rect x="52" y="104" width="126" height="68" rx="4" fill="none" stroke={C.leaf3} strokeWidth="3" />
      <line x1="52" y1="138" x2="178" y2="138" stroke={C.leaf3} strokeWidth="3" />
      <line x1="115" y1="104" x2="115" y2="172" stroke={C.leaf3} strokeWidth="3" />
      <rect x="0" y="184" width="320" height="16" fill={C.sand} />
    </Frame>
  ),
  // raindrop beading on a board cross-section - for water/moisture topics
  'water-board': () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <rect x="40" y="120" width="240" height="44" rx="5" fill={C.ink2} />
      <rect x="40" y="120" width="240" height="10" rx="5" fill={C.leaf2} />
      {[80, 150, 220].map((x, i) => (
        <g key={i}>
          <path d={`M${x} ${56 + i * 6} c -10 14 -10 24 0 32 c 10 -8 10 -18 0 -32 z`} fill={C.leaf3} opacity="0.9" />
          <ellipse cx={x} cy="106" rx="13" ry="5" fill={C.leaf} opacity="0.35" />
        </g>
      ))}
      <rect x="0" y="164" width="320" height="36" fill={C.sand} opacity="0.5" />
    </Frame>
  ),
  // flame meeting a shield over a panel - for fire-retardant topics
  'fire-shield': () => (
    <Frame>
      <rect width="320" height="200" fill={C.ink2} />
      <rect x="120" y="70" width="80" height="110" rx="6" fill={C.husk2} opacity="0.92" />
      <path d="M160 36 C 146 60 138 74 150 92 C 156 100 168 100 174 92 C 184 78 172 64 160 36 Z" fill={C.grain} />
      <path d="M160 56 C 153 70 150 78 156 88 C 160 92 168 92 172 88 C 178 78 168 68 160 56 Z" fill={C.grain2} />
      <path d="M160 116 L 188 132 L 188 162 L 160 178 L 132 162 L 132 132 Z" fill="none" stroke={C.leaf3} strokeWidth="3.5" />
      <path d="M148 148 l 9 9 l 17 -19" fill="none" stroke={C.leaf3} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  // termite trail stopping at a board edge - for termite-proof topics
  'termite-board': () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <rect x="60" y="56" width="46" height="120" rx="4" fill={C.ink2} />
      <rect x="118" y="56" width="46" height="120" rx="4" fill={C.sand2} />
      <path d="M30 168 q 18 -10 36 0 q 18 10 36 0 q 18 -10 36 0" fill="none" stroke={C.grain} strokeWidth="3" strokeDasharray="2 6" strokeLinecap="round" />
      <circle cx="118" cy="168" r="6" fill={C.leaf} />
      <path d="M124 162 l 10 -8 m -10 14 l 12 2 m -12 4 l 9 9" stroke={C.leaf} strokeWidth="2.5" strokeLinecap="round" />
      <rect x="200" y="56" width="90" height="120" rx="6" fill="none" stroke={C.leaf3} strokeWidth="3" />
      <line x1="200" y1="92" x2="290" y2="92" stroke={C.leaf3} strokeWidth="2" opacity="0.6" />
      <line x1="200" y1="128" x2="290" y2="128" stroke={C.leaf3} strokeWidth="2" opacity="0.6" />
    </Frame>
  ),
  // sofa / cabinet silhouette - for furniture topics
  furniture: () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <rect x="46" y="108" width="132" height="56" rx="14" fill={C.ink2} />
      <rect x="46" y="92" width="132" height="34" rx="14" fill={C.leaf2} />
      <rect x="46" y="140" width="20" height="34" rx="6" fill={C.ink} />
      <rect x="158" y="140" width="20" height="34" rx="6" fill={C.ink} />
      <rect x="206" y="84" width="74" height="92" rx="6" fill={C.sand2} />
      <line x1="243" y1="84" x2="243" y2="176" stroke={C.husk2} strokeWidth="3" />
      <circle cx="232" cy="130" r="3" fill={C.ink2} />
      <circle cx="256" cy="130" r="3" fill={C.ink2} />
    </Frame>
  ),
  // factory line - for manufacturing / inside-indowud topics
  factory: () => (
    <Frame>
      <rect width="320" height="200" fill={C.ink2} />
      <rect x="40" y="100" width="220" height="76" rx="4" fill={C.husk2} opacity="0.9" />
      <rect x="64" y="64" width="22" height="40" fill={C.husk2} opacity="0.9" />
      <rect x="104" y="50" width="22" height="54" fill={C.husk2} opacity="0.9" />
      <circle cx="75" cy="58" r="5" fill={C.grain} />
      <circle cx="115" cy="44" r="5" fill={C.grain} />
      <g stroke={C.leaf3} strokeWidth="3" fill="none">
        <rect x="150" y="120" width="84" height="14" rx="3" />
        <circle cx="160" cy="146" r="7" />
        <circle cx="184" cy="146" r="7" />
        <circle cx="208" cy="146" r="7" />
      </g>
      <rect x="0" y="176" width="320" height="24" fill={C.sand} opacity="0.4" />
    </Frame>
  ),
  // balance scale weighing two materials - for comparison topics
  comparison: () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <line x1="160" y1="46" x2="160" y2="160" stroke={C.ink2} strokeWidth="4" />
      <line x1="92" y1="78" x2="228" y2="78" stroke={C.ink2} strokeWidth="4" />
      <path d="M92 78 l -22 50 a 26 14 0 0 0 44 0 z" fill={C.leaf3} opacity="0.85" />
      <path d="M228 78 l 22 50 a 26 14 0 0 1 -44 0 z" fill={C.sand2} />
      <circle cx="160" cy="46" r="6" fill={C.grain} />
      <rect x="146" y="160" width="28" height="26" rx="3" fill={C.ink2} />
    </Frame>
  ),
  // sprout growing from husk - for sustainability / circularity topics
  'leaf-cycle': () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <ellipse cx="160" cy="178" rx="120" ry="16" fill={C.sand} opacity="0.6" />
      <path d="M160 178 C 158 140 158 110 160 82" stroke={C.leafDark} strokeWidth="4" fill="none" strokeLinecap="round" />
      <path d="M160 120 C 130 110 116 88 122 64 C 150 70 168 92 160 120 Z" fill={C.leaf2} />
      <path d="M160 104 C 190 96 206 76 202 54 C 172 58 154 80 160 104 Z" fill={C.leaf3} />
      {[ -34, 0, 34 ].map((dx, i) => (
        <ellipse key={i} cx={160 + dx} cy="184" rx="9" ry="5" fill={C.grain} opacity="0.8" />
      ))}
    </Frame>
  ),
  // stacked cross-section layers - for durability / density topics
  layers: () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      {[ [62, C.leaf3], [88, C.leaf2], [114, C.sand2], [140, C.leaf2], [166, C.leaf3] ].map(([y, fill], i) => (
        <rect key={i} x="60" y={y} width="200" height="20" rx="3" fill={fill} opacity={0.95 - i * 0.06} />
      ))}
      <line x1="280" y1="60" x2="280" y2="184" stroke={C.ink2} strokeWidth="2" />
      <line x1="272" y1="60" x2="288" y2="60" stroke={C.ink2} strokeWidth="2" />
      <line x1="272" y1="184" x2="288" y2="184" stroke={C.ink2} strokeWidth="2" />
    </Frame>
  ),
  // rupee coin stack with an upward arrow - for value / pricing topics
  rupee: () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      {[0, 1, 2].map((i) => (
        <ellipse key={i} cx="120" cy={168 - i * 16} rx="44" ry="14" fill={C.grain2} stroke={C.grain} strokeWidth="2" />
      ))}
      <text x="120" y="146" textAnchor="middle" fontSize="20" fontWeight="700" fill={C.ink2} fontFamily="serif">₹</text>
      <path d="M210 158 L 246 110 L 270 134 L 296 86" stroke={C.leaf} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M280 86 l 16 0 l 0 16" stroke={C.leaf} strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
  // house silhouette with a shield - for home / long-term topics
  'home-shield': () => (
    <Frame>
      <rect width="320" height="200" fill={C.husk2} />
      <path d="M100 120 L 160 78 L 220 120 L 220 178 L 100 178 Z" fill={C.ink2} />
      <rect x="120" y="138" width="28" height="40" fill={C.husk2} opacity="0.9" />
      <rect x="170" y="134" width="28" height="24" fill={C.leaf3} opacity="0.9" />
      <path d="M160 60 L 188 76 L 188 106 L 160 122 L 132 106 L 132 76 Z" fill={C.leaf2} />
      <path d="M148 92 l 9 9 l 17 -19" fill="none" stroke={C.husk2} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  ),
}

export default function BlogIllustration({ scene, className = '' }) {
  const Render = scenes[scene] || scenes.layers
  return (
    <div className={className}>
      <Render />
    </div>
  )
}
