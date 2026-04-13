import { useEffect, useRef } from 'react'

const CHARS = 'アイウエオカキクケコサシスセソ01アタチツテ234トナニ567ヌネノ89ABCDEFGHIJKLMNOPQRSTUVWXYZ'

export default function MatrixRain({ opacity = 0.18 }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const fontSize = 16
    let animId

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()

    const cols  = Math.floor(canvas.width / fontSize)
    const drops = Array.from({ length: cols }, () => Math.random() * -canvas.height)

    const draw = () => {
      ctx.fillStyle = 'rgba(2, 11, 2, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drops.forEach((drop, i) => {
        const char  = CHARS[Math.floor(Math.random() * CHARS.length)]
        const alpha = 0.1 + Math.random() * 0.4

        // Brighter lead character
        if (drop * fontSize > 0) {
          ctx.fillStyle = `rgba(180, 255, 180, ${alpha + 0.4})`
          ctx.font = `bold ${fontSize}px JetBrains Mono`
          ctx.fillText(char, i * fontSize, drop * fontSize)
        }

        ctx.fillStyle = `rgba(0, 200, 50, ${alpha})`
        ctx.font = `${fontSize}px JetBrains Mono`
        ctx.fillText(char, i * fontSize, (drop - 1) * fontSize)

        drops[i]++
        if (drop * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
      })

      animId = requestAnimationFrame(draw)
    }

    const id = setTimeout(() => { animId = requestAnimationFrame(draw) }, 100)
    window.addEventListener('resize', resize)

    return () => {
      clearTimeout(id)
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{ opacity }}
      className="absolute inset-0 w-full h-full"
      aria-hidden="true"
    />
  )
}
