export default function Contact() {
  return (
    <section className="bg-white py-24 border-t-[3px] border-olivine" aria-labelledby="contact-heading">
      <div className="max-w-content mx-auto px-6">
        <h2 id="contact-heading"
            className="font-sans font-bold text-basalt mb-8"
            style={{ fontSize: 'clamp(24px, 3vw, 28px)' }}>
          Contact
        </h2>
        <div className="flex flex-col gap-3">
          <a
            href="mailto:barry@makereatu.com"
            className="font-sans font-bold text-olivine transition-all duration-200 hover:underline"
            style={{ fontSize: '18px' }}
          >
            barry@makereatu.com
          </a>
          <p className="font-sans text-tuff" style={{ fontSize: '16px' }}>
            Dunedin, New Zealand
          </p>
          <a
            href="https://www.linkedin.com/in/barrycreid/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans text-olivine transition-all duration-200 hover:underline inline-flex items-center gap-2"
            style={{ fontSize: '16px' }}
            aria-label="Barry Reid on LinkedIn"
          >
            {/* LinkedIn icon */}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
