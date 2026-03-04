import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Makereatu Technology | AI-Powered Infrastructure Advisory',
  description: 'AI-powered advisory for construction governance and infrastructure evaluation. Dunedin, New Zealand.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://makereatu.com',
  },
  openGraph: {
    title: 'Makereatu Technology',
    description: 'AI-powered advisory for construction governance and infrastructure evaluation.',
    type: 'website',
    url: 'https://makereatu.com',
    images: [{ url: 'https://makereatu.com/hero.webp' }],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Makereatu Technology',
  url: 'https://makereatu.com',
  description: 'AI-powered advisory for construction governance and infrastructure evaluation',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Dunedin',
    addressCountry: 'NZ',
  },
  founder: {
    '@type': 'Person',
    name: 'Barry Reid',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
