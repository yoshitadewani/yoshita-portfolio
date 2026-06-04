'use client'

import { useState, useRef, useCallback } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const categories = [
  { id: 'fashion', name: 'Fashion Branding' },
  { id: 'poster', name: 'Poster Design' },
]

const projects = {
  fashion: [
    {
      id: 1,
      title: 'New Drop Alert',
      category: 'Fashion Branding',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-brand-1-scLOd8SF9LBbf0FpJkHeHBv3hGFgIA.png',
      size: 'large',
    },
    {
      id: 2,
      title: 'Wardrobe Crush',
      category: 'Fashion Branding',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-brand-2-sASD0LYmfFJ1J0Qgh0urWdhIi9lOzo.png',
      size: 'medium',
    },
    {
      id: 3,
      title: 'Style Spotlight',
      category: 'Fashion Branding',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-brand-3-jr1rq2qZDWrg6lcUgKRvJyG2zhwoQ1.png',
      size: 'medium',
    },
    {
      id: 4,
      title: 'Sale Campaign',
      category: 'Fashion Branding',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-brand-4-k3J5T3aTvVVCbUjdsj428j51IysZHZ.png',
      size: 'large',
    },
    {
      id: 5,
      title: 'Big Sale',
      category: 'Fashion Branding',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-brand-5-pwMYJ6U7n81SRkvkBICoxU15dE9I4J.png',
      size: 'medium',
    },
    {
      id: 6,
      title: 'Fav Reviews',
      category: 'Fashion Branding',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/fashion-brand-6-rGecuSnuxVdFvnLNRFpkxIp2S606ex.png',
      size: 'medium',
    },
  ],
  poster: [
    {
      id: 7,
      title: 'Thirsty Sunday',
      category: 'Event Poster',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poster-party-kt7Ys63Fi3Ky3KJ18B6DxmXcBhh2Z6.png',
      size: 'large',
    },
    {
      id: 8,
      title: 'The Waffle Crunch',
      category: 'Restaurant Poster',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poster-waffle-GwzKm1ffyq3eQUcmefY66SxTbqWYZE.png',
      size: 'medium',
    },
    {
      id: 9,
      title: 'We Are Hiring',
      category: 'Corporate Poster',
      image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/poster-hiring-yhlDMZKy5ecIV5g7m5B67PMzn7lMzq.png',
      size: 'medium',
    },
  ],
}

// Get all projects for lightbox navigation
const allProjects = [...projects.fashion, ...projects.poster]

export function FeaturedWork() {
  const [activeCategory, setActiveCategory] = useState('fashion')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const currentProjects = projects[activeCategory as keyof typeof projects]

  const openLightbox = useCallback((projectId: number) => {
    const index = allProjects.findIndex(p => p.id === projectId)
    if (index !== -1) {
      setCurrentImageIndex(index)
      setLightboxOpen(true)
      document.body.style.overflow = 'hidden'
    }
  }, [])

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false)
    document.body.style.overflow = ''
  }, [])

  const goToPrevious = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === 0 ? allProjects.length - 1 : prev - 1))
  }, [])

  const goToNext = useCallback(() => {
    setCurrentImageIndex((prev) => (prev === allProjects.length - 1 ? 0 : prev + 1))
  }, [])

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeLightbox()
    if (e.key === 'ArrowLeft') goToPrevious()
    if (e.key === 'ArrowRight') goToNext()
  }, [closeLightbox, goToPrevious, goToNext])

  return (
    <>
      <section id="work" ref={ref} className="relative py-32 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header - Changed to just "Work" */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0A1E30] mb-8">
              Work
            </h2>

            {/* Category Tabs */}
            <div className="flex justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-[#0A1E30] text-white'
                      : 'bg-white/80 text-[#5E7896] hover:bg-white hover:text-[#0A1E30] border border-[#D9EAFF]'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid - Masonry Style */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {currentProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  data-cursor-project
                  onClick={() => openLightbox(project.id)}
                  className={`group relative rounded-2xl overflow-hidden bg-white shadow-lg shadow-[#0A1E30]/5 cursor-pointer ${
                    project.size === 'large' ? 'md:col-span-2 aspect-[16/10]' : 'aspect-[4/5]'
                  }`}
                >
                  {/* Image */}
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1E30]/90 via-[#0A1E30]/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <p className="text-sm font-medium text-[#4A8CFF] mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-xl lg:text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Glass border effect */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/20 rounded-2xl transition-colors duration-500" />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Premium Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center"
            onClick={closeLightbox}
            onKeyDown={handleKeyDown}
            tabIndex={0}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            {/* Dark blurred overlay */}
            <div className="absolute inset-0 bg-[#0A1E30]/95 backdrop-blur-xl" />
            
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.1 }}
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              aria-label="Close lightbox"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Navigation arrows */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
              className="absolute left-4 md:left-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              aria-label="Previous image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.15 }}
              onClick={(e) => { e.stopPropagation(); goToNext(); }}
              className="absolute right-4 md:right-8 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300"
              aria-label="Next image"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>

            {/* Image container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-[90vw] max-h-[85vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentImageIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="relative"
                >
                  <Image
                    src={allProjects[currentImageIndex].image}
                    alt={allProjects[currentImageIndex].title}
                    width={1200}
                    height={800}
                    className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* Image info */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A1E30]/80 to-transparent rounded-b-lg"
                  >
                    <p className="text-sm font-medium text-[#4A8CFF] mb-1">
                      {allProjects[currentImageIndex].category}
                    </p>
                    <h3 className="text-xl font-semibold text-white">
                      {allProjects[currentImageIndex].title}
                    </h3>
                    <p className="text-sm text-white/60 mt-2">
                      {currentImageIndex + 1} / {allProjects.length}
                    </p>
                  </motion.div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
