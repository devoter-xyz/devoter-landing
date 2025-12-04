import type { Metadata } from "next";
import { Kumbh_Sans } from "next/font/google";
import "./globals.css";

const kumbhSans = Kumbh_Sans({
  subsets: ["latin"],
  variable: "--font-kumbh-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://devoter.xyz"),
  alternates: {
    canonical: "/",
  },
  title: "Devoter",
  description:
    "DEVoter is an open-source voting platform that bridges web3 repository maintainers with the ScoutGame ecosystem. We enable community-driven discovery and validation of promising open-source projects through token-weighted voting.",
  icons: {
    icon: "/favicon.svg",
  },
  keywords: [
    "Devoter",
    "ScoutGame",
    "open-source",
    "voting",
    "web3",
    "blockchain",
    "decentralized",
    "application",
    "dapp",
    "ethereum",
    "solana",
    "polygon",
    "optimism",
    "arbitrum",
    "base",
    "zksync",
    "gitcoin",
    "dorahacks",
    "giveth",
    "clarity",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devoter.xyz",
    title: "Devoter",
    description:
      "An open-source voting platform that bridges web3 repository maintainers with the ScoutGame ecosystem.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Devoter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devoter",
    description:
      "An open-source voting platform that bridges web3 repository maintainers with the ScoutGame ecosystem.",
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "Devoter",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kumbhSans.variable} antialiased`}>
        <main id="main-content" tabIndex={-1}>{children}</main>
      </body>
    </html>
  );
}
