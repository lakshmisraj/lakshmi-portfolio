import { motion, useReducedMotion } from 'motion/react'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { intro, person } from '../data'
import Terminal from './Terminal'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const reduced = useReducedMotion()
  const rise = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, ease, delay },
        }

  return (
    <section className="hero" id="top">
      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p className="hero-kicker" {...rise(0)}>
            {person.city}. {person.availability}.
          </motion.p>

          <motion.h1 className="hero-name" {...rise(0.08)}>
            {person.name}
          </motion.h1>

          <motion.p className="hero-role" {...rise(0.16)}>
            {person.title}, {person.focus.toLowerCase()}
          </motion.p>

          <motion.p className="hero-intro" {...rise(0.24)}>
            {intro}
          </motion.p>

          <motion.div className="hero-actions" {...rise(0.32)}>
            <a className="btn btn-primary" href={person.resume} download>
              <FaDownload aria-hidden="true" />
              Download résumé
            </a>
            <a className="btn btn-ghost" href="#contact">
              Contact me
            </a>
          </motion.div>

          <motion.ul className="hero-links" {...rise(0.4)}>
            <li>
              <a href={person.github} target="_blank" rel="noreferrer">
                <FaGithub aria-hidden="true" /> GitHub
              </a>
            </li>
            <li>
              <a href={person.linkedin} target="_blank" rel="noreferrer">
                <FaLinkedin aria-hidden="true" /> LinkedIn
              </a>
            </li>
            <li>
              <a href={`mailto:${person.email}`}>
                <FaEnvelope aria-hidden="true" /> {person.email}
              </a>
            </li>
          </motion.ul>
        </div>

        <motion.div className="hero-console" {...rise(0.2)}>
          <Terminal />
        </motion.div>
      </div>
    </section>
  )
}
