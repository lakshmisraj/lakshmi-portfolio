import { motion, useReducedMotion } from 'motion/react'
import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaLocationDot } from 'react-icons/fa6'
import { intro, person } from '../data'
import Terminal from './Terminal'

const ease = [0.16, 1, 0.3, 1]

export default function Hero() {
  const reduced = useReducedMotion()
  const rise = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, ease, delay },
        }

  // the hero's light follows the pointer
  const follow = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <section className="hero" id="top" onPointerMove={follow}>
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-grid-lines" />
        <div className="hero-glow hero-glow-a" />
        <div className="hero-glow hero-glow-b" />
        <div className="hero-pointer" />
      </div>

      <div className="container hero-layout">
        <div className="hero-copy">
          <motion.p className="status" {...rise(0.05)}>
            <span className="pulse" aria-hidden="true" />
            {person.status}
          </motion.p>

          <h1 className="hero-name">
            {person.name.split(' ').map((w, i) => (
              <span className="hero-word" key={w}>
                <motion.span
                  initial={reduced ? false : { y: '110%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease, delay: 0.15 + i * 0.09 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p className="hero-role" {...rise(0.45)}>
            {person.title} for {person.focus.toLowerCase()}
          </motion.p>

          <motion.p className="hero-intro" {...rise(0.55)}>
            {intro}
          </motion.p>

          <motion.div className="hero-actions" {...rise(0.65)}>
            <a className="btn btn-primary btn-glow" href={person.resume} download>
              <FaDownload aria-hidden="true" />
              Download résumé
            </a>
            <a className="btn btn-ghost" href="#projects">
              See projects
            </a>
          </motion.div>

          <motion.ul className="hero-links" {...rise(0.75)}>
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
                <FaEnvelope aria-hidden="true" /> Email
              </a>
            </li>
            <li className="hero-city">
              <FaLocationDot aria-hidden="true" /> {person.city}
            </li>
          </motion.ul>
        </div>

        <motion.div
          className="hero-console"
          initial={reduced ? false : { opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease, delay: 0.3 }}
        >
          <Terminal />
        </motion.div>
      </div>
    </section>
  )
}
