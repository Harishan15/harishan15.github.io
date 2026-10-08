import { useEffect, useRef } from 'react';
import { X, Globe } from 'lucide-react';

export default function ProjectDialog({ project, onClose }) {
  const ref = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = ref.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, [project]);
  return <dialog ref={ref} className="project-dialog" aria-labelledby="project-title" onCancel={onClose} onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
    {project && <div className="dialog-content">
      <div className="dialog-top"><span className="eyebrow">SELECTED WORK / {project.category}</span><button className="icon-button" onClick={onClose} aria-label="Close project details" autoFocus><X size={19} /></button></div>
      <h2 id="project-title">{project.title}</h2><p className="dialog-subtitle">{project.subtitle}</p>
      <img className="dialog-image" src={`/images/${project.image}`} alt={`${project.title} live website homepage`} />
      <div className="dialog-meta"><div><span>MY ROLE</span><p>{project.role}</p></div><div><span>SCOPE</span><p>{project.scope}</p></div></div>
      <div className="dialog-section"><span className="mono">01 / THE CHALLENGE</span><p>{project.challenge}</p></div>
      <div className="dialog-section"><span className="mono">02 / MY CONTRIBUTION</span><p>{project.contribution}</p><ul>{project.decisions.map(decision => <li key={decision}>{decision}</li>)}</ul></div>
      <div className="dialog-section"><span className="mono">03 / THE OUTCOME</span><p>{project.outcome}</p></div>
      <p className="project-note">Homepage captured from the live product in October 2026. The product may include contributions and refinements by the wider team.</p>
      <div className="dialog-actions"><a className="button button-primary" href={`/case-studies/${project.id}/`}>Read full case study</a><a className="button button-outline" href={project.url} target="_blank" rel="noreferrer"><Globe size={15} /> Visit live product</a></div>
    </div>}
  </dialog>;
}
