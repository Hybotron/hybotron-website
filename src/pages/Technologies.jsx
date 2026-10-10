import hybotronLogo from '../assets/hybotron_logo.png'
import footerLogo from '../assets/footer_hybotron_logo.png'
import heroImage from '../assets/technologies_hero_image.png'
import techStackBackground from '../assets/tech_satck_bg_image.png'

import python from '../assets/tech_stack_logos/python.png'
import javascript from '../assets/tech_stack_logos/javascript.png'
import html from '../assets/tech_stack_logos/html.png'
import css from '../assets/tech_stack_logos/css.png'
import react from '../assets/tech_stack_logos/react.png'
import reactNative from '../assets/tech_stack_logos/react_native.png'
import node from '../assets/tech_stack_logos/node.png'
import express from '../assets/tech_stack_logos/express.png'
import mongodb from '../assets/tech_stack_logos/mongodb.png'
import mysql from '../assets/tech_stack_logos/mysql.png'
import psql from '../assets/tech_stack_logos/psql.png'
import api from '../assets/tech_stack_logos/api.png'
import androidStudio from '../assets/tech_stack_logos/android_studio.png'
import postman from '../assets/tech_stack_logos/postman.png'
import github from '../assets/tech_stack_logos/github.png'
import ubuntu from '../assets/tech_stack_logos/ubuntu.png'
import blender from '../assets/tech_stack_logos/blender.png'
import figma from '../assets/tech_stack_logos/figma.png'

import antigravity from '../assets/ai_dev_tools_logos/antigravity.png'
import chatgpt from '../assets/ai_dev_tools_logos/chatgpt.png'
import claude from '../assets/ai_dev_tools_logos/claude.png'
import gemini from '../assets/ai_dev_tools_logos/gemini.png'
import githubCopilot from '../assets/ai_dev_tools_logos/github_copilot.png'

import './Technologies.css'

const techStack = [
  {
    name: 'Python',
    image: python,
    description:
      'Python is a powerful backend programming language. It is widely used for software development, AI and machine learning.'
  },
  {
    name: 'JavaScript',
    image: javascript,
    description:
      'A high-level programming language used for creating interactive web applications.'
  },
  {
    name: 'HTML',
    image: html,
    description:
      'HTML is the standard markup language used to structure web pages and applications.'
  },
  {
    name: 'CSS',
    image: css,
    description:
      'A fundamental stylesheet language used to describe presentation and visual design.'
  },
  {
    name: 'React',
    image: react,
    description:
      'Open-source front-end JavaScript library for building dynamic and reusable user interfaces.'
  },
  {
    name: 'React Native',
    image: reactNative,
    description:
      'Open-source framework used to build native mobile applications using React.'
  },
  {
    name: 'Node.js',
    image: node,
    description:
      'A JavaScript runtime environment used to build scalable and efficient server-side applications.'
  },
  {
    name: 'Express.js',
    image: express,
    description:
      'A lightweight Node.js framework for building APIs and web applications.'
  },
  {
    name: 'MongoDB',
    image: mongodb,
    description:
      'A popular document-oriented NoSQL database designed for flexible and scalable applications.'
  },
  {
    name: 'MySQL',
    image: mysql,
    description:
      'A popular open-source relational database used for storing and managing structured data.'
  },
  {
    name: 'PostgreSQL',
    image: psql,
    description:
      'A powerful open-source object-relational database system designed for complex applications.'
  },
  {
    name: 'API',
    image: api,
    description:
      'A set of standardized rules and protocols that allow different software applications to communicate.'
  },
  {
    name: 'Android Studio',
    image: androidStudio,
    description:
      'Integrated development environment used for Android application development.'
  },
  {
    name: 'Postman',
    image: postman,
    description:
      'An API development and testing platform used to build, test and document APIs.'
  },
  {
    name: 'GitHub',
    image: github,
    description:
      'A web-based platform for version control, collaboration and software development.'
  },
  {
    name: 'Ubuntu',
    image: ubuntu,
    description:
      'Open-source operating system widely used for development, servers and IoT environments.'
  },
  {
    name: 'Blender',
    image: blender,
    description:
      'A free and open-source 3D creation suite for modeling, animation and visual effects.'
  },
  {
    name: 'Figma',
    image: figma,
    description:
      'A collaborative web-based interface design and prototyping tool.'
  }
]

const aiTools = [
  {
    name: 'Antigravity',
    image: antigravity
  },
  {
    name: 'ChatGPT',
    image: chatgpt
  },
  {
    name: 'Claude',
    image: claude
  },
  {
    name: 'Gemini',
    image: gemini
  },
  {
    name: 'GitHub Copilot',
    image: githubCopilot
  }
]

const ecosystem = [
  {
    number: '01',
    title: 'SOFTWARE',
    subtitle: 'Web & Software UI'
  },
  {
    number: '02',
    title: 'EDGE AI',
    subtitle: 'Low-latency models'
  },
  {
    number: '03',
    title: 'IOT SENSORS',
    subtitle: 'Field systems'
  },
  {
    number: '04',
    title: 'AUTOMATIONS',
    subtitle: 'Motor automation'
  },
  {
    number: '05',
    title: 'CLOUD MESH',
    subtitle: 'Infrastructure'
  },
  {
    number: '06',
    title: 'RESEARCH',
    subtitle: 'Scientific inquiry'
  }
]

const deploymentSteps = [
  {
    number: '01',
    title: 'TECHNOLOGY',
    heading: 'Building Block',
    description:
      'Algorithms, microcontrollers, and neural models selected.'
  },
  {
    number: '02',
    title: 'INTERFACE',
    heading: 'Hardware/Code',
    description:
      'Bridging software outputs to firmware and cloud telemetry.'
  },
  {
    number: '03',
    title: 'SYSTEM',
    heading: 'Unified Prototype',
    description:
      'End-to-end operational system functioning autonomously.'
  },
  {
    number: '04',
    title: 'TESTING',
    heading: 'Stress Testing',
    description:
      'Validating under thermal, electrical, and network variance.'
  },
  {
    number: '05',
    title: 'DEPLOYMENT',
    heading: 'Real-World Action',
    description:
      'Active monitoring, continuous feedback, and reliable runtime.'
  }
]

function TechnologiesNavbar() {
  return (
    <header className="technologies-navbar">
      <a href="/" className="technologies-logo">
        <img src={hybotronLogo} alt="Hybotron" />
      </a>

      <nav className="technologies-nav-links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/technologies" className="active">
          Technologies
        </a>
        <a href="/products">Products</a>
        <a href="/research">Research</a>
        <a href="/blog">Blog</a>
      </nav>

      <button
        type="button"
        className="technologies-accessibility"
        aria-label="Accessibility"
      >
        🎧
      </button>
    </header>
  )
}

function TechnologyHero() {
  return (
    <section className="technology-hero">
      <div className="technology-hero-content">
        <h1>
          Technology That
          <br />
          Connects <span>Ideas</span> to
          <br />
          Reality.
        </h1>

        <p>
          Exploring, engineering, and integrating technologies to build
          intelligent systems for real-world problems. Hybotron works across
          software, artificial intelligence, IoT, embedded systems, intelligent
          hardware, and emerging bio-digital technologies.
        </p>
      </div>

      <div className="technology-hero-image">
        <img
          src={heroImage}
          alt="Hybotron technology and innovation"
        />
      </div>
    </section>
  )
}

function TechStack() {
  return (
    <section className="technology-section tech-stack-section">
      <h2>Our Tech Stack</h2>

      <div
        className="tech-stack-container"
        style={{
          backgroundImage: `url(${techStackBackground})`
        }}
      >
        <div className="tech-stack-grid">
          {techStack.map((tech) => (
            <article className="tech-stack-card" key={tech.name}>
              <div className="tech-logo-box">
                <img src={tech.image} alt={tech.name} />
              </div>

              <div className="tech-description">
                <p>{tech.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function AiDevelopmentTools() {
  return (
    <section className="technology-section ai-tools-section">
      <h2>AI Development Tools</h2>

      <p>
        Hybotron uses AI-assisted development tools to accelerate software
        development, explore ideas, analyze problems, generate and improve
        code, create documentation, and support research and experimentation.
      </p>

      <div className="ai-tools-grid">
        {aiTools.map((tool) => (
          <div className="ai-tool" key={tool.name}>
            <img src={tool.image} alt={tool.name} />
          </div>
        ))}
      </div>
    </section>
  )
}

function InterconnectedSection() {
  return (
    <section className="interconnected-section">
      <h2>Interconnected, Not Isolated.</h2>

      <p>
        Real breakthroughs occur where disciplines intersect. Hybotron combines
        software engineering, embedded firmware, neural AI, and physical
        hardware into coherent systems.
      </p>

      <div className="ecosystem-container">
        {ecosystem.map((item) => (
          <div className="ecosystem-card" key={item.number}>
            <span>{item.number}</span>

            <h3>{item.title}</h3>

            <p>{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function DeploymentSection() {
  return (
    <section className="technology-section deployment-section">
      <h2>From Technology to Deployed Solution</h2>

      <p>
        How raw computational building blocks and micro-circuits evolve into
        robust real-world installations.
      </p>

      <div className="deployment-grid">
        {deploymentSteps.map((step) => (
          <article
            className={`deployment-card ${
              step.number === '05' ? 'deployment-active' : ''
            }`}
            key={step.number}
          >
            <span>
              {step.number}. {step.title}
            </span>

            <h3>{step.heading}</h3>

            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function TechnologyChallenge() {
  return (
    <section className="technology-challenge">
      <h2>
        Have a Complex
        <br />
        Technology
        <br />
        Challenge?
      </h2>

      <p>
        Let's explore how software engineering, artificial intelligence, IoT
        sensing, and edge hardware can be combined to build a concrete,
        reliable solution.
      </p>

      <a href="/contact" className="technology-contact-button">
        CONTACT HYBOTRON
      </a>
    </section>
  )
}

function TechnologiesFooter() {
  return (
    <footer className="technologies-footer">
      <div className="technologies-footer-inner">
        <div className="technologies-footer-brand">
          <img src={footerLogo} alt="Hybotron" />

          <p>
            Protecting Life and the
            <br />
            Environment Through
            <br />
            Technology.
          </p>

          <small>• Hybotron.</small>
        </div>

        <div className="technologies-footer-column">
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="#">Technologies</a>
          <a href="/research">Research</a>
          <a href="#careers">Careers</a>
        </div>

        <div className="technologies-footer-column">
          <h3>Solutions</h3>
          <a href="/products">Software</a>
          <a href="/products">Artificial Intelligence</a>
          <a href="/products">Internet of Things</a>
          <a href="/products">Automations</a>
          <a href="/products">UI & UX - Design</a>
        </div>

        <div className="technologies-footer-column">
          <h3>Resources</h3>
          <a href="#blog">Blog</a>
          <a href="/research">Research</a>
          <a href="/products">Projects</a>
          <a href="#documents">Documentations</a>
        </div>

        <div className="technologies-footer-column">
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

export default function Technologies() {
  return (
    <div className="technologies-page">
      <TechnologiesNavbar />

      <main>
        <TechnologyHero />
        <TechStack />
        <AiDevelopmentTools />
        <InterconnectedSection />
        <DeploymentSection />
        <TechnologyChallenge />
      </main>

      <TechnologiesFooter />
    </div>
  )
}