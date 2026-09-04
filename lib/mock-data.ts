export const projects = [
  { slug: 'northstar-finance', title: 'Northstar Finance', category: 'Digital product', year: '2024', description: 'A calmer way for modern teams to see, plan, and grow their money.', image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1400&q=85', tags: ['Strategy', 'Product design', 'Development'], result: 'A 42% lift in qualified demo requests after launch.' },
  { slug: 'atelier-objects', title: 'Atelier Objects', category: 'E-commerce', year: '2024', description: 'An editorial storefront for objects made slowly and built to last.', image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85', tags: ['Brand identity', 'Web design', 'Shopify'], result: '2.4× increase in average order value in the first quarter.' },
  { slug: 'field-notes', title: 'Field Notes', category: 'Editorial platform', year: '2023', description: 'A living archive for the people building a more thoughtful internet.', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=85', tags: ['Art direction', 'UX strategy', 'Development'], result: 'Over 18k readers joined the first month.' },
  { slug: 'kinfolk-health', title: 'Kinfolk Health', category: 'Healthcare', year: '2023', description: 'A human-centered digital experience for a new kind of care.', image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1400&q=85', tags: ['Research', 'Design system', 'Build'], result: 'Reduced booking friction by 31% across mobile.' },
]

export const articles = [
  { slug: 'designing-for-momentum', title: 'Designing for momentum, not applause', category: 'Process', date: 'August 12, 2024', readTime: '6 min read', excerpt: 'The best digital experiences make the next right action feel obvious.', image: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'a-small-guide-to-good-briefs', title: 'A small guide to writing good briefs', category: 'Strategy', date: 'July 28, 2024', readTime: '4 min read', excerpt: 'Clear thinking at the start saves everyone from clever work in the wrong direction.', image: 'https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=1200&q=85' },
  { slug: 'the-case-for-less', title: 'The case for less, thoughtfully applied', category: 'Perspective', date: 'June 04, 2024', readTime: '8 min read', excerpt: 'Restraint is not the absence of ideas. It is knowing which ones deserve the room.', image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85' },
]

export const services = [
  { number: '01', title: 'Strategy', body: 'Positioning, research, and a clear plan for what your product needs to become.' },
  { number: '02', title: 'Identity', body: 'Distinctive visual systems that make your value legible and your work memorable.' },
  { number: '03', title: 'Digital', body: 'Websites and products that turn thoughtful design into measurable momentum.' },
]

export const testimonials = [
  { quote: 'Afaq brought the rare combination of strategic clarity and impeccable craft. We felt understood from day one.', name: 'Maya Chen', role: 'Founder, Northstar' },
  { quote: 'The new site feels exactly like our company: warm, ambitious, and quietly confident.', name: 'Jon Bell', role: 'Creative Director, Atelier' },
]

export const navItems = [{ href: '/about', label: 'About' }, { href: '/services', label: 'Services' }, { href: '/work', label: 'Work' }, { href: '/blog', label: 'Journal' }]

export function getProject(slug: string) { return projects.find((project) => project.slug === slug) }
export function getArticle(slug: string) { return articles.find((article) => article.slug === slug) }
