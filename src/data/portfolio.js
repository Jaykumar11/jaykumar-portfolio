// ── Personal Info ────────────────────────────────────────────────────
export const personal = {
  name: 'Jaykumar Trivedi',
  alias: 'jay',
  tagline: 'Full Stack Developer & Garden Enthusiast',
  location: 'Scarborough, Toronto, ON 🍁',
  email: 'jaykumar.trivedi@email.com',      // ← Update this
  github: 'https://github.com/jaykumar',    // ← Update this
  linkedin: 'https://linkedin.com/in/jaykumar-trivedi', // ← Update this
  resumeUrl: '#',                            // ← Add your resume PDF link
  availableForWork: true,
}

// ── About ────────────────────────────────────────────────────────────
export const about = {
  bio: [
    "I'm a Full Stack Developer based in Scarborough, Toronto with a BCA degree and a Full Stack Web Development Diploma — passionate about building clean, dynamic, and functional web applications.",
    "When I'm not pushing commits, you'll find me in my garden, nurturing plants with the same patience I bring to debugging. I believe the best code, like the best garden, grows with care, structure, and consistency.",
    "Currently seeking entry-level developer roles in the GTA where I can contribute, learn fast, and grow into a senior developer.",
  ],
  facts: [
    { icon: '🎓', label: 'Education',  value: 'BCA + Full Stack Diploma' },
    { icon: '📍', label: 'Location',   value: 'Scarborough, Toronto' },
    { icon: '🌱', label: 'Interests',  value: 'Web Dev & Gardening' },
    { icon: '🚀', label: 'Status',     value: 'Open to Work' },
    { icon: '🍁', label: 'PR Goal',    value: 'Express Entry STEM' },
    { icon: '💡', label: 'Learning',   value: 'TypeScript & AWS' },
  ],
}

// ── Skills ───────────────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Frontend',
    icon: '🖥️',
    skills: [
      { name: 'React.js',     level: 78 },
      { name: 'JavaScript',   level: 75 },
      { name: 'HTML5 / CSS3', level: 85 },
      { name: 'Tailwind CSS', level: 72 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js',      level: 65 },
      { name: 'Express.js',   level: 62 },
      { name: 'REST APIs',    level: 70 },
      { name: 'PostgreSQL',   level: 58 },
    ],
  },
  {
    title: 'Tools & Dev',
    icon: '🛠️',
    skills: [
      { name: 'Git & GitHub', level: 80 },
      { name: 'VS Code',      level: 90 },
      { name: 'Figma',        level: 55 },
      { name: 'Linux / CLI',  level: 60 },
    ],
  },
  {
    title: 'Currently Learning',
    icon: '📚',
    skills: [
      { name: 'TypeScript',   level: 40 },
      { name: 'Docker',       level: 35 },
      { name: 'AWS Basics',   level: 30 },
      { name: 'Next.js',      level: 45 },
    ],
  },
]

// ── Projects ─────────────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'DevPortfolio',
    description:
      'This very portfolio — built from scratch with React, Vite, Tailwind CSS and Framer Motion. Features a matrix rain background, glitch animations, terminal UI aesthetic, and full responsiveness.',
    tags: ['React', 'Vite', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/jaykumar/portfolio',  // ← Update
    live: '#',
    status: 'Live',
    featured: true,
    icon: '💻',
  },
  {
    id: 2,
    title: 'TaskMaster Pro',
    description:
      'A full-stack task management application with user authentication, CRUD operations, and real-time updates. Built with React frontend, Node.js + Express backend, and PostgreSQL database.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL', 'JWT'],
    github: '#',
    live: '#',
    status: 'In Progress',
    featured: true,
    icon: '📋',
  },
  {
    id: 3,
    title: 'WeatherNow Dashboard',
    description:
      'A responsive weather dashboard that fetches real-time weather data for any city using the OpenWeatherMap API. Features 5-day forecasts, charts, and location detection.',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    github: '#',
    live: '#',
    status: 'Complete',
    featured: false,
    icon: '🌤️',
  },
  {
    id: 4,
    title: 'GardenLog',
    description:
      'A personal plant care tracker built as a hobby project — log your plants, set watering reminders, and track growth milestones. Combines two passions: coding and gardening.',
    tags: ['React', 'LocalStorage', 'CSS3', 'PWA'],
    github: '#',
    live: '#',
    status: 'Complete',
    featured: false,
    icon: '🌱',
  },
]

// ── Experience / Education ────────────────────────────────────────────
export const timeline = [
  {
    year: '2024',
    type: 'education',
    title: 'Full Stack Web Development Diploma',
    org: 'Institution Name',             // ← Update with your institution
    location: 'Toronto, ON',
    desc: 'Comprehensive training in HTML, CSS, JavaScript, React, Node.js, Express, SQL databases, Git, and modern full-stack development practices.',
    tags: ['React', 'Node.js', 'SQL', 'Git', 'Full Stack'],
  },
  {
    year: '2022',
    type: 'education',
    title: 'BCA — Bachelor of Computer Applications',
    org: 'University Name',              // ← Update with your university
    location: 'India',
    desc: 'Three-year degree covering core computer science fundamentals — data structures, algorithms, database management, software engineering, and programming in C++, Java, and Python.',
    tags: ['CS Fundamentals', 'Java', 'Python', 'DBMS', 'Algorithms'],
  },
  {
    year: '2026',
    type: 'goal',
    title: 'Target: Junior Full Stack Developer',
    org: 'GTA Tech Companies',
    location: 'Scarborough / Toronto',
    desc: 'Actively seeking entry-level developer roles in the Greater Toronto Area. Target NOC 21232 / 21234 for Express Entry STEM category PR pathway.',
    tags: ['Open to Work', 'Express Entry STEM', 'NOC 21232'],
  },
]
