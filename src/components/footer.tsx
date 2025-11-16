import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

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
        { name: "Open Source", href: "https://github.com/shaktech786", external: true }
      ]
    },
    {
      title: "Connect",
      links: [
        { name: "LinkedIn", href: "https://linkedin.com/in/shakeelbhamani", external: true },
        { name: "GitHub", href: "https://github.com/shaktech786", external: true },
        { name: "TEDx Talk", href: "https://linktr.ee/shakbbx", external: true },
        { name: "Contact", href: "/contact" }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/shaktech_logo.png"
                alt="ShakTech Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold text-white">ShakTech</span>
                <div className="text-xs text-gray-400 -mt-1">AI-First Software Delivery</div>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              Empathetic AI Software Delivery where human creativity meets AI acceleration.
              Building the future with enterprise expertise and creative innovation.
            </p>

            <p className="text-sm text-gray-300 mb-6 flex items-center">
              <span className="mr-2">🇺🇸</span>
              <span>Proudly serving clients from <strong>Atlanta, Georgia</strong></span>
            </p>

            <div className="flex items-center space-x-4" role="group" aria-label="Social media links">
              <Link
                href="https://linkedin.com/in/shakeelbhamani"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="https://github.com/shaktech786"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <Github className="w-5 h-5" aria-hidden="true" />
              </Link>
              <Link
                href="/contact"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Contact us via email"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4" id={`footer-${section.title.toLowerCase()}`}>{section.title}</h3>
              <ul className="space-y-3" aria-labelledby={`footer-${section.title.toLowerCase()}`}>
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
        <div className="border-t border-gray-800 mt-12 sm:mt-16 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {currentYear} ShakTech. All rights reserved. Made with ❤️ and AI in the USA.
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
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