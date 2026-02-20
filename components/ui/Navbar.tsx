'use client'

import { useEffect, useState } from 'react'
import { useLangStore } from '@/store/useLangStore'
import { T } from '@/lib/translations'

const NAV_IDS = ['about', 'experience', 'projects', 'skills', 'contact']

const FlagFR = () => (
  <svg width="20" height="14" viewBox="0 0 20 14" style={{ display:'block', borderRadius:2, overflow:'hidden' }}>
    <rect width="7" height="14" fill="#002395"/>
    <rect x="7" width="6" height="14" fill="#fff"/>
    <rect x="13" width="7" height="14" fill="#ED2939"/>
  </svg>
)

const FlagGB = () => (
  <svg width="20" height="14" viewBox="0 0 60 40" style={{ display:'block', borderRadius:2, overflow:'hidden' }}>
    <rect width="60" height="40" fill="#012169"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8"/>
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#C8102E" strokeWidth="5"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#fff" strokeWidth="12"/>
    <path d="M30,0 V40 M0,20 H60" stroke="#C8102E" strokeWidth="7"/>
  </svg>
)

export default function Navbar() {
  const { lang, toggle } = useLangStore()
  const t = T[lang]

  const [scrolled, setScrolled]           = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [menuOpen, setMenuOpen]           = useState(false)

  // ── CV dynamique selon la langue ──
  const cvFile  = lang === 'fr'
    ? '/CV/FR.pdf'
    : '/CV/ENG.pdf'
  const cvLabel = lang === 'fr' ? 'CV FR' : 'CV EN'

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)
      const found = NAV_IDS.find(id => {
        const el = document.getElementById(id)
        if (!el) return false
        const r = el.getBoundingClientRect()
        return r.top <= 100 && r.bottom >= 100
      })
      if (found) setActiveSection(found)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const CurrentFlag = lang === 'fr' ? FlagFR : FlagGB
  const NextFlag    = lang === 'fr' ? FlagGB : FlagFR
  const nextLabel   = lang === 'fr' ? 'EN' : 'FR'

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          padding: scrolled ? '10px 0' : '18px 0',
          background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.55)',
          backdropFilter: 'blur(20px)',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.05)' : 'none',
        }}
      >
        <div className="w-full px-5 md:px-10 flex items-center justify-between">

          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{
              color: '#00ffcc', fontFamily: 'Cormorant Garamond, serif',
              letterSpacing: '0.3em', fontSize: '0.88rem', fontWeight: 300, flexShrink: 0,
            }}
          >
            Toky
          </button>

          {/* Nav links — centré */}
          <div
            className="hidden md:flex items-center gap-6"
            style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            {t.nav.map((label, i) => {
              const id     = NAV_IDS[i]
              const active = activeSection === id
              return (
                <button key={id} onClick={() => scrollTo(id)}
                  style={{
                    fontFamily: 'Space Mono, monospace', fontSize: '10px',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: active ? '#00ffcc' : '#5a5a7a',
                    transition: 'color 0.3s', position: 'relative',
                  }}
                  onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = '#c8c8e0' }}
                  onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = '#5a5a7a' }}
                >
                  {label}
                  {active && (
                    <span style={{ position:'absolute', bottom:-3, left:0, width:'100%', height:1, background:'#00ffcc' }} />
                  )}
                </button>
              )
            })}
          </div>

          {/* Droite */}
          <div className="flex items-center gap-3">

            {/* Toggle langue */}
            <button
              onClick={toggle}
              data-cursor="true"
              title={lang === 'fr' ? 'Switch to English' : 'Passer en français'}
              className="group flex items-center gap-2 transition-all duration-300"
              style={{
                border: '1px solid rgba(0,255,204,0.15)',
                padding: '5px 10px',
                background: 'rgba(0,255,204,0.03)',
                borderRadius: 2,
              }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,255,204,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(0,255,204,0.15)')}
            >
              <div style={{ display:'flex', alignItems:'center', gap:5 }}>
                <CurrentFlag />
                <span style={{ fontFamily:'Space Mono,monospace', fontSize:'9px', color:'#00ffcc', letterSpacing:'0.1em' }}>
                  {lang.toUpperCase()}
                </span>
              </div>
              <span style={{ color:'rgba(255,255,255,0.12)', fontSize:'10px' }}>|</span>
              <div style={{ display:'flex', alignItems:'center', gap:5, opacity:0.35, transition:'opacity 0.3s' }}
                className="group-hover:!opacity-75">
                <NextFlag />
                <span style={{ fontFamily:'Space Mono,monospace', fontSize:'9px', color:'#5a5a7a', letterSpacing:'0.1em' }}>
                  {nextLabel}
                </span>
              </div>
            </button>

            {/* ── Bouton CV dynamique ── */}
            <a
              href={cvFile}
              download
              className="hidden md:flex items-center gap-1"
              style={{
                fontFamily: 'Space Mono, monospace', fontSize: '10px',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: '#00ffcc', border: '1px solid rgba(0,255,204,0.22)',
                padding: '6px 13px', transition: 'background 0.3s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'rgba(0,255,204,0.07)')}
              onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
            >
              {cvLabel} →
            </a>

            {/* Burger mobile */}
            <button
              className="flex md:hidden flex-col gap-1.5 w-8 h-8 justify-center items-end"
              onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"
            >
              <span style={{ display:'block', width:22, height:1, background:'#00ffcc', transition:'all 0.3s', transform:menuOpen?'translateY(5px) rotate(45deg)':'none' }} />
              <span style={{ display:'block', width:14, height:1, background:'#00ffcc', transition:'all 0.3s', opacity:menuOpen?0:1 }} />
              <span style={{ display:'block', width:22, height:1, background:'#00ffcc', transition:'all 0.3s', transform:menuOpen?'translateY(-5px) rotate(-45deg)':'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className="fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-all duration-500"
        style={{
          background: 'rgba(8,8,12,0.98)', backdropFilter: 'blur(20px)',
          opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      >
        {t.nav.map((label, i) => (
          <button key={NAV_IDS[i]} onClick={() => scrollTo(NAV_IDS[i])}
            style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(1.4rem, 6vw, 2.2rem)',
              color: '#e8e8f0', letterSpacing: '0.08em',
              transition: `all 0.4s ${i * 60}ms`,
              transform: menuOpen ? 'translateY(0)' : 'translateY(16px)',
              opacity: menuOpen ? 1 : 0,
            }}
          >
            {label}
          </button>
        ))}

        {/* Toggle langue mobile */}
        <button
          onClick={toggle}
          style={{
            display:'flex', alignItems:'center', gap:16,
            marginTop:'1rem',
            border:'1px solid rgba(0,255,204,0.2)',
            padding:'10px 20px',
            transition:`all 0.4s ${t.nav.length * 60}ms`,
            opacity: menuOpen ? 1 : 0,
          }}
        >
          <div style={{ display:'flex', alignItems:'center', gap:8 }}>
            <CurrentFlag />
            <span style={{ color:'#00ffcc', fontFamily:'Space Mono,monospace', fontSize:'10px', letterSpacing:'0.15em' }}>
              {lang.toUpperCase()}
            </span>
          </div>
          <span style={{ color:'#3a3a5a', fontSize:'12px' }}>→</span>
          <div style={{ display:'flex', alignItems:'center', gap:8, opacity:0.45 }}>
            <NextFlag />
            <span style={{ color:'#888', fontFamily:'Space Mono,monospace', fontSize:'10px', letterSpacing:'0.15em' }}>
              {nextLabel}
            </span>
          </div>
        </button>

        {/* CV mobile */}
        <a
          href={cvFile}
          download
          style={{
            fontFamily: 'Space Mono,monospace', fontSize: '11px',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: '#00ffcc', border: '1px solid rgba(0,255,204,0.22)',
            padding: '10px 24px',
            transition: `all 0.4s ${(t.nav.length + 1) * 60}ms`,
            opacity: menuOpen ? 1 : 0,
          }}
        >
          {cvLabel} →
        </a>
      </div>
    </>
  )
}