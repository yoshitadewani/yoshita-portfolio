'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setScrolled(scrollY > 50)
      
      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (scrollY / docHeight) * 100
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Work', href: '#work' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 h-[3px] bg-[#4A8CFF] z-[100]"
        style={{ width: `${scrollProgress}%` }}
      />
      
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'glass-strong shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="group">
              <motion.span 
                className="text-xl font-semibold text-[#0A1E30] tracking-tight"
                whileHover={{ scale: 1.02 }}
              >
                Yoshita
                <span className="text-[#4A8CFF]">.</span>
              </motion.span>
            </Link>

            {/* Nav Items */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-[#5E7896] hover:text-[#0A1E30] transition-colors duration-300 group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#4A8CFF] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-[#0A1E30] text-white text-sm font-medium rounded-full hover:bg-[#173654] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {"Let's Talk"}
            </motion.a>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2" aria-label="Menu">
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className="w-full h-0.5 bg-[#0A1E30]" />
                <span className="w-4 h-0.5 bg-[#0A1E30] ml-auto" />
                <span className="w-full h-0.5 bg-[#0A1E30]" />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>
    </>
  )
}
