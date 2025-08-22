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
    greeting: "Hello! I'm excited to help you learn about Shakeel's AI-first approach to software development. What specific area interests you most?",
    services: "Shakeel offers three main service tiers: 1) AI Strategy Consulting (starting at $2,500) for strategic guidance, 2) AI-First Development (starting at $15,000) for hands-on building, and 3) Team Training & Enablement (starting at $5,000) for upskilling your team. Which one sounds most relevant to your needs?",
    experience: "Shakeel has 10+ years of enterprise software experience with expertise in AI-first development. He's also a TEDx speaker and beatbox champion who brings creative problem-solving to technical challenges. He's led diversity programs, built AI platforms serving 1000+ users, and specializes in empathetic consulting.",
    portfolio: "Some of Shakeel's notable projects include: ShakGPT (autonomous AI social media platform), Tmux Orchestrator (24/7 AI agent system), AI Stock Researcher (intelligent financial analysis), and EstimAIte (AI-enhanced agile planning). Each demonstrates different aspects of AI-first development.",
    contact: "The best way to reach Shakeel is through the contact form on this site. He's also on LinkedIn at linkedin.com/in/shakeelbhamani. For project discussions, I'd recommend using the contact form or booking a discovery call.",
    beatbox: "Shakeel was the Loopstation Vice Champion at the 2017 American Beatbox Championships and is a TEDx speaker! His creative background in music brings unique problem-solving approaches to software development. He believes the best technical solutions come from creative thinking.",
    thoughtworks: "Shakeel has extensive experience in enterprise consulting where he led AI-first initiatives and received executive commendation for successfully training 11 diverse interns with 100% full-time offer rate. He specializes in digital accelerator programs and mentoring engineering teams.",
    default: "That's a great question! For detailed information about that specific topic, I'd recommend reaching out to Shakeel directly through the contact form or scheduling a discovery call. He loves discussing AI, software development, and how creativity intersects with technology."
  }

  const getResponseForMessage = (message: string): string => {
    const lowerMessage = message.toLowerCase()
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return predefinedResponses.greeting
    } else if (lowerMessage.includes('service') || lowerMessage.includes('pricing') || lowerMessage.includes('cost')) {
      return predefinedResponses.services
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('thoughtworks')) {
      return predefinedResponses.thoughtworks
    } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
      return predefinedResponses.portfolio
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('call')) {
      return predefinedResponses.contact
    } else if (lowerMessage.includes('beatbox') || lowerMessage.includes('music') || lowerMessage.includes('tedx') || lowerMessage.includes('creative')) {
      return predefinedResponses.beatbox
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