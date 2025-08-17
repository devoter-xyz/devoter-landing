import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import ChangelogContent from "@/components/changelog/ChangelogContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog | Devoter",
  description:
    "Stay updated with the latest features, improvements, and bug fixes in Devoter.",
  openGraph: {
    title: "Changelog | Devoter",
    description:
      "Stay updated with the latest features, improvements, and bug fixes in Devoter.",
  },
};

export default function ChangelogPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <ChangelogContent />
      <Footer />
    </main>
  );
}
