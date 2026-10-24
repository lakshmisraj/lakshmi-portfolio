import { useEffect, useRef, useState } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'
import { stats } from '../data'

export default function Stats() {
  return (
    <section className="stats" aria-label="Impact in numbers">
      <ul className="container stats-row">
        {stats.map((s) => (
          <li key={s.label}>
            {s.display ? <p className="stat-num">{s.display}</p> : <Count {...s} />}
            <p>{s.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Count({ value, decimals = 0, suffix = '' }) {
  const ref = useRef()
  const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' })
  const reduced = useReducedMotion()
  // uptime counts up from 99, the rest from zero
  const from = value > 99 && value < 100 ? 99 : 0
  const [shown, setShown] = useState(value)

  useEffect(() => {
    if (!inView || reduced) return
    const c = animate(from, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setShown(v),
    })
    return () => c.stop()
  }, [inView, reduced, from, value])

  return (
    <p className="stat-num" ref={ref}>
      {shown.toFixed(decimals)}
      {suffix}
    </p>
  )
}
