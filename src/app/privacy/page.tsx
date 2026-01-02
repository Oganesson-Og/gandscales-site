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
  title: "Privacy Policy",
  description: "Privacy policy for G&T Scale Services.",
}

export default function PrivacyPage() {
  const effectiveDate = "29 December 2025"
  const website = "https://gandtscales.com"

  return (
    <div className="min-h-screen">
      <PageHero
        kicker={
          <span className="inline-block text-sm font-semibold text-brand-300 tracking-wider uppercase">
            Legal
          </span>
        }
        title="Privacy Policy"
        description={
          <>
            How we collect, use, and protect personal information across the website,
            online shop, bookings, and customer portal.
          </>
        }
        showFloatingIcons={false}
      />

      <section className="container-wide py-16">
        <Card className="border-white/10 bg-white/5">
          <CardContent className="p-8 sm:p-10">
            <div className="prose prose-invert max-w-none prose-p:text-steel-300 prose-li:text-steel-300 prose-headings:text-white">
              <h2>Privacy Policy</h2>
              <p>
                <strong>Effective date:</strong> {effectiveDate}
                <br />
                <strong>Company:</strong> G &amp; T Scale Services (“we”, “us”, “our”)
                <br />
                <strong>Website:</strong>{" "}
                <a href={website} target="_blank" rel="noreferrer">
                  {website}
                </a>
                <br />
                <strong>Contact:</strong> {COMPANY_ADDRESS} •{" "}
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a> •{" "}
                <a href={`tel:${COMPANY_PHONE.replace(/\s/g, "")}`}>{COMPANY_PHONE}</a> •{" "}
                <a href={generateWhatsAppUrl(WHATSAPP_NUMBER)} target="_blank" rel="noreferrer">
                  WhatsApp
                </a>
              </p>

              <h2>1. Overview</h2>
              <p>
                This Privacy Policy explains how we collect, use, disclose, store, and protect personal
                information when you:
              </p>
              <ul>
                <li>visit our website,</li>
                <li>create an account or use our customer portal,</li>
                <li>purchase products from our online shop,</li>
                <li>request repairs, maintenance, installation, or calibration services,</li>
                <li>communicate with us (including via WhatsApp, phone, email, or website forms).</li>
              </ul>
              <p>By using our website or services, you agree to the practices described in this Privacy Policy.</p>

              <h2>2. What personal information we collect</h2>

              <h3>2.1 Information you provide to us</h3>
              <ul>
                <li>
                  <strong>Identity &amp; contact details:</strong> full name, company name, job title, email
                  address, phone number, WhatsApp number.
                </li>
                <li>
                  <strong>Account details:</strong> username, password (stored in encrypted/hashed form), preferences.
                </li>
                <li>
                  <strong>Order details:</strong> items purchased, delivery/billing address, purchase history, VAT/tax
                  number (if applicable), PO number (if applicable).
                </li>
                <li>
                  <strong>Service request details:</strong> site location, equipment type/model/serial number, issue
                  descriptions, photos/videos, service history, technician notes and job completion confirmations.
                </li>
                <li>
                  <strong>Communications:</strong> messages you send to us (web forms, email, WhatsApp chats), call
                  notes, feedback, support requests.
                </li>
              </ul>

              <h3>2.2 Information collected automatically</h3>
              <ul>
                <li>
                  <strong>Device and usage data:</strong> IP address, browser type, device identifiers, operating
                  system, pages visited, referral URLs, and time spent on pages.
                </li>
                <li>
                  <strong>Cookies and similar technologies:</strong> used for site functionality, analytics, and
                  preferences (see Section 8).
                </li>
              </ul>

              <h3>2.3 Payment information</h3>
              <p>
                If we accept online payments, payments are processed by third-party payment processors. We typically
                receive confirmation of payment and limited transaction metadata, but we do not store your full card
                details on our servers (except where a payment provider explicitly permits tokenized storage).
              </p>

              <h2>3. Why we collect and use your information</h2>
              <p>We use personal information to:</p>
              <ul>
                <li>
                  <strong>Provide products and services:</strong> process orders, deliveries, bookings, repairs,
                  maintenance, calibration and certification.
                </li>
                <li>
                  <strong>Operate the customer portal:</strong> allow you to manage equipment records, requests,
                  certificates, invoices, and service history.
                </li>
                <li>
                  <strong>Communicate with you:</strong> confirmations, reminders, ticket updates, invoices, support
                  responses, and operational notices.
                </li>
                <li>
                  <strong>Improve operations and quality:</strong> analytics, troubleshooting, service performance, and
                  customer satisfaction.
                </li>
                <li>
                  <strong>Security and fraud prevention:</strong> protect accounts, detect abuse, and prevent
                  unauthorized access.
                </li>
                <li>
                  <strong>Legal and regulatory compliance:</strong> recordkeeping, tax, audits, and lawful requests by
                  authorities.
                </li>
                <li>
                  <strong>Marketing (where permitted):</strong> product updates, promotions, and service reminders. You
                  can opt out (Section 9).
                </li>
              </ul>

              <h2>4. Our lawful basis / justification for processing</h2>
              <p>Where applicable, we process personal information because:</p>
              <ul>
                <li>it is necessary to perform a contract with you (e.g., sales, bookings, repairs, calibration),</li>
                <li>you have given consent (e.g., certain marketing communications),</li>
                <li>we have a legitimate interest (e.g., improving services, securing systems),</li>
                <li>we must comply with a legal obligation (e.g., tax/accounting recordkeeping).</li>
              </ul>

              <h2>5. Who we share information with</h2>
              <p>We may share personal information with:</p>
              <ul>
                <li>service providers (hosting, analytics, email/SMS, CRM, support tools),</li>
                <li>payment processors and financial institutions to process payments,</li>
                <li>delivery/logistics partners to deliver purchased products,</li>
                <li>technicians/contractors (where necessary) to complete onsite work,</li>
                <li>professional advisers (accountants, auditors, legal counsel),</li>
                <li>authorities where required by law or to protect rights and safety.</li>
              </ul>
              <p>We do not sell personal information.</p>

              <h2>6. Data storage, international transfers, and security</h2>
              <h3>6.1 Storage</h3>
              <p>
                We store personal information on servers and systems operated by us and/or our service providers. Some
                providers may store data outside your country.
              </p>
              <h3>6.2 International transfers</h3>
              <p>
                If we transfer personal information across borders, we take steps to ensure an appropriate level of
                protection, including contractual safeguards and assessing the recipient’s protections.
              </p>
              <h3>6.3 Security</h3>
              <p>
                We use reasonable administrative, technical, and physical safeguards such as encryption in transit
                (HTTPS), access controls and role-based permissions, audit logs for sensitive operations, secure
                password hashing, backups and monitoring.
              </p>
              <p>No method of transmission or storage is 100% secure. You are responsible for keeping your login credentials confidential.</p>

              <h2>7. How long we keep information (retention)</h2>
              <p>
                We retain personal information only as long as necessary for the purposes in this Privacy Policy,
                including fulfilling orders and service requests, maintaining service history and certificate records,
                resolving disputes, and complying with tax/accounting and legal requirements. When information is no
                longer needed, we securely delete or anonymize it.
              </p>

              <h2>8. Cookies and analytics</h2>
              <p>
                We may use cookies and similar technologies to keep you signed in and maintain sessions, remember
                preferences, measure site performance and usage (analytics), and improve the site experience. You can
                control cookies via your browser settings. Disabling some cookies may affect site functionality.
              </p>

              <h2>9. Marketing communications</h2>
              <p>
                If we send marketing messages, you can opt out at any time by using the “unsubscribe” link (where
                provided), or contacting us at{" "}
                <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>. Even if you opt out, we may still send essential
                service/transaction messages (e.g., order confirmations, ticket updates).
              </p>

              <h2>10. Your rights and choices</h2>
              <p>
                Depending on applicable law, you may have rights to request access to your personal information, request
                correction of inaccurate data, request deletion (where lawful), object to or restrict certain
                processing, and withdraw consent (where processing is based on consent). To exercise rights, contact us
                at <a href={`mailto:${COMPANY_EMAIL}`}>{COMPANY_EMAIL}</a>. We may need to verify your identity.
              </p>

              <h2>11. Children’s privacy</h2>
              <p>
                Our website and services are not intended for children under 18. We do not knowingly collect personal
                information from children.
              </p>

              <h2>12. Third-party links</h2>
              <p>
                Our site may contain links to third-party websites (e.g., WhatsApp). Their privacy practices are
                governed by their own policies. We are not responsible for third-party sites.
              </p>

              <h2>13. Changes to this Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the updated version on our website
                with a new “Effective date”.
              </p>

              <h2>14. Contact us</h2>
              <p>
                For privacy questions, requests, or complaints, contact:
                <br />
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


