import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { skillCategories } from '../data/portfolio'

function SkillBar({ name, level, delay = 0, animate }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-g-text text-xs font-mono">{name}</span>
        <span className="text-g-muted text-xs font-mono">{level}%</span>
      </div>
      <div className="skill-bar-track">
        <div
          className="skill-bar-fill"
          style={{
            width: `${level}%`,
            transform: animate ? 'scaleX(1)' : 'scaleX(0)',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimate(true) },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto" ref={ref}>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="text-g-muted font-mono text-sm">02.</span>
        <h2 className="text-2xl font-bold text-g-bright font-mono">tech_stack</h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.12, duration: 0.5 }}
            className="terminal-window"
          >
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title">{cat.icon} {cat.title.toLowerCase()}</span>
            </div>
            <div className="p-5">
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={ci * 120 + si * 80}
                  animate={animate}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tech badges */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12"
      >
        <p className="text-g-muted text-xs font-mono mb-4">
          <span className="text-g-bright">$ </span>ls ./tools
        </p>
        <div className="flex flex-wrap gap-2">
          {[
            'React', 'Node.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind',
            'Express', 'PostgreSQL', 'Git', 'GitHub', 'REST API', 'Figma',
            'VS Code', 'Linux', 'Agile', 'GitHub Copilot',
          ].map(tech => (
            <motion.span
              key={tech}
              whileHover={{ scale: 1.08, borderColor: '#00ff41', color: '#00ff41' }}
              className="tag transition-all duration-200 cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
