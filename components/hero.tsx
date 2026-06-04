'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from './magnetic-button'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.4,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.03,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  }

  const name = "YOSHITA DEWANI"

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20">
      {/* Atmospheric overlays */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft light rays */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-radial from-white/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-gradient-radial from-[#4A8CFF]/10 via-transparent to-transparent blur-3xl" />
        
        {/* Blue fog at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#E8F3FF]/60 to-transparent" />
      </div>

      <div className="max-w-5xl mx-auto w-full z-10">
        {/* Centered Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base font-medium text-[#4A8CFF] tracking-[0.25em] uppercase mb-8"
          >
            Designer • Creator • Visual Strategist
          </motion.p>

          {/* Name with letter animation */}
          <div className="overflow-hidden mb-10">
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-[#0A1E30] tracking-tight"
              initial="hidden"
              animate="visible"
            >
              {name.split('').map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  className="inline-block"
                  style={{ display: letter === ' ' ? 'inline' : 'inline-block' }}
                >
                  {letter === ' ' ? '\u00A0' : letter}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Decorative line */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-4 mb-10"
          >
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#4A8CFF]/50" />
            <div className="w-2 h-2 rounded-full bg-[#4A8CFF]/40" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#4A8CFF]/50" />
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl font-light text-[#173654] max-w-3xl mx-auto mb-6 leading-relaxed"
          >
            Helping brands turn ideas into visuals people remember.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base md:text-lg text-[#5E7896] max-w-2xl mx-auto mb-14 leading-relaxed"
          >
            I create brand identities, social media creatives, posters, and digital assets 
            that help businesses look professional, memorable, and visually compelling.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <MagneticButton
              href="#work"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#0A1E30] text-white text-base font-medium rounded-full hover:bg-[#173654] transition-all duration-300 shadow-lg shadow-[#0A1E30]/20"
            >
              View My Work
            </MagneticButton>
            
            <MagneticButton
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm text-[#0A1E30] text-base font-medium rounded-full border border-[#D9EAFF] hover:bg-white hover:border-[#4A8CFF]/30 transition-all duration-300"
            >
              {"Let's Work Together"}
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
