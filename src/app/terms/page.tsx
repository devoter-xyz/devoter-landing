import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with back link */}
      <div className="border-b">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Last updated: August 18, 2025
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="mb-4">
              By accessing and using Devoter (&quot;the Service&quot;), you
              accept and agree to be bound by the terms and provision of this
              agreement.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              2. Description of Service
            </h2>
            <p className="mb-4">
              Devoter is a Web3 platform that empowers communities and projects
              through token-weighted voting mechanisms. Our service provides:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Token-weighted voting systems</li>
              <li>Community governance tools</li>
              <li>Project management features</li>
              <li>Integration with Web3 technologies</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              3. User Responsibilities
            </h2>
            <p className="mb-4">As a user of Devoter, you agree to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Provide accurate and complete information when creating an
                account
              </li>
              <li>
                Maintain the security of your wallet and account credentials
              </li>
              <li>
                Use the service in compliance with all applicable laws and
                regulations
              </li>
              <li>
                Not engage in any fraudulent, abusive, or illegal activities
              </li>
              <li>Respect the rights and property of other users</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              4. Web3 and Blockchain Considerations
            </h2>
            <p className="mb-4">
              By using Devoter, you acknowledge and understand that:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Blockchain transactions are irreversible</li>
              <li>
                You are responsible for managing your own private keys and
                wallet security
              </li>
              <li>
                Network fees (gas fees) may apply to blockchain transactions
              </li>
              <li>Token values can be volatile and may fluctuate</li>
              <li>
                Smart contract risks exist and should be understood before
                participation
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              5. Voting and Governance
            </h2>
            <p className="mb-4">When participating in token-weighted voting:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Your voting power is determined by your token holdings</li>
              <li>
                Votes are recorded on the blockchain and cannot be changed after
                submission
              </li>
              <li>
                You are responsible for understanding the implications of your
                votes
              </li>
              <li>
                Participation in governance does not guarantee any financial
                returns
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Privacy and Data</h2>
            <p className="mb-4">
              We respect your privacy and are committed to protecting your
              personal information. Our data practices include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Minimal collection of personal data</li>
              <li>Secure storage of any collected information</li>
              <li>No sale of user data to third parties</li>
              <li>Transparency in our data usage practices</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              7. Limitation of Liability
            </h2>
            <p className="mb-4">
              Devoter provides the service &quot;as is&quot; without warranties
              of any kind. We are not liable for:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Any losses resulting from blockchain network issues</li>
              <li>Smart contract vulnerabilities or exploits</li>
              <li>Token value fluctuations</li>
              <li>Third-party integrations or services</li>
              <li>User error or misuse of the platform</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              8. Modifications to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify these terms at any time. Users will
              be notified of significant changes through:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>Email notifications (if provided)</li>
              <li>Platform announcements</li>
              <li>Updates to this page with revised dates</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Termination</h2>
            <p className="mb-4">
              We may terminate or suspend access to our service immediately,
              without prior notice, for conduct that we believe violates these
              terms or is harmful to other users, us, or third parties.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">
              10. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please
              contact us at:
            </p>
            <p className="mb-4">
              Email:{" "}
              <a
                href="mailto:support@devoter.xyz"
                className="text-primary hover:text-primary/80"
              >
                support@devoter.xyz
              </a>
            </p>
          </section>

          <div className="mt-12 p-6 bg-accent/10 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>Disclaimer:</strong> This is a demo Terms of Service page
              created for demonstration purposes. For a production application,
              please consult with legal professionals to ensure compliance with
              applicable laws and regulations in your jurisdiction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
