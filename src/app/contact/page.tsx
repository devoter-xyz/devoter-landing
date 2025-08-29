import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import ContactContent from "@/components/contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Devoter",
  description:
    "Get in touch with the Devoter team. We're here to help with any questions or feedback.",
  openGraph: {
    title: "Contact Us | Devoter",
    description:
      "Get in touch with the Devoter team. We're here to help with any questions or feedback.",
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
