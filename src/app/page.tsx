import HeroSection from "@/components/hero-section"
import PortfolioPreview from "@/components/portfolio-preview"
import StudioApproach from "@/components/studio-approach"
import FounderSection from "@/components/founder-section"
import VisitorPaths from "@/components/visitor-paths"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioPreview />
      <StudioApproach />
      <FounderSection />
      <VisitorPaths />
      <Footer />
    </main>
  )
}
