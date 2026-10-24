import { FaDownload, FaEnvelope, FaGithub, FaLinkedin, FaLocationDot, FaPhone } from 'react-icons/fa6'
import { person } from '../data'
import ContactForm from '../ContactForm'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section className="section contact" aria-labelledby="contact-h" id="contact">
      <div className="container contact-layout">
        <Reveal className="contact-copy">
          <h2 id="contact-h">Get in touch</h2>
          <p>
            I'm looking for full-time backend, platform or cloud engineering roles starting in May
            2026. The quickest way to reach me is email.
          </p>
          <ul className="contact-list">
            <li>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${person.email}`}>{person.email}</a>
            </li>
            <li>
              <FaPhone aria-hidden="true" />
              <a href={person.phoneHref}>{person.phone}</a>
            </li>
            <li>
              <FaLocationDot aria-hidden="true" />
              {person.city}
            </li>
            <li>
              <FaLinkedin aria-hidden="true" />
              <a href={person.linkedin} target="_blank" rel="noreferrer">
                linkedin.com/in/lakshmi-shibu-raj
              </a>
            </li>
            <li>
              <FaGithub aria-hidden="true" />
              <a href={person.github} target="_blank" rel="noreferrer">
                github.com/lakshmisraj
              </a>
            </li>
          </ul>
          <a className="btn btn-ghost" href={person.resume} download>
            <FaDownload aria-hidden="true" />
            Download résumé
          </a>
        </Reveal>
        <Reveal className="contact-card" delay={0.08}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
