import { HeroSection } from "@/components/hero-section"
import { NewsSection } from "@/components/news-section"
import { ServicesSection } from "@/components/services-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <NewsSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
