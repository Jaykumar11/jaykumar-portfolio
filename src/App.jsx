import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Skills     from './components/Skills'
import Projects   from './components/Projects'
import Experience from './components/Experience'
import Contact    from './components/Contact'
import Footer     from './components/Footer'

/* ── Loading screen ─────────────────────────────── */
function Loader({ onDone }) {
  const [lines, setLines] = useState([])
  const boot = [
    '> initializing portfolio.exe...',
    '> loading modules: React, Vite, Tailwind',
    '> mounting components...',
    '> compiling Jaykumar Trivedi...',
    '> status: READY ✓',
  ]

  useEffect(() => {
    let i = 0
    const id = setInterval(() => {
      setLines(prev => [...prev, boot[i]])
      i++
      if (i >= boot.length) {
        clearInterval(id)
        setTimeout(onDone, 600)
      }
    }, 380)
    return () => clearInterval(id)
  }, [])

  return (
    <motion.div
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] bg-g-bg flex items-center justify-center p-8"
    >
      <div className="terminal-window w-full max-w-lg">
        <div className="terminal-titlebar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="title">boot.sh — jaykumar@portfolio</span>
        </div>
        <div className="p-8 min-h-[220px]">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25 }}
              className={`font-mono text-sm mb-2 ${
                line.includes('READY')
                  ? 'text-g-bright font-bold neon-text'
                  : 'text-g-muted'
              }`}
            >
              {line}
            </motion.p>
          ))}
          {lines.length < boot.length && (
            <span className="cursor" />
          )}
        </div>
      </div>
    </motion.div>
  )
}

/* ── Scroll-to-top button ───────────────────────── */
function ScrollTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-g-card border border-g-border rounded-md flex items-center justify-center text-g-bright hover:border-g-bright hover:shadow-neon transition-all duration-200 font-mono text-lg"
          aria-label="Scroll to top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ── Root App ───────────────────────────────────── */
export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" onDone={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Navbar />

          <main>
            <Hero />

            {/* Divider */}
            <div className="w-px h-16 bg-gradient-to-b from-g-border to-transparent mx-auto" />

            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>

          <Footer />
          <ScrollTop />
        </motion.div>
      )}
    </>
  )
}
