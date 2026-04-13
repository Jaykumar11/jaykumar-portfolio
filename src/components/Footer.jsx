import { FiGithub, FiLinkedin, FiHeart } from 'react-icons/fi'
import { personal } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-g-border py-10 px-6 mt-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

        <div className="font-mono text-g-muted text-xs text-center sm:text-left">
          <span className="text-g-bright">~/</span>jaykumar-portfolio{' '}
          <span className="text-g-dark">· built with</span>{' '}
          <span className="text-g-bright">React</span>
          <span className="text-g-dark"> + </span>
          <span className="text-g-bright">Vite</span>
          <span className="text-g-dark"> + </span>
          <span className="text-g-bright">Tailwind</span>
          <br className="sm:hidden" />
          <span className="text-g-dark"> · © {year} Jaykumar Trivedi</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-g-muted hover:text-g-bright transition-colors"
            aria-label="GitHub"
          >
            <FiGithub size={18} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-g-muted hover:text-g-bright transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin size={18} />
          </a>
          <div className="flex items-center gap-1.5 text-g-muted text-xs font-mono">
            made with <FiHeart size={12} className="text-g-red" /> & 🌱
          </div>
        </div>

      </div>
    </footer>
  )
}
