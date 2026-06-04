'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MagneticButton } from './magnetic-button'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const socialLinks = [
    {
      name: 'Email',
      value: 'yoshitadewani@gmail.com',
      href: 'mailto:yoshitadewani@gmail.com',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      value: '@unfiltered.yoshi',
      href: 'https://instagram.com/unfiltered.yoshi',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 4H8a4 4 0 00-4 4v8a4 4 0 004 4h8a4 4 0 004-4V8a4 4 0 00-4-4z" />
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
          <circle cx="16.5" cy="7.5" r="1" fill="currentColor" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      value: 'Yoshita Dewani',
      href: 'https://www.linkedin.com/in/yoshita-dewani-603b73366',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" strokeWidth={1.5} />
        </svg>
      ),
    },
    {
      name: 'Fiverr',
      value: 'yoshiiii_06',
      href: 'https://fiverr.com/yoshiiii_06',
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
          <path d="M16 12h-3V9a1 1 0 00-1-1h-1a1 1 0 00-1 1v3H8a1 1 0 00-1 1v1a1 1 0 001 1h2v3a1 1 0 001 1h1a1 1 0 001-1v-3h3a1 1 0 001-1v-1a1 1 0 00-1-1z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="contact" ref={ref} className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium text-[#4A8CFF] tracking-[0.2em] uppercase mb-4">
              Get in Touch
            </p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1E30] leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {"Let's create something"}{' '}
              <span className="text-[#4A8CFF]">memorable</span> together.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-[#5E7896] leading-relaxed mb-12"
            >
              Have a project in mind? {"I'd"} love to hear about it. {"Let's"} discuss how we can 
              bring your vision to life with compelling design.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/60 hover:bg-white/80 hover:border-[#4A8CFF]/30 hover:shadow-lg hover:shadow-[#4A8CFF]/10 transition-all duration-300 group"
                >
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-[#EAF4FF] text-[#4A8CFF] group-hover:bg-[#4A8CFF] group-hover:text-white transition-all duration-300">
                    {link.icon}
                  </span>
                  <span>
                    <span className="block text-xs text-[#5E7896] uppercase tracking-wider">{link.name}</span>
                    <span className="block text-sm font-medium text-[#0A1E30]">{link.value}</span>
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name Field */}
              <div className="relative">
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'name' || formData.name 
                      ? 'text-xs text-[#4A8CFF] -top-6' 
                      : 'text-base text-[#5E7896] top-3'
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-[#D9EAFF] focus:border-[#4A8CFF] py-3 text-[#0A1E30] text-lg outline-none transition-colors duration-300"
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'email' || formData.email 
                      ? 'text-xs text-[#4A8CFF] -top-6' 
                      : 'text-base text-[#5E7896] top-3'
                  }`}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="w-full bg-transparent border-b-2 border-[#D9EAFF] focus:border-[#4A8CFF] py-3 text-[#0A1E30] text-lg outline-none transition-colors duration-300"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <label 
                  className={`absolute left-0 transition-all duration-300 pointer-events-none ${
                    focusedField === 'message' || formData.message 
                      ? 'text-xs text-[#4A8CFF] -top-6' 
                      : 'text-base text-[#5E7896] top-3'
                  }`}
                >
                  Tell me about your project
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className="w-full bg-transparent border-b-2 border-[#D9EAFF] focus:border-[#4A8CFF] py-3 text-[#0A1E30] text-lg outline-none transition-colors duration-300 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <MagneticButton
                  className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 bg-[#0A1E30] text-white text-base font-medium rounded-full hover:bg-[#173654] transition-all duration-300 shadow-lg shadow-[#0A1E30]/20"
                >
                  Send Message
                  <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </MagneticButton>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
