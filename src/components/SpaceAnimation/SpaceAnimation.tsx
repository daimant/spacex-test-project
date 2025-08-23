'use client'

import { useEffect, useRef } from 'react'
import styles from './SpaceAnimation.module.scss'
import { SpaceObject } from './types'

export default function SpaceAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const objectsRef = useRef<SpaceObject[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const objects: SpaceObject[] = []
    
    // Создаем звезды
    for (let i = 0; i < 30; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 3 + 1,
        type: 'star',
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.02
      })
    }
    
    // Создаем планеты
    for (let i = 0; i < 5; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.1,
        vy: (Math.random() - 0.5) * 0.1,
        size: Math.random() * 20 + 15,
        type: 'planet',
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.01
      })
    }
    
    // Создаем астероиды
    for (let i = 0; i < 15; i++) {
      objects.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 8 + 3,
        type: 'asteroid',
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.03
      })
    }

    objectsRef.current = objects

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      objects.forEach((obj) => {
        obj.x += obj.vx
        obj.y += obj.vy
        obj.rotation += obj.rotationSpeed

        if (obj.x < -obj.size) obj.x = canvas.width + obj.size
        if (obj.x > canvas.width + obj.size) obj.x = -obj.size
        if (obj.y < -obj.size) obj.y = canvas.height + obj.size
        if (obj.y > canvas.height + obj.size) obj.y = -obj.size

        ctx.save()
        ctx.translate(obj.x, obj.y)
        ctx.rotate(obj.rotation)

        switch (obj.type) {
          case 'star':
            ctx.beginPath()
            ctx.arc(0, 0, obj.size, 0, Math.PI * 2)
            ctx.fillStyle = `rgba(255, 255, 255, ${0.8 + Math.sin(Date.now() * 0.001) * 0.2})`
            ctx.fill()
            break
            
          case 'planet':
            const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, obj.size)
            gradient.addColorStop(0, `hsl(${200 + Math.sin(Date.now() * 0.0005) * 30}, 70%, 60%)`)
            gradient.addColorStop(1, `hsl(${200 + Math.sin(Date.now() * 0.0005) * 30}, 70%, 30%)`)
            ctx.beginPath()
            ctx.arc(0, 0, obj.size, 0, Math.PI * 2)
            ctx.fillStyle = gradient
            ctx.fill()
            break
            
          case 'asteroid':
            ctx.beginPath()
            for (let i = 0; i < 8; i++) {
              const angle = (i / 8) * Math.PI * 2
              const radius = obj.size + Math.sin(angle * 3) * 2
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius
              if (i === 0) {
                ctx.moveTo(x, y)
              } else {
                ctx.lineTo(x, y)
              }
            }
            ctx.closePath()
            ctx.fillStyle = `rgba(150, 150, 150, 0.8)`
            ctx.fill()
            break
        }

        ctx.restore()
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={styles.spaceCanvas}
    />
  )
}
