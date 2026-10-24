import { FaGithub } from 'react-icons/fa6'
import { projects } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function Projects() {
  return (
    <section className="section" aria-labelledby="proj-h" id="projects">
      <div className="container">
        <SectionHead id="proj-h" title="Project Experience" />
        <div className="projects">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.06}>
              <article className="project">
                <Flow steps={p.flow} />
                <div className="project-body">
                  <h3>{p.name}</h3>
                  <p className="project-kind">{p.kind}</p>
                  <ul className="project-points">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="chips" aria-label="Technologies">
                    {p.tech.map((t) => (
                      <li key={t}>{t}</li>
                    ))}
                  </ul>
                  <a className="project-link" href={p.link} target="_blank" rel="noreferrer">
                    <FaGithub aria-hidden="true" />
                    Source code
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

// The project's request path; a packet travels it while the card is hovered or focused.
function Flow({ steps }) {
  return (
    <div className="flow" aria-label={`Architecture: ${steps.join(', then ')}`} role="img">
      {steps.map((s, i) => (
        <div className="flow-step" key={s} style={{ '--i': i }}>
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
