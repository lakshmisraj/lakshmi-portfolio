import { useEffect, useState } from 'react'
import { useReducedMotion } from 'motion/react'

// Her career, printed as a cluster of running services. Commands type out once on load.
const script = [
  { cmd: 'whoami' },
  { out: [['lakshmi-shibu-raj', 'name'], ['  backend & distributed systems', 'dim']] },
  { cmd: 'kubectl get pods -n career' },
  { table: true },
  { cmd: 'curl -s citi.internal/impact | jq' },
  { json: true },
]

const pods = [
  ['nyu-ms-cs', 'Running', 'until May 2026'],
  ['simplian-menu-svc', 'Completed', '2025'],
  ['citi-api-framework', 'Completed', '2023–24'],
  ['rbs-kpi-dashboard', 'Completed', '2022'],
]

const impact = [
  ['uptime', '"99.98%"'],
  ['p_latency_change', '"-18%"'],
  ['daily_failures_fixed', '10'],
  ['services_refactored', '15'],
]

export default function Terminal() {
  const reduced = useReducedMotion()
  const [step, setStep] = useState(reduced ? script.length : 0)
  const [typed, setTyped] = useState('')

  useEffect(() => {
    if (reduced || step >= script.length) return
    const line = script[step]
    if (!line.cmd) {
      const t = setTimeout(() => setStep((s) => s + 1), 380)
      return () => clearTimeout(t)
    }
    if (typed.length < line.cmd.length) {
      const t = setTimeout(
        () => setTyped(line.cmd.slice(0, typed.length + 1)),
        step === 0 && typed.length === 0 ? 700 : 38,
      )
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setStep((s) => s + 1)
      setTyped('')
    }, 260)
    return () => clearTimeout(t)
  }, [step, typed, reduced])

  const shown = script.slice(0, step)
  const current = step < script.length && script[step].cmd ? script[step] : null

  return (
    <div className="terminal" role="img" aria-label="Terminal showing Lakshmi's education and roles as running services, and her impact at Citi: 99.98% uptime and 18% lower latency.">
      <div className="terminal-bar" aria-hidden="true">
        <span />
        <span />
        <span />
        <p>lakshmi@brooklyn: ~</p>
      </div>
      <div className="terminal-body" aria-hidden="true">
        {shown.map((line, i) => (
          <Line key={i} line={line} />
        ))}
        {current && (
          <p>
            <span className="t-prompt">$</span> {typed}
            <span className="t-caret" />
          </p>
        )}
        {step >= script.length && (
          <p>
            <span className="t-prompt">$</span> <span className="t-caret" />
          </p>
        )}
      </div>
    </div>
  )
}

function Line({ line }) {
  if (line.cmd)
    return (
      <p>
        <span className="t-prompt">$</span> {line.cmd}
      </p>
    )
  if (line.out)
    return (
      <p>
        {line.out.map(([t, c]) => (
          <span key={t} className={`t-${c}`}>
            {t}
          </span>
        ))}
      </p>
    )
  if (line.table)
    return (
      <div className="t-table">
        <p className="t-dim">
          <span>NAME</span>
          <span>STATUS</span>
          <span>WHEN</span>
        </p>
        {pods.map(([n, s, w]) => (
          <p key={n}>
            <span>{n}</span>
            <span className={s === 'Running' ? 't-run' : 't-done'}>{s}</span>
            <span className="t-dim">{w}</span>
          </p>
        ))}
      </div>
    )
  return (
    <div className="t-json">
      <p>{'{'}</p>
      {impact.map(([k, v], i) => (
        <p key={k}>
          {'  '}
          <span className="t-key">"{k}"</span>: <span className="t-val">{v}</span>
          {i < impact.length - 1 ? ',' : ''}
        </p>
      ))}
      <p>{'}'}</p>
    </div>
  )
}
