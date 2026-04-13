import { motion } from 'framer-motion'
import { about } from '../data/portfolio'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">

      {/* Section header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={fadeUp}
        className="section-header"
      >
        <span className="text-g-muted font-mono text-sm">01.</span>
        <h2 className="text-2xl font-bold text-g-bright font-mono">about_me</h2>
      </motion.div>

      <div className="grid md:grid-cols-5 gap-12">

        {/* Bio text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          variants={{ show: { transition: { staggerChildren: 0.15 } } }}
          className="md:col-span-3"
        >
          <div className="terminal-window mb-6">
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title">cat about.txt</span>
            </div>
            <div className="p-6 space-y-4">
              {about.bio.map((para, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-g-text text-sm leading-relaxed"
                >
                  {i === 0 && <span className="text-g-bright">// </span>}
                  {para}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Fun stat */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 px-4 py-3 bg-g-card border border-g-border rounded-md"
          >
            <span className="text-2xl animate-float">🌱</span>
            <p className="text-g-muted text-xs">
              <span className="text-g-bright font-semibold">Fun fact: </span>
              I approach gardening the same way I approach code — patient iteration, good structure, and trusting the process.
            </p>
          </motion.div>
        </motion.div>

        {/* Fact grid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          className="md:col-span-2 grid grid-cols-2 gap-3 content-start"
        >
          {about.facts.map((fact) => (
            <motion.div
              key={fact.label}
              variants={fadeUp}
              whileHover={{ scale: 1.03, borderColor: '#00ff41' }}
              className="bg-g-card border border-g-border rounded-lg p-4 transition-colors duration-200 cursor-default"
            >
              <div className="text-2xl mb-2">{fact.icon}</div>
              <div className="text-g-muted text-xs uppercase tracking-widest mb-1 font-mono">
                {fact.label}
              </div>
              <div className="text-g-bright text-xs font-semibold leading-snug">
                {fact.value}
              </div>
            </motion.div>
          ))}

          {/* Status badge */}
          <motion.div
            variants={fadeUp}
            className="col-span-2 flex items-center gap-3 bg-g-glow border border-g-border rounded-lg p-4"
          >
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-g-bright opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-g-bright" />
            </span>
            <span className="text-g-bright text-xs font-bold font-mono">
              Available for junior developer roles — GTA
            </span>
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
