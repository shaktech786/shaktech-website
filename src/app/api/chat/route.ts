import { NextResponse } from "next/server"
import OpenAI from "openai"
import { withRateLimit } from '@/lib/rate-limiter'

// Initialize OpenAI only if API key is available
const openai = process.env.OPENAI_API_KEY 
  ? new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    })
  : null

const SYSTEM_PROMPT = `You are ShakBot, an AI assistant for ShakTech - Shakeel Bhamani's AI-first software development consultancy.

Your role: Help visitors understand Shakeel's services and guide them toward scheduling a consultation.

Scope: ONLY discuss ShakTech services, Shakeel's background, portfolio, pricing, and booking consultations.

When asked anything off-topic (math, general knowledge, programming tutorials, etc.), politely redirect:
"I'm here to discuss ShakTech's AI-first software development services. I can't help with that, but I'd be happy to talk about how Shakeel can help with your AI or software needs!"

About Shakeel Bhamani:
- US-based AI-first software consultant and developer in Atlanta, Georgia (EST timezone)
- Georgia Tech Computer Science graduate with 10+ years enterprise experience
- Native English speaker with clear communication and cultural alignment
- Expert in React, Next.js, TypeScript, Python, and AI/ML integration
- Loopstation Beatbox Vice Champion 2017 (American Beatbox Championships)
- TEDx speaker on creativity and innovation
- Trained 11 diverse interns, 100% received full-time offers
- Believes in bridging creativity and technology ("Digital Jazz")

Services Offered:
1. **AI Strategy Consulting** ($2,500+): AI readiness assessment, roadmap development, ROI projections
2. **AI-First Development** ($15,000+): Full-stack development, API integration, database optimization
3. **Team Training** ($5,000+): Hands-on workshops, code reviews, mentoring

Notable Projects:
- **ShakGPT**: Autonomous social media AI agent
- **Tmux Orchestrator**: 24/7 AI team management system
- **AI Stock Researcher**: Financial analysis platform
- **EstimAIte**: AI-enhanced agile planning tool

Key Differentiators:
- US-based consultant: No timezone delays, clear communication, cultural alignment
- Georgia Tech education with Fortune 500 consulting experience
- Combines technical excellence with creative innovation
- Focus on practical, production-ready AI solutions
- Emphasis on knowledge transfer and team enablement
- Experience with enterprise-scale transformations

Contact: hi@shak-tech.com

Style: Professional, warm, concise. Use markdown when helpful. Guide every conversation toward booking a consultation.`

// Minimal pre-filter for obvious spam to save tokens
function isObviouslyOffTopic(message: string): boolean {
  const msg = message.trim().toLowerCase()

  // Only filter pure math expressions and obvious spam
  return /^\d+\s*[\+\-\*\/×÷]\s*\d+\s*$/.test(msg) ||  // "2+2"
         msg.length < 2 ||  // Too short
         /^(.)\1{10,}$/.test(msg)  // Repeated characters (spam)
}

async function handleChatRequest(request: Request) {
  try {
    const { message, conversationHistory } = await request.json()

    // Pre-filter check to save tokens on obviously off-topic questions
    if (isObviouslyOffTopic(message)) {
      return NextResponse.json({
        response: "I'm specifically designed to help you learn about ShakTech's AI-first software development services. I can't help with general questions, but I'd be happy to discuss how Shakeel can help with your AI or software development needs! What challenges are you facing with your project?"
      })
    }

    if (!openai) {
      // Fallback to a helpful response if API key is not set
      return NextResponse.json({
        response: "I'm currently in demo mode. To enable full AI capabilities, please configure the OpenAI API key. Meanwhile, feel free to explore the website or contact Shakeel directly at hi@shak-tech.com for any questions!"
      })
    }

    // Build messages array with conversation history for context
    interface ChatMessage {
      role: "system" | "user" | "assistant"
      content: string
    }
    
    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT }
    ]
    
    // Add conversation history if provided (last 10 messages for context)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      const recentHistory = conversationHistory.slice(-10)
      recentHistory.forEach((msg: { isUser: boolean; content: string }) => {
        messages.push({
          role: msg.isUser ? "user" : "assistant",
          content: msg.content
        })
      })
    }
    
    // Add current message
    messages.push({ role: "user", content: message })

    const completion = await openai.chat.completions.create({
      messages,
      model: "gpt-4o-mini",
      temperature: 0.1, // Very low temperature for strict adherence to system prompt
      max_tokens: 300, // Reduced token limit to keep responses concise and save costs
      presence_penalty: 0.6,
      frequency_penalty: 0.3,
    })

    const response = completion.choices[0]?.message?.content || "I apologize, but I couldn't generate a response. Please try again or contact us directly at hi@shak-tech.com"

    return NextResponse.json({ response })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json({
      response: "I encountered an error while processing your request. Please try again or contact us directly at hi@shak-tech.com"
    }, { status: 500 })
  }
}

export async function POST(request: Request) {
  return withRateLimit(request, () => handleChatRequest(request));
}