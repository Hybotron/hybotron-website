import hybotronLogo from '../assets/hybotron_logo.png'
import footerLogo from '../assets/footer_hybotron_logo.png'
import heroBg from '../assets/herobg.jpg'
import ecosystemGraphics from '../assets/Ecosystem_graphics.png'
import moiAccount from '../assets/moi_account_management.jpg'
import busv8 from '../assets/busv8.png'
import aiSmartVision from '../assets/ai_smart_vision.png'
import tech from '../assets/tech.jpg'
import milkManager from '../assets/milk_manager.png'

const technologies = [
  {
    code: '01',
    title: 'SOFTWARE',
    description:
      'Web applications, mobile applications, dashboards, APIs and cloud-based software solutions.'
  },
  {
    code: '02',
    title: 'ARTIFICIAL INTELLIGENCE',
    description:
      'AI-powered systems, intelligent automation, computer vision, machine learning and advanced AI solutions.'
  },
  {
    code: '03',
    title: 'IoT',
    description:
      'Connected devices, sensors, monitoring systems and intelligent IoT solutions for real-world applications.'
  },
  {
    code: '04',
    title: 'SMART AGRICULTURE',
    description:
      'Technology for farm monitoring, environmental sensing and intelligent agricultural systems.'
  },
  {
    code: '05',
    title: 'ROBOTICS & AUTOMATION',
    description:
      'Intelligent machines, control systems and automation technologies for practical applications.'
  },
  {
    code: '06',
    title: 'RESEARCH & INNOVATION',
    description:
      'Algorithms, frameworks, prototypes and exploration of emerging technologies for practical use.'
  }
]

const projects = [
  {
    image: moiAccount,
    title: 'Moi Account Management',
    description:
      'A web-based account management and search system designed to quickly find and manage account records. It supports English/Tamil search, fuzzy matching for spelling variations, and displays account details in a simple, mobile-friendly interface.',
    technologies: 'React.js • Node.js • MySQL • Fuse.js'
  },
  {
    image: busv8,
    title: 'BusV8',
    description:
      'The system aims to provide students with a convenient way to identify and track their college bus in real time without requiring a dedicated GPS tracking device on every bus.',
    technologies: 'Google Maps • JavaScript • Node.js • MySQL'
  },
  {
    image: aiSmartVision,
    title: 'AI Smart Vision',
    description:
      'An offline-first AI assistive system designed to help visually impaired users understand and navigate their surroundings. It combines computer vision, voice interaction, navigation and audio guidance.',
    technologies: 'Python • YOLOv8 • OpenCV • PaddleOCR'
  },
  {
    image: milkManager,
    title: 'Milk Manager',
    description:
      'A mobile application designed for daily milk buyers, especially homemakers. It allows users to record their daily milk quantity, amount, date and time and automatically calculates totals and payments.',
    technologies: 'React Native • Expo • Node.js • Express.js'
  }
]

function Navbar() {
  return (
    <header className="navbar">
      <a href="#home" className="navbar-logo">
        <img src={hybotronLogo} alt="Hybotron" />
      </a>

      <nav className="navbar-links">
        <a href="#home">Home</a>
        <a href="/about">About</a>
        <a href="/technologies">Technologies</a>
        <a href="/products">Products</a>
        <a href="/research">Research</a>
        <a href="#blog">Blog</a>
      </nav>

      <button className="accessibility-button" type="button" aria-label="Accessibility">
        🎧
      </button>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" />

      <div className="hero-content">
        <h1>HYBOTRON</h1>
        <p className="hero-subtitle">TECHNOLOGY • RESEARCH • INNOVATION</p>
      </div>
    </section>
  )
}

function VisionSection() {
  return (
    <section className="vision-section">
      <h2>
        Protecting Life and
        <br />
        the Environment
        <span>Through Technology.</span>
      </h2>

      <p className="vision-description">
        Hybotron researches and develops software, artificial intelligence, IoT,
        intelligent systems and emerging technologies to solve real-world problems.
      </p>

      <p className="vision-support">
        Researching, designing and building intelligent technologies for real-world problems.
      </p>

      <p className="vision-green-text">
        Hybotron develops software, artificial intelligence, IoT, intelligent
        systems and emerging technologies with a focus on practical innovation
        and a better future.
      </p>

      <a href="/technologies" className="green-button">
        EXPLORE TECHNOLOGIES
      </a>
    </section>
  )
}

function TechnologyBuild() {
  return (
    <section className="technology-build section-container" id="about">
      <div className="technology-build-content">
        <h2>Technology Build for Real - World Solutions</h2>

        <p>
          Hybotron is a technology and research company exploring software,
          artificial intelligence, IoT, intelligent systems and emerging
          technologies to create practical solutions for real-world challenges.
        </p>

        <p>
          We believe that early-stage scientific rigor, paired with ethical
          engineering and human-centered design, creates technologies capable
          of defending delicate ecosystems, securing sustainable resources,
          and enhancing human capabilities without destabilizing biological harmony.
        </p>

        <a href="/about" className="green-button">
          ABOUT HYBOTRON <span>→</span>
        </a>
      </div>

      <div className="technology-build-image">
        <img src={tech} alt="Hybotron technology" />
      </div>
    </section>
  )
}

function WhatWeDo() {
  return (
    <section className="what-we-do section-container" id="technologies">
      <div className="section-heading">
        <h2>What We Do</h2>
        <p>
          From software systems to intelligent hardware, we explore technologies
          that can create meaningful impact.
        </p>
      </div>

      <div className="technology-grid">
        {technologies.map((technology) => (
          <article className="technology-card" key={technology.code}>
            <span className="technology-code">{technology.code} •</span>
            <h3>{technology.title}</h3>
            <p>{technology.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function Ecosystem() {
  return (
    <section className="ecosystem-section section-container">
      <h2>One Technology Ecosystem</h2>

      <div className="ecosystem-card">
        <img
          src={ecosystemGraphics}
          alt="Hybotron technology ecosystem"
        />
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>

        <p>{project.description}</p>

        <div className="project-technologies">
          <strong>Technologies:</strong>
          <span>{project.technologies}</span>
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section className="projects-section section-container" id="products">
      <div className="section-heading">
        <h2>Solutions for the Real World</h2>
        <p>Hybotron builds Real-World solutions in efficient ways.</p>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="mission-section section-container" id="research">
      <div className="mission-card">
        <h2>
          “To protect all living beings and
          <br />
          the environment through science
          <br />
          and technology.”
        </h2>

        <p>
          Technology should not only advance what we can build.
          It should also help us protect life, resources and the environment.
        </p>

        <div className="mission-points">
          <div>
            <strong>Biosphere Protection</strong>
            <span>Autonomous ecological intelligence</span>
          </div>

          <div>
            <strong>Low-Power Edge Telemetry</strong>
            <span>Zero-waste environmental sensing</span>
          </div>

          <div>
            <strong>Non-Invasive Monitoring</strong>
            <span>Human and ecosystem safety</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function CallToAction() {
  return (
    <section className="cta-section">
      <div className="cta-card">
        <h2>Have a Problem Worth Solving?</h2>

        <p>
          Let's explore how software, AI, IoT and emerging technologies can
          help turn an idea or challenge into a practical solution.
        </p>

        <div className="cta-buttons">
          <a href="#contact" className="green-button">
            CONTACT HYBOTRON
          </a>

          <a href="/products" className="dark-button">
            EXPLORE SOLUTIONS
          </a>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-main">
        <div className="footer-brand">
          <img src={footerLogo} alt="Hybotron" />

          <p>
            Protecting Life and the
            <br />
            Environment Through
            <br />
            Technology.
          </p>

          <small>• Hybotron</small>
        </div>

        <div className="footer-column">
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/technologies">Technologies</a>
          <a href="/research">Research</a>
          <a href="#careers">Careers</a>
        </div>

        <div className="footer-column">
          <h3>Solutions</h3>
          <a href="/products">Software</a>
          <a href="/products">Artificial Intelligence</a>
          <a href="/products">Internet of Things</a>
          <a href="/products">Automation</a>
          <a href="/products">UI & UX Design</a>
        </div>

        <div className="footer-column" id="blog">
          <h3>Resources</h3>
          <a href="#blog">Blog</a>
          <a href="/research">Research</a>
          <a href="/products">Projects</a>
          <a href="#documents">Documents</a>
        </div>

        <div className="footer-column">
          <h3>Contact</h3>
          <a href="mailto:hybotron.in@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/hybotron-☆-a559b3424">LinkedIn</a>
          <a href="https://instagram.com/hybotron?dlrf=MTNodjF0a3Brb2U0dg%3D%3D">Instagram</a>
          <a href="https://github.com/Hybotron">GitHub</a>
        </div>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VisionSection />
        <TechnologyBuild />
        <WhatWeDo />
        <Ecosystem />
        <Projects />
        <Mission />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}