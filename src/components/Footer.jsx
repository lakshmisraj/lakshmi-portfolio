import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa6'
import { person } from '../data'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>© 2026 {person.name}</p>
        <ul className="footer-links">
          <li>
            <a href={person.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={person.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={`mailto:${person.email}`} aria-label="Email">
              <FaEnvelope />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
