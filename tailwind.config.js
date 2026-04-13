/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        g: {
          bg:      '#020b02',
          surface: '#061006',
          card:    '#0a180a',
          border:  '#163016',
          bright:  '#00ff41',
          dim:     '#00c832',
          dark:    '#004d10',
          glow:    'rgba(0,255,65,0.12)',
          text:    '#c0ffc0',
          muted:   '#4a7a4a',
          cyan:    '#00ffff',
          amber:   '#ffd700',
          red:     '#ff4444',
        },
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', '"Cascadia Code"', 'monospace'],
      },
      boxShadow: {
        neon:   '0 0 5px #00ff41, 0 0 20px rgba(0,255,65,0.3)',
        'neon-lg': '0 0 10px #00ff41, 0 0 40px rgba(0,255,65,0.25), 0 0 80px rgba(0,255,65,0.1)',
        card:   '0 0 0 1px #163016, 0 4px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        blink:      'blink 1s step-end infinite',
        glitch:     'glitch 4s infinite',
        'fade-up':  'fadeUp 0.6s ease both',
        'scan':     'scan 6s linear infinite',
        'pulse-g':  'pulseG 2s ease-in-out infinite',
        float:      'float 6s ease-in-out infinite',
      },
      keyframes: {
        blink:   { '0%,100%': { opacity: 1 }, '50%': { opacity: 0 } },
        glitch: {
          '0%,89%,100%': { textShadow: '2px 0 #00ffff, -2px 0 #ff4444' },
          '90%': { textShadow: '-3px 0 #00ffff, 3px 0 #ff4444', transform: 'translateX(-2px)' },
          '92%': { textShadow: '3px 0 #ff4444, -3px 0 #00ffff', transform: 'translateX(2px)' },
          '94%': { textShadow: '-2px 0 #00ffff, 2px 0 #ff4444', transform: 'translateX(0)' },
        },
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(24px)' },
          to:   { opacity: 1, transform: 'translateY(0)' },
        },
        scan: {
          from: { backgroundPosition: '0 0' },
          to:   { backgroundPosition: '0 100vh' },
        },
        pulseG: {
          '0%,100%': { boxShadow: '0 0 4px #00ff41, 0 0 10px rgba(0,255,65,0.3)' },
          '50%':     { boxShadow: '0 0 12px #00ff41, 0 0 30px rgba(0,255,65,0.5)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%':     { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
