import { motion, useReducedMotion } from 'motion/react'

// Rises into place the first time it scrolls into view.
export default function Reveal({ as = 'div', delay = 0, y = 28, children, ...rest }) {
  const reduced = useReducedMotion()
  const Tag = motion[as]
  if (reduced) return <Tag {...rest}>{children}</Tag>
  return (
    <Tag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      {...rest}
    >
      {children}
    </Tag>
  )
}

export function SectionHead({ id, title, lede }) {
  return (
    <Reveal className="section-head">
      <h2 id={id}>{title}</h2>
      {lede && <p>{lede}</p>}
    </Reveal>
  )
}
