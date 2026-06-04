'use client'

import { CustomCursor } from '@/components/custom-cursor'
import { MountainBackground } from '@/components/mountain-background'
import { PageLoader } from '@/components/page-loader'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeaturedWork } from '@/components/featured-work'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      {/* Page Loader */}
      <PageLoader />
      
      {/* Custom Cursor - Only on desktop */}
      <div className="hidden md:block">
        <CustomCursor />
      </div>

      {/* Grain Overlay */}
      <div className="grain-overlay" />

      {/* Mountain Background */}
      <MountainBackground />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="relative">
        <Hero />
        <FeaturedWork />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
