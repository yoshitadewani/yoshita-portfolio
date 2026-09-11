import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { FeaturedWork } from '@/components/featured-work'
import { About } from '@/components/about'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <About />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
