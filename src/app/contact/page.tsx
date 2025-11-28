import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import ContactContent from "@/components/contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Devoter - Reach Out for Support & Inquiries",
  description:
    "Connect with the Devoter team for prompt support, partnership opportunities, or general inquiries. We're here to assist you.",
  openGraph: {
    title: "Contact Devoter - Reach Out for Support & Inquiries",
    description:
      "Connect with the Devoter team for prompt support, partnership opportunities, or general inquiries. We're here to assist you.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ContactContent />
      <Footer />
    </main>
  );
}
