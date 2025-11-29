import Navbar from "@/components/Navbar";
import Footer from "@/components/landing/Footer";
import dynamic from "next/dynamic";
import { changelogData } from "@/lib/changelogData";

const ChangelogContent = dynamic(() => import("@/components/changelog/ChangelogContent"), { ssr: true });
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const latestEntry = changelogData[0] ?? { title: 'Changelog', description: 'No entries yet' };

  return {
    title: "Changelog | Devoter",
    description: latestEntry.description,
    openGraph: {
      title: `Changelog | ${latestEntry.title}`,
      description: latestEntry.description,
      url: "https://www.devoter.xyz/changelog", // Replace with your actual URL
      type: "website",
      images: [
        {
          url: "https://www.devoter.xyz/logo.png", // Replace with your actual image
          alt: "Devoter Logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Changelog | ${latestEntry.title}`,
      description: latestEntry.description,
      images: ["https://www.devoter.xyz/logo.png"], // Replace with your actual image
    },
  };
}

export default function ChangelogPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.devoter.xyz/",
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Changelog",
            "item": "https://www.devoter.xyz/changelog",
          },
        ],
      },
      {
        "@type": "CollectionPage",
        "name": "Devoter Changelog",
        "description": "Stay updated with the latest features, improvements, and bug fixes in Devoter.",
        "url": "https://www.devoter.xyz/changelog",
        "about": {
          "@type": "Thing",
          "name": "Devoter Platform",
        },
        "hasPart": changelogData.map((entry, index) => ({
          "@type": "SoftwareRelease",
          "name": `Version ${entry.version}: ${entry.title}`,
          "description": entry.description,
          "url": `https://www.devoter.xyz/changelog#${entry.version.replace(/\./g, '-')}`,
          "datePublished": entry.date,
          "releaseNotes": entry.changes.map(change => change.description).join(". "),
          "softwareRequirements": "Web browser",
          "itemReviewed": {
            "@type": "SoftwareApplication",
            "name": "Devoter",
            "operatingSystem": "Any",
            "applicationCategory": "DeveloperApplication",
          },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      <ChangelogContent changelogEntries={changelogData} />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </main>
  );
}
