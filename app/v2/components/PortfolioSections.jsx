import { useState } from 'react';
import { Plus, Minus, MousePointer2, Code2, Workflow, Users, Copy, Check, Github, Linkedin, Mail, Download, Globe } from 'lucide-react';
import { projects, archive, expertise, experience } from '../data';
import ProjectDialog from './ProjectDialog';

const expertiseIcons = [MousePointer2, Code2, Workflow, Users];

export default function PortfolioSections() {
  const [project, setProject] = useState(null);
  const [showArchive, setShowArchive] = useState(false);
  const [skill, setSkill] = useState(0);
  const [copyState, setCopyState] = useState('idle');
  const ActiveIcon = expertiseIcons[skill];
  async function copyEmail() {
    try { await navigator.clipboard.writeText('harishan820@gmail.com'); setCopyState('copied'); }
    catch { setCopyState('failed'); }
  }
  return <>
    <section className="section container" id="work">
      <div className="eyebrow"><span className="blue-square" /> 01 / SELECTED WORK</div>
      <div className="section-heading"><h2>Real products.<br /><span>Thoughtful experiences.</span></h2><p>Turning complex travel journeys into clear,<br className="wide-only" /> intuitive experiences — from idea to launch.</p></div>
      <div className="project-grid">{projects.map((item,index) => <article className={`project-card project-${item.color} ${index === 0 ? 'project-featured' : ''}`} key={item.id}>
        <button className="project-visual" onClick={() => setProject(item)} aria-label={`View ${item.title} case study`}>
          <span className="visual-meta mono">{index === 0 ? 'FROM CONCEPT TO LAUNCH' : item.category}</span>
          <div className="browser-frame"><div className="browser-toolbar"><span /><span /><span /><div>{new URL(item.url).hostname}</div><Globe size={9} /></div><img src={`/images/${item.image}`} alt={`${item.title} homepage`} loading="lazy" width="1280" height="720" /></div>
          <span className="project-open"><Plus size={20} /></span>
          <span className="visual-index mono">0{index + 1} / 03</span>
        </button>
        <div className="project-info"><div className="project-kicker mono"><span>0{index + 1}</span>{item.category}</div><h3><button onClick={() => setProject(item)}>{item.title}</button></h3><p>{item.description}</p><div className="tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>{index === 0 && <button className="text-button" onClick={() => setProject(item)}>Explore the case study <Plus size={15} /></button>}</div>
      </article>)}</div>
      <div className="archive-toolbar"><p>More projects. More perspectives.</p><button className="button button-outline" aria-expanded={showArchive} aria-controls="project-archive" onClick={() => setShowArchive(!showArchive)}>{showArchive ? 'Close project archive' : 'Explore all 14 projects'}{showArchive ? <Minus size={16} /> : <Plus size={16} />}</button></div>
      <div id="project-archive" hidden={!showArchive} className="project-archive">{archive.map(([title,slug,type],index) => <a key={slug} href={`/case-studies/${slug}/`}><span className="mono">{String(index+4).padStart(2,'0')}</span><div><h3>{title}</h3><p>{type}</p></div><Plus size={16} /></a>)}</div>
    </section>

    <section className="expertise-section" id="expertise"><div className="container section">
      <div className="eyebrow"><span className="blue-square" /> 02 / WHAT I BRING</div>
      <div className="section-heading"><h2>Design sense.<br /><span>Engineering discipline.</span></h2><p>One perspective across the entire product.<br className="wide-only" /> From the first question to the final interaction.</p></div>
      <div className="expertise-layout"><div className="expertise-list" aria-label="Explore areas of expertise">{expertise.map((item,index) => { const Icon = expertiseIcons[index]; return <button key={item.title} className={`expertise-option ${skill === index ? 'selected' : ''}`} onClick={() => setSkill(index)} aria-pressed={skill === index} aria-controls="expertise-panel"><span className="mono">0{index + 1}</span><span>{item.title}</span><Icon size={20} strokeWidth={1.4} /></button>; })}</div>
        <div className="expertise-panel" id="expertise-panel" aria-live="polite"><div className="expertise-panel-top"><span className="mono">THE WAY I WORK</span><ActiveIcon size={29} strokeWidth={1.25} /></div><h3>{expertise[skill].subtitle}</h3><p>{expertise[skill].text}</p><div className="tags">{expertise[skill].skills.map(tag => <span key={tag}>{tag}</span>)}</div><div className="expertise-panel-bottom"><span className="blue-square" /><code>{expertise[skill].code}</code></div></div>
      </div>
      <div className="tools-line"><span className="mono">MY EVERYDAY TOOLKIT</span><div><span className="tool-figma">Figma</span><span>React</span><span>Next.js</span><span>JavaScript</span><span>Tailwind CSS</span><span>Git</span></div></div>
    </div></section>

    <section className="section container about-section" id="about"><div className="eyebrow"><span className="blue-square" /> 03 / THE PERSON BEHIND THE PIXELS</div>
      <div className="about-layout"><div className="about-portrait"><img src="/media/portrait/harishan-portrait.jpg" alt="Harishan Rajendrakumar" loading="lazy" width="650" height="800" /><div className="portrait-caption"><span>Harishan Rajendrakumar</span><span className="mono">DESIGNER. ENGINEER. ALWAYS CURIOUS.</span></div><span className="portrait-corner mono">BASED IN<br />COLOMBO, SRI LANKA</span></div>
      <div className="about-copy"><h2>Curious enough to explore.<br /><span>Precise enough to ship.</span></h2><p className="about-lead">I’m Harishan, a Lead UI/UX Engineer who believes the best digital experiences happen when design and engineering think together.</p><p>For over five years, I’ve been shaping travel products for UK audiences — untangling complex booking journeys, building design systems and bringing them to life in React and Next.js.</p><p>That builder mindset started early. At 17, I made a CNC drawing robot that turned digital designs into pen strokes. The tools have changed. The curiosity hasn’t.</p><div className="about-interests"><span className="mono">BEYOND THE SCREEN</span><div>Product design <span>·</span> IoT & gadgets <span>·</span> Cars<br />Photography <span>·</span> Architecture <span>·</span> 3D design</div></div><a className="text-button" href="/Harishan-Rajendrakumar-Resume.pdf" download>More about my journey <Download size={16} /></a></div></div>
    </section>

    <section className="experience-section"><div className="container section"><div className="eyebrow"><span className="blue-square" /> 04 / BUILT THROUGH DOING</div><div className="experience-layout"><div className="experience-intro"><h2>Growing through<br /><span>every iteration.</span></h2><p>From building my first interface to leading product experiences and the teams behind them.</p><div className="company-label"><div className="company-icon">s.</div><div><strong>Techneapp UK / Scripterlab</strong><span>In-house technology team, Vibes Group UK</span></div></div></div><div className="experience-list">{experience.map((item,index) => <details className="experience-row" key={item.title} open={index === 0 ? true : undefined}><summary><span className="experience-marker" /><div><span className="mono">{item.date}</span><h3>{item.title}</h3></div><Plus size={18} /></summary><p>{item.text}</p></details>)}<details className="experience-row earlier"><summary><span className="experience-marker" /><div><span className="mono">SEP 2019 — JAN 2020</span><h3>Software Developer Intern</h3><span className="earlier-company">Matrix Total Enterprise Solutions</span></div><Plus size={18} /></summary><p>Designed and developed an internal student portal, including membership, records and project review workflows, in collaboration with a backend developer.</p></details></div></div><div className="qualification-row"><span className="qualification-mark">BCS</span><div><strong>Professional Member <span className="mbcs">MBCS</span></strong><p>The Chartered Institute for IT · Member since 2026</p></div><div className="qualification-education"><strong>Professional Graduate Diploma in IT</strong><p>BCS · Qualified by examination</p></div></div></div></section>

    <section className="contact-section" id="contact"><div className="contact-dots" /><div className="container"><div className="eyebrow"><span className="blue-square" /> 05 / THE NEXT GOOD THING STARTS WITH A CONVERSATION</div><div className="contact-layout"><h2>Have something<br />in mind?<br /><span>Let’s make it real.</span></h2><div className="contact-copy"><p>A thoughtful product. A complex challenge.<br />A team that cares about the details.<br /><strong>I’d love to hear about it.</strong></p><a className="button button-primary" href="mailto:harishan820@gmail.com">Let’s talk <Mail size={17} /></a><div className="email-copy"><a href="mailto:harishan820@gmail.com">harishan820@gmail.com</a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copyState === 'copied' ? <Check size={14} /> : <Copy size={14} />}</button></div><span className="copy-status" role="status">{copyState === 'copied' ? 'Email address copied.' : copyState === 'failed' ? 'Please select and copy the email address above.' : ''}</span></div></div></div></section>
    <footer className="site-footer"><div className="container footer-top"><a href="#top" className="wordmark" aria-label="Back to top">harishan<span aria-hidden="true">•</span></a><span>Designed with intention. Built with curiosity.</span><div className="social-links"><a href="https://www.linkedin.com/in/hxrishxn/" target="_blank" rel="noreferrer" aria-label="Harishan on LinkedIn"><Linkedin size={17} /></a><a href="https://github.com/harishan15" target="_blank" rel="noreferrer" aria-label="Harishan on GitHub"><Github size={18} /></a><a href="mailto:harishan820@gmail.com" aria-label="Email Harishan"><Mail size={18} /></a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Harishan Rajendrakumar</span><span>COLOMBO, SRI LANKA <span className="footer-asterisk">✳</span></span><a href="#top">BACK TO TOP</a></div></footer>
    <ProjectDialog project={project} onClose={() => setProject(null)} />
  </>;
}
