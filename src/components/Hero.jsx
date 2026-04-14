import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import MatrixRain from './MatrixRain'
import useTypingEffect from '../hooks/useTypingEffect'
import { personal } from '../data/portfolio'

const roles = [
  'Full Stack Developer',
  'React Enthusiast',
  'Problem Solver',
  'Garden Coder 🌱',
  'Open to Work 🍁',
]

export default function Hero() {
  const typedText = useTypingEffect(roles, 75, 2200)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Matrix rain BG */}
      <MatrixRain opacity={0.14} />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 70% at 50% 50%, transparent 0%, #020b02 80%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 py-28">

        {/* Terminal window */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="terminal-window"
        >
          {/* Title bar */}
          <div className="terminal-titlebar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="title">jaykumar@portfolio:~$ bash intro.sh</span>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12">

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-g-muted text-sm mb-3 font-mono"
            >
              <span className="text-g-bright font-bold">→</span>  hello, world — I'm
            </motion.p>

            {/* Glitch Name */}
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="glitch text-4xl md:text-6xl font-black tracking-tight mb-4 leading-none"
              data-text="Jaykumar Trivedi"
            >
              Jaykumar Trivedi
            </motion.h1>

            {/* Typewriter role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-2 text-lg md:text-2xl text-g-cyan font-mono mb-8 h-9"
            >
              <span className="text-g-muted text-base">$</span>
              <span>{typedText}</span>
              <span className="cursor" />
            </motion.div>

            {/* Bio line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-g-muted text-sm md:text-base max-w-2xl mb-10 leading-relaxed"
            >
              <span className="text-g-dim">// </span>
              Building clean, dynamic web apps from Mississauga, Ontario.
              BCA + Full Stack Diploma. Currently{' '}
              <span className="text-g-bright">open to work</span> in the GTA.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <span>./view-projects</span>
              </button>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-ghost"
              >
                <span>./contact-me</span>
              </button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="flex items-center gap-6"
            >
              <span className="text-g-muted text-xs">find me:</span>
              {[
                { icon: <FiGithub size={20} />, href: personal.github,   label: 'GitHub' },
                { icon: <FiLinkedin size={20} />, href: personal.linkedin, label: 'LinkedIn' },
              ].map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-g-muted hover:text-g-bright transition-colors duration-200 hover:drop-shadow-[0_0_6px_#00ff41]"
                >
                  {icon}
                </a>
              ))}
              <span className="text-g-dark text-xs ml-auto">
                {personal.location}
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-g-dark"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
          >
            <FiArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
