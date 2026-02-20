'use client'

import { useEffect, useRef } from 'react'

interface Face3DProps {
  size?: number
}

export default function Face3D({ size = 300 }: Face3DProps) {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    while (mount.firstChild) mount.removeChild(mount.firstChild)

    let rafId: number
    let disposed = false
    let renderer: any

    const init = async () => {
      const THREE = await import('three')
      const { GLTFLoader } = await import('three/examples/jsm/loaders/GLTFLoader.js')
      if (disposed) return

      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(28, 1, 0.01, 100)
      camera.position.set(0, -0.1, 4.2)
      camera.lookAt(0, 0.1, 0)

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      renderer.setSize(size, size)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      renderer.toneMapping = THREE.ACESFilmicToneMapping
      renderer.toneMappingExposure = 1.3
      renderer.outputColorSpace = THREE.SRGBColorSpace

      if (disposed || !mountRef.current) return
      mount.appendChild(renderer.domElement)

      // Éclairage
      scene.add(new THREE.AmbientLight(0xffffff, 0.7))
      const keyLight = new THREE.DirectionalLight(0xfff5e0, 3.5)
      keyLight.position.set(-2, 3, 4)
      keyLight.castShadow = true
      scene.add(keyLight)
      const fillTeal = new THREE.PointLight(0x00ffcc, 2.8, 10)
      fillTeal.position.set(3, 0.5, 2)
      scene.add(fillTeal)
      const rimViolet = new THREE.PointLight(0x9b5de5, 3.5, 8)
      rimViolet.position.set(-3, 1, -2)
      scene.add(rimViolet)

      const loader = new GLTFLoader()
      let headMesh: any = null

      loader.load('/mode.glb', (gltf: any) => {
        if (disposed) return
        const model = gltf.scene
        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const sizeV = box.getSize(new THREE.Vector3())
        const scale = 1.7 / Math.max(sizeV.x, sizeV.y, sizeV.z)
        model.position.copy(center.multiplyScalar(-scale))
        model.scale.setScalar(scale)
        model.position.y += 0.05
        model.traverse((child: any) => {
          if (child.isMesh) { child.castShadow = true; child.receiveShadow = true }
        })
        scene.add(model)
        headMesh = model
      })

      let targetRX = 0, targetRY = 0, currentRX = 0, currentRY = 0, autoAngle = 0

      const onMouseMove = (e: MouseEvent) => {
        if (disposed) return
        const nx = (e.clientX / window.innerWidth - 0.5) * 2
        const ny = (e.clientY / window.innerHeight - 0.5) * 2
        targetRY = nx * 0.4
        targetRX = -ny * 0.25
        fillTeal.position.x = 3 + nx * 2
        fillTeal.position.y = 0.5 - ny * 1.5
        rimViolet.position.x = -3 + nx * 1
      }

      // Touch support for mobile
      const onTouchMove = (e: TouchEvent) => {
        if (disposed || !e.touches[0]) return
        const nx = (e.touches[0].clientX / window.innerWidth - 0.5) * 2
        const ny = (e.touches[0].clientY / window.innerHeight - 0.5) * 2
        targetRY = nx * 0.25
        targetRX = -ny * 0.15
        fillTeal.position.x = 3 + nx * 2
        fillTeal.position.y = 0.5 - ny * 1.5
        rimViolet.position.x = -3 + nx * 1
      }

      window.addEventListener('mousemove', onMouseMove, { passive: true })
      window.addEventListener('touchmove', onTouchMove, { passive: true })

      const animate = () => {
        if (disposed) return
        rafId = requestAnimationFrame(animate)
        autoAngle += 0.004
        currentRX += (targetRX - currentRX) * 0.05
        currentRY += (targetRY - currentRY) * 0.05
        if (headMesh) {
          headMesh.rotation.y = currentRY + Math.sin(autoAngle) * 0.05
          headMesh.rotation.x = currentRX + Math.cos(autoAngle * 0.7) * 0.012
          headMesh.position.y += (0.05 + Math.sin(autoAngle * 0.8) * 0.02 - headMesh.position.y) * 0.05
        }
        renderer.render(scene, camera)
      }
      animate()

      return () => {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('touchmove', onTouchMove)
      }
    }

    let cleanupFn: (() => void) | undefined
    init().then(fn => { cleanupFn = fn })

    return () => {
      disposed = true
      cancelAnimationFrame(rafId)
      cleanupFn?.()
      if (renderer) { renderer.dispose(); renderer.forceContextLoss() }
      while (mount.firstChild) mount.removeChild(mount.firstChild)
    }
  }, [size])

  return (
    <div
      ref={mountRef}
      style={{
        width: size,
        height: size,
        filter: 'drop-shadow(0 0 24px rgba(0,255,204,0.22)) drop-shadow(0 0 50px rgba(155,93,229,0.12))',
      }}
    />
  )
}