import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { caseStudies, getCaseStudy } from "@/app/case-studies/data";
import { withBasePath } from "@/app/site-paths";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return caseStudies.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = getCaseStudy((await params).slug);
  if (!study) return {};
  return { title: `${study.title} case study — Harishan Rajendrakumar`, description: study.subtitle, openGraph: { title: `${study.title} case study`, description: study.subtitle, type: "article" } };
}

const screenshots: Record<string, string> = {
  "world-cruise-vibes": "/images/world-cruise-vibes.jpg",
  "world-holiday-vibes": "/images/world-holiday-vibes.jpg",
  "sri-lanka-holiday-vibes": "/images/sri-lanka-holiday-vibes.jpg",
};

export default async function CaseStudyPage({ params }: Props) {
  const study = getCaseStudy((await params).slug);
  if (!study) notFound();
  const index = caseStudies.findIndex(item => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const image = screenshots[study.slug] ?? study.heroImage;
  return <>
    <a className="skip-link" href="#case-main">Skip to case study</a>
    <header className="site-header case-header"><div className="container nav-inner">
      <a href={withBasePath('/')} className="wordmark" aria-label="Harishan home">harishan<span aria-hidden="true">•</span></a>
      <nav className="case-nav" aria-label="Main navigation"><a href={withBasePath('/#work')}>All work</a><a href={withBasePath('/#expertise')}>Expertise</a><a href={withBasePath('/#about')}>About me</a></nav>
      <a className="button button-small" href="mailto:harishan820@gmail.com">Let’s talk <span className="button-dot" /></a>
    </div></header>
    <main id="case-main" className="new-case-page">
      <section className="container case-introduction">
        <a className="case-back" href={withBasePath('/#work')}>All selected work</a>
        <div className="eyebrow"><span className="blue-square" /> CASE {study.number} / {study.category.toUpperCase()}</div>
        <div className="case-heading"><h1>{study.title}</h1><p>{study.subtitle}</p></div>
        <div className="case-facts-new"><div><span>MY ROLE</span><p>{study.role}</p></div><div><span>PERIOD</span><p>{study.period}</p></div><div><span>PROJECT STATUS</span><p>{study.stage}</p></div></div>
        {image && <figure className={`case-feature-image ${study.heroImage ? 'archive-image' : ''}`}><img src={withBasePath(image)} alt={study.heroImageAlt ?? `${study.title} homepage`} /><figcaption>{screenshots[study.slug] ? 'Live product, October 2026. Includes ongoing contributions from the wider team.' : `${study.title} — original project material`}</figcaption></figure>}
      </section>
      <section className="container case-overview-new"><span className="eyebrow">THE BIG PICTURE</span><p>{study.overview}</p></section>
      <section className="case-story-band"><div className="container case-story-columns"><article><span className="eyebrow"><span className="blue-square" /> 01 / THE CHALLENGE</span><h2>Finding<br /><span>the right problem.</span></h2><p>{study.challenge}</p></article><article><span className="eyebrow"><span className="blue-square" /> 02 / MY CONTRIBUTION</span><h2>Making<br /><span>the pieces connect.</span></h2><p>{study.contribution}</p></article></div></section>
      <section className="container section case-decisions-new"><div><span className="eyebrow">03 / KEY DECISIONS</span><h2>Intent behind<br /><span>every detail.</span></h2></div><ol>{study.decisions.map((decision,i) => <li key={decision}><span className="mono">{String(i+1).padStart(2,'0')}</span><p>{decision}</p></li>)}</ol></section>
      {study.media && <section className="case-evidence-band"><div className="container section"><span className="eyebrow"><span className="blue-square" /> 04 / PROJECT EVIDENCE</span><h2>The process.<br /><span>The work. The result.</span></h2><div className="case-evidence-grid">{study.media.map((item,i) => <figure key={item.src} className={item.kind === 'video' ? 'evidence-video' : ''}>{item.kind === 'video' ? <video controls playsInline preload="metadata" poster={withBasePath(item.poster)} aria-label={item.alt}><source src={withBasePath(item.src)} type="video/mp4" />Your browser does not support embedded video.</video> : <img src={withBasePath(item.src)} alt={item.alt} loading="lazy" />}<figcaption><span className="mono">{String(i+1).padStart(2,'0')}</span><p>{item.caption}</p></figcaption></figure>)}</div></div></section>}
      <section className="container section case-outcome-new"><div><span className="eyebrow">THE OUTCOME</span><h2>What the work<br /><span>made possible.</span></h2><p>{study.outcome}</p></div><blockquote><span className="eyebrow">WHAT I TOOK AWAY</span>{study.learning}</blockquote></section>
      <section className="container case-delivery-new"><div><span className="eyebrow">TOOLS & TECHNOLOGY</span><div className="tags">{study.tools.map(tool => <span key={tool}>{tool}</span>)}</div></div><div><span className="eyebrow">DELIVERABLES</span><ul>{study.deliverables.map(item => <li key={item}>{item}</li>)}</ul></div></section>
      <div className="container case-context">{study.note && <p>{study.note}</p>}{study.liveUrl && <a className="button button-outline" href={study.liveUrl} target="_blank" rel="noreferrer">Visit live product</a>}</div>
      <a className="case-next" href={withBasePath(`/case-studies/${next.slug}/`)}><div className="container"><span className="eyebrow">KEEP EXPLORING / NEXT CASE STUDY</span><h2>{next.title}<span aria-hidden="true">+</span></h2></div></a>
    </main>
    <footer className="site-footer"><div className="container footer-top"><a className="wordmark" href={withBasePath('/')}>harishan<span aria-hidden="true">•</span></a><span>Designed with intention. Built with curiosity.</span><a href="mailto:harishan820@gmail.com">Let’s talk</a></div></footer>
  </>;
}
