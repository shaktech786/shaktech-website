import HeroSection from "@/components/hero-section"
import PortfolioPreview from "@/components/portfolio-preview"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PortfolioPreview />
      <Testimonials />
      <Footer />
    </main>
  )
}
