'use client'

import { useEffect, useRef, useState } from 'react'
import { useLangStore } from '@/store/useLangStore'
import { T } from '@/lib/translations'

const SKILLS_DATA = [
  {
    skills: [
      { name: 'React.js / Next.js', level: 92 },
      { name: 'TypeScript',         level: 88 },
      { name: 'Vue.js',             level: 80 },
      { name: 'Tailwind CSS',       level: 95 },
      { name: 'Bootstrap',          level: 90 },
    ],
  },
  {
    skills: [
      { name: 'Node.js / Express.js', level: 90 },
      { name: 'Python',               level: 75 },
      { name: 'PHP / Laravel',        level: 82 },
      { name: 'Fastify',              level: 80 },
      { name: 'REST API / JWT',       level: 88 },
    ],
  },
  {
    skills: [
      { name: 'PostgreSQL',   level: 88 },
      { name: 'MySQL',        level: 90 },
      { name: 'MongoDB',      level: 85 },
      { name: 'Firebase',     level: 82 },
      { name: 'Git / GitLab', level: 92 },
    ],
  },
]

const OTHER_TOOLS = ['Flutter', 'Docker', 'Figma', 'Stripe', 'Vercel', 'Postman']

export function SkillsSection() {
  const { lang } = useLangStore()
  const t = T[lang].skills
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible]               = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    if (sectionRef.current) obs.observe(sectionRef.current)
    return () => obs.disconnect()
  }, [])

  const active = { ...t.categories[activeCategory], ...SKILLS_DATA[activeCategory] }

  return (
    <section id="skills" ref={sectionRef}
      className="min-h-screen flex items-center justify-center px-4 sm:px-8 py-20 sm:py-28"
      style={{ background: '#0d0d0d' }}>
      <div className="max-w-5xl mx-auto w-full">

        {/* Header — centré sur mobile, gauche sur desktop */}
        <div className={`mb-14 text-center sm:text-left transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p style={{ color:'#00ffcc', fontFamily:'Space Mono,monospace', fontSize:'9px', letterSpacing:'0.4em', textTransform:'uppercase', marginBottom:'0.75rem' }}>{t.label}</p>
          <h2 style={{ fontFamily:'Cormorant Garamond,serif', color:'#e8e8f0', fontSize:'clamp(1.6rem,3.5vw,2.6rem)', fontWeight:300 }}>{t.h2}</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <div className={`space-y-2 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'}`}>
            {t.categories.map((cat, i) => (
              <button key={cat.name} onClick={() => setActiveCategory(i)}
                className="w-full text-left p-4 transition-all duration-300"
                style={{
                  background: activeCategory === i ? `${cat.color}08` : 'transparent',
                  border: `1px solid ${activeCategory === i ? cat.color + '35' : 'rgba(255,255,255,0.04)'}`,
                  borderLeft: `2px solid ${activeCategory === i ? cat.color : 'transparent'}`,
                }}
                data-cursor="true">
                <div className="flex items-center gap-3">
                  <span style={{ color: activeCategory === i ? cat.color : '#3a3a5a', fontSize: '0.9rem' }}>{cat.icon}</span>
                  <div>
                    <p style={{ fontFamily:'Cormorant Garamond,serif', color: activeCategory === i ? '#e8e8f0' : '#5a5a7a', fontSize:'1rem', fontWeight:300, transition:'color 0.3s' }}>{cat.name}</p>
                    <p style={{ color: activeCategory === i ? cat.color : '#3a3a5a', fontFamily:'Space Mono,monospace', fontSize:'8px', marginTop:'1px' }}>{SKILLS_DATA[i].skills.length} {t.tech}</p>
                  </div>
                  <span className="ml-auto" style={{ color: activeCategory === i ? cat.color : 'transparent', fontSize:'0.8rem', transition:'color 0.3s' }}>→</span>
                </div>
              </button>
            ))}
            <div className="pt-5">
              <p style={{ color:'#3a3a5a', fontFamily:'Space Mono,monospace', fontSize:'8px', letterSpacing:'0.2em', textTransform:'uppercase', marginBottom:'0.75rem' }}>{t.others}</p>
              <div className="flex flex-wrap gap-1.5">
                {OTHER_TOOLS.map(tool => (
                  <span key={tool} style={{ border:'1px solid rgba(255,255,255,0.06)', color:'#5a5a7a', fontFamily:'Space Mono,monospace', fontSize:'8px', padding:'3px 10px' }}>{tool}</span>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-200 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'}`}>
            <div className="glass p-5 sm:p-6" style={{ border:`1px solid ${active.color}18` }}>
              <h3 style={{ fontFamily:'Cormorant Garamond,serif', color:active.color, fontSize:'1.4rem', fontWeight:300, marginBottom:'1.5rem' }}>{active.name}</h3>
              <div className="space-y-4">
                {active.skills.map((skill, i) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1.5">
                      <span style={{ color:'#e8e8f0', fontFamily:'DM Sans,sans-serif', fontSize:'0.78rem' }}>{skill.name}</span>
                      <span style={{ color:active.color, fontFamily:'Space Mono,monospace', fontSize:'9px' }}>{skill.level}%</span>
                    </div>
                    <div className="h-px w-full relative overflow-hidden" style={{ background:'rgba(255,255,255,0.05)' }}>
                      <div className="absolute top-0 left-0 h-full transition-all duration-1000"
                        style={{
                          width: visible ? `${skill.level}%` : '0%',
                          background: `linear-gradient(to right,${active.color}60,${active.color})`,
                          transitionDelay: `${i * 100 + 400}ms`,
                          boxShadow: `0 0 8px ${active.color}80`,
                        }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection