import React from "react";
import hybotronLogo from '../assets/hybotron_logo.png'
import footerLogo from '../assets/footer_hybotron_logo.png'
import "./Products.css";

import aiSmartVision from "../assets/ai_smart_vision.png";
import moiAccount from "../assets/moi_account_management.jpg";
import milkManager from "../assets/milk_manager.png";
import busv8 from "../assets/busv8.png";
import thick from "../assets/product_think.jpg";

function Products() {
  const products = [
    {
      image: moiAccount,
      title: "Moi Account Management System",
      description:
        "Dual-language event accounting console. Integrates Tamil and English phonetics to resolve culturally varied name spellings during traditional gatherings.",
      points: [
        "Fuzzy search using custom Levenshtein weight",
        "Tamil phonetic normalization",
        "Voice-assisted account lookup",
        "Two-factor numeric verification gate",
      ],
      tech: "React • Node.js • Express • MySQL • Fuse.js",
      status: "LIVE VERIFIED PRODUCTION BUILD",
    },
    {
      image: milkManager,
      title: "Milk Manager App",
      description:
        "Hyper-focused household accounting utility designed specifically for daily milk-buying and supply tracking.",
      points: [
        "Replaces error-prone manual calendar matings with zero-latency volume inputs",
        "Payment cycle projections and automatic monthly settlement reconciliation",
        "Flexible rate/price tariff configuration per supplier source",
        "Full offline operation on encrypted relational device storage",
      ],
      tech: "Mobile App • SQLite Storage • Chart Engine",
      status: "STABLE ARCHITECTURE RUNNING LOCAL",
    },
    {
      image: busv8,
      title: "BusV8 Smart Campus Bus Tracker",
      description:
        "Decentralized campus transit locator operating with zero onboard telematics hardware. Leverages passive student device GPS relays to construct real-time fleet positioning metrics with Kalman-filtered interpolation.",
      points: [
        "Battery-efficient low frequency background geolocation beacon",
        "Geospatial 2D sphere indexing with sub-second polygon queries",
        "JWT-authenticated driver & rider roles with route fencing",
      ],
      tech: "React Native • Expo • Node.js • Express.js • MongoDB",
      status: "COMMUNITY VALIDATED REAL-TIME NETWORK",
    },
  ];

  const pillars = [
    {
      number: "01",
      title: "Software Architecture",
      description:
        "Resilient distributed schemas, idempotent REST microservices, low-friction relational data models, and localized zero-fail state management.",
      index: "INDEX: NODE • REST • ACID",
    },
    {
      number: "02",
      title: "Computer Vision & Edge AI",
      description:
        "INT8 quantized neural networks running locally on low-power silicon, tailored for object tagging, spatial triangulation, and acoustic synthesis.",
      index: "INDEX: TENSORRT • YOLO • EDGE/FOOT",
    },
    {
      number: "03",
      title: "Mobile Engineering",
      description:
        "Native cross-platform applications engineered for low-memory footprints, background location beacons, and rock-solid offline synchronization.",
      index: "INDEX: REACT NATIVE • EXPO • SQLITE",
    },
    {
      number: "04",
      title: "System Integration",
      description:
        "Harmonizing diverse sensory feeds, geospatial spatial coordinates, local databases, and dual-language voice interfaces into monolithic units.",
      index: "INDEX: GEOSPATIAL • AUDIO • PIPELINES",
    },
  ];

  const pipeline = [
    {
      number: "01",
      title: "Identify",
      description: "Uncover concrete physical-world friction.",
    },
    {
      number: "02",
      title: "Research",
      description: "Audit existing methods and hardware bounds.",
    },
    {
      number: "03",
      title: "Design",
      description: "Create architectures and offline data schemas.",
    },
    {
      number: "04",
      title: "Develop",
      description: "Code clean systems with strict typing.",
    },
    {
      number: "05",
      title: "Test",
      description: "Simulate network zero and sensor degradation.",
    },
    {
      number: "06",
      title: "Optimize",
      description: "Quantize models and trim runtime memory.",
    },
    {
      number: "07",
      title: "Deliver",
      description: "Deploy production-ready verifiable systems.",
    },
  ];

  return (
    <div className="products-page">

      {/* =====================================
          NAVBAR
      ====================================== */}

      <header className="products-navbar">
        <div className="products-logo">
          <img src={hybotronLogo} alt="Hybotron" />
        </div>

        <nav className="products-nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/technologies">Technologies</a>
          <a href="/products" className="active">
            Products
          </a>
          <a href="/research">Research</a>
          <a href="/blog">Blog</a>
        </nav>

        <button className="products-accessibility" aria-label="Accessibility">
          🎧
        </button>
      </header>

      {/* =====================================
          HERO
      ====================================== */}

      <section className="products-hero">

        <div className="products-hero-content">
          <h1>
            Turning Ideas Into Real
            <span> Technology.</span>
          </h1>

          <p>
            An independent engineering laboratory translating rigorous
            algorithmic inquiry into operational edge AI, high-reliability
            mobile utilities, and distributed geospatial networks. Built for
            physical-world friction and real human constraints.
          </p>
        </div>

        <div className="products-hero-image">
          <img src={thick} alt="Hybotron technology systems" />
        </div>

      </section>

      {/* =====================================
          SYSTEMS & APPLICATIONS
      ====================================== */}

      <section className="products-section systems-section">

        <h2>Systems &amp; Applications</h2>

        {/* Featured AI Smart Vision */}

        <div className="featured-product">

          <div className="featured-content">

            <span className="featured-label">
              COMPUTE: NVIDIA JETSON ORIN NANO &nbsp; OFFLINE PIPELINE
            </span>

            <span className="featured-category">
              ASSISTIVE INTELLIGENCE / SPATIAL PERCEPTION
            </span>

            <h2>AI Smart Vision</h2>

            <p>
              An offline-first wearable spatial perception module engineered
              for visually impaired navigation. Processing 360-degree
              environmental streams locally without cloud telemetry,
              guaranteeing safety latency thresholds under complete network
              deprivation.
            </p>

            <div className="featured-features">

              <div>
                <strong>♧ Spatial Bounding</strong>
                <span>
                  Real-time stereoscopic distance estimation down to 5cm
                  precision.
                </span>
              </div>

              <div>
                <strong>◎ Currency Classifier</strong>
                <span>
                  Instant recognition for Indian banknotes.
                </span>
              </div>

              <div>
                <strong>◉ Color Calibration</strong>
                <span>
                  High-fidelity surface chromatic extraction.
                </span>
              </div>

              <div>
                <strong>◈ Binaural Haptics</strong>
                <span>
                  Directional acoustic guidance relayed straight to wireless
                  earbud mesh.
                </span>
              </div>

            </div>

            <div className="featured-bottom">
              <span>NEXT PHASE FIRMWARE MODULES</span>
              <strong>
                OCR Text Reading (In Progress) • Facial/Item Tagging
                (In Progress)
              </strong>
            </div>

          </div>

          <div className="featured-image">
            <img src={aiSmartVision} alt="AI Smart Vision" />
          </div>

        </div>

        {/* Product cards */}

        <div className="product-cards">

          {products.map((product) => (
            <article className="product-card" key={product.title}>

              <div className="product-card-image">
                <img src={product.image} alt={product.title} />
              </div>

              <h3>{product.title}</h3>

              <p>{product.description}</p>

              <div className="product-points">
                {product.points.map((point) => (
                  <span key={point}>{point}</span>
                ))}
              </div>

              <div className="product-tech">
                <strong>Tech Stack</strong>
                <span>{product.tech}</span>
              </div>

              <small>{product.status}</small>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================
          BENCHMARK MATRIX
      ====================================== */}

      <section className="products-section benchmark-section">

        <h2>Systems Benchmark Matrix</h2>

        <div className="benchmark-container">

          <div className="benchmark-header">
            <span>INITIATIVE</span>
            <span>DOMAIN / SCOPE</span>
            <span>CORE COMPUTE STACK</span>
            <span>DISTINCT ADVANTAGE</span>
            <span>DEPLOY STATUS</span>
          </div>

          <div className="benchmark-row">
            <span>● AI Smart Vision</span>
            <span>Computer Vision &amp; Assistive AI</span>
            <span>Jetson, TensorRT, YOLOv8</span>
            <span>100% offline edge inference under 45ms latency</span>
            <b>COMPLETED</b>
          </div>

          <div className="benchmark-row">
            <span>● Moi Account Management</span>
            <span>Dual-Language Data Systems</span>
            <span>React, Node, Express, MySQL, Fuse</span>
            <span>Tamil phonetic fuzzy algorithm &amp; PIN challenge</span>
            <b>COMPLETED</b>
          </div>

          <div className="benchmark-row">
            <span>● Milk Manager</span>
            <span>Mobile Ledger &amp; Accounting</span>
            <span>Mobile App, Local Embedded SQLite</span>
            <span>Zero dependency local double-entry reconciliation</span>
            <b>COMPLETED</b>
          </div>

          <div className="benchmark-row">
            <span>● BusV8 Campus Tracker</span>
            <span>Real-Time Geospatial Mesh</span>
            <span>React Native, Node, Mongo, 2D Sphere</span>
            <span>Crowdsourced transit mesh without GPS hardware</span>
            <b>COMPLETED</b>
          </div>

        </div>

      </section>

      {/* =====================================
          CORE TECHNICAL PILLARS
      ====================================== */}

      <section className="products-section pillars-section">

        <h2>Core Technical Pillars</h2>

        <div className="pillars-grid">

          {pillars.map((pillar) => (
            <article className="pillar-card" key={pillar.number}>

              <span className="pillar-icon">✣</span>

              <h3>{pillar.title}</h3>

              <p>{pillar.description}</p>

              <small>
                {pillar.index}
              </small>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================
          ENGINEERING PIPELINE
      ====================================== */}

      <section className="products-section pipeline-section">

        <h2>The 7-Step Engineering Pipeline</h2>

        <p className="section-description">
          Our standardized development rigor applied to every laboratory
          initiative.
        </p>

        <div className="pipeline-grid">

          {pipeline.map((step) => (
            <article
              className={`pipeline-card ${
                step.number === "07" ? "pipeline-active" : ""
              }`}
              key={step.number}
            >

              <span>{step.number} / PIPELINE</span>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </article>
          ))}

        </div>

      </section>

      {/* =====================================
          CTA
      ====================================== */}

      <section className="products-cta">

        <h2>
          Have an Idea Worth
          <br />
          Building?
        </h2>

        <p>
          We partner with enterprise teams, deeptech founders, and academic
          institutions to take tough algorithmic theories and convert them
          into hardened physical systems.
        </p>

      </section>

      {/* =====================================
          FOOTER
      ====================================== */}

      <footer className="products-footer">

        <div className="products-footer-brand">

          <img src={footerLogo} alt="Hybotron" />

          <h2>HYBOTRON</h2>

          <p>
            Protecting Life and the
            <br />
            Environment Through
            <br />
            Technology.
          </p>

          <small>• 2026 Hybotron.</small>

        </div>

        <div className="products-footer-column">
          <h3>Company</h3>
          <a href="/about">About</a>
          <a href="/technologies">Technologies</a>
          <a href="/research">Research</a>
          <a href="#careers">Careers</a>
        </div>

        <div className="products-footer-column">
          <h3>Solutions</h3>
          <a href="/products">Softwares</a>
          <a href="/products">Artificial Intelligence</a>
          <a href="/products">Internet of Things</a>
          <a href="/products">Automations</a>
          <a href="/products">UI &amp; UX - Design</a>
        </div>

        <div className="products-footer-column">
          <h3>Resources</h3>
          <a href="#blog">Blog</a>
          <a href="/research">Research</a>
          <a href="#">Projects</a>
          <a href="#documents">Documentations</a>
        </div>

        <div className="products-footer-column">
          <h3>Contact</h3>
          <a href="mailto:hybotron.in@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/hybotron-☆-a559b3424">LinkedIn</a>
          <a href="https://instagram.com/hybotron?dlrf=MTNodjF0a3Brb2U0dg%3D%3D">Instagram</a>
          <a href="https://github.com/Hybotron">GitHub</a>
        </div>

      </footer>

    </div>
  );
}

export default Products;