import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { FaBars, FaDownload, FaXmark } from 'react-icons/fa6'
import { person } from '../data'

const links = [
  ['About', 'about'],
  ['Experience', 'experience'],
  ['Projects', 'projects'],
  ['Skills', 'skills'],
  ['Contact', 'contact'],
]

// Hides while scrolling down, returns on the way up, and marks the section in view.
export default function Nav() {
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useMotionValueEvent(scrollY, 'change', (y) => {
    const prev = scrollY.getPrevious() ?? 0
    setHidden(y > prev && y > 280 && !open)
    setSolid(y > 24)
  })

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    links.forEach(([, id]) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <motion.header
      className={`nav${solid ? ' is-solid' : ''}`}
      animate={{ y: hidden ? -110 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="nav-inner">
        <a href="#top" className="nav-mark" aria-label={`${person.name}, back to top`}>
          <span aria-hidden="true">LSR</span>
        </a>
        <nav className="nav-links" aria-label="Main">
          {links.map(([label, id]) => (
            <a key={id} href={`#${id}`} className={active === id ? 'is-active' : ''}>
              {label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary btn-sm nav-resume" href={person.resume} download>
          <FaDownload aria-hidden="true" />
          Résumé
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <FaXmark /> : <FaBars />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="nav-mobile"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <a className="btn btn-primary" href={person.resume} download>
              <FaDownload aria-hidden="true" />
              Download résumé
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
