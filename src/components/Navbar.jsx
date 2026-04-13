import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { personal } from '../data/portfolio'

const navLinks = [
  { label: 'about',      href: '#about' },
  { label: 'skills',     href: '#skills' },
  { label: 'projects',   href: '#projects' },
  { label: 'experience', href: '#experience' },
  { label: 'contact',    href: '#contact' },
]

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href) => {
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-g-bg/95 backdrop-blur-md border-b border-g-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-mono text-base font-bold group"
        >
          <span className="text-g-muted">~/</span>
          <span className="text-g-bright group-hover:neon-text transition-all duration-300">
            {personal.alias}
          </span>
          <span className="text-g-muted"> $</span>
          <span className="cursor ml-1" />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.button
              key={link.label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
              onClick={() => handleNav(link.href)}
              className="px-4 py-2 text-sm text-g-muted hover:text-g-bright transition-colors duration-200 rounded hover:bg-g-glow relative group"
            >
              <span className="text-g-dark group-hover:text-g-dim transition-colors">./</span>
              {link.label}
            </motion.button>
          ))}
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
            href={personal.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 btn-primary text-sm py-2 px-5"
          >
            resume.pdf
          </motion.a>
        </nav>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 group"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-g-bright transition-all duration-300 ${
                menuOpen
                  ? i === 0 ? 'rotate-45 translate-y-2' :
                    i === 1 ? 'opacity-0' : '-rotate-45 -translate-y-2'
                  : ''
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-g-surface border-b border-g-border"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map(link => (
                <button
                  key={link.label}
                  onClick={() => handleNav(link.href)}
                  className="text-left px-3 py-2 text-g-muted hover:text-g-bright hover:bg-g-glow rounded text-sm transition-colors"
                >
                  <span className="text-g-dark">$ cd </span>{link.label}
                </button>
              ))}
              <a
                href={personal.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 btn-primary text-sm justify-center"
              >
                resume.pdf
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
