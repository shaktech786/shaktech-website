import Link from "next/link"
import { Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import PortfolioPreview from "@/components/portfolio-preview"
import StudioApproach from "@/components/studio-approach"
import FounderSection from "@/components/founder-section"
import VisitorPaths from "@/components/visitor-paths"
import BuyerQuestions from "@/components/buyer-questions"
import Footer from "@/components/footer"
import { bookingUrl } from "@/lib/site"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PortfolioPreview />
      <StudioApproach />
      <FounderSection />
      <VisitorPaths />
      <BuyerQuestions />

      <section className="py-14 sm:py-20 bg-gray-950">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Have a product in mind?</h2>
          <p className="mt-4 text-lg text-gray-300">
            Tell me about it on a call. Afterwards I send a written scope with a fixed price and a timeline.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <Button variant="cta" size="xl" asChild>
              <a href={bookingUrl} target="_blank" rel="noopener noreferrer">
                <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
                Book a call
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link href="/contact">Send a message</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
