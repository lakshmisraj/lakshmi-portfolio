import { experience } from '../data'
import Reveal, { SectionHead } from './Reveal'

export default function Experience() {
  return (
    <section className="section" aria-labelledby="exp-h" id="experience">
      <div className="container">
        <SectionHead id="exp-h" title="Experience" />
        <ol className="jobs">
          {experience.map((job) => (
            <Reveal as="li" key={job.company} className="job">
              <div className="job-meta">
                <p>{job.dates}</p>
                <p>{job.place}</p>
              </div>
              <div className="job-main">
                <h3>{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <ul className="job-points">
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <ul className="chips" aria-label="Technologies">
                  {job.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
