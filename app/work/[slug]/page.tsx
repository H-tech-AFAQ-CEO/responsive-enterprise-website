import { notFound } from 'next/navigation'
import { Header, Footer } from '@/components/site'
import { projects, getProject } from '@/lib/mock-data'
export function generateStaticParams() { return projects.map((p) => ({ slug: p.slug })) }
export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const project = getProject(slug); if (!project) notFound(); return <><Header /><main><section className="detail-hero container"><span className="eyebrow">{project.category} · {project.year}</span><h1>{project.title}</h1><p className="lede">{project.description}</p></section><div className="detail-image container"><img src={project.image} alt={project.title} /></div><section className="section container detail-content"><div><span className="eyebrow">The outcome</span><h2>{project.result}</h2></div><div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></section></main><Footer /></> }
