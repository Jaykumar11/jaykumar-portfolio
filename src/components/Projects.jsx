import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { projects } from '../data/portfolio'

const statusColor = {
  Live:        'text-g-bright border-g-bright',
  'In Progress': 'text-g-amber border-g-amber',
  Complete:    'text-g-cyan border-g-cyan',
}

export default function Projects() {
  const featured = projects.filter(p => p.featured)
  const rest      = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="text-g-muted font-mono text-sm">03.</span>
        <h2 className="text-2xl font-bold text-g-bright font-mono">projects</h2>
      </motion.div>

      {/* Featured projects */}
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {featured.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="project-card group"
          >
            {/* Terminal header */}
            <div className="terminal-titlebar border-b border-g-border">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title flex-1">{proj.icon} {proj.title.toLowerCase()}</span>
              <span
                className={`text-xs font-mono border px-2 py-0.5 rounded-full ml-auto ${statusColor[proj.status] ?? ''}`}
              >
                {proj.status}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-g-bright font-bold text-lg mb-3 group-hover:neon-text transition-all">
                {proj.title}
              </h3>
              <p className="text-g-muted text-sm leading-relaxed mb-5">
                {proj.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 pt-4 border-t border-g-border">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-g-muted hover:text-g-bright text-sm transition-colors"
                >
                  <FiGithub size={16} />
                  <span className="font-mono">source</span>
                </a>
                <a
                  href={proj.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-g-muted hover:text-g-cyan text-sm transition-colors"
                >
                  <FiExternalLink size={16} />
                  <span className="font-mono">live demo</span>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects - smaller grid */}
      <p className="text-g-muted text-xs font-mono mb-4">
        <span className="text-g-bright">$ </span>ls ./other-projects
      </p>
      <div className="grid sm:grid-cols-2 gap-4">
        {rest.map((proj, i) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, borderColor: '#00c832' }}
            className="project-card p-5 cursor-default"
          >
            <div className="flex items-start justify-between mb-3">
              <span className="text-3xl">{proj.icon}</span>
              <div className="flex gap-3">
                <a href={proj.github} target="_blank" rel="noopener noreferrer"
                  className="text-g-muted hover:text-g-bright transition-colors">
                  <FiGithub size={16} />
                </a>
                <a href={proj.live} target="_blank" rel="noopener noreferrer"
                  className="text-g-muted hover:text-g-cyan transition-colors">
                  <FiExternalLink size={16} />
                </a>
              </div>
            </div>
            <h3 className="text-g-bright font-bold mb-2">{proj.title}</h3>
            <p className="text-g-muted text-xs leading-relaxed mb-4 line-clamp-3">
              {proj.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {proj.tags.slice(0, 3).map(tag => (
                <span key={tag} className="tag text-xs">{tag}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
