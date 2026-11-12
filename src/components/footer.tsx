import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerSections: Array<{ title: string; links: Array<{ name: string; href: string; external?: boolean }> }> = [
    {
      title: "Portfolio",
      links: [
        { name: "Prelive", href: "/portfolio#prelive" },
        { name: "Alaap", href: "/portfolio#alaap" },
        { name: "Tack", href: "/portfolio#tack" },
        { name: "VeryGoodMelon", href: "/portfolio#verygoodmelon" },
        { name: "Arr Suite MCP", href: "/portfolio#arr-suite-mcp" }
      ]
    },
    {
      title: "Studio",
      links: [
        { name: "Services", href: "/services" },
        { name: "Pricing", href: "/pricing" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Elsewhere",
      links: [
        { name: "GitHub", href: "https://github.com/shaktech786", external: true },
        { name: "LinkedIn", href: "https://linkedin.com/in/shakeelbhamani", external: true },
        { name: "TEDx talk and music", href: "https://linktr.ee/shakbbx", external: true }
      ]
    }
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800" role="contentinfo" aria-label="Site footer">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <Image
                src="/shaktech-logo.png"
                alt="ShakTech Logo"
                width={40}
                height={40}
                className="rounded-lg"
              />
              <div>
                <span className="text-xl font-bold text-white">ShakTech Labs</span>
                <div className="text-xs text-gray-400 -mt-1">Product engineering studio</div>
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed mb-4 max-w-md">
              A founder-led product studio: a Staff Engineer directing AI agents to design, build and run complete products.
            </p>

            <p className="text-sm text-gray-300 mb-6">
              Atlanta, Georgia ·{" "}
              <a href="mailto:hi@shak-tech.com" className="text-indigo-400 underline hover:text-indigo-300">hi@shak-tech.com</a>
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
                href="mailto:hi@shak-tech.com"
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-indigo-600 text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                aria-label="Email Shakeel"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h2 className="text-white font-semibold mb-4" id={`footer-${section.title.toLowerCase()}`}>{section.title}</h2>
              <ul className="space-y-3" aria-labelledby={`footer-${section.title.toLowerCase()}`}>
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center group py-1"
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
            © {currentYear} ShakTech Labs. All rights reserved.
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer