"use client";

import { useState } from 'react';
import { Menu, X, Pause, Play, Download, MousePointer2, Code2, Layers, Plus } from 'lucide-react';
import ParticleField from './components/ParticleField';
import PortfolioSections from './components/PortfolioSections';

const stages = [
  { name: 'Discover', line: 'Find the right problem.', detail: 'Research, requirements & real human needs.', icon: MousePointer2 },
  { name: 'Design', line: 'Make the complex feel clear.', detail: 'Thoughtful journeys, systems & interfaces.', icon: Layers },
  { name: 'Develop', line: 'Bring every detail to life.', detail: 'Responsive React & Next.js experiences.', icon: Code2 },
];
export default function App() {
  const [menu, setMenu] = useState(false);
  const [stage, setStage] = useState(1);
  const [paused, setPaused] = useState(false);
  const Icon = stages[stage].icon;
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><div className="container nav-inner">
      <a href="#top" className="wordmark" aria-label="Harishan home">harishan<span aria-hidden="true">•</span></a>
      <nav className={menu ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
        {[['Selected work','work'],['Expertise','expertise'],['About me','about']].map(([label,id]) => <a key={id} href={`#${id}`} onClick={() => setMenu(false)}>{label}</a>)}
      </nav>
      <a className="button button-small nav-contact" href="mailto:harishan820@gmail.com">Let’s talk <span className="button-dot" /></a>
      <button className="menu-toggle icon-button" aria-label={menu ? 'Close menu' : 'Open menu'} aria-expanded={menu} onClick={() => setMenu(!menu)}>{menu ? <X size={22} /> : <Menu size={22} />}</button>
    </div></header>
    <main id="main">
      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-glow" />
        <div className="container hero-copy">
          <div><div className="eyebrow"><span className="blue-square" /> HARISHAN RAJENDRAKUMAR <span className="eyebrow-separator">/</span> MBCS</div>
            <h1 id="hero-title"><span>Designing clarity.</span><br />Building<br className="desktop-break" /> <em>what’s next.</em></h1>
          </div>
          <div className="hero-intro"><div className="role-label">LEAD UI/UX ENGINEER</div><p>I connect <strong>design and engineering</strong> to turn complex ideas into digital experiences that just make sense.</p>
            <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Plus size={16} /></a><a className="button button-outline" href="/Harishan-Rajendrakumar-Resume.pdf" download>Get my résumé <Download size={15} /></a></div>
            <div className="location"><span className="location-cross">✳</span> Based in Colombo. Building for the world.</div>
          </div>
        </div>
        <div className="particle-stage">
          <ParticleField mode={stage} paused={paused} />
          <div className="container particle-content"><div className="particle-caption"><span className="mono">FROM POSSIBILITY</span><p>Good ideas.<br /><span>Thoughtfully connected.</span></p></div>
            <div className="particle-end"><span className="mono">TO SOMETHING REAL</span><div className="output-symbol"><Icon strokeWidth={1.2} size={36} /></div></div>
          </div>
          <div className="container stage-bottom"><div className="stage-tabs" aria-label="Explore my process">{stages.map((item,index) => <button key={item.name} aria-pressed={stage === index} className={stage === index ? 'stage-tab active' : 'stage-tab'} onClick={() => setStage(index)}><span>0{index + 1}</span>{item.name}</button>)}</div><p className="stage-description" aria-live="polite">{stages[stage].line}</p><button className="icon-button pause-button" onClick={() => setPaused(!paused)} aria-label={paused ? 'Play particle animation' : 'Pause particle animation'}>{paused ? <Play size={14} /> : <Pause size={14} />}</button></div>
        </div>
        <div className="container hero-footer"><span className="mono">A LITTLE DESIGN. A LITTLE CODE. A LOT OF CURIOSITY.</span><a href="#work" className="scroll-link">SCROLL TO EXPLORE <span className="scroll-line" /></a></div>
      </section>
      <section className="credibility"><div className="container credibility-inner"><p>From first search<br /><strong>to final payment.</strong></p><div><b>5+</b><span>Years building products</span></div><div><b>6</b><span>Consumer travel brands</span></div><div><b>Design <i>×</i> Code</b><span>One connected approach</span></div></div></section>
      <PortfolioSections />
    </main>
  </>;
}
