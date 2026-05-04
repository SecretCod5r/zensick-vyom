import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";

export default function TermsOfService() {
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
              Terms of Service
            </h1>
            <p className="text-muted-foreground mb-12">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>

            <div className="space-y-10 text-foreground/90 leading-relaxed">
              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">1. Agreement to Terms</h2>
                <p>
                  By accessing or using the ZENSICK website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or engage our services.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">2. Services</h2>
                <p className="mb-4">
                  ZENSICK provides digital marketing and growth services including, but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Performance Marketing (Meta Ads, Google Ads, YouTube Ads)</li>
                  <li>Creative Ad Production (static, video, and AI-enhanced content)</li>
                  <li>Analytics & Reporting (GA4, Looker Studio, attribution tracking)</li>
                  <li>Website Development & SEO</li>
                  <li>Influencer Marketing</li>
                </ul>
                <p className="mt-4">
                  The specific scope of services will be outlined in individual project proposals or service agreements between ZENSICK and the client.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">3. Client Responsibilities</h2>
                <p className="mb-4">As a client, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide accurate and complete information necessary for service delivery</li>
                  <li>Grant timely access to required platforms, ad accounts, and analytics tools</li>
                  <li>Review and approve creative assets and campaign strategies within agreed timelines</li>
                  <li>Make payments as outlined in your service agreement</li>
                  <li>Comply with all applicable advertising platform policies</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">4. Intellectual Property</h2>
                <p className="mb-4">
                  Unless otherwise specified in a separate agreement:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Creative assets produced by ZENSICK remain our intellectual property until full payment is received</li>
                  <li>Upon full payment, clients receive a non-exclusive license to use deliverables for their business purposes</li>
                  <li>ZENSICK retains the right to showcase work in portfolios and case studies unless otherwise agreed</li>
                  <li>Client-provided materials (logos, brand assets, product images) remain the client's property</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">5. Payment Terms</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Payment terms are outlined in individual service proposals or contracts</li>
                  <li>Invoices are due within the timeframe specified in the agreement</li>
                  <li>Late payments may result in service suspension or late fees as outlined in the agreement</li>
                  <li>Ad spend budgets are separate from service fees and are billed directly by the advertising platforms or as agreed</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">6. Confidentiality</h2>
                <p>
                  Both parties agree to keep confidential any proprietary information shared during the engagement. This includes business strategies, campaign data, analytics insights, audience data, and any other sensitive information. This obligation survives the termination of our business relationship.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">7. Results & Guarantees</h2>
                <p>
                  While ZENSICK is committed to delivering high-quality, data-driven marketing services, we cannot guarantee specific results such as revenue targets, conversion rates, or return on ad spend. Digital marketing outcomes depend on numerous factors including market conditions, product-market fit, budget, and platform algorithms. We provide transparent reporting and strategic recommendations based on data.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
                <p>
                  To the fullest extent permitted by law, ZENSICK shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from the use of our services. Our total liability for any claim shall not exceed the total fees paid by the client in the three (3) months preceding the claim.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">9. Termination</h2>
                <p className="mb-4">
                  Either party may terminate the service relationship with written notice as specified in the service agreement. Upon termination:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>All outstanding payments become due immediately</li>
                  <li>Access to ZENSICK-managed accounts and tools will be transferred or revoked</li>
                  <li>Completed deliverables will be provided to the client upon final payment</li>
                  <li>Active ad campaigns will be paused or transferred as agreed</li>
                </ul>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">10. Third-Party Platforms</h2>
                <p>
                  Our services involve the use of third-party platforms (Google, Meta, Shopify, etc.). ZENSICK is not responsible for changes in platform policies, algorithm updates, account suspensions by third parties, or service outages beyond our control. We will promptly notify clients of any platform-related issues affecting their campaigns.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">11. Indemnification</h2>
                <p>
                  You agree to indemnify and hold ZENSICK harmless from any claims, damages, or expenses arising from your breach of these terms, your use of our services, or any content you provide to us that infringes on third-party rights.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">12. Governing Law</h2>
                <p>
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising from these terms shall be resolved through good-faith negotiation, and if necessary, through the appropriate legal channels.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">13. Changes to These Terms</h2>
                <p>
                  ZENSICK reserves the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the revised terms.
                </p>
              </section>

              <section>
                <h2 className="font-display text-2xl font-semibold mb-4">14. Contact Us</h2>
                <p>
                  For questions about these Terms of Service, please contact us at:
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
