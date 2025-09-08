"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { 
  Send,
  Calendar,
  Mail,
  MapPin,
  Clock,
  CheckCircle,
  Linkedin,
  Github,
  ExternalLink,
  User,
  Building,
  MessageSquare,
  DollarSign,
  Timer,
  Sparkles
} from "lucide-react"

interface FormData {
  name: string
  email: string
  company: string
  service: string
  budget: string
  timeline: string
  message: string
}

const ContactPage = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [touched, setTouched] = useState<Record<string, boolean>>({})

  const validateField = (name: string, value: string) => {
    const newErrors = { ...errors }
    
    switch (name) {
      case 'name':
        if (!value.trim()) {
          newErrors.name = 'Name is required'
        } else {
          delete newErrors.name
        }
        break
      case 'email':
        if (!value.trim()) {
          newErrors.email = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          newErrors.email = 'Please enter a valid email address'
        } else {
          delete newErrors.email
        }
        break
      case 'message':
        if (!value.trim()) {
          newErrors.message = 'Message is required'
        } else if (value.length < 10) {
          newErrors.message = 'Message must be at least 10 characters'
        } else {
          delete newErrors.message
        }
        break
    }
    
    setErrors(newErrors)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    if (touched[name]) {
      validateField(name, value)
    }
  }
  
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    validateField(name, value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors: Partial<FormData> = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Please enter a valid email address'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    else if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters'
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      setTouched({
        name: true,
        email: true,
        message: true
      })
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          company: '',
          service: '',
          budget: '',
          timeline: '',
          message: ''
        })
        setErrors({})
        setTouched({})
      } else {
        console.error('Contact form error:', data.error)
        // You could show an error message to the user here
      }
    } catch (error) {
      console.error('Network error:', error)
      // You could show an error message to the user here
    } finally {
      setIsSubmitting(false)
    }
  }

  const services = [
    { value: 'strategy', label: 'AI Strategy Consulting' },
    { value: 'development', label: 'AI-First Development' },
    { value: 'training', label: 'Team Training & Enablement' },
    { value: 'other', label: 'Other / Not Sure Yet' }
  ]

  const budgets = [
    { value: 'under-5k', label: 'Under $5,000' },
    { value: '5k-15k', label: '$5,000 - $15,000' },
    { value: '15k-50k', label: '$15,000 - $50,000' },
    { value: '50k-plus', label: '$50,000+' },
    { value: 'not-sure', label: 'Not sure yet' }
  ]

  const timelines = [
    { value: 'asap', label: 'ASAP' },
    { value: '1-month', label: 'Within 1 month' },
    { value: '1-3-months', label: '1-3 months' },
    { value: '3-6-months', label: '3-6 months' },
    { value: '6-plus-months', label: '6+ months' }
  ]

  if (submitted) {
    return (
      <main className="min-h-screen pt-16 bg-gray-900 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">Message Sent Successfully!</h1>
          <p className="text-xl text-gray-300 mb-8">
            Thank you for reaching out. I&apos;ll review your message and get back to you within 2 business days 
            with next steps for our collaboration.
          </p>
          <Button variant="cta" size="lg" onClick={() => setSubmitted(false)}>
            Send Another Message
          </Button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-indigo-900 via-indigo-950 to-cyan-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center space-x-2 bg-indigo-800/50 px-4 py-2 rounded-full border border-indigo-700 mb-8">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm font-medium text-cyan-300">
              Let&apos;s Work Together
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Ready to Transform Your
            <span className="block text-gradient-creative">Business with AI?</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
            Every great project starts with a conversation. Let&apos;s discuss your vision, 
            challenges, and how AI-first software delivery can accelerate your success.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-white flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-cyan-400" />
                    Tell Me About Your Project
                  </CardTitle>
                  <p className="text-gray-400">
                    Fill out this form and I&apos;ll get back to you within 2 business days with next steps.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onBlur={handleBlur}
                          className={`w-full px-4 py-3 bg-gray-800 border ${errors.name ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors`}
                          placeholder="Your full name"
                        />
                        {errors.name && touched.name && (
                          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                        <Building className="w-4 h-4 inline mr-2" />
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        placeholder="Your company name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                          Service Interested In
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service.value} value={service.value}>
                              {service.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-300 mb-2">
                          <DollarSign className="w-4 h-4 inline mr-2" />
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select budget</option>
                          {budgets.map((budget) => (
                            <option key={budget.value} value={budget.value}>
                              {budget.label}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-300 mb-2">
                          <Timer className="w-4 h-4 inline mr-2" />
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                        >
                          <option value="">Select timeline</option>
                          {timelines.map((timeline) => (
                            <option key={timeline.value} value={timeline.value}>
                              {timeline.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        <MessageSquare className="w-4 h-4 inline mr-2" />
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-vertical"
                        placeholder="Tell me about your project, goals, challenges, and what you're hoping to achieve. The more details you provide, the better I can help you."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      variant="cta" 
                      size="lg" 
                      className="w-full group" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-300">
                    <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:hi@shak-tech.com" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                        hi@shak-tech.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-400">Atlanta, Georgia, USA 🇺🇸</p>
                      <p className="text-gray-500 text-sm">EST Timezone</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 text-gray-300">
                    <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Response Time</p>
                      <p className="text-gray-400">Within 2 business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white">
                    Connect With Me
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://linkedin.com/in/shakeelbhamani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <Linkedin className="w-5 h-5 text-blue-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-gray-500 text-sm">Professional profile</p>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <a
                    href="https://github.com/shakeelbhamani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <Github className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium">GitHub</p>
                      <p className="text-gray-500 text-sm">Open source projects</p>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  
                  <a
                    href="https://linktr.ee/shakbbx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 text-gray-300 hover:text-cyan-400 transition-colors group"
                  >
                    <ExternalLink className="w-5 h-5 text-amber-400 flex-shrink-0" />
                    <div className="flex-1">
                      <p className="font-medium">TEDx & Music</p>
                      <p className="text-gray-500 text-sm">Beatboxing & speaking</p>
                    </div>
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </CardContent>
              </Card>

              {/* Calendar Booking */}
              <Card className="bg-gradient-to-br from-cyan-900/20 to-amber-900/20 border-cyan-700">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-white flex items-center">
                    <Calendar className="w-5 h-5 mr-2 text-cyan-400" />
                    Book a Discovery Call
                  </CardTitle>
                  <p className="text-gray-400 text-sm">
                    Prefer a live conversation? Schedule a 30-minute discovery call with a US-based expert – 
                    no timezone confusion, just clear communication in Eastern Time.
                  </p>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" className="w-full border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white" asChild>
                    <a href="https://calendly.com/shakeel-bhamani" target="_blank" rel="noopener noreferrer">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Call
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default ContactPage