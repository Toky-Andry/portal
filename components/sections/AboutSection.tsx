'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLangStore } from '@/store/useLangStore'
import { T } from '@/lib/translations'

export function AboutSection() {
  const { lang } = useLangStore()
  const t = T[lang].about
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.3 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const renderP = (text: string) =>
    <p dangerouslySetInnerHTML={{ __html: text
      .replace(/<b>/g, '<strong style="color:#e8e8f0">')
      .replace(/<\/b>/g, '</strong>')
      .replace(/<teal>/g, '<strong style="color:#00ffcc">')
      .replace(/<\/teal>/g, '</strong>')
    }} />

  return (
    <section id="about" ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28"
      style={{ background: '#0a0a0a' }}>
      <div className="max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* Photo */}
        <div className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 mx-auto">
            <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle, rgba(0,255,204,0.08), transparent 70%)', filter: 'blur(30px)' }} />
            <div className="relative w-full h-full rounded-full overflow-hidden" style={{ border: '1px solid rgba(0,255,204,0.15)' }}>
              <Image src="/profile.png" alt="Clickman Andriamanantsoa" fill
                style={{ objectFit: 'cover', objectPosition: 'center center' }}
                className="transition-transform duration-500 hover:scale-105" />
            </div>
          </div>
        </div>

        {/* Text — tout centré sur mobile, gauche sur desktop */}
        <div className={`text-center lg:text-left transition-all duration-1000 delay-300 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <p style={{ color:'#00ffcc', fontFamily:'Space Mono,monospace', fontSize:'9px', letterSpacing:'0.4em', textTransform:'uppercase', marginBottom:'1rem' }}>{t.label}</p>
          <h2 style={{ fontFamily:'Cormorant Garamond,serif', color:'#e8e8f0', fontSize:'clamp(1.6rem,3.5vw,2.6rem)', fontWeight:300, lineHeight:1.25, marginBottom:'1.25rem' }}>
            {t.h2a}<em className="block mt-1" style={{ color:'#9b5de5' }}>{t.h2b}</em>
          </h2>

          {/* ✅ Paragraphes centrés sur mobile (héritent du parent), gauche sur desktop */}
          <div style={{ color:'#7a7a9a', fontFamily:'DM Sans,sans-serif', fontSize:'0.8rem', lineHeight:1.75 }} className="space-y-3">
            {renderP(t.p1)}{renderP(t.p2)}{renderP(t.p3)}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mt-8 pt-8" style={{ borderTop:'1px solid rgba(255,255,255,0.05)' }}>
            {t.stats.map(s => (
              <div key={s.label} className="flex flex-col items-center lg:items-start">
                <p style={{ fontFamily:'Cormorant Garamond,serif', color:'#00ffcc', fontSize:'clamp(1.5rem,3vw,2.2rem)', fontWeight:300 }}>{s.number}</p>
                <p style={{ color:'#5a5a7a', fontFamily:'Space Mono,monospace', fontSize:'8px', letterSpacing:'0.1em', textTransform:'uppercase', marginTop:'2px' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection