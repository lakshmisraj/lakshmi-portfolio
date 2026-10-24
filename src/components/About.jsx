import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { FaCheck, FaCopy, FaGraduationCap, FaLocationDot } from 'react-icons/fa6'
import { person } from '../data'
import Reveal, { SectionHead } from './Reveal'

const focus = [
  'Microservices and REST APIs',
  'Distributed systems and reliability',
  'Cloud-native apps on AWS',
  'Kubernetes and Docker',
  'Performance tuning',
  'CI/CD automation',
]

export default function About() {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(person.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      window.location.href = `mailto:${person.email}`
    }
  }

  return (
    <section className="section" aria-labelledby="about-h" id="about">
      <div className="container">
        <SectionHead id="about-h" title="About me" />
        <div className="bento">
          <Reveal className="tile tile-story">
            <p className="tile-lead">
              I like the parts of software that have to keep working when nobody is watching.
            </p>
            <p>
              At Citi I designed the Spring Boot service that ended daily pod crashes, refactored
              the API framework behind 15+ services, and tuned the JVM until peak-load latency fell
              by about 18%. Before that I built KPI dashboards and automation at Royal Bank of
              Scotland, and in 2025 I built a self-service menu system at Simplian.
            </p>
            <p>
              I'm now finishing an MS in Computer Science at NYU, building serverless and Kubernetes
              systems on AWS, and looking for a full-time backend or platform role.
            </p>
          </Reveal>

          <Reveal className="tile tile-place" delay={0.08}>
            <FaLocationDot className="tile-icon" aria-hidden="true" />
            <h3>Brooklyn, New York</h3>
            <p>Available for full-time roles from May 2026.</p>
          </Reveal>

          <Reveal className="tile tile-school" delay={0.14}>
            <FaGraduationCap className="tile-icon" aria-hidden="true" />
            <h3>MS Computer Science, NYU</h3>
            <p>Graduating May 2026, GPA 3.6</p>
          </Reveal>

          <Reveal className="tile tile-focus" delay={0.1}>
            <h3>What I work on</h3>
            <ul>
              {focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="tile tile-mail" delay={0.16}>
            <h3>Want to talk about a role?</h3>
            <p className="tile-email">{person.email}</p>
            <button className="btn btn-primary" type="button" onClick={copy}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={copied ? 'done' : 'copy'}
                  className="btn-swap"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.18 }}
                >
                  {copied ? <FaCheck aria-hidden="true" /> : <FaCopy aria-hidden="true" />}
                  {copied ? 'Email copied' : 'Copy email address'}
                </motion.span>
              </AnimatePresence>
            </button>
            <span className="sr-only" role="status">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
