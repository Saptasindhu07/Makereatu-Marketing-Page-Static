export default function Hero() {
  return (
    <section
      className="min-h-[50vh] bg-basalt bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: 'url(/hero.webp)', minHeight: '55vh' }}
      aria-label="Hero"
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to top, rgba(45,52,54,0.65) 0%, rgba(45,52,54,0.2) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-16">
        {/* Wordmark */}
        <h1 className="font-sans font-bold tracking-[0.3em] leading-tight mb-4"
            style={{ fontSize: 'clamp(36px, 5vw, 48px)' }}>
          <span style={{ color: '#FFFFFF' }}>MAKERE</span>
          <span style={{ color: '#4A7C59' }}>ATU</span>
          <br />
          <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.55em', fontWeight: 400, letterSpacing: '0.3em' }}>
            TECHNOLOGY
          </span>
        </h1>

        {/* Tagline */}
        <p className="font-serif italic text-white mb-3"
           style={{ fontSize: 'clamp(15px, 2vw, 18px)' }}>
          Made by makers. Seeding what matters.
        </p>

        {/* Descriptor */}
        <p className="text-white font-sans mb-4"
           style={{ fontSize: 'clamp(14px, 1.5vw, 16px)', opacity: 0.9, maxWidth: '540px' }}>
          AI-powered advisory for construction governance and infrastructure evaluation.
        </p>

        {/* Location */}
        <p className="font-sans"
           style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)' }}>
          Dunedin, New Zealand
        </p>
      </div>
    </section>
  )
}
