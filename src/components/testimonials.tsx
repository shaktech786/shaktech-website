"use client"

import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

interface TestimonialProps {
  content: string
  clientName: string
  clientTitle: string
  company: string
  rating: number
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  content,
  clientName,
  clientTitle,
  company,
  rating
}) => (
  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
    <CardContent className="p-6">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-amber-500 fill-current" />
        ))}
      </div>
      
      <div className="relative mb-6">
        <Quote className="absolute -top-2 -left-1 w-8 h-8 text-indigo-400/30" />
        <p className="text-gray-200 leading-relaxed pl-6 italic">
          &quot;{content}&quot;
        </p>
      </div>
      
      <div className="border-t border-gray-700 pt-4">
        <div className="font-semibold text-white">
          {clientName}
        </div>
        <div className="text-sm text-gray-300">
          {clientTitle} at {company}
        </div>
      </div>
    </CardContent>
  </Card>
)

const Testimonials = () => {
  const testimonials = [
    {
      content: "Our company... has been working with ShakTech since we established the company. ShakTech has created our company's website in a very professional way. We are beyond pleased with Shakeel's impeccable service.",
      clientName: "Global Language Services Team",
      clientTitle: "Client",
      company: "Global Language Services, Inc.",
      rating: 5
    },
    {
      content: "We recently had the pleasure of working with ShakTech for our trading card wholesaler business, and we couldn't be more thrilled with the outcome.",
      clientName: "Prince Distribution Team",
      clientTitle: "Client",
      company: "Prince Distribution",
      rating: 5
    },
    {
      content: "Shakeel demonstrated an outstanding knowledge of UI design principles and was able to deliver a polished and user-friendly interface that exceeded our expectations.",
      clientName: "Unstationery Team",
      clientTitle: "Client", 
      company: "Unstationery",
      rating: 5
    }
  ]

  return (
    <section className="py-24 bg-gradient-radial relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            What <span className="text-gradient-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From small businesses to established companies – 
            see why clients trust a developer who combines 
            technical skills with genuine care for people and outcomes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 pt-16 border-t border-gray-200 dark:border-gray-700">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-white mb-2">
              ThoughtWorks Consultant & Creative Technologist
            </h3>
            <p className="text-gray-400">
              7+ years of professional development experience. Based in Atlanta, serving clients nationwide.
            </p>
          </div>
          
          <div className="flex items-center justify-center space-x-8 opacity-70">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">ATL</div>
              <div className="text-sm text-gray-500">Atlanta Based</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-600">7+ Years</div>
              <div className="text-sm text-gray-500">Professional Dev</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-amber-600">GA</div>
              <div className="text-sm text-gray-500">Georgia Tech</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials