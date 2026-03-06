const cards = [
  {
    title: 'Construction Governance',
    body: 'AI-powered project advisory that helps principals and owners track variations, manage baselines, and maintain governance discipline from first contract to final account. Our systems are designed for the contract standards that matter: FIDIC, NZS 3910, and NEC4.'
  },
  {
    title: 'Infrastructure Evaluation',
    body: 'Quantifying value left on the table in infrastructure project delivery. We apply the Foregone Benefits Methodology to help decision-makers identify and recover measurable value from how projects are designed, procured, phased, and managed.',
  },
  {
    title: 'Advisory and Research',
    body: 'Combining 25+ years of international infrastructure experience — spanning multilateral development banks, government treasuries, and global engineering consultancies — with AI systems architecture to help organizations modernize how they govern construction and procurement.',
  },
]

export default function WhatWeDo() {
  return (
    <section className="bg-limestone py-24" aria-labelledby="whatwedo-heading">
      <div className="max-w-content mx-auto px-6">
        <h2 id="whatwedo-heading"
            className="font-sans font-bold text-basalt mb-10"
            style={{ fontSize: 'clamp(24px, 3vw, 28px)' }}>
          What We Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="bg-white border-t-[3px] border-olivine p-8 shadow-sm transition-transform duration-200 hover:-translate-y-0.5"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}
            >
              <h3 className="font-sans font-semibold text-olivine mb-4"
                  style={{ fontSize: '20px' }}>
                {card.title}
              </h3>
              <p className="font-sans text-basalt" style={{ fontSize: '16px', lineHeight: 1.6 }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
