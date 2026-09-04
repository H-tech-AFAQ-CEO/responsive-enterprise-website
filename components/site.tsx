'use client'

import Link from 'next/link'
import { useState } from 'react'
import { ArrowUpRight, Menu, X, Check } from 'lucide-react'
import { navItems, projects, articles } from '@/lib/mock-data'

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><div className="container header-inner"><Link className="logo" href="/" onClick={() => setOpen(false)}>AA<span>.</span></Link><nav className="desktop-nav">{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link className="nav-cta" href="/contact">Let&apos;s talk <ArrowUpRight size={15} /></Link></nav><button className="menu-button" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button></div>{open && <nav className="mobile-nav">{navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>)}<Link href="/contact" onClick={() => setOpen(false)}>Let&apos;s talk <ArrowUpRight size={15} /></Link></nav>}</header>
}

export function Footer() { return <footer className="footer"><div className="container footer-grid"><div><Link className="logo" href="/">AA<span>.</span></Link><p className="footer-note">Independent designer & developer<br />building useful, beautiful things.</p></div><div className="footer-links"><span className="eyebrow">Explore</span>{navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}</div><div className="footer-links"><span className="eyebrow">Connect</span><a href="mailto:hello@afaqahmad.dev">Email</a><a href="#">LinkedIn</a><a href="#">Instagram</a></div><div className="footer-end"><span>© 2024 Afaq Ahmad</span><span>Made with intent.</span></div></div></footer> }

export function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) { return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{body && <p>{body}</p>}</div> }

export function ProjectCard({ project, featured = false }: { project: typeof projects[number]; featured?: boolean }) { return <Link href={`/work/${project.slug}`} className={`project-card ${featured ? 'featured' : ''}`}><div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span className="project-arrow"><ArrowUpRight size={18} /></span></div><div className="project-meta"><div><h3>{project.title}</h3><p>{project.description}</p></div><span>{project.category} · {project.year}</span></div></Link> }

export function ArticleCard({ article }: { article: typeof articles[number] }) { return <Link href={`/blog/${article.slug}`} className="article-card"><img src={article.image} alt="" loading="lazy" /><div className="article-copy"><span className="eyebrow">{article.category} · {article.readTime}</span><h3>{article.title}</h3><p>{article.excerpt}</p><span className="read-link">Read article <ArrowUpRight size={15} /></span></div></Link> }

export function ContactForm() { const [sent, setSent] = useState(false); if (sent) return <div className="success-box"><Check size={26} /><h3>Thanks for reaching out.</h3><p>Your note is saved in this demo. In production, it will be routed directly to Afaq&apos;s inbox.</p><button className="text-button" onClick={() => setSent(false)}>Send another note</button></div>; return <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setSent(true) }}><label>Name<input required name="name" placeholder="Your name" /></label><label>Email<input required type="email" name="email" placeholder="you@company.com" /></label><label>What can I help with?<textarea required name="message" rows={5} placeholder="Tell me a little about your project..." /></label><button className="button dark" type="submit">Send inquiry <ArrowUpRight size={16} /></button><small>Demo form · email delivery will be connected before launch.</small></form> }
