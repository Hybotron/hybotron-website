import hybotronLogo from '../assets/hybotron_logo.png'
import footerLogo from '../assets/footer_hybotron_logo.png'
import './About.css'

const whoWeAreCards = [
  {
    text: 'Hybotron is a technology and research company focused on exploring how science, engineering and technology can be transformed into practical solutions.'
  },
  {
    text: 'We work across software, artificial intelligence, IoT, smart agriculture, robotics and intelligent systems while continuously exploring new algorithms, frameworks and emerging technologies.'
  },
  {
    text: 'Starting as a focused independent initiative, Hybotron is being built with a long-term vision of creating through research, product development, collaboration and real-world applications.'
  }
]

const whyHybotron = [
  {
    number: '01',
    title: 'Challenge',
    description: 'Real-world ecological and computational problems.'
  },
  {
    number: '02',
    title: 'Research',
    description: 'Scientific inquiry, exploratory algorithmic research.'
  },
  {
    number: '03',
    title: 'Engineering',
    description: 'Transform research into usable hardware and software.'
  },
  {
    number: '04',
    title: 'Technology',
    description: 'Intelligent systems and practical applications.'
  },
  {
    number: '05',
    title: 'Practical Solution',
    description: 'Meaningful environmental and real-world impact.'
  }
]

const missionPoints = [
  {
    number: '01',
    title: 'Research',
    description: 'Explore knowledge and possibilities.'
  },
  {
    number: '02',
    title: 'Design',
    description: 'Engineer architectures and concepts.'
  },
  {
    number: '03',
    title: 'Develop',
    description: 'Build software, hardware and intelligent systems.'
  },
  {
    number: '04',
    title: 'Impact',
    description: 'Apply technology to meaningful real-world problems.'
  }
]

const technologyCycle = [
  {
    number: '01',
    title: 'Identify',
    description: 'Understand the problem.'
  },
  {
    number: '02',
    title: 'Research',
    description: 'Study existing knowledge and approaches.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Create architectures and concepts.'
  },
  {
    number: '04',
    title: 'Build',
    description: 'Develop working prototypes.'
  },
  {
    number: '05',
    title: 'Test',
    description: 'Experiment and validate solutions.'
  },
  {
    number: '06',
    title: 'Improve',
    description: 'Iterate and refine performance.'
  },
  {
    number: '07',
    title: 'Apply',
    description: 'Move toward practical applications.'
  }
]

const beliefs = [
  {
    number: '01',
    title: 'Scientific Thinking',
    description: 'Use research, experimentation and evidence to guide development.'
  },
  {
    number: '02',
    title: 'Innovation',
    description: 'Explore new approaches and challenge existing assumptions.'
  },
  {
    number: '03',
    title: 'Responsibility',
    description: 'Consider the impact of technology on people, living beings and the environment.'
  },
  {
    number: '04',
    title: 'Engineering',
    description: 'Turn ideas into reliable and useful systems.'
  },
  {
    number: '05',
    title: 'Continuous Learning',
    description: 'Keep learning as technology and knowledge evolve.'
  },
  {
    number: '06',
    title: 'Collaboration',
    description: 'Work with people and organizations to solve complex problems.'
  }
]

function AboutNavbar() {
  return (
    <header className="about-navbar">
      <a href="/" className="about-navbar-logo">
        <img src={hybotronLogo} alt="Hybotron" />
      </a>

      <nav className="about-navbar-links">
        <a href="/">Home</a>
        <a href="/about" className="active">About</a>
        <a href="/technologies">Technologies</a>
        <a href="/products">Products</a>
        <a href="/research">Research</a>
        <a href="/blog">Blog</a>
      </nav>

      <button
        className="about-accessibility"
        type="button"
        aria-label="Accessibility"
      >
        🎧
      </button>
    </header>
  )
}

function AboutHero() {
  return (
    <section className="about-hero">
      <div className="about-hero-content">
        <h1>
          Building Technology
          <span>With <strong>Purpose.</strong></span>
        </h1>

        <p>
          Hybotron is an emerging technology and research company exploring
          software, artificial intelligence, IoT, intelligent systems and
          emerging technologies to solve real-world problems.
        </p>

        <a href="/technologies" className="about-green-button">
          Explore Our Technologies →
        </a>

        <small>
          Focus • Research • Technology • Real-World Impact
        </small>
      </div>

      <div className="about-hero-logo">
        <img src={hybotronLogo} alt="Hybotron logo" />
      </div>
    </section>
  )
}

function FoundedBar() {
  return (
    <section className="founded-bar">
      <div className="founded-year">2026</div>

      <div className="founded-content">
        <h3>Hybotron Founded</h3>
        <p>
          Hybotron began as an independent technology initiative focused on
          software development, research, experimentation and emerging technologies.
        </p>
      </div>

      <span className="founded-label">
        SCIENCE • ENGINEERING • INNOVATION
      </span>
    </section>
  )
}

function WhoWeAre() {
  return (
    <section className="about-section who-we-are">
      <h2>Who We Are</h2>

      <div className="who-grid">
        <div className="who-highlight">
          Transforming scientific inquiry and
          <br />
          deep engineering into reliable, real-
          <br />
          world tools that safeguard our shared
          <br />
          future.
        </div>

        <div className="who-cards">
          {whoWeAreCards.map((item) => (
            <div className="who-card" key={item.text}>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="who-brand">HYBOTRON</div>
    </section>
  )
}

function WhyHybotron() {
  return (
    <section className="about-section why-section">
      <h2>Why Hybotron?</h2>

      <p className="why-intro">
        Technology is rapidly changing how we interact with the world.
        At the same time, living beings and the environment face increasingly
        complex challenges.
      </p>

      <p className="why-intro">
        Hybotron exists to explore how science, engineering and technology
        can be used responsibly to understand these challenges and develop
        practical solutions.
      </p>

      <div className="process-row">
        {whyHybotron.map((item) => (
          <div
            className={`process-card ${
              item.number === '05' ? 'process-card-active' : ''
            }`}
            key={item.number}
          >
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Vision() {
  return (
    <section className="dark-about-card vision-card">
      <h2>OUR VISION</h2>

      <blockquote>
        “To protect all living beings
        <br />
        and the environment through
        <br />
        science and technology.”
      </blockquote>

      <p>
        We envision a future where technological progress contributes not only
        to human advancement, but also to the protection of life and the environment.
      </p>

      <div className="vision-symbol">
        <span>SCIENCE</span>
        <b> LIFE </b>
        <span>SYSTEMS</span>
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="dark-about-card mission-card">
      <h2>Our Mission</h2>

      <blockquote>
        “To research, design, and develop innovative
        <br />
        software, AI, IoT, hardware, and
        <br />
        intelligent systems that solve real-world
        <br />
        problems and contribute to the
        <br />
        protection of life and the environment.”
      </blockquote>

      <div className="mission-grid">
        {missionPoints.map((item) => (
          <div className="mission-item" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="mission-line" />
          </div>
        ))}
      </div>
    </section>
  )
}

function TechnologyCycle() {
  return (
    <section className="about-section technology-cycle">
      <h2>From Ideas to Technology</h2>

      <p>
        A disciplined scientific cycle transforming raw inquiry into durable
        deployments.
      </p>

      <div className="cycle-row">
        {technologyCycle.map((item) => (
          <div
            className={`cycle-card ${
              item.number === '07' ? 'cycle-card-active' : ''
            }`}
            key={item.number}
          >
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function WhatWeBelieve() {
  return (
    <section className="about-section beliefs-section">
      <h2>What We Believe</h2>

      <div className="belief-grid">
        {beliefs.map((item) => (
          <article className="belief-card" key={item.number}>
            <span>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function AboutQuote() {
  return (
    <section className="about-quote">
      <h2>
        “Technology should create
        <span>progress without losing sight</span>
        <span>of what we are protecting.”</span>
      </h2>

      <p>
        Hybotron is building toward that idea through research, engineering
        and continuous innovation.
      </p>
    </section>
  )
}

function BuildMeaningful() {
  return (
    <section className="build-meaningful">
      <h2>Let’s Build Something Meaningful.</h2>

      <p>
        Have an idea, problem, research opportunity or technology project?
        <br />
        Let’s explore what can be built.
      </p>

      <a href="/#contact" className="about-green-button">
        Contact Hybotron →
      </a>
    </section>
  )
}

function Founder() {
  return (
    <section className="founder-section">
      <h2>Founder</h2>

      <div className="founder-content">
        <h3>Tamilselvan</h3>

        <span>Founder • Hybotron</span>

        <p>
          I founded Hybotron in 2026 with an interest in building practical
          technologies through software development, artificial intelligence,
          IoT and research. My focus is on exploring new technologies,
          developing useful systems, and turning ideas into real-world solutions.
        </p>

        <div className="founder-tags">
          <span>Systems</span>
          <span>Research</span>
          <span>AI</span>
          <span>Engineering</span>
        </div>
      </div>
    </section>
  )
}

function AboutFooter() {
  return (
    <footer className="about-footer">
      <div className="about-footer-inner">
        <div className="about-footer-brand">
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

        <div className="about-footer-column">
          <h3>Company</h3>
          <a href="#">About</a>
          <a href="/technologies">Technologies</a>
          <a href="/research">Research</a>
          <a href="#careers">Careers</a>
        </div>

        <div className="about-footer-column">
          <h3>Solutions</h3>
          <a href="/products">Software</a>
          <a href="/products">Artificial Intelligence</a>
          <a href="/products">Internet of Things</a>
          <a href="/products">Automation</a>
          <a href="/products">UI & UX Design</a>
        </div>

        <div className="about-footer-column">
          <h3>Resources</h3>
          <a href="#blog">Blog</a>
          <a href="/research">Research</a>
          <a href="/products">Projects</a>
          <a href="#documents">Documentation</a>
        </div>

        <div className="about-footer-column">
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

export default function About() {
  return (
    <div className="about-page">
      <AboutNavbar />

      <main>
        <AboutHero />
        <FoundedBar />
        <WhoWeAre />
        <WhyHybotron />
        <Vision />
        <Mission />
        <TechnologyCycle />
        <WhatWeBelieve />
        <AboutQuote />
        <BuildMeaningful />
        <Founder />
      </main>

      <AboutFooter />
    </div>
  )
}