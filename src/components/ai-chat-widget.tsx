"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Minimize2,
  Maximize2,
  Sparkles
} from "lucide-react"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

const AIChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hi! I'm ShakBot, Shakeel's AI assistant. I can help you learn about his services, experience, and how AI-first software delivery might benefit your project. What would you like to know?",
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const predefinedResponses = {
    greeting: "Hello! I'm Shakeel's AI assistant. I can help you learn about his AI-first software services, explore his portfolio, or connect you with him. What would you like to know? You can ask about:\n• Services & pricing\n• Technical expertise\n• Past projects\n• How to get started",
    
    services: "Shakeel offers three comprehensive service tiers:\n\n**🎯 AI Strategy Consulting** ($2,500+)\n• AI readiness assessment\n• Custom roadmap development\n• Technology recommendations\n• ROI projections\n\n**🚀 AI-First Development** ($15,000+)\n• Full-stack application development\n• API design & integration\n• Database optimization\n• Production deployment\n\n**📚 Team Training** ($5,000+)\n• Hands-on workshops\n• Code reviews & mentoring\n• Custom curriculum\n• Ongoing support\n\nWhich service aligns with your current needs?",
    
    experience: "Shakeel brings a unique combination of technical excellence and creative innovation:\n\n**Technical Background:**\n• 10+ years enterprise software experience\n• Georgia Tech Computer Science graduate\n• Expert in React, Next.js, TypeScript, Python\n• Specialized in AI/ML integration (OpenAI, Claude, LangChain)\n\n**Leadership & Impact:**\n• Trained 11 diverse interns → 100% received full-time offers\n• Built AI platforms serving 1000+ users\n• Led digital transformation initiatives\n\n**Creative Edge:**\n• TEDx speaker on creativity in tech\n• Beatbox Vice Champion 2017\n• Believes the best solutions come from bridging different worlds\n\nWould you like to know more about any specific aspect?",
    
    portfolio: "Here are some of Shakeel's standout AI projects:\n\n**🤖 ShakGPT** - Autonomous Social Media AI\n• Manages Twitter/LinkedIn autonomously\n• Generates contextual content\n• Built with Python, OpenAI API\n\n**💻 Tmux Orchestrator** - 24/7 AI Team System\n• Manages multiple AI agents\n• Automatic task distribution\n• Real-time monitoring dashboard\n\n**📊 AI Stock Researcher** - Financial Analysis\n• Real-time market analysis\n• Automated research reports\n• Risk assessment algorithms\n\n**🎯 EstimAIte** - Agile Planning Tool\n• AI-enhanced story estimation\n• Team velocity prediction\n• Sprint planning optimization\n\nEach project showcases different aspects of AI integration. Which type of solution interests you?",
    
    contact: "Ready to start your AI journey? Here are the best ways to connect:\n\n**📧 Email:** hi@shak-tech.com\n**💼 LinkedIn:** linkedin.com/in/shakeelbhamani\n**📝 Contact Form:** Use the form on our Contact page\n\n**Next Steps:**\n1. Fill out the contact form with your project details\n2. Shakeel will review and respond within 24 hours\n3. Schedule a free discovery call\n4. Receive a custom proposal\n\nWhat type of project do you have in mind?",
    
    beatbox: "This is one of my favorite topics! 🎵\n\nShakeel's beatboxing journey isn't just a fun fact – it's central to his approach:\n\n**Achievements:**\n• 🏆 Loopstation Vice Champion 2017 (American Beatbox Championships)\n• 🎤 TEDx speaker on creativity and innovation\n• 🎵 Performed at major venues across the US\n\n**How it applies to tech:**\n• Pattern recognition from music → Better algorithm design\n• Live performance skills → Confident client presentations\n• Creative improvisation → Innovative problem-solving\n• Rhythm and timing → Understanding system synchronization\n\nHe literally brings the rhythm to AI development! Want to see how this creative approach could benefit your project?",
    
    process: "Shakeel follows a proven 4-step process:\n\n**1. Discovery Call** 🎯\n• Understand your challenges\n• Identify AI opportunities\n• Assess technical requirements\n• Define success metrics\n\n**2. Strategy & Planning** 🧠\n• Create custom roadmap\n• Select technology stack\n• Define milestones\n• Estimate timeline & budget\n\n**3. Implementation** 🚀\n• Agile development sprints\n• Regular progress updates\n• Continuous testing\n• Client collaboration\n\n**4. Success & Growth** 📈\n• Deployment support\n• Team training\n• Performance monitoring\n• Ongoing optimization\n\nWhere are you in your AI journey?",
    
    tech: "Shakeel works with cutting-edge technologies:\n\n**AI & Machine Learning:**\n• OpenAI GPT-4, Claude API\n• LangChain, Vector Databases\n• RAG systems, AI Agents\n• Custom ML models\n\n**Frontend:**\n• React, Next.js 15\n• TypeScript, Tailwind CSS\n• Mobile-responsive design\n\n**Backend:**\n• Node.js, Python\n• PostgreSQL, MongoDB\n• REST & GraphQL APIs\n\n**Cloud & DevOps:**\n• AWS, Vercel\n• Docker, CI/CD\n• Monitoring & analytics\n\nWhat's your current tech stack?",
    
    default: "I understand you're interested in learning more! While I can answer many questions, for specific project discussions or detailed technical consultations, I'd recommend:\n\n1. **Browse our Services page** for detailed offerings\n2. **Check the Portfolio** for similar projects\n3. **Use the Contact form** for custom inquiries\n4. **Schedule a call** for in-depth discussion\n\nIs there anything specific I can help clarify about Shakeel's services or expertise?"
  }

  const getResponseForMessage = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey') || lowerMessage.includes('start')) {
      return predefinedResponses.greeting
    } else if (lowerMessage.includes('service') || lowerMessage.includes('pricing') || lowerMessage.includes('cost') || lowerMessage.includes('offer') || lowerMessage.includes('package')) {
      return predefinedResponses.services
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('qualification') || lowerMessage.includes('about')) {
      return predefinedResponses.experience
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('built') || lowerMessage.includes('example')) {
      return predefinedResponses.portfolio
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('call') || lowerMessage.includes('email') || lowerMessage.includes('schedule')) {
      return predefinedResponses.contact
    } else if (lowerMessage.includes('beatbox') || lowerMessage.includes('music') || lowerMessage.includes('tedx') || lowerMessage.includes('creative') || lowerMessage.includes('champion')) {
      return predefinedResponses.beatbox
    } else if (lowerMessage.includes('process') || lowerMessage.includes('how') || lowerMessage.includes('approach') || lowerMessage.includes('methodology')) {
      return predefinedResponses.process
    } else if (lowerMessage.includes('tech') || lowerMessage.includes('stack') || lowerMessage.includes('language') || lowerMessage.includes('framework') || lowerMessage.includes('tool')) {
      return predefinedResponses.tech
    } else {
      return predefinedResponses.default
    }
  }

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage.trim(),
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: getResponseForMessage(userMessage.content),
        isUser: false,
        timestamp: new Date()
      }
      
      setMessages(prev => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  if (!isMounted) {
    return null
  }

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-primary-600 via-accent-500 to-creative-500 hover:from-primary-700 hover:via-accent-600 hover:to-creative-600 shadow-lg hover:shadow-xl transition-all duration-300 group beat-sync"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className={`w-96 bg-gray-900 border-gray-700 shadow-2xl transition-all duration-300 ${isMinimized ? 'h-16' : 'h-[500px]'}`}>
        <CardHeader className="flex flex-row items-center justify-between pb-3 border-b border-gray-700">
          <CardTitle className="text-lg font-bold text-white flex items-center">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-accent-500 rounded-full flex items-center justify-center mr-3">
              <Bot className="w-5 h-5 text-white" />
            </div>
            ShakBot
            <span className="ml-2 text-xs bg-accent-500 text-white px-2 py-1 rounded-full">AI</span>
          </CardTitle>
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMinimized(!isMinimized)}
              className="text-gray-400 hover:text-white w-8 h-8"
            >
              {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white w-8 h-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </CardHeader>

        {!isMinimized && (
          <CardContent className="flex flex-col h-[420px] p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] ${message.isUser ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`p-3 rounded-lg ${
                        message.isUser
                          ? 'bg-gradient-to-r from-primary-600 to-accent-500 text-white'
                          : 'bg-gray-800 text-gray-300'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{message.content}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${message.isUser ? 'order-1 mr-2 bg-creative-500' : 'order-2 ml-2 bg-accent-500'}`}>
                    {message.isUser ? <User className="w-3 h-3 text-white" /> : <Bot className="w-3 h-3 text-white" />}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mr-2 bg-accent-500">
                    <Bot className="w-3 h-3 text-white" />
                  </div>
                  <div className="bg-gray-800 text-gray-300 p-3 rounded-lg">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" />
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                      <div className="w-2 h-2 bg-accent-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Shakeel's services, experience, or projects..."
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-to-r from-primary-600 to-accent-500 hover:from-primary-700 hover:to-accent-600 w-10 h-10 p-0"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-gray-500 mt-2 text-center">
                <Sparkles className="w-3 h-3 inline mr-1" />
                Powered by ShakTech AI
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  )
}

export default AIChatWidget