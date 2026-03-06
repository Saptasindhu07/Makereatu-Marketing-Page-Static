'use client'
import { useState } from 'react'
import Image from 'next/image'

export default function Founder() {
  const [photoVisible, setPhotoVisible] = useState(true)

  return (
    <section className="bg-white py-24 border-t-[3px] border-olivine" aria-labelledby="founder-heading">
      <div className="max-w-content mx-auto px-6">
        <div className={`flex flex-col ${photoVisible ? 'md:grid md:grid-cols-[40%_60%]' : ''} gap-10 md:gap-12 items-start`}>

          {/* Photo column */}
          {photoVisible && (
            <div className="flex justify-center md:justify-start">
              <Image
                src="/barry-reid.webp"
                alt="Barry Reid, Founder and CEO of Makereatu Technology"
                width={200}
                height={200}
                className="rounded-full object-cover"
                style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.12)', width: 200, height: 200 }}
                onError={() => setPhotoVisible(false)}
              />
            </div>
          )}

          {/* Text column */}
          <div>
            <h2 id="founder-heading"
                className="font-sans font-bold text-basalt mb-1"
                style={{ fontSize: 'clamp(24px, 3vw, 28px)' }}>
              Barry Reid
            </h2>
            <p className="font-sans text-olivine mb-6" style={{ fontSize: '16px' }}>
              Founder and CEO
            </p>
            <p className="font-sans text-basalt mb-4" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              Barry Reid brings over 25 years of experience in infrastructure finance, project governance, and institutional systems. His career spans the Asian Development Bank (Assistant Controller, Loan Administration Division), the New Zealand Treasury, and Mott MacDonald (UK). His infrastructure portfolio experience spans the Pacific Islands, Southeast Asia, East Asia, Central and West Asia, and the United Kingdom.
            </p>
            <p className="font-sans text-basalt" style={{ fontSize: '16px', lineHeight: 1.6 }}>
              He holds professional memberships with Chartered Accountants Australia and New Zealand and the New Zealand Association of Economists. Technical certifications include Microsoft Security (SC-900), Microsoft AI Fundamentals (AI-900), CompTIA Security+, and ISO/IEC 27001 Information Security.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
