// Lightweight, dependency-free table and bar-chart primitives for the
// journal - used to ground each post in comparable numbers rather than
// leaving claims to prose alone.

export function CompareTable({ caption, columns, rows, highlight }) {
  return (
    <figure className="my-2">
      <div className="overflow-x-auto rounded-[12px] border border-sand-200">
        <table className="w-full text-left border-collapse text-[13px]">
          <thead>
            <tr className="bg-husk-100">
              {columns.map((c, i) => (
                <th key={c} className={`font-mono text-[10.5px] uppercase tracking-[0.12em] text-sand-500 font-semibold px-4 py-3 ${i === highlight ? 'text-leaf-700' : ''}`}>
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, ri) => (
              <tr key={ri} className={ri % 2 ? 'bg-husk-50/60' : 'bg-white'}>
                {r.map((cell, ci) => (
                  <td
                    key={ci}
                    className={`px-4 py-3 leading-snug border-t border-sand-200 ${ci === 0 ? 'font-heading font-semibold text-ink-900' : 'text-sand-500'} ${ci === highlight ? 'text-leaf-700 font-semibold bg-leaf-100/40' : ''}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {caption && <figcaption className="mt-2.5 text-[12px] text-sand-400 italic">{caption}</figcaption>}
    </figure>
  )
}

export function StatBars({ caption, unit = '', items }) {
  const max = Math.max(...items.map((it) => it.value))
  return (
    <figure className="my-2 rounded-[12px] border border-sand-200 bg-white p-6">
      <div className="space-y-4">
        {items.map((it) => (
          <div key={it.label}>
            <div className="flex items-baseline justify-between mb-1.5">
              <span className="text-[13px] font-heading font-semibold text-ink-900">{it.label}</span>
              <span className="font-mono text-[12px] text-sand-500">{it.value}{unit}</span>
            </div>
            <div className="h-2.5 rounded-full bg-husk-100 overflow-hidden">
              <div
                className={`h-full rounded-full ${it.tone || 'bg-leaf-500'}`}
                style={{ width: `${Math.max(4, (it.value / max) * 100)}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      {caption && <figcaption className="mt-4 text-[12px] text-sand-400 italic">{caption}</figcaption>}
    </figure>
  )
}
