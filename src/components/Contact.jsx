import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend } from 'react-icons/fi'
import { personal } from '../data/portfolio'

/* ─────────────────────────────────────────────────
   NOTE: This form uses Formspree (https://formspree.io)
   1. Go to formspree.io and create a FREE account
   2. Create a new form → copy your Form ID
   3. Replace "YOUR_FORM_ID" below with your actual ID
   Example: "https://formspree.io/f/xpwdogzq"
──────────────────────────────────────────────────── */
const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="section-header"
      >
        <span className="text-g-muted font-mono text-sm">05.</span>
        <h2 className="text-2xl font-bold text-g-bright font-mono">contact</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left – info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-g-bright mb-4 font-mono">
            Let's Connect
          </h3>
          <p className="text-g-muted text-sm leading-relaxed mb-8">
            I'm actively looking for junior developer roles in the GTA. Whether you have a job opportunity, a project idea, or just want to say hello — my inbox is open.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { icon: <FiMail size={16} />,    label: 'Email',    val: personal.email,    href: `mailto:${personal.email}` },
              { icon: <FiGithub size={16} />,  label: 'GitHub',   val: '@jaykumar',       href: personal.github },
              { icon: <FiLinkedin size={16} />,label: 'LinkedIn', val: 'jaykumar-trivedi',href: personal.linkedin },
              { icon: <FiMapPin size={16} />,  label: 'Location', val: personal.location, href: null },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-4">
                <div className="w-8 h-8 rounded bg-g-glow border border-g-border flex items-center justify-center text-g-bright flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="text-g-muted text-xs font-mono mb-0.5">{item.label}</div>
                  {item.href
                    ? <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="text-g-text text-sm hover:text-g-bright transition-colors font-mono">
                        {item.val}
                      </a>
                    : <span className="text-g-text text-sm font-mono">{item.val}</span>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Terminal message */}
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title">status.sh</span>
            </div>
            <div className="p-4 text-xs font-mono space-y-1">
              <p><span className="text-g-bright">$</span> <span className="text-g-muted">echo $AVAILABILITY</span></p>
              <p className="text-g-bright pl-4">OPEN_TO_WORK=true</p>
              <p><span className="text-g-bright">$</span> <span className="text-g-muted">echo $LOCATION_PREF</span></p>
              <p className="text-g-bright pl-4">GTA / Hybrid / Remote</p>
              <p><span className="text-g-bright">$</span> <span className="text-g-muted">echo $RESPONSE_TIME</span></p>
              <p className="text-g-bright pl-4">within_24_hours</p>
            </div>
          </div>
        </motion.div>

        {/* Right – form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <div className="terminal-window">
            <div className="terminal-titlebar">
              <span className="dot dot-red" />
              <span className="dot dot-yellow" />
              <span className="dot dot-green" />
              <span className="title">send_message.sh</span>
            </div>
            <form onSubmit={handleSubmit} className="p-6 space-y-5">

              <div>
                <label className="block text-g-muted text-xs font-mono mb-2">
                  <span className="text-g-bright">$</span> your_name
                </label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="terminal-input"
                />
              </div>

              <div>
                <label className="block text-g-muted text-xs font-mono mb-2">
                  <span className="text-g-bright">$</span> your_email
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  placeholder="john@company.com"
                  className="terminal-input"
                />
              </div>

              <div>
                <label className="block text-g-muted text-xs font-mono mb-2">
                  <span className="text-g-bright">$</span> message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hello Jay, I came across your portfolio..."
                  className="terminal-input resize-none"
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <p className="text-g-bright text-sm font-mono">
                  ✓ Message sent! I'll reply within 24 hours.
                </p>
              )}
              {status === 'error' && (
                <p className="text-g-red text-sm font-mono">
                  ✗ Something went wrong. Email me directly instead.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center"
              >
                <FiSend size={15} />
                <span>
                  {status === 'sending' ? 'sending...' : '$ send_message()'}
                </span>
              </button>

              <p className="text-g-dark text-xs text-center font-mono">
                // powered by Formspree — no backend needed
              </p>
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
