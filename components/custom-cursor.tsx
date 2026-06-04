'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [hoverText, setHoverText] = useState('')
  const [isVisible, setIsVisible] = useState(false)
  const [isButton, setIsButton] = useState(false)
  const cursorRef = useRef({ x: 0, y: 0 })
  const smoothPosition = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorRef.current = { x: e.clientX, y: e.clientY }
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Handle hover states
    const handleElementHover = () => {
      const projectCards = document.querySelectorAll('[data-cursor-project]')
      const buttons = document.querySelectorAll('button, a')

      projectCards.forEach((el) => {
        el.addEventListener('mouseenter', () => {
          setIsHovering(true)
          setIsButton(false)
          setHoverText('VIEW')
        })
        el.addEventListener('mouseleave', () => {
          setIsHovering(false)
          setHoverText('')
        })
      })

      buttons.forEach((el) => {
        if (!el.closest('[data-cursor-project]')) {
          el.addEventListener('mouseenter', () => {
            setIsHovering(true)
            setIsButton(true)
            setHoverText('')
          })
          el.addEventListener('mouseleave', () => {
            setIsHovering(false)
            setIsButton(false)
          })
        }
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)
    
    // Delay to ensure DOM is loaded
    setTimeout(handleElementHover, 100)

    // Smooth animation loop
    let animationId: number
    const animate = () => {
      smoothPosition.current.x += (cursorRef.current.x - smoothPosition.current.x) * 0.12
      smoothPosition.current.y += (cursorRef.current.y - smoothPosition.current.y) * 0.12
      setPosition({ x: smoothPosition.current.x, y: smoothPosition.current.y })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
      cancelAnimationFrame(animationId)
    }
  }, [])

  // Hide cursor on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  const dotSize = isHovering ? (isButton ? 16 : 0) : 6
  const glowSize = isHovering ? (hoverText ? 80 : 40) : 24

  return (
    <>
      {/* Navy dot */}
      <motion.div
        className="fixed pointer-events-none z-[10000] rounded-full"
        style={{
          width: dotSize,
          height: dotSize,
          x: position.x - dotSize / 2,
          y: position.y - dotSize / 2,
          backgroundColor: '#0A1E30',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          scale: 1,
        }}
        transition={{ duration: 0.15 }}
      />
      
      {/* Soft blurred outer glow */}
      <motion.div
        className="fixed pointer-events-none z-[9999] rounded-full flex items-center justify-center"
        style={{
          background: hoverText 
            ? 'rgba(10, 30, 48, 0.9)' 
            : 'radial-gradient(circle, rgba(74, 140, 255, 0.15) 0%, rgba(74, 140, 255, 0) 70%)',
          backdropFilter: hoverText ? 'blur(8px)' : 'none',
        }}
        animate={{
          width: glowSize,
          height: glowSize,
          x: position.x - glowSize / 2,
          y: position.y - glowSize / 2,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 250,
          damping: 25,
          mass: 0.5,
        }}
      >
        <AnimatePresence>
          {hoverText && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="text-xs font-semibold text-white tracking-widest"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}
