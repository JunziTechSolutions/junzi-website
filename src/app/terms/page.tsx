import React from 'react';
import Header from "@/components/landing/layout/header";
import Footer from "@/components/landing/layout/footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f5f6fa]">
      <Header />
      <main className="flex-1 flex justify-center items-start pt-40">
        <div className="w-full max-w-4xl shadow-none rounded-none px-12 py-12 mb-16" style={{fontFamily: 'Segoe UI, Arial, sans-serif'}}>
          <div className="w-full">
            <h1
              style={{
                fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif',
                fontWeight: 500,
                fontStyle: 'normal',
                fontSize: '48px',
                lineHeight: '54px',
                letterSpacing: '-1px'
              }}
              className="mb-8 text-left text-black"
            >
              Terms and Conditions – Junzi Tech Solutions
            </h1>
            <p className="text-sm text-gray-500 mb-8 text-left" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              Last updated: July 8, 2025
            </p>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              Welcome to Junzi Tech Solutions. These Terms and Conditions ("Terms") govern your access and use of our development services, websites, and related platforms (collectively, the "Service"). By using the Service, you agree to these Terms and our Privacy Policy.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">1. Use of Services</h2>
            <p className="mb-4 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              You must be 18 or older to use our Service. You are responsible for maintaining the confidentiality of your account and for all activities under it. You agree not to use the Service for any unlawful or abusive purposes.
            </p>
            <p className="mb-3 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>You also agree not to:</p>
            <ul className="list-disc pl-6 mb-6 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>Interfere with or disrupt the Service or servers</li>
              <li>Reverse engineer or copy any proprietary functionality, development workflows, or assets for competitive purposes</li>
              <li>Upload harmful, misleading, or infringing content</li>
            </ul>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">2. Intellectual Property</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              All content, features, code, design assets, documentation, and functionality delivered as part of our development work (excluding client-provided assets) are the property of Junzi Tech Solutions LLC or its licensors. You are granted a limited, non-transferable license to use the deliverables for your internal or client-facing business use, as defined by your specific agreement.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">3. Client Content & Confidentiality</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              You retain ownership of all intellectual property you provide to us. By engaging with our development services, you grant us the right to use this material solely for the purposes of fulfilling the project scope. We maintain confidentiality over your data, IP, and project materials unless explicitly authorized otherwise.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">4. Payment & Project Engagement</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              All invoices and payments must follow the terms set out in your specific agreement or proposal. Unless otherwise stated, all payments are final and non-refundable. Work begins upon receipt of an agreed deposit or payment milestone.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">5. Disclaimers & Limitation of Liability</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              Our development services are delivered "as is" based on the defined scope. Junzi Tech Solutions disclaims all implied warranties, including merchantability and fitness for a particular purpose. We are not liable for indirect or consequential damages, including loss of profits, data, or opportunity.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">6. Termination</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              We reserve the right to suspend or terminate ongoing work or access to platforms if payment is not received, or if you violate these Terms or any project agreement. Upon termination, all licenses granted to you will cease unless otherwise agreed in writing.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">7. Governing Law & Dispute Resolution</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              These Terms are governed by the laws of the Commonwealth of Massachusetts. Any disputes shall be resolved under the exclusive jurisdiction of the state or federal courts located in Boston, MA.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">8. Changes to Terms</h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              We may modify these Terms at any time. We will notify clients of material changes through the Service or email. Continued engagement with our services after changes implies acceptance.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">9. Contact</h2>
            <p className="mb-4 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>For any questions or concerns about these Terms, please contact:</p>
            <div className="mb-8">
              <p className="mb-1" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><strong>Junzi Tech Solutions LLC</strong></p>
              <p className="mb-1" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>227 Marlborough St, Apt 9</p>
              <p className="mb-1" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>Boston, MA 02116</p>
              <p style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>Email: <a href="mailto:legal@junzitechsolutions.com" className="text-blue-600 hover:text-blue-800">legal@junzitechsolutions.com</a></p>
            </div>

            <div className="border-t pt-6 mt-8">
              <p className="text-sm text-gray-500 text-center" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
                © 2025 Junzi Tech Solutions LLC. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 