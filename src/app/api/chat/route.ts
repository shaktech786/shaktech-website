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
- Staff Software Engineer; former Lead Software Consultant at Thoughtworks (2016-2018, 2021-2026)
- Builds AI harnesses: autonomous agents, MCP servers, AI code review pipelines, spec-driven development workflows
- Ships enterprise-grade code solo at the pace of a full development team, for startups through Fortune 500s
- Native English speaker with clear communication and cultural alignment
- Expert in React, Next.js, TypeScript, Python, and AI/ML integration
- Loopstation Beatbox Vice Champion 2017 (American Beatbox Championships)
- TEDx speaker on creativity and innovation
- Trained 11 diverse interns, 100% received full-time offers
- Believes in bridging creativity and technology ("Digital Jazz")

Services Offered (see /services and /pricing for detail):
1. **AI-First Team Transformation** ($10,000-$25,000, 6-8 weeks): AI tool integration, spec-driven development, shared MCP infrastructure, AI code review, team coaching
2. **Full-Stack AI Application Development** ($25,000-$75,000, 3-4 months): end-to-end AI apps and custom AI harnesses (agents, MCP servers, autonomous workflows)
3. **Leadership Coaching for AI Adoption** ($5,000-$15,000, 3-6 months): 1:1 coaching for technical leaders
4. **Social Impact Tech Consulting** ($5,000-$20,000): reduced-rate and pro-bono options for nonprofits

Notable Projects (details at /portfolio):
- **Prelive** (prelive.ai): AI streaming toolkit for Twitch/YouTube/Kick creators. Single-ingest multistream relay, 12+ OBS docks, Claude-powered content generation, social scheduling
- **Prelive Deck**: open-source Electron soundboard and stream control surface (OBS, LiveSplit, Discord, ASIO audio)
- **Tack**: epic and story tracker with CLI and MCP server, built to be driven by Claude Code
- **Alaap**: AI voice-note library for a vocal music teacher (Gemini, pgvector, multilingual)
- **Unbottle**: open-source AI music production companion for solo musicians
- **VeryGoodMelon.Fun**: open-source collection of anxiety-reducing web games with AI conversations with historical thinkers
- **Bursar**: self-hosted, privacy-first AI accountant (Mercury, Chase, Gmail invoices, tax rules)
- **Arr Suite MCP Server**: open-source MCP server on PyPI for Sonarr/Radarr/Plex and friends
- **ASIS**: autonomous software improvement system orchestrating Claude Code workers
- **MIDAS**: AI stock research platform with paper trading
- **EstimAIte**: open-source AI planning poker
- Morpheus (voice-first remote control) has been decommissioned; do not recommend it

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