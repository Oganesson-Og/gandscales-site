import { Metadata } from "next"

import { PageHero } from "@/components/sections/page-hero"
import { Card, CardContent } from "@/components/ui/card"
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_PHONE,
  WHATSAPP_NUMBER,
  generateWhatsAppUrl,
} from "@/lib/utils"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for G&T Scale Services.",
}

export default function TermsPage() {
  const effectiveDate = "29 December 2025"

  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Legal
          </span>
        }
        title="Terms of Service"
        description={
          <>
            Terms that apply to use of the website, online shop, bookings, and the customer portal.
          </>
        }
        showFloatingIcons={false}
      />

      <section className="container-wide py-16">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-8 sm:p-10">
            <div className="prose prose-invert max-w-none prose-p:text-steel-300 prose-li:text-steel-300 prose-headings:text-white">
              <h2>Terms of Service</h2>
              <p>
                <strong>Effective date:</strong> {effectiveDate}
                <br />
                <strong>Company:</strong> G &amp; T Scale Services (“we”, “us”, “our”)
                <br />
                <strong>Contact:</strong>{" "}
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> •{" "}
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>{COMPANY_PHONE}</a> •{" "}
                <a href={generateWhatsAppUrl(WHATSAPP_NUMBER)} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <br />
                <strong>Address:</strong> {COMPANY_ADDRESS}
              </p>

              <h2>1. Acceptance of these Terms</h2>
              <p>
                By accessing or using our website, online shop, customer portal, or services (including repairs and
                calibration bookings), you agree to these Terms of Service (“Terms”). If you do not agree, do not use
                the website or services.
              </p>

              <h2>2. Eligibility and accounts</h2>
              <ul>
                <li>You must be at least 18 years old (or have legal capacity) to create an account or place orders.</li>
                <li>
                  You are responsible for maintaining the confidentiality of your login credentials and for all
                  activities under your account.
                </li>
                <li>
                  We may suspend or terminate accounts if we reasonably suspect misuse, fraud, or violation of these
                  Terms.
                </li>
              </ul>

              <h2>3. Website and portal use</h2>
              <p>You agree not to:</p>
              <ul>
                <li>use the website unlawfully,</li>
                <li>interfere with security, access controls, or system integrity,</li>
                <li>upload malicious code,</li>
                <li>scrape or copy site content for commercial purposes without permission,</li>
                <li>submit false service requests, impersonate others, or misrepresent authority to act for a company.</li>
              </ul>

              <h2>4. Products and online shop</h2>
              <h3>4.1 Product information</h3>
              <p>
                We try to keep product descriptions, availability, and prices accurate. However, errors can occur. We
                reserve the right to correct errors and cancel affected orders where necessary.
              </p>
              <h3>4.2 Orders and acceptance</h3>
              <p>
                An order is an offer to purchase. We accept the order when we confirm shipment/delivery or otherwise
                confirm acceptance. We may refuse or cancel orders for reasons including stock unavailability,
                suspected fraud, or pricing errors.
              </p>
              <h3>4.3 Pricing and payments</h3>
              <p>
                Prices are shown in the displayed currency. Payments may be processed through third-party providers
                (e.g., Paynow). You agree to provide accurate billing details.
              </p>
              <h3>4.4 Delivery</h3>
              <p>
                Delivery timelines are estimates. If delivery fails due to incorrect address details you provided, you
                may be responsible for re-delivery costs.
              </p>

              <h2>5. Repairs, maintenance, installation, and calibration services</h2>
              <h3>5.1 Booking and site readiness</h3>
              <p>For onsite services, you agree to:</p>
              <ul>
                <li>provide accurate site details and contact persons,</li>
                <li>ensure safe access to the equipment and work area,</li>
                <li>disclose any known hazards or site rules.</li>
              </ul>
              <h3>5.2 Quotes and approvals</h3>
              <p>
                Where required, we will provide a quote or estimate. Work may begin only after approval (unless
                emergency call-out terms apply).
              </p>
              <h3>5.3 Cancellations and rescheduling</h3>
              <p>
                You may cancel or reschedule service bookings by contacting us in advance. Late cancellations may
                attract a call-out fee where applicable.
              </p>
              <h3>5.4 Calibration certificates and compliance</h3>
              <p>
                Calibration outcomes depend on equipment condition, environment, and applicable standards. Certificates
                (where issued) reflect measurements and conditions at the time of calibration and are not a guarantee
                of future performance.
              </p>

              <h2>6. Returns, refunds, and consumer rights</h2>
              <p>
                We aim to handle returns fairly and in accordance with applicable consumer protection laws. If goods
                are defective or fail to meet required standards, you may have rights to repair, replacement, or refund
                as provided by law.
              </p>
              <p>
                To request a return/refund, contact <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> with your
                order number, reason, and supporting photos if relevant. We may require inspection before issuing a
                refund or replacement.
              </p>

              <h2>7. Intellectual property</h2>
              <p>
                All content on this website (logos, text, images, product catalog structure, and software) is owned by
                or licensed to us. You may not reproduce or redistribute it for commercial purposes without written
                permission.
              </p>

              <h2>8. Third-party services and links (including WhatsApp)</h2>
              <p>
                Our site may link to or integrate with third-party platforms (e.g., WhatsApp, payment gateways). Your
                use of those services is governed by their terms. We are not responsible for third-party platforms.
              </p>

              <h2>9. Disclaimers</h2>
              <ul>
                <li>The website is provided on an “as is” and “as available” basis.</li>
                <li>We do not guarantee uninterrupted availability or that the site will be error-free.</li>
                <li>
                  Technical advice provided via chat/WhatsApp/email is general guidance; final responsibility for use
                  remains with you, especially in safety-critical environments.
                </li>
              </ul>

              <h2>10. Limitation of liability</h2>
              <p>To the maximum extent permitted by law:</p>
              <ul>
                <li>we are not liable for indirect, incidental, special, or consequential damages (e.g., lost profits, downtime),</li>
                <li>
                  our total liability for any claim related to products/services shall not exceed the amount paid by you
                  for the specific product/service giving rise to the claim.
                </li>
              </ul>
              <p>Nothing in these Terms limits liability where it cannot be excluded by law.</p>

              <h2>11. Indemnity</h2>
              <p>
                You agree to indemnify and hold us harmless from claims arising from your misuse of the website,
                violation of these Terms, or unlawful use of products/equipment.
              </p>

              <h2>12. Suspension and termination</h2>
              <p>
                We may suspend or terminate your access to the website/portal if you violate these Terms, we suspect
                fraud or illegal activity, or it is required for security or legal compliance.
              </p>

              <h2>13. Governing law and disputes</h2>
              <p>
                These Terms are governed by the laws of Zimbabwe. Disputes should first be raised with us at{" "}
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> to attempt resolution. If unresolved, disputes
                may be referred to the courts of Harare, unless applicable law provides otherwise.
              </p>

              <h2>14. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. The updated version will be posted on the website with a
                new effective date. Continued use means you accept the updated Terms.
              </p>

              <h2>15. Contact us</h2>
              <p>
                <strong>G &amp; T Scale Services</strong>
                <br />
                <strong>Email:</strong> <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>
                <br />
                <strong>Phone/WhatsApp:</strong>{" "}
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>{COMPANY_PHONE}</a> •{" "}
                <a href={generateWhatsAppUrl(WHATSAPP_NUMBER)} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
                <br />
                <strong>Address:</strong> {COMPANY_ADDRESS}
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}


