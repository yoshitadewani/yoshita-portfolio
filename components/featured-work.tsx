'use client'

import { useState } from 'react'
import { X } from 'lucide-react'
import { projectCategories, projects, type PortfolioProject } from '@/lib/portfolio-data'

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selected, setSelected] = useState<PortfolioProject | null>(null)
  const visibleProjects = activeCategory === 'All' ? projects : projects.filter((project) => project.category === activeCategory)
  return <section id="work" className="work-section section-pad"><div className="container"><div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>A visual language<br /><em>with a point of view.</em></h2></div><p className="section-intro">A collection of identity, campaign, poster, and presentation work made to give ideas a memorable shape.</p></div><div className="filter-row" role="tablist" aria-label="Filter projects">{projectCategories.map((category) => <button key={category} type="button" className={activeCategory === category ? 'filter-button active' : 'filter-button'} onClick={() => setActiveCategory(category)} aria-selected={activeCategory === category} role="tab">{category}</button>)}</div><div className="project-grid">{visibleProjects.map((project, index) => <button key={project.id} className={`project-card project-card-${index + 1}`} type="button" onClick={() => setSelected(project)} aria-label={`View ${project.title} project`}><span className="project-image"><img src={project.images[0]} alt="" /></span><span className="project-meta"><span><strong>{project.title}</strong><small>{project.client}</small></span><span>{project.category} · {project.year}</span></span></button>)}</div></div>{selected && <ProjectDialog project={selected} onClose={() => setSelected(null)} />}</section>
}

function ProjectDialog({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  return <div className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="project-title" onClick={onClose}><div className="dialog-panel" onClick={(event) => event.stopPropagation()}><button className="dialog-close" type="button" onClick={onClose} aria-label="Close project"><X /></button><div className="dialog-copy"><p className="eyebrow">{project.category} · {project.year}</p><h2 id="project-title">{project.title}</h2><p>{project.description}</p><span className="dialog-client">{project.client}</span></div><div className="dialog-images">{project.images.map((image, index) => <img key={image} src={image} alt={`${project.title} artwork ${index + 1}`} />)}</div></div></div>
}
