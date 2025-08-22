import React from "react"
import { Metadata } from "next"
import Footer from "@/components/footer"
import { Shield, Lock, Eye, Database, Globe, UserCheck, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Privacy Policy - ShakTech",
  description: "How ShakTech collects, uses, and protects your personal information.",
}

const PrivacyPage = () => {
  const lastUpdated = "January 1, 2024"

  return (
    <main className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-primary-900 via-primary-950 to-accent-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-diagonal-lines" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-primary-900/30 px-4 py-2 rounded-full border border-primary-700 mb-8">
            <Lock className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              Your Privacy Matters
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Privacy <span className="text-gradient-creative">Policy</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Transparent about how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-primary-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-invert max-w-none">
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-primary-900/30 border border-primary-700 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-primary-400 mr-3" />
                Introduction
              </h2>
              <p className="text-gray-300 leading-relaxed">
                ShakTech ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we 
                collect, use, disclose, and safeguard your information when you use our website and services. Please read this 
                privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access our services.
              </p>
            </div>

            {/* Information We Collect */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Database className="w-6 h-6 text-accent-400 mr-3" />
                1. Information We Collect
              </h2>
              
              <h3 className="text-xl font-semibold text-white mb-3">1.1 Information You Provide</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We collect information you provide directly to us, including:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                <li>Name and contact information (email, phone number)</li>
                <li>Company name and job title</li>
                <li>Project requirements and business information</li>
                <li>Payment and billing information (processed securely through third-party providers)</li>
                <li>Communications and correspondence with us</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">1.2 Information Collected Automatically</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                When you visit our website, we automatically collect certain information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-6">
                <li>IP address and device information</li>
                <li>Browser type and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
                <li>Date and time of visits</li>
              </ul>

              <h3 className="text-xl font-semibold text-white mb-3">1.3 Cookies and Tracking Technologies</h3>
              <p className="text-gray-300 leading-relaxed">
                We use cookies and similar tracking technologies to enhance your experience. You can control cookies through 
                your browser settings, but disabling them may limit website functionality.
              </p>
            </div>

            {/* How We Use Information */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Eye className="w-6 h-6 text-creative-400 mr-3" />
                2. How We Use Your Information
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Respond to comments, questions, and provide customer service</li>
                <li>Send technical notices, updates, and security alerts</li>
                <li>Communicate about services, offers, and events (with your consent)</li>
                <li>Monitor and analyze usage patterns and trends</li>
                <li>Detect, prevent, and address technical issues and fraud</li>
                <li>Comply with legal obligations and enforce our terms</li>
                <li>Protect the rights, property, and safety of ShakTech and others</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <UserCheck className="w-6 h-6 text-primary-400 mr-3" />
                3. Information Sharing and Disclosure
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information. We may share your information in the following situations:
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Service Providers</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may share information with third-party vendors who perform services on our behalf, such as payment processing, 
                data analysis, email delivery, hosting services, and customer service.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">3.2 Legal Requirements</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                We may disclose information if required by law or in response to valid requests by public authorities, including 
                to meet national security or law enforcement requirements.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">3.3 Business Transfers</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                In the event of a merger, acquisition, or sale of assets, your information may be transferred to the successor entity.
              </p>

              <h3 className="text-xl font-semibold text-white mb-3">3.4 Consent</h3>
              <p className="text-gray-300 leading-relaxed">
                We may share information with your consent or at your direction.
              </p>
            </div>

            {/* Data Security */}
            <div className="mb-12 p-6 bg-accent-950/20 border border-accent-900/50 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Lock className="w-6 h-6 text-accent-400 mr-3" />
                4. Data Security
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Encryption of data in transit and at rest</li>
                <li>Regular security assessments and updates</li>
                <li>Access controls and authentication requirements</li>
                <li>Employee training on data protection</li>
                <li>Secure development practices</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to 
                protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Data Retention
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, 
                unless a longer retention period is required by law. When we no longer need personal information, we securely 
                delete or anonymize it.
              </p>
            </div>

            {/* Your Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                6. Your Privacy Rights
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li><strong>Access:</strong> Request a copy of your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Withdrawal:</strong> Withdraw consent for processing (where applicable)</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, please contact us using the information provided below. We will respond to your request 
                within a reasonable timeframe and in accordance with applicable laws.
              </p>
            </div>

            {/* International Transfers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Globe className="w-6 h-6 text-creative-400 mr-3" />
                7. International Data Transfers
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Your information may be transferred to and processed in countries other than your country of residence. These 
                countries may have data protection laws different from your country. We take appropriate safeguards to ensure 
                your information remains protected in accordance with this Privacy Policy.
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Children's Privacy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal 
                information from children under 18. If we become aware that we have collected personal information from a child 
                under 18, we will take steps to delete such information.
              </p>
            </div>

            {/* California Privacy Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                9. California Privacy Rights (CCPA)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Right to know what personal information we collect, use, and disclose</li>
                <li>Right to delete personal information (with certain exceptions)</li>
                <li>Right to opt-out of the sale of personal information (we do not sell personal information)</li>
                <li>Right to non-discrimination for exercising privacy rights</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                To exercise these rights, California residents may contact us using the information below.
              </p>
            </div>

            {/* GDPR Rights */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                10. European Privacy Rights (GDPR)
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you are located in the European Economic Area (EEA) or United Kingdom, you have additional rights under the 
                General Data Protection Regulation (GDPR):
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>Legal basis for processing your personal data</li>
                <li>Right to lodge a complaint with supervisory authorities</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                We process personal data based on legitimate interests, contract performance, legal obligations, or consent.
              </p>
            </div>

            {/* Third-Party Links */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Third-Party Links and Services
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Our website may contain links to third-party websites and services. We are not responsible for the privacy 
                practices of these third parties. We encourage you to review their privacy policies before providing any information.
              </p>
            </div>

            {/* Updates to Policy */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                12. Updates to This Privacy Policy
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated 
                "Last Updated" date. We encourage you to review this Privacy Policy periodically. Continued use of our services 
                after changes constitutes acceptance of the updated policy.
              </p>
            </div>

            {/* Do Not Track */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                13. Do Not Track Signals
              </h2>
              <p className="text-gray-300 leading-relaxed">
                Some browsers have a "Do Not Track" feature that lets you tell websites you do not want your online activities 
                tracked. We currently do not respond to browser Do Not Track signals.
              </p>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-primary-900/30 border border-primary-700 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-primary-400 mr-3" />
                14. Contact Us
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                If you have questions, comments, or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="text-gray-300 space-y-2">
                <p><strong>ShakTech</strong></p>
                <p>Email: hi@shak-tech.com</p>
                <p>Atlanta, Georgia, United States</p>
              </div>
              <p className="text-gray-300 leading-relaxed mt-4">
                For privacy-specific inquiries, please include "Privacy Inquiry" in the subject line of your email.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default PrivacyPage