import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import PrivacyPolicyContent from "@/components/legal/PrivacyPolicyContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Devoter",
  description:
    "Devoter's privacy policy - how we collect, use, and protect your information.",
  openGraph: {
    title: "Privacy Policy | Devoter",
    description:
      "Devoter's privacy policy - how we collect, use, and protect your information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <PrivacyPolicyContent />
      <Footer />
    </main>
  );
}
