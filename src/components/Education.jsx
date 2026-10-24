import { education } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function Education() {
  return (
    <section className="section" aria-labelledby="edu-h" id="education">
      <div className="container">
        <SectionHead id="edu-h" title="Education" />
        <ul className="jobs">
          {education.map((e) => (
            <Reveal as="li" key={e.school} className="job">
              <div className="job-meta">
                <p>{e.dates}</p>
                <p>{e.place}</p>
              </div>
              <div className="job-main">
                <h3>{e.degree}</h3>
                <p className="job-company">{e.school}</p>
                <p className="edu-detail">{e.detail}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
