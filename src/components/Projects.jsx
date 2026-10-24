import { useRef } from 'react'
import { useReducedMotion } from 'motion/react'
import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function Projects() {
  return (
    <section className="section" aria-labelledby="proj-h" id="projects">
      <div className="container">
        <SectionHead
          id="proj-h"
          title="Projects"
          lede="Systems I've built on AWS. Hover or tap a card to send a request through it."
        />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.1}>
              <ProjectCard project={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ project: p }) {
  const card = useRef()
  const reduced = useReducedMotion()

  // a gentle tilt toward the pointer, plus a light that follows it
  const move = (e) => {
    const el = card.current
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.setProperty('--px', `${x * 100}%`)
    el.style.setProperty('--py', `${y * 100}%`)
    if (!reduced) {
      el.style.setProperty('--rx', `${(0.5 - y) * 5}deg`)
      el.style.setProperty('--ry', `${(x - 0.5) * 7}deg`)
    }
  }
  const leave = () => {
    card.current.style.setProperty('--rx', '0deg')
    card.current.style.setProperty('--ry', '0deg')
  }

  return (
    <article className="project" ref={card} onPointerMove={move} onPointerLeave={leave}>
      <Flow steps={p.flow} />
      <div className="project-body">
        <p className="project-kind">{p.kind}</p>
        <h3>{p.name}</h3>
        <p>{p.summary}</p>
        <ul className="project-results">
          {p.results.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        <ul className="chips" aria-label="Technologies">
          {p.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          View code on GitHub
        </a>
      </div>
    </article>
  )
}

// The project's request path; a packet travels it while the card is hovered or focused.
function Flow({ steps }) {
  return (
    <div className="flow" aria-label={`Request path: ${steps.join(', then ')}`} role="img">
      {steps.map((s, i) => (
        <div className="flow-step" key={s} style={{ '--i': i, '--n': steps.length }}>
          <span className="flow-node">{s}</span>
          {i < steps.length - 1 && (
            <span className="flow-link" aria-hidden="true">
              <span className="flow-packet" />
            </span>
          )}
        </div>
      ))}
    </div>
  )
}
