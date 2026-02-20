'use client'

import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Détecte souris fine (desktop)
    if (!window.matchMedia('(pointer: fine)').matches) {
      if (cursorRef.current) cursorRef.current.style.display = 'none'
      return
    }

    const cursor = cursorRef.current
    if (!cursor) return

    let mouseX = window.innerWidth / 2  // ← commence au centre, pas à 0,0
    let mouseY = window.innerHeight / 2
    let cursorX = mouseX
    let cursorY = mouseY
    const speed = 0.35

    let rafId: number

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX - 5
      mouseY = e.clientY - 5
    }

    const animate = () => {
      cursorX += (mouseX - cursorX) * speed
      cursorY += (mouseY - cursorY) * speed
      cursor.style.left = `${cursorX}px`
      cursor.style.top  = `${cursorY}px`
      rafId = requestAnimationFrame(animate)
    }

    const onEnter = () => {
      cursor.style.transform  = 'scale(2.5)'
      cursor.style.background = '#9b5de5'
      cursor.style.boxShadow  = '0 0 16px #9b5de5'
    }
    const onLeave = () => {
      cursor.style.transform  = 'scale(1)'
      cursor.style.background = '#00ffcc'
      cursor.style.boxShadow  = '0 0 10px #00ffcc'
    }

    window.addEventListener('mousemove', onMove, { passive: true })

    const attach = () => {
      document.querySelectorAll('a, button, [data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter, { passive: true })
        el.addEventListener('mouseleave', onLeave, { passive: true })
      })
    }
    attach()

    let timeout: NodeJS.Timeout
    const obs = new MutationObserver(() => {
      clearTimeout(timeout)
      timeout = setTimeout(attach, 100)
    })
    obs.observe(document.body, { childList: true, subtree: true })

    animate()

    return () => {
      window.removeEventListener('mousemove', onMove)
      obs.disconnect()
      clearTimeout(timeout)
      cancelAnimationFrame(rafId)  // ← important pour éviter les fuites mémoire
    }
  }, [])

  return <div ref={cursorRef} className="cursor" style={{ willChange: 'transform' }} />
}