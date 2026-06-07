'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const services = [
  { number: '01', title: 'Poster Design', description: 'Events, concerts, college fests, promos, and cultural launches.' },
  { number: '02', title: 'Branding & Identity', description: 'Logo direction, color stories, visual systems, and style guides.' },
  { number: '03', title: 'Packaging Design', description: 'Premium, tactile structural layouts, custom labels, and memorable unboxing experiences.' },
  { number: '04', title: 'Social Media Design', description: 'Fresh, cohesive post designs for Instagram and creator brands.' },
  { number: '05', title: 'Instagram Carousels', description: 'Swipeable education, promotion, storytelling, and launch content.' },
  { number: '06', title: 'Digital Planners', description: 'Functional planner layouts with aesthetic and organized page systems.' },
  { number: '07', title: 'Ebooks & Workbooks', description: 'Readable premium layouts for guides, lead magnets, and digital resources.' },
  { number: '08', title: 'Pitch Decks', description: 'Presentation design that feels clear, confident, and visually sharp.' },
  { number: '09', title: 'Editable Templates', description: 'Flexible templates for creators, small businesses, and marketing campaigns.' },
  { number: '10', title: 'Moodboards', description: 'Creative direction boards for brands, content shoots, campaigns, and launches.' },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" ref={ref} className="relative py-32 px-6 z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Portrait */}
          <motion.div
            id="services"
             <div id="services-anchor" style={{ position: 'relative', top: '-100px' }} />
  
  <div className="text-center mb-16">
            initial={{ opacity: 0, x: -60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-2xl shadow-[#0A1E30]/10">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-hero-oZfTh6gK7rL47jS9kHWdVU2wCXYFa7.jpg"
                alt="Yoshita Dewani"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E30]/10 to-transparent" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:pl-8"
          >
            <p className="text-sm font-medium text-[#4A8CFF] tracking-[0.2em] uppercase mb-4">
              About Me
            </p>
            
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1E30] leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Designing visuals that make brands{' '}
              <span className="text-[#4A8CFF]">impossible to ignore.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6 text-lg text-[#5E7896] leading-relaxed"
            >
              <p>
                {"Hi, I'm"} <span className="text-[#0A1E30] font-medium">Yoshita Dewani</span> — a graphic designer 
                passionate about building memorable visual identities and impactful digital experiences.
              </p>
              <p>
                I combine creativity and strategy to help brands communicate clearly and stand out 
                in competitive markets. Every project is an opportunity to create something that resonates.
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* What I Design Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-[#4A8CFF] tracking-[0.2em] uppercase mb-4">
              My Expertise
            </p>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1E30]">
              What I Design
            </h3>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.6 + index * 0.05,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="group relative p-6 rounded-2xl bg-white/50 backdrop-blur-xl border border-white/60 hover:bg-white/80 hover:border-[#4A8CFF]/30 hover:shadow-xl hover:shadow-[#4A8CFF]/10 hover:-translate-y-1 transition-all duration-500"
              >
                {/* Number */}
                <span className="block text-xs font-semibold text-[#4A8CFF] tracking-wider mb-3">
                  {service.number}
                </span>

                {/* Title */}
                <h4 className="text-base font-semibold text-[#0A1E30] mb-2 group-hover:text-[#173654] transition-colors duration-300">
                  {service.title}
                </h4>

                {/* Description */}
                <p className="text-sm text-[#5E7896] leading-relaxed">
                  {service.description}
                </p>

                {/* Hover glow border */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#4A8CFF]/20 transition-all duration-500 pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
