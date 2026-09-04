import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title: { default: 'Afaq Ahmad — Independent Designer & Developer', template: '%s — Afaq Ahmad' }, description: 'Afaq Ahmad is an independent designer and developer helping ambitious teams make useful, beautiful digital experiences.', authors: [{ name: 'Afaq Ahmad' }], creator: 'Afaq Ahmad', metadataBase: new URL('https://afaqahmad.dev'), icons: { icon: '/icon.svg' }, openGraph: { title: 'Afaq Ahmad — Independent Designer & Developer', description: 'Thoughtful digital experiences for ambitious teams.', type: 'website' } }
export const viewport: Viewport = { colorScheme: 'light', themeColor: '#f4f2ed' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className="bg-background"><body className="antialiased">{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html> }
