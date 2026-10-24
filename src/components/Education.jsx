import { FaGraduationCap } from 'react-icons/fa6'
import { education } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function Education() {
  return (
    <section className="section section-tight" aria-labelledby="edu-h" id="education">
      <div className="container">
        <SectionHead id="edu-h" title="Education" />
        <div className="education">
          {education.map((e, i) => (
            <Reveal key={e.school} className="school" delay={i * 0.08}>
              <FaGraduationCap className="school-icon" aria-hidden="true" />
              <div>
                <h3>{e.degree}</h3>
                <p className="school-name">{e.school}</p>
                <p className="school-meta">
                  {e.dates}, {e.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
