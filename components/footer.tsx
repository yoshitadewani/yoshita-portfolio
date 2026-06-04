'use client'

import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 px-6 z-10 border-t border-[#D9EAFF]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.span 
            className="text-xl font-semibold text-[#0A1E30] tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            Yoshita
            <span className="text-[#4A8CFF]">.</span>
          </motion.span>

          {/* Copyright */}
          <p className="text-sm text-[#5E7896]">
            © {currentYear} Yoshita Dewani. All rights reserved.
          </p>

          {/* Back to top */}
          <motion.a
            href="#"
            className="flex items-center gap-2 text-sm text-[#5E7896] hover:text-[#0A1E30] transition-colors duration-300"
            whileHover={{ y: -2 }}
          >
            Back to top
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
