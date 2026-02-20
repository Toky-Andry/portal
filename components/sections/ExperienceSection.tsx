'use client'

import { useEffect, useRef, useState } from 'react'
import { useLangStore } from '@/store/useLangStore'
import { T } from '@/lib/translations'

export function ExperienceSection() {
  const { lang } = useLangStore()
  const t = T[lang].experience
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible]         = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold: 0.2 })
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28"
      style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto w-full">

        {/* Header — centré sur mobile, gauche sur desktop */}
        <div className={`mb-14 text-center sm:text-left transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p style={{ color:'#00ffcc', fontFamily:'Space Mono,monospace', fontSize:'9px', letterSpacing:'0.4em', textTransform:'uppercase', marginBottom:'0.75rem' }}>{t.label}</p>
          <h2 style={{ fontFamily:'Cormorant Garamond,serif', color:'#e8e8f0', fontSize:'clamp(1.6rem,3.5vw,2.6rem)', fontWeight:300 }}>{t.h2}</h2>
        </div>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px" style={{ background:'linear-gradient(to bottom,#00ffcc,#9b5de5,#ffd93d)', opacity:0.25 }} />
          <div className="space-y-2">
            {t.jobs.map((exp, i) => (
              <div key={i}
                className={`relative pl-10 py-6 cursor-pointer transition-all duration-500 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}
                style={{ transitionDelay:`${i*180}ms` }}
                onClick={() => setActiveIndex(i === activeIndex ? -1 : i)} data-cursor="true">
                <div className="absolute left-0 top-9 w-2.5 h-2.5 rounded-full" style={{
                  background:exp.color, transform:`translateX(-50%) scale(${activeIndex===i?1.4:1})`,
                  boxShadow:activeIndex===i?`0 0 14px ${exp.color}`:'none', transition:'all 0.3s',
                }} />
                <div className="glass rounded-none p-5 sm:p-6" style={{
                  borderLeft:`2px solid ${activeIndex===i?exp.color:'transparent'}`,
                  border:activeIndex===i?`1px solid ${exp.color}25`:'1px solid rgba(255,255,255,0.03)',
                }}>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div>
                      <h3 style={{ fontFamily:'Cormorant Garamond,serif', color:'#e8e8f0', fontSize:'clamp(1rem,2vw,1.3rem)', fontWeight:300 }}>{exp.role}</h3>
                      <p style={{ color:exp.color, fontFamily:'Space Mono,monospace', fontSize:'10px', marginTop:'3px' }}>{exp.company} · {exp.location}</p>
                    </div>
                    <p style={{ color:'#5a5a7a', fontFamily:'Space Mono,monospace', fontSize:'9px' }}>{exp.period}</p>
                  </div>
                  <div className="overflow-hidden transition-all duration-500" style={{ maxHeight:activeIndex===i?'200px':'0' }}>
                    <p style={{ color:'#7a7a9a', fontFamily:'DM Sans,sans-serif', fontSize:'0.78rem', lineHeight:1.7, marginBottom:'1rem', paddingTop:'0.5rem' }}>{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map(tag => (
                        <span key={tag} style={{ border:`1px solid ${exp.color}35`, color:exp.color, fontFamily:'Space Mono,monospace', fontSize:'9px', padding:'3px 10px' }}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center gap-2" style={{ color:'#5a5a7a', fontFamily:'Space Mono,monospace', fontSize:'9px' }}>
                    <span>{activeIndex===i ? t.collapse : t.expand}</span>
                    <span style={{ transform:activeIndex===i?'rotate(180deg)':'none', transition:'transform 0.3s', display:'inline-block' }}>↓</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection