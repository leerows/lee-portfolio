import { useState } from 'react'
import './App.css'
import lulogo from './assets/LU crest.png'
import mclogo from './assets/macccollegelogo.jpeg'
import p1 from './assets/portfolioscreenshot.png'
import p2 from './assets/studentdashboardscreenshot.png'
import { BriefcaseBusiness, Code2, Folder, GraduationCap, House, Mail, Monitor, Server, ShieldCheck, UserRound } from 'lucide-react'

function LinkedinLogo() {
  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="1" y="1" width="22" height="22" rx="5" fill="#0a66c2" />
      <path
        d="M7.14 8.73a1.52 1.52 0 1 1 0-3.04 1.52 1.52 0 0 1 0 3.04ZM5.7 10.47h2.88v8.12H5.7Zm4.27 0h2.76v1.11h.04c.38-.72 1.31-1.48 2.7-1.48 2.88 0 3.41 1.89 3.41 4.35v4.14h-2.88v-3.87c0-1.01-.02-2.31-1.41-2.31-1.41 0-1.62 1.1-1.62 2.23v3.95H10z"
        fill="#fff"
      />
    </svg>
  )
}

function GitHubLogo() {
  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.29 9.42 7.86 10.94.58.11.8-.25.8-.56 0-.28-.01-1.22-.02-2.2-3.2.7-3.88-1.54-3.88-1.54-.52-1.34-1.28-1.7-1.28-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .97-.31 3.18 1.18a11.02 11.02 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.57.24 2.73.12 3.02.74.8 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.27 5.67.41.35.78 1.04.78 2.09 0 1.51-.01 2.73-.01 3.11 0 .31.21.68.81.56A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z"
      />
    </svg>
  )
}

const skills = [
  { label: 'IT Professional', icon: Server, color: 'pink' },
  { label: 'Cyber Security Enthusiast', icon: ShieldCheck, color: 'pink' },
  { label: 'Software Engineer', icon: Code2, color: 'pink' },
  { label: 'Web Developer', icon: Monitor, color: 'pink' },
]

const projects = [
  {
    id: 1,
    name: 'Portfolio Website',
    category: 'Web Development',
    dates: 'Oct 2026 - Present',
    description:
      'The website you are currently viewing. This project is a portfolio website built using React, TypeScript, and Vite. It showcases my skills, projects, and experience in web development and design.',
    tags: ['React', 'TypeScript', 'CSS', 'Vite'],
    image: p1,
  },
  {
    id: 2,
    name: 'MyStudent Dashboard',
    category: 'Web Development',
    dates: 'Oct 2025 - Apr 2026',
    description:
      'A web based student engagement dashboard, designed as my final year Computer Science dissertation at Lancaster University. The platform provides students with a centralised, personalised space to organise their academic activities, manage modules, track assessments and monitor their learning progress.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    image: p2,
  },
]

function HomePage() {
  return (
    <main id="home" className="home-page">
      <div className="hero panel">
        <div className="intro">
          <h1>Lee Rowson</h1>
          <p className="bio">Designing systems, building websites, and keeping things secure.</p>
          <div className="tag-list" aria-label="Skill tags">
            {skills.map(({ label, icon: Icon, color }) => (
              <span key={label} className={`tag ${color}`}>
                <span className="tag-icon" aria-hidden="true">
                  <Icon size={12} />
                </span>
                {label}
              </span>
            ))}
          </div>
        </div>

        <div className="profile">LR</div>
      </div>

      <div className="quick-links panel">
        <a href="https://www.linkedin.com/in/lee-rowson-799b1b299" target="_blank" rel="noreferrer" className="action-button linkedin-button">
          <LinkedinLogo />
          <span>My LinkedIn</span>
        </a>

        <a href="#projects" className="action-button">
          <BriefcaseBusiness size={18} />
          <span>My Projects</span>
        </a>

        <a href="https://github.com/leerows" target="_blank" rel="noreferrer" className="action-button github-button">
          <GitHubLogo />
          <span>My GitHub</span>
        </a>
      </div>
    </main>
  )
}

function AboutPage() {
  return (
    <main id="about" className="about-page">
      <section className="about-section">
        <div className="about-header">
          <span className="section-icon">
            <UserRound size={18} />
          </span>
          <h2>PROFILE</h2>
        </div>

        <div className="panel profile-panel">
          <p>
            Coming soon.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-header">
          <span className="section-icon">
            <GraduationCap size={18} />
          </span>
          <h2>EDUCATION</h2>
        </div>

        <div className="panel profile-panel education-panel">
          <div className="education-list">
            <div className="education-item">
              <div className="education-mark" aria-label="Lancaster University crest">
                <img
                  className="education-logo"
                  src={lulogo}
                  alt="Lancaster University logo"
                />
              </div>

              <div className="education-copy">
                <h3>BSc (Hons) Computer Science</h3>
                <p>Lancaster University</p>
                <p className="education-grade">First Class Honours (1st)</p>
              </div>

              <span className="education-date">Oct 2023 — Sep 2026</span>
            </div>

            <div className="education-item">
              <div className="education-mark secondary-mark" aria-label="Macclesfield College crest">
                <img
                  className="education-logo secondary-logo"
                  src={mclogo}
                  alt="Macclesfield College logo"
                />
              </div>

              <div className="education-copy">
                <h3>Extended Diploma in Information Technology</h3>
                <p>Macclesfield College</p>
                <p className="education-grade">Triple Distinction Star (D*D*D*)</p>
              </div>

              <span className="education-date">Sep 2020 — Jul 2023</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const categories = ['All', ...new Set(projects.map((project) => project.category))]
  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  return (
    <main id="projects" className="projects-page">
      <section className="about-section">
        <div className="about-header">
          <span className="section-icon">
            <Folder size={18} />
          </span>
          <h2>PROJECTS</h2>
        </div>

        <div className="projects-content">
          <p className="projects-intro">This page contains a collection of some of the projects I have worked on.</p>

          <div className="project-filter-section">
            <h3 className="project-filter-header">Filter projects</h3>

            <div className="project-filter-box">
              <span className="project-filter-label">Category</span>
              <div className="project-filters" aria-label="Project categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`project-filter ${selectedCategory === category ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="projects-list">
            {filteredProjects.map((project) => (
              <article key={project.id} className="panel project-panel">
                <div className="project-visual" aria-label={`${project.name} preview`}>
                  {project.image ? (
                    <img src={project.image} alt={`${project.name} preview`} className="project-visual-image" />
                  ) : (
                    <span>Screenshot</span>
                  )}
                </div>

                <div className="project-content">
                  <div className="project-topline">
                    <span className="project-category">{project.category}</span>
                    <span className="project-date">{project.dates}</span>
                  </div>

                  <div className="project-header-row">
                    <h3>{project.name}</h3>
                  </div>

                  <p className="project-description">{project.description}</p>

                  <div className="project-tags" aria-label={`${project.name} technologies`}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button type="button" className="project-button">
                    View project
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'projects'>('home')

  const handleNavClick = (page: 'home' | 'about' | 'projects', href: string) => {
    setCurrentPage(page)
    window.history.pushState({}, '', href)
  }

  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <a
          href="#home"
          className={`nav-icon ${currentPage === 'home' ? 'selected' : ''}`}
          data-tooltip="Home"
          aria-label="Home"
          onClick={(event) => {
            event.preventDefault()
            handleNavClick('home', '#home')
          }}
        >
          <House size={21} />
        </a>

        <a
          href="#about"
          className={`nav-icon ${currentPage === 'about' ? 'selected' : ''}`}
          data-tooltip="About"
          aria-label="About"
          onClick={(event) => {
            event.preventDefault()
            handleNavClick('about', '#about')
          }}
        >
          <UserRound size={21} />
        </a>

        <a
          href="#projects"
          className={`nav-icon ${currentPage === 'projects' ? 'selected' : ''}`}
          data-tooltip="Projects"
          aria-label="Projects"
          onClick={(event) => {
            event.preventDefault()
            handleNavClick('projects', '#projects')
          }}
        >
          <Folder size={21} />
        </a>

        <a href="#contact" className="nav-icon" data-tooltip="Contact" aria-label="Contact">
          <Mail size={21} />
        </a>
      </nav>

      {currentPage === 'home' && <HomePage />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'projects' && <ProjectsPage />}
    </>
  )
}

export default App
