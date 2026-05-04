import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <div className="space-y-10 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  ZENSICK ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our marketing services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">2. Information We Collect</h2>
                <h3 className="font-display text-lg font-medium mb-2 text-foreground/80">Personal Information</h3>
                <p className="mb-4">When you fill out a contact form, schedule a call, or engage with us, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                  <li>Budget range and project details</li>
                </ul>

                <h3 className="font-display text-lg font-medium mb-2 mt-6 text-foreground/80">Automatically Collected Information</h3>
                <p className="mb-4">When you browse our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>IP address and browser type</li>
                  <li>Device information and operating system</li>
                  <li>Pages visited, time spent, and referral source</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
                <p className="mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Respond to your inquiries and provide our services</li>
                  <li>Send you project updates, reports, and relevant communications</li>
                  <li>Improve our website experience and service offerings</li>
                  <li>Analyze website traffic and user behavior for optimization</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">4. Cookies & Tracking</h2>
                <p className="mb-4">
                  We use cookies and similar technologies (such as Google Analytics 4, Meta Pixel, and Google Tag Manager) to understand how visitors interact with our website. These tools help us measure campaign performance and improve user experience.
                </p>
                <p>
                  You can control cookie preferences through your browser settings. Disabling cookies may affect certain features of our website.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">5. Third-Party Services</h2>
                <p className="mb-4">
                  We may share your information with trusted third-party service providers who assist us in operating our business, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Analytics platforms (Google Analytics, Looker Studio)</li>
                  <li>Advertising platforms (Google Ads, Meta Ads)</li>
                  <li>Communication tools (Calendly, WhatsApp Business)</li>
                  <li>Email service providers</li>
                </ul>
                <p className="mt-4">
                  These providers are contractually obligated to protect your data and use it only for the purposes we specify.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">6. Data Retention</h2>
                <p>
                  We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, or as required by law. Contact form submissions and client data are retained for the duration of our business relationship and for a reasonable period thereafter.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">7. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information, including encryption, secure servers, and access controls. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">8. Your Rights</h2>
                <p className="mb-4">Depending on your jurisdiction, you may have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Access the personal data we hold about you</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt out of marketing communications</li>
                  <li>Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact us at{" "}
                  <a href="mailto:connect@zensick.com" className="text-primary hover:underline">
                    connect@zensick.com
                  </a>.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">9. Children's Privacy</h2>
                <p>
                  Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have collected data from a minor, please contact us immediately.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">10. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">11. Contact Us</h2>
                <p>
                  If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p className="mt-4 text-muted-foreground">
                  <strong className="text-foreground">ZENSICK</strong><br />
                  Email:{" "}
                  <a href="mailto:connect@zensick.com" className="text-primary hover:underline">
                    connect@zensick.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
