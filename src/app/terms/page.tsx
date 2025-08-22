import React from "react"
import { Metadata } from "next"
import Footer from "@/components/footer"
import { Shield, AlertCircle, Scale, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Terms of Service - ShakTech",
  description: "Terms and conditions for using ShakTech's AI-first software services.",
}

const TermsPage = () => {
  const lastUpdated = "January 1, 2024"

  return (
    <main className="min-h-screen bg-primary-950">
      {/* Hero Section */}
      <section className="py-24 pt-40 bg-gradient-to-br from-primary-900 via-primary-950 to-accent-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center space-x-2 bg-primary-900/30 px-4 py-2 rounded-full border border-primary-700 mb-8">
            <Scale className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">
              Legal Agreement
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
            Terms of <span className="text-gradient-creative">Service</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-sm text-gray-400 mt-4">
            Last Updated: {lastUpdated}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-primary-950/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-dots-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="prose prose-invert max-w-none">
            
            {/* Agreement to Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <FileText className="w-6 h-6 text-primary-400 mr-3" />
                1. Agreement to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                By accessing or using ShakTech&apos;s services (&ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). 
                If you disagree with any part of these terms, you do not have permission to access our Services.
              </p>
              <p className="text-gray-300 leading-relaxed">
                These Terms apply to all visitors, users, and others who access or use the Service, including but not limited to 
                AI strategy consulting, software development, and training services.
              </p>
            </div>

            {/* Services Description */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                2. Description of Services
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ShakTech provides AI-first software consulting, development, and training services. Our services include:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>AI Strategy Consulting and Roadmap Development</li>
                <li>Custom Software Development and Implementation</li>
                <li>Team Training and Enablement Programs</li>
                <li>Technical Mentorship and Code Reviews</li>
                <li>Digital Transformation Consulting</li>
              </ul>
              <p className="text-gray-300 leading-relaxed">
                The specific scope, deliverables, and terms for each engagement will be defined in a separate Statement of Work (SOW) 
                or service agreement.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                3. Intellectual Property Rights
              </h2>
              <h3 className="text-xl font-semibold text-white mb-3">3.1 Client Work</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Unless otherwise specified in writing, all deliverables created specifically for a client under a paid engagement 
                become the property of the client upon full payment. This includes custom code, documentation, and designs created 
                exclusively for the client&apos;s project.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.2 Pre-existing IP</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                ShakTech retains all rights to pre-existing intellectual property, including but not limited to frameworks, 
                methodologies, tools, and generic code libraries that were not created specifically for the client&apos;s project.
              </p>
              
              <h3 className="text-xl font-semibold text-white mb-3">3.3 Open Source</h3>
              <p className="text-gray-300 leading-relaxed">
                Some deliverables may incorporate open-source software. Such software is governed by its respective license terms, 
                which will be communicated to the client.
              </p>
            </div>

            {/* Payment Terms */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                4. Payment Terms
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Payment terms, including fees, payment schedule, and late payment penalties, will be specified in the relevant 
                SOW or service agreement. Unless otherwise agreed:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>A 50% deposit is required before work commences</li>
                <li>Remaining balance is due upon completion or as per agreed milestones</li>
                <li>Payments are non-refundable except as required by law</li>
                <li>Late payments may incur a 1.5% monthly interest charge</li>
                <li>Work may be suspended for overdue accounts</li>
              </ul>
            </div>

            {/* Confidentiality */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                5. Confidentiality
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Both parties agree to maintain the confidentiality of any proprietary or confidential information disclosed during 
                the engagement. This obligation survives the termination of these Terms for a period of five (5) years.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Confidential information does not include information that: (a) is or becomes publicly available through no breach 
                by the receiving party; (b) was rightfully known by the receiving party before disclosure; or (c) is independently 
                developed without use of confidential information.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12 p-6 bg-red-950/20 border border-red-900/50 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
                6. Limitation of Liability
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4 uppercase font-semibold">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4 mb-4">
                <li>SHAKTECH&apos;S TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID FOR THE SPECIFIC SERVICES GIVING RISE TO THE CLAIM</li>
                <li>SHAKTECH SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES</li>
                <li>SHAKTECH SHALL NOT BE LIABLE FOR LOSS OF PROFITS, DATA, BUSINESS, OR GOODWILL</li>
                <li>THESE LIMITATIONS APPLY REGARDLESS OF THE THEORY OF LIABILITY</li>
              </ul>
            </div>

            {/* Warranties and Disclaimers */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                7. Warranties and Disclaimers
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                ShakTech warrants that services will be performed in a professional and workmanlike manner consistent with industry 
                standards. However:
              </p>
              <p className="text-gray-300 leading-relaxed uppercase font-semibold">
                THE SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO 
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
              </p>
            </div>

            {/* Indemnification */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                8. Indemnification
              </h2>
              <p className="text-gray-300 leading-relaxed">
                You agree to indemnify, defend, and hold harmless ShakTech, its officers, directors, employees, and agents from 
                any claims, damages, losses, liabilities, and expenses (including attorney&apos;s fees) arising from your use of the 
                Services, violation of these Terms, or infringement of any third-party rights.
              </p>
            </div>

            {/* Termination */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                9. Termination
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Either party may terminate an engagement with 30 days written notice. Upon termination:
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2 ml-4">
                <li>Client shall pay for all work performed up to the termination date</li>
                <li>ShakTech will deliver all completed work and work in progress</li>
                <li>Both parties will return or destroy confidential information</li>
                <li>Provisions that by their nature should survive will remain in effect</li>
              </ul>
            </div>

            {/* Governing Law */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                10. Governing Law and Dispute Resolution
              </h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                These Terms shall be governed by the laws of the State of Georgia, United States, without regard to conflict of 
                law principles. Any disputes shall first be addressed through good faith negotiations.
              </p>
              <p className="text-gray-300 leading-relaxed">
                If negotiations fail, disputes shall be resolved through binding arbitration in Atlanta, Georgia, under the rules 
                of the American Arbitration Association. The prevailing party may recover reasonable attorney&apos;s fees.
              </p>
            </div>

            {/* Modifications */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-4">
                11. Modifications to Terms
              </h2>
              <p className="text-gray-300 leading-relaxed">
                ShakTech reserves the right to modify these Terms at any time. Material changes will be notified via email or 
                through the Services. Continued use of the Services after modifications constitutes acceptance of the updated Terms.
              </p>
            </div>

            {/* Contact Information */}
            <div className="p-6 bg-primary-900/30 border border-primary-700 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <Shield className="w-6 h-6 text-primary-400 mr-3" />
                12. Contact Information
              </h2>
              <p className="text-gray-300 leading-relaxed">
                For questions about these Terms of Service, please contact us at:
              </p>
              <div className="mt-4 text-gray-300">
                <p>ShakTech</p>
                <p>Email: hi@shak-tech.com</p>
                <p>Atlanta, Georgia, United States</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default TermsPage