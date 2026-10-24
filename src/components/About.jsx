import { about, facts } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function About() {
  return (
    <section className="section" aria-labelledby="about-h" id="about">
      <div className="container">
        <SectionHead id="about-h" title="About" />
        <div className="about">
          <Reveal className="about-text">
            {about.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
          <Reveal as="dl" className="facts" delay={0.08}>
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
