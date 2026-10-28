
import './App.css'
import { House, Folder, UserRound, Mail } from 'lucide-react'

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
        </div>

        <div className="profile">
          LR
        </div>
      </div>
    </main>
    </>
  )
}

export default App
