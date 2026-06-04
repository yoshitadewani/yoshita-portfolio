'use client'

import { useEffect, useRef } from 'react'

export function MountainBackground() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollY = window.scrollY
        containerRef.current.style.transform = `translateY(${scrollY * 0.3}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FBFF] via-[#EAF4FF] to-[#D9EAFF]" />
      
      {/* Mountain scene container with parallax */}
      <div ref={containerRef} className="absolute inset-0 transition-transform duration-100 ease-out">
        {/* Distant mountains - very soft */}
        <svg
          className="absolute bottom-0 left-0 w-full h-[60vh] opacity-20"
          viewBox="0 0 1440 600"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7BA3D1" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#A8C5E5" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8DB4DC" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#B5D0EB" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="mountain3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#9EC2E5" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#C7DCF0" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Furthest mountains */}
          <path
            d="M0,600 L0,450 Q200,380 400,420 Q600,350 800,400 Q1000,320 1200,380 Q1350,340 1440,360 L1440,600 Z"
            fill="url(#mountain1)"
          />
          
          {/* Middle mountains */}
          <path
            d="M0,600 L0,480 Q150,420 300,460 Q500,400 700,450 Q900,380 1100,430 Q1300,390 1440,420 L1440,600 Z"
            fill="url(#mountain2)"
          />
          
          {/* Front mountains */}
          <path
            d="M0,600 L0,520 Q200,470 400,500 Q600,460 800,490 Q1000,450 1200,480 Q1350,460 1440,480 L1440,600 Z"
            fill="url(#mountain3)"
          />
        </svg>
        
        {/* Fog layers */}
        <div className="absolute bottom-[20%] left-0 w-full h-[30vh] bg-gradient-to-t from-[#F8FBFF] via-[#F8FBFF]/80 to-transparent" />
        <div className="absolute bottom-[35%] left-0 w-full h-[20vh] bg-gradient-to-t from-[#EAF4FF]/60 to-transparent opacity-60" />
      </div>
      
      {/* Volumetric light rays */}
      <div className="absolute top-0 right-[20%] w-[400px] h-[60vh] bg-gradient-to-b from-[#4A8CFF]/5 via-[#4A8CFF]/2 to-transparent transform -skew-x-12 opacity-40" />
      <div className="absolute top-0 right-[35%] w-[200px] h-[50vh] bg-gradient-to-b from-[#4A8CFF]/3 via-transparent to-transparent transform -skew-x-6 opacity-30" />
      
      {/* Soft cloud layer */}
      <div className="absolute top-[10%] left-[10%] w-[300px] h-[100px] bg-white/30 rounded-full blur-3xl" />
      <div className="absolute top-[15%] right-[15%] w-[400px] h-[120px] bg-white/25 rounded-full blur-3xl" />
      <div className="absolute top-[25%] left-[40%] w-[250px] h-[80px] bg-white/20 rounded-full blur-3xl" />
      
      {/* Atmospheric glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-radial from-[#4A8CFF]/8 to-transparent rounded-full blur-3xl" />
      
      {/* Bottom fade for content readability */}
      <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#F8FBFF] via-[#F8FBFF]/90 to-transparent" />
    </div>
  )
}
