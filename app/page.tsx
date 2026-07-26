import Link from "next/link";
import { caseStudies, featuredCaseStudies } from "./case-studies/data";

const capabilities = [
  {
    index: "A",
    title: "Product UI/UX",
    text: "From wireframes and Figma prototypes to design systems and production-ready responsive interfaces.",
    tags: ["Figma", "Prototyping", "Design systems"],
  },
  {
    index: "B",
    title: "Frontend engineering",
    text: "Building polished interfaces in React and Next.js with maintainable component patterns.",
    tags: ["React", "Next.js", "MUI", "Tailwind CSS"],
  },
  {
    index: "C",
    title: "Booking logic",
    text: "Connecting the functional layer through REST and third-party travel API integrations.",
    tags: ["REST APIs", "OTA integrations", "Payments"],
  },
  {
    index: "D",
    title: "UI leadership",
    text: "Setting quality standards, reviewing work, mentoring teammates and owning delivery through launch.",
    tags: ["Team lead", "Mentoring", "Delivery"],
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Harishan Rajendrakumar — home">
          <span>H</span>
          <span>R</span>
        </a>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#about">About</a>
        </nav>
        <a className="header-cta" href="mailto:harishan820@gmail.com">
          Let&apos;s talk
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="status-dot" />
            Lead UI/UX Engineer · Colombo, Sri Lanka
          </div>
          <h1>
            I make complex journeys feel{" "}
            <span className="hero-emphasis">effortless.</span>
          </h1>
          <p className="hero-lede">
            I design and build responsive travel products—from first search to
            final payment—combining product thinking, visual craft and frontend
            engineering.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">
              Explore selected work
              <span aria-hidden="true">↓</span>
            </a>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com/in/hxrishxn/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-proof" aria-label="Career highlights">
            <div>
              <strong>5+</strong>
              <span>Years shaping digital products</span>
            </div>
            <div>
              <strong>6</strong>
              <span>Consumer travel brands</span>
            </div>
            <div>
              <strong>5</strong>
              <span>Booking verticals</span>
            </div>
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract travel booking interface illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="shape shape-blue" />
          <div className="shape shape-coral" />
          <div className="product-window">
            <div className="window-bar">
              <div className="window-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="window-title">booking-flow.v2</span>
              <span className="window-live">LIVE</span>
            </div>
            <div className="window-content">
              <div className="route-line">
                <div>
                  <span className="micro-label">FROM</span>
                  <strong>CMB</strong>
                  <small>Colombo</small>
                </div>
                <div className="route-path">
                  <span />
                  <i>✦</i>
                  <span />
                </div>
                <div>
                  <span className="micro-label">TO</span>
                  <strong>ANY</strong>
                  <small>Good idea</small>
                </div>
              </div>
              <div className="search-row">
                <div>
                  <span className="micro-label">DEPART</span>
                  <strong>12 AUG</strong>
                </div>
                <div>
                  <span className="micro-label">TRAVELLERS</span>
                  <strong>02</strong>
                </div>
                <button type="button" tabIndex={-1} aria-hidden="true">
                  Search
                </button>
              </div>
              <div className="result-card">
                <div className="result-visual">
                  <span>09:40</span>
                  <i />
                  <span>18:20</span>
                </div>
                <div className="result-meta">
                  <span>Recommended journey</span>
                  <strong>Clear by design</strong>
                </div>
                <div className="result-price">
                  <small>from</small>
                  <strong>£648</strong>
                </div>
              </div>
            </div>
          </div>
          <div className="floating-chip chip-top">
            <span>✦</span>
            Product thinking
          </div>
          <div className="floating-chip chip-bottom">
            <span>↗</span>
            Shipped to production
          </div>
          <div className="coordinate coordinate-one">79.8612° E</div>
          <div className="coordinate coordinate-two">06.9271° N</div>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          <span>Booking UX</span><i>✦</i>
          <span>Figma systems</span><i>✦</i>
          <span>React + Next.js</span><i>✦</i>
          <span>Responsive by default</span><i>✦</i>
          <span>Booking UX</span><i>✦</i>
          <span>Figma systems</span><i>✦</i>
          <span>React + Next.js</span><i>✦</i>
          <span>Responsive by default</span><i>✦</i>
        </div>
      </div>

      <section className="work-section section-shell" id="work">
        <div className="section-heading">
          <div>
            <span className="kicker">01 / Selected work</span>
            <h2>Case studies in motion.</h2>
          </div>
          <p>
            Selected projects from a five-year journey improving search,
            discovery and booking experiences across travel products.
          </p>
        </div>

        <div className="case-list">
          {featuredCaseStudies.map((study) => (
            <article
              className={`case-study case-${study.accent}`}
              key={study.title}
            >
              <div className="case-intro">
                <span className="case-number">{study.number}</span>
                <div className="case-title-wrap">
                  <div className="case-meta">
                    <span>{study.category}</span>
                    <span>{study.period}</span>
                  </div>
                  <h3>{study.title}</h3>
                  <p>{study.subtitle}</p>
                  <div className="tag-row">
                    {study.deliverables.slice(0, 4).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="case-preview" aria-hidden="true">
                <div className="mini-window">
                  <div className="mini-bar">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="mini-body">
                    <div className="mini-copy">
                      <i />
                      <i />
                      <i />
                    </div>
                    <div className="mini-form">
                      <span />
                      <span />
                      <span />
                      <b />
                    </div>
                    <div className="mini-cards">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
                <div className="preview-note">RESPONSIVE SYSTEM</div>
              </div>

              <details className="case-details">
                <summary>
                  <span>Quick overview</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <div className="case-detail-grid">
                  <div>
                    <span className="detail-label">The challenge</span>
                    <p>{study.challenge}</p>
                  </div>
                  <div>
                    <span className="detail-label">My contribution</span>
                    <p>{study.contribution}</p>
                  </div>
                  <div className="decision-block">
                    <span className="detail-label">Key design decisions</span>
                    <ol>
                      {study.decisions.map((decision) => (
                        <li key={decision}>{decision}</li>
                      ))}
                    </ol>
                  </div>
                  <div className="outcome-block">
                    <span className="detail-label">Outcome</span>
                    <p>{study.outcome}</p>
                    <Link href={`/case-studies/${study.slug}`}>
                      Read full case study <span aria-hidden="true">↗</span>
                    </Link>
                  </div>
                </div>
              </details>
            </article>
          ))}
        </div>

        <p className="work-note">
          <span>Note</span>
          These case studies describe my design and frontend contributions.
          Live products may have evolved after handoff or later redesigns.
        </p>

        <div className="more-work-heading">
          <span>Complete project archive · {caseStudies.length} case studies</span>
          <span className="line" />
        </div>
        <div className="project-archive-grid">
          {caseStudies.map((study) => (
            <Link
              className={`project-archive-card archive-${study.accent}`}
              href={`/case-studies/${study.slug}`}
              key={study.slug}
            >
              <div className="archive-card-visual">
                {study.heroImage ? (
                  <img src={study.heroImage} alt="" loading="lazy" />
                ) : (
                  <>
                    <span />
                    <i />
                    <b />
                  </>
                )}
                <small>{study.number}</small>
              </div>
              <div className="archive-card-meta">
                <span>{study.category}</span>
                <span>{study.stage}</span>
              </div>
              <h3>{study.title}</h3>
              <p>{study.subtitle}</p>
              <span className="archive-card-link">
                Read case study <i aria-hidden="true">↗</i>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="capabilities-section" id="capabilities">
        <div className="section-shell">
          <div className="section-heading section-heading-light">
            <div>
              <span className="kicker">02 / What I bring</span>
              <h2>Design sense.<br />Engineering discipline.</h2>
            </div>
            <p>
              I work across the boundary between what a product should feel like
              and how it actually ships.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability-card" key={item.title}>
                <span className="cap-index">{item.index}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="cap-tags">
                  {item.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="process-line" aria-label="Product design process">
            {["Understand", "Map", "Design", "Prototype", "Build", "Refine"].map(
              (step, index) => (
                <div key={step}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{step}</strong>
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="about-grid">
          <div className="about-heading">
            <span className="kicker">03 / About</span>
            <h2>Curious enough to explore. Precise enough to ship.</h2>
          </div>
          <div className="about-copy">
            <p className="about-lead">
              I&apos;m Harishan, a Lead UI/UX Engineer who cares about the small
              decisions that make digital products feel obvious, useful and
              well-made.
            </p>
            <p>
              My work is shaped by product design, frontend engineering and a
              fascination with beautifully resolved physical objects—from
              precision cars and modern architecture to the playful controls of
              Teenage Engineering products.
            </p>
            <p>
              That builder mindset started early. At 17, I made a CNC drawing
              robot that translated a digital design into pen strokes and drew
              my school logo on A4 paper. I still work the same way today:
              prototype, learn, improve and build the next version.
            </p>
          </div>
        </div>

        <div className="about-panels">
          <div className="principle-panel">
            <span className="panel-label">A principle I work by</span>
            <blockquote>
              Make the complex understandable—then make it feel inevitable.
            </blockquote>
            <div className="signature">Harishan R.</div>
          </div>
          <div className="interests-panel">
            <span className="panel-label">Off-screen interests</span>
            <div className="interest-cloud">
              <span>IoT</span>
              <span>Cars</span>
              <span>Product design</span>
              <span>Iron Man comics</span>
              <span>Photography</span>
              <span>Modern homes</span>
              <span>Gadgets</span>
              <span>3D design</span>
            </div>
          </div>
        </div>

        <div className="about-evidence-grid">
          <Link className="about-evidence-card" href="/case-studies/drawing-robot">
            <div className="about-evidence-image">
              <img
                src="/media/drawing-robot/hero.jpg"
                alt="Harishan's drawing robot plotting on paper"
                loading="lazy"
              />
            </div>
            <div>
              <span className="panel-label">Builder origin · 2017</span>
              <h3>Failure, calibration, success.</h3>
              <p>
                See the original machine, test footage and final school-crest
                drawing.
              </p>
              <span className="about-evidence-link">Open case study ↗</span>
            </div>
          </Link>
          <Link
            className="about-evidence-card"
            href="/case-studies/society-editorial-design"
          >
            <div className="about-evidence-image about-evidence-image-editorial">
              <img
                src="/media/early-design/refraction-poster.jpg"
                alt="Refraction 2017 photography competition poster"
                loading="lazy"
              />
            </div>
            <div>
              <span className="panel-label">Visual roots · 2017</span>
              <h3>Design before product design.</h3>
              <p>
                Early editorial and event work that developed my eye for
                hierarchy and visual systems.
              </p>
              <span className="about-evidence-link">Open case study ↗</span>
            </div>
          </Link>
        </div>
      </section>

      <section className="experience-section section-shell" id="experience">
        <div className="section-heading">
          <div>
            <span className="kicker">04 / Experience</span>
            <h2>Built through doing.</h2>
          </div>
          <p>
            Five years of hands-on product work, design ownership and team
            leadership inside a multi-brand travel group.
          </p>
        </div>
        <div className="timeline">
          <div className="timeline-row">
            <div className="timeline-date">MAR 2021 — NOW</div>
            <div className="timeline-role">
              <h3>Lead UI/UX Engineer</h3>
              <p>Techneapp UK / Scripterlab Sri Lanka</p>
              <span>In-house product team for Vibes Group UK</span>
            </div>
            <div className="timeline-summary">
              <p>
                Owning responsive UI quality and frontend delivery across
                travel brands, booking products and iterative redesigns.
              </p>
              <ul>
                <li>Lead product UI and frontend delivery</li>
                <li>Interview, onboard and mentor teammates</li>
                <li>Integrate REST and third-party OTA APIs</li>
              </ul>
            </div>
          </div>
          <div className="timeline-row education-row">
            <div className="timeline-date">EDUCATION</div>
            <div className="timeline-role">
              <h3>BCS HEQ</h3>
              <p>The Chartered Institute for IT</p>
              <span>Required examinations completed</span>
            </div>
            <div className="timeline-summary">
              <p>
                Continuing to grow beyond interface design into full-stack
                product development and broader digital and physical design.
              </p>
              <div className="learning-tags">
                <span>MERN stack</span>
                <span>Backend fundamentals</span>
                <span>Web performance</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="contact-shape contact-shape-one" />
        <div className="contact-shape contact-shape-two" />
        <div className="section-shell contact-inner">
          <span className="kicker">05 / Start a conversation</span>
          <h2>
            Have a complex product?
            <br />
            Let&apos;s make it feel simple.
          </h2>
          <p>
            I&apos;m interested in ambitious product teams, thoughtful UI systems
            and opportunities that stretch design into new territory.
          </p>
          <div className="contact-actions">
            <a className="button button-dark" href="mailto:harishan820@gmail.com">
              Email Harishan
              <span aria-hidden="true">↗</span>
            </a>
            <a
              className="button button-ghost"
              href="https://www.linkedin.com/in/hxrishxn/"
              target="_blank"
              rel="noreferrer"
            >
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand-mark brand-mark-footer" href="#top" aria-label="Back to top">
          <span>H</span>
          <span>R</span>
        </a>
        <p>Designed around clarity. Built with curiosity.</p>
        <div>
          <span>Colombo, Sri Lanka</span>
          <span>© {new Date().getFullYear()} Harishan Rajendrakumar</span>
        </div>
      </footer>
    </main>
  );
}
