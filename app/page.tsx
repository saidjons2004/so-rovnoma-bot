import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { FeaturedPlaces } from "@/components/featured-places"
import { About } from "@/components/about"
import { Gallery } from "@/components/gallery"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <FeaturedPlaces />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  )
}
