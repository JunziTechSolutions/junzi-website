import React from 'react';
import Header from "@/components/landing/layout/header";
import Footer from "@/components/landing/layout/footer";

export default function PrivacyPage() {
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
                lineHeight: '42px',
                letterSpacing: '-1px'
              }}
              className="mb-8 text-left text-black"
            >
              Privacy Policy for Junzi Tech Solutions
            </h1>
            <p className="text-sm text-gray-500 mb-8 text-left" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              Last updated: July 7, 2025
            </p>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              This Privacy Policy explains how Junzi Tech Solutions LLC ("Company", "we", "us", or "our") collects, uses, and discloses your information when you use our websites, products, and services ("Service"). By using our Service, you agree to the terms of this Privacy Policy.
            </p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 500 }} className="mt-12 mb-4 text-left text-black">
              1. Definitions
            </h2>
            <ul className="list-none pl-0 mb-8">
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Account:</span> A unique account created for you to access our Service.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Company:</span> Refers to Junzi Tech Solutions LLC, located at 227 Marlborough St, Apt 9, Boston, MA 02116.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Cookies:</span> Small data files stored on your device.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Device:</span> Any internet-connected device such as a phone, tablet, or computer.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Personal Data:</span> Any data that relates to an identified or identifiable person.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Service:</span> Refers to our websites and software products.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">Usage Data:</span> Automatically collected data such as device IP address, browser type, pages visited, and timestamps.</li>
              <li className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}><span className="font-bold">You:</span> The individual accessing the Service.</li>
            </ul>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              2. Types of Data Collected
            </h2>
            <h3 style={{ fontSize: '18px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-8 mb-2 text-left text-black">
              Personal Data
            </h3>
            <p className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We may collect:</p>
            <ul className="list-disc pl-6 mb-6 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Payment details (via third-party providers)</li>
              <li>Business or company name</li>
            </ul>
            <h3 style={{ fontSize: '18px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-8 mb-2 text-left text-black">
              Usage Data
            </h3>
            <p className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>Collected automatically when using the Service:</p>
            <ul className="list-disc pl-6 mb-6 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>IP address</li>
              <li>Device and browser type</li>
              <li>Pages visited</li>
              <li>Session duration</li>
            </ul>
            <h3 style={{ fontSize: '18px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-8 mb-2 text-left text-black">
              Third-Party Accounts
            </h3>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>If you sign in via third-party services (e.g. Google), we may collect publicly shared profile information and email address.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              3. How We Use Your Data
            </h2>
            <p className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We use your data to:</p>
            <ul className="list-disc pl-6 mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>Provide, operate, and maintain our Service</li>
              <li>Manage user accounts</li>
              <li>Improve performance and functionality</li>
              <li>Communicate updates, offers, or important changes</li>
              <li>Analyze user behavior to improve experience</li>
              <li>Enforce our terms and prevent fraud</li>
            </ul>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              4. Cookies and Tracking
            </h2>
            <p className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We use cookies to:</p>
            <ul className="list-disc pl-6 mb-4 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>Maintain sessions</li>
              <li>Personalize user experience</li>
              <li>Analyze traffic and usage patterns</li>
            </ul>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>You can opt out of cookies via your browser settings. Some features may not function properly without cookies.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              5. Sharing Your Data
            </h2>
            <p className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We may share your data:</p>
            <ul className="list-disc pl-6 mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>With service providers and partners under confidentiality agreements</li>
              <li>In corporate transactions such as mergers or acquisitions</li>
              <li>To comply with legal obligations</li>
              <li>With your explicit consent</li>
            </ul>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              6. Data Retention
            </h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We retain personal data only as long as necessary for the purposes outlined in this policy. Usage data may be kept longer for analytics and security.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              7. Data Security
            </h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We use industry-standard measures to protect your data, but no system is 100% secure. We recommend securing your own credentials and devices.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              8. Your Rights
            </h2>
            <p className="mb-2 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>You have the right to:</p>
            <ul className="list-disc pl-6 mb-4 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
              <li>Access your data</li>
              <li>Request correction or deletion</li>
              <li>Withdraw consent</li>
              <li>Lodge a complaint with your local data authority</li>
            </ul>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>To exercise these rights, contact us at: <a href="mailto:legal@junzitechsolutions.com" className="text-blue-600 hover:text-blue-800">legal@junzitechsolutions.com</a></p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              9. Children's Privacy
            </h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>Our Service is not intended for children under 13. We do not knowingly collect personal information from minors.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              10. External Links
            </h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We may link to external sites not controlled by us. We are not responsible for their content or privacy practices.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              11. Policy Updates
            </h2>
            <p className="mb-8 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>We may update this Privacy Policy. Updates will be posted here and, where appropriate, notified via email or within the Service.</p>

            <h2 style={{ fontSize: '36px', fontFamily: 'Space Grotesk, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 700 }} className="mt-12 mb-4 text-left text-black">
              Contact
            </h2>
            <p className="mb-4 text-left text-black" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>For questions about this policy, contact us:</p>
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
              <p className="text-sm text-gray-500 text-center mt-1" style={{fontFamily: 'Open Sans, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Arial, sans-serif', fontWeight: 400, fontSize: '16px'}}>
                Built with integrity in Boston.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
} 