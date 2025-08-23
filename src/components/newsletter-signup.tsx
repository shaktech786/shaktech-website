"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Mail,
  Sparkles,
  CheckCircle,
  AlertCircle,
  ArrowRight,
  Gift,
  Zap
} from "lucide-react"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate API call - in production, this would connect to your email service
    setTimeout(() => {
      setStatus("success")
      setMessage("Welcome! Check your email for your free AI Readiness Checklist.")
      setEmail("")
      
      // Reset after 5 seconds
      setTimeout(() => {
        setStatus("idle")
        setMessage("")
      }, 5000)
    }, 1000)
  }

  const benefits = [
    "Weekly AI development tips & tricks",
    "Early access to new tools & resources",
    "Exclusive discounts on services",
    "Case studies & success stories",
  ]

  return (
    <Card className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border-accent-500/50 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-creative-500/5" />
      
      <CardHeader className="text-center relative z-10">
        <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-creative-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Mail className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-3xl font-bold text-white mb-2">
          Join the AI Revolution
        </CardTitle>
        <CardDescription className="text-gray-300 text-lg">
          Get weekly insights on AI development delivered to your inbox
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-6 relative z-10">
        {/* Benefits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
              <span className="text-sm text-gray-300">{benefit}</span>
            </div>
          ))}
        </div>

        {/* Lead Magnet Highlight */}
        <div className="bg-gradient-to-r from-accent-900/30 to-creative-900/30 border border-accent-500/30 rounded-lg p-4">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 bg-accent-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
              <Gift className="w-5 h-5 text-accent-400" />
            </div>
            <div>
              <h4 className="text-white font-semibold mb-1">Free Bonus!</h4>
              <p className="text-sm text-gray-300">
                Subscribe now and get our comprehensive AI Readiness Checklist 
                (50-point assessment, valued at $97) absolutely free!
              </p>
            </div>
          </div>
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              disabled={status === "loading" || status === "success"}
              className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-200 disabled:opacity-50"
            />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {status === "success" && (
                <CheckCircle className="w-5 h-5 text-green-400" />
              )}
            </div>
          </div>

          <Button 
            type="submit"
            size="lg"
            disabled={status === "loading" || status === "success"}
            className="w-full bg-gradient-to-r from-accent-500 to-creative-500 hover:from-accent-600 hover:to-creative-600 text-white font-semibold group transition-all duration-200"
          >
            {status === "loading" ? (
              <span className="flex items-center justify-center">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Subscribing...
              </span>
            ) : status === "success" ? (
              <span className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                Subscribed Successfully!
              </span>
            ) : (
              <span className="flex items-center justify-center">
                Get Free Checklist
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </span>
            )}
          </Button>

          {/* Privacy Notice */}
          <p className="text-xs text-gray-400 text-center">
            <AlertCircle className="w-3 h-3 inline mr-1" />
            We respect your privacy. Unsubscribe at any time.
          </p>
        </form>

        {/* Success/Error Messages */}
        {message && (
          <div className={`p-3 rounded-lg text-sm ${
            status === "success" 
              ? "bg-green-900/30 border border-green-700/50 text-green-400" 
              : "bg-red-900/30 border border-red-700/50 text-red-400"
          }`}>
            {message}
          </div>
        )}

        {/* Social Proof */}
        <div className="text-center pt-4 border-t border-gray-700">
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400">
            <div className="flex items-center space-x-1">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>2,847 developers subscribed</span>
            </div>
            <div className="flex items-center space-x-1">
              <Sparkles className="w-4 h-4 text-accent-400" />
              <span>4.9/5 rating</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default NewsletterSignup