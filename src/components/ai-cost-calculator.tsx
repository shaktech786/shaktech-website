"use client"

import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Calculator,
  DollarSign,
  TrendingUp,
  Zap,
  AlertCircle,
  Check,
  ChevronRight,
  Download,
  Mail
} from "lucide-react"

interface CalculatorInputs {
  developers: number
  hourlyRate: number
  projectWeeks: number
  aiIntegrationComplexity: 'basic' | 'moderate' | 'advanced'
  currentToolCosts: number
  expectedUsers: number
}

interface CostBreakdown {
  traditionalCost: number
  aiEnhancedCost: number
  savings: number
  savingsPercentage: number
  timeToMarket: number
  aiTimeToMarket: number
  roi: number
}

const AICostCalculator = () => {
  const [inputs, setInputs] = useState<CalculatorInputs>({
    developers: 3,
    hourlyRate: 150,
    projectWeeks: 12,
    aiIntegrationComplexity: 'moderate',
    currentToolCosts: 500,
    expectedUsers: 1000,
  })

  const [breakdown, setBreakdown] = useState<CostBreakdown | null>(null)
  const [showResults, setShowResults] = useState(false)
  const [email, setEmail] = useState("")
  const [showEmailCapture, setShowEmailCapture] = useState(false)

  const complexityMultipliers = {
    basic: { cost: 0.7, time: 0.6, efficiency: 1.3 },
    moderate: { cost: 0.5, time: 0.4, efficiency: 1.7 },
    advanced: { cost: 0.3, time: 0.25, efficiency: 2.5 },
  }

  const calculateCosts = () => {
    const hoursPerWeek = 40
    const totalHours = inputs.developers * hoursPerWeek * inputs.projectWeeks
    const traditionalCost = totalHours * inputs.hourlyRate

    const multiplier = complexityMultipliers[inputs.aiIntegrationComplexity]
    const aiEnhancedCost = traditionalCost * multiplier.cost + 15000 // Base AI implementation cost
    const savings = traditionalCost - aiEnhancedCost
    const savingsPercentage = (savings / traditionalCost) * 100

    const timeToMarket = inputs.projectWeeks
    const aiTimeToMarket = Math.ceil(inputs.projectWeeks * multiplier.time)

    // ROI calculation based on time saved and efficiency gains
    const monthlyRevenue = inputs.expectedUsers * 50 // Assumed $50 per user
    const monthsSaved = (timeToMarket - aiTimeToMarket) / 4
    const additionalRevenue = monthlyRevenue * monthsSaved
    const efficiencyGains = traditionalCost * (multiplier.efficiency - 1) * 0.3
    const roi = ((additionalRevenue + efficiencyGains + savings) / aiEnhancedCost) * 100

    setBreakdown({
      traditionalCost,
      aiEnhancedCost,
      savings,
      savingsPercentage,
      timeToMarket,
      aiTimeToMarket,
      roi,
    })
    setShowResults(true)
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount)
  }

  const handleDownloadReport = () => {
    setShowEmailCapture(true)
  }

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would send the report via email
    alert(`Report would be sent to ${email}`)
    setShowEmailCapture(false)
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <Card className="bg-gray-900 border-gray-700">
        <CardHeader className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-creative-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Calculator className="w-8 h-8 text-white" />
          </div>
          <CardTitle className="text-3xl font-bold text-white">
            AI Development ROI Calculator
          </CardTitle>
          <CardDescription className="text-gray-400 text-lg">
            Calculate your savings and ROI with AI-first development
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-8">
          {/* Input Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Number of Developers
                </label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  value={inputs.developers}
                  onChange={(e) => setInputs({...inputs, developers: parseInt(e.target.value) || 1})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Average Hourly Rate ($)
                </label>
                <input
                  type="number"
                  min="50"
                  max="500"
                  value={inputs.hourlyRate}
                  onChange={(e) => setInputs({...inputs, hourlyRate: parseInt(e.target.value) || 50})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Project Duration (weeks)
                </label>
                <input
                  type="number"
                  min="1"
                  max="52"
                  value={inputs.projectWeeks}
                  onChange={(e) => setInputs({...inputs, projectWeeks: parseInt(e.target.value) || 1})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  AI Integration Complexity
                </label>
                <select
                  value={inputs.aiIntegrationComplexity}
                  onChange={(e) => setInputs({...inputs, aiIntegrationComplexity: e.target.value as 'basic' | 'moderate' | 'advanced'})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                >
                  <option value="basic">Basic (Chatbots, Simple Automation)</option>
                  <option value="moderate">Moderate (Content Generation, Analytics)</option>
                  <option value="advanced">Advanced (Custom Models, Complex Workflows)</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Current Monthly Tool Costs ($)
                </label>
                <input
                  type="number"
                  min="0"
                  max="10000"
                  value={inputs.currentToolCosts}
                  onChange={(e) => setInputs({...inputs, currentToolCosts: parseInt(e.target.value) || 0})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-300 mb-2 block">
                  Expected Users/Customers
                </label>
                <input
                  type="number"
                  min="10"
                  max="1000000"
                  value={inputs.expectedUsers}
                  onChange={(e) => setInputs({...inputs, expectedUsers: parseInt(e.target.value) || 10})}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button 
              onClick={calculateCosts}
              size="lg"
              className="bg-gradient-to-r from-accent-500 to-creative-500 hover:from-accent-600 hover:to-creative-600 text-white group"
            >
              Calculate ROI
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Results Section */}
          {showResults && breakdown && (
            <div className="space-y-6 pt-8 border-t border-gray-700">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Your AI Development ROI</h3>
                <p className="text-gray-400">Based on your inputs, here&apos;s your potential savings</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-gradient-to-br from-red-900/20 to-red-800/20 border-red-700/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Traditional Development</span>
                      <DollarSign className="w-5 h-5 text-red-400" />
                    </div>
                    <p className="text-3xl font-bold text-white">{formatCurrency(breakdown.traditionalCost)}</p>
                    <p className="text-sm text-gray-400 mt-2">{breakdown.timeToMarket} weeks to market</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-900/20 to-green-800/20 border-green-700/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">AI-Enhanced Development</span>
                      <Zap className="w-5 h-5 text-green-400" />
                    </div>
                    <p className="text-3xl font-bold text-white">{formatCurrency(breakdown.aiEnhancedCost)}</p>
                    <p className="text-sm text-gray-400 mt-2">{breakdown.aiTimeToMarket} weeks to market</p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-accent-900/20 to-creative-900/20 border-accent-700/50">
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-400">Total Savings</span>
                      <TrendingUp className="w-5 h-5 text-accent-400" />
                    </div>
                    <p className="text-3xl font-bold text-accent-400">{formatCurrency(breakdown.savings)}</p>
                    <p className="text-sm text-gray-400 mt-2">{breakdown.savingsPercentage.toFixed(0)}% cost reduction</p>
                  </CardContent>
                </Card>
              </div>

              {/* ROI Metrics */}
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <p className="text-gray-400 mb-2">ROI</p>
                      <p className="text-4xl font-bold text-creative-400">{breakdown.roi.toFixed(0)}%</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Time to Market</p>
                      <p className="text-4xl font-bold text-accent-400">
                        {Math.round(((breakdown.timeToMarket - breakdown.aiTimeToMarket) / breakdown.timeToMarket) * 100)}% Faster
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-2">Break-even Point</p>
                      <p className="text-4xl font-bold text-primary-400">
                        {Math.ceil(breakdown.aiEnhancedCost / (breakdown.savings / breakdown.timeToMarket))} weeks
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Benefits List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">Additional Benefits</h4>
                  {[
                    "Reduced development errors",
                    "Improved code quality",
                    "Faster iteration cycles",
                    "Enhanced user experience",
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-white mb-3">Long-term Value</h4>
                  {[
                    "Scalability without linear cost increase",
                    "Competitive advantage in market",
                    "Future-proof technology stack",
                    "Continuous improvement with AI",
                  ].map((value, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Check className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="text-center pt-6 border-t border-gray-700">
                <p className="text-gray-400 mb-4">
                  Ready to achieve these savings for your project?
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button 
                    onClick={handleDownloadReport}
                    variant="outline"
                    className="group"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download Report
                  </Button>
                  <Button 
                    className="bg-gradient-to-r from-accent-500 to-creative-500 hover:from-accent-600 hover:to-creative-600 text-white"
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>

              {/* Email Capture Modal */}
              {showEmailCapture && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                  <Card className="bg-gray-900 border-gray-700 max-w-md w-full mx-4">
                    <CardHeader>
                      <CardTitle className="text-white">Get Your Detailed Report</CardTitle>
                      <CardDescription className="text-gray-400">
                        Enter your email to receive a comprehensive ROI analysis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleEmailSubmit} className="space-y-4">
                        <div>
                          <label className="text-sm font-medium text-gray-300 mb-2 block">
                            Email Address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder="you@company.com"
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-gray-400">
                          <AlertCircle className="w-4 h-4" />
                          <span>We&apos;ll also send you AI development tips</span>
                        </div>
                        <div className="flex space-x-3">
                          <Button type="submit" className="flex-1 bg-accent-500 hover:bg-accent-600 text-white">
                            <Mail className="w-4 h-4 mr-2" />
                            Send Report
                          </Button>
                          <Button 
                            type="button"
                            variant="outline"
                            onClick={() => setShowEmailCapture(false)}
                            className="flex-1"
                          >
                            Cancel
                          </Button>
                        </div>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default AICostCalculator