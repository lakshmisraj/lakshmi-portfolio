import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react'
import { experience } from '../data'
import Reveal, { SectionHead } from './Reveal'

// The timeline's line fills as you read down it.
export default function Experience() {
  const track = useRef()
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: track, offset: ['start 75%', 'end 55%'] })
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 })

  return (
    <section className="section" aria-labelledby="exp-h" id="experience">
      <div className="container">
        <SectionHead
          id="exp-h"
          title="Experience"
          lede="Backend, platform and data work in banking and enterprise software."
        />
        <ol className="timeline" ref={track}>
          <span className="timeline-rail" aria-hidden="true">
            <motion.span className="timeline-fill" style={{ scaleY: reduced ? 1 : fill }} />
          </span>
          {experience.map((job, i) => (
            <li key={job.company} className="timeline-item">
              <span className="timeline-dot" aria-hidden="true" />
              <Reveal className="job" delay={i * 0.05}>
                <header className="job-head">
                  <div>
                    <h3>{job.role}</h3>
                    <p className="job-company">{job.company}</p>
                  </div>
                  <p className="job-when">
                    <span>{job.dates}</span>
                    <span>{job.place}</span>
                  </p>
                </header>
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
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
