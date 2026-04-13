import { motion } from 'framer-motion'
import { timeline } from '../data/portfolio'

const typeColor = {
  education: { dot: '#00ff41', label: 'education', labelColor: 'text-g-bright' },
  goal:      { dot: '#ffd700', label: 'target',    labelColor: 'text-g-amber' },
  work:      { dot: '#00ffff', label: 'experience', labelColor: 'text-g-cyan' },
}

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="text-g-muted font-mono text-sm">04.</span>
        <h2 className="text-2xl font-bold text-g-bright font-mono">experience</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-g-muted text-xs font-mono mb-6">
            <span className="text-g-bright">$ </span>git log --oneline --author="Jay"
          </p>

          <div className="space-y-8">
            {timeline.map((item, i) => {
              const c = typeColor[item.type] ?? typeColor.education
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="timeline-item pb-4"
                  style={{ '--dot-color': c.dot }}
                >
                  <style>{`.timeline-item::before { background: var(--dot-color, #00ff41); box-shadow: 0 0 6px var(--dot-color, #00ff41); }`}</style>

                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-mono font-bold ${c.labelColor}`}>
                      [{c.label}]
                    </span>
                    <span className="text-g-muted text-xs font-mono">{item.year}</span>
                  </div>

                  <h3 className="text-g-bright font-bold text-base mb-0.5">
                    {item.title}
                  </h3>
                  <p className="text-g-muted text-xs mb-2 font-mono">
                    {item.org} · {item.location}
                  </p>
                  <p className="text-g-text text-sm leading-relaxed mb-3">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map(tag => (
                      <span key={tag} className="tag text-xs">{tag}</span>
                    ))}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Stats / quick-info panel */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5"
        >
          {/* Education card */}
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title">📋 quick-facts.json</span>
            </div>
            <div className="p-5 font-mono text-sm">
              <pre className="text-g-muted leading-relaxed overflow-x-auto text-xs">
{`{
  "degree":   "BCA",
  "diploma":  "Full Stack Web Dev",
  "location": "Scarborough, Toronto",
  "status":   "seeking_work",
  "noc_target": ["21232", "21234"],
  "pr_path":  "Express Entry STEM",
  "hobbies":  [
    "coding",
    "gardening",
    "problem_solving"
  ]
}`}
              </pre>
            </div>
          </div>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { val: '10+',  label: 'weeks to job ready',  icon: '⏱️' },
              { val: 'BCA',  label: 'CS foundation',       icon: '🎓' },
              { val: '5+',   label: 'projects in progress', icon: '🛠️' },
              { val: '1 yr', label: 'to PR eligibility',   icon: '🍁' },
            ].map(m => (
              <motion.div
                key={m.label}
                whileHover={{ scale: 1.04 }}
                className="bg-g-card border border-g-border rounded-lg p-4 text-center cursor-default"
              >
                <div className="text-2xl mb-1">{m.icon}</div>
                <div className="text-g-bright font-bold text-xl font-mono">{m.val}</div>
                <div className="text-g-muted text-xs mt-1">{m.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Resume CTA */}
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title">resume.sh</span>
            </div>
            <div className="p-5">
              <p className="text-g-muted text-xs mb-4">
                <span className="text-g-bright">$ </span>
                cat resume.md | grep "download"
              </p>
              <a
                href="#"
                className="btn-primary w-full justify-center text-sm"
              >
                download resume.pdf
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
