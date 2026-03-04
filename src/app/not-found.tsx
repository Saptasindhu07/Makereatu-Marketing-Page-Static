import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-center">
      {/* Wordmark */}
      <p className="font-sans font-bold tracking-[0.3em] mb-2"
         style={{ fontSize: '28px', color: '#2D3436' }}>
        <span style={{ color: '#2D3436' }}>MAKERE</span>
        <span style={{ color: '#4A7C59' }}>ATU</span>
      </p>
      <p className="font-sans tracking-[0.3em] mb-10"
         style={{ fontSize: '13px', color: '#636E72', fontWeight: 400 }}>
        TECHNOLOGY
      </p>

      <p className="font-sans mb-8" style={{ fontSize: '16px', color: '#636E72' }}>
        Page not found.
      </p>

      <Link
        href="/"
        className="font-sans text-olivine transition-all duration-200 hover:underline"
        style={{ fontSize: '16px' }}
      >
        ← Back to home
      </Link>
    </main>
  )
}
