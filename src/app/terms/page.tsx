import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/landing/Footer";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Header with back link */}
      <div className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-2 font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-muted-foreground">
            Last updated: September 14, 2025
          </p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  1
                </span>
                Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Devoter (&quot;the Service&quot;), you
                accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  2
                </span>
                Description of Service
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Devoter is a Web3 platform that empowers communities and
                projects through token-weighted voting mechanisms. Our service
                provides:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Token-weighted voting systems</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Community governance tools</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Project management features</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span>Integration with Web3 technologies</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  3
                </span>
                User Responsibilities
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As a user of Devoter, you agree to:
              </p>
              <div className="space-y-3">
                {[
                  "Provide accurate and complete information when creating an account",
                  "Maintain the security of your wallet and account credentials",
                  "Use the service in compliance with all applicable laws and regulations",
                  "Not engage in any fraudulent, abusive, or illegal activities",
                  "Respect the rights and property of other users",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-secondary/5 rounded-lg border-l-4 border-secondary/20"
                  >
                    <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <span className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center text-accent font-bold">
                  4
                </span>
                Web3 and Blockchain Considerations
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                By using Devoter, you acknowledge and understand that:
              </p>
              <div className="space-y-3">
                {[
                  "Blockchain transactions are irreversible",
                  "You are responsible for managing your own private keys and wallet security",
                  "Network fees (gas fees) may apply to blockchain transactions",
                  "Token values can be volatile and may fluctuate",
                  "Smart contract risks exist and should be understood before participation",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-3 bg-accent/5 rounded-lg border-l-4 border-accent/30"
                  >
                    <span className="w-6 h-6 bg-accent/15 rounded-full flex items-center justify-center text-accent font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center gap-2">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                  5
                </span>
                Voting and Governance
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                When participating in token-weighted voting:
              </p>
              <div className="grid gap-3">
                {[
                  "Your voting power is determined by your token holdings",
                  "Votes are recorded on the blockchain and cannot be changed after submission",
                  "You are responsible for understanding the implications of your votes",
                  "Participation in governance does not guarantee any financial returns",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg border border-primary/10"
                  >
                    <span className="w-6 h-6 bg-primary/15 rounded-full flex items-center justify-center text-primary font-semibold text-sm">
                      ✓
                    </span>
                    <span className="text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-primary flex items-center gap-2">
                  <span className="w-7 h-7 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-sm">
                    6
                  </span>
                  Privacy and Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We respect your privacy and are committed to protecting your
                  personal information:
                </p>
                <div className="space-y-2">
                  {[
                    "Minimal collection of personal data",
                    "Secure storage of any collected information",
                    "No sale of user data to third parties",
                    "Transparency in our data usage practices",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl text-destructive flex items-center gap-2">
                  <span className="w-7 h-7 bg-destructive/10 rounded-full flex items-center justify-center text-destructive font-bold text-sm">
                    7
                  </span>
                  Limitation of Liability
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Devoter provides the service &quot;as is&quot; without
                  warranties. We are not liable for:
                </p>
                <div className="space-y-2">
                  {[
                    "Blockchain network issues",
                    "Smart contract vulnerabilities",
                    "Token value fluctuations",
                    "Third-party integrations",
                    "User error or misuse",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1.5 h-1.5 bg-destructive rounded-full"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-secondary flex items-center gap-2">
                  <span className="w-6 h-6 bg-secondary/10 rounded-full flex items-center justify-center text-secondary font-bold text-xs">
                    8
                  </span>
                  Modifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  We may modify these terms. Users will be notified through:
                </p>
                <div className="space-y-2">
                  {[
                    "Email notifications",
                    "Platform announcements",
                    "Page updates",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-sm"
                    >
                      <span className="w-1 h-1 bg-secondary rounded-full"></span>
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-destructive flex items-center gap-2">
                  <span className="w-6 h-6 bg-destructive/10 rounded-full flex items-center justify-center text-destructive font-bold text-xs">
                    9
                  </span>
                  Termination
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We may terminate or suspend access immediately for conduct
                  that violates these terms or harms users.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-2 hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-lg text-primary flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold text-xs">
                    10
                  </span>
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                  Questions about these Terms?
                </p>
                <a
                  href="mailto:support@devoter.xyz"
                  className="text-primary hover:text-primary/80 transition-colors text-sm font-medium"
                >
                  support@devoter.xyz
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Disclaimer */}
          <Card className="mt-12 bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 border-2 border-dashed border-accent/30">
            <CardContent className="pt-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-accent font-bold text-sm">!</span>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">
                    Demo Disclaimer
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    This is a demonstration Terms of Service page created for
                    showcase purposes. For production applications, please
                    consult with legal professionals to ensure compliance with
                    applicable laws and regulations in your jurisdiction.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
