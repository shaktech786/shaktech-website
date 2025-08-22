import React from "react"
import Link from "next/link"
import { Github, Linkedin, Mail, ExternalLink, Code } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "AI Strategy Consulting", href: "/services#strategy" },
        { name: "AI-First Development", href: "/services#development" },
        { name: "Team Training & Enablement", href: "/services#training" },
        { name: "Technical Leadership", href: "/services#leadership" }
      ]
    },
    {
      title: "Portfolio",
      links: [
        { name: "AI Platforms", href: "/portfolio#ai-platforms" },
        { name: "Automation Systems", href: "/portfolio#automation" },
        { name: "Web Applications", href: "/portfolio#web-apps" },
        { name: "Case Studies", href: "/portfolio#case-studies" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog & Insights", href: "/blog" },
        { name: "AIFSD Methodology", href: "/blog/aifsd-methodology" },
        { name: "Speaking & Events", href: "/about#speaking" },
        { name: "Open Source", href: "https://github.com/shakeelbhamani", external: true }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com/in/shakeelbhamani", external: true },
        { name: "GitHub", href: "https://github.com/shakeelbhamani", external: true },
        { name: "TEDx Talk", href: "https://linktr.ee/shakbbx", external: true },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  return (
    <footer className="bg-primary-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold text-white">ShakTech</span>
                <div className="text-xs text-gray-400 -mt-1">AI-First Software Delivery</div>
              </div>
            </Link>
            
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Empathetic AI Software Delivery where human creativity meets AI acceleration. 
              From Thoughtworks consulting to beatboxing championships – bridging worlds to build yours.
            </p>
            
            <div className="flex items-center space-x-4">
              <Link 
                href="https://linkedin.com/in/shakeelbhamani"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://github.com/shakeelbhamani"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </Link>
              <Link 
                href="/contact"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group"
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    >
                      {link.name}
                      {link.external && (
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ShakTech. All rights reserved. Made with ❤️ and AI.
          </div>
          
          <div className="flex items-center space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <div className="flex items-center space-x-1">
              <span>Built with</span>
              <span className="text-gradient-primary font-semibold">Next.js 15</span>
              <span>&</span>
              <span className="text-gradient-primary font-semibold">AI</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer