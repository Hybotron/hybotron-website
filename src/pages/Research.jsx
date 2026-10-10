import React from "react";
import "./Research.css";

import hybotronLogo from "../assets/hybotron_logo.png";
import footerLogo from "../assets/footer_hybotron_logo.png";
import researchHero from "../assets/research.jpg";

const explorationCards = [
  {
    number: "01",
    title: "Artificial Intelligence",
    description:
      "Exploring intelligent systems, machine learning, computer vision, edge AI and AI-assisted decision making.",
    tags: [
      "Computer Vision",
      "Machine Learning",
      "Edge AI",
      "Generative AI",
      "Intelligent Systems",
    ],
  },
  {
    number: "02",
    title: "Assistive Technology",
    description:
      "Exploring AI-based technologies that can improve accessibility, awareness and independence.",
    tags: [
      "Object Recognition",
      "Vision Based Understanding",
      "Voice Interaction",
      "Navigation Assistance",
      "Accessibility",
    ],
  },
  {
    number: "03",
    title: "IoT & Connected Systems",
    description:
      "Exploring connected devices, sensors, real-time monitoring and intelligent physical systems.",
    tags: [
      "Sensors",
      "Device Communication",
      "Edge Computing",
      "Real-Time Monitoring",
      "Automation",
    ],
  },
  {
    number: "04",
    title: "Smart Agriculture",
    description:
      "Exploring technology-driven approaches for agricultural monitoring and automation.",
    tags: [
      "Agricultural Monitoring",
      "Environmental Data",
      "IoT Sensors",
      "Smart Farming",
    ],
  },
  {
    number: "05",
    title: "New Frameworks & Technologies",
    description:
      "Exploring new software frameworks, development approaches, system architectures and emerging technologies.",
    tags: [
      "Frameworks",
      "Algorithms",
      "Architecture",
      "Automation",
      "Emerging Tech",
    ],
  },
  {
    number: "06",
    title: "Scientific Applied Research",
    description:
      "Exploring scientific concepts and investigating how they can be transformed into practical technological solutions.",
    tags: [
      "Scientific Concepts",
      "Experiments",
      "Applied Research",
      "Technology Transfer",
      "Innovation",
    ],
  },
];

const researchProjects = [
  {
    domain: "AI / VISION",
    title: "AI Smart Vision",
    description:
      "AI, Computer Vision, Edge Processing, and Voice Interaction for real-time assistance.",
  },
  {
    domain: "DATA / ACCOUNT MANAGEMENT",
    title: "Moi Account Management System",
    description:
      "Search, high-integrity data management, resilient system architecture, and secure web API.",
  },
  {
    domain: "MOBILE / UTILITY",
    title: "Milk Manager",
    description:
      "Low-cognitive mobile UX, offline-first data management, and modular application architecture.",
  },
  {
    domain: "REAL-TIME TELEMETRY",
    title: "BusV8",
    description:
      "Location systems, mobile computing, vector maps, and real-time stream synchronization for transit.",
  },
];

const lifeDomains = [
  {
    number: "01",
    title: "PEOPLE",
    description:
      "Human-centric independence, assistive visual perception systems, accessibility software, and physical safety.",
    points: ["Assistive Technology", "Accessibility Tools", "Personal Safety"],
  },
  {
    number: "02",
    title: "LIVING BEINGS",
    description:
      "Non-invasive bio-oriented systems, monitoring and intelligent technologies focused on living beings.",
    points: ["Continuous Monitoring", "Future Protection", "Intelligent Systems"],
  },
  {
    number: "03",
    title: "ENVIRONMENT",
    description:
      "Precise environmental mapping, low-power agricultural systems, resource conservation, and soil diagnostics.",
    points: [
      "Environmental Monitoring",
      "Smart Agriculture",
      "Sustainable Tech",
    ],
  },
  {
    number: "04",
    title: "TECHNOLOGY",
    description:
      "The computational substrate for AI, distributed mesh networking, deterministic algorithms, and robotics.",
    points: ["Applied Edge AI", "Physical IoT", "Intelligent Automation"],
  },
];

const principles = [
  {
    number: "01",
    title: "PURPOSEFUL",
    text: "Research should address meaningful problems. We avoid purely speculative solutions with no grounding in reality.",
  },
  {
    number: "02",
    title: "EXPERIMENTAL",
    text: "Ideas should be tested through practical experimentation. Working evidence can guide prototypes over speculation.",
  },
  {
    number: "03",
    title: "SCIENTIFIC",
    text: "Technology decisions should be guided by evidence, testing and analysis. Zero tolerance for unverified assumptions.",
  },
  {
    number: "04",
    title: "OPEN TO LEARNING",
    text: "Every experiment provides new knowledge. Negative test results are critical data points for continuous iteration.",
  },
  {
    number: "05",
    title: "RESPONSIBLE",
    text: "Technology should be developed with people, living beings and the environment in mind. Safety and ethics are architectural.",
  },
];

function Research() {
  return (
    <div className="research-page">

      {/* ================= HEADER ================= */}
      <header className="site-header">
        <div className="header-container">

          <a href="/" className="header-logo">
            <img src={hybotronLogo} alt="Hybotron" />
          </a>

          <nav className="main-nav">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/technologies">Technologies</a>
            <a href="/products">Products</a>
            <a href="/research" className="active">
              Research
            </a>
            <a href="/blog">Blog</a>
          </nav>

          <button className="header-support" aria-label="Support">
            🎧
          </button>

        </div>
      </header>

      <main>

        {/* ================= HERO ================= */}
        <section className="research-hero">

          <div className="research-hero-content">

            <h1>
              Exploring What
              <br />
              Technology Can
              <br />
              Become.
            </h1>

            <p>
              Hybotron explores new technologies, algorithms, frameworks and
              scientific ideas to develop practical solutions for people,
              living beings and the environment.
            </p>

            <blockquote>
              “Research begins with a question. Engineering turns discoveries
              into useful technology.”
            </blockquote>

            <a href="/products" className="dark-button">
              View Projects <span>→</span>
            </a>

          </div>

          <div className="research-hero-image">
            <img src={researchHero} alt="Hybotron Research" />
          </div>

        </section>

        {/* ================= RESEARCH PURPOSE ================= */}
        <section className="research-purpose section-container">

          <h2>Research With a Purpose.</h2>

          <p className="section-description">
            At Hybotron, research is focused on understanding problems,
            exploring possible solutions and transforming useful ideas into
            practical technologies.
            <br />
            We experiment with emerging technologies, investigate new
            approaches and continuously learn from development and real-world
            challenges.
          </p>

          <div className="research-flow">

            <div className="flow-header">
              <span>
                RESEARCH FLOW ARCHITECTURE // SEQUENTIAL TRANSLATION
              </span>

              <span>PHASE 01 → 07</span>
            </div>

            <div className="flow-grid">

              <FlowCard
                number="01"
                title="QUESTION"
                text="Formulate the core inquiry based on practical human or environmental necessity."
              />

              <FlowCard
                number="02"
                title="UNDERSTAND"
                text="Analyze underlying problems, physics, algorithms and boundaries."
              />

              <FlowCard
                number="03"
                title="EXPLORE"
                text="Survey competing technologies, frameworks, research and paradigms."
              />

              <FlowCard
                number="04"
                title="EXPERIMENT"
                text="Synthesize code, devices, edge inference and lightweight prototypes."
              />

              <FlowCard
                number="05"
                title="BUILD"
                text="Engineer end-to-end integrated applications and hardware."
              />

              <FlowCard
                number="06"
                title="EVALUATE"
                text="Rigorously stress-test in controlled physical and real-world conditions."
              />

              <FlowCard
                number="07"
                title="IMPROVE"
                text="Iterate relentlessly on algorithms, efficiency, reliability and safety."
                highlight
              />

            </div>
          </div>

        </section>

        {/* ================= WHAT WE EXPLORE ================= */}
        <section className="explore-section section-container">

          <h2>What We Explore</h2>

          <p className="section-description">
            Our research interests span software, intelligent systems,
            connected devices and technologies designed to solve real-world
            problems.
          </p>

          <div className="explore-grid">

            {explorationCards.map((card) => (
              <article className="explore-card" key={card.number}>

                <div className="card-icon">◉</div>

                <h3>{card.title}</h3>

                <p>{card.description}</p>

                <div className="tag-list">
                  {card.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>

              </article>
            ))}

          </div>

        </section>

        {/* ================= RESEARCH PROJECTS ================= */}
        <section className="projects-section section-container">

          <h2>Research That Becomes Technology</h2>

          <p className="section-description">
            Hybotron applies research and engineering concepts to practical
            projects.
          </p>

          <div className="projects-grid">

            {researchProjects.map((project) => (
              <article className="project-card" key={project.title}>

                <div className="project-top">
                  <span>
                    RESEARCH DOMAIN // {project.domain}
                  </span>

                  <strong>COMPLETED</strong>
                </div>

                <h3>{project.title}</h3>

                <div className="project-description">

                  <small>
                    UNDERLYING RESEARCH CONCEPTS
                  </small>

                  <p>{project.description}</p>

                </div>

                <div className="project-bottom">

                  <span>VERIFYING DEPLOYMENT</span>

                  <a href="/products">
                    View Project →
                  </a>

                </div>

              </article>
            ))}

          </div>

        </section>

        {/* ================= LIFE & ENVIRONMENT ================= */}
        <section className="life-section section-container">

          <h2>
            Technology for Life and the Environment.
          </h2>

          <p className="section-description">
            Hybotron explores technologies that can contribute to protecting
            people, living beings and the environment.
          </p>

          <div className="life-grid">

            {lifeDomains.map((domain) => (
              <article className="life-card" key={domain.number}>

                <div className="life-card-number">
                  DOMAIN // {domain.number}
                </div>

                <h3>{domain.title}</h3>

                <p>{domain.description}</p>

                <ul>
                  {domain.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>

              </article>
            ))}

          </div>

          <div className="life-statement">
            <span>“</span>

            These represent Hybotron's foundational research purpose and
            direction. All developments prioritize non-harm and resource
            stewardship.

            <span>”</span>
          </div>

        </section>

        {/* ================= PRINCIPLES ================= */}
        <section className="principles-section section-container">

          <h2>Our Research Principles</h2>

          <p className="section-description">
            Five non-negotiable guidelines governing every exploration, test
            bench, and engineering cycle.
          </p>

          <div className="principles-grid">

            {principles.map((principle) => (
              <article
                className="principle-card"
                key={principle.number}
              >

                <span>{principle.number}</span>

                <h3>{principle.title}</h3>

                <p>{principle.text}</p>

              </article>
            ))}

          </div>

        </section>

        {/* ================= CTA ================= */}
        <section className="research-cta">

          <h2>
            Have a Problem Worth
            <br />
            Researching?
          </h2>

          <p>
            Technology begins with a question. If you have a challenging
            problem, research idea or technology concept, let's explore it.
          </p>

          <a href="/contact" className="green-button">
            Start a Conversation
          </a>

        </section>

      </main>

      {/* ================= FOOTER ================= */}
      <footer className="site-footer">

        <div className="footer-container">

          <div className="footer-brand">

            <img src={footerLogo} alt="Hybotron" />

            <h3>HYBOTRON</h3>

            <p>
              Protecting Life and the
              <br />
              Environment Through
              <br />
              Technology.
            </p>

            <small>© 2026 Hybotron.</small>

          </div>

          <div className="footer-column">

            <h4>Company</h4>

            <a href="/about">About</a>
            <a href="/technologies">Technologies</a>
            <a href="#">Research</a>
            <a href="#careers">Careers</a>

          </div>

          <div className="footer-column">

            <h4>Solutions</h4>

            <a href="/products">Software</a>
            <a href="/products">Artificial Intelligence</a>
            <a href="/products">Internet of Things</a>
            <a href="/products">Automations</a>
            <a href="/products">UI & UX - Design</a>

          </div>

          <div className="footer-column">

            <h4>Resources</h4>

            <a href="#blog">Blog</a>
            <a href="#">Research</a>
            <a href="/products">Projects</a>
            <a href="#documents">Documentations</a>

          </div>

          <div className="footer-column">

            <h4>Contact</h4>

            <a href="mailto:hybotron.in@gmail.com">
              Email
            </a>

            <a href="https://www.linkedin.com/in/hybotron-☆-a559b3424">
              LinkedIn
            </a>

            <a href="https://instagram.com/hybotron?dlrf=MTNodjF0a3Brb2U0dg%3D%3D">
              Instagram
            </a>

            <a href="https://github.com/Hybotron">
              GitHub
            </a>

          </div>

        </div>

      </footer>

    </div>
  );
}

function FlowCard({
  number,
  title,
  text,
  highlight,
}) {
  return (
    <div
      className={`flow-card ${
        highlight ? "highlight" : ""
      }`}
    >

      <span className="flow-number">
        {number}
      </span>

      <h3>{title}</h3>

      <p>{text}</p>

      <div className="flow-line" />

    </div>
  );
}

export default Research;