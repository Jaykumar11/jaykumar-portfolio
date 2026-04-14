# 💻 Jaykumar Trivedi — Developer Portfolio

> A dark, terminal-themed personal portfolio built with **React 18 + Vite + Tailwind CSS + Framer Motion**

[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.3-646cff?style=flat-square&logo=vite)](https://vitejs.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-ff0055?style=flat-square)](https://www.framer.com/motion)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

---

## ✨ Features

- 🖥️ **Terminal / hacker aesthetic** — matrix rain background, scanline overlay, glitch animations
- ⌨️ **Typewriter effect** — custom React hook cycling through roles
- 🎬 **Framer Motion animations** — scroll reveals, staggered entrance, hover effects
- 📊 **Animated skill bars** — IntersectionObserver-driven fill animations
- 📋 **5 full sections** — Hero, About, Skills, Projects, Experience, Contact
- 📱 **Fully responsive** — mobile menu, fluid grid layouts
- 📨 **Working contact form** — integrated with Formspree (no backend needed)
- ⚡ **Vite build** — lightning-fast dev server and optimized production build

---

## 🚀 Quick Start

```bash
# 1. Clone the repo
git clone https://github.com/YOUR_USERNAME/jaykumar-portfolio.git
cd jaykumar-portfolio

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev
# → opens at http://localhost:5173

# 4. Build for production
npm run build
```

---

## 🛠️ Tech Stack

| Layer      | Technology                         |
|------------|------------------------------------|
| Framework  | React 18 with Vite 5               |
| Styling    | Tailwind CSS 3 + Custom CSS        |
| Animation  | Framer Motion 11                   |
| Icons      | React Icons (Feather set)          |
| Font       | JetBrains Mono (Google Fonts)      |
| Forms      | Formspree (free tier)              |
| Deploy     | Vercel / GitHub Pages              |

---

## 📁 Project Structure

```
jaykumar-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── MatrixRain.jsx     # Canvas matrix rain background
│   │   ├── Navbar.jsx         # Sticky nav with mobile menu
│   │   ├── Hero.jsx           # Hero with glitch + typewriter
│   │   ├── About.jsx          # About me + fact grid
│   │   ├── Skills.jsx         # Skill bars with animation
│   │   ├── Projects.jsx       # Project cards
│   │   ├── Experience.jsx     # Timeline + education
│   │   ├── Contact.jsx        # Contact form (Formspree)
│   │   └── Footer.jsx
│   ├── data/
│   │   └── portfolio.js       # ← ALL your content lives here
│   ├── hooks/
│   │   └── useTypingEffect.js # Custom typewriter hook
│   ├── App.jsx                # Root — boot loader + layout
│   ├── main.jsx
│   └── index.css              # Terminal theme + animations
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

---

## ✏️ Customization

**Everything you need to change is in one file:**

```js
// src/data/portfolio.js

export const personal = {
  name:     'Jaykumar Trivedi',
  email:    'your-email@gmail.com',     // ← change this
  github:   'https://github.com/YOU',   // ← change this
  linkedin: 'https://linkedin.com/in/YOU', // ← change this
  resumeUrl: '/resume.pdf',             // ← add your resume PDF to /public
}
```

To add/edit projects, skills, or experience — just edit the arrays in `portfolio.js`. No component code changes needed.

---

## 📨 Setting Up the Contact Form

1. Go to [formspree.io](https://formspree.io) and sign up (free)
2. Click **New Form** → copy your Form ID (looks like `xpwdogzq`)
3. Open `src/components/Contact.jsx`
4. Replace `YOUR_FORM_ID` with your actual ID:

```js
const FORMSPREE_URL = 'https://formspree.io/f/xpwdogzq'
```

---

## 🌐 Deploying to Vercel (Free)

```bash
# Option 1 — Vercel CLI
npm i -g vercel
vercel

# Option 2 — GitHub Integration (recommended)
# 1. Push this repo to GitHub
# 2. Go to vercel.com → Import Project
# 3. Select your repo → Deploy
# Done! Auto-deploys on every git push.
```

---

## 🌐 Deploying to GitHub Pages

```bash
# 1. Add homepage to package.json:
#    "homepage": "https://YOUR_USERNAME.github.io/jaykumar-portfolio"

# 2. Install gh-pages
npm install --save-dev gh-pages

# 3. Add to package.json scripts:
#    "predeploy": "npm run build",
#    "deploy": "gh-pages -d dist"

# 4. Deploy
npm run deploy
```

---

## 📸 Sections

| # | Section    | Description                                      |
|---|------------|--------------------------------------------------|
| 1 | Hero       | Full screen, matrix rain, glitch name, typewriter |
| 2 | About      | Bio, facts grid, availability badge              |
| 3 | Skills     | Animated bars by category + tech tags            |
| 4 | Projects   | Featured + other project cards                   |
| 5 | Experience | Timeline + education + JSON facts panel          |
| 6 | Contact    | Terminal form + social links + status terminal   |

---

## 📄 License

MIT — feel free to use this as a template. A credit or star ⭐ is appreciated!

---

*Built with 💚 and 🌱 by Jaykumar Trivedi · Mississauga, Toronto*
