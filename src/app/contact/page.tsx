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
    url: "https://www.devoter.xyz/contact",
    siteName: "Devoter",
    images: [
      {
        url: "https://www.devoter.xyz/interface/devoter-1.png",
        width: 1200,
        height: 630,
        alt: "Devoter Social Image",
      },
    ],
    locale: "en_US",
    type: "website",
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
