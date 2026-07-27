import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { withBasePath } from "../../site-paths";
import { caseStudies, getCaseStudy } from "../data";

type CaseStudyPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({
  params,
}: CaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {};
  }

  return {
    title: `${study.title} case study — Harishan Rajendrakumar`,
    description: study.subtitle,
    openGraph: {
      title: `${study.title} case study`,
      description: study.subtitle,
      type: "article",
    },
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((item) => item.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];

  return (
    <main className={`case-page accent-${study.accent}`}>
      <header className="site-header">
        <Link
          className="brand-mark"
          href="/"
          aria-label="Harishan Rajendrakumar — portfolio home"
        >
          <span>H</span>
          <span>R</span>
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/#work">All work</Link>
          <Link href="/#capabilities">Capabilities</Link>
          <Link href="/#about">About</Link>
        </nav>
        <a className="header-cta" href="mailto:harishan820@gmail.com">
          Let&apos;s talk
          <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="case-page-hero section-shell">
        <Link className="case-back-link" href="/#work">
          <span aria-hidden="true">←</span>
          All case studies
        </Link>
        <div className="case-page-heading">
          <div>
            <div className="eyebrow">
              <span className="case-index-pill">{study.number}</span>
              {study.category} · {study.stage}
            </div>
            <h1>{study.title}</h1>
            <p>{study.subtitle}</p>
          </div>
          <div className="case-page-stamp" aria-hidden="true">
            <span>CASE</span>
            <strong>{study.number}</strong>
            <i>STUDY</i>
          </div>
        </div>

        {study.heroImage ? (
          <figure className="case-hero-image">
            <img
              src={withBasePath(study.heroImage)}
              alt={study.heroImageAlt ?? ""}
            />
            <figcaption>
              <span>Project evidence</span>
              <span>{study.period}</span>
            </figcaption>
          </figure>
        ) : (
          <div className="case-product-canvas" aria-label={`${study.title} interface study`}>
            <div className="canvas-grid" />
            <div className="canvas-orbit" />
            <div className="canvas-shape canvas-shape-one" />
            <div className="canvas-shape canvas-shape-two" />
            <div className="canvas-browser">
              <div className="canvas-browser-bar">
                <div>
                  <span />
                  <span />
                  <span />
                </div>
                <small>{study.slug}.product</small>
                <b>UI SYSTEM</b>
              </div>
              <div className="canvas-browser-body">
                <div className="canvas-copy">
                  <span>{study.category}</span>
                  <i />
                  <i />
                </div>
                <div className="canvas-search">
                  <span />
                  <span />
                  <span />
                  <b />
                </div>
                <div className="canvas-results">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      <section className="case-overview section-shell">
        <div className="case-overview-copy">
          <span className="kicker">Overview</span>
          <p>{study.overview}</p>
        </div>
        <dl className="case-facts">
          <div>
            <dt>Category</dt>
            <dd>{study.category}</dd>
          </div>
          <div>
            <dt>Period</dt>
            <dd>{study.period}</dd>
          </div>
          <div>
            <dt>Status</dt>
            <dd>{study.stage}</dd>
          </div>
          <div>
            <dt>Role</dt>
            <dd>{study.role}</dd>
          </div>
        </dl>
      </section>

      <section className="case-story-section">
        <div className="section-shell case-story-grid">
          <article>
            <span className="case-story-number">01</span>
            <span className="kicker">The challenge</span>
            <h2>What needed to become clearer.</h2>
            <p>{study.challenge}</p>
          </article>
          <article>
            <span className="case-story-number">02</span>
            <span className="kicker">My contribution</span>
            <h2>Where I shaped the product.</h2>
            <p>{study.contribution}</p>
          </article>
        </div>
      </section>

      <section className="case-decisions section-shell">
        <div className="case-section-heading">
          <div>
            <span className="kicker">Key decisions</span>
            <h2>Designing the system, not just the screen.</h2>
          </div>
          <p>
            The most useful case-study evidence is the reasoning behind the
            interface—not a gallery without context.
          </p>
        </div>
        <ol className="case-decision-list">
          {study.decisions.map((decision, index) => (
            <li key={decision}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{decision}</p>
            </li>
          ))}
        </ol>
      </section>

      {study.media && study.media.length > 0 && (
        <section className="case-media-section">
          <div className="section-shell">
            <div className="case-section-heading case-section-heading-light">
              <div>
                <span className="kicker">Project evidence</span>
                <h2>The work, the process and the result.</h2>
              </div>
              <p>
                Original archive material from the supplied portfolio media.
              </p>
            </div>
            <div className="case-media-grid">
              {study.media.map((item, index) => (
                <figure
                  className={`case-media-item ${
                    index === 0 || item.kind === "video" ? "case-media-wide" : ""
                  }`}
                  key={`${item.src}-${index}`}
                >
                  {item.kind === "image" ? (
                    <img
                      src={withBasePath(item.src)}
                      alt={item.alt}
                      loading="lazy"
                    />
                  ) : (
                    <video
                      controls
                      playsInline
                      preload="metadata"
                      poster={withBasePath(item.poster)}
                      aria-label={item.alt}
                    >
                      <source src={withBasePath(item.src)} type="video/mp4" />
                      Your browser does not support embedded video.
                    </video>
                  )}
                  <figcaption>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item.caption}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="case-result-section section-shell">
        <div className="case-result-card">
          <span className="kicker">Outcome</span>
          <h2>What the work established.</h2>
          <p>{study.outcome}</p>
        </div>
        <div className="case-learning-card">
          <span className="kicker">Reflection</span>
          <blockquote>{study.learning}</blockquote>
        </div>
      </section>

      <section className="case-delivery section-shell">
        <div>
          <span className="kicker">Tools &amp; technology</span>
          <div className="case-chip-list">
            {study.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        </div>
        <div>
          <span className="kicker">Deliverables</span>
          <ul>
            {study.deliverables.map((deliverable) => (
              <li key={deliverable}>{deliverable}</li>
            ))}
          </ul>
        </div>
      </section>

      {(study.note || study.liveUrl) && (
        <aside className="case-context-note section-shell">
          {study.note && <p>{study.note}</p>}
          {study.liveUrl && (
            <a href={study.liveUrl} target="_blank" rel="noreferrer">
              Visit product for context <span aria-hidden="true">↗</span>
            </a>
          )}
        </aside>
      )}

      <section className="next-case">
        <div className="section-shell">
          <span className="kicker">Next case study</span>
          <Link href={`/case-studies/${nextStudy.slug}`}>
            <span>{nextStudy.title}</span>
            <i aria-hidden="true">↗</i>
          </Link>
        </div>
      </section>

      <footer className="site-footer">
        <Link className="brand-mark brand-mark-footer" href="/" aria-label="Portfolio home">
          <span>H</span>
          <span>R</span>
        </Link>
        <p>Designed around clarity. Built with curiosity.</p>
        <div>
          <span>Colombo, Sri Lanka</span>
          <span>© {new Date().getFullYear()} Harishan Rajendrakumar</span>
        </div>
      </footer>
    </main>
  );
}
