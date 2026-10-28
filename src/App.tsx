
import './App.css'
import { BriefcaseBusiness, Folder, House, Mail, UserRound } from 'lucide-react'

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

function App() {
  return (
    <>
      <nav className="navbar" aria-label="Main navigation">
        <a href="#home" className="nav-icon selected" data-tooltip="Home" aria-label="Home">
          <House size={21} />
        </a>

        <a href="#about" className="nav-icon" data-tooltip="About" aria-label="About">
          <UserRound size={21} />
        </a>

        <a href="#projects" className="nav-icon" data-tooltip="Projects" aria-label="Projects">
          <Folder size={21} />
        </a>

        <a href="#contact" className="nav-icon" data-tooltip="Contact" aria-label="Contact">
          <Mail size={21} />
        </a>
      </nav>

      <main id="home" className="home-page">
        <div className="hero panel">
          <div className="intro">
            <h1>Lee Rowson</h1>
            <p className="bio">Hello! I'm Lee...</p>
            <p>Website Developer</p>
            <p>Cybersecurity Enthusiast</p>
            <p>Software Engineer</p>
            <p>IT Professional</p>
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
    </>
  )
}

export default App
